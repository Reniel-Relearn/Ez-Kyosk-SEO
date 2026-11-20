# Ez Kyosk revision architecture

Date: 18 November 2026, Asia/Manila.

Status: Phases 1-3 published and verified; see [Phase 3 closure](PHASE_3_RELEASE.md). Companion: [Divide and Conquer step by step actions planning](DIVIDE_AND_CONQUER_PLAN.md). Phase 4 accepted and authorized for publication on 20 November; deployment verification in progress; see [accepted review](PHASE_4_LOCAL_REVIEW.md). Phase 5 spacing actions updated in planning only; implementation awaits approval. Image generation/editing, research and other held work remain on hold.

## 1. Purpose and authority

20 November layout refinement: all succeeding Home sections, final call-to-action and footer share the approved hero/header centered 1200px maximum content boundary and equal responsive side margins (minimum 20px). Section backgrounds remain full width. Elements may be proportionately resized to fit without rewriting copy, changing artwork, shrinking interactive targets or clipping content. This cross-section spacing requirement is approved locally; it does not authorize later phases' content/image changes or publication.

Latest 20 November direction: Phase 4, including compact top/bottom spacing, is accepted and authorized for publication and closure after live verification. Phase 5 and remaining section plans must adopt consistent compact vertical spacing using the accepted Phase 3/4 responsive 32-56px-per-side baseline, checking actual adjacent-section gaps, side margins, sticky-header landing and readable reflow. Preserve the existing hero/header composition; its asymmetrical padding is not a request to reset it. Later phase implementation still requires approval; record layout-specific exceptions for review.

This architecture defines the target website and how to deliver it through separately approved, locally reviewed phases. The companion plan defines exact actions, tests and handoffs, beginning with Phase 1: Hero Section.

Authority order:

1. The owner's latest instructions and clarification answers of 18 November 2026.
2. Subsequent owner-approved phase briefs and local-review decisions.
3. Audited issues, meeting notes and design references where consistent with those decisions.
4. Older plans and release records, retained as history.

Earlier Home freezes, the standalone Product roadmap and Articles deferral are superseded where inconsistent. This does not authorize unrelated redesign work.

Inputs reviewed: all five pages of `Meeting started 2026_11_18 14_37 HKT - Notes by Gemini.pdf`; all six pages of `DESIGN-FOR-WEBSITE_Revised.pdf` (Offers on pages 4-6); [feedback issue #1](https://github.com/Reniel-Relearn/Ez-Kyosk-SEO/issues/1) and its 16 audited comments, including nine new November 18 revisions and attachments; current routes/components/content, assets, tests and deployment configuration. Gemini's summary is not a verified verbatim transcript.

Source baseline: `a0ed9dfe29c0e2d86ce2751cf914ddf0a5efe83e` on `main`. Existing live design review: https://reniel-relearn.github.io/Ez-Kyosk-SEO/.

## 2. Mandatory delivery workflow

| Gate | Assistant action | Owner decision |
| --- | --- | --- |
| Phase brief | Present exact actions, boundaries, likely files, tests, deferred work and completion criteria. | Approve this phase before website edits. |
| Local implementation | Implement only that approved scope, verify and integrate locally. | First implementation approval does not automatically authorize publication. |
| Local review | Report exact changes/files, local URL, results and limitations. | Review and accept, or request local corrections. Repeat as needed. |
| Publication approval | Identify the accepted version and scoped release contents. | Explicitly authorize deployment. If unclear, keep it local. |
| Release | Commit approved files only, push existing main, monitor checks/Pages, verify live. | A push alone is not successful deployment. |
| Handoff | Report completion, commit, deployed link, verification, holds and the next phase's exact actions. | Stop for the next phase's approval. |

No automatic phase advancement. No approval to write plans is approval to execute them. A failure in CI or live verification leaves the phase incomplete. No new hosting service, branch strategy, domain purchase or backend is implied.

## 3. Target pages and Home order

Current content routes: Home, Product (`/features/`), How It Works, Solutions, About, Contact and Privacy, plus 404 and crawler files. The target has three primary destinations, not a literal three-URL limit:

| Path | Role | Content |
| --- | --- | --- |
| `/` | Primary | Complete Home sequence below. |
| `/offers/` | Primary | Approved demo, Starter, Complete, future YourAI teaser and quotation/demo actions. |
| `/articles/` | Primary | Same-website wireframe and neutral placeholders only. No actual articles yet. |
| `/contact/` | Utility retained | Existing inquiry page and preview-only behavior. |
| `/privacy/` | Utility retained | Existing privacy notice linked from footer/form. |
| `/404.html` | Utility retained | Helpful not-found behavior. |

No article subdomain or custom-domain setup now. Use `sitePath` for the existing `/Ez-Kyosk-SEO` Pages prefix and future root hosting.

Exact header order, updated by owner on 19 November: **Home | Products | How It Works | Industries | Plans & Pricing | About Us | Articles**. Flat menu without dropdowns.

Products, How It Works, Industries and About Us target Home sections. Plans & Pricing opens `/offers/`; Articles opens `/articles/`. Retain the original logo, separate Request a Demo CTA to Contact, theme control and accessible mobile menu. Center the navigation group without overlap; do not force all links into a phone row.

Exact Home sequence:

1. Hero.
2. A better way to take orders.
3. One Connected Platform.
4. Products, retaining Home's current five-tab explorer.
5. Payments with AltPayNet.
6. How it works: How Ez Kyosk works.
7. Industries: Designed to adapt.
8. FAQs.
9. About us, adapted from existing About content.
10. Existing contact/demo and ending content.

Retain the existing final demo CTA, footer and separate Contact page. Do not invent another Home form/end section. Standalone Product content and its sticky subheader are removed, not transplanted wholesale into Home. Its nine placeholder-image briefs are inactive, not a new generation queue.

## 4. Hash-free navigation and route retirement

Section elements may have stable internal IDs such as `product`, `how-it-works`, `solutions` and `about-us`; the hash is not part of an ID. Normal enhanced navigation must keep URLs free of section hashes and substitute query parameters.

- Use real base-safe Home URLs for section-link `href` values, with the target in a separate data attribute, not `href="#"`.
- On Home, intercept ordinary activation to close the menu, scroll below the sticky header and move focus appropriately without a hash.
- From another page, temporarily record the intended section, navigate to clean Home, consume the intent once and scroll/focus. Storage failure safely falls back to Home, not a broken link or repeated stale jump.
- Respect modified clicks, new tabs, keyboard activation, back/forward and reduced motion. No-JavaScript or new-tab fallbacks may open Home without an exact section jump; the full content remains static HTML.
- Clean Home URLs cannot uniquely bookmark/share a section. Record this tradeoff honestly.
- Preserve the accessibility skip link. Enhanced focus can avoid a fragment; native no-JavaScript accessibility must not be disabled to hide a skip-link fragment. This is separate from marketing section navigation.
- Keep a single active navigation location. Section highlighting is enhancement, not new pages/canonical URLs.

Retire `/features/`, `/how-it-works/`, `/solutions/` and `/about/` as content pages. Retain minimal compatibility documents which forward/fall back to the corresponding Home content. Do not retain the old copy/subheader. Recognize meaningful legacy Product/industry destinations where possible and consume incoming old fragments rather than propagating them into Home.

Static GitHub Pages documents are not application-controlled HTTP 301 responses. Do not claim server redirects. Provide a clean Home fallback link, exclude compatibility documents from the future content sitemap and leave production-domain redirect policy for the later launch.

Repair every header/footer/body link. Product-area and industry actions that would otherwise return visitors to their own content should lead clearly to retained Contact. Remove the now-redundant CTA to the retired detailed ordering guide.

Phase 2 groups navigation, minimum Offers/Articles wireframes, adapted Home About content, compatibility routes and link repairs into one dependency-safe release. No live intermediate state may contain missing destinations. Later phases refine those destinations.

## 5. Implementation boundaries

Keep Astro static generation, local fonts, semantic HTML, small progressive-enhancement scripts, current GitHub Pages workflow and inquiry boundary. No framework migration, database, CMS or server is needed for this scope.

| Responsibility | Source boundary |
| --- | --- |
| Home | `src/pages/index.astro`, existing section components and a small adapted About component if useful. |
| Navigation | `src/layouts/Layout.astro`, one shared link/section-target mapping and small clean-URL navigation helper. |
| Styling | Existing tokens and scoped section rules. Shared stylesheet/Layout changes require cross-page checks. Avoid contradictory override layers. |
| Offers | `src/pages/offers.astro`, optional structured offer data, approved semantic copy and neutral visual slots. |
| Articles | `src/pages/articles.astro`, honest wireframes, no fabricated article records or dead links. |
| Utilities/legacy | Contact/Privacy preserved; retired route files reduced to compatibility behavior. |
| Assets | Original sources preserved. No raster generation/editing while held. Later approved artwork is versioned and optimized. |
| Tests | Update obsolete route/output assertions for approved behavior changes, retaining unrelated protections. |

Home changes invalidate the old whole-Home freeze hash by design. Version approved new baselines and compare untouched sections/assets separately. Do not delete preservation tests to make a changed page pass. Retire standalone Product assertions when its route becomes a compatibility document, replacing them with migration checks.

## 6. Design, content and factual invariants

- Use `Ez Kyosk`, original website branding and no em dashes in new public copy.
- Keep blue/subtle cyan, both themes, welcoming extra-bold typography and safe small gutters. Center approved headings, introductions and card headings; keep numeric tables/forms properly aligned and usable.
- Center the overall hero composition, retaining its desktop text/artwork relationship. Preserve main hero words except the two explicitly removed small supporting lines.
- Diagnose the dark background band behind the top navbar and blend it with the hero; do not remove the navbar. Preserve 50% background alpha/no blur, opaque controls and the solid mobile dropdown unless separately approved.
- Six journey cards form a readable desktop horizontal row, reflow on tablet and stack vertically on phones. No horizontal carousel/page overflow. QR scanning remains optional after successful payment.
- Enlarge content through the page layout only. No zoom button, image lightbox or browser full-screen feature is part of this revision.
- Preserve the current ten approved FAQ questions/answers, not the older screenshot.
- Preserve quotation-dependent automation/additions and assessed compatibility. No invented metrics, clients, endorsements or universal support.
- Offers prices/package content are owner-approved. Do not label approved prices as merely proposed, invent billing units/taxes/contracts or silently remove actual quotation exclusions. Review final exact wording in the Offers phase.
- YourAI remains an optional planned future upgrade. No avatar/voice/camera functionality is authorized by a kiosk reference photo.
- Starbucks, Dunkin Donuts, Mari Bank, Quantum Growth, the unconfirmed 60-product statement and the 70-percent statement are not new public content requirements. Reference screenshots do not grant permission to copy their claims or branding.
- Removing GCash/Maya marks from artwork is not permission to remove supported payment methods from preserved factual FAQ text.

## 7. Phase roadmap

| Phase | Active scope | Excluded/held |
| --- | --- | --- |
| 1 | Hero layout and header/hero background seam. | New kiosk, new hero copy, full navigation migration. |
| 2 | Shared navigation, Home architecture, wireframe destinations, route/link migration. | Full Offers design, authored articles, standalone Product content transfer. |
| 3 | Benefits alignment and existing-icon contrast. | New icons, copied reference statistics. |
| 4 | Platform heading/alignment and existing disclosures. | Four-card redesign, photo transfer and asset corrections. |
| 5 | Home Products alignment/usability. | New Product page, overlap restructuring, replacement images. |
| 6 | Payments HTML layout and action destinations. | Terminal/phone raster changes. |
| 7 | Solutions presentation and use-case CTAs. | New industry photos/pages. |
| 8 | Six-stage journey reflow and factual consistency. | New journey artwork or detailed guide page. |
| 9 | FAQ preservation and adapted About refinement. | FAQ rewrites, fabricated company facts. |
| 10 | Existing contact/demo, ending and footer. | New forms/backend/data collection. |
| 11 | Offers content, packages and planned-upgrade boundaries. | Online purchasing or YourAI implementation. |
| 12 | Articles wireframes/placeholders. | Research, articles, fake authors/dates. |
| 13 | Integrated bug/issue audit, technical SEO and release handoff. | Claiming held work or production launch complete. |

Phase 2 creates valid destinations before linking. Phases 9/11/12 refine those destinations. Each phase requires its own approval, local review and publication gate. Exact actions: [DIVIDE_AND_CONQUER_PLAN.md](DIVIDE_AND_CONQUER_PLAN.md).

## 8. Holds and scope exclusions

### H1: Image generation and raster-image revision

Keep existing approved images; use neutral placeholders only where new destinations lack artwork. No generation/edit begins from planning approval.

- Enhance the supplied kiosk first, then consistently apply the approved hardware with side terminal. Use existing kiosk meantime; do not infer assistant/camera functionality.
- Existing platform photo queue: first kiosk; remove logos in cards 2-4; spreadsheet inventory in card 3; dashboard analytics in card 4; cashier-facing device in card 5.
- Product-panel realism awaits actual interface references.
- Payments: terminal-only cutout; phone without embedded Ez Kyosk, retained content/AltPayNet moved upward. Retain AltPayNet/Visa/Mastercard; remove GCash/Maya marks. Keep kiosk's own logo and website branding in approved contexts. Review these exceptions per asset, not via indiscriminate logo removal.
- Later asset briefs must protect geometry, legible UI/arithmetic, natural interaction, transparency, original-source recovery, responsive outputs and performance. Illustrations are not verified software screenshots.

### H2: Research

Hold search-volume/question research, competitor/topic research, SEO/AEO/GEO expansion and article writing. Engineering checks on semantic HTML, factual approved copy, links/performance and preview controls remain active. No faster-crawling/rank-one/AI-citation guarantees.

### H3: Screenshot references

The owner supplies interface references. Remind them before the first dependent inventory/dashboard/product-image brief. Do not invent exact UI or request confidential customer/payment data. This hold does not prohibit local QA screenshots.

### H4: Overlap/four-card platform proposal

Keep the current five platform cards and Home product explorer. Record, but do not implement: customizable kiosk; POS and payment solutions; merchant dashboards; Treats loyalty. Photo transfer into Products and new four-card photos/placeholders are deferred together. Labels are proposals, not new verified promises.

### Outside current authorization

Domain purchase, production indexing, analytics, live inquiry delivery, commercial checkout, CMS and YourAI implementation are later separately authorized work.

## 9. Verification and honest completion

- Check root and Pages-subpath builds for route work; light/dark, responsive/reflow, keyboard/focus, mobile menu, tabs/disclosures, section offsets and no-JavaScript fallbacks.
- No new overflow, missing assets, console errors or broken destinations. Inquiry tests use mocks, never real submissions.
- Keep documented header contrast failures visible. Sampled scan passes are not universal conformance; no lowered thresholds or silent appearance changes.
- Publish only approved phase files. Exclude private PDFs/DOCX, unused images, local tools, credentials and ignored QA output unless specifically authorized.
- Verify commit-specific Website checks/Pages and actual live content/styles/assets/interactions before reporting complete.
- If issue replies are included in publication approval, link original feedback/release evidence, distinguish active completion from held sub-actions and leave the shared feedback hub open. A layout-only fix does not resolve a pending image request.
- After active phases, report holds and launch gates explicitly. Do not call the whole website production-ready.

## Historical technical snapshot

The following records the implementation before the 18 November architecture revision. It does not override the target or approval workflow above.

Astro compiles the website to static HTML in `dist`. The important product copy, navigation, FAQs, and internal links are present in server-rendered HTML. Small browser scripts enhance the mobile navigation, keyboard-accessible product tabs, progressive motion, and inquiry feedback. No database, authentication, frontend framework runtime, or marketing-site backend is required.

### Source structure

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

### SEO and indexing behavior

`SITE_URL` drives canonical URLs, the sitemap, absolute sharing imagery, and factual WebSite/WebPage JSON-LD. `BASE_PATH` supports repository-path preview hosting without changing page content. When `SITE_URL` is absent, the build emits `noindex, nofollow`, omits invented canonical/schema URLs, and blocks crawling in `robots.txt`. Organization and product schema are intentionally withheld until sufficient public identity and product properties are confirmed.

### Inquiry behavior

Without `PUBLIC_FORM_ENDPOINT`, form validation and feedback run locally and no information is transmitted or stored. With an approved endpoint, the browser submits `FormData` and reports accepted/error states. Provider delivery, privacy handling, retention, and inbox arrival must be verified separately before launch.

All `PUBLIC_` values are intentionally visible to the browser. Secrets must never be stored in those variables or committed to the repository.
