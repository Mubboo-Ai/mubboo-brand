import Link from 'next/link';
import { channels } from '@/data/channels';
import { liveCountries, comingSoonCountries } from '@/data/countries';

const channelColours = ['#F97316', '#3B82F6', '#22C55E', '#D97706', '#7C3AED'];

const placeholderArticles = [
  {
    slug: '#',
    tag: 'AI',
    tagColour: '#F97316',
    title: 'How AI is reshaping the way consumers compare products online',
    excerpt: 'From personalised recommendations to real-time price tracking, artificial intelligence is transforming how we shop.',
    author: 'Richard Lee',
    date: '29 Mar 2026',
  },
  {
    slug: '#',
    tag: 'Travel',
    tagColour: '#22C55E',
    title: 'The rise of AI travel assistants and what it means for booking',
    excerpt: 'Smart travel tools are moving beyond simple search — they now understand context, preferences, and local nuance.',
    author: 'Mubboo Editorial Team',
    date: '28 Mar 2026',
  },
  {
    slug: '#',
    tag: 'E-commerce',
    tagColour: '#EC4899',
    title: 'Cross-border e-commerce is booming — but trust remains a barrier',
    excerpt: 'Consumers want global access to products, but shipping times, returns, and local regulations still create friction.',
    author: 'Richard Lee',
    date: '27 Mar 2026',
  },
  {
    slug: '#',
    tag: 'Finance',
    tagColour: '#D97706',
    title: 'Comparing bank accounts across countries: what we learned',
    excerpt: 'Every market has different fee structures, interest rates, and digital banking maturity. Here is what stands out.',
    author: 'Mubboo Editorial Team',
    date: '26 Mar 2026',
  },
];

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Mubboo',
    url: 'https://mubboo.ai',
    logo: 'https://mubboo.ai/logo-512.png',
    description: 'AI-powered consumer comparison and life assistant platform',
    email: 'admin@mubboo.ai',
    sameAs: ['https://www.linkedin.com/company/mubboo'],
    foundingDate: '2025',
    areaServed: ['AU', 'US', 'GB', 'NZ'],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Section 1: Hero ── */}
      <section className="py-12 sm:py-16">

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block rounded-full bg-mubboo px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
            AI-powered consumer platform
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Your AI life assistant,
            <br />
            everywhere you are
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Mubboo helps you compare, discover, and decide — across shopping, travel, finance,
            local life, and more. Tailored for your country, powered by AI.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {['Every life scenario covered', 'Expanding globally', 'Updated daily'].map((pill) => (
              <span
                key={pill}
                className="rounded-full bg-gray-100 px-4 py-1.5 text-sm text-gray-600"
              >
                {pill}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/countries"
              className="inline-flex items-center rounded-full bg-mubboo px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 transition-colors"
            >
              Explore countries
            </Link>
            <Link
              href="/news"
              className="inline-flex items-center rounded-full border-2 border-mubboo px-6 py-3 text-sm font-semibold text-mubboo hover:bg-orange-50 transition-colors"
            >
              Read latest news
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 2: Countries Grid ── */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-bold text-gray-900 sm:text-4xl">
            Available in {liveCountries.length} countries
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {liveCountries.map((c) => (
              <a
                key={c.code}
                href={`https://${c.domain}`}
                className="group flex flex-col items-center gap-3 rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-mubboo hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="text-4xl">{c.flag}</span>
                <span className="font-semibold text-gray-900">{c.name}</span>
                <span className="text-sm text-gray-500">{c.domain}</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-green-600">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  LIVE
                </span>
                <div className="flex gap-1.5">
                  {channelColours.map((colour) => (
                    <span
                      key={colour}
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: colour }}
                    />
                  ))}
                </div>
              </a>
            ))}
            {/* Canada — coming soon */}
            {comingSoonCountries
              .filter((c) => c.code === 'CA')
              .map((c) => (
                <div
                  key={c.code}
                  className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-gray-300 bg-white p-6 opacity-50"
                >
                  <span className="text-4xl">{c.flag}</span>
                  <span className="font-semibold text-gray-900">{c.name}</span>
                  <span className="text-sm text-gray-400">{c.domain}</span>
                  <span className="text-xs font-medium text-gray-400">Coming soon</span>
                </div>
              ))}
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {comingSoonCountries
              .filter((c) => c.code !== 'CA')
              .map((c) => (
                <span
                  key={c.code}
                  className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-500"
                >
                  {c.flag} {c.name}
                </span>
              ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Five Channels ── */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-bold text-gray-900 sm:text-4xl">
            Five channels of everyday life
          </h2>
          <div className="mt-10 flex gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-5 sm:overflow-visible sm:pb-0">
            {channels.map((ch) => (
              <div
                key={ch.id}
                className="flex min-w-[160px] flex-col items-center gap-3 rounded-xl p-6 text-center"
                style={{ backgroundColor: ch.bgColour }}
              >
                <span
                  className="flex h-14 w-14 items-center justify-center rounded-full text-2xl"
                  style={{ backgroundColor: ch.colour + '20' }}
                >
                  {ch.icon}
                </span>
                <span className="font-semibold text-gray-900">{ch.name}</span>
                <span className="text-sm text-gray-600">{ch.subtitle}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Latest from Mubboo ── */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-bold text-gray-900 sm:text-4xl">
            Latest from Mubboo
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {placeholderArticles.map((article) => (
              <div
                key={article.title}
                className="rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-mubboo hover:-translate-y-0.5 hover:shadow-md"
              >
                <span
                  className="inline-block rounded-full px-3 py-1 text-xs font-semibold text-white"
                  style={{ backgroundColor: article.tagColour }}
                >
                  {article.tag}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-gray-900 leading-snug">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">{article.excerpt}</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
                  <span>{article.author}</span>
                  <span>&middot;</span>
                  <span>{article.date}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/news"
              className="text-sm font-semibold text-mubboo hover:text-orange-600 transition-colors"
            >
              View all news &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 5: Mission Quote ── */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="font-display text-2xl italic leading-relaxed text-gray-800 sm:text-3xl">
            &ldquo;We&apos;re building Mubboo because we believe AI should work for everyday
            people — not just tech enthusiasts. Every country deserves tools that understand
            local life.&rdquo;
          </blockquote>
          <p className="mt-6 font-semibold text-gray-900">Richard Lee, Founder</p>
          <p className="mt-4 text-gray-600">
            Mubboo is an AI-powered platform that helps consumers compare, discover, and
            decide across shopping, travel, finance, local services, and everyday information
            — tailored for each country.
          </p>
        </div>
      </section>
    </>
  );
}
