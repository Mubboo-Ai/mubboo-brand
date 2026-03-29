import { NextRequest, NextResponse } from 'next/server';
import { getNewsArticles, getBlogArticles } from '@/lib/articles';

export async function GET(request: NextRequest) {
  const type = request.nextUrl.searchParams.get('type');

  if (type === 'blog') {
    return NextResponse.json(getBlogArticles());
  }

  return NextResponse.json(getNewsArticles());
}
