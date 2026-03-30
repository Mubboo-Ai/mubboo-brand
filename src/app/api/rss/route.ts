import { NextResponse } from 'next/server';
import { getNewsArticles, getBlogArticles } from '@/lib/articles';
import authors from '@/data/authors.json';

export async function GET() {
  const news = getNewsArticles().map((a) => ({ ...a, type: 'news' as const }));
  const blog = getBlogArticles().map((a) => ({ ...a, type: 'blog' as const }));

  const allArticles = [...news, ...blog].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const escapeXml = (str: string) =>
    str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');

  const items = allArticles
    .map((a) => {
      const author = authors[a.author as keyof typeof authors];
      const link = `https://mubboo.ai/${a.type}/${a.slug}`;
      return `    <item>
      <title>${escapeXml(a.title)}</title>
      <link>${link}</link>
      <guid>${link}</guid>
      <description>${escapeXml(a.excerpt)}</description>
      <pubDate>${new Date(a.date).toUTCString()}</pubDate>
      <author>${escapeXml(author?.name ?? 'Mubboo')}</author>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Mubboo — AI &amp; Consumer Life</title>
    <link>https://mubboo.ai</link>
    <description>Daily coverage of AI, e-commerce, travel, finance, and consumer technology</description>
    <language>en</language>
    <atom:link href="https://mubboo.ai/api/rss" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/rss+xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
