import { newsTags, blogTags } from '@/data/tags';

const allTags = [...newsTags, ...blogTags];

export default function TagPill({ tag }: { tag: string }) {
  const found = allTags.find((t) => t.id === tag);
  const colour = found?.colour ?? '#6B7280';
  const label = found?.label ?? tag;

  return (
    <span
      className="inline-block rounded-full px-3 py-1 text-xs font-semibold text-white"
      style={{ backgroundColor: colour }}
    >
      {label}
    </span>
  );
}
