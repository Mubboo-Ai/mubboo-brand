# Mubboo Brand Hub — Claude Code Instructions

## Project
- mubboo.ai global brand hub
- Next.js App Router + TypeScript + Tailwind CSS
- AWS Amplify deployment (us-east-1)
- NEVER run `npm run build` or `next build` locally (OOM risk)
- Always commit and push; Amplify handles builds

## Design System
- Primary colour: #F97316 (Mubboo orange)
- Background: white (#FFFFFF)
- Display font: Playfair Display (serif) — h1, blockquotes
- Body font: DM Sans — body text, UI
- Card style: 0.5px border, border-radius 8-12px, hover: orange border + lift
- Minimum body text: text-lg (18px)

## Channel Colours
- Shopping: #F97316 (orange)
- Travel: #3B82F6 (blue)
- Local: #22C55E (green)
- Finance: #D97706 (amber)
- Info: #7C3AED (purple)

## News Tag Colours
- AI: #F97316 | Shopping: #3B82F6 | Travel: #22C55E
- Finance: #D97706 | Local: #7C3AED | E-commerce: #EC4899 | Industry: #6B7280

## Content Rules
- Global English only (not country-specific)
- No affiliate links, no product pages, no city pages
- All country site links are dofollow
- No hreflang (this is not a country site)
- Articles use MDX in /content/news/ and /content/blog/
- Every News article has a "Mubboo's take" highlighted box

## SEO
- No hreflang clusters
- mubboo.com is x-default (not mubboo.ai)
- Dynamic sitemap via /api/sitemap/route.ts with next.config rewrite
- IndexNow post-build hook
- JSON-LD Organization on landing, Article on articles

## Authorship
- author: 'richard-lee' → Full Author Box with bio
- author: 'editorial-team' → Simplified brand card
- Data in /src/data/authors.json
