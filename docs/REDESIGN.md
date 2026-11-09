# Brand website redesign

## Design direction

The redesign presents EZ Kyosk as self-ordering kiosk software for Philippine food-service businesses. It uses a warm-white canvas, deep-teal panels and text, restrained turquoise accents, readable typography, consistent touch targets, and clear product-first page hierarchy.

The site remains a static Astro marketing website. It does not add ordering, payment, POS, printing, inventory, or kitchen functionality.

## Brand assets

Official source artwork is stored in `assets/` and served through Astro's image optimization where appropriate:

- `ez-kyosk-lockup.png` is the header and footer identity.
- `Ez Kyosk Orbit Logo.png` is the combined About-page artwork.
- `ez_kyosk_icon.png` is the source for the browser icon.
- `hero-kiosk-original.png` is the owner-provided kiosk artwork displayed in the homepage hero.
- `hero-kiosk-concept.png` is an earlier illustrative concept retained for reference but not displayed.

The artwork should not be stretched or edited destructively. The header/footer component uses the lockup's alpha silhouette to keep the lettering legible in dark mode while retaining the turquoise icon and “EZ” colors.

## Information architecture and content

The homepage introduces the product, ordering benefits, key features, five-step customer journey, industry use cases, integration roadmap, FAQs, and demo call to action. Supporting pages cover features, process, solutions, company context, contact, and privacy.

Shared product facts and FAQs are centralized in `src/data/product.ts`, and approved copy is recorded in `docs/WEBSITE_CONTENT.md`. Current versus planned capabilities are distinguished explicitly. The site does not invent prices, ratings, customer evidence, addresses, or production-readiness claims.

## Search and preview safeguards

Canonical URLs, share metadata, structured data, robots directives, and the sitemap use `SITE_URL` only when an actual public origin is configured. Without it, the build is intentionally unindexed and does not emit a false production canonical. The configured-site test uses `https://example.com` only as a local fixture.

## Theme and responsive hero

Dark is the initial theme. A keyboard-accessible control lets visitors switch between dark and light modes, and the explicit selection persists in local storage. Initialization avoids a theme flash and safely handles unavailable browser storage.

The header, hero, and section backgrounds span the viewport while their contents share a responsive gutter. Desktop layouts fit the hero into the available viewport beneath the header. Mobile layouts stack the content so the full artwork and caption remain accessible without horizontal overflow.

## Inquiry behavior

The demo form validates required fields, includes a honeypot, and displays clear success or failure feedback. In an unconfigured preview it does not transmit or persist input. Live delivery requires an approved `PUBLIC_FORM_ENDPOINT` and separate verification of the receiving service and privacy process.

## Validation summary

- Production build and static verification passed for content pages, the 404 page, titles, descriptions, internal links, anchor targets, image paths, favicon, robots behavior, and sitemap entries.
- Responsive checks covered phone, tablet, desktop, and ultrawide viewports, light and dark modes, image loading, hero bounds, logo treatment, and horizontal overflow.
- Keyboard checks covered navigation, theme control, focus return, links, and FAQ interactions.
- Inquiry checks covered client validation, preview no-send, and mocked success and network-error responses without contacting a live provider.
- Automated axe scans at mobile and desktop sizes reported no WCAG A/AA violations. Automated testing is not a substitute for full human accessibility review.
- Browser checks reported no JavaScript page errors or failed page/asset requests.

Local screenshots and reports are generated under `artifacts/` and are intentionally ignored by Git.

## Remaining launch work

Before enabling indexing or production deployment, confirm the business and privacy contacts, inquiry provider and retention policy, approved production imagery, availability and pricing statements, integration claims, hosting ownership, public domain, and production environment configuration.
