import Link from 'next/link';

const links = [
  { href: '/about', label: 'About' },
  { href: '/countries', label: 'Countries' },
  { href: '/news', label: 'News' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#F9FAFB] border-t border-gray-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 text-center">
        <p className="text-xl font-bold text-gray-900">Mubboo</p>

        <nav className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-4 flex items-center justify-center gap-4">
          <a
            href="mailto:admin@mubboo.ai"
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            admin@mubboo.ai
          </a>
          <a
            href="/api/rss"
            className="text-gray-400 hover:text-orange-500 transition-colors"
            title="RSS Feed"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <circle cx="6.18" cy="17.82" r="2.18" />
              <path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z" />
            </svg>
          </a>
        </div>

        <p className="mt-6 text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Mubboo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
