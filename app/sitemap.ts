import type { MetadataRoute } from 'next';
import { articles } from '@/lib/content/articles';
import { getSiteUrl } from '@/lib/site-config';

const staticRoutes = [
  '/',
  '/about',
  '/archive',
  '/article',
  '/category',
  '/contacts',
  '/topic/about-woman-and-man',
  '/topic/healthy-food',
  '/topic/supplements',
  '/topic/non-medical-care',
  '/topic/buzzers',
  '/topic/peoples',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map((route) => ({
    url: getSiteUrl(route),
    changeFrequency: 'weekly' as const,
    priority: route === '/' ? 1 : 0.7,
  }));

  const articleEntries = articles.map((article) => ({
    url: getSiteUrl(article.href),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...articleEntries];
}
