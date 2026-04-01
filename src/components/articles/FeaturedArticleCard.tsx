import Link from 'next/link';
import type { ArticleFrontmatter } from '@/lib/articles';
import TagPill from './TagPill';

interface Props {
  article: ArticleFrontmatter;
  type: 'news' | 'blog';
}

export default function FeaturedArticleCard({ article, type }: Props) {
  return (
    <Link
      href={`/${type}/${article.slug}`}
      className="group block rounded-xl border border-gray-200 bg-white p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-mubboo hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(249,115,22,0.10)]"
    >
      {article.image && (
        <div className="mb-6 overflow-hidden rounded-lg">
          <img
            src={article.image}
            alt={article.title}
            className="aspect-[2/1] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      )}
      <div className="flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <TagPill key={tag} tag={tag} />
        ))}
      </div>
      <h2 className="mt-4 font-display text-2xl font-bold text-gray-900 leading-snug group-hover:text-mubboo transition-colors duration-200 sm:text-3xl">
        {article.title}
      </h2>
      <p className="mt-3 text-gray-600 line-clamp-3">{article.excerpt}</p>
      <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
        <span>{article.readingTime}</span>
        <span>&middot;</span>
        <span>
          {new Date(article.date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
        </span>
      </div>
    </Link>
  );
}
