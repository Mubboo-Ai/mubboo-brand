'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import { blogTags } from '@/data/tags';
import FilterChips from '@/components/articles/FilterChips';
import ArticleCard from '@/components/articles/ArticleCard';
import FeaturedArticleCard from '@/components/articles/FeaturedArticleCard';
import type { ArticleFrontmatter } from '@/lib/articles';

function BlogContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeTag = searchParams.get('tag') ?? 'all';
  const [articles, setArticles] = useState<ArticleFrontmatter[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/articles?type=blog`)
      .then((r) => r.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      });
  }, []);

  const filtered =
    activeTag === 'all'
      ? articles
      : articles.filter((a) => a.tags.includes(activeTag));

  const featured = filtered[0];
  const rest = filtered.slice(1);

  function handleTagChange(tag: string) {
    const params = new URLSearchParams();
    if (tag !== 'all') params.set('tag', tag);
    router.push(`/blog${params.toString() ? '?' + params.toString() : ''}`, {
      scroll: false,
    });
  }

  return (
    <>
      <section className="hero-gradient py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="animate-fade-in-up font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Blog
          </h1>
          <p className="animate-fade-in-up mt-3 max-w-2xl text-lg text-gray-600" style={{ animationDelay: '100ms' }}>
            Industry analysis, platform updates, and the vision behind Mubboo.
          </p>
          <div className="mt-8">
            <FilterChips
              tags={blogTags}
              activeTag={activeTag}
              onTagChange={handleTagChange}
            />
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="py-20 text-center">
              <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-mubboo" />
              <p className="mt-3 text-sm text-gray-500">Loading articles...</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-20 text-center text-gray-500">No articles found.</div>
          ) : (
            <div className="space-y-8">
              {featured && (
                <FeaturedArticleCard article={featured} type="blog" />
              )}
              {rest.length > 0 && (
                <div className="border-t border-gray-100 pt-8">
                  <div className="grid gap-6 sm:grid-cols-2">
                    {rest.map((article) => (
                      <ArticleCard
                        key={article.slug}
                        article={article}
                        type="blog"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default function BlogPage() {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center">
          <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-mubboo" />
        </div>
      }
    >
      <BlogContent />
    </Suspense>
  );
}
