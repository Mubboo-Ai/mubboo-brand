# DESIGN.md — Mubboo Design System
# Version: 1.0 | April 6, 2026 | Format: Google Stitch
# Scope: All country sites (AU/US/UK/CA/NZ)
# Purpose: Claude Code reads this file to generate consistent UI across all pages

---

## 1. Visual Theme

**Brand positioning:** Premium trust editorial platform. Same visual tier as Booking.com and Trip.com — never student-project aesthetics.

**Three-layer architecture:**
- Skeleton = URL structure, navigation, schema (Architecture Spec v1)
- Soul = Anxiety-first tone, friend voice, editorial rules (Content Bible v1)
- Skin = This file — tokens, components, layouts, interaction patterns

**Core principles:**
1. **Premium Trust, Not Cheap Friendly** — deep blue + gold signals authority. Light blue/pastel = instant bounce
2. **Editorial-First, Tool-Second** — M verdict and answer-first copy before any interactive tool
3. **Emotional Arc Over Information Architecture** — section order follows user emotion, not taxonomy

**Brand test:** If a screenshot of the Hero Zone could be mistaken for a student project, the colors are wrong.

**Channel unity rule:** Travel and Local share the same brand palette (blue + gold + orange). Differentiation through content, photos, interaction, and update frequency — NOT through color.

---

## 2. Colors

### 2.1 Primary Palette

| Token | Hex | Tailwind | Usage |
|-------|-----|----------|-------|
| blue-dark | `#0C447C` | `bg-[#0C447C]` | Hero Zone bg, navbar bg, Trip Planner Bar, Section Jump Bar active, Scene Router bg, Safety Card header |
| blue-mid | `#1A5B9E` | `bg-[#1A5B9E]` | Hover states on blue bg, secondary blue elements |
| blue-light | `#E6F1FB` | `bg-[#E6F1FB]` | Rating badge (blue tier), upstream cross-link bg |
| gold | `#FAC775` | `text-[#FAC775]` | H1 in Hero Zone, Conversion Moment heading, navbar active tab, navbar text, key judgment highlights |
| orange | `#F97316` | `bg-[#F97316]` / `border-[#F97316]` | CTA buttons, M verdict left-border, M's Local Pick border, category chips active, all M components |
| orange-light | `#FFF3E6` | `bg-[#FFF3E6]` | M verdict background zone in cards, M's Local Pick bg |

### 2.2 Semantic Palette

| Token | Hex | Usage |
|-------|-----|-------|
| green-light | `#E1F5EE` | Badge: recommended / M's Pick / 4.5+ rating |
| green-text | `#166534` | Text on green badges |
| amber-light | `#FAEEDA` | Badge: good value / budget pick / price-related |
| amber-text | `#92400E` | Text on amber badges |
| red-light | `#FEF2F2` | Warning callouts (rare), Emergency Playbook trigger |
| gray-50 | `#F9FAFB` | Alternating table row bg |
| gray-100 | `#F3F4F6` | Card hover bg, secondary backgrounds |
| gray-200 | `#E5E7EB` | Dividers, card borders (default) |
| gray-300 | `#D1D5DB` | Table borders |
| gray-500 | `#6B7280` | Secondary text, meta text, data transparency |
| gray-700 | `#374151` | Body text, primary readable content |
| gray-900 | `#111827` | Headings (non-Hero), bold labels |

### 2.3 Navbar Gold System

| Token | Value | Usage |
|-------|-------|-------|
| navbar-bg | `#0C447C` | Full-width background, no gradient |
| navbar-active-text | `#FAC775` | Active tab text color |
| navbar-inactive-text | `rgba(250,199,117,0.7)` | Inactive tab text — NOT 0.4 (WCAG fail) |
| navbar-capsule-border | `rgba(250,199,117,0.25)` | Active tab capsule border, icon circles |
| navbar-capsule-bg | `rgba(250,199,117,0.06)` | Active tab bg, icon circle bg |
| navbar-separator | `linear-gradient(90deg, transparent, rgba(250,199,117,0.5), transparent)` | 1px gold hairline below navbar |

### 2.4 Local Category Accent Colors

Accent colors for category chip dots, section borders (2px left), icon backgrounds (50% fill). NOT for Hero Zone, NOT for CTA buttons (always orange), NOT for M components (always orange).

| Category | Accent | Hex |
|----------|--------|-----|
| What's On | Teal | `#1D9E75` |
| Where to Eat | Warm Amber | `#BA7517` |
| Going Out | Deep Purple | `#534AB7` |
| Get Outside | Forest Green | `#3B6D11` |
| With Kids | Coral | `#D85A30` |
| Self Care | Soft Pink | `#D4537E` |
| Home Help | Steel Blue | `#185FA5` |

### 2.5 Conversion Moment Gradient

Background: `linear-gradient(180deg, #0A3A6B, #0C447C)`. Heading text: coral/gold `#F5C4B3`. Full-bleed on mobile.

---

## 3. Typography

**Fonts:** Playfair Display (serif, headings/brand) + DM Sans (sans-serif, everything else). Import from Google Fonts. Never use other fonts.

### 3.1 Desktop Scale

| Element | Font | Size | Weight | Line Height | Color |
|---------|------|------|--------|-------------|-------|
| Brand logo / Doc titles | Playfair Display | 28px | 700 | 1.2 | `#0C447C` |
| H1 (Hero Zone) | Playfair Display | 32px | 700 | 1.3 | `#FAC775` (gold on blue) |
| H2 (Sections) | DM Sans | 22px | 600 | 1.3 | `#111827` |
| H3 (Sub-sections) | DM Sans | 18px | 500 | 1.4 | `#111827` |
| Body text | DM Sans | 15px | 400 | 1.7 | `#374151` |
| Card title | DM Sans | 16px | 600 | 1.4 | `#111827` |
| Card body | DM Sans | 14px | 400 | 1.6 | `#374151` |
| Meta / badges | DM Sans | 12px | 500 | 1.4 | `#6B7280` |
| Trust note (Hero) | DM Sans | 12px | 400 | 1.4 | `rgba(255,255,255,0.8)` |
| Data transparency | DM Sans | 11px | 400 | 1.4 | `#6B7280` |
| CTA button text | DM Sans | 14px | 600 | 1.0 | `#FFFFFF` |

### 3.2 Mobile Scale (375px)

| Element | Mobile | Tablet (md:) | Desktop (lg:) |
|---------|--------|--------------|---------------|
| H1 (Hero) | 24px Playfair | 28px | 32px |
| H2 | 18px DM Sans 600 | 20px | 22px |
| H3 | 16px DM Sans 500 | 17px | 18px |
| Body | 15px (NO reduction) | 15px | 15px |
| Card title | 15px DM Sans 600 | 16px | 16px |
| Card body | 13px | 14px | 14px |
| Meta / badges | 11px | 12px | 12px |
| CTA button | 14px (unchanged) | 14px | 14px |

**Rule:** Body text 15px does NOT scale down. This is the minimum readable mobile size.

### 3.3 Navbar Typography

| Element | Mobile | Desktop |
|---------|--------|---------|
| Channel tabs | DM Sans 14px, 500, `letter-spacing: 0.5px` | DM Sans 15px, 500 |
| M logo | Serif `M` on 34px orange circle | Serif `M` on 36px orange circle |
| "mubboo" text | Not shown (M logo only) | 16px `#FAC775` DM Sans 500 |
| Sign in | N/A | 13px pill button |

---

## 4. Spacing

8px base unit. All spacing uses these tokens — never arbitrary values.

| Token | Value | Usage |
|-------|-------|-------|
| space-xs | 4px | Icon-to-text gap, badge padding |
| space-sm | 8px | Card padding (tight), meta elements |
| space-md | 16px | Card padding (standard), between related elements |
| space-lg | 24px | Between sections within a component, card grid gap |
| space-xl | 32px | Between major sections (mobile section spacing) |
| space-2xl | 48px | Between page-level sections (tablet/desktop) |
| space-3xl | 64px | Hero Zone vertical padding (desktop) |

### Container Widths

| Element | Mobile | Tablet (md:) | Desktop (lg:) |
|---------|--------|--------------|---------------|
| Page container | `px-4` (16px sides) | `px-8` (32px sides) | `max-w-[1200px] mx-auto px-8` |
| Hero Zone | Full-bleed blue, content `px-4` | Full-bleed blue, content `px-8` | Full-bleed blue, content `max-w-[1200px]` |
| Cards grid | 1 column, full width | 2 columns, `gap-4` | 2–3 columns, `gap-6` |
| Tables | Horizontal scroll wrapper | Full width | Full width within container |
| Navbar content | Full width | Full width | `max-w-[1400px] mx-auto` centered |

---

## 5. Borders, Radius & Shadows

| Token | Value | Usage |
|-------|-------|-------|
| border-card | `0.5px solid #E5E7EB` | Default card border |
| border-card-hover | `1px solid #F97316` | Card hover state |
| border-m-verdict | `2px solid #F97316` (left only) | M verdict signature marker |
| border-m-local-pick | `3px solid #F97316` (left only) | M's Local Pick component |
| border-upstream | `3px solid #0C447C` (left only) | Upstream cross-link indicator |
| border-table | `1px solid #D1D5DB` | Table cell borders |
| border-whats-new | `3px solid #1D9E75` (top only) | What's New card top accent |
| radius-sm | 4px | Badges, chips, small elements |
| radius-md | 8px | Cards, input fields, buttons, navbar capsule |
| radius-lg | 12px | Hero Zone inner containers, modal dialogs |
| shadow-card | `0 1px 3px rgba(0,0,0,0.1)` | Default card elevation |
| shadow-card-hover | `0 4px 12px rgba(0,0,0,0.1)` | Card hover elevation |

---

## 6. Badge System

| Tier | Background | Text Color | Usage |
|------|-----------|------------|-------|
| Recommended (Green) | `#E1F5EE` | `#166534` | M's Pick, Best Value, 4.5+ rating |
| Good (Blue) | `#E6F1FB` | `#0C447C` | Popular, Convenient, 4.0–4.4 rating |
| Value (Amber) | `#FAEEDA` | `#92400E` | Budget Pick, Flexible Dates, price-related |
| Neutral (Gray) | `#F3F4F6` | `#374151` | Direct Flight, 7h 15m, factual info |

Badge style: DM Sans 12px / weight 500 / padding `4px 8px` / `border-radius: 4px`. Max 4 badges per Hero Zone.

---

## 7. Icons

All icons are inline SVG — never emoji, never icon fonts. Use `currentColor` for theming.

| Context | Size | Stroke |
|---------|------|--------|
| Trust badges (Hero) | 16×16px | 1.5 |
| Section icons | 20×20px | 1.5 |
| Card category icons | 24×24px | 1.5 |
| Trip Planner Bar | 20×20px | filled |
| Navbar icons | 20×20px in 30×30 gold circle | 1.5 |

**Rule:** No decorative icons — every icon must convey meaning or aid scanning.

---

## 8. Touch Targets (Mobile)

All interactive elements: 44×44px minimum (Apple HIG + WCAG 2.1 AAA).

| Element | Target Size | Implementation |
|---------|-------------|----------------|
| CTA buttons | 48px height, full-width mobile | `py-3 w-full md:w-auto` |
| Section Jump Bar links | 44px height, h-scroll | `py-3 px-3 whitespace-nowrap` |
| Category chips | 44px height, h-scroll | `py-2.5 px-4 min-w-[80px]` |
| Card tap areas | Entire card surface | Wrap in `<a>` or `onClick` |
| FAQ accordion triggers | 48px row height | `py-4` full-width tap area |
| Table rows (tappable) | 48px row height | `py-3` row-level onClick |

---

## 9. Breakpoints

3-tier system aligned with Tailwind defaults. Mobile-first CSS — base targets phones.

| Tier | Prefix | Width | Typical | Content Width |
|------|--------|-------|---------|---------------|
| Mobile | (none) | 0–767px | Phones | 100% minus 32px |
| Tablet | `md:` | 768–1023px | iPad, tablets | 100% minus 64px |
| Desktop | `lg:` | 1024px+ | Laptops, desktops | max-width 1200px centered |

**Priority:** Mobile (60% traffic) → Tablet (15%) → Desktop (25%). Mobile layout IS the Google-evaluated layout.

---

## 10. Shared Components — Travel Channel

### 10.1 Hero Zone

Background `#0C447C`, full viewport width. Content `max-w-[1200px]` centered.

**Content stack (top to bottom):**
1. H1: Playfair 32px bold, gold `#FAC775`, max 2 lines
2. Answer-first paragraph: DM Sans 15px white, 1–2 sentences answering user's anxiety
3. Badge row: max 4 badges, semi-transparent white `rgba(255,255,255,0.1)` bg with white text
4. Interactive element (variant-specific): search widget, chips, price badge, or quick facts
5. Trust note: 12px `rgba(255,255,255,0.8)`, one sentence about business model

**Variants:** Flight (search widget) | Destination (verdict + quick facts) | Hotel (search widget + price) | Activity (chips + price) | Local City (city photo overlay + category chips)

**Mobile adaptation:** 32px top / 24px bottom padding. H1 24px max 3 lines. Answer-first text NEVER truncated. Widget stacks vertically.

### 10.2 M Verdict

Orange left-border `2px solid #F97316`. Brand-ownable component — no competitor has structured data + editorial opinion combined.

**5 contexts:**
1. **Inline in table cell:** Amber bg zone in rightmost column
2. **Standalone section (M's Take):** Full card with orange left border, M avatar 24px, month label
3. **Card split zone:** Orange bg zone below card content
4. **M's Local Pick:** Orange left-border 3px + warm bg `#FFF3E6`, standalone spotlight
5. **M's Weekend Pick:** White card (NO orange border — reserved for M's Local Pick)

**M avatar:** 24px circle, brand blue bg (#0C447C for Travel, #F97316 for M's components), white "M" serif.

**Tone:** Opinionated, specific, actionable. Never hedging. Always names specific places. Uses "we" voice. Allowed to be negative. 40–80 words standalone, 1 sentence inline.

### 10.3 Conversion Moment

Blue gradient `#0A3A6B → #0C447C`, full-bleed. Placed at emotional peak after user's decision section.

**Structure:**
- Heading: Playfair, coral/gold `#F5C4B3`, centered
- 3 persona cards (Country Page = 4), stacked vertically on mobile, 12px gap
- Card: question title → 1-line benefit → orange CTA button (48px full-width mobile)
- Quick links row below cards in white

**Placement per page type:**
- Flight Route: after Airline Comparison (persona: budget/comfort/direct)
- Destination Hub: after Decision Matrix (routing: flights/hotels/activities — internal links, not affiliate)
- Hotel City: after Budget Table (persona: budget/first-timer/luxury)
- Activity Hub: after Category Quick Links (persona: first visit/kids/history)

**Honesty rule:** If CTA says "filtered for families" but affiliate URL doesn't support that filter, redesign as internal link. NO FAKE FILTERING.

### 10.4 Section Jump Bar

Sticky horizontal scroll bar. `#0C447C` bg on active link. 6 anchor links per page. Scroll spy via IntersectionObserver.

**Desktop:** Sticky below navbar. **Mobile:** Same, 44px height, horizontal scroll, snap-scroll.

### 10.5 Trip Planner Bar

Blue card `#0C447C`, full-width, 12px radius. 4-column grid (Flights/Hotels/Activities/Guides). Heading: DM Sans 18px gold.

**Modes:** Flight (price from Hero) | Overview (descriptive subtitles) | Product (price ranges). Current page: gold 2px left border + brighter bg.

**Mobile:** Horizontal scroll chips. Tap chip → show links below. Max 4 visible, "Show more" for overflow.

### 10.6 Attach Products Bar

Single-line checklist. Gray-50 bg, 8px radius. Items: checkmark + product name (linked) + one-line description. DM Sans 13px.

**Mobile:** Vertical stack. Each product on its own 44px row with icon + name + orange text CTA.

Used on Flight Route + Hotel City. NOT on Destination Hub (uses Essentials Checklist) or Activity Hub (IS a product page).

### 10.7 Essentials Strip

Light blue `#F0F7FF` card with 4 horizontal scroll cards (140px each): Free tip (green badge) → eSIM → Insurance → Transfers.

Free tip always first (trust before selling). Cards 2-4: amber price badge + orange CTA link. Snap-scroll, no scrollbar. Desktop: 4 cards in row.

Used on 16 pages. NOT on Essentials itself, Travel Homepage, Search, Destinations Hub, Flights Hub, Hotels Hub.

### 10.8 M's Take Callout

Orange left-border 3px. M avatar + month label. 2-3 sentences: what's happening / what to do instead / what to avoid. Try/Skip badges (green/red). Minimum 2 Try + 1 Skip per month.

Dynamic source: `seasonalContent` in country-config.ts (12 monthly presets). ISR, no runtime API.

NOT on Search, Visa, or Compare pages.

### 10.9 Trust FAQ (First FAQ Item)

Always-expanded first item in every page's FAQ. 6 variants by page category:

- **Flight pages:** "How does Mubboo find flight prices?" → Aviasales, 800+ airlines, commission disclosure
- **Hotel pages:** "How does Mubboo find hotel prices?" → Trip.com, 1.7M hotels, free cancellation note
- **Activity pages:** "Is Viator legit?" → Tripadvisor-owned, 400K+ experiences, free cancellation
- **Car rental pages:** "How does Mubboo find car rental prices?" → GetRentacar, 100K+ vehicles
- **Multi-product pages:** "How does Mubboo make money?" → commission model, editorial independence
- **Visa pages:** "How accurate is this visa information?" → State Dept source, verification date

**Rules:** Name the specific partner. Explain commission honestly. State verifiable fact. Never claim "best price" — only "same price as booking directly."

### 10.10 Plan Your Trip Block

Blue card `#0C447C`, full-width mobile. Playfair heading coral. 5 internal link rows: Flights + Hotels + Activities + Guide + Essentials (all destination-specific).

Used on Blog, Visa, Guide, Compare, Theme Landing, Packages (content pages needing routing to transaction pages). NOT on transaction pages, hubs, Search, or Essentials.

### 10.11 Upstream Cross-Link

Full-width, `#E6F1FB` bg, `3px solid #0C447C` left border. Links sub-pages back to Destination Hub. 14px text.

### 10.12 Author Box + Data Transparency

**Author:** Avatar (40px desktop / 32px mobile) + name + role + date inline. Blog/editorial team avatar: M logo 32px, brand blue bg, white M.
**Data Transparency:** 11px text, government links tappable (44px target).

### 10.13 LLM Summary (ListSummary)

Bullet list format before every structured table. Each line: `Name: key fact · key fact · M's one-line verdict`. Top 5-7 entries as summary; full table below.

Used on all Hub pages and all page types with data tables. Retroactive to all mockups — Claude Code applies during implementation.

### 10.14 FAQ Accordion

First FAQ expanded by default, rest collapsed. 48px trigger row, 15px body, smooth 200ms slide-down. Full-width tap target.

---

## 11. Shared Components — Local Channel

### 11.1 City Hero

Deep blue `#0C447C` + city photo overlay (NOT warm brown). Gold `#FAC775` H1 (Playfair). Category chips with color dots (not icons). City switcher dropdown (desktop) / bottom sheet (mobile).

### 11.2 M's Local Pick

Orange left-border 3px `#F97316` + warm bg `#FFF3E6`. M avatar 22px. 2-3 sentences insider neighbor voice + Try/Skip badges. Monthly update. This is the ONLY component with orange left border in Local.

### 11.3 Scene Router

Blue gradient (same as Conversion Moment). Gold heading "What are you in the mood for?" 4 scene cards: Date night / Weekend with kids / Friends night out / Something new. CTA links to Scene Bundle articles or category pages.

### 11.4 What's New Card

Teal top border 3px `#1D9E75`. 3 items + "See all new finds →". First item featured (larger 120×80 thumbnail). Mixed: Viator API products ("Partner" label) + editorial picks (no label). Time stamps: "Added 2 days ago" / "Reopened this week."

### 11.5 Local vs Tourist Price

Split card: red left (tourist trap, price struck through) / teal right (local hack, real price). M's verdict at bottom. Zero revenue = trust investment. 1-2 per city×category page.

### 11.6 M's Weekend Pick

White card, standard border — NO orange left border (reserved for M's Local Pick). "This Sat" time badge. Single recommendation, 2 sentences, 1 CTA. Updated weekly.

### 11.7 Eating Component

2×2 grid on Local category pages:
1. Food walking tours — Viator (8-12%)
2. Private dining — EatWith (10% via Awin)
3. Cooking classes — GYG (8%) or Viator fallback
4. Restaurant deals — Groupon (4-10% via CJ, 3-day cookie)

Each card: 60px photo strip + icon + title + price + affiliate CTA. M's dining tip at bottom.

**Context-adaptive titles per category:**
- things-to-do → "After your adventure: eat in {city}"
- going-out → "Pre-show dinner spots in {city}"
- get-outside → "Refuel after your hike: {city} eats"
- with-kids → "Kid-friendly restaurants in {city}"
- self-care → "Brunch + spa day: treat yourself"
- where-to-eat → NOT shown (IS the eating page). Shows "After dinner" linking to going-out

**Groupon is always card 4, never primary.** 3-day cookie too short.

---

## 12. Shared Components — Cross-Channel

### 12.1 Navbar (Gold Premium — Option C V2)

**Mobile (54px):**
- Background: `#0C447C` (no gradient)
- M logo: 34×34, `#F97316` bg, serif M, `box-shadow: 0 0 0 1.5px rgba(250,199,117,0.25)`
- Channel tabs: DM Sans 14px 500, `letter-spacing: 0.5px`
- Active tab: gold capsule — `#FAC775` text, 500 weight, `1px border rgba(250,199,117,0.25)`, `border-radius: 8px`, `bg rgba(250,199,117,0.06)`
- Inactive tabs: `rgba(250,199,117,0.7)`
- Hamburger icon: 30×30 circle, 1.5px border `rgba(250,199,117,0.3)`, bg `rgba(250,199,117,0.06)`, gold lines
- Account icon: same 30×30 circle style
- Separator: 1px gold hairline gradient (transparent → 50% opacity → transparent)

**Desktop (56px):**
- Content: `max-w-[1400px] mx-auto` centered (sides breathe on wide screens)
- Logo area: hamburger circle + M logo 36×36 + "mubboo" text 16px `#FAC775` weight 500
- Channel tabs: 15px, padding `8px 20px` (inactive) / `8px 22px` (active), gap 8px
- Sign in: pill button, 1px border `rgba(250,199,117,0.25)`, radius 20px, person icon + "Sign in" 13px
- Signed in: avatar 32px circle (initials, purple bg) + dropdown chevron

**Channel labels:** Shop | Travel | Local (Blog removed from TopBar → sidebar/footer)

### 12.2 Hamburger Menu (Full-Screen)

Full-screen `#0C447C`. X close button. 3 channel sections. Local categories get color dots. Sign-in CTA with benefit copy at bottom.

### 12.3 Sign-In Modal

Bottom sheet on mobile, dark overlay. M logo. Google + Apple + Email buttons. "Maybe later" + 30-day dismiss. Terms/Privacy links.

### 12.4 Desktop Left Sidebar

Expanded 240px: 3 channel sections + Blog + Sign-in CTA. Collapsed 60px: icons only with tooltips. Active item: gold highlight + gold bg. Local categories show color dots.

### 12.5 City Picker

Unified search-first city selection component. Replaces all ad-hoc city grids/dropdowns.

**Props:** `channel` ('local' | 'travel' | 'all'), `onSelect(city)`, `triggerStyle` ('button' | 'inline' | 'field')

**5 states:** Default (Popular + All alphabetical) | GeoIP detected (orange "Near you" + Recent + Popular + All) | Typing (fuzzy match, highlighted chars) | Alias match ("sf" → "San Francisco", "aka sf" hint) | No result (friendly empty + "Notify me" email CTA + suggestions)

**Mobile:** Full-screen bottom sheet overlay, search auto-focus. **Desktop:** Dropdown overlay, max-height 400px, escape/outside-click closes.

**Data:** From `cities-master.ts` client-side. Recent in localStorage (`mubboo_recent_cities`, max 3). Selected in cookie (`mubboo_city`, 30-day expiry). Search: `includes()` on `displayName.toLowerCase()` + `aliases`.

**Integration:** 7 page types — /local Hub, Local City Hub, 7 Local category pages, Travel Homepage, Destinations Hub, Activities Hub, Local mega menu.

### 12.6 Travel Bridge (Travel ↔ Local)

**Travel → Local:** "Live in {city}?" + 2 mini-cards with local picks. On Activity Hub, Activity Category, Destination City Hub.
**Local → Travel:** "Visiting {city}?" + 2 mini-cards (flights + hotels). On City Hub + 5 experience categories. NOT on Self Care or Home Help.

### 12.7 Bottom Search Bar (Mobile)

Sticky bottom bar with contextual search placeholder (route-based dynamic text). Future: hold-to-talk AI bar with zero UI change needed.

---

## 13. Mobile Patterns

### Pattern A: Horizontal Scroll Table
Table in `overflow-x-auto` wrapper. First column sticky. Touch-scroll. No visible scrollbar. Used for comparison tables, airline tables, price calendars.

### Pattern B: Card Stack
Full-width cards stacked vertically, 12px gap. Each card: 8px radius, card border, 16px padding. Used for area guides, cost breakdowns, neighborhood cards.

### Pattern C: Accordion
48px trigger row, full-width tap target. Smooth 200ms slide-down. First item expanded. Used for FAQ, visa requirements, itinerary days.

### Pattern D: Horizontal Card Scroll
Cards in `snap-x snap-mandatory` container, no scrollbar. Show 2–2.5 cards (partial card = scroll hint). Card width depends on content (140px Essentials, 280px trip type). Used for Essentials Strip, category chips, destination cards.

---

## 14. Collapse Rules

| Page Type | Collapsed Sections | Rule |
|-----------|-------------------|------|
| Flight Route | §8-9 (Destination, Airport) | 3-line preview + "Read more" |
| Dest City Hub | §10-12 (Safety, Getting Around, Packing) | 3-line preview |
| Country Page | §16-25 (deep content) | Collapsed with preview |
| Guide | Emergency Playbook | Collapsed with red trigger: "Lost your passport? Medical emergency? Open this." |
| Essentials | Product details | "Read more" below verdict |
| Visa | Requirements by type | Accordion by visa type |

**Never collapse:** Free activities, M's Take, Answer-first paragraph, Emergency Playbook content (only trigger is collapsed), Hotel/Activity Hero widgets.

---

## 15. Content Rules (Design Implications)

These Content Bible rules have direct visual design implications:

1. **Answer-first:** H1 + answer paragraph must be visible without scrolling on mobile
2. **M Verdict:** Always in rightmost table column or standalone card — never inline text
3. **Free First:** Free tip/option always appears before paid alternatives
4. **Decision Before Tool:** Editorial content section precedes every search widget
5. **Checklist Not Cards:** Cross-sell products (eSIM, insurance) use single-line format, not card grid
6. **LLM Chunks:** Every table needs a text summary above it for LLM extraction
7. **Question-format headings:** H2s phrased as user questions when possible
8. **Anti-recommendations:** "Skip X" / "Avoid Y" must be visually prominent, not buried
9. **No urgency language:** Never "Book now!", "Limited availability!", "Only X left!"
10. **Editorial Independence:** "Partner" label on affiliate items in Local. Non-affiliate = unlabeled (implicit pure editorial)

---

## 16. Emotional Arcs

### Travel Page Types

| Page | Arc | Conversion Peak |
|------|-----|-----------------|
| Flight Route | Trust → Compare → Convert → Prepare → Reference | After Airline Comparison |
| Destination Hub | Desire → Affordability → Timing → Fit → Convert → Commit | After Decision Matrix |
| Hotel City | Trust → Orient → Budget → Convert → Prepare → Reference | After Budget Table |
| Activity Hub | Trust → Framework → Free → Paid → Depth → Browse → Convert | After Category Quick Links |

### Local Page Types

| Page | Arc |
|------|-----|
| City Hub | Discovery → Freshness → Decision → Browse → Hook → Bridge → Trust |
| Category Page | Discovery → Freshness → Browse → Explore → Eat → Trust → Plan → Bridge → Confirm |

---

## 17. Revenue Exit Rules

Revenue exits are NOT ads. Every exit is a natural continuation of editorial judgment.

**Three forms:**
1. **Inline CTAs:** Within cards/tables, adjacent to editorial verdict
2. **Conversion Moment:** Dedicated component at emotional peak, persona-based routing
3. **Attach Products:** Single-line checklist (not cards, not ads)

**Revenue exit targets by page type:**
- Flight Route: 16 exits (Aviasales 40%)
- Hotel City: 19 exits (Trip.com 5.5%)
- Activity Hub: 25 exits (Viator 8-12%)
- Destination Hub: 12 exits (multi-partner routing)
- Local Category Page: 26-38 exits (mixed affiliates)

**Sub ID convention:** `{country}-{page-code}-{affiliate}` (e.g., `us-nyc-lon-klook`). Eating links: `{country}-{page-code}-eat-{affiliate}`.

---

## 18. Prohibitions

**Never:**
- Use emoji as icons
- Use light blue/pastel Hero Zone
- Use warm brown for Local channel (brand fragmentation)
- Show static prices that could become stale (use API cached or "from $X" range)
- Make eating sections look like ads
- Use Groupon as primary affiliate (3-day cookie)
- Use white text in navbar (all navbar text is gold)
- Add eating to utility pages (Flights Hub, Hotels Hub, Car Rental, Visa, Essentials, Search, Blog Index)
- Use 8-button city grid (all city selection → City Picker component)
- Claim "best price" or "lowest price" — only "same price as booking directly"
- Use `font-family` other than Playfair Display or DM Sans
- Use icon fonts (always inline SVG)
- Hardcode hex colors outside Tailwind config (use tokens)
- Make CTA buttons anything other than `#F97316` orange with white text
- Use `WidthType.PERCENTAGE` in tables (breaks in some renderers)
- Set opacity below 0.7 for inactive navbar tabs (WCAG fail)
- Use serif font in navbar tabs (renders poorly at 14px on Android)

---

## 19. Implementation Workflow

```
DESIGN.md (this file — tokens + constraints)
  → UI UX Pro Max skill (creative execution, layout, spacing)
    → Impeccable skills (/critique /polish /bolder /delight /harden /normalize)
```

**Build order:** Mobile-first. Base styles target phones; `md:` and `lg:` add complexity.

**Audit standard (5 dimensions + 1):**
1. User experience
2. LLM + SEO
3. CMO + CTO
4. $100K consultant
5. Content + Visual + Emotion + Function
6. Affiliate monetization naturalness

**The test:** "Would a user screenshot this page and send it to a friend?" If no → visual-emotion layer is missing.

---

## 20. File References

This DESIGN.md consolidates decisions from:
- Travel-UI-Design-Spec-v1.docx (desktop visual language, 10 chapters)
- Travel-UI-Design-Spec-v2.0-Mobile-Adaptation.docx (22 page types mobile)
- Local Brand Design session (5 principles, 6 components, 7 categories)
- Navigation V3 session (navbar gold premium, City Picker, sidebar)
- Eating + City Picker Integration Spec v1 (31 page type audit)
- 4D Audit session (3 red + 17 amber fixes, 5 new shared components)
- Monetization Strategy session (revenue exit philosophy)

**Authoritative source hierarchy:** This DESIGN.md > progress updates > individual mockups. If conflict exists, this file wins.
