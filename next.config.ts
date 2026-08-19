import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Domain sunset (brand consolidation, 2026-08-19): mubboo.ai is retired as
  // a standalone site — the whole domain 301s to the flights pillar. Unlike
  // the ccTLD country sites there is no per-page equivalent to map to, so a
  // single catch-all to the homepage is the intended shape, not a shortcut.
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://mubboo.flights/',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ];
  },
};

export default nextConfig;
