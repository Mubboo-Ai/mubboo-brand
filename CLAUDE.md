# mubboo.ai Brand Hub — Project Reference

Single source of truth for all work on mubboo.ai.

## What This Site Is

Global brand hub for the Mubboo AI consumer platform:
1. Brand presence for investors, media, partners
2. Topical authority hub — daily News and Blog content builds domain authority
3. Link equity center — collects global backlinks, distributes to country sites via dofollow links

## What This Site Is NOT

- Not a country site — no hreflang, no GeoBanner, no country-specific pricing or products
- Not x-default (mubboo.com holds that role)
- Not an affiliate site — no affiliate links, no product pages, no city pages
- Not a static brochure — active daily publishing platform

## Technical

- Repo: mubbooAI/mubboo-brand (public)
- Branch: main only
- Framework: Next.js App Router + TypeScript + Tailwind CSS
- Deployment: AWS Amplify us-east-1 (Virginia)
- DNS: Cloudflare (mubboo.ai zone, CNAME flattening for root, coexists with MX records)
- NEVER run npm run build or next build locally — OOM risk. Commit + push; Amplify builds.
- amplify.yml postBuild: IndexNow script must include req.on('error') handler to prevent ECONNRESET from failing builds

## Design System

Primary color: #F97316 (Mubboo orange) — sole accent
Background: #FFFFFF
Display font: Playfair Display (serif) — h1, blockquotes
Body font: DM Sans — body text, UI
Minimum body text: text-lg (18px)
Card style: 0.5px border, border-radius 8-12px, hover: orange border + slight lift
Live country indicator: green dot #22C55E

Channel colors:
- Shopping: #F97316 / bg #FFF7ED
- Travel: #3B82F6 / bg #EFF6FF
- Finance: #D97706 / bg #FEF3C7
- Local: #22C55E / bg #F0FDF4
- Info: #7C3AED / bg #EDE9FE

News tag colors:
- AI: #F97316 | Shopping: #3B82F6 | Travel: #22C55E
- Finance: #D97706 | Local: #7C3AED | E-commerce: #EC4899 | Industry: #6B7280

## Article System

MDX files in /content/news/ and /content/blog/
Frontmatter: title, slug, date, author, tags[], excerpt, published
Only published: true articles appear on site and in sitemap
Author data in /src/data/authors.json

Authorship:
- author: 'richard-lee' → Full Author Box with avatar, bio, "Richard Lee, Founder"
- author: 'editorial-team' → Simplified brand card with logo, "Mubboo Editorial Team"
- richard-lee: 1 lead News per day + all Blog articles
- editorial-team: all other daily News

## SEO

- No hreflang (not a country site)
- mubboo.com is x-default, not mubboo.ai
- Dynamic sitemap via /api/sitemap/route.ts, rewritten to /sitemap.xml
- JSON-LD Organization on landing page
- JSON-LD NewsArticle on /news/[slug]
- JSON-LD BlogPosting on /blog/[slug]
- JSON-LD author markup on every article
- All country links on /countries are dofollow
- robots.txt: allow all crawlers, include sitemap URL
- llms.txt: Markdown format with "How to cite Mubboo" section
- IndexNow: postBuild hook + manual POST at /api/indexnow

## Publishing Workflow

1. Claude.ai: select topic → write article per standards below → Richard reviews
2. Claude Code: create MDX in /content/news/ or /content/blog/ → commit → push
3. Amplify auto-deploys → IndexNow auto-submits
4. Verify: renders correctly, JSON-LD valid, sitemap updated

---

## Content Standards

### Daily Architecture

| Layer | Channel | Author | Volume | Length | Style |
|-------|---------|--------|--------|--------|-------|
| Coverage | News | editorial-team | 3-5/day | 500-700 words | Objective trade journalism |
| Lead story | News | richard-lee | 1/day | 600-800 words | Deeper analysis, news voice |
| Founder insight | Blog | richard-lee | 1/day or every 2 days | 1,500-2,500 words | First-person, opinionated |

Blog extends the same topic as the day's lead News. Same event, different depth and voice.

### Language

Global English. American spelling (color, organize, license). No country-specific slang.

### News Voice

Third person only. Fact-forward. Every claim needs a source. Neutral tone with clear analysis earned by the facts presented.

Mubboo's Take (News only): 60-100 words. Platform perspective, not personal opinion. One specific consumer implication. Connect to at least one channel.

### Blog Voice

First person. Experience-driven with at least two specific Mubboo references per article. Opinionated. Must teach the reader something new. All opinions grounded in data or direct experience.

### Banned Phrases

- "In today's rapidly evolving landscape" / "In an era of"
- "It's worth noting" / "It's important to note"
- "The bottom line" / "In conclusion" / "To sum up"
- "Game-changer" / "paradigm shift"
- "It remains to be seen" / "Only time will tell"
- "Deep dive" (as verb) / "leverage" / "utilize"
- "Crucial" / "critical" / "vital" — say WHY instead
- "Revolutionize" / "transform" / "disrupt" — unless quoting someone
- "Seamless" / "robust" / "cutting-edge" / "state-of-the-art"
- "Elevate" / "navigate" / "landscape" (all metaphorical)
- "Unlock" / "empower" / "harness" / "spearhead"
- "Underscore" / "pivotal" / "myriad" / "plethora" / "delve"
- "Fundamentally" / "significantly" / "incredibly"
- "A testament to" / "At the forefront of"
- "Holistic" / "synergy" / "ecosystem" (unless naming a specific one)
- "Something for everyone"

### Banned Patterns

- Three-adjective chains with parallel structure
- Rhetorical questions as transitions
- Fake balance: "While X has challenges, the opportunities are enormous"
- Em-dash overuse: max 2 per article
- Paragraphs starting with: However / Moreover / Furthermore / Additionally
- Template headings: "Why This Matters" / "The Bigger Picture" / "Looking Ahead"
- Grand endings: "The future is X" / "One thing is clear"
- Lists of exactly 3 with parallel structure
- Openings: "In a move that..." / "In a significant development..."

### What To Do Instead

- Start paragraphs with the subject
- Headings name actual content, not categories
- End with a specific observation, not a conclusion
- Vary paragraph length
- Use numbers, not vague modifiers
- Read aloud — if it sounds like a press release, rewrite

### GEO Optimization

1. TLDR-first: first 200 words answer the complete story. No scene-setting.
2. AI-citable paragraphs: 2-3 per article, 134-167 words each, self-contained, fact-dense (2+ data points each)
3. Statistics with sources: minimum 2 per article with attribution
4. Question-based headings: at least one H2 as a question matching AI search queries
5. Named author on every article

### Country Site Linking Rule (MANDATORY)

Every News article MUST include at least one natural dofollow link to a relevant country site article or channel page within the body text or "Mubboo's Take" section. This is the primary mechanism for distributing link equity from mubboo.ai to country sites.

**Current priority (until UK/CA/NZ affiliate programs are active):**
- **mubboo.com (US)** — primary focus, ~60% of links
- **mubboo.au (AU)** — secondary focus, ~40% of links
- **mubboo.uk / mubboo.nz / mubboo.ca** — only link when the article topic is directly relevant to that market. Do not force links to these sites.

**Future adjustment (when UK/CA/NZ affiliate programs are active):**
- Redistribute to US 40% / UK+AU 25% each / NZ+CA 10%

**Link quality rules:**
- Anchor text must be natural and contextual, never "click here" or naked URLs
- Link to specific articles when relevant (e.g., mubboo.com/shopping/best-robot-vacuums)
- If no directly relevant article exists yet, link to the channel page (e.g., mubboo.com/shopping)
- Multiple country links in one article are fine when natural, but one is the minimum

### E-E-A-T

- Experience (Blog only): 2+ specific references to building Mubboo
- Expertise (all): name companies, cite studies, reference standards — no "many experts agree"
- Authoritativeness (all): every claim sourced; opinions only in Mubboo's Take or marked Blog sections
- Trustworthiness (all): flag uncertain data as uncertain

### Pre-Publish Checklist

- [ ] Contains a paragraph a journalist could quote?
- [ ] At least one original insight beyond source material?
- [ ] 2+ data points with source attribution?
- [ ] News: Mubboo's Take has clear platform position?
- [ ] Blog: reveals something specific about building Mubboo?
- [ ] First paragraph works as standalone answer?
- [ ] 2-3 self-contained paragraphs of 134-167 words?
- [ ] Passes anti-AI-pattern check?
- [ ] Richard would present this at a conference?

### Topic Scope

AI × everyday consumer life. Every article connects to: shopping, travel, finance, local services, or consumer information. Pure AI research or enterprise/developer news only if directly affecting consumer experience.
