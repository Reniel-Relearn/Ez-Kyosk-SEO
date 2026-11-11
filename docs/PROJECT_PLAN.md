# EZ Kyosk website roadmap

Last updated: 11 November 2026

## Current status

**Current phase:** website design refinement and continuous SEO improvement.

The repository contains a working Astro marketing website with responsive pages, preview-safe indexing controls, technical SEO foundations, an inquiry experience, and automated build/accessibility checks. The source is synchronized to GitHub. The site is not yet authorized or configured for a public production launch.

The design brief in `docs/DESIGN-FOR-WEBSITE.pdf`, the owner-supplied product/payment composition screenshot, and the three approved reference sites are active visual references. They define layout, framework, pattern, and interaction direction only. The implementation must be an original EZ Kyosk design and must not reuse third-party copy or unlicensed assets.

The owner has requested continued brainstorming, wireframing, and roadmap refinement before implementation. The uploaded PDF and DOCX remain local references and are not intended for repository publication.

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
- [x] Responsive navigation, footer, theme control, and shared design system.
- [x] Official EZ Kyosk brand assets and optimized image serving.
- [x] Unique page titles and meta descriptions.
- [x] Semantic heading structure and internal links.
- [x] Conditional canonical URLs, social metadata, and factual WebPage/WebSite structured data.
- [x] Generated `robots.txt` and `sitemap.xml`.
- [x] Preview-safe `noindex` and crawl blocking when `SITE_URL` is absent.
- [x] Demo inquiry UI with browser validation, honeypot, progressive feedback, and preview no-send behavior.
- [x] Automated production build and static verification.
- [x] Automated responsive, keyboard, theme, form-state, and axe accessibility checks.
- [x] GitHub repository publication and passing GitHub Actions workflow.

## Phase 1 - Design direction and homepage refinement (current)

### Approved design decisions

- [x] Apply the design direction across the full website, not only the homepage.
- [x] Use the PDF, supplied screenshot, inyad, Qashier, and Table Buddy for pattern transfer, framework, layout, and interaction inspiration only.
- [x] Build an original EZ Kyosk implementation rather than copying competitor designs, wording, or assets.
- [x] Use the approved homepage sequence: header/hero; benefits; platform/features; product overview; payments; industries; How It Works; FAQ; CTA/footer.
- [x] Move the current How It Works experience into the homepage immediately before the FAQ.
- [x] Keep the current How It Works and FAQ content/behavior intact during the first wireframe pass.
- [x] Refine the hero later; prioritize wireframes and section layout first.
- [x] Use one bold but welcoming primary font family for now; evaluate specific font candidates during wireframing.
- [x] Develop an elegant, restrained palette derived from the EZ Kyosk logo.
- [x] Use one permanent visual theme with accessible hover/focus effects such as controlled glow and color reversal; do not retain a user-selectable light/dark theme unless later re-approved.
- [x] Create original benefit headings and cautious copy; do not show competitor references or unsupported citation markers on the website.
- [x] Treat the PDF feature cards as layout references, not as approved third-party wording.
- [x] Use the five product categories as a proposed interactive information architecture: Self-Ordering; POS & Checkout; Inventory; Reports & Analytics; Customers.
- [x] Treat AltPayNet as an owner-approved integration and approved brand relationship, subject to final asset and implementation verification before publication.
- [x] Cover hospitality/food initially while allowing verified applications in retail, wellness/beauty, services/B2B, and other suitable markets.
- [x] Treat all third-party screenshot photography as reference-only; use original, licensed, owner-supplied, or generated assets in the website.
- [x] Create responsive mobile/tablet interpretations using established responsive design practices and vertical page scrolling.
- [x] Add progressive animation and hover/focus effects only when semantic HTML content remains crawlable, keyboard accessible, performant, and usable with reduced motion.
- [x] Keep the existing inquiry form for the current phase and do not publish a response-time promise.
- [x] Point the “Explore EZ Kyosk” CTA to the public kiosk experience at `https://reniel-relearn.github.io/EZ-Kyosk/`.
- [x] Keep website copy in English for the current phase.
- [x] Retain “Self-Ordering Kiosk Philippines” as the primary SEO theme.
- [x] Do not commit the uploaded design PDF or DOCX to the repository.

### Remaining design/evidence decisions

- [ ] Select and approve the exact bold, welcoming font family after comparing wireframe options. **BLOCKED - OWNER DECISION**
- [ ] Approve the final logo-derived color tokens after reviewing wireframes. **BLOCKED - OWNER DECISION**
- [ ] Decide whether the five product categories use tabs, stacked sections, or a hybrid desktop-tab/mobile-stacked pattern. The current recommendation is a hybrid with crawlable HTML panels and vertical mobile presentation. **BLOCKED - OWNER DECISION**
- [ ] Decide whether the hero remains integration-neutral or shows AltPayNet. The current recommendation is a brand-first hero and a dedicated AltPayNet payment section. **BLOCKED - OWNER DECISION**
- [ ] Provide or identify the current operational build, backend, or verification evidence for POS, payments, inventory, and live order management before those capabilities are stated as operational. **BLOCKED - PRODUCT EVIDENCE**
- [ ] Confirm the exact navigation after wireframes. The current recommendation is Product, How It Works, Solutions, Industries, About, and Request a Demo, with Explore EZ Kyosk as the product-demo CTA. **BLOCKED - OWNER DECISION**

### Design implementation after approval

- [ ] Translate the approved brief into a homepage wireframe and exact section inventory.
- [ ] Define the approved typography scale using the selected font family/families.
- [ ] Define a minimal color-token system with accessible contrast.
- [ ] Refine spacing, grid, borders, radii, buttons, cards, and section transitions.
- [ ] Implement the approved hero treatment and CTA hierarchy.
- [ ] Implement the approved “Faster / More / Better” benefits section using only supportable claims.
- [ ] Implement the approved platform/features card section using original EZ Kyosk content and assets.
- [ ] Implement the approved product-overview interaction with crawlable semantic HTML rather than baking important copy into images.
- [ ] Implement an approved AltPayNet payment/integration section after capability and asset verification.
- [ ] Implement the approved industry cards using verified target markets.
- [ ] Include the approved How It Works section.
- [ ] Preserve or refine the FAQ according to the clarified boundary.
- [ ] Create or obtain original, licensed imagery and product mockups.
- [ ] Adapt every approved section for mobile, tablet, desktop, and ultrawide layouts.
- [ ] Maintain keyboard interaction, reduced-motion support, focus visibility, and accessible color contrast.
- [ ] Review all design changes against the PDF and the approved decisions before merging.

## Phase 2 - SEO during design

- [ ] Perform evidence-based Philippine keyword-volume and competition research.
- [ ] Validate primary and secondary search intent for each existing page.
- [ ] Finalize a keyword-to-page map that avoids cannibalization.
- [ ] Preserve one descriptive H1 and logical heading order on every redesigned page.
- [ ] Refine titles and meta descriptions after final page copy is approved.
- [ ] Strengthen descriptive internal linking between product, process, solution, FAQ, and contact content.
- [ ] Confirm image filenames, dimensions, compression, and useful alternative text.
- [ ] Create a dedicated approved Open Graph/Twitter sharing image.
- [ ] Add factual Organization structured data after business identity is confirmed.
- [ ] Evaluate Product or SoftwareApplication structured data only when sufficient verified facts exist.
- [ ] Maintain canonical, robots, sitemap, sharing, and structured-data behavior throughout redesign work.
- [ ] Do not add unsupported review, rating, pricing, FAQ-rich-result, local-business, or customer schema.

## Phase 3 - Business and product truth

### Verified public-demo baseline

Source review of the public kiosk repository currently verifies category browsing, a 36-item menu, search and sorting, product/variant selection, cart quantity changes and removal, PHP total calculation, order review, local simulated confirmation, QR-based simulated progress, and responsive kiosk behavior.

The same repository explicitly states that the public build does not currently connect to a backend, database, live POS, payment provider, inventory service, printer, or live order-management system. Its QR status and queue are locally simulated. This evidence conflicts with describing all five platform categories as operational. The marketing website must not resolve that conflict by assumption; it requires a newer implementation source, integration evidence, or a revised owner-approved description.

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
- [ ] Verify every current product capability shown on the site.
- [ ] Reconcile the owner-reported operational capabilities with the public demo's documented limitations.
- [ ] Identify the authoritative product build or requirements source for production capability claims.
- [ ] Confirm payment-processing status.
- [ ] Confirm GCash, Maya, card, QR, and other gateway status.
- [ ] Confirm every supported POS integration.
- [ ] Confirm supported receipt-printer models and printing status.
- [ ] Confirm kitchen-order integration status.
- [ ] Confirm tax, discount, promotion, and specialized pricing logic.
- [ ] Update or remove “planned” statements as capabilities become verified and operational.

## Phase 4 - Content and authority

- [ ] Replace illustrative product imagery with approved production screenshots or clearly labeled original renders.
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

- [ ] Complete a manual accessibility review in addition to automated axe checks.
- [ ] Test with keyboard-only navigation and representative assistive technology.
- [ ] Test on real phones and tablets.
- [ ] Test current Chrome, Edge, Firefox, and Safari behavior.
- [ ] Run production Lighthouse tests.
- [ ] Measure production Core Web Vitals using real-user data when available.
- [ ] Verify forms, analytics, consent behavior, and privacy links in production.
- [ ] Run crawl, broken-link, canonical, metadata, sitemap, and indexing checks.
- [ ] Review all product and business claims immediately before launch.
- [ ] Review responsive screenshots at phone, tablet, desktop, and ultrawide widths.
- [ ] Review dependency vulnerabilities and update policy.
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
