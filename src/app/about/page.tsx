import type { Metadata } from 'next';
import { channels } from '@/data/channels';

export const metadata: Metadata = {
  title: 'About Mubboo — AI Life Assistant Platform',
  description:
    'Mubboo is an AI-powered consumer platform covering shopping, travel, finance, local services, and everyday information across multiple countries.',
};

const timeline = [
  {
    year: '2025',
    title: 'Australia launched',
    description:
      'Mubboo launched in Australia with five channels — shopping, travel, finance, local, and info — built with native-quality local content.',
  },
  {
    year: '2026',
    title: 'Five Eyes expansion',
    description:
      'Live in Australia, United States, United Kingdom, and New Zealand. Canada coming soon. Each country built from the ground up.',
  },
  {
    year: 'Future',
    title: '30+ countries + AI assistant',
    description:
      'Expanding across Asia Pacific, Europe, and beyond. Building a conversational AI assistant that understands local context in every market.',
  },
];

const values = [
  {
    title: 'Local, not global',
    description:
      'Every country gets content built for its market — local brands, local prices, local regulations.',
    icon: (
      <svg className="h-8 w-8 text-mubboo" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: 'Honest, not optimised',
    description:
      'We present information to help you decide, not to push you toward the highest commission.',
    icon: (
      <svg className="h-8 w-8 text-mubboo" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'For everyone, not experts',
    description:
      'AI should be as easy as asking a friend who knows everything about your city.',
    icon: (
      <svg className="h-8 w-8 text-mubboo" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            AI that serves everyday people
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Mubboo is an AI-powered consumer platform that covers five key areas of life —
            shopping, travel, finance, local services, and everyday information. We build
            native-quality content for each country, so every recommendation is relevant to
            where you actually live.
          </p>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-gray-900">What we do</h2>
            <p className="mt-4 text-lg text-gray-600">
              We help consumers compare products, find better deals, plan trips, understand
              finances, discover local services, and navigate everyday life — all in one place,
              tailored for each country.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-5">
            {channels.map((ch) => (
              <div
                key={ch.id}
                className="flex flex-col items-center gap-3 rounded-xl p-5 text-center"
                style={{ backgroundColor: ch.bgColour }}
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full text-xl"
                  style={{ backgroundColor: ch.colour + '20' }}
                >
                  {ch.icon}
                </span>
                <span className="text-sm font-semibold text-gray-900">{ch.name}</span>
                <span className="text-xs text-gray-600">{ch.subtitle}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Journey ── */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-bold text-gray-900">
            Our journey
          </h2>
          {/* Desktop: horizontal */}
          <div className="mt-12 hidden sm:block">
            <div className="relative flex justify-between">
              {/* Connecting line */}
              <div className="absolute top-3 left-3 right-3 h-0.5 bg-gray-200" />
              <div
                className="absolute top-3 left-3 h-0.5 bg-mubboo"
                style={{ width: `${((timeline.length - 1) / timeline.length) * 100}%` }}
              />
              {timeline.map((node, i) => (
                <div key={i} className="relative flex flex-col items-center text-center" style={{ width: '30%' }}>
                  <div className={`h-6 w-6 rounded-full border-4 border-white ${i < timeline.length - 1 ? 'bg-mubboo' : 'bg-gray-300'}`} />
                  <span className="mt-3 text-sm font-bold text-mubboo">{node.year}</span>
                  <span className="mt-1 font-semibold text-gray-900">{node.title}</span>
                  <p className="mt-2 text-sm text-gray-600">{node.description}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Mobile: vertical */}
          <div className="mt-10 sm:hidden">
            <div className="relative ml-3 border-l-2 border-gray-200 pl-8 space-y-10">
              {timeline.map((node, i) => (
                <div key={i} className="relative">
                  <div
                    className={`absolute -left-[calc(2rem+5px)] top-1 h-4 w-4 rounded-full border-2 border-white ${
                      i < timeline.length - 1 ? 'bg-mubboo' : 'bg-gray-300'
                    }`}
                  />
                  <span className="text-sm font-bold text-mubboo">{node.year}</span>
                  <h3 className="mt-1 font-semibold text-gray-900">{node.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{node.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Believe ── */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-bold text-gray-900">
            What we believe
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <div className="mb-4">{v.icon}</div>
                <h3 className="font-semibold text-gray-900">{v.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Company Info ── */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500">
            Mubboo &middot; Sydney, Australia &middot;{' '}
            <a href="mailto:admin@mubboo.ai" className="hover:text-gray-700 transition-colors">
              admin@mubboo.ai
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
