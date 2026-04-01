import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Mubboo',
  description:
    'Get in touch with the Mubboo team. Based in Sydney, Australia.',
};

export default function ContactPage() {
  return (
    <section className="hero-gradient py-20 sm:py-28">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="animate-fade-in-up font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Get in touch
          </h1>
          <p className="animate-fade-in-up mt-4 text-lg text-gray-600" style={{ animationDelay: '100ms' }}>
            Have a question, media enquiry, or partnership idea? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="animate-fade-in-up mt-12 rounded-2xl border border-gray-200 bg-white p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:p-10" style={{ animationDelay: '200ms' }}>
          <div className="space-y-8">
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50">
                <svg
                  className="h-6 w-6 text-mubboo"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Email</p>
                <a
                  href="mailto:admin@mubboo.ai"
                  className="text-lg font-medium text-gray-900 hover:text-mubboo transition-colors duration-200"
                >
                  admin@mubboo.ai
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50">
                <svg
                  className="h-6 w-6 text-mubboo"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Location</p>
                <p className="text-lg font-medium text-gray-900">Sydney, Australia</p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100" />

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/mubboo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2.5 rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-600 transition-all duration-200 hover:border-mubboo hover:text-mubboo hover:-translate-y-0.5 hover:shadow-sm"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://mubboo.ai"
                className="flex flex-1 items-center justify-center gap-2.5 rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-600 transition-all duration-200 hover:border-mubboo hover:text-mubboo hover:-translate-y-0.5 hover:shadow-sm"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A8.966 8.966 0 013 12c0-1.264.26-2.467.732-3.559" />
                </svg>
                mubboo.ai
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
