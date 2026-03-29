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
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Mubboo around the world
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Every country site is built with native-quality local content — real brands, local
            prices, actual regulations, and cultural context. No machine translation. No
            generic global content.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-8">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <p className="text-3xl font-bold text-mubboo sm:text-4xl">{liveCountries.length}</p>
              <p className="mt-1 text-sm text-gray-600">Countries live</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <p className="text-3xl font-bold text-mubboo sm:text-4xl">5</p>
              <p className="mt-1 text-sm text-gray-600">Life channels</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <p className="text-3xl font-bold text-mubboo sm:text-4xl">30+</p>
              <p className="mt-1 text-sm text-gray-600">Target countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Country Grid by Region ── */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
          {grouped.map(({ region, countries: regionCountries }) => (
            <div key={region}>
              <h2 className="font-display text-2xl font-bold text-gray-900">{region}</h2>
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {regionCountries.map((c) =>
                  c.status === 'live' ? (
                    <a
                      key={c.code}
                      href={`https://${c.domain}`}
                      className="group flex flex-col items-center gap-3 rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-mubboo hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <span className="text-5xl">{c.flag}</span>
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
                      <span className="text-gray-400 group-hover:text-mubboo transition-colors">
                        &rarr;
                      </span>
                    </a>
                  ) : (
                    <div
                      key={c.code}
                      className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-gray-300 bg-white p-6 opacity-50"
                    >
                      <span className="text-5xl">{c.flag}</span>
                      <span className="font-semibold text-gray-900">{c.name}</span>
                      <span className="text-sm text-gray-400">{c.domain}</span>
                      <span className="text-xs font-medium text-gray-400">Coming soon</span>
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold text-gray-900 sm:text-3xl">
            Don&apos;t see your country?
          </h2>
          <p className="mt-3 text-gray-600">
            We&apos;re expanding to 30+ countries. Let us know where you&apos;d like to see
            Mubboo next.
          </p>
          <a
            href="mailto:admin@mubboo.ai?subject=Country Request"
            className="mt-6 inline-flex items-center rounded-full bg-mubboo px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 transition-colors"
          >
            Request your country
          </a>
        </div>
      </section>
    </>
  );
}
