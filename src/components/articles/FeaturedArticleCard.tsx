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
      className="group block rounded-xl border border-gray-200 bg-white p-8 transition-all hover:border-mubboo hover:-translate-y-0.5 hover:shadow-md"
    >
      {article.image && (
        <div className="mb-6 overflow-hidden rounded-lg">
          <img
            src={article.image}
            alt={article.title}
            className="aspect-[2/1] w-full object-cover"
          />
        </div>
      )}
      <div className="flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <TagPill key={tag} tag={tag} />
        ))}
      </div>
      <h2 className="mt-4 font-display text-2xl font-bold text-gray-900 leading-snug group-hover:text-mubboo transition-colors sm:text-3xl">
        {article.title}
      </h2>
      <p className="mt-3 text-gray-600 line-clamp-3">{article.excerpt}</p>
      <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
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
