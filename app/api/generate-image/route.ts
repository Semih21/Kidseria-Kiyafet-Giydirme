import { NextRequest, NextResponse } from 'next/server';
import { kieFetch, kieUploadBase64 } from '@/lib/kie';
import { readFile } from 'fs/promises';
import { join } from 'path';

type GenerateImageBody = {
  prompt: string;
  image_input?: string[];
  aspect_ratio?: string;
  resolution?: '1K' | '2K' | '4K';
  output_format?: 'png' | 'jpg';
  callBackUrl?: string;
};

/**
 * Reads a local catalog image, uploads it to Kie.ai file storage,
 * and returns the public URL. Returns null on failure.
 */
async function uploadLocalImage(localPath: string): Promise<string | null> {
  // localPath is like "/catalog/17000.jpg"
  const filePath = join(process.cwd(), 'public', localPath);
  try {
    const buffer = await readFile(filePath);
    const ext = localPath.split('.').pop()?.toLowerCase() ?? 'jpg';
    const mime = ext === 'png' ? 'image/png' : 'image/jpeg';
    const base64 = `data:${mime};base64,${buffer.toString('base64')}`;
    const fileName = localPath.split('/').pop() ?? 'image.jpg';
    return await kieUploadBase64(base64, fileName);
  } catch {
    return null;
  }
}

export async function POST(req: NextRequest) {
  let body: GenerateImageBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  if (!body.prompt) {
    return NextResponse.json({ error: 'prompt is required' }, { status: 400 });
  }

  // Upload local images to Kie.ai and replace URLs
  const uploadedUrls: string[] = [];
  if (body.image_input && body.image_input.length > 0) {
    for (const url of body.image_input) {
      // Check if it's a local path (starts with / and not http)
      if (url.startsWith('/')) {
        const uploadedUrl = await uploadLocalImage(url);
        if (uploadedUrl) {
          uploadedUrls.push(uploadedUrl);
        }
      } else if (url.includes('localhost') || url.includes('127.0.0.1')) {
        // Extract the path from localhost URL
        try {
          const parsed = new URL(url);
          const uploadedUrl = await uploadLocalImage(parsed.pathname);
          if (uploadedUrl) {
            uploadedUrls.push(uploadedUrl);
          }
        } catch {
          // skip invalid URLs
        }
      } else {
        // Already a public URL, use as-is
        uploadedUrls.push(url);
      }
    }
  }

  const { status, data } = await kieFetch('/api/v1/jobs/createTask', {
    method: 'POST',
    body: JSON.stringify({
      model: 'nano-banana-2',
      callBackUrl: body.callBackUrl,
      input: {
        prompt: body.prompt,
        image_input: uploadedUrls,
        aspect_ratio: body.aspect_ratio ?? 'auto',
        resolution: body.resolution ?? '1K',
        output_format: body.output_format ?? 'jpg',
      },
    }),
  });

  return NextResponse.json(data, { status });
}
