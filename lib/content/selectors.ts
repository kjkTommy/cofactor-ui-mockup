import { getArticleBySlug, getArticlesByTopic } from '@/lib/content/articles';
import type { Article } from '@/lib/content/types';

function isArticle(value: Article | undefined): value is Article {
  return Boolean(value);
}

export function getHomeFeed() {
  return {
    leadStory: getArticleBySlug('balance-soft-rhythm'),
    riverStories: [
      getArticleBySlug('checkup-track-markers'),
      getArticleBySlug('health-magnesium-guide'),
      getArticleBySlug('balance-focus-fatigue'),
      getArticleBySlug('stories-first-issue'),
    ].filter(isArticle),
    gridStories: [
      getArticleBySlug('health-wild-herbs'),
      getArticleBySlug('health-magnesium-guide'),
      getArticleBySlug('restoration-bath-wisdom'),
    ].filter(isArticle),
    tags: ['здоровье', 'питание', 'гармония внутри', 'лайфстайл', 'интервью', 'эксперименты'],
  };
}

export function getCategoryFeed() {
  const healthArticles = getArticlesByTopic('health');

  return {
    leadStory: getArticleBySlug('health-walking-body'),
    stories: healthArticles.slice(0, 3),
  };
}
