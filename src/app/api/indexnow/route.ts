import { NextRequest, NextResponse } from 'next/server';

const INDEXNOW_KEY = '09d3eb9e3af923046c8459b598f57990';

export async function POST(request: NextRequest) {
  try {
    const { urls } = (await request.json()) as { urls: string[] };

    if (!urls || urls.length === 0) {
      return NextResponse.json({ error: 'No URLs provided' }, { status: 400 });
    }

    const payload = {
      host: 'mubboo.ai',
      key: INDEXNOW_KEY,
      keyLocation: `https://mubboo.ai/${INDEXNOW_KEY}.txt`,
      urlList: urls.map((u) =>
        u.startsWith('http') ? u : `https://mubboo.ai${u}`
      ),
    };

    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({
      status: res.status,
      submitted: payload.urlList.length,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to submit to IndexNow' },
      { status: 500 }
    );
  }
}
