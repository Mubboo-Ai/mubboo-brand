import { NextResponse } from 'next/server';
import { getNewsArticles, getBlogArticles } from '@/lib/articles';

export async function GET() {
  const news = getNewsArticles();
  const blog = getBlogArticles();
  const now = new Date().toISOString().split('T')[0];

  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'daily', lastmod: now },
    { url: '/news', priority: '0.9', changefreq: 'daily', lastmod: now },
    { url: '/blog', priority: '0.8', changefreq: 'weekly', lastmod: now },
    { url: '/about', priority: '0.5', changefreq: 'monthly', lastmod: now },
    { url: '/countries', priority: '0.5', changefreq: 'monthly', lastmod: now },
    { url: '/contact', priority: '0.5', changefreq: 'monthly', lastmod: now },
  ];

  const newsUrls = news.map((a) => ({
    url: `/news/${a.slug}`,
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: a.date,
  }));

  const blogUrls = blog.map((a) => ({
    url: `/blog/${a.slug}`,
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: a.date,
  }));

  const allUrls = [...staticPages, ...newsUrls, ...blogUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (entry) => `  <url>
    <loc>https://mubboo.ai${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
