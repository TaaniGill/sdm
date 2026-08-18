# Sachkhand Digital Marketing — SEO, GEO & AEO Strategy Reference (2026)

> Master strategy document for the static site. Covers keyword architecture, schema,
> internal linking, image ALT, Answer/Generative Engine Optimization, technical SEO
> status, priority fixes, a per-page metadata index, and a future content calendar.
> This is a **reference deliverable** — it documents the live site and recommends the
> next moves; it does not itself change any page.

---

## 1. Executive Summary

The site is a **32-page static marketing site + 8 blog articles**, engineered for three
search surfaces at once:

1. **Classic Google organic** — clean semantic HTML, one `<h1>` per page, H2/H3 hierarchy,
   canonical tags, fast static delivery, `.htaccess` caching/compression/security headers.
2. **Google AI Overviews & AI Mode (GEO)** — `FAQPage`, `Service`, `Organization` and
   `BreadcrumbList` JSON-LD on every page, concise answer-first content blocks, and an
   entity-consistent Organization node referenced by `@id` across the whole site.
3. **Answer engines (AEO)** — ChatGPT Search, Perplexity, Claude, Gemini/Copilot — explicitly
   allowed in `robots.txt`, fed 169 structured Q&A pairs and citable, well-attributed content.

**What is already implemented (see §5 and §10):** JSON-LD across all 40 URLs, `sitemap.xml`,
AI-crawler-friendly `robots.txt`, `BreadcrumbList` schema (visible breadcrumb UI removed by request), per-page unique title/meta/OG/Twitter,
2,000+ word service pages, a 2,900+ word 18-section homepage, and risk-reversal CRO microcopy
on the 10 highest-intent pages.

**Top priority fixes (see §9):** trim over-length `<title>` tags to ≤60 chars and three meta
descriptions to ≤160 chars; add real testimonial/case-study proof to replace placeholders.

---

## 2. Keyword Architecture (by cluster)

Keywords are grouped by page cluster. Each cluster lists the **primary** term (the page's
main ranking target), **secondary** terms (support headings and body), **long-tail**
(question-shaped, AEO-friendly), **semantic/entity** terms (topical breadth signals), and
the dominant **search intent**.

### 2.1 Homepage (`/index.html`) — Brand + Category Authority
- **Primary:** digital marketing agency
- **Secondary:** AI marketing agency, growth marketing agency, full-service digital agency 2026
- **Long-tail:** best digital marketing agency for AI search, digital marketing agency that does SEO and ads
- **Semantic / entities:** SEO, PPC, Google Ads, Meta Ads, branding, web development, ROI, ROAS, Performance Max, AI Overviews
- **Intent:** Commercial investigation → lead

### 2.2 SEO Cluster (`/seo`, `/local-seo`, `/ecommerce-seo`, `/ai-seo`, `/technical-seo`, `/backlink-seo`, `/app-seo`, `/global-seo`)
- **Primary examples:** seo services · local seo services · ecommerce seo services · ai seo services · technical seo services · link building services · app store optimization · international seo services
- **Secondary:** organic traffic growth, keyword rankings, Google Business Profile, Core Web Vitals, INP, hreflang, schema markup, digital PR
- **Long-tail (AEO gold):** how long does SEO take to work, what is AI SEO, how to rank in Google AI Overviews, how to optimize product pages for SEO, what is INP in Core Web Vitals
- **Semantic / entities:** Google, Bing, SGE, AI Mode, E-E-A-T, crawl budget, index bloat, backlinks, referring domains, SERP, ASO
- **Intent:** Commercial

### 2.3 Advertising Cluster (`/advertisement`, `/google-ads`, `/meta-ads`, `/linkedin-ads`, `/performance-marketing`)
- **Primary examples:** google ads management · meta ads management · linkedin ads management · performance marketing agency · digital advertising services
- **Secondary:** Performance Max, Advantage+, PPC management, ROAS optimization, retargeting, ABM, lead generation ads
- **Long-tail:** how much do google ads cost, what is performance max, how to lower cost per lead, is linkedin advertising worth it for B2B
- **Semantic / entities:** CPC, CPM, CPA, conversion tracking, server-side tracking, Conversions API, retail media, creative testing
- **Intent:** Commercial / Transactional

### 2.4 Marketing Services Cluster (`/email-marketing`, `/sms-marketing`, `/social-media-marketing`, `/content-marketing`)
- **Primary examples:** email marketing services · sms marketing services · social media marketing services · content marketing services
- **Secondary:** marketing automation, deliverability, RCS, short-form video, topical authority, lead nurture
- **Long-tail:** what is the ROI of email marketing, how often should you post on social media, what is conversational commerce
- **Semantic / entities:** open rate, CTR, segmentation, Reels, TikTok, UGC, editorial calendar, first-party data
- **Intent:** Commercial

### 2.5 Creative & Development Cluster (`/graphics-designing`, `/mobile-app-development`, `/website-development`, `/branding`, `/reputation-management`)
- **Primary examples:** graphic design services · mobile app development · website development services · branding services · online reputation management
- **Secondary:** UI/UX design, iOS and Android apps, conversion-focused websites, brand identity system, review management
- **Long-tail:** how much does a website cost, native vs cross-platform app, what is included in a branding package
- **Semantic / entities:** Figma, Webflow, Shopify, Flutter, WCAG, Core Web Vitals, logo, brand guidelines, Google reviews
- **Intent:** Commercial

### 2.6 Partnership Cluster (`/reseller-packages`, `/agency-partnership`, `/white-label-reports`)
- **Primary examples:** white label reseller · agency partnership · white label reports
- **Secondary:** white label SEO, outsourced fulfillment, co-branded marketing, Looker Studio dashboards
- **Long-tail:** what is white label digital marketing, how do agency partnerships work, best white label SEO provider
- **Semantic / entities:** NDA, wholesale pricing, dedicated account manager, reseller margin, SLA
- **Intent:** Commercial (B2B)

### 2.7 Blog Cluster (`/blogs/*`)
Topic-authority content targeting informational + AEO queries. See §12 for the expansion calendar.

---

## 3. Search Intent & Page-Type Map

| Page type | Intent | Primary conversion goal |
|---|---|---|
| Homepage | Commercial | Free audit / consultation |
| Service pages | Commercial | Service consultation |
| Pricing | Commercial | Plan selection → contact |
| Blog | Informational | Newsletter + internal link to service |
| About | Informational (trust) | Reinforce E-E-A-T → contact |
| Contact | Transactional | Form submission |
| Partnership | Commercial (B2B) | Partner call |

---

## 4. Per-Page Metadata Index (live values)

`Title len` flags any title over Google's ~60-char display limit (**trim** = shorten; see §9).
Primary keyword and dominant intent listed per page.

| URL | Primary keyword | Intent | Title len |
|---|---|---|---|
| /about-us.html | about our agency | Informational | 76 (trim) |
| /advertisement.html | digital advertising services | Commercial | 87 (trim) |
| /agency-partnership.html | agency partnership | Commercial | 61 (trim) |
| /ai-seo.html | ai seo services | Commercial | 92 (trim) |
| /app-seo.html | app store optimization | Commercial | 72 (trim) |
| /backlink-seo.html | link building services | Commercial | 89 (trim) |
| /blog.html | digital marketing blog | Informational | 89 (trim) |
| /branding.html | branding services | Commercial | 70 (trim) |
| /contact.html | contact digital marketing agency | Transactional | 81 (trim) |
| /content-marketing.html | content marketing services | Commercial | 89 (trim) |
| /ecommerce-seo.html | ecommerce seo services | Commercial | 92 (trim) |
| /email-marketing.html | email marketing services | Commercial | 93 (trim) |
| /global-seo.html | international seo services | Commercial | 70 (trim) |
| /google-ads.html | google ads management | Commercial | 95 (trim) |
| /graphics-designing.html | graphic design services | Commercial | 91 (trim) |
| /index.html | digital marketing agency | Commercial | 93 (trim) |
| /linkedin-ads.html | linkedin ads management | Commercial | 88 (trim) |
| /local-seo.html | local seo services | Commercial | 95 (trim) |
| /meta-ads.html | meta ads management | Commercial | 96 (trim) |
| /mobile-app-development.html | mobile app development | Commercial | 88 (trim) |
| /performance-marketing.html | performance marketing agency | Commercial | 91 (trim) |
| /pricing.html | digital marketing pricing | Commercial | 68 (trim) |
| /privacy.html | privacy policy | Navigational | 44 |
| /reputation-management.html | online reputation management | Commercial | 96 (trim) |
| /reseller-packages.html | white label reseller | Commercial | 87 (trim) |
| /seo.html | seo services | Commercial | 86 (trim) |
| /services.html | digital marketing services | Commercial | 95 (trim) |
| /sms-marketing.html | sms marketing services | Commercial | 83 (trim) |
| /social-media-marketing.html | social media marketing services | Commercial | 95 (trim) |
| /technical-seo.html | technical seo services | Commercial | 90 (trim) |
| /website-development.html | website development services | Commercial | 93 (trim) |
| /white-label-reports.html | white label reports | Commercial | 70 (trim) |

---

## 5. Structured Data (Schema.org JSON-LD) — Implemented

Every page carries a `@graph` block. Node coverage by page type:

| Page type | Nodes present |
|---|---|
| Homepage | Organization/ProfessionalService, WebSite, WebPage, BreadcrumbList, FAQPage |
| Service pages (25) | Organization, WebSite, WebPage, BreadcrumbList, **Service**, **FAQPage** |
| About | Organization, WebSite, **AboutPage**, BreadcrumbList |
| Contact | Organization, WebSite, **ContactPage**, BreadcrumbList |
| Pricing | Organization, WebSite, WebPage, BreadcrumbList, FAQPage |
| Blog listing | Organization, WebSite, CollectionPage, BreadcrumbList |
| Blog posts (8) | **BlogPosting** (author, datePublished, image, section), Organization, BreadcrumbList |

**Entity grounding:** the Organization node (`@id` = `…/#organization`) includes `sameAs`
(5 social profiles), `contactPoint`, `address`, `founder`, `foundingDate`, `areaServed`
(6 countries) and `logo`. This is the single most important asset for GEO — it gives AI
engines one authoritative, consistent entity to cite.

**169 FAQ Q&A pairs** are exposed as `FAQPage` schema, extracted verbatim from on-page content
(no mismatch between visible and structured content — a Google requirement).

**Recommended next schema additions:**
- `AggregateRating` / `Review` on the Organization once real reviews are collected (unlocks star rich results). **Do not fabricate** — add only with genuine, verifiable reviews.
- `Offer` / `PriceSpecification` on `/pricing` once public prices are set.
- `VideoObject` on any page that embeds video.

---

## 6. Internal Linking Architecture

**Hub-and-spoke model:**
- `/services` is the **services hub**; every service page links back to it (breadcrumb + footer).
- `/seo` is a **sub-hub** linking down to the 7 SEO spokes (local, ecommerce, ai, technical, backlink, app, global).
- `/advertisement` sub-hubs to google-ads, meta-ads, linkedin-ads.
- Every service page links to `/pricing` and `/contact` (conversion path).
- Blog posts link **up** to the relevant money page (e.g. the AI-SEO article → `/ai-seo.html`).

**Anchor-text guidance (avoid over-optimization):**
- Use descriptive, varied anchors: "our AI SEO service", "learn how technical SEO works", "see local SEO pricing" — **not** repeated exact-match "SEO services" every time.
- Keep 1–3 contextual in-body links per page pointing to the most relevant sibling/parent.
- **Action item:** add contextual in-body links from each blog post to 1–2 money pages (currently blog posts mostly link back to the blog index). This is the biggest untapped internal-link opportunity.

---

## 7. Image ALT Strategy

Current images: logo (SVG), case-study icons (SVG), 4 blog hero PNGs.

- **Logo:** `alt="Sachkhand Digital Marketing"` (present).
- **Blog heroes:** set descriptive, keyword-aware ALT, e.g. `alt="AI SEO strategy for Google SGE and AI Overviews in 2026"`.
- **Decorative SVG orbs/shapes:** `alt=""` (empty) so screen readers/crawlers skip them.
- **Future service-page imagery:** describe the outcome, not the file — `alt="Google Ads dashboard showing 4.7x ROAS after campaign restructure"`.
- Every meaningful image should have ALT; every decorative one should have empty ALT. This helps both accessibility (WCAG) and Google Images / AI multimodal understanding.

---

## 8. GEO & AEO Recommendations (AI Search)

**GEO (Generative Engine Optimization) — getting cited in Google AI Overviews / AI Mode:**
1. **Answer-first blocks.** Open key sections with a 2–3 sentence direct answer, then expand. AI Overviews lift concise, self-contained answers.
2. **Definitional clarity.** Include "X is …" sentences for every core term (already partly done in FAQs). Expand to in-body glossary-style lines.
3. **Structured data = done.** FAQPage + Service + Organization are the strongest GEO signals; keep visible content and schema identical.
4. **Freshness signals.** Update `dateModified` in BlogPosting and add "Last updated" lines when content changes — AI engines favor fresh, dated content.

**AEO (Answer Engine Optimization) — ChatGPT Search, Perplexity, Claude, Gemini:**
1. **robots.txt already allows** GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot, Google-Extended, Bingbot. ✅
2. **Citable statistics.** Answer engines love quotable numbers ("email returns $42 per $1", "98% retention"). Keep these attributed and specific.
3. **Entity consistency.** Same NAP (name, address, phone) everywhere — the JSON-LD `@id` graph enforces this. Keep the footer + schema + contact page identical.
4. **Comparison & "best" framing.** Answer engines synthesize comparisons; the "vs in-house / vs freelance" sections on partnership pages are ideal AEO fodder — replicate that pattern on service pages ("agency vs DIY SEO").

---

## 9. Priority Fixes (highest ROI, do first)

1. **Trim over-length titles to ≤60 chars.** 30 of 32 titles exceed 60 (see §4). Google truncates them in SERPs. Keep the brand suffix only where room allows; lead with the keyword. Example rewrites:
   - `/seo.html` → **"SEO Services That Rank in Google & AI Search | SDM"** (52)
   - `/google-ads.html` → **"Google Ads Management — Performance Max Experts"** (48)
   - `/ai-seo.html` → **"AI SEO Services: Rank in ChatGPT & Google AI Mode"** (51)
   - `/index.html` → **"Digital Marketing Agency for AI-Era Growth | SDM"** (49)
2. **Trim 3 meta descriptions to ≤160 chars:** `/index.html` (187), `/services.html` (185), `/about-us.html` (178).
3. **Replace proof placeholders with real data.** The homepage Case Studies section and service-page testimonials use placeholders — swap in real (or clearly anonymized, accurate) results and testimonials. Add `Review`/`AggregateRating` schema **only** once genuine reviews exist.
4. **Add blog → money-page contextual links** (see §6).
5. **Verify real PHP mail delivery** on the live host (the JS↔PHP contract is confirmed; actual `mail()` send is host-dependent).

---

## 10. Technical SEO Checklist — Status

| Item | Status |
|---|---|
| One H1 per page | ✅ verified on all 40 |
| Semantic H2/H3 hierarchy | ✅ |
| Canonical tags | ✅ all pages |
| XML sitemap | ✅ `/sitemap.xml` (40 URLs) |
| robots.txt (+ AI crawlers) | ✅ |
| JSON-LD structured data | ✅ all pages |
| Breadcrumbs | ✅ `BreadcrumbList` schema on all interior pages (visible UI removed by request) |
| Open Graph + Twitter cards | ✅ all pages |
| Mobile-first responsive | ✅ (existing CSS) |
| Gzip + browser caching | ✅ `.htaccess` |
| Security headers | ✅ `.htaccess` |
| HTTPS/canonical host | ⚠️ enforce `www` + HTTPS 301 on the live server |
| Core Web Vitals (INP/LCP/CLS) | ⚠️ validate on production with PageSpeed Insights / CrUX |
| Image `alt` completeness | ⚠️ audit per §7 |
| Title length ≤60 | ⚠️ see §9 |

---

## 11. Conversion Optimization Notes

- **Homepage** now follows the full 18-section persuasion arc: Hero → Problem → Solution → Why Us → Services → Metrics → Industries → Case Studies → Process → Testimonials → Tech/AI → Pricing Preview → Insights → FAQ → CTA.
- **Risk reversal** microcopy ("free audit, no lock-in, transparent reporting, senior specialist") is live on the 10 highest-intent service pages — extend to the rest.
- **Every section has a next step.** Keep the dual-CTA pattern (consultation + audit) consistent.
- **Add urgency honestly** (e.g. "limited onboarding slots per month") only if true — false scarcity erodes trust and E-E-A-T.
- **Sticky Calendly + WhatsApp** buttons are global — good. Consider an exit-intent audit offer on service pages.

---

## 12. Future Content Calendar (blog expansion for topical authority)

Each topic targets an AEO/informational query and links **up** to a money page.

**AI Search / GEO (→ /ai-seo, /seo)**
1. "How to Get Your Business Cited in Google AI Overviews" 
2. "GEO vs SEO: What's Actually Different in 2026"
3. "AEO Explained: Ranking in ChatGPT Search & Perplexity"
4. "Schema Markup That Wins AI Overview Citations"

**SEO (→ /seo, /technical-seo, /local-seo)**
5. "INP Explained: The Core Web Vital That's Costing You Rankings"
6. "The 2026 Local SEO Checklist for Multi-Location Brands"
7. "Topical Authority: How to Build Content Clusters That Rank"
8. "Ecommerce SEO: Category Pages vs Product Pages"

**Paid Media (→ /google-ads, /meta-ads, /performance-marketing)**
9. "Performance Max: The Inputs That Actually Control Results"
10. "Server-Side Tracking Setup for Accurate ROAS in 2026"
11. "Advantage+ vs Manual Campaigns: When to Use Each"
12. "Retail Media Networks: Should You Shift Budget from Google?"

**Content / Social / Email (→ respective service pages)**
13. "First-Party Data: Building Audiences That Survive Any Algorithm"
14. "Short-Form Video Strategy for B2B Brands"
15. "RCS Messaging: The Upgrade Replacing SMS Marketing"
16. "The E-E-A-T Content Framework for AI-Era Trust"

**Web / Brand / CRO (→ /website-development, /branding)**
17. "Core Web Vitals 2.0: A Pre-Launch QA Checklist"
18. "Headless CMS for Growing Businesses: Worth It?"
19. "Motion Branding: Why Your Logo Needs to Move in 2026"
20. "The Anatomy of a Landing Page That Converts at 8%+"

**Publishing cadence:** 2–4 posts/month, each 1,500–2,500 words, answer-first structure,
`BlogPosting` schema, and 1–2 contextual links to the mapped money page.

---

## 13. Related-Service Link Map (for on-page cross-linking)

| Page | Should link to |
|---|---|
| /seo | /local-seo, /technical-seo, /ai-seo, /content-marketing, /pricing |
| /google-ads | /meta-ads, /performance-marketing, /advertisement, /pricing |
| /ai-seo | /seo, /content-marketing, /technical-seo |
| /website-development | /seo, /technical-seo, /branding |
| /content-marketing | /seo, /ai-seo, /social-media-marketing |
| /branding | /graphics-designing, /website-development |
| /reseller-packages | /agency-partnership, /white-label-reports |
| Every blog post | its mapped money page (§12) |

---

*Document generated as part of the 2026 SEO/GEO/AEO optimization pass. Update §4 and §9 after
applying the title/meta trims, and §5 after adding review schema.*

---

## 14. Industry / Vertical Landing Pages (recommended build)

Vertical pages are the fastest path to long-tail commercial rankings and AEO ("best SEO for
dentists") because they match how buyers actually search. Build these as `/[service]-for-[industry].html`
with 1,500–2,000 words each, industry-specific pain points, a mini case-study placeholder, an
`FAQPage` + `Service` schema (with `audience` = the industry), and cross-links to the core service.

**Phase 1 — highest commercial value (build first):**
1. `/seo-for-dentists.html`
2. `/seo-for-lawyers.html`
3. `/seo-for-doctors.html` (healthcare / clinics)
4. `/seo-for-ecommerce.html` (or consolidate with `/ecommerce-seo`)
5. `/seo-for-saas.html`
6. `/seo-for-real-estate.html`
7. `/seo-for-restaurants.html`
8. `/seo-for-hotels.html`
9. `/seo-for-manufacturing.html`
10. `/seo-for-home-services.html` (plumbers, HVAC, electricians)

**Phase 2 — extend the model to paid + web:** `/google-ads-for-dentists`, `/web-design-for-lawyers`,
`/local-seo-for-restaurants`, etc. Each industry becomes a hub linking to every service variant.

**Internal-link rule:** every industry page links **up** to its parent service (`/seo`), **sideways**
to 2–3 sibling industries, and **down/out** to the relevant blog cluster. This builds a dense,
crawlable topical mesh — exactly what Google and AI engines reward for topical authority.

---

## 15. 100 Blog Topics — Clustered Content Calendar

Each cluster reinforces a money page (topical authority) and targets informational + AEO queries.
Format: answer-first, `BlogPosting` schema, 1 pillar + supporting posts, internal link to the mapped service.

### Cluster A — SEO Fundamentals (→ /seo) — PILLAR: "The Complete Guide to SEO in 2026"
1. How Long Does SEO Take to Show Results?
2. SEO vs SEM: Which Delivers Better ROI?
3. On-Page vs Off-Page SEO Explained
4. What Is a Good Organic Click-Through Rate?
5. How to Do Keyword Research in 2026
6. Search Intent: The Ranking Factor Most Sites Ignore
7. How Many Keywords Should One Page Target?
8. Why Is My Website Not Ranking on Google?
9. SEO Myths That Are Costing You Traffic
10. How to Measure SEO ROI (With Formulas)

### Cluster B — AI Search / GEO / AEO (→ /ai-seo) — PILLAR: "Generative Engine Optimization: The 2026 Playbook"
11. What Is GEO (Generative Engine Optimization)?
12. What Is AEO (Answer Engine Optimization)?
13. How to Get Cited in Google AI Overviews
14. How to Rank in ChatGPT Search
15. How to Show Up in Perplexity Answers
16. GEO vs SEO: What Actually Changed
17. Does Schema Help with AI Search?
18. How AI Overviews Affect Click-Through Rates
19. Optimizing Content for Gemini & Copilot
20. Will AI Search Kill Traditional SEO?

### Cluster C — Technical SEO (→ /technical-seo) — PILLAR: "The Technical SEO Audit Playbook"
21. Core Web Vitals Explained (LCP, INP, CLS)
22. What Is INP and How to Fix It
23. How to Improve Largest Contentful Paint
24. Crawl Budget: What It Is and Who Should Care
25. Index Bloat: How to Find and Fix It
26. XML Sitemaps: Best Practices for 2026
27. Robots.txt Mistakes That Block Rankings
28. Canonical Tags: A Practical Guide
29. Structured Data Types Every Site Needs
30. JavaScript SEO: Rendering & Crawlability

### Cluster D — Local SEO (→ /local-seo) — PILLAR: "Local SEO Playbook: Dominate Your City"
31. How to Optimize Your Google Business Profile
32. Local Citations: Do They Still Matter?
33. How to Get More Google Reviews (Ethically)
34. Local Pack Ranking Factors in 2026
35. Multi-Location SEO Strategy
36. "Near Me" Searches: How to Capture Them
37. Service-Area Business SEO Guide
38. How to Rank on Google Maps
39. Local Link Building Tactics
40. Managing Reviews Across Platforms

### Cluster E — Ecommerce SEO (→ /ecommerce-seo)
41. Product Page SEO: The Complete Checklist
42. Category Page vs Product Page SEO
43. How to Handle Out-of-Stock Product SEO
44. Faceted Navigation & Crawl Waste
45. Ecommerce Schema: Product, Offer, Review
46. Shopify SEO: Platform-Specific Wins
47. How to Write Product Descriptions That Rank
48. Reducing Duplicate Content in Ecommerce
49. Ecommerce Site Architecture Best Practices
50. Seasonal SEO for Online Stores

### Cluster F — Google Ads / PPC (→ /google-ads) — PILLAR: "The Complete Google Ads Guide for 2026"
51. How Much Do Google Ads Cost?
52. What Is Performance Max and How to Use It
53. Manual vs Automated Bidding in 2026
54. How to Lower Your Cost Per Lead
55. Quality Score: How to Improve It
56. Google Ads Account Structure Best Practices
57. Enhanced Conversions & Server-Side Tracking
58. Negative Keywords: The Money-Saver
59. Responsive Search Ads Best Practices
60. How to Read a Google Ads Report

### Cluster G — Meta / Social Ads (→ /meta-ads, /social-media-marketing)
61. Meta Advantage+ vs Manual Campaigns
62. How the Meta Algorithm Works in 2026
63. Facebook Ads Cost Breakdown
64. Creative Testing Frameworks for Meta
65. The Conversions API Explained
66. Retargeting After iOS Privacy Changes
67. Instagram Reels Ads: A Playbook
68. TikTok Ads vs Meta Ads for DTC
69. UGC Ads: Why They Outperform
70. Social Commerce: Selling In-Feed

### Cluster H — Content Marketing (→ /content-marketing)
71. Topical Authority: How to Build It
72. Content Clusters & Pillar Pages Explained
73. The E-E-A-T Content Framework
74. How to Write Content for AI Search
75. Content Refresh: When and How
76. How Long Should a Blog Post Be?
77. How to Build a Content Calendar
78. Repurposing Content Across Channels
79. Meta Titles & Descriptions That Get Clicks
80. Content ROI: Measuring What Matters

### Cluster I — Email & Automation (→ /email-marketing, /sms-marketing)
81. Email Marketing ROI: Is It Still 42:1?
82. Deliverability: Why Emails Land in Spam
83. Welcome & Abandoned-Cart Flow Blueprints
84. Segmentation Strategies That Lift Revenue
85. SMS vs Email: When to Use Each
86. What Is RCS Messaging?
87. Building First-Party Data Post-Cookies
88. Marketing Automation for Small Teams
89. A/B Testing Subject Lines
90. Re-Engagement Campaigns That Work

### Cluster J — Web, CRO & Brand (→ /website-development, /branding)
91. The 5-Second Website Test
92. Landing Page Anatomy That Converts
93. CRO: 15 Tests to Run First
94. Core Web Vitals for Web Designers
95. Headless CMS: Is It Right for You?
96. How Much Should a Website Cost?
97. Rebrand vs Refresh: How to Decide
98. Building a Brand Style Guide
99. Motion Branding in 2026
100. Website Accessibility (WCAG) for Marketers

**Cadence:** publish 2–4/month; start with the 10 pillar posts, then fill each cluster. Every post
must (a) open with a direct answer, (b) carry `BlogPosting` schema, (c) link to its mapped money page
with a descriptive anchor, and (d) link to 1–2 sibling posts in the same cluster.

---

## 16. EEAT Evidence Roadmap (asset-gated — replace placeholders with REAL proof)

These raise EEAT / Authority / Trust from ~6 to ~9 but require **real** assets. **Do not fabricate.**

| Asset | Where it goes | Priority |
|---|---|---|
| Real client logos (with permission) | Homepage credentials bar | High |
| Verified review badges (Google, Clutch, GoodFirms) | Trust bar + footer | High |
| `Review` / `AggregateRating` schema (from real reviews) | Organization schema | High |
| 3–5 real case studies (metrics + screenshots) | Homepage + case-study pages | High |
| Video testimonials | About + service pages | Medium |
| Team photos + LinkedIn + author bios | About + blog `author` | Medium |
| Certification badge images + verification links | About + credentials bar | Medium |
| Press mentions ("As seen in") — only if genuine | Homepage | Optional |

> **Guardrail:** the current homepage case-study and testimonial blocks are clearly-marked
> placeholders, and the credentials bar uses the agency's own claimed partnerships/stats. Ship
> real, verifiable proof before launch. Fabricated credentials or reviews are an EEAT and legal
> liability that can trigger manual actions and destroy trust — the opposite of the goal.
