import { NextRequest, NextResponse } from 'next/server';
import { kieFetch } from '@/lib/kie';

type KlingElement = {
  name: string;
  description: string;
  element_input_urls?: string[];
};

type MultiPromptShot = {
  prompt: string;
  duration: number;
};

type GenerateVideoBody = {
  prompt?: string;
  image_urls?: string[];
  sound?: boolean;
  duration?: string;
  aspect_ratio?: '16:9' | '9:16' | '1:1';
  mode?: 'std' | 'pro';
  multi_shots?: boolean;
  multi_prompt?: MultiPromptShot[];
  kling_elements?: KlingElement[];
  callBackUrl?: string;
};

export async function POST(req: NextRequest) {
  let body: GenerateVideoBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const multiShots = body.multi_shots ?? false;

  if (!multiShots && !body.prompt) {
    return NextResponse.json(
      { error: 'prompt is required when multi_shots is false' },
      { status: 400 },
    );
  }
  if (multiShots && (!body.multi_prompt || body.multi_prompt.length === 0)) {
    return NextResponse.json(
      { error: 'multi_prompt is required when multi_shots is true' },
      { status: 400 },
    );
  }

  const { status, data } = await kieFetch('/api/v1/jobs/createTask', {
    method: 'POST',
    body: JSON.stringify({
      model: 'kling-3.0/video',
      callBackUrl: body.callBackUrl,
      input: {
        prompt: body.prompt ?? '',
        image_urls: body.image_urls ?? [],
        sound: body.sound ?? (multiShots ? true : false),
        duration: body.duration ?? '5',
        aspect_ratio: body.aspect_ratio ?? '16:9',
        mode: body.mode ?? 'pro',
        multi_shots: multiShots,
        multi_prompt: body.multi_prompt ?? [],
        kling_elements: body.kling_elements ?? [],
      },
    }),
  });

  return NextResponse.json(data, { status });
}
