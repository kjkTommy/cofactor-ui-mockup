import { createArticle } from '@/lib/content/helpers';

export const article = createArticle({
  slug: 'live-chlorella-benefits',
  title: 'Живая хлорелла',
  topicSlug: 'supplements',
  subtopic: 'Экспертные колонки',
  image: '/assets/43-3.jpg',
  excerpt: 'Невероятный спектр пользы: детоксикация, поддержка иммунитета и антиоксидантная защита.',
  publishedAt: '01 апреля 2026',
  outline: [
    'Зелёное Солнце',
    'Заявленные эффекты живой хлореллы',
    'QR-коды и предупреждение',
  ],
  intro: [
    'ЖИВАЯ ХЛОРЕЛЛА',
    'НЕВЕРОЯТНЫЙ СПЕКТР ПОЛЬЗЫ',
  ],
  quote: 'ИМЕЮТСЯ ПРОТИВОПОКАЗАНИЯ, НЕОБХОДИМА КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА',
  sections: [
    {
      heading: 'Зелёное Солнце',
      content: [
        {
          type: 'image',
          src: '/assets/43-2.png',
          alt: 'Девушка со стаканом зелёного напитка',
        },
      ],
    },
    {
      heading: 'Заявленные эффекты живой хлореллы',
      content: [
        {
          type: 'list',
          style: 'bullet',
          items: [
            'Детоксикация организма',
            'Ускоряет метоболизм',
            'Укрепляет иммунитет',
            'Мощный антиоксидант',
            'Нормализует уровень холестерина и сахара в крови',
          ],
        },
      ],
    },
  ],
  relatedSlugs: ['mare-milk-family-health', 'cryo-products-plant-potential'],
  helpfulLinks: {
    label: 'Ищите продукцию здесь',
    links: [
      {
        title: 'Telegram',
        href: 'https://t.me/chlorella_eco',
      }
    ],
  },
});
