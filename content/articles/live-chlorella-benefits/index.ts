import { createArticle } from '@/lib/content/helpers';

export const article = createArticle({
  slug: 'live-chlorella-benefits',
  title: 'Живая хлорелла',
  topicSlug: 'supplements',
  subtopic: 'Экспертные колонки',
  image: '/assets/portrait-2.jpg',
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
          src: '/assets/portrait-2.jpg',
          alt: 'Девушка со стаканом зелёного напитка',
          caption: 'ФОТО 1 — крупный портрет девушки со стаканом зелёного напитка, занимает правую часть страницы.',
        },
        {
          type: 'paragraph',
          text: 'ЛОГО 1 — круглый логотип «ЗЕЛЁНОЕ СОЛНЦЕ». Подпись по кругу логотипа: «ЗЕЛЁНОЕ СОЛНЦЕ» и «Живая клетка и микроводоросли».',
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
    {
      heading: 'QR-коды и предупреждение',
      content: [
        {
          type: 'gallery',
          caption: 'QR 1 — QR-код с иконкой Telegram, левая нижняя часть страницы. QR 2 — QR-код с иконкой VK, рядом справа.',
          images: [
            { src: '/assets/p51.png', alt: 'QR-код Telegram', label: 'QR 1' },
            { src: '/assets/p38.png', alt: 'QR-код VK', label: 'QR 2' },
          ],
        },
        {
          type: 'paragraph',
          text: 'Справа внизу вертикально стоит слово «РЕКЛАМА».',
        },
      ],
    },
  ],
  relatedSlugs: ['mare-milk-family-health', 'cryo-products-plant-potential'],
});
