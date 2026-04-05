const FALLBACK_SITE_URL = 'https://кофактор.рф';

export const SITE_URL = new URL(
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || FALLBACK_SITE_URL,
);

export function getSiteUrl(path = '/') {
  return new URL(path, SITE_URL).toString();
}
