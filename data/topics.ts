import { getArticlesByTopic } from '@/lib/content';

export type TopicItem = {
  title: string;
  href: string;
  image: string;
  subtopic: string;
  excerpt: string;
};

export type TopicDefinition = {
  slug: string;
  label: string;
  title: string;
  subtopics: string[];
};

export type Topic = TopicDefinition & {
  items: TopicItem[];
};

export const topicDefinitions: TopicDefinition[] = [
  {
    slug: 'about-woman-and-man',
    label: 'О женском и мужском',
    title: 'О женском и мужском',
    subtopics: ['Привычки', 'Режим', 'Фокус', 'Ритм дня'],
  },
  {
    slug: 'healthy-food',
    label: 'Еда с пользой',
    title: 'Еда с пользой',
    subtopics: ['Общее здоровье', 'Сон', 'Спорт', 'Экспертные колонки'],
  },
  {
    slug: 'restoration',
    label: 'Восстановление',
    title: 'Восстановление',
    subtopics: ['Сон', 'Баня', 'Отдых', 'Восстановительные практики'],
  },
  {
    slug: 'supplements',
    label: 'Бады +',
    title: 'Бады +',
    subtopics: ['Интервью', 'Опыт', 'Редакция', 'Личные тексты'],
  },
  {
    slug: 'buzzers',
    label: 'Зумеры',
    title: 'Зумеры',
    subtopics: ['Анализы', 'Маркеры', 'Профилактика', 'Советы'],
  },
  {
    slug: 'peoples',
    label: 'Люди',
    title: 'Люди',
    subtopics: ['Анализы', 'Маркеры', 'Профилактика', 'Советы'],
  },
];

export const topicNavLinks = topicDefinitions.map(({ slug, label }) => ({
  href: `/topic/${slug}`,
  label,
}));

export function getTopicLabel(topicSlug: string) {
  return topicDefinitions.find((topic) => topic.slug === topicSlug)?.label ?? topicSlug;
}

export function getTopicBySlug(slug: string): Topic | undefined {
  const topic = topicDefinitions.find((item) => item.slug === slug);

  if (!topic) {
    return undefined;
  }

  const items = getArticlesByTopic(slug).map((article) => ({
    title: article.title,
    href: article.href,
    image: article.image,
    subtopic: article.subtopic,
    excerpt: article.excerpt,
  }));

  return {
    ...topic,
    items,
  };
}
