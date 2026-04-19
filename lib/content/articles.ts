import type { Article } from '@/lib/content/types';
import { article as balanceSoftRhythm } from '@/content/articles/balance-soft-rhythm';
import { article as balanceFocusFatigue } from '@/content/articles/balance-focus-fatigue';
import { article as balanceDayEnergy } from '@/content/articles/balance-day-energy';
import { article as menopauseHiddenRisks } from '@/content/articles/menopause-hidden-risks';
import { article as mareMilkFamilyHealth } from '@/content/articles/mare-milk-family-health';
import { article as liveChlorellaBenefits } from '@/content/articles/live-chlorella-benefits';
import { article as magnesiumChoiceGuide } from '@/content/articles/magnesium-choice-guide';
import { article as alexiniaLongevityDialogue } from '@/content/articles/alexinia-longevity-dialogue';
import { article as cryoProductsPlantPotential } from '@/content/articles/cryo-products-plant-potential';
import { article as healthWildHerbs } from '@/content/articles/health-wild-herbs';
import { article as healthMagnesiumGuide } from '@/content/articles/health-magnesium-guide';
import { article as healthWalkingBody } from '@/content/articles/health-walking-body';
import { article as plantOilsKitchenGuide } from '@/content/articles/plant-oils-kitchen-guide';
import { article as restorationBathWisdom } from '@/content/articles/restoration-bath-wisdom';
// import { article as restorationOfflineRest } from '@/content/articles/restoration-offline-rest';
import { article as restorationEveningRitual } from '@/content/articles/restoration-evening-ritual';
import { article as neurographicsLineThinking } from '@/content/articles/neurographics-line-thinking';
import { article as tibetanSingingBowlsMeditation } from '@/content/articles/tibetan-singing-bowls-meditation';
import { article as postureActiveLongevity } from '@/content/articles/posture-active-longevity';
import { article as postureStatusBeautyHealth } from '@/content/articles/posture-status-beauty-health';
import { article as emotionalMaturityResilience } from '@/content/articles/emotional-maturity-resilience';
import { article as lonelinessStrengthSupport } from '@/content/articles/loneliness-strength-support';
import { article as financialHealthLuxury } from '@/content/articles/financial-health-luxury';
import { article as lifeWithoutSupportHousing } from '@/content/articles/life-without-support-housing';
import { article as neuroCareerGuidance } from '@/content/articles/neuro-career-guidance';
import { article as teenHealthStartBase } from '@/content/articles/teen-health-start-base';
import { article as examFocusFood } from '@/content/articles/exam-focus-food';
import { article as industrialCityHealthCulture } from '@/content/articles/industrial-city-health-culture';
import { article as sportPointOfSupport } from '@/content/articles/sport-point-of-support';
import { article as permMedicalLibrary } from '@/content/articles/perm-medical-library';
import { article as eastForTheStrong } from '@/content/articles/east-for-the-strong';
// import { article as pagesThatChange } from '@/content/articles/pages-that-change';

export const articles: Article[] = [
  balanceSoftRhythm,
  balanceFocusFatigue,
  balanceDayEnergy,
  menopauseHiddenRisks,
  mareMilkFamilyHealth,
  liveChlorellaBenefits,
  magnesiumChoiceGuide,
  alexiniaLongevityDialogue,
  cryoProductsPlantPotential,
  healthWildHerbs,
  healthMagnesiumGuide,
  healthWalkingBody,
  plantOilsKitchenGuide,
  restorationBathWisdom,
  restorationEveningRitual,
  neurographicsLineThinking,
  tibetanSingingBowlsMeditation,
  postureActiveLongevity,
  postureStatusBeautyHealth,
  emotionalMaturityResilience,
  lonelinessStrengthSupport,
  financialHealthLuxury,
  lifeWithoutSupportHousing,
  neuroCareerGuidance,
  teenHealthStartBase,
  examFocusFood,
  industrialCityHealthCulture,
  sportPointOfSupport,
  permMedicalLibrary,
  eastForTheStrong,
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByTopic(topicSlug: string) {
  return articles.filter(
    (article) =>
      article.topicSlug === topicSlug || article.additionalTopicSlugs?.includes(topicSlug),
  );
}

export function getRelatedArticles(slugs: string[] = []) {
  return slugs.map((slug) => getArticleBySlug(slug)).filter(Boolean) as Article[];
}
