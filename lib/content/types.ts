import type { CSSProperties } from 'react';

export type ArticleImageBlock = {
  type: 'image';
  src: string;
  alt: string;
  caption?: string;
  variant?: 'default' | 'aside';
  style?: CSSProperties;
};

export type ArticleGalleryBlock = {
  type: 'gallery';
  caption?: string;
  images: Array<{
    src: string;
    alt: string;
    label?: string;
    style?: CSSProperties;
  }>;
};

export type ArticleParagraphBlock = {
  type: 'paragraph';
  text: string;
  style?: CSSProperties;
};

export type ArticleListBlock = {
  type: 'list';
  style?: 'bullet' | 'ordered';
  title?: string;
  items: string[];
};

export type ArticleContentBlock =
  | ArticleParagraphBlock
  | ArticleListBlock
  | ArticleImageBlock
  | ArticleGalleryBlock;

export type ArticleSeed = {
  slug: string;
  title: string;
  topicSlug: string;
  additionalTopicSlugs?: string[];
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
  helpfulLinks?: Array<{
    label: string;
    href: string;
  }>;
};

export type Article = ArticleSeed & {
  author: string;
  href: string;
};
