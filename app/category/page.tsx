import Link from 'next/link';
import { getCategoryFeed } from '@/lib/content';

export default function CategoryPage() {
  const { leadStory, stories } = getCategoryFeed();

  if (!leadStory) {
    return null;
  }

  return (
    <main className="shell section-gap page-stack">
      <section className="category-editorial">
        <div className="category-editorial__intro">
          <div className="editorial-kicker">
            <span>Рубрика</span>
            <span>Здоровье</span>
          </div>
          <h1 className="page-title">Здоровые новости и полезные практики</h1>
          <p className="lead">
            Подборка собрана в формате журнальной рубрики: ведущий материал, затем ряд статей с
            крупными обложками и короткими вводными подписями.
          </p>
        </div>

        <Link href={leadStory.href} className="category-editorial__lead card card--paper">
          <img src={leadStory.image} alt={leadStory.title} className="category-editorial__image" />
          <div className="category-editorial__body">
            <div className="editorial-kicker">
              <span>Выбор редакции</span>
              <span>{leadStory.subtopic}</span>
            </div>
            <h2>{leadStory.title}</h2>
            <p>{leadStory.excerpt}</p>
          </div>
        </Link>
      </section>

      <section className="editorial-grid-articles">
        {stories.map((story) => (
          <Link key={story.slug} href={story.href} className="editorial-story card card--paper">
            <img src={story.image} alt={story.title} className="editorial-story__image" />
            <div className="editorial-story__body">
              <div className="editorial-kicker">
                <span>Здоровье</span>
                <span>{story.subtopic}</span>
              </div>
              <h3>{story.title}</h3>
              <p>{story.excerpt}</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
