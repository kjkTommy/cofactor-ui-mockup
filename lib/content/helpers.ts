import type { Article, ArticleSeed } from '@/lib/content/types';

export function createArticle(seed: ArticleSeed): Article {
  return {
    author: 'Редакция КоФактор',
    href: `/articles/${seed.slug}`,
    ...seed,
  };
}
