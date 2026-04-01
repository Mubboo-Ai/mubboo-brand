import Link from 'next/link';
import Image from 'next/image';

const links = [
  { href: '/about', label: 'About' },
  { href: '/countries', label: 'Countries' },
  { href: '/news', label: 'News' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col items-center gap-8">
          {/* Brand mark */}
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo-512.png"
              alt="Mubboo"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="text-lg font-bold text-gray-900">Mubboo</span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-500 hover:text-mubboo transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact + RSS */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:admin@mubboo.ai"
              className="text-sm text-gray-500 hover:text-mubboo transition-colors duration-200"
            >
              admin@mubboo.ai
            </a>
            <span className="h-4 w-px bg-gray-300" />
            <a
              href="https://www.linkedin.com/company/mubboo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-mubboo transition-colors duration-200"
              title="LinkedIn"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="/api/rss"
              className="text-gray-400 hover:text-mubboo transition-colors duration-200"
              title="RSS Feed"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <circle cx="6.18" cy="17.82" r="2.18" />
                <path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z" />
              </svg>
            </a>
          </div>

          {/* Divider + Copyright */}
          <div className="w-full max-w-xs border-t border-gray-200 pt-6 text-center">
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} Mubboo. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
