import Image from 'next/image';
import authors from '@/data/authors.json';

interface Props {
  authorId: 'richard-lee' | 'editorial-team';
}

export default function AuthorBox({ authorId }: Props) {
  const author = authors[authorId];
  if (!author) return null;

  if (authorId === 'editorial-team') {
    return (
      <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-gray-50 p-5">
        <Image
          src={author.avatar}
          alt={author.name}
          width={40}
          height={40}
          className="rounded-lg"
        />
        <div>
          <p className="font-semibold text-gray-900">{author.name}</p>
          <p className="text-sm text-gray-500">{author.bio}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border-l-4 border-mubboo bg-orange-50/50 p-6">
      <div className="flex items-start gap-4">
        <Image
          src={author.avatar}
          alt={author.name}
          width={56}
          height={56}
          className="rounded-full"
        />
        <div>
          <p className="font-semibold text-gray-900">{author.name}</p>
          <p className="text-sm text-mubboo">{author.role}</p>
          <p className="mt-2 text-sm text-gray-600">{author.bio}</p>
        </div>
      </div>
    </div>
  );
}
