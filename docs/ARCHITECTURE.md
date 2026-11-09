# Architecture

Astro compiles pages to plain HTML in dist. Shared layout owns navigation, footer, metadata, and the mobile menu. CSS controls responsive layouts. Tiny browser scripts support navigation and form feedback. No database, React runtime, authentication, or backend is required.

- src/pages: public URLs, robots.txt, and sitemap.xml.
- src/layouts/Layout.astro: shared page shell.
- src/components/Kiosk.astro: explicitly illustrative product concept, not real product evidence.
- src/components/OrderReview.astro and DemoCTA.astro: shared labeled illustration and demo invitation.
- src/data/product.ts: shared ordering steps and factual buyer FAQs.
- assets: original official wordmark, icon, and combined logo. Astro serves optimized image formats. public/favicon.png is the browser-icon derivative.
- src/styles/global.css: palette, typography, components, and breakpoints.
- public: directly served assets.

SITE_URL is public build configuration, not a secret. It drives canonical addresses, sitemap URLs, and indexing. PUBLIC_FORM_ENDPOINT and PUBLIC_CONTACT_EMAIL are intentionally public configuration. No secret belongs in any PUBLIC_ variable.

Inquiry submission is disabled unless a managed endpoint is provided. The endpoint must be verified and the privacy notice completed before public launch. The browser uses normal form constraints and progressively enhanced submission feedback. This website cannot verify email inbox delivery by itself.

Brand redesign uses deep teal and restrained turquoise with a warm-white canvas. No new framework, backend, tracking, or production deployment changes were introduced. Canonicals and factual WebPage/WebSite schema use the actual configured SITE_URL. Official combined branding provides social-sharing imagery on configured-site builds. The approved content source is docs/WEBSITE_CONTENT.md.
