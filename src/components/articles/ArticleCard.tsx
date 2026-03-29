import Link from 'next/link';
import type { ArticleFrontmatter } from '@/lib/articles';
import TagPill from './TagPill';

interface Props {
  article: ArticleFrontmatter;
  type: 'news' | 'blog';
}

export default function ArticleCard({ article, type }: Props) {
  return (
    <Link
      href={`/${type}/${article.slug}`}
      className="group block rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-mubboo hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <TagPill key={tag} tag={tag} />
        ))}
      </div>
      <h3 className="mt-3 text-lg font-semibold text-gray-900 leading-snug group-hover:text-mubboo transition-colors">
        {article.title}
      </h3>
      <p className="mt-2 text-sm text-gray-600 line-clamp-2">{article.excerpt}</p>
      <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
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
