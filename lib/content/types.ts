export type ArticleImageBlock = {
  type: 'image';
  src: string;
  alt: string;
  caption?: string;
  variant?: 'default' | 'aside';
};

export type ArticleGalleryBlock = {
  type: 'gallery';
  caption?: string;
  images: Array<{
    src: string;
    alt: string;
    label?: string;
  }>;
};

export type ArticleParagraphBlock = {
  type: 'paragraph';
  text: string;
};

export type ArticleContentBlock =
  | ArticleParagraphBlock
  | ArticleImageBlock
  | ArticleGalleryBlock;

export type ArticleSeed = {
  slug: string;
  title: string;
  topicSlug: string;
  subtopic: string;
  image: string;
  excerpt: string;
  publishedAt: string;
  author?: string;
  outline: string[];
  intro: string[];
  quote: string;
  sections: Array<{
    heading: string;
    paragraphs?: string[];
    content?: ArticleContentBlock[];
  }>;
  gallery?: string[];
  relatedSlugs?: string[];
};

export type Article = ArticleSeed & {
  author: string;
  href: string;
};
