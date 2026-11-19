# Phase 2: Header Navigation and Page Architecture

Date: 19 November 2026, Asia/Manila.

Status: OWNER ACCEPTED ALL LOCAL PHASE 2 CHANGES AND AUTHORIZED PUSH/DEPLOYMENT on 19 November 2026. Release verification is in progress; do not infer successful publication from this document alone. Phase 3 and issue mutations are not authorized by this release instruction.

Review URL: http://127.0.0.1:4323/Ez-Kyosk-SEO/

## Implemented architecture

Owner-approved local correction, 19 November: move the complete How It Works section before Industries to align with the header's relative order. Revised middle sequence: Products -> Payments -> How It Works -> Industries -> FAQs. Both section source blocks are moved intact; no copy, images, functionality or other section positions changed. The image-markup preservation comparison is now order-independent for this authorized swap; pixel/file hashes remain unchanged and the complete Home order has a new static assertion.

Post-swap verification: Pages-subpath build/static checks, 168 navigation layouts, 72 section jumps, 16 legacy cases, 50 no-JavaScript checks, four normal-motion jumps and 44 hero checks passed. Protected sections, all image markup and 72 asset/style files remain unchanged. The refinement remains local and awaits owner review; no publication performed.

### Approved complete-frame navigation refinement

The owner then approved reducing excessive top/bottom whitespace and internal spacing, with readable desktop sizing adjustments, so a navigation click shows the whole section frame rather than only its beginning. Implemented in Home-only `src/styles/section-frames.css` and the section-navigation helper; no copy, source imagery or section order changed.

At widths 1181px and above, Products, How It Works, Industries and About Us use 24px vertical section padding, tighter heading/card gaps and appropriately sized text/images. Products retains its five tabs, full active-panel content and two-column layout, with its five checklist items arranged in two columns. The six journey cards now occupy one desktop row. About retains all paragraphs and principles. This explicitly approved framing refinement brings that desktop journey layout forward from Phase 8; it does not authorize other later-phase changes.

Navigation measures the content rectangle without decorative outer padding and centers it in the usable area below the sticky header. Focus, clean URLs and one current navigation item remain. If content is taller than the available space, it starts 16px below the header and scrolls normally. No CSS zoom, scaling transforms, fixed-height content clipping, internal scrolling panels or browser-zoom changes were introduced. Phones/tablets retain their previous stacked layouts; no-JavaScript still exposes all Product panels for ordinary vertical reading.

| Desktop viewport | Space below header | Products frame | Journey frame | Industries frame | About frame |
| --- | --- | --- | --- | --- | --- |
| 1366 x 768 | 676px | 522px | 439px | 560px | 491px |
| 1440 x 900 | 808px | 524px | 452px | 578px | 496px |
| 1920 x 1080 | 988px | 528px | 474px | 648px | 482px |

Latest verification: 68 complete-frame/fallback checks covering all five Product tabs, four desktop widths, both themes and four narrow widths; 168 navigation layouts, 72 section jumps, 16 legacy cases, 50 no-JavaScript cases and four normal-motion jumps; 24 journey layouts/144 card checks/six sampled accessibility scans; full-site 36 layouts/24 sampled scans passed. Preservation checks still pass for all protected content/images and 72 asset/style files. Root and Pages-subpath builds/static checks passed. Historical root navigation results below predate this framing refinement; the current frame/interaction checks were run on the final Pages-subpath preview. Known transparent-header contrast limitations remain unchanged and are not waived.

Screenshots and current measurements: ignored `artifacts/phase2/frames/`, `artifacts/phase2/section-frame-before.json` and `section-frame-after.json`. Changes remain local; review Products and each other linked section before approving publication.

| Header label | Destination |
| --- | --- |
| Home | Home top |
| Products | Home's existing five-tab products section |
| How It Works | Home's existing six-step customer journey |
| Industries | Home's existing Designed to adapt section |
| Plans & Pricing | `/offers/`, minimum wireframe only |
| About Us | Adapted Home About section, after FAQ and before final demo CTA |
| Articles | `/articles/`, neutral wireframe only |

The menu is flat, with no dropdowns. Desktop links are centered in the viewport. At 1180px and below, use the solid-background collapsible menu rather than forcing seven links into an overlapping desktop row. Existing sticky header heights, original logo, theme switch, separate Request a Demo CTA, 50%-alpha background and no blur remain.

## Navigation behavior and fallbacks

- Ordinary Home section clicks center a complete content frame where it fits and move focus without adding a hash or substitute query parameter. Taller frames retain a readable start position beneath the header. Scroll tracking maintains one current location. Existing incoming hashes are removed when activating an enhanced section link.
- From another page, a short-lived, one-use section intent is saved to session storage, then the browser follows a real clean Home URL. Blocked storage safely opens the full Home page instead. Modified/new-tab clicks are not intercepted and use the real Home fallback.
- The same mapping handles root hosting and the `/Ez-Kyosk-SEO` base path. Font loading and existing reveal transforms are accounted for when calculating landing positions.
- The platform portraits reserve their existing 3:4 ratio before lazy loading. This prevents an initial Products jump from shifting when those images arrive; no image pixels or source markup were changed.
- Home section clicks do not create individual browser-history entries. Native page back/forward remains available; the stored intent is consumed once rather than replayed on every visit.
- Enhanced section destinations cannot be bookmarked independently using the clean Home URL. Without JavaScript or in a new tab, a section link opens Home, not an exact-section deep link. All content is readable, all seven navigation links remain visible, and all five product panels are available without inert tab controls.
- The skip link retains its native no-JavaScript `#main` fallback; enhanced activation focuses main without introducing a fragment. This accessibility exception remains intentional.

## Retired content and link repairs

`/features/`, `/how-it-works/`, `/solutions/` and `/about/` no longer contain their old standalone marketing content or the Product subheader. They retain short compatibility documents with clean Home fallback links. JavaScript forwards to the corresponding section and consumes recognized legacy product/industry fragments. Unknown or malformed fragments safely use the route's default section.

These are static compatibility documents and client-side forwards, not server HTTP 301 redirects. They stay noindex and are omitted from the future configured-site sitemap. The sitemap's primary/utility paths are Home, Offers, Articles, Contact and Privacy. In the actual unconfigured review build, crawling remains blocked and the sitemap remains empty.

Header/footer/body links no longer send visitors to retired content. Product-area actions now say Discuss this product area and lead to Contact. Industry cards have a descriptive inquiry label and Discuss this use case action, also leading to Contact. The redundant detailed-ordering-guide CTA is removed. Original external kiosk demo, Contact inquiry behavior, Privacy and custom 404 remain.

## About and wireframe boundaries

About adapts existing purpose and four principles without inventing company history, credentials, clients or addresses. Its capability paragraph respects the approved FAQ boundary: automated inventory, reporting and customer/loyalty tools are configurable and quotation-dependent. Existing FAQ answers are unchanged.

Plans & Pricing currently reserves Demo, Starter and Complete spaces without publishing prices, invented package inclusions or completed artwork. Articles has three clearly identified empty editorial spaces, with no fake dates, authors, posts or dead Read more links. Full presentation belongs to later approved phases. Research, image generation, raster revisions, source screenshots and the overlapping four-card restructure stay on hold.

## Verification record

- Pages-subpath navigation suite: 168 route/width/theme layouts, 72 same/cross-page section jumps, 16 legacy-link cases, 50 no-JavaScript route/width checks, four normal-motion jumps, modified-link/history/storage/skip/focus tests passed with no browser errors.
- Full-site regression: 36 layouts and 24 sampled accessibility scans passed; no browser/resource errors; keyboard behavior and mocked inquiry success/failure checks passed. No real inquiry sent.
- Hero regression: 44 layout/theme/JavaScript-state combinations passed. Four protected Home sections, all Home image markup and 72 artwork/style files pass comparisons against the published Phase 1 baseline. The authorized section IDs are normalized for the hero comparison; old whole-output fixtures remain historical.
- Root preview passed the same 168 layouts, 72 section jumps, 16 legacy-link cases, 50 no-JavaScript checks and four normal-motion jumps. Root and Pages-subpath static checks passed. A test-only configured-site Pages build passed canonical/schema and five-entry sitemap checks; compatibility routes stayed noindex and outside the sitemap. Test configuration was process-local, then removed; the final preview build is restored to blocked crawling with no invented canonical/domain.
- Transparent-header regression: 264 layout/scroll checks, 24 sampled header scans, four synthetic backdrop tests and no-JavaScript desktop navigation completed without browser errors. Strict readability checks still report 32 failures and a nonzero exit code with the seven-link menu. Background-dependent contrast is NOT fixed or waived; no threshold, opacity or blur change was used to conceal it. Sampled scans do not establish full accessibility conformance.
- Desktop header, phone menu, Plans & Pricing and adapted About screenshots visually inspected. Page/About screenshots are retained in ignored test artifacts for local review, not publication. A final keyboard check confirms Enter on the mobile menu moves focus to the first link and Escape returns it to the toggle.

Evidence: ignored `artifacts/phase2/`, `artifacts/qa-report.json`, `artifacts/header-glass-report.json`. Historical standalone Product tests were replaced with migration assertions; shared Home/image/FAQ and form-safety checks remain. Git history retains old standalone content/tests.

## Main files

- `src/data/navigation.ts`, `src/scripts/section-navigation.ts`, `src/styles/navigation.css`: shared names, clean-URL behavior and responsive/fallback presentation.
- `src/styles/section-frames.css`, `scripts/qa-section-frames.mjs`: approved compact desktop framing and full-visibility/no-clipping/fallback checks.
- `src/layouts/Layout.astro`: shared navigation, footer destinations, Home URL hook, script import and compatibility noindex.
- `src/pages/index.astro`, `src/components/HomeAbout.astro`: stable section targets, About placement and obsolete guide-CTA removal.
- `src/components/LegacyPage.astro` and four retired route files: compatibility/fallback behavior only.
- `src/pages/offers.astro`, `src/pages/articles.astro`: wireframes; no generated assets.
- `src/components/ProductExplorer.astro`, `src/components/IndustryCard.astro`, `src/components/PaymentShowcase.astro`, `src/pages/404.astro`, `src/pages/sitemap.xml.ts`: link/target/sitemap repairs.
- Navigation, hero, header, full-site and static verification scripts; scoped Phase 2 preservation helper/fixture; architecture/phase/roadmap documentation.

No dependencies added. Private reference PDFs/DOCX, unused asset variants and unrelated user files are untouched.

## Owner review and exact next actions

1. Review all seven header labels and the centered desktop menu; check the mobile menu and theme toggle.
2. Click each section link from Home, Offers, Articles, Contact and Privacy. Confirm it opens the intended Home content without a public hash and without hiding the heading behind the header.
3. Review About placement and adapted text. Review Plans & Pricing and Articles as wireframes, not finished pages.
4. Try old Product/industry links and confirm they forward to useful Home content. Check the revised product/industry inquiry actions and footer links.
5. Request local corrections or accept this local result. Separate explicit deployment approval is required before commit/push/Pages publication or issue replies.
6. After accepted publication and live verification, present Phase 3: center the A better way to take orders heading/introduction and its existing icons/headings; refine contrast/spacing and responsive behavior without changing approved descriptions or generating assets. Do not start Phase 3 automatically.
