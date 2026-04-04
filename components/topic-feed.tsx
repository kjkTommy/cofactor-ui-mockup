'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { Topic } from '@/data/topics';

type TopicFeedProps = {
  topic: Topic;
  initialVisibleCount?: number;
};

export function TopicFeed({ topic, initialVisibleCount = 8 }: TopicFeedProps) {
  const [activeSubtopic, setActiveSubtopic] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const filteredItems = activeSubtopic
    ? topic.items.filter((item) => item.subtopic === activeSubtopic)
    : topic.items;
  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  function handleSubtopicClick(subtopic: string | null) {
    setActiveSubtopic((current) => (current === subtopic ? null : subtopic));
    setVisibleCount(initialVisibleCount);
  }

  return (
    <section className="topic-page">
      <header className="topic-page__header">
        <h1 className="page-title topic-page__title">{topic.title}</h1>
        <div className="topic-page__subtopics">
          <button
            type="button"
            className={`topic-page__subtopic${activeSubtopic === null ? ' is-active' : ''}`}
            onClick={() => handleSubtopicClick(null)}
          >
            Все
          </button>
          {topic.subtopics.map((subtopic) => (
            <button
              key={subtopic}
              type="button"
              className={`topic-page__subtopic${activeSubtopic === subtopic ? ' is-active' : ''}`}
              onClick={() => handleSubtopicClick(subtopic)}
            >
              {subtopic}
            </button>
          ))}
        </div>
      </header>

      <div className="topic-page__list">
        {visibleItems.length > 0 ? (
          visibleItems.map((item) => (
            <Link key={item.title} href={item.href} className="topic-card card card--paper">
              <img src={item.image} alt={item.title} className="topic-card__image" />
              <div className="topic-card__body">
                <div className="editorial-kicker">
                  <span>{topic.label}</span>
                  <span>{item.subtopic}</span>
                </div>
                <h2>{item.title}</h2>
                <p>{item.excerpt}</p>
              </div>
            </Link>
          ))
        ) : (
          <div className="topic-card topic-card--empty card card--paper">
            <div className="topic-card__body">
              <h2>Пока нет материалов</h2>
              <p>Для выбранного подраздела статьи еще не добавлены.</p>
            </div>
          </div>
        )}
      </div>

      {hasMore ? (
        <button
          type="button"
          className="button button--ghost topic-page__more"
          onClick={() => setVisibleCount((count) => count + initialVisibleCount)}
        >
          Показать еще
        </button>
      ) : null}
    </section>
  );
}
