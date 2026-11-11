# Development progress

Last updated: 11 November 2026

## Local-review milestone

The website is ready for owner review on a local computer. The implemented build includes:

- Seven responsive content routes, a custom 404 page, `robots.txt`, and `sitemap.xml`.
- One permanent light theme using Plus Jakarta Sans, ExtraBold display headings, and logo-derived deep blue-teal/turquoise tokens.
- Approved primary navigation, responsive mobile menu, footer, conversion CTAs, and external kiosk-experience link.
- Homepage sequence: hero; Faster/More/Better benefits; connected platform; five product areas; AltPayNet payments; industries; How It Works; FAQ; conversion CTA.
- Distinct Product, How It Works, Solutions, About, Contact, and Privacy page roles.
- Owner-confirmed operational self-ordering, POS checkout, AltPayNet payments, real-time inventory, and order queueing/tracking copy.
- Configurable reports, analytics, customers, loyalty, promotions, integrations, hardware, and bespoke requirements language.
- Semantic HTML product content, desktop tabs with arrow-key support, and vertically stacked mobile panels.
- Original CSS-based product/payment/industry illustrations plus optimized owner-supplied brand and kiosk artwork.
- Preview-safe inquiry behavior that sends nothing unless an approved endpoint is configured.
- Canonical, sitemap, robots, social metadata, and WebSite/WebPage schema safeguards driven by `SITE_URL`.

## Verification completed

- Astro production build passed.
- Static verification passed for seven pages, H1 counts, unique titles/descriptions, internal links, anchors, assets, favicon, indexing controls, sitemap, canonical behavior, sharing images, and configured-site schema.
- Browser layout checks passed across 320, 390, 768, 1024, 1440, and 1920 pixel widths for all seven public routes plus the custom 404 page: 48 combinations, no horizontal overflow or broken images.
- Headless Edge reported no page errors and no failed page/asset requests.
- Keyboard checks passed for the mobile menu, Escape/focus return, FAQ controls, and five product tabs.
- Mobile product panels were verified as vertically stacked and visible.
- Preview form no-send behavior passed; managed-form success and failure were tested with local interception only.
- Axe WCAG A/AA/2.1 AA scans reported zero violations for every public route and the custom 404 page at 390 and 1440 pixels.
- Desktop and phone screenshots were generated and visually reviewed.
- Dependency audit reported zero known vulnerabilities during installation.

Automated results are not an accessibility certification or a substitute for owner review on real target devices.

## Production launch remains gated

The following cannot be truthfully completed inside the repository: final owner approval, legal business/privacy identity, public contact details, production inquiry provider and retention workflow, hosting/domain ownership, DNS/HTTPS, Search Console, Bing Webmaster Tools, analytics/consent, real-user Core Web Vitals, customer evidence, backlinks, and post-launch measurement. They remain documented in `PROJECT_PLAN.md` and must be completed with the authorized accounts and confirmed facts before indexing.
