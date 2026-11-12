# EZ Kyosk website roadmap

Last updated: 12 November 2026

## Current status

**Current phase:** full website implementation complete; ready for local owner review.

The repository contains the completed local-review redesign: responsive pages, the approved information architecture, owner-confirmed product scope, preview-safe indexing controls, technical SEO foundations, a non-sending local inquiry experience, and automated build/browser/accessibility checks. Production launch remains unauthorized and unconfigured.

The design brief in `docs/DESIGN-FOR-WEBSITE.pdf`, the owner-supplied product/payment composition screenshot, and the three approved reference sites are active visual references. They define layout, framework, pattern, and interaction direction only. The implementation must be an original EZ Kyosk design and must not reuse third-party copy or unlicensed assets.

The written wireframe has been implemented as a full responsive website. The uploaded PDF and DOCX remain local references and are not intended for repository publication.

The approved written wireframe and interaction specification is maintained in `docs/WIREFRAME_SPEC.md`.

## Status legend

- `[x]` completed and verified
- `[ ]` planned or pending
- **BLOCKED - OWNER DECISION:** requires explicit clarification or approval
- **CONDITIONAL:** required only if the related service or feature is adopted

## Project rules

- Keep `main` stable. Use a descriptive feature branch for implementation and integrate through a reviewed pull request.
- Never force-push.
- Do not publish unverified product, integration, pricing, customer, performance, or availability claims.
- Do not copy competitor text, images, logos, layouts, or proprietary visual assets. References are for direction only.
- Do not promise or document guaranteed search rankings. Navigation, design, SEO, GEO, and AEO work can improve discoverability but cannot guarantee a number-one result.
- Do not purchase a domain, subscription, paid asset, or service without explicit approval.
- Do not enable production indexing until the launch gate is complete.
- This repository is a marketing website. Kiosk application, payment, POS, inventory, and order-processing functionality are outside its implementation scope.
- Each implementation phase requires changed-file review, relevant validation, a descriptive commit, push, and remote verification.

## Completed foundation

- [x] Astro static website foundation and dependency lockfile.
- [x] Seven marketing/content pages plus a custom 404 page.
- [x] Responsive navigation, footer, accessible light/dark themes, and shared design system.
- [x] Official EZ Kyosk brand assets and optimized image serving.
- [x] Unique page titles and meta descriptions.
- [x] Semantic heading structure and internal links.
- [x] Conditional canonical URLs, social metadata, and factual WebPage/WebSite structured data.
- [x] Generated `robots.txt` and `sitemap.xml`.
- [x] Preview-safe `noindex` and crawl blocking when `SITE_URL` is absent.
- [x] Demo inquiry UI with browser validation, honeypot, progressive feedback, and preview no-send behavior.
- [x] Automated production build and static verification.
- [x] Automated responsive, keyboard, product-tab, form-state, and axe accessibility checks.
- [x] GitHub repository publication and passing GitHub Actions workflow.

## Phase 1 - Design direction and full-site implementation

### Approved design decisions

- [x] Apply the design direction across the full website, not only the homepage.
- [x] Use the PDF, supplied screenshot, inyad, Qashier, and Table Buddy for pattern transfer, framework, layout, and interaction inspiration only.
- [x] Build an original EZ Kyosk implementation rather than copying competitor designs, wording, or assets.
- [x] Use the approved homepage sequence: header/hero; benefits; platform/features; product overview; payments; industries; How It Works; FAQ; CTA/footer.
- [x] Move the current How It Works experience into the homepage immediately before the FAQ.
- [x] Keep the current How It Works and FAQ content/behavior intact during the first wireframe pass.
- [x] Lock the original SEO-focused hero content while allowing design-only revisions.
- [x] Use Plus Jakarta Sans as the single primary family, with ExtraBold display headings and lighter readable weights for body/UI copy.
- [x] Develop an elegant, restrained palette derived from the EZ Kyosk logo.
- [x] Re-approve accessible light/dark themes with saved preference and system-default fallback; theme changes must not alter crawlable content.
- [x] Create original benefit headings and cautious copy; do not show competitor references or unsupported citation markers on the website.
- [x] Treat the PDF feature cards as layout references, not as approved third-party wording.
- [x] Use the five product categories as the approved interactive information architecture: Self-Ordering; POS & Checkout; Inventory; Reports & Analytics; Customers.
- [x] Treat AltPayNet as an owner-approved integration and approved brand relationship, subject to final asset and implementation verification before publication.
- [x] Cover hospitality/food initially while allowing verified applications in retail, wellness/beauty, services/B2B, and other suitable markets.
- [x] Treat all third-party screenshot photography as reference-only; use original, licensed, owner-supplied, or generated assets in the website.
- [x] Create responsive mobile/tablet interpretations using established responsive design practices and vertical page scrolling.
- [x] Add progressive animation and hover/focus effects only when semantic HTML content remains crawlable, keyboard accessible, performant, and usable with reduced motion.
- [x] Keep the existing inquiry form for the current phase and do not publish a response-time promise.
- [x] Point the “Explore EZ Kyosk” CTA to the public kiosk experience at `https://reniel-relearn.github.io/EZ-Kyosk/`.
- [x] Keep website copy in English for the current phase.
- [x] Retain “Self-Ordering Kiosk Philippines” as the primary SEO theme.
- [x] Retain the original hero eyebrow, headline, description, audience line, CTA labels, and tagline verbatim.
- [x] Replace only the outdated hero-image caption with owner-confirmed operational capability language.
- [x] Reduce the visual size of the header logo without modifying the source asset.
- [x] Do not commit the uploaded design PDF or DOCX to the repository.

### Remaining design decisions

- [ ] Approve the final logo-derived color tokens after reviewing wireframes. **BLOCKED - OWNER DECISION**
- [x] Use a hybrid category pattern: crawlable tabs/panels on desktop and vertically stacked sections on mobile, with vertical page scrolling only.
- [x] Keep the hero brand-first and integration-neutral; place AltPayNet in a dedicated payment section.
- [x] Use Product, How It Works, Solutions, Industries, About, and Request a Demo as the primary navigation; use Explore EZ Kyosk as the product-demo CTA.

### Design implementation after approval

- [x] Translate the approved brief into a full-site written wireframe, responsive framework, and exact section inventory in `docs/WIREFRAME_SPEC.md`.
- [x] Use the implemented desktop/mobile pages and generated QA screenshots as the visual-wireframe review artifact.
- [x] Define and implement the responsive Plus Jakarta Sans typography scale.
- [x] Define and implement the minimal logo-derived color-token system with tested contrast.
- [x] Refine spacing, grid, borders, radii, buttons, cards, and section transitions.
- [x] Implement the approved hero treatment while preserving the locked original content.
- [x] Implement the approved “Faster / More / Better” benefits section using only supportable claims.
- [x] Implement the approved platform/features card section using original EZ Kyosk content and assets.
- [x] Implement the approved product-overview interaction with crawlable semantic HTML rather than baking important copy into images.
- [x] Implement the approved dedicated AltPayNet payment/integration section.
- [x] Implement the approved industry cards using the confirmed target-market direction.
- [x] Include the approved How It Works section immediately before the FAQ.
- [x] Refine the FAQ according to the owner-confirmed capability boundary.
- [x] Use owner-supplied brand/product art and original CSS product, payment, and industry illustrations.
- [x] Adapt every approved section for mobile, tablet, desktop, and ultrawide layouts.
- [x] Maintain keyboard interaction, reduced-motion support, focus visibility, and accessible color contrast.
- [x] Review the implemented design against the PDF, screenshot, written wireframe, and approved decisions.

## Phase 2 - SEO during design

- [ ] Perform evidence-based Philippine keyword-volume and competition research.
- [x] Validate qualitative primary and secondary search intent for each existing page.
- [x] Finalize a keyword-to-page map that avoids cannibalization.
- [x] Preserve one descriptive H1 and logical heading order on every redesigned page.
- [x] Refine unique titles and meta descriptions for the implemented page copy.
- [x] Strengthen descriptive internal linking between product, process, solution, FAQ, and contact content.
- [x] Confirm image filenames, dimensions, compression, responsive output, and useful alternative text.
- [x] Use the official 2:1 orbit artwork as the configured Open Graph/Twitter sharing image.
- [ ] Add factual Organization structured data after business identity is confirmed.
- [x] Evaluate Product or SoftwareApplication structured data and withhold it until sufficient verified public properties exist.
- [x] Maintain canonical, robots, sitemap, sharing, and structured-data behavior throughout redesign work.
- [x] Do not add unsupported review, rating, pricing, FAQ-rich-result, local-business, or customer schema.

## Phase 3 - Business and product truth

### Public-demo baseline and owner-confirmed product scope

Source review of the public kiosk repository currently verifies category browsing, a 36-item menu, search and sorting, product/variant selection, cart quantity changes and removal, PHP total calculation, order review, local simulated confirmation, QR-based simulated progress, and responsive kiosk behavior.

The same repository explicitly states that the public build does not connect to a backend, database, live POS, payment provider, inventory service, printer, or live order-management system. Its QR status and queue are locally simulated. It is therefore treated as a limited public presentation rather than the complete source of truth for the commercial system.

On 11 November 2026, the owner confirmed that self-ordering, order queueing/tracking, POS checkout, payment processing through the approved AltPayNet relationship, and real-time inventory are operational product capabilities. Marketing content may describe those core capabilities as operational based on this owner confirmation. Expanded reports/analytics, customer/loyalty features, promotions, and other bespoke capabilities should be described as configurable to client requirements unless separately confirmed as standard inclusions.

- [ ] Confirm the public business/display name and legal identity.
- [ ] Confirm the public business email address.
- [ ] Confirm the public phone number, if one will be published.
- [ ] Confirm the business address or service area, if applicable.
- [ ] Confirm the privacy contact.
- [ ] Confirm current commercial availability.
- [ ] Confirm pricing or approve “contact for pricing” language.
- [ ] Confirm rollout and implementation timelines.
- [ ] Confirm hardware supply, ownership, and supported configurations.
- [ ] Confirm installation and onboarding arrangements.
- [ ] Confirm maintenance, warranty, service-level, and customer-support terms.
- [x] Record the public demo as a limited presentation rather than the complete commercial implementation.
- [x] Record owner confirmation of operational self-ordering, order queueing/tracking, POS checkout, payment processing, and real-time inventory.
- [x] Record AltPayNet and the named card, QR, GCash, and Maya payment paths as owner-confirmed operational capabilities.
- [x] Verify and align the exact owner-confirmed scope and terminology during page-level copy review.
- [ ] Confirm each specifically named POS integration before publishing provider-specific compatibility claims.
- [ ] Confirm supported receipt-printer models and printing status.
- [ ] Confirm kitchen-order integration status.
- [ ] Confirm tax, discount, promotion, and specialized pricing logic.
- [x] Remove stale “planned” statements for owner-confirmed operational capabilities while keeping configurable items qualified.

## Phase 4 - Content and authority

- [x] Use approved owner-supplied product artwork and original CSS illustrations with adjacent crawlable explanations.
- [ ] Add verified case studies when real deployments exist.
- [ ] Add genuine customer testimonials with permission.
- [ ] Add approved customer logos with permission.
- [ ] Add real installation and usage photographs when available.
- [ ] Build an ongoing SEO content calendar.
- [ ] Publish useful educational articles and buyer guides.
- [ ] Create genuinely distinct industry pages only when enough original, verified content exists.
- [ ] Create product-comparison content that is factual, fair, and independently written.
- [ ] Publish installation, onboarding, and support documentation when the process is confirmed.
- [ ] Expand FAQs using real prospect and customer questions.
- [ ] Develop a backlink and digital-PR plan.
- [ ] Build relevant Philippine business and industry citations.
- [ ] Create partner and integration pages only for verified relationships.
- [ ] Create and optimize a Google Business Profile if the business is eligible.

## Phase 5 - Inquiry delivery, privacy, and legal readiness

- [ ] Select and approve a production form/inquiry provider.
- [ ] Confirm provider pricing, quotas, commercial-use terms, data location, and privacy terms.
- [ ] Configure `PUBLIC_FORM_ENDPOINT` in the production environment.
- [ ] Configure `PUBLIC_CONTACT_EMAIL` in the production environment.
- [ ] Add appropriate server-side spam and abuse protection through the selected provider.
- [ ] Test provider acceptance, inbox arrival, error states, and recovery.
- [ ] Add monitoring for failed inquiries.
- [ ] Confirm the inquiry-processing purpose.
- [ ] Confirm the data-retention period.
- [ ] Confirm who can access inquiry data.
- [ ] Define correction, access, deletion, and privacy-request handling procedures.
- [ ] Name the final hosting provider and form processor in the privacy notice.
- [ ] Publish the final privacy contact and privacy notice.
- [ ] Obtain legal/privacy review for applicable Philippine requirements.
- [ ] Add terms of use or other required business disclosures if applicable.
- [ ] **CONDITIONAL:** add cookie disclosure and consent controls if non-essential cookies, analytics, or advertising tools are adopted.

## Phase 6 - Hosting, domain, and technical SEO launch setup

- [ ] Select and authorize the production hosting account and owner.
- [ ] Select and authorize the final HTTPS domain.
- [ ] Configure DNS using provider-issued records.
- [ ] Choose the preferred `www` or non-`www` hostname.
- [ ] Configure permanent redirects to the preferred hostname.
- [ ] Prepare a redirect map if an existing website/domain is being replaced.
- [ ] Configure production `SITE_URL`.
- [ ] Select and protect the production deployment branch.
- [ ] Configure the hosting build command, output directory, environment variables, and deployment permissions.
- [ ] Deploy the production build.
- [ ] Verify HTTPS, all pages, 404 behavior, assets, canonical URLs, social metadata, structured data, `robots.txt`, and `sitemap.xml`.
- [ ] Configure cache and compression behavior.
- [ ] Configure production security headers: CSP, HSTS, Referrer-Policy, Permissions-Policy, and related headers as appropriate.
- [ ] Configure uptime and error monitoring.
- [ ] Define backup, rollback, and incident-response procedures.

## Phase 7 - Search engines, analytics, and conversion measurement

- [ ] Verify Google Search Console ownership through the owner account.
- [ ] Submit the production sitemap to Google Search Console.
- [ ] Verify Bing Webmaster Tools and submit the sitemap.
- [ ] Check live URL indexing, canonical selection, and crawl results after launch.
- [ ] Select a privacy-appropriate analytics platform.
- [ ] Complete privacy review before enabling analytics.
- [ ] Configure analytics and connect it to Search Console where supported.
- [ ] Define demo-form submissions as conversions.
- [ ] Track approved CTA interactions.
- [ ] Define conversion goals and reporting ownership.
- [ ] Establish UTM/campaign naming conventions.
- [ ] Record baseline traffic, query, ranking, Core Web Vitals, and conversion measurements.
- [ ] Build an owner-facing reporting dashboard.

## Phase 8 - Quality, accessibility, security, and release validation

- [x] Complete automated axe WCAG A/AA/2.1 AA checks at mobile and desktop widths for every public route.
- [x] Test keyboard-only mobile navigation, Escape/focus return, FAQ controls, product tabs, form controls, and links.
- [ ] Complete a manual accessibility review in addition to automated axe checks.
- [ ] Test with representative assistive technology.
- [ ] Test on real phones and tablets.
- [ ] Test current Chrome, Edge, Firefox, and Safari behavior.
- [ ] Run production Lighthouse tests.
- [ ] Measure production Core Web Vitals using real-user data when available.
- [ ] Verify forms, analytics, consent behavior, and privacy links in production.
- [x] Run local build checks for broken links, anchors, canonicals, metadata, sitemap, indexing controls, images, and page errors.
- [ ] Review all product and business claims immediately before launch.
- [x] Review generated responsive screenshots at phone and desktop widths and automated layouts through ultrawide-representative widths.
- [x] Review dependency vulnerabilities; installation audit reported zero known vulnerabilities.
- [ ] Verify CI, deployment rollback, monitoring, and incident contacts.
- [ ] Obtain final owner approval before enabling indexing or announcing launch.

## Phase 9 - Post-launch SEO and operations

- [ ] Monitor Search Console indexing, queries, coverage, enhancements, and manual actions.
- [ ] Monitor Bing Webmaster Tools.
- [ ] Review analytics and conversion quality.
- [ ] Monitor uptime, failed inquiries, JavaScript errors, and broken links.
- [ ] Review actual search queries before expanding or consolidating pages.
- [ ] Improve low-performing titles, descriptions, copy, and internal links using measured data.
- [ ] Publish and refresh useful content on an approved schedule.
- [ ] Earn relevant links and citations without buying manipulative links.
- [ ] Review Core Web Vitals and performance after meaningful design or dependency changes.
- [ ] Run recurring accessibility, security, dependency, content, and SEO audits.
- [ ] Keep business details, product availability, pricing, integrations, privacy terms, and support information current.

## Local review gate

- [x] Full responsive redesign implemented across every route.
- [x] Owner-confirmed core product scope reflected in page copy.
- [x] Static production build and verification passed.
- [x] Browser layout, image, JavaScript, keyboard, form, and accessibility checks passed.
- [x] Preview form remains non-sending without approved configuration.
- [x] Preview remains unindexed without `SITE_URL`.
- [x] Local review instructions and current limitations documented.

## Launch gate

Public indexing and launch require all of the following:

- [ ] Design and content approved by the owner.
- [ ] Product and commercial claims verified.
- [ ] Business and privacy details confirmed.
- [ ] Inquiry delivery and privacy workflow verified.
- [ ] Hosting, domain, HTTPS, redirects, environment variables, and security headers verified.
- [ ] Production SEO output and sitemap verified.
- [ ] Manual and automated QA passed.
- [ ] Search Console ownership and sitemap submission ready.
- [ ] Analytics/consent decision completed.
- [ ] Final owner authorization recorded.
