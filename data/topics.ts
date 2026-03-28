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
  description: string;
  subtopics: string[];
};

export type Topic = TopicDefinition & {
  items: TopicItem[];
};

export const topicDefinitions: TopicDefinition[] = [
  {
    slug: 'balance',
    label: 'Баланс',
    title: 'Баланс',
    description:
      'Материалы о ритме жизни, восстановлении внутреннего равновесия и привычках, которые держатся не на усилии, а на системе.',
    subtopics: ['Привычки', 'Режим', 'Фокус', 'Ритм дня'],
  },
  {
    slug: 'health',
    label: 'Здоровье',
    title: 'Здоровье',
    description:
      'Раздел о превентивной медицине, повседневных практиках и понятных способах поддерживать тело в рабочем состоянии.',
    subtopics: ['Общее здоровье', 'Сон', 'Спорт', 'Экспертные колонки'],
  },
  {
    slug: 'restoration',
    label: 'Восстановление',
    title: 'Восстановление',
    description:
      'Материалы о сне, отдыхе, бане, восстановительных практиках и способах вернуть телу ресурс после перегруза.',
    subtopics: ['Сон', 'Баня', 'Отдых', 'Восстановительные практики'],
  },
  {
    slug: 'stories',
    label: 'Истории',
    title: 'Истории',
    description:
      'Личные и редакционные тексты о привычках, опыте, переменах и наблюдениях, которые собирают доверие к журналу.',
    subtopics: ['Интервью', 'Опыт', 'Редакция', 'Личные тексты'],
  },
  {
    slug: 'checkup',
    label: 'Чекап',
    title: 'Чекап',
    description:
      'Раздел про обследования, маркеры организма и то, как подойти к проверке состояния спокойно и без лишней тревоги.',
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
