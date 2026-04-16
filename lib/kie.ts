export const KIE_BASE_URL = 'https://api.kie.ai';
export const KIE_UPLOAD_BASE_URL = 'https://kieai.redpandaai.co';

export function getKieApiKey(): string {
  const key = process.env.KIE_API_KEY;
  if (!key) {
    throw new Error('KIE_API_KEY is not set. Add it to .env.local');
  }
  return key;
}

export async function kieFetch(path: string, init: RequestInit = {}) {
  const res = await fetch(`${KIE_BASE_URL}${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getKieApiKey()}`,
      ...(init.headers ?? {}),
    },
    cache: 'no-store',
  });
  const data = await res.json().catch(() => null);
  return { status: res.status, data };
}

/**
 * Upload a file (as base64) to Kie.ai file storage.
 * Returns the public file URL or null on failure.
 */
export async function kieUploadBase64(
  base64Data: string,
  fileName: string,
  uploadPath = 'catalog',
): Promise<string | null> {
  const res = await fetch(`${KIE_UPLOAD_BASE_URL}/api/file-base64-upload`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getKieApiKey()}`,
    },
    body: JSON.stringify({ base64Data, uploadPath, fileName }),
  });
  const data = await res.json().catch(() => null);
  return data?.data?.downloadUrl ?? data?.data?.fileUrl ?? null;
}
