import { notFound } from 'next/navigation';
import { TopicFeed } from '@/components/topic-feed';
import { getTopicBySlug, topicDefinitions } from '@/data/topics';

type TopicPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return topicDefinitions.map((topic) => ({ slug: topic.slug }));
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);

  if (!topic) {
    notFound();
  }

  return (
    <main className="shell section-gap page-stack">
      <TopicFeed topic={topic} />
    </main>
  );
}
