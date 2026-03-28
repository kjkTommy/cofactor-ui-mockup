import { createArticle } from '@/lib/content/helpers';

export const article = createArticle({
  slug: 'new-article-slug',
  title: 'Новый материал',
  topicSlug: 'balance',
  subtopic: 'Привычки',
  image: '/assets/window-spring.jpg',
  excerpt: 'Короткое описание для карточек и списков раздела.',
  publishedAt: '01 апреля 2026',
  readTime: '8 минут чтения',
  outline: ['Первый блок', 'Второй блок', 'Третий блок'],
  intro: [
    'Первый вводный абзац статьи.',
    'Второй вводный абзац статьи.',
  ],
  quote: 'Короткая врезка или важная мысль.',
  sections: [
    {
      heading: 'Первый подзаголовок',
      paragraphs: ['Абзац раздела.', 'Еще один абзац раздела.'],
    },
  ],
  gallery: ['/assets/p12.png', '/assets/p13.png'],
  relatedSlugs: [],
});
