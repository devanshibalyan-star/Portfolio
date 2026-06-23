# Devanshi · Product Marketing Portfolio — PRD

## Original problem statement
Devanshi (4 yrs PMM, PhD in narrative & discourse, Product School certified, UGC-NET qualified) needs a creative, artistic, bold-coloured portfolio that converts recruiters/founders in 30 seconds. Target verticals: AI, Beauty & Wellness, Cosmetics. Must feel editorial/studio-made, not template, not résumé page.

## User personas
- **Primary**: Recruiters & hiring managers at startups, D2C, B2B brands in AI, Beauty & Wellness, Cosmetics.
- **Secondary**: Founders & marketing leads. Skim fast, desktop + mobile.

## User-confirmed choices
- Palette: Renaissance-inspired (deep crimson, ochre, ultramarine, warm cream)
- CV: placeholder button (Devanshi will wire up later)
- Contact: direct email + LinkedIn only (no contact form)
- Case studies: rich narratives with realistic-sounding metrics

## Architecture
- React 19 + react-router-dom 7 single-page site
- Tailwind 3 with CSS variables (Cormorant Garamond + Outfit fonts)
- No backend changes (boilerplate FastAPI retained)
- All data-testid via `/app/frontend/src/constants/testIds/portfolio.js`

## What's been implemented (2025-12 / Iteration 1)
- Sticky glassmorphic nav (Devanshi., About, Selected Work, Gallery, Contact, Let's talk CTA)
- Hero: bold serif display, Renaissance painting fragment, 3 verticals (AI/Beauty/Cosmetics)
- Capabilities marquee ticker (crimson)
- About: classical statue image, credential badges, 3 stats, italic pull-quote
- Selected Work: 4 case studies (Luco, Moxie Beauty, Athena Education, JSS) in Challenge → Insight → Strategy → Result layout
- Campaign Gallery: 9-tile bento mosaic mixing image + text tiles, labelled Real work / Concept / Framework
- Contact: email mailto, LinkedIn external link, CV download placeholder (alert), Available Q1 2026 badge
- Footer
- Scroll-reveal animations, magnetic button hovers, image hover scale, paper-grain texture
- 100% pass on testing_agent_v3 (iteration_1.json)

## Iteration 2 (2025-12) — Content + creative polish
- Added 5th case study: **Lahori Zeera** (₹10 vs $10B narrative, with cursive takeaway line)
- Added Roburae-style **"your problems / our solution"** comparison block inside Moxie Beauty case
- Replaced Moxie image with a non-person skincare bottle photo
- Casey-style **graphic poster tiles** in gallery (Archivo Black, bold lowercase): "glow like you mean it", "₹10 beats $10b", "simple. effective. made for you.", "confidence looks good on you"
- Brand-identity swatch tile (Luco monogram + color chips)
- Email updated to **devanshibalyan@gmail.com**; LinkedIn removed entirely
- Location changed Bangalore → **Delhi · Remote**; Caveat script line: "Based in Delhi, available worldwide."
- All em dashes purged from body copy (replaced with periods, commas, colons)
- Added fonts: **Archivo Black** (graphic posters) + **Caveat** (script accents)
- 100% pass on testing_agent_v3 (iteration_2.json)

## Backlog (P0 / P1 / P2)
- **P0** Swap placeholder email + LinkedIn with Devanshi's real contact details
- **P0** Replace Download CV alert with real PDF link once user uploads CV
- **P1** Add Devanshi's headshot in place of statue (optional — many studio sites keep persona abstract)
- **P1** Add per-case-study detail pages (deeper write-ups, more visuals)
- **P2** Light/dark theme toggle, OG meta image, SEO/title, favicon
- **P2** Add an inline contact form with backend persistence (currently direct mailto only)
- **P2** Hook real metrics analytics (Plausible / Umami)

## Next tasks
- Collect real email, LinkedIn URL, CV PDF from Devanshi
- Wire those into Contact.js (single search_replace)
