import { getArticleBySlug, getArticlesByTopic } from '@/lib/content/articles';
import type { Article } from '@/lib/content/types';

function isArticle(value: Article | undefined): value is Article {
  return Boolean(value);
}

export function getHomeFeed() {
  return {
    leadStory: getArticleBySlug('balance-soft-rhythm'),
    riverStories: [
      getArticleBySlug('menopause-hidden-risks'),
      getArticleBySlug('health-magnesium-guide'),
      getArticleBySlug('balance-focus-fatigue'),
      getArticleBySlug('health-walking-body'),
      getArticleBySlug('restoration-bath-wisdom'),
      getArticleBySlug('industrial-city-health-culture'),
      getArticleBySlug('sport-point-of-support'),
      getArticleBySlug('perm-medical-library'),
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
  const healthArticles = getArticlesByTopic('healthy-food');

  return {
    leadStory: getArticleBySlug('health-walking-body'),
    stories: healthArticles.slice(0, 3),
  };
}
