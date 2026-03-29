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

        <p className="mt-4 text-sm text-gray-500">
          <a
            href="mailto:admin@mubboo.ai"
            className="hover:text-gray-700 transition-colors"
          >
            admin@mubboo.ai
          </a>
        </p>

        <p className="mt-6 text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Mubboo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
