export const KIE_BASE_URL = 'https://api.kie.ai';

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
