import Link from 'next/link';
import { getHomeFeed } from '@/lib/content';
import { getTopicLabel } from '@/data/topics';

export function HomeSections() {
  const { leadStory, riverStories, gridStories } = getHomeFeed();

  if (!leadStory) {
    return null;
  }

  return (
    <>
      <section className="shell section-gap editorial-home">
        <div className="editorial-home__header">
          <p className="eyebrow">Свежие материалы</p>
        </div>

        <div className="editorial-home__grid">
          <Link href={leadStory.href} className="editorial-lead card card--paper">
            <img src={leadStory.image} alt={leadStory.title} className="editorial-lead__image" />
            <div className="editorial-lead__body">
              <div className="editorial-kicker">
                <span>Тема номера</span>
                <span>{leadStory.subtopic}</span>
              </div>
              <h2>{leadStory.title}</h2>
              <p>{leadStory.excerpt}</p>
            </div>
          </Link>

          <div className="editorial-river card">
            <p className="editorial-river__title">В потоке номера</p>
            <div className="editorial-river__list">
              {riverStories.slice(0, 5).map((story) => (
                <Link key={story.slug} href={story.href} className="editorial-river__item">
                  <div className="editorial-kicker">
                    <span>{getTopicLabel(story.topicSlug)}</span>
                    <span>{story.subtopic}</span>
                  </div>
                  <h3>{story.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </div>

      </section>

      <section className="shell section-gap editorial-grid-articles">
        {gridStories.map((story) => (
          <Link key={story.slug} href={story.href} className="editorial-story card card--paper">
            <img src={story.image} alt={story.title} className="editorial-story__image" />
            <div className="editorial-story__body">
              <div className="editorial-kicker">
                <span>{getTopicLabel(story.topicSlug)}</span>
                <span>{story.subtopic}</span>
              </div>
              <h3>{story.title}</h3>
              <p>{story.excerpt}</p>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
