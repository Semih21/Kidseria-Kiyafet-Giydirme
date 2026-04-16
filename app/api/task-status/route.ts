import { NextRequest, NextResponse } from 'next/server';
import { kieFetch } from '@/lib/kie';

// Kie.ai's unified task detail endpoint. If Kie changes the path, update it here.
// Referenced in the OpenAPI spec as "/market/common/get-task-detail".
const TASK_DETAIL_PATH = '/api/v1/jobs/recordInfo';

export async function GET(req: NextRequest) {
  const taskId = req.nextUrl.searchParams.get('taskId');
  if (!taskId) {
    return NextResponse.json({ error: 'taskId is required' }, { status: 400 });
  }

  const { status, data } = await kieFetch(
    `${TASK_DETAIL_PATH}?taskId=${encodeURIComponent(taskId)}`,
    { method: 'GET' },
  );

  return NextResponse.json(data, { status });
}
