import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { getArticleBySlug, getRelatedArticles, articles } from '@/lib/content';
import { topicDefinitions } from '@/data/topics';
import type { ArticleContentBlock } from '@/lib/content/types';

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

const URL_PATTERN = /(https?:\/\/[^\s]+)/g;
const MARKDOWN_LINK_PATTERN = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;

function renderAutoLinkedText(text: string, keyPrefix: string) {
  const parts = text.split(URL_PATTERN);

  return parts.map((part, index) => {
    if (!part.startsWith('http://') && !part.startsWith('https://')) {
      return part;
    }

    const href = part.replace(/[),.;!?]+$/g, '');
    const suffix = part.slice(href.length);

    return (
      <span key={`${keyPrefix}-url-${index}`}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {href}
        </a>
        {suffix}
      </span>
    );
  });
}

function renderTextWithLinks(text: string, keyPrefix: string) {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let linkIndex = 0;

  for (const match of text.matchAll(MARKDOWN_LINK_PATTERN)) {
    const matchIndex = match.index ?? 0;
    const before = text.slice(lastIndex, matchIndex);

    if (before) {
      nodes.push(...renderAutoLinkedText(before, `${keyPrefix}-before-${linkIndex}`));
    }

    const label = match[1];
    const href = match[2];

    nodes.push(
      <span key={`${keyPrefix}-link-${linkIndex}`}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      </span>
    );

    lastIndex = matchIndex + match[0].length;
    linkIndex += 1;
  }

  const tail = text.slice(lastIndex);
  if (tail) {
    nodes.push(...renderAutoLinkedText(tail, `${keyPrefix}-tail`));
  }

  return nodes;
}

function renderBlock(block: ArticleContentBlock, key: string, fallbackTitle: string) {
  if (block.type === 'paragraph') {
    return (
      <p key={key} style={block.style}>
        {renderTextWithLinks(block.text, key)}
      </p>
    );
  }

  if (block.type === 'list') {
    const ListTag = block.style === 'ordered' ? 'ol' : 'ul';

    return (
      <div key={key} className="article-list-block">
        {block.title ? <p className="article-list-block__title">{block.title}</p> : null}
        <ListTag className="article-list-block__list">
          {block.items.map((item) => (
            <li key={`${key}-${item}`}>{item}</li>
          ))}
        </ListTag>
      </div>
    );
  }

  if (block.type === 'image') {
    return (
      <figure key={key} className={`article-media article-media--${block.variant ?? 'default'}`}>
        <img src={block.src} alt={block.alt} className="article-media__image" style={block.style} />
        {block.caption ? <figcaption className="article-media__caption">{block.caption}</figcaption> : null}
      </figure>
    );
  }

  return (
    <figure key={key} className="article-media article-gallery-block">
      <div className="article-gallery-block__grid">
        {block.images.map((image) => (
          <div key={`${key}-${image.src}`} className="article-gallery-block__item">
            <img
              src={image.src}
              alt={image.alt || fallbackTitle}
              className="article-media__image"
              style={image.style}
            />
            {image.label ? <span className="article-gallery-block__label">{image.label}</span> : null}
          </div>
        ))}
      </div>
      {block.caption ? <figcaption className="article-media__caption">{block.caption}</figcaption> : null}
    </figure>
  );
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const topic = topicDefinitions.find((item) => item.slug === article.topicSlug);
  const relatedArticles = getRelatedArticles(article.relatedSlugs);

  return (
    <main className="shell section-gap page-stack article-page">
      <section className="article-header">
        <div className="editorial-kicker">
          <span>{topic?.label ?? 'Раздел'}</span>
          <span>{article.subtopic}</span>
        </div>
        <h1 className="article-header__title">{article.title}</h1>
        <p className="article-header__lead">{article.excerpt}</p>
        <div className="article-header__meta">
          <span>{article.author}</span>
          <span>{article.publishedAt}</span>
        </div>
      </section>

      <section className="article-cover card card--paper">
        <img src={article.image} alt={article.title} className="article-cover__image" />
      </section>

      <section className="article-reading">
        <aside className="article-reading__aside">
          {relatedArticles.length > 0 ? (
            <div className="article-aside card card--soft">
              <p className="sidebar-title">Рядом по теме</p>
              <div className="article-related">
                {relatedArticles.map((relatedArticle) => (
                  <Link
                    key={relatedArticle.slug}
                    href={relatedArticle.href}
                    className="article-related__item"
                  >
                    <span>{relatedArticle.subtopic}</span>
                    <strong>{relatedArticle.title}</strong>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}

          {article.helpfulLinks && article.helpfulLinks.length > 0 ? (
            <div className="article-aside card card--soft">
              <p className="sidebar-title">Полезные ссылки к статье</p>
              <div className="article-related">
                {article.helpfulLinks.map((link) => (
                  <a
                    key={`${link.href}-${link.label}`}
                    href={link.href}
                    className="article-related__item"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <span>Ссылка</span>
                    <strong>{link.label}</strong>
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </aside>

        <article className="article-body article-body--editorial card card--paper">
          {article.intro.map((paragraph, index) => (
            <p key={paragraph} className={index === 0 ? 'dropcap' : undefined}>
              {paragraph}
            </p>
          ))}

          <div className="quote-block article-pullquote">{article.quote}</div>

          {article.sections.map((section) => (
            <div key={section.heading} className="article-section">
              <h2>{section.heading}</h2>
              {section.content
                ? section.content.map((block, index) =>
                    renderBlock(block, `${section.heading}-${index}`, article.title),
                  )
                : section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          ))}

          {article.gallery && article.gallery.length > 0 ? (
            <div className="inline-visuals inline-visuals--editorial">
              {article.gallery.map((image) => (
                <img key={image} src={image} alt={article.title} />
              ))}
            </div>
          ) : null}
        </article>
      </section>
    </main>
  );
}
