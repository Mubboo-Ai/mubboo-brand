import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getBlogArticles, getArticleBySlug, getRelatedArticles } from '@/lib/articles';
import authors from '@/data/authors.json';
import TagPill from '@/components/articles/TagPill';
import AuthorBox from '@/components/articles/AuthorBox';
import ShareButtons from '@/components/articles/ShareButtons';
import ArticleCard from '@/components/articles/ArticleCard';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getBlogArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug('blog', slug);
  if (!article) return {};
  return {
    title: article.frontmatter.title,
    description: article.frontmatter.excerpt,
    openGraph: {
      type: 'article',
      title: article.frontmatter.title,
      description: article.frontmatter.excerpt,
      publishedTime: article.frontmatter.date,
      authors: [article.frontmatter.author === 'editorial-team' ? 'Mubboo Editorial Team' : 'Richard Lee'],
    },
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug('blog', slug);
  if (!article) notFound();

  const { frontmatter, content } = article;
  const author = authors[frontmatter.author as keyof typeof authors];
  const related = getRelatedArticles('blog', slug, frontmatter.tags, 4);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: frontmatter.title,
    datePublished: frontmatter.date,
    dateModified: frontmatter.date,
    description: frontmatter.excerpt,
    mainEntityOfPage: `https://mubboo.ai/blog/${frontmatter.slug}`,
    author:
      frontmatter.author === 'editorial-team'
        ? {
            '@type': 'Organization',
            name: 'Mubboo Editorial Team',
            url: 'https://mubboo.ai',
          }
        : {
            '@type': 'Person',
            name: 'Richard Lee',
            jobTitle: 'Founder',
            url: 'https://mubboo.ai/about',
          },
    publisher: {
      '@type': 'Organization',
      name: 'Mubboo',
      logo: {
        '@type': 'ImageObject',
        url: 'https://mubboo.ai/logo-512.png',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="py-10 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-sm text-gray-400">
            <Link href="/blog" className="hover:text-gray-600 transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gray-600">{frontmatter.tags[0]?.toUpperCase()}</span>
          </nav>

          {/* Header */}
          <div className="flex flex-wrap gap-2">
            {frontmatter.tags.map((tag) => (
              <TagPill key={tag} tag={tag} />
            ))}
          </div>
          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {frontmatter.title}
          </h1>
          <div className="mt-6 flex items-center gap-3">
            {author && (
              <Image
                src={author.avatar}
                alt={author.name}
                width={40}
                height={40}
                className="rounded-full"
              />
            )}
            <div className="text-sm">
              <p className="font-medium text-gray-900">{author?.name}</p>
              <p className="text-gray-500">
                {new Date(frontmatter.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}{' '}
                &middot; {frontmatter.readingTime}
              </p>
            </div>
          </div>

          {/* Hero image */}
          {frontmatter.image && (
            <div className="mt-8 overflow-hidden rounded-xl">
              <img
                src={frontmatter.image}
                alt={frontmatter.title}
                className="aspect-[2/1] w-full object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg prose-gray mt-10 max-w-none prose-headings:font-display prose-blockquote:border-l-mubboo prose-blockquote:italic prose-a:text-mubboo">
            <MDXRemote source={content} />
          </div>

          {/* Tags */}
          <div className="mt-10 flex flex-wrap gap-2">
            {frontmatter.tags.map((tag) => (
              <TagPill key={tag} tag={tag} />
            ))}
          </div>

          {/* Share */}
          <div className="mt-6">
            <ShareButtons
              url={`/blog/${frontmatter.slug}`}
              title={frontmatter.title}
            />
          </div>

          {/* Author box */}
          <div className="mt-10">
            <AuthorBox authorId={frontmatter.author} />
          </div>
        </div>
      </article>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="border-t border-gray-100 bg-gray-50 py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-gray-900">
              Related articles
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} type="blog" />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
