'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import { newsTags } from '@/data/tags';
import FilterChips from '@/components/articles/FilterChips';
import ArticleCard from '@/components/articles/ArticleCard';
import FeaturedArticleCard from '@/components/articles/FeaturedArticleCard';
import type { ArticleFrontmatter } from '@/lib/articles';

function NewsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeTag = searchParams.get('tag') ?? 'all';
  const [articles, setArticles] = useState<ArticleFrontmatter[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/articles?type=news`)
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
  const popular = articles.slice(0, 3);

  function handleTagChange(tag: string) {
    const params = new URLSearchParams();
    if (tag !== 'all') params.set('tag', tag);
    router.push(`/news${params.toString() ? '?' + params.toString() : ''}`, {
      scroll: false,
    });
  }

  return (
    <>
      <section className="hero-gradient py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="animate-fade-in-up font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            News
          </h1>
          <p className="animate-fade-in-up mt-3 max-w-2xl text-lg text-gray-600" style={{ animationDelay: '100ms' }}>
            Daily coverage of AI, e-commerce, travel, finance, and consumer
            technology.
          </p>
          <div className="mt-8">
            <FilterChips
              tags={newsTags}
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
            <div className="lg:grid lg:grid-cols-3 lg:gap-10">
              <div className="lg:col-span-2 space-y-6">
                {featured && (
                  <FeaturedArticleCard article={featured} type="news" />
                )}
                {rest.length > 0 && (
                  <div className="border-t border-gray-100 pt-6 space-y-6">
                    {rest.map((article) => (
                      <ArticleCard
                        key={article.slug}
                        article={article}
                        type="news"
                      />
                    ))}
                  </div>
                )}
              </div>
              <aside className="mt-10 lg:mt-0">
                <div className="lg:sticky lg:top-24">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-5 w-1 rounded-full bg-mubboo" />
                    <h3 className="font-semibold text-gray-900">Popular this week</h3>
                  </div>
                  <div className="space-y-4">
                    {popular.map((article, i) => (
                      <a
                        key={article.slug}
                        href={`/news/${article.slug}`}
                        className="group block rounded-lg p-3 transition-colors duration-200 hover:bg-gray-50"
                      >
                        <div className="flex gap-3">
                          <span className="text-2xl font-bold text-gray-200 group-hover:text-mubboo/30 transition-colors duration-200">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-gray-900 group-hover:text-mubboo transition-colors duration-200 leading-snug">
                              {article.title}
                            </p>
                            <p className="mt-1 text-xs text-gray-500">
                              {article.readingTime}
                            </p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default function NewsPage() {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center">
          <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-mubboo" />
        </div>
      }
    >
      <NewsContent />
    </Suspense>
  );
}
