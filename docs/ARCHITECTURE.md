# Architecture

Astro compiles the website to static HTML in `dist`. The important product copy, navigation, FAQs, and internal links are present in server-rendered HTML. Small browser scripts enhance the mobile navigation, keyboard-accessible product tabs, progressive motion, and inquiry feedback. No database, authentication, frontend framework runtime, or marketing-site backend is required.

## Source structure

- `src/pages`: the seven public routes, custom 404 page, `robots.txt`, and `sitemap.xml`.
- `src/layouts/Layout.astro`: shared metadata, schema, navigation, footer, mobile menu, persistent theme control, and progressive-motion setup.
- `src/components/ProductExplorer.astro`: five semantic product panels with desktop tabs and mobile stacking.
- `src/components/PaymentShowcase.astro`: original AltPayNet payment-section markup and CSS illustrations.
- `src/components/HeroProduct.astro`: optimized owner-supplied kiosk artwork.
- `src/components/OrderReview.astro`: original illustrative order-review UI.
- `src/components/DemoCTA.astro`: shared conversion section.
- `src/data/product.ts`: shared product categories, five-step journey, and FAQs.
- `src/styles/global.css`: Plus Jakarta Sans, light/dark brand tokens, layout, components, breakpoints, focus states, and reduced-motion handling.
- `src/lib/sitePath.ts`: base-path-safe internal URLs for root hosting and repository-path previews.
- `assets`: owner-supplied brand and kiosk artwork processed by Astro.
- `public/favicon.png`: directly served browser icon.

## SEO and indexing behavior

`SITE_URL` drives canonical URLs, the sitemap, absolute sharing imagery, and factual WebSite/WebPage JSON-LD. `BASE_PATH` supports repository-path preview hosting without changing page content. When `SITE_URL` is absent, the build emits `noindex, nofollow`, omits invented canonical/schema URLs, and blocks crawling in `robots.txt`. Organization and product schema are intentionally withheld until sufficient public identity and product properties are confirmed.

## Inquiry behavior

Without `PUBLIC_FORM_ENDPOINT`, form validation and feedback run locally and no information is transmitted or stored. With an approved endpoint, the browser submits `FormData` and reports accepted/error states. Provider delivery, privacy handling, retention, and inbox arrival must be verified separately before launch.

All `PUBLIC_` values are intentionally visible to the browser. Secrets must never be stored in those variables or committed to the repository.
