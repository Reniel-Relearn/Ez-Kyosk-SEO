# Development progress

Last updated: 13 November 2026

Brand consistency update: display name is Ez Kyosk throughout current website copy, metadata/schema, accessibility labels, and documentation. Header/footer, About, payment mockups, Solutions, favicon, and social previews use the original assets through shared components or deterministic derivatives. Hero and overview-card branding is corrected in versioned raster artwork using those originals as references. Technical URLs, source artwork, owner PDF/DOCX references, and historical exact prompts remain intact. See [BRAND_GUIDELINES.md](BRAND_GUIDELINES.md).

## Local-review milestone

Hero correction: surrounding matte/haze and both white logo panels are removed in `hero-kiosk-transparent-v3.webp`. The device remains solid, empty background regions are truly transparent, and the broad CSS image shadow is removed. Hero wording/layout and other sections are unchanged. Source and all responsive variants have decoded-pixel regression checks; details and exact edit prompts are in [HERO_TRANSPARENCY_FIX.md](HERO_TRANSPARENCY_FIX.md).

The website is ready for owner review on a local computer. The implemented build includes:

- Seven responsive content routes, a custom 404 page, `robots.txt`, and `sitemap.xml`.
- Accessible light/dark themes with saved preference, system-default fallback, Plus Jakarta Sans, ExtraBold display headings, and the blue/white and blue/black/white palette with subtle cyan highlights.
- The original SEO-focused hero content is locked; only its design treatment and updated operational-capability caption may change.
- A smaller responsive header logo that preserves the official source artwork and proportions.
- Header navigation stays pinned during page scrolling on desktop and mobile; homepage hero content starts 32px below it without viewport-height centering.
- Wider page layouts with small responsive gutters (20–64px), plus a left-aligned payment introduction that uses fewer lines on desktop.
- Final primary navigation (Home, Product, How It Works, Solutions, About), exact per-route active states, responsive mobile menu, footer, conversion CTAs, and external kiosk-experience link.
- Homepage sequence retained: hero; Faster Ordering Experience/More Order Capacity/Better Service Flow benefits; connected platform; five product areas; AltPayNet payments; industries; How It Works; FAQ; conversion CTA. The three benefit numbers are removed. All three benefits have matching blue/cyan SVGs: kiosk/tap, merged order paths, and sequential stages ending in a completion checkmark, with automatic light/dark colors.
- The full visual assignment plan and shared art direction are documented in `VISUAL_ASSET_PLAN.md`. The Word-arrangement step is removed. Three benefit icons and the first realistic Self-ordering experience overview-card image are implemented. Other imagery remains pending; this first sample awaits owner review.
- Distinct Home, Product, How It Works, Solutions, About, Contact, and Privacy page roles; the Product hero now uses its own five-area system map rather than reusing the homepage kiosk composition.
- Owner-confirmed operational self-ordering, POS checkout, AltPayNet payments, real-time inventory, and order queueing/tracking copy.
- Configurable reports, analytics, customers, loyalty, promotions, integrations, hardware, and bespoke requirements language.
- Semantic HTML product content, desktop tabs with arrow-key support, and vertically stacked mobile panels.
- Original CSS-based product/payment/industry illustrations plus optimized owner-supplied brand and kiosk artwork.
- Preview-safe inquiry behavior that sends nothing unless an approved endpoint is configured.
- Canonical, sitemap, robots, social metadata, and WebSite/WebPage schema safeguards driven by `SITE_URL`.

## Verification completed

- Brand consistency: preview and configured-site production builds/static verification passed. Full browser QA passed 48 responsive route checks and 32 light/dark WCAG scans with zero violations, broken requests, or browser errors. Rendered casing, shared original-logo sources/alt text, keyboard/form behavior, and image proportions passed. Header, About, payment, Solutions, card, favicon, and social-preview artwork were visually reviewed. Superseded public images are preserved under `assets/archive/` and excluded from deployment.
- Self-ordering overview image: production build/static verification passed. Six widths in both themes plus high-density phone/desktop checks passed (16 combinations). One generated image, four unchanged placeholders, preserved card titles, correct responsive sources and 4:3 dimensions, no overflow or browser/request errors. Four targeted axe scans found zero violations. Optimized master and phone/desktop light/dark screenshots were visually reviewed. Details: `PLATFORM_SELF_ORDERING_ASSET.md`.
- Better Service Flow / completed icon family: production build and static verification passed. Twelve homepage width/theme checks confirmed three 64px SVGs with matching 2.5-unit blue strokes, exact blue/cyan tokens, 24px icon-to-heading spacing, no overflow, and aligned heading starts on desktop. Four targeted benefit-section axe scans found zero violations; no browser/request errors. The full set and enlarged third icon were visually reviewed in both themes on desktop/mobile screenshots.
- More Order Capacity update: production build/static verification passed. Twelve homepage width/theme checks confirmed the matching 64px icon, 24px gap, exact blue/cyan colors, no horizontal overflow, decorative/non-focusable markup, and aligned first/second heading starts on desktop. Four targeted axe scans found zero violations; desktop/mobile and enlarged light/dark screenshots were visually reviewed. No browser/request errors occurred.
- First-icon update: production build and static verification passed. Homepage checks passed at 320, 390, 768, 1024, 1440, and 1920px in both themes (12 combinations), confirming a 64px decorative icon, exact blue/cyan strokes, 24px heading gap, and no horizontal overflow or browser/request errors. Four targeted benefit-section axe scans reported zero violations. Desktop/mobile cards and enlarged light/dark icon screenshots were visually reviewed.
- Astro production build passed.
- Static verification passed for seven pages, H1 counts, unique titles/descriptions, internal links, anchors, assets, favicon, indexing controls, sitemap, canonical behavior, sharing images, and configured-site schema.
- Browser layout checks passed across 320, 390, 768, 1024, 1440, and 1920 pixel widths for all seven public routes plus the custom 404 page: 48 combinations, no horizontal overflow or broken images.
- Headless Edge reported no page errors and no failed page/asset requests.
- Keyboard checks passed for the mobile menu, Escape/focus return, FAQ controls, and five product tabs.
- Mobile product panels were verified as vertically stacked and visible.
- Preview form no-send behavior passed; managed-form success and failure were tested with local interception only.
- Thirty-two axe WCAG A/AA/2.1 AA scans reported zero violations: every public route and the custom 404 page in both light and dark themes at 390 and 1440 pixels.
- Desktop and phone screenshots were generated and visually reviewed.
- Dependency audit reported zero known vulnerabilities during installation.

Automated results are not an accessibility certification or a substitute for owner review on real target devices.

## Production launch remains gated

The following cannot be truthfully completed inside the repository: final owner approval, legal business/privacy identity, public contact details, production inquiry provider and retention workflow, hosting/domain ownership, DNS/HTTPS, Search Console, Bing Webmaster Tools, analytics/consent, real-user Core Web Vitals, customer evidence, backlinks, and post-launch measurement. They remain documented in `PROJECT_PLAN.md` and must be completed with the authorized accounts and confirmed facts before indexing.
