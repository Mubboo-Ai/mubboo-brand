'use client';

interface Tag {
  readonly id: string;
  readonly label: string;
  readonly colour: string;
}

interface Props {
  tags: readonly Tag[];
  activeTag: string;
  onTagChange: (tag: string) => void;
}

export default function FilterChips({ tags, activeTag, onTagChange }: Props) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
      {tags.map((tag) => {
        const isActive = activeTag === tag.id;
        return (
          <button
            key={tag.id}
            onClick={() => onTagChange(tag.id)}
            className="shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 hover:scale-[1.03]"
            style={
              isActive
                ? { backgroundColor: tag.colour, color: '#fff', boxShadow: `0 2px 8px ${tag.colour}30` }
                : { backgroundColor: '#F3F4F6', color: '#374151' }
            }
            onMouseEnter={(e) => {
              if (!isActive) {
                e.currentTarget.style.backgroundColor = '#E5E7EB';
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.backgroundColor = '#F3F4F6';
              }
            }}
          >
            {tag.label}
          </button>
        );
      })}
    </div>
  );
}
