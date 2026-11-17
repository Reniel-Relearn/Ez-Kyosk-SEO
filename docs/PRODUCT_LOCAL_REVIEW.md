# Product page: local review

Date: 17 November 2026, Asia/Manila. Local implementation and review record. The owner subsequently authorized commit/push/deployment of this Product work and the sticky 50%-alpha subheader to the existing main-branch GitHub Pages design review. Earlier local-only statements below describe the completed review stages and are superseded for publication. No image generation, Home edits, production indexing, analytics, form activation or GitHub issue mutations authorized. Release success remains subject to workflow and live-site verification.

Review URL: http://127.0.0.1:4323/Ez-Kyosk-SEO/features/.

Publication target: https://reniel-relearn.github.io/Ez-Kyosk-SEO/features/. Keep nine placeholders and all preview crawl controls. Stage only approved source/tests/documentation; exclude untracked private design references and unused artwork variants. Verify a tracked-only build, unchanged frozen Home, Product behavior, then the commit-specific Pages workflow and live artifact before reporting deployment complete.

## What is implemented

1. Original business-facing Product introduction, distinct title/description and system-overview placeholder.
2. Four expanded core capability blocks: self-ordering, POS/checkout, supported payments, order queue/tracking. Optional cashier cash route and optional tracking QR are explained accurately.
3. Three quotation-dependent additions: inventory automation/availability, reports/analytics and customer/loyalty tools. Scope questions are framed as requirements to define, not promises of standard inclusions.
4. Product-specific AltPayNet payment/configuration text. Electronic and cash routes distinguished; tracking follows successful payment; payment QR and tracking QR not conflated. No duplicated Home payment cards/images.
5. Software-only, hardware-only and combined purchasing options, without invented device models, fixed packages, fees, subscription terms, installation or support inclusions.
6. Compatibility assessment and requirements/quotation process. No universal existing-system compatibility guarantee.
7. Product-specific demo/requirements CTA leading to the existing inquiry page. No new form/backend activated.

## Visual and technical boundaries

- Nine neutral, labelled placeholder slots: one hero, four core blocks, three addition cards and one payment illustration. No real or generated Product artwork imported, no fake operational dashboard, no new raster/vector product illustration. Header/footer retain original shared brand logos.
- Placeholder labels are review-only decorative content; all meaningful product explanation is visible semantic HTML, not inside artwork. Placeholders reserve layout space but do not add images or network requests.
- src/data/productPage.ts is Product-only; shared src/data/product.ts unchanged. ProductVisualPlaceholder.astro and product-page.css are page-specific. Every new stylesheet selector is contained by .product-page; global.css, Layout and Home shared components unchanged.
- Keep /features/ and Product navigation label; legacy Home links #self-ordering, #pos-checkout, #inventory, #reports and #customers remain meaningful. Five wrapping on-page links are sticky beneath the primary header. On phones they form two columns, with no forced horizontal scrolling. The primary mobile menu remains above them. Product-only measured offsets account for wrapping/font/viewport changes; CSS fallbacks retain sticky navigation and unobscured destinations without JavaScript.
- One H1, ordered H2/H3/H4 hierarchy, direct factual opening answers, descriptive internal links, unique title/description and natural terminology. No em dashes, fake proof, keyword stuffing or ranking guarantees. No invented Product/Offer/FAQ schema. Existing SITE_URL-driven canonical/WebSite/WebPage behavior retained.
- Review still noindex/nofollow and robots-disallowed; this is not an SEO indexing launch. Articles stays deferred.
- Owner follow-up: Product subnav uses the main header's existing theme-aware gradient with 50% alpha at both stops, with no blur. Link/text opacity remains 100%; sticky positioning, anchor offsets and mobile layering unchanged. Nine-image generation remains on hold. This visual change is local only; translucency does not resolve the previously documented backdrop-dependent contrast limitation.
- Opacity follow-up verified: build/static checks and the Product regression suite passed (24 layout/theme/density combinations, 28 sticky/appearance checks including four no-JavaScript cases, 20 section-link checks and four section accessibility scans). Computed styles match the primary header gradient, both stops have 0.5 alpha, text/links remain opaque and backdrop blur is absent. Mobile sticky screenshot inspected; no browser/resource errors; frozen Home unchanged. Automated scans do not establish contrast against every scrolled backdrop.

## Preservation evidence

Frozen Home baseline release:5e9adf9de8efc0e7a2abd7bcfdd7b561e758260a. Build comparison checks Home HTML and its referenced CSS/JS against the approved isolated release copy. Home HTML SHA256 remains a4a8330d6ef2c1afefafa88f900612c466de6f31ae362d9fb5062060b51cf2e9. Content/images/header/FAQ/product tabs untouched.

Known50% no-blur header contrast limitations remain separate and unchanged; sampled automated passes must not be described as whole-site accessibility conformance. The How It Works page's older five ordering microsteps are untouched pending its own review. No new package claims beyond owner-confirmed availability.

## Checks and review instructions

Sticky-navigation follow-up: restored locally after the owner identified the removed behavior. Build/static verification passed. The updated Product suite passed 24 viewport/theme/density layouts, 28 sticky-position checks (including four no-JavaScript cases), 20 section-link checks and four section accessibility scans. Mobile primary-menu layering and keyboard navigation passed. No browser/resource errors; frozen Home HTML and shared stylesheet hashes unchanged. Desktop/phone light/dark sticky-navigation screenshots inspected. No commit, push or deployment.

Final results: build/static verification passed; 24 Product viewport/theme/density combinations, four section accessibility scans, 20 section-anchor checks and four no-JavaScript combinations passed with no Product browser/resource errors. Exact copy and nine placeholder slots verified, with no text/placeholder/document overflow through320-1920px. Desktop/mobile light/dark hero, addition, payment-note and purchase screenshots captured; representative layouts visually inspected. Full-site48 route/viewport checks and32 sampled light/dark accessibility scans passed, including original branding, navigation, keyboard/focus/theme, Home tabs/FAQ and mocked inquiry outcomes; zero real form submissions.

The portable scripts/fixtures/home-freeze.json records approved release5e9adf9 Home HTML and stylesheet hashes. It needs no private design files or ignored release-copy directory. The targeted suite expects a preview build at /Ez-Kyosk-SEO. Frozen HTML includes inline scripts, and referenced shared CSS is checked separately.

Build/static verification covers links/assets/anchors, unique metadata, placeholder count, no duplicated payment imagery, capability boundaries, original logos and crawl controls. scripts/qa-product-page.mjs checks Product widths/themes/densities, copy, placeholder dimensions, legacy destinations, section anchors under the sticky header, accessibility and no-JavaScript keyboard navigation. It also compares frozen Home HTML/styles/scripts. Existing full-site QA expectations updated for Product's new page identity; Home payment-image tests retained.

QA artifact reports/screenshots are ignored under artifacts/product-page-* and artifacts/qa-report.json. Native Safari/Firefox, real-device tests, live product backend behavior and real-user Core Web Vitals are not certified by these local checks.

Owner review: start at Product hero, follow the seven sections top-to-bottom, check both themes and phone/desktop. Review wording, hierarchy, spacing, standard-versus-configurable distinction and the placement/aspect ratios of all nine visual slots. Next action is owner feedback and local refinement, not generating images or publishing automatically. After approval, visual briefs can be planned one slot at a time under new instructions.

## Image briefing and generation order, after approval

1. Hero: connected Ez Kyosk system overview.
2. Core / Self-ordering: menu selection and order review.
3. Core / POS & checkout: order-to-checkout connection, with optional cashier route.
4. Core / Payments: concise supported payment-choice visual, not another full payment showcase.
5. Core / Order queue & tracking: order number, queue display and optional tracking QR.
6. Additions / Automated inventory & availability: illustrative stock and item-availability management.
7. Additions / Reports & analytics: illustrative operational insights and order trends.
8. Additions / Customer & loyalty tools: illustrative configurable customer/loyalty tools, not implied standard inclusions.
9. Detailed payments section: configuration and post-payment handoff, distinguishing payment QR from optional tracking QR and avoiding repetition of slot 4.

These are slot purposes, not approved final artwork briefs. Define and approve each composition before generation. Purchasing, compatibility and the final CTA remain text-led. No images generated or deployed in the sticky-navigation fix.
