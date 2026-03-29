import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

export interface ArticleFrontmatter {
  title: string;
  slug: string;
  date: string;
  author: 'richard-lee' | 'editorial-team';
  tags: string[];
  excerpt: string;
  published: boolean;
  image?: string;
  readingTime: string;
}

export interface Article {
  frontmatter: ArticleFrontmatter;
  content: string;
}

const contentDir = path.join(process.cwd(), 'content');

function getArticles(type: 'news' | 'blog'): ArticleFrontmatter[] {
  const dir = path.join(contentDir, type);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), 'utf-8');
      const { data, content } = matter(raw);
      const stats = readingTime(content);
      return {
        ...data,
        readingTime: stats.text,
      } as ArticleFrontmatter;
    })
    .filter((a) => a.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getNewsArticles(): ArticleFrontmatter[] {
  return getArticles('news');
}

export function getBlogArticles(): ArticleFrontmatter[] {
  return getArticles('blog');
}

export function getArticleBySlug(
  type: 'news' | 'blog',
  slug: string
): Article | null {
  const dir = path.join(contentDir, type);
  if (!fs.existsSync(dir)) return null;

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'));

  for (const file of files) {
    const raw = fs.readFileSync(path.join(dir, file), 'utf-8');
    const { data, content } = matter(raw);

    if (data.slug === slug && data.published) {
      const stats = readingTime(content);
      return {
        frontmatter: { ...data, readingTime: stats.text } as ArticleFrontmatter,
        content,
      };
    }
  }

  return null;
}

export function getArticlesByTag(
  type: 'news' | 'blog',
  tag: string
): ArticleFrontmatter[] {
  const articles = getArticles(type);
  if (tag === 'all') return articles;
  return articles.filter((a) => a.tags.includes(tag));
}

export function getRelatedArticles(
  type: 'news' | 'blog',
  currentSlug: string,
  tags: string[],
  limit = 4
): ArticleFrontmatter[] {
  const articles = getArticles(type).filter((a) => a.slug !== currentSlug);
  const withScore = articles.map((a) => ({
    article: a,
    score: a.tags.filter((t) => tags.includes(t)).length,
  }));
  withScore.sort((a, b) => b.score - a.score);
  return withScore.slice(0, limit).map((s) => s.article);
}
