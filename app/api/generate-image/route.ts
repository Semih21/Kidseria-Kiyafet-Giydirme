import { NextRequest, NextResponse } from 'next/server';
import { kieFetch } from '@/lib/kie';

type GenerateImageBody = {
  prompt: string;
  image_input?: string[];
  aspect_ratio?: string;
  resolution?: '1K' | '2K' | '4K';
  output_format?: 'png' | 'jpg';
  callBackUrl?: string;
};

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

  const { status, data } = await kieFetch('/api/v1/jobs/createTask', {
    method: 'POST',
    body: JSON.stringify({
      model: 'nano-banana-2',
      callBackUrl: body.callBackUrl,
      input: {
        prompt: body.prompt,
        image_input: body.image_input ?? [],
        aspect_ratio: body.aspect_ratio ?? 'auto',
        resolution: body.resolution ?? '1K',
        output_format: body.output_format ?? 'jpg',
      },
    }),
  });

  return NextResponse.json(data, { status });
}
