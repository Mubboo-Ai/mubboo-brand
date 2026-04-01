import type { Metadata } from 'next';
import { countries, liveCountries } from '@/data/countries';

export const metadata: Metadata = {
  title: `Mubboo Countries — Available in ${4} Countries`,
  description:
    'Mubboo is live in Australia, United States, United Kingdom, and New Zealand — with more countries coming soon. Native-quality local content, no machine translation.',
};

const channelColours = ['#F97316', '#3B82F6', '#D97706', '#22C55E', '#7C3AED'];

const regions = ['Asia Pacific', 'North America', 'Europe'] as const;

export default function CountriesPage() {
  const grouped = regions.map((region) => ({
    region,
    countries: countries.filter((c) => c.region === region),
  }));

  return (
    <>
      {/* ── Header ── */}
      <section className="hero-gradient py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="animate-fade-in-up font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Mubboo around the world
          </h1>
          <p className="animate-fade-in-up mx-auto mt-4 max-w-2xl text-lg text-gray-600 sm:text-xl" style={{ animationDelay: '100ms' }}>
            Every country site is built with native-quality local content — real brands, local
            prices, actual regulations, and cultural context. No machine translation. No
            generic global content.
          </p>
          <div className="animate-fade-in-up mt-12 grid grid-cols-3 gap-4 sm:gap-6" style={{ animationDelay: '200ms' }}>
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <p className="text-3xl font-bold text-mubboo sm:text-4xl">{liveCountries.length}</p>
              <p className="mt-1 text-sm text-gray-600">Countries live</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <p className="text-3xl font-bold text-mubboo sm:text-4xl">5</p>
              <p className="mt-1 text-sm text-gray-600">Life channels</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <p className="text-3xl font-bold text-mubboo sm:text-4xl">30+</p>
              <p className="mt-1 text-sm text-gray-600">Target countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Country Grid by Region ── */}
      <section className="bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-16">
          {grouped.map(({ region, countries: regionCountries }) => (
            <div key={region}>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-6 w-1 rounded-full bg-mubboo" />
                <h2 className="font-display text-2xl font-bold text-gray-900">{region}</h2>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 stagger-children">
                {regionCountries.map((c) =>
                  c.status === 'live' ? (
                    <a
                      key={c.code}
                      href={`https://${c.domain}`}
                      className="group flex flex-col items-center gap-3 rounded-xl border border-gray-200 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-mubboo hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(249,115,22,0.10)]"
                    >
                      <span className="text-5xl transition-transform duration-300 group-hover:scale-110">{c.flag}</span>
                      <span className="font-semibold text-gray-900">{c.name}</span>
                      <span className="text-sm text-gray-500">{c.domain}</span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-green-600">
                        <span className="h-2 w-2 rounded-full bg-green-500 animate-live-pulse" />
                        LIVE
                      </span>
                      <div className="flex gap-1.5">
                        {channelColours.map((colour) => (
                          <span
                            key={colour}
                            className="h-2 w-2 rounded-full transition-transform duration-200 group-hover:scale-125"
                            style={{ backgroundColor: colour }}
                          />
                        ))}
                      </div>
                      <span className="text-gray-400 group-hover:text-mubboo transition-all duration-200 group-hover:translate-x-0.5">
                        &rarr;
                      </span>
                    </a>
                  ) : (
                    <div
                      key={c.code}
                      className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-gray-300 bg-white p-6 opacity-60"
                    >
                      <span className="text-5xl">{c.flag}</span>
                      <span className="font-semibold text-gray-700">{c.name}</span>
                      <span className="text-sm text-gray-500">{c.domain}</span>
                      <span className="text-xs font-medium text-gray-500">Coming soon</span>
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-lg rounded-2xl border border-gray-200 bg-white p-10 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <h2 className="font-display text-2xl font-bold text-gray-900 sm:text-3xl">
              Don&apos;t see your country?
            </h2>
            <p className="mt-3 text-gray-600">
              We&apos;re expanding to 30+ countries. Let us know where you&apos;d like to see
              Mubboo next.
            </p>
            <a
              href="mailto:admin@mubboo.ai?subject=Country Request"
              className="mt-6 inline-flex items-center rounded-full bg-mubboo px-8 py-3.5 text-base font-semibold text-white shadow-[0_4px_14px_rgba(249,115,22,0.35)] transition-all duration-200 hover:bg-orange-600 hover:shadow-[0_6px_20px_rgba(249,115,22,0.45)] hover:-translate-y-0.5"
            >
              Request your country
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
