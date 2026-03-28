import type { Article } from '@/lib/content/types';
import { article as balanceSoftRhythm } from '@/content/articles/balance-soft-rhythm';
import { article as balanceFocusFatigue } from '@/content/articles/balance-focus-fatigue';
import { article as balanceDayEnergy } from '@/content/articles/balance-day-energy';
import { article as healthWildHerbs } from '@/content/articles/health-wild-herbs';
import { article as healthMagnesiumGuide } from '@/content/articles/health-magnesium-guide';
import { article as healthWalkingBody } from '@/content/articles/health-walking-body';
import { article as restorationBathWisdom } from '@/content/articles/restoration-bath-wisdom';
import { article as restorationOfflineRest } from '@/content/articles/restoration-offline-rest';
import { article as restorationEveningRitual } from '@/content/articles/restoration-evening-ritual';
import { article as storiesAgeOfHappiness } from '@/content/articles/stories-age-of-happiness';
import { article as storiesFirstIssue } from '@/content/articles/stories-first-issue';
import { article as storiesTravelReturn } from '@/content/articles/stories-travel-return';
import { article as checkupFirstStep } from '@/content/articles/checkup-first-step';
import { article as checkupTrackMarkers } from '@/content/articles/checkup-track-markers';
import { article as checkupDoctorTalk } from '@/content/articles/checkup-doctor-talk';

export const articles: Article[] = [
  balanceSoftRhythm,
  balanceFocusFatigue,
  balanceDayEnergy,
  healthWildHerbs,
  healthMagnesiumGuide,
  healthWalkingBody,
  restorationBathWisdom,
  restorationOfflineRest,
  restorationEveningRitual,
  storiesAgeOfHappiness,
  storiesFirstIssue,
  storiesTravelReturn,
  checkupFirstStep,
  checkupTrackMarkers,
  checkupDoctorTalk,
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByTopic(topicSlug: string) {
  return articles.filter((article) => article.topicSlug === topicSlug);
}

export function getRelatedArticles(slugs: string[] = []) {
  return slugs.map((slug) => getArticleBySlug(slug)).filter(Boolean) as Article[];
}
