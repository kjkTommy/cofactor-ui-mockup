import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getArticleBySlug, getRelatedArticles, articles } from '@/lib/content';
import { topicDefinitions } from '@/data/topics';

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
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
          <span>{article.readTime}</span>
        </div>
      </section>

      <section className="article-cover card card--paper">
        <img src={article.image} alt={article.title} className="article-cover__image" />
      </section>

      <section className="article-reading">
        <aside className="article-reading__aside">
          <div className="article-aside card">
            <p className="sidebar-title">Навигация</p>
            <ul>
              {article.outline.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

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
        </aside>

        <article className="article-body article-body--editorial card card--paper">
          {article.intro.map((paragraph, index) => (
            <p key={paragraph} className={index === 0 ? 'dropcap' : undefined}>
              {paragraph}
            </p>
          ))}

          <div className="quote-block article-pullquote">{article.quote}</div>

          {article.sections.map((section) => (
            <div key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
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
