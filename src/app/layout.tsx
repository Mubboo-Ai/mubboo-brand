import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import './globals.css';

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'Mubboo — AI Life Assistant',
    template: '%s | Mubboo',
  },
  description:
    'AI-powered consumer comparison and life assistant platform covering shopping, travel, finance, local services, and everyday information — tailored for each country.',
  metadataBase: new URL('https://mubboo.ai'),
  openGraph: {
    type: 'website',
    siteName: 'Mubboo',
    locale: 'en_US',
    url: 'https://mubboo.ai',
    title: 'Mubboo — AI Life Assistant',
    description:
      'AI-powered consumer comparison and life assistant platform covering shopping, travel, finance, local services, and everyday information.',
    images: [{ url: '/logo-512.png', width: 512, height: 512, alt: 'Mubboo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mubboo — AI Life Assistant',
    description:
      'AI-powered consumer comparison and life assistant platform.',
    images: ['/logo-512.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    types: {
      'application/rss+xml': 'https://mubboo.ai/api/rss',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
