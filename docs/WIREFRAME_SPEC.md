# EZ Kyosk website wireframe specification

Status: implemented as the full responsive local-review website.

Last updated: 12 November 2026

## 1. Purpose

This document translates the approved design references and roadmap decisions into an original EZ Kyosk page framework. It defines hierarchy, responsive layout, crawlable content structure, and interaction behavior before visual implementation.

The website must feel bold, welcoming, elegant, and product-led. It should borrow useful patterns from the approved references without copying their text, imagery, branding, or exact compositions.

## 2. Non-negotiable principles

- Use semantic, server-rendered HTML for every important heading, answer, capability, industry, and call to action.
- Do not bake meaningful text into promotional images.
- Support accessible light/dark themes without changing, hiding, or duplicating crawlable content.
- Use progressive animation only; content and navigation must remain available without JavaScript.
- Preserve keyboard, focus, reduced-motion, contrast, touch-target, and responsive requirements.
- Use original, licensed, owner-supplied, or generated assets only.
- Use the owner-confirmed commercial capability scope recorded in `PROJECT_PLAN.md`.
- Describe bespoke extensions as configurable to client requirements rather than default inclusions.
- Do not promise a search ranking or use unsupported statistics, customer claims, or provider compatibility.

## 3. Global information architecture

### Primary navigation

1. Product
2. How It Works
3. Solutions
4. Industries
5. About
6. Request a Demo

`Request a Demo` is the persistent primary CTA. `Explore EZ Kyosk` is the product-demo CTA and opens `https://reniel-relearn.github.io/EZ-Kyosk/`.

### Recommended link behavior

- **Product:** `/features/`
- **How It Works:** `/#how-it-works`
- **Solutions:** `/solutions/`
- **Industries:** `/solutions/#industries` until distinct industry pages have enough original content
- **About:** `/about/`
- **Request a Demo:** `/contact/`
- **Explore EZ Kyosk:** external public kiosk experience, clearly labeled as opening the interactive demo

Keep `/how-it-works/` as an indexable, expanded educational page. The homepage presents the approved core flow immediately before the FAQ; the dedicated route adds depth and internal links rather than becoming an exact duplicate.

### Header behavior

**Desktop:**

- Left: official EZ Kyosk lockup.
- Center/right: compact navigation with visible current state.
- Far right: compact theme control and Request a Demo button.
- Sticky after the hero starts leaving the viewport; avoid hiding the H1 beneath it.
- Keep the header logo visually smaller than the previous implementation while preserving its proportions.

**Mobile/tablet:**

- Left: proportional logo.
- Right: Request a Demo and menu controls, or menu control alone when width is constrained.
- Menu opens as a vertically stacked panel; no horizontal navigation scrolling.
- Escape closes the menu and returns focus to the trigger.

## 4. Visual system proposal

### Typography

Use **Plus Jakarta Sans** as the single type family.

- Display/H1: ExtraBold 800, compact line height, modest negative tracking.
- H2: ExtraBold or Bold 700-800.
- H3/card title: Bold 700.
- Body: Regular or Medium 400-500.
- Labels/navigation/buttons: SemiBold 600.
- Avoid using ExtraBold for paragraphs, controls, or dense supporting copy.

Proposed responsive scale:

| Role | Mobile | Desktop |
| --- | ---: | ---: |
| H1 | 42-54 px | 72-92 px |
| H2 | 34-42 px | 52-68 px |
| H3 | 22-26 px | 26-32 px |
| Lead | 19-22 px | 21-25 px |
| Body | 16-18 px | 17-19 px |
| Label/nav | 13-15 px | 14-16 px |

Final sizes must respond to available width and pass overflow checks at 320 px.

### Logo-derived color proposal

The official lockup's dominant sampled colors are deep blue-teal and bright turquoise. Proposed tokens:

| Token | Proposed value | Use |
| --- | --- | --- |
| `--ink-950` | `#002028` | Primary headings, dark panels, footer |
| `--ink-900` | `#002830` | Secondary dark surfaces |
| `--ink-800` | `#003840` | Hover/focus reversals and gradients |
| `--brand-600` | `#00AFA8` | Accessible accent text/borders on light surfaces |
| `--brand-500` | `#00C8C0` | Primary brand accent and controlled glow |
| `--brand-300` | `#5BEDE5` | Highlights and decorative gradients |
| `--paper` | `#F7FBFA` | Main background |
| `--surface` | `#FFFFFF` | Cards and raised panels |
| `--mist` | `#EAF4F3` | Alternate sections |
| `--line` | `#CDE0DE` | Borders and separators |
| `--text-muted` | `#4E6668` | Supporting copy after contrast validation |

The palette remains intentionally small: one dark family, one turquoise family, and neutral surfaces. Final tokens require visual and contrast approval during the first wireframe review.

### Surface and shape language

- Use generous whitespace and a consistent maximum content width.
- Prefer large section blocks over many small floating cards.
- Use restrained radii: medium for controls/cards, larger only for major feature panels.
- Use borders and tonal changes before shadows.
- Keep shadows soft and low-opacity; avoid glass effects that reduce readability.
- Product UI mockups may be denser than marketing copy but must remain legible at intended sizes.

### Hover, focus, and motion

- Primary interactive reversal: turquoise surface to deep ink, or deep ink to turquoise.
- Optional glow: turquoise at low opacity, confined to the component boundary.
- Transition duration: approximately 160-240 ms for color, border, opacity, and transform.
- Use small elevation or translation only; avoid layout-shifting scale effects.
- Hover must have an equivalent keyboard focus-visible treatment.
- Respect `prefers-reduced-motion: reduce` and disable nonessential motion.
- Do not delay text rendering, lazy-render indexable copy, or hide content behind hover-only interactions.

## 5. Responsive framework

Design and validate at minimum:

- 320-390 px: narrow mobile
- 430-768 px: large phone/small tablet
- 769-1024 px: tablet
- 1025-1439 px: desktop
- 1440-1920+ px: large desktop/ultrawide

Rules:

- The document scrolls vertically only.
- No component may introduce page-level horizontal overflow.
- Two-column layouts stack when either column becomes unreadable.
- Desktop product tabs become vertically stacked product sections on mobile.
- Important images use reserved aspect-ratio boxes to avoid layout shift.
- Cards may form two columns on tablets and one column on phones.
- Touch targets should be at least 44 by 44 CSS pixels.

## 6. Homepage wireframe

### Section 1 - Header

Purpose: brand recognition, crawlable navigation, and demo conversion.

Layout: global header described above. Include a keyboard-accessible light/dark theme toggle with saved preference and system-default fallback.

### Section 2 - Hero

Purpose: communicate product category, primary benefit, audience, and next action within the first viewport.

**Desktop layout:**

- Left 45-50%: eyebrow, H1, concise description, audience line, primary/secondary CTAs, tagline.
- Right 50-55%: original product/kiosk composition with accessible supporting caption.
- Keep the hero brand-first and integration-neutral.

**Mobile layout:**

- Copy first, product visual second.
- Preserve both CTAs without crowding.
- Avoid placing small product-interface text inside the hero image as the only explanation.

Content direction:

- Eyebrow: `SELF-ORDERING KIOSK SOFTWARE · PHILIPPINES`
- H1: `Self-Ordering Made Easy for Your Business.`
- Description: `Give customers the freedom to explore your menu, select their favorites, and review their orders—all from one touchscreen.`
- Audience line: `For cafés, bakeries, restaurants & quick-service businesses.`
- CTA labels: `Explore EZ Kyosk` and `Request a Demo`.
- Tagline: `Your Menu. Their Order. One Simple Screen.`
- These hero strings are locked for SEO/GEO/AEO continuity; future revisions may change only presentation unless the owner explicitly re-approves copy changes.
- The image caption may reflect the latest verified operational scope and must not repeat outdated “planned” language.

### Section 3 - Benefits

Purpose: answer why a business should consider self-ordering without unsupported statistics.

Pattern: one wide light panel containing three clear benefit columns.

Working themes:

1. Faster - a more direct customer ordering path.
2. More - another channel for handling customer demand.
3. Better - clearer ordering and service flow.

Use cautious, factual language. Do not include numbered citations or competitor wording in the interface.

### Section 4 - Platform/features overview

Purpose: show that EZ Kyosk can support a connected operating experience while separating standard core capabilities from configurable extensions.

Pattern: four or five original image-led feature cards inspired by the reference grid, not copied from it.

Recommended cards:

- Self-ordering experience
- POS and checkout
- Payments with AltPayNet
- Inventory and order tracking
- Configurable reports, customers, loyalty, and promotions

Each card includes a short factual sentence and links to the relevant product section. Avoid using competitor product names such as QashierHQ or Treats.

### Section 5 - Product architecture

Purpose: provide the strongest product explanation and support answer-engine extraction.

**Desktop:** crawlable tablist controlling five visible semantic panels.

1. Self-Ordering
2. POS & Checkout
3. Inventory
4. Reports & Analytics
5. Customers

**Mobile:** render the same five panels as vertically stacked sections. Do not require horizontal tab scrolling.

Default panel: Self-Ordering.

Self-Ordering composition:

- Left: product label, H2, concise overview, five verified capability bullets.
- Center: original kiosk/device render.
- Right: original HTML/CSS order summary or screenshot with adjacent crawlable explanation.

Suggested core bullets:

- Menu browsing and product selection
- Cart and order review
- Order queueing and tracking
- POS and checkout connection
- Real-time inventory visibility

The panels must clarify which expanded reports, customer tools, loyalty, promotions, or other features are configured to client requirements.

### Section 6 - AltPayNet payments

Purpose: present the approved payment relationship without crowding the brand-first hero.

Pattern: a centered section heading followed by two large cards.

Card A - Terminal integration:

- In-store terminal composition.
- Card/terminal checkout explanation.
- CTA to discuss terminal requirements.

Card B - Online payments:

- QR/e-wallet phone composition.
- GCash, Maya, QR, card, and supported e-wallet explanation based on approved operational wording.
- CTA to discuss online payment requirements.

Use only approved AltPayNet assets and payment marks. Do not imply compatibility with unnamed providers.

### Section 7 - Industries

Purpose: show market applicability and create internal-link paths for future industry content.

Pattern: four image-led industry cards.

1. Hospitality & food
2. Retail & shops
3. Wellness & beauty
4. Services & B2B

Each card has one short use-case sentence and a link to `/solutions/` or a dedicated section. Hospitality remains the primary launch emphasis.

### Section 8 - How It Works

Anchor: `id="how-it-works"`.

Purpose: answer the core process question immediately before the FAQ.

Preserve the approved five-step journey:

1. Browse
2. Select
3. Adjust
4. Review
5. Confirm

Keep the current content and behavior intact during the first implementation pass. Add one internal link to the expanded `/how-it-works/` guide.

### Section 9 - FAQ

Purpose: answer high-intent product, payment, compatibility, customization, pricing, and demo questions in plain language.

Keep the current accordion behavior and visual boundary intact during the first implementation pass. Copy must later be reconciled with the owner-confirmed operational product scope.

All answers exist in HTML and remain readable without opening every accordion through JavaScript.

### Section 10 - Conversion CTA and footer

Purpose: final demo conversion and complete site navigation.

- Primary CTA: Request a Demo.
- Secondary CTA: Explore EZ Kyosk.
- Footer groups: Product, Solutions/Industries, Company, Legal/Contact.
- Include concise positioning, copyright, and privacy link.

## 7. Product page (`/features/`)

SEO role: detailed answer for self-ordering kiosk software features, POS/checkout, payments, inventory, analytics, customer tools, and configurable requirements.

Wireframe:

1. Product-led page hero with concise scope statement.
2. Sticky or in-page five-category navigation on desktop; normal vertical table of contents on mobile.
3. Five alternating deep-dive sections corresponding to the homepage product architecture.
4. AltPayNet integration callout.
5. "Configured for your operation" section covering bespoke client needs without promising every feature by default.
6. Product-demo CTA.
7. Request-a-demo CTA.

Avoid repeating the homepage verbatim. Use more detailed descriptions, capability groupings, and internal links.

## 8. How It Works page (`/how-it-works/`)

SEO role: expanded educational guide for how a self-ordering kiosk works.

Wireframe:

1. Process-focused hero.
2. Visual overview of the five steps.
3. One detailed section per step.
4. Order queueing/tracking explanation.
5. POS, payment, inventory, and operational handoff explanation.
6. Implementation/customization considerations.
7. FAQ cross-links and demo CTA.

The homepage retains the concise approved flow. This page supplies depth to avoid duplicate-content dependence.

## 9. Solutions and industries page (`/solutions/`)

SEO role: match use-case and industry intent without creating thin doorway pages.

Wireframe:

1. Industry-led hero.
2. Four primary industry cards.
3. Hospitality subsections: cafes, bakeries, restaurants, and quick-service businesses.
4. Retail, wellness/beauty, and services/B2B overview sections.
5. "What can be configured" matrix using semantic HTML.
6. Requirements discussion CTA.

Do not create separate industry routes until each can provide distinct, useful, verified content.

## 10. About page (`/about/`)

SEO role: entity clarity, trust, purpose, and product positioning.

Wireframe:

1. Purpose-led hero.
2. Official orbit logo/brand statement.
3. What EZ Kyosk does.
4. Principles: simplicity, hospitality, adaptability, and clarity.
5. Philippine market focus and supported business types.
6. Product-demo and inquiry CTAs.

Avoid invented history, team details, addresses, certifications, or customer numbers.

## 11. Contact page (`/contact/`)

SEO/conversion role: demo and requirements inquiry.

Wireframe:

1. Concise demo-request hero.
2. Two-column layout: form and "what we can discuss."
3. Fields: name, email, business name, phone, business type, and requirements.
4. Privacy notice link and clear configured/unconfigured submission state.
5. Product demo link for visitors not ready to inquire.

No response-time promise is shown.

## 12. Privacy page (`/privacy/`)

Role: accurate privacy and processing disclosure.

Wireframe:

1. Plain-language privacy hero.
2. Information collected.
3. Purpose and legal/operational basis after confirmation.
4. Hosting and form providers.
5. Retention, access, correction, deletion, and contact procedures.
6. Analytics/cookie section if those tools are adopted.
7. Effective/updated date.

Do not style legal copy as dense cards; prioritize readable line length and headings.

## 13. 404 page

- Preserve global navigation and footer.
- Clear "page not found" heading.
- Links to Home, Product, and Request a Demo.
- Optional product-demo CTA.
- No automatic redirect.

## 14. SEO, GEO, and AEO implementation rules

- Each route has one clear search intent and one H1.
- Use concise answer-first paragraphs after question-style headings.
- Use lists, steps, and comparison tables where they improve comprehension.
- Important product answers must be visible in page HTML.
- Maintain descriptive internal links and breadcrumb opportunities where useful.
- Use factual WebSite/WebPage and Organization schema after entity details are confirmed.
- Evaluate Product/SoftwareApplication schema only when sufficient factual properties exist.
- Keep titles, descriptions, canonical URLs, sitemap, robots behavior, Open Graph, and sharing images aligned with final content.
- Do not add FAQ rich-result markup merely because an FAQ is present.
- Optimize for clarity and citation-worthiness; do not use hidden keyword blocks or repetitive location phrases.

## 15. Implementation acceptance checklist

- [x] Every approved page and homepage section is represented.
- [x] Desktop and mobile hierarchy is implemented.
- [x] Navigation labels and destinations are consistent.
- [x] How It Works appears immediately before the FAQ on the homepage.
- [x] Product categories use crawlable semantic content.
- [x] AltPayNet has a dedicated section rather than controlling the hero.
- [x] Important copy is not embedded only in images.
- [x] Typography uses Plus Jakarta Sans with ExtraBold display headings.
- [x] Implemented colors are logo-derived and pass automated contrast testing.
- [x] Light/dark themes preserve the same semantic, crawlable content.
- [x] The original hero strings are preserved verbatim.
- [x] Hover and focus states are equivalent.
- [x] Reduced-motion behavior is defined.
- [x] No page-level horizontal scrolling is required.
- [x] Mobile product content stacks vertically.
- [x] Every route has a distinct SEO role.
- [x] Product claims follow the owner-confirmed scope and page-level copy review.
- [x] Third-party assets are not copied into the implementation.

## 16. Review milestone

The implemented pages and generated QA screenshots now serve as the visual review artifact for homepage, Product, Solutions, Contact, and the remaining routes at desktop and mobile sizes. Owner review should focus on final color approval, density, card treatment, imagery direction, section proportions, and copy accuracy before the feature branch is merged or production launch work begins.
