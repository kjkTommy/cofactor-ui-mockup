import type { MetadataRoute } from 'next';
import { articles } from '@/lib/content/articles';
import { getSiteUrl } from '@/lib/site-config';

export const dynamic = 'force-static';

const BUILD_LAST_MODIFIED = new Date();

const staticRoutes = [
  '/',
  '/about',
  '/archive',
  '/article',
  '/category',
  '/contacts',
  '/privacy',
  '/topic/about-woman-and-man',
  '/topic/healthy-food',
  '/topic/supplements',
  '/topic/non-medical-care',
  '/topic/buzzers',
  '/topic/peoples',
] as const;

const monthIndexes: Record<string, number> = {
  января: 0,
  февраля: 1,
  марта: 2,
  апреля: 3,
  мая: 4,
  июня: 5,
  июля: 6,
  августа: 7,
  сентября: 8,
  октября: 9,
  ноября: 10,
  декабря: 11,
};

function toCanonicalPath(path: string) {
  if (path === '/') {
    return path;
  }

  return path.endsWith('/') ? path : `${path}/`;
}

function parsePublishedAt(value: string) {
  const [day, month, year] = value.split(' ');
  const monthIndex = monthIndexes[month];

  if (!day || monthIndex === undefined || !year) {
    return BUILD_LAST_MODIFIED;
  }

  return new Date(Number(year), monthIndex, Number(day));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map((route) => ({
    url: getSiteUrl(toCanonicalPath(route)),
    lastModified: BUILD_LAST_MODIFIED,
    changeFrequency: 'weekly' as const,
    priority: route === '/' ? 1 : 0.7,
  }));

  const articleEntries = articles.map((article) => ({
    url: getSiteUrl(toCanonicalPath(article.href)),
    lastModified: parsePublishedAt(article.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...articleEntries];
}
