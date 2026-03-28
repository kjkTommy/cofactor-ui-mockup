export type ArticleSeed = {
  slug: string;
  title: string;
  topicSlug: string;
  subtopic: string;
  image: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  author?: string;
  outline: string[];
  intro: string[];
  quote: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
  }>;
  gallery?: string[];
  relatedSlugs?: string[];
};

export type Article = ArticleSeed & {
  author: string;
  href: string;
};
