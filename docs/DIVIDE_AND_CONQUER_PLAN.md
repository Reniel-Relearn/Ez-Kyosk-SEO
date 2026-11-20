# Divide and Conquer step by step actions planning

Date: 18 November 2026, Asia/Manila.

Companion: [Revision architecture](ARCHITECTURE.md).

Status: PHASES 1-9 COMPLETE and live verified; Phase 9 source e4b7ac6 verified on 20 November; see [closure](PHASE_9_RELEASE.md). Phases 10-12 approved locally only, each separately committed and later separately pushed after review. Phase 13 and held work remain unapproved. Earlier local-only status is historical where superseded.

## Workflow for every phase

Shared layout requirement, approved and published 20 November: Phase 3 and every succeeding Home section use the same centered content boundary and equal side margins as the hero/header (1200px maximum content width, minimum 20px gutters). This includes the final CTA and footer; backgrounds remain edge-to-edge. Preserve these boundaries in all later phases. Resize typography/cards only as needed for readable fit, retaining accessible controls, natural wrapping and responsive stacking. Other phase-specific changes still require approval.

Additional spacing direction, 20 November: Phase 5 and subsequent section phases must align top/bottom whitespace with the accepted compact preceding sections. Use the Phase 3/4 responsive baseline, `padding-block: clamp(32px, 4vw, 56px)`, for regular section boundaries; keep the already approved hero/header composition, side gutters and content/card spacing intact. Do not assume the hero has identical symmetrical padding or reset it. Check actual visible whitespace between sections, both themes, mobile/zoom reflow and navigation landing; use natural scrolling if a whole content frame cannot fit. Later Offers/Articles section layouts should follow the same compact rhythm when their phases are approved. Record and review any necessary layout-specific exception rather than silently restoring oversized spacing. This is a planning requirement only for unapproved phases, not authority to implement them now.

1. Present the phase's exact actions, boundaries, likely files, tests and completion criteria.
2. Stop for owner approval. The first "approved, proceed" authorizes that specified local implementation only.
3. Implement only that scope, preserve unrelated work, test and integrate locally.
4. Report exact changes/files, local review URL, results, limitations and what to inspect.
5. Stop for local review. Apply requested local corrections and repeat until accepted.
6. Obtain explicit deployment approval for the reviewed version. Earlier local approval is not automatic publication authority.
7. Commit necessary files only, push existing main, monitor checks/Pages and verify the actual live release.
8. Report completion, commit, deployed URL, checks and deferred sub-actions. Reply to issue feedback only where included in approved publication scope, leaving the hub open.
9. Present the next phase's exact actions and stop for its approval. Do not advance automatically.

Status sequence: Planned -> Awaiting phase approval -> Implementing locally -> Awaiting local review -> Awaiting deployment approval -> Deploying -> Live verified / Complete. Failed checks or rejected local review return the phase to implementation; they are not completion.

## Shared acceptance and release rules

- Keep original brand assets, approved blue/cyan light/dark tokens, local font family and no-em-dash public-copy rule.
- Preserve supported capability facts, ten approved FAQ answers, optional cash/QR semantics, noindex/robots preview controls and unconfigured no-send inquiry behavior unless the phase explicitly changes an approved item.
- Run build/static checks and proportionate responsive, keyboard, visual and accessibility tests. Shared CSS/Layout/navigation changes require full-site regression. Route changes need root and Pages-subpath verification.
- Check practical widths and breakpoint edges, including 320, 390, 768, 1024, 1366, 1440 and 1920 where affected. Use realistic heights for first-screen checks; test zoom/reflow too.
- Protect untouched sections/assets against the last approved baseline. Update obsolete exact-output expectations only for approved changes, with replacement assertions. Do not delete failures to obtain green tests.
- Record known header contrast limitations and actual new failures honestly. No silent threshold reductions or full-conformance claims from sampled scans.
- Held work stays held. Local QA screenshots are allowed; generating/editing raster assets, collecting withheld interface references or marketing research is not.
- Publish only scoped source/tests/docs/assets. Exclude private reference PDFs/DOCX, unused images, credentials, tools and ignored test artifacts. No force push or destructive cleanup.
- Completion applies only to explicitly approved active scope. A layout phase must not claim a pending image comment completely resolved.

## Phase 1: Hero Section

Status: Complete and live verified at e6495cd; [Hero issue resolution](https://github.com/Reniel-Relearn/Ez-Kyosk-SEO/issues/1#issuecomment-6998792723) posted. See [Phase 1 local review](PHASE_1_HERO_LOCAL_REVIEW.md) for implementation evidence.

### Exact actions

1. Capture desktop/phone light/dark hero/header geometry. Identify the actual background/layer creating the owner's marked dark horizontal band. Do not assume its cause or remove the navbar.
2. Blend the background behind the top navigation with the hero gradient, using Home-scoped layering where possible. Preserve sticky navigation, its current links in this phase, 50% background alpha, no blur, opaque controls and the solid mobile menu.
3. Reduce oversized hero typography responsively. Keep the exact main heading, eyebrow, lead, audience and CTA wording. Adjust wrapping/layout rather than inventing marketing copy.
4. Reduce excessive side gutters while retaining safe phone margins. Center the overall composition, retaining desktop text-left/artwork-right and a readable stacked phone layout.
5. Remove only the hero's "Your Menu. Their Order. One Simple Screen." line and the visible descriptive caption beneath the kiosk. Retain meaningful image alt text. Do not remove the footer tagline by global text replacement.
6. Bring existing hero buttons into the initial viewing area at common desktop/phone sizes. Keep the primary CTA before artwork on phones; do not clip content or impose a fixed-height trap.
7. Keep the current kiosk artwork byte-unchanged. No enhanced kiosk, assistant-screen replacement or image generation.
8. Update hero assertions for the two approved text removals/geometry. Version the approved hero baseline and protect untouched Home sections/assets separately instead of pretending the old whole-Home hash still applies.
9. Integrate locally and report the actual band cause, changed properties/files, results, local URL and before/after evidence.

### Planned files

`src/pages/index.astro`, `src/components/HeroProduct.astro`, scoped hero CSS; Layout only if a Home-specific background hook is necessary; relevant assertions/preservation fixtures and result documentation. Cross-page checks are required for shared changes.

### Acceptance and review

- Marked seam blends in both themes; navbar/controls remain present and foreground opacity is unchanged. Known background-dependent contrast limitations remain explicitly reported.
- Primary CTA is visible at 1366x768 and 1440x900 without clipping. At 390x844 it appears before artwork and is directly discoverable. Smaller/zoomed screens may scroll normally rather than hide content.
- Remaining hero words and source image bytes are retained; only the two authorized visible lines are removed.
- No overflow at 320px; keyboard/focus, sticky header, menu and both CTA destinations work. Other Home sections and route headers do not regress.
- Stop for local review, then separate publication approval. After verified deployment, report Phase 1 complete and present Phase 2.

## Phase 2: Header Navigation and Page Architecture

Goal: one dependency-safe migration, with no broken navigation release.

Status: COMPLETE. Owner accepted the [reviewed implementation](PHASE_2_LOCAL_REVIEW.md), authorized publication and phase closure; source release 330aedb was deployed and live verified on 19 November 2026. See [closure, live checks and remaining limitations](PHASE_2_RELEASE.md). No new issue reply or Phase 3 implementation authorized.

Local-review correction approved on 19 November: swap the intact Home How It Works and Industries sections. Order is now Products -> Payments -> How It Works -> Industries -> FAQs, matching the header's relative order. Do not change either section's copy, artwork or functionality; keep all other sections in place and recheck their navigation targets locally.

Further local-review refinement approved on 19 November: reduce excessive top/bottom/internal spacing and make readable desktop layout/type/image adjustments for Products, How It Works, Industries and About Us. Center the complete content frame beneath the sticky header when it fits, rather than aligning its top edge. Preserve all content/assets, clean URLs and focus. Tall/small/zoomed layouts retain normal vertical scrolling without scaling/clipping. The desktop six-card journey row is brought forward only for this specifically approved refinement; all unrelated later-phase work remains pending. See the local review for measurements and checks.

Owner naming decision, 19 November 2026: use the exact labels below, including **Products**, not Platform. This Phase 2 naming update supersedes earlier navigation-label wording in the architecture document; it does not authorize implementation. Products, How It Works, Industries and About Us target Home sections. Plans & Pricing targets the planned `/offers/` page; Articles targets `/articles/`. Existing route plans remain unchanged. Keep the separate Request a Demo CTA. No dropdown is added by this naming decision.

### Exact actions

1. Establish a shared mapping in this exact order: Home | Products | How It Works | Industries | Plans & Pricing | About Us | Articles.
2. Center the navigation group without overlap. Keep logo, separate Request a Demo to Contact, theme control, accessible mobile menu, sticky positioning, 50% alpha and no blur.
3. Add stable Home targets. Adapt existing About content into Home after FAQs and before existing demo/ending content. Preserve the owner's exact Home sequence; do not transplant standalone Product content.
4. Create valid minimum `/offers/` and `/articles/` wireframes before linking to them. Offers awaits its full content phase; Articles has neutral placeholders, no fake posts/dates or dead links.
5. Implement the architecture's hash-free enhanced navigation: real clean Home fallback URLs, separate section targets, same-page scrolling/focus and one-time cross-page intent. No public section hashes or substitute query parameters in normal navigation.
6. Preserve modified clicks, new tabs, back/forward, reduced motion, unavailable-storage fallback and accessible mobile-menu closing/focus. No-JavaScript content remains fully readable even when exact section jumping falls back to Home.
7. Keep accessibility skip navigation functional. Enhanced activation can avoid a hash; do not disable native no-JavaScript skipping to hide a fragment.
8. Retire standalone `/features/`, `/how-it-works/`, `/solutions/` and `/about/` content and remove the Product subheader. Retain minimal compatibility forwards with clean Home fallback links, not duplicate pages or claimed HTTP 301s.
9. Consume meaningful legacy Product/industry fragments when forwarding rather than carrying them into Home. Test direct incoming links, including unknown targets.
10. Repair all header/footer/body links. Product-area actions go to Contact with reviewed "Discuss this product area" wording. Industry actions go to Contact with appropriate use-case wording, not back to their own card. Remove the obsolete detailed-ordering-guide CTA.
11. Preserve Contact/Privacy, external kiosk demo and custom 404. Update future configured-site sitemap paths to Home/Offers/Articles/Contact/Privacy, excluding retired content routes. Keep preview crawling blocked.
12. Replace obsolete standalone-Product/active-route tests with compatibility, section-target and clean-URL tests. Preserve Home content/images and untouched-section comparisons.
13. Test navigation from every primary/utility page, desktop/tablet/phone, sticky offsets, focus, menu, history, storage failure, no JavaScript, root/subpath builds and full-site regression.
14. Integrate locally and present the entire migration for owner review before publication. Do not release only the menu while destinations are missing.

Files: Layout/navigation mapping/helper; Home/adapted About component; Offers/Articles scaffolds; legacy route compatibility files; ProductExplorer/IndustryCard/footer destinations; sitemap; navigation/route tests.

Acceptance: all seven links have valid destinations; enhanced navigation is hash-free; old content/subheader is gone; fallbacks are usable; no new backend, real articles, artwork or indexing. After local review and verified publication, present Phase 3.

## Phase 3: A better way to take orders

COMPLETE: owner-approved scope and spacing refinements published and live verified on 20 November; see [release record](PHASE_3_RELEASE.md). Actions below are retained as the approved scope, not outstanding tasks.

### Exact actions

1. Center the existing section title and introduction within the wide responsive container.
2. Retain Faster Ordering Experience, More Order Capacity, Better Service Flow and their descriptions. Do not copy reference percentages/revenue claims.
3. Center each existing icon above its heading, then center card headings/supporting presentation. No new icon generation or package.
4. Check icon/text/background contrast in both themes with existing tokens. Align icon size, heading starts, spacing and padding without equal-word-count rewriting or clipped fixed heights.
5. Test desktop columns, phone stacking, zoom/reflow, reading order and no overflow; preserve icon assets and other sections.
6. Integrate locally, review, obtain deployment approval and verify live. Report only this layout/icon-presentation scope complete. Next: Phase 4.

Files: Home benefits markup, existing icon presentation styles and targeted layout/contrast checks.

## Phase 4: One Connected Platform

COMPLETE: local result including compact spacing accepted, published and live verified on 20 November; see [release record](PHASE_4_RELEASE.md). Actions below are retained as the accepted scope, not pending implementation. Photos, image-related issue requests and four-card restructuring remain on hold.

### Exact actions

1. Retain One Connected Platform and the existing five-card structure.
2. Replace "From the first tap to the next task." with "Powerful features. Stronger together." Center the heading and introduction.
3. Center card headings/refine spacing without changing the five images or factual descriptions.
4. Preserve independent native plus/minus expansion: closed neighbors do not stretch into empty panels; all-open bottoms align per responsive row; mixed-state bottoms may differ.
5. Test closed/mixed/all-open, pointer/keyboard/no-JavaScript, hover, tablet rows and phone layout. Preserve source image bytes.
6. Carry kiosk/logo/spreadsheet/dashboard/cashier-orientation requests into the image hold. Do not mark those image sub-actions resolved.
7. Integrate locally, review, obtain deployment approval and verify live. Report heading/alignment/disclosures complete, with image work and four-card restructure held. Next: Phase 5.

Files: Home platform markup, PlatformImageCard styles and independent-expansion checks. No photo transfer or category restructuring.

## Phase 5: Products Section on Home

COMPLETE: local result accepted, separately pushed/deployed as 9b03f6b and live verified on 20 November; see [closure](PHASE_5_RELEASE.md). Actions below are retained as the accepted scope. Current text/images remain; image generation and overlapping-section restructure remain held.

### Exact actions

1. Retain the five-tab Home explorer, icons, categories, copy and current images. Do not import the removed Product page or its nine placeholders.
2. Center section/subsection headings and supporting presentation; keep controls/lists readable and panel relationships intact. Align Products top and bottom spacing to the accepted compact preceding sections, using the Phase 3/4 responsive 32-56px-per-side baseline; preserve hero-aligned side margins and verify actual gaps with adjacent sections.
3. Preserve selection, pointer/Arrow/Home/End keyboard behavior, tab labels and mobile stacked content. Reveal/focus a relevant panel when an internal target requires it.
4. Verify contact actions replace deleted-page links and do not point back to the same panel without useful effect.
5. Test both themes, breakpoint/zoom reflow, image ratios, tabs/panels, no-JavaScript readability and no overflow. Assert responsive top/bottom spacing, preserved side margins and section-navigation framing below the sticky header; tall frames must scroll naturally without clipping. Keep existing rasters until references/asset approval.
6. Integrate locally, review, obtain deployment approval and verify live. Report alignment/usability complete; overlap and realistic-image work remain held. Next: Phase 6.

Files: ProductExplorer, scoped product styles, approved display/link data changes only and explorer regression tests. No new capability promises or Product page.

## Phase 6: Payments with AltPayNet

COMPLETE: accepted local Phase 6 result, including the one-line action correction, deployed as 57c504e and live verified on 20 November; see [release record](PHASE_6_RELEASE.md). Actions below are retained as accepted scope. Image corrections remain held.

### Exact actions

1. Center section/card headings and supporting HTML presentation. Align section top/bottom spacing with the shared compact Phase 3/4 baseline (32-56px per side) and retain hero-aligned side margins. Retain compact cards, visible actions and current online-image wrist-to-bottom alignment.
2. Preserve payment facts and Contact actions. Removing GCash/Maya artwork marks later does not remove supported paths from the preserved FAQ.
3. Prepare responsive media containers for the later terminal-only and revised-phone assets without collapsing text, adding overflow or publishing blank replacements.
4. Do not crop, regenerate or edit either raster while held. Record the future terminal-only and phone-logo/content shift, with AltPayNet/Visa/Mastercard retained and GCash/Maya marks removed.
5. Test both themes, text/action readability, phone/desktop ratios, image loading, current wrist alignment and no overflow. Preserve originals.
6. Integrate locally, review, obtain deployment approval and verify live. Report layout complete, not payment-image corrections complete. Next: Phase 7.

Files: PaymentShowcase HTML/scoped CSS and layout tests. No marketing-site payment processing is added.

## Phase 7: Solutions - Designed to adapt

Approved on 20 November for local implementation/review after the verified Phase 6 release. Keep the actual navigation label Industries. Do not deploy Phase 7 or generate/edit photos without later approval.

COMPLETE: accepted Phase 7 source dfde5f7 deployed and live verified; see [closure](PHASE_7_RELEASE.md). Actions below record accepted scope; photos/badges/industry facts preserved.

### Exact actions

1. Retain Hospitality & food, Retail & shops, Wellness & beauty, Services & B2B and their approved photos.
2. Center section introduction/card headings and refine spacing, preserving category badges, readable descriptions and image proportions. Align section top/bottom spacing with the shared compact Phase 3/4 baseline (32-56px per side), preserving hero-aligned side margins and readable navigation landing.
3. Retain the approved Home Industries navigation label and meaningful internal industry targets. Legacy Solutions routes remain compatibility forwards to these targets, not a renamed navigation item or separate content page. Keep normal enhanced section navigation hash-free.
4. Verify reviewed use-case Contact actions; remove surviving retired-Solutions links or pointless self-links.
5. Test four/two/one-column behavior, row alignment, focus, loading and themes. Do not imply every workflow is a standard inclusion.
6. Integrate locally, review, obtain deployment approval and verify live. Next: Phase 8.

Files: Home industry section, IndustryCard, scoped styles and use-case destination/layout tests. No new photos or industry pages.

## Phase 8: How Ez Kyosk works

Approved on 20 November for local implementation/review after verified Phase 7 publication. No Phase 8 deployment or image generation/editing authorized. The minimal caption correction is: "After payment, optionally scan the order-tracking QR to view order status." Keep all six titles and other descriptions/FAQ unchanged.

COMPLETE: accepted Phase 8 source c41e2d7 deployed and verified live; see [closure](PHASE_8_RELEASE.md). Approved images and all other captions/FAQ unchanged. Actions below record the accepted scope.

Phase 2 local-review exception: the owner-approved complete-frame navigation refinement already introduces one six-card desktop row at 1181px and above, with tighter readable spacing. Preserve that accepted direction; do not reset it to the earlier three-column desktop layout. The current local approval covers the exact actions below; publication still requires separate approval.

### Exact actions

1. Retain six steps in order: Start & Select; Review & Edit Order; Choose How to Pay; Scan Your Tracking QR; Track Your Queue Status; Collect Your Order.
2. Center title/introduction/card headings; preserve the six approved images and sequence. Align section top/bottom spacing with the shared compact Phase 3/4 baseline (32-56px per side) and retain hero-aligned side margins; verify complete-frame navigation or natural scrolling at each breakpoint.
3. Preserve the accepted readable single horizontal six-card row at 1181px and above. Reduce media/type/spacing proportionately, not through clipping or a scrolling carousel.
4. Reflow to practical three/two-column tablet layouts and one vertical phone column. At zoom/narrow widths, prioritize readable reflow over forcing six columns.
5. Keep payment before tracking, optional cashier cash and optional QR scanning. Include any minimal correction to compulsory-sounding QR caption text in this phase's exact-copy approval; do not silently rewrite FAQ answers.
6. Preserve the ordered list and visible text outside images. Remove any surviving retired-guide CTA rather than creating another duplicate walkthrough.
7. Test sequence, desktop/tablet/phone counts, long captions, image loading, reading order, reduced motion and zero page-level horizontal scrolling.
8. Integrate locally, review, obtain deployment approval and verify live. Report layout/factual caption scope complete; image revisions remain held. Next: Phase 9.

Files: Home journey/data only for specifically approved wording, JourneyCard layout, scoped CSS and journey tests.

## Phase 9: FAQs and About us

Approved for full local implementation/review after verified Phase 8 publication. No Phase 9 deployment authorized. Latest FAQ direction is explicit: center the title/introduction above one centered column; keep question and answer text flush left, natural ragged right, NOT fully justified. Align expand/collapse icons right. Preserve whole-row click/tap targets, subtle dividers, restrained blue highlights, visible keyboard focus and multiple independently open answers. Do not switch to two FAQ columns or center answer text.

Local implementation and QA complete; see [Phase 9 review](PHASE_9_LOCAL_REVIEW.md). Exact ten FAQs, original About component/copy, imagery and links preserved. Centered one-column FAQ, explicit text/icon alignment, compact spacing, About principle headings and responsive layout verified. Await owner review and separate publication approval before phase closure.

Owner-review revision: Ask a different question belongs below the complete FAQ list, flush left with the question text, not in the centered introduction. Retain its exact wording, Contact destination and keyboard target; test its position with closed/mixed/all-open answers. Implement locally only.

### Exact actions

1. Preserve the current ten FAQ questions and answers exactly, not the older six-question screenshot.
2. Center FAQ title/introduction over a single-column accordion centered inside hero-aligned outer margins. Keep questions/answers left-aligned with a natural right edge, never fully justified. Keep icons consistently right-aligned, whole-row targets, subtle dividers, visible focus and independent native disclosures. Align FAQ and About section top/bottom spacing with the shared compact Phase 3/4 baseline (32-56px per side); test actual gaps in closed/mixed/all-open states.
3. Verify static answers, pointer/keyboard/no-JavaScript, long wrapping and all-open/mixed states.
4. Refine the adapted About section introduced in Phase 2, after FAQs and before the existing demo/end content. Center approved headings/introduction and retain original website branding.
5. Use existing approved purpose/principles material. No invented company history, credentials, clients, addresses or automatic package inclusions. Keep standalone About retired.
6. Test navigation landing/focus, Contact actions, themes/reflow and exact FAQ text preservation.
7. Integrate locally, review, obtain deployment approval and verify live. Next: Phase 10.

Files: FAQ presentation, adapted About component, scoped styles and exact-answer/link/accessibility tests. FAQ answer changes are not authorized here.

## Phase 10: Existing Contact, End Section and Footer

Approved locally with Phases 11-12; separate commit per phase. No publication until local acceptance and later separate pushes. Existing Contact/Privacy content and form delivery boundary must be preserved.

Implemented/verified locally; see [Phase 10 review](PHASE_10_LOCAL_REVIEW.md). Centered existing ending, compact shared footer, original Contact/Privacy/form/links retained. No publication yet.

### Exact actions

1. Retain the existing Home final demo CTA/footer as the contact/ending experience; no new Home form or unsolicited end section.
2. Keep Contact and Privacy routes. Preserve fields, validation, honeypot, preview notices and unconfigured delivery boundary.
3. Verify Request a Demo links reach Contact and the external kiosk demo works. Preserve header/footer identity.
4. Center approved titles/supporting presentation and fix scoped spacing bugs without redesigning the inquiry workflow. Align ending-section/footer whitespace with the shared compact Phase 3/4 rhythm (32-56px section-boundary baseline); preserve readable internal footer groups, hero-aligned Home side margins and existing Contact/Privacy functionality. Record any reviewed layout-specific exception.
5. Audit footer links against the new map and retain Privacy access. No deleted content destinations or dummy anchors.
6. Test keyboard, native validation and no-send preview. Configured-mode checks use intercepted mock outcomes, never real data delivery.
7. Integrate locally, review, obtain deployment approval and verify live. Next: Phase 11.

Files: DemoCTA, Layout footer, Contact/Privacy only for necessary scoped layout/link changes, styles and mocked inquiry/navigation checks. No endpoint, email setup or analytics activation.

## Phase 11: Offers Page

Approved locally with Phases 10/12. Record the exact public copy and source reconciliation in the phase brief before coding; approval of this phase authorizes that source-faithful implementation, not invented commercial terms. Separate local commit, no deployment.

Implemented and verified locally; see [exact copy brief](PHASE_11_COPY_BRIEF.md) and [Phase 11 review](PHASE_11_LOCAL_REVIEW.md). Approved pricing, package boundaries, quotation exclusions, future-only YourAI and five Contact actions delivered with neutral placeholders. No publication yet.

### Exact actions

1. Expand the scaffold using pages 4-6 of `DESIGN-FOR-WEBSITE_Revised.pdf`; present exact public copy in the phase brief before implementation.
2. Use Free Software Demo at PHP 0, Starter at PHP 1,990/month, Complete at PHP 3,990/month. Approved machine cost is PHP 89,000; Starter setup/onboarding PHP 9,900; Complete setup/integration PHP 14,900. Do not invent billing units, tax, contract length or discounts.
3. Preserve the documented package boundaries: demo branding/up to 10 items/consultation; Starter up to 50 items, cart/review, setup/training; Complete adds documented checkout/payments, printer connectivity, queue/tracking and support. Clearly separate inclusions and extras.
4. Reflect commercial approval instead of calling prices merely proposed. Preserve valid quotation/configuration/compatibility exclusions. Reconcile conflicting old readiness text in the exact-copy review instead of silently claiming universal integrations.
5. Keep terminal hardware, transaction fees, printers/additional equipment separately quoted where specified. Connectivity is not a promise of included printer hardware.
6. Include YourAI only as the optional planned future upgrade with pricing/availability not finalized. No voice/assistant implementation or invented launch date.
7. Send demo/quote/upgrade-interest actions to existing Contact with truthful labels. No purchasing backend, fake free-service automation or dead Learn more link.
8. Use shared tokens, responsive semantic offer layouts and neutral placeholders where artwork is absent. Normalize Ez Kyosk casing and punctuation without changing meaning. Plan compact section top/bottom spacing consistent with the Phase 3/4 32-56px baseline, without altering approved hero/header composition; verify responsive readability and document any reviewed exception.
9. Test exact prices/limits/exclusions, mobile readability, headings/metadata, action links, preview controls and no fabricated Offer/Product schema. Flag any FAQ conflict without automatically changing the protected answers.
10. Integrate locally, review full copy/layout, obtain deployment approval and verify live. Next: Phase 12.

Files: Offers route, optional structured offer data/components, scoped styles and amount/copy/link tests. No commercial checkout.

## Phase 12: Articles Wireframes and Placeholders

Approved locally with Phases 10/11. Separate local commit, no deployment. Research, actual posts, generated imagery and CMS work remain held.

### Exact actions

1. Refine `/articles/` on the same website, with Articles nav label; no subdomain/domain configuration.
2. Create an honest article-index wireframe using neutral reserved-content cards or an explicit empty state, not purported published posts.
3. Keep only usable Home/Contact/section destinations. Placeholder cards do not link to nonexistent posts or `#` targets.
4. Do not fabricate researched titles, dates, authors, sources, excerpts, views or customer results. Do not add thin article-detail routes merely to fill a grid.
5. Keep image generation, search/question research, article drafting and screenshot collection held; reserve visual space without generating assets.
6. Test responsive spacing, centered headings, semantics/focus, Articles active state, clean Home navigation, unique index metadata and noindex. Align section top/bottom spacing with the compact Phase 3/4 32-56px baseline and review layout-specific exceptions, preserving hero/header composition. No Article schema for placeholders.
7. Integrate locally, review, obtain deployment approval and verify live. Report a wireframe, not a launched SEO article library. Next: Phase 13.

Files: Articles route and minimal components/styles/tests. No CMS or publishing automation.

## Phase 13: Integrated Bug Audit, Technical SEO and Handoff

### Exact actions

1. Re-audit target architecture, exact Home sequence, active-phase acceptance and visible holds.
2. Recheck every header/footer/CTA/industry/product destination from primary/utility pages: clean URLs, offsets, compatibility, history/focus, storage failures and no-JavaScript content.
3. Verify root/Pages builds, referenced assets, unique metadata, heading structure, truthful copy, punctuation and removal of duplicate old content pages.
4. Verify future configured-site sitemap/canonical behavior without activating it on the preview. Retain noindex/nofollow, robots blocking, local fonts and no live analytics/form transmission.
5. Run full responsive/theme, keyboard/menu, tabs/disclosures, journey, mocked-form, image-loading/performance and accessibility regressions. Audit consistent compact top/bottom section spacing, shared side margins, reviewed exceptions and navigation framing. Record existing contrast failures; fix new regressions only within approved scope or return for review.
6. Confirm original assets/deferred assignments were not accidentally changed and no new artwork/research/placeholder article is misrepresented as completed work.
7. Produce an issue matrix: original comment, accepted action, implementation, evidence/release and held sub-actions. Image feedback remains partially pending where only layout/text changed.
8. Present any integration fixes as an exact local patch scope, then obtain local/publication approval. This phase is not blanket authority to redesign earlier sections.
9. Verify the main-branch release and report completed active phases, URLs, limitations, holds and next unblocking action. Where issue replies are approved, report accurately and leave the feedback hub open.

Acceptance: no new broken routes/assets/interactions, clear release evidence and an honest outstanding list. Do not call all feedback resolved or the website production-ready with artwork, research, contrast or launch gates pending.

## Feedback coverage and honest resolution scope

| Audited November 18 comment | Active phase | Still held |
| --- | --- | --- |
| [Hero sizing, CTA, background band, two captions](https://github.com/Reniel-Relearn/Ez-Kyosk-SEO/issues/1#issuecomment-6971479890) | Phase 1 | Enhanced kiosk artwork. |
| [All section titles centered](https://github.com/Reniel-Relearn/Ez-Kyosk-SEO/issues/1#issuecomment-6971616838) | Section phases 3-12; hero composition in Phase 1 | No permission to rewrite approved copy. |
| [Benefit icons/alignment/contrast](https://github.com/Reniel-Relearn/Ez-Kyosk-SEO/issues/1#issuecomment-6971869008) | Phase 3 | No new icon generation or reference statistics. |
| [Platform heading and five image revisions](https://github.com/Reniel-Relearn/Ez-Kyosk-SEO/issues/1#issuecomment-6971439111) | Phase 4 heading/alignment | H1 imagery; H3 interface references; H4 overlap. |
| [Centered navigation and kiosk reference](https://github.com/Reniel-Relearn/Ez-Kyosk-SEO/issues/1#issuecomment-6971912783) | Phase 2 navigation | H1 kiosk enhancement. |
| [Product realism, centering and logos](https://github.com/Reniel-Relearn/Ez-Kyosk-SEO/issues/1#issuecomment-6971999827) | Phase 5 layout | H1 images; H3 references; H4 overlap. |
| [Payments terminal-only, centering, logos](https://github.com/Reniel-Relearn/Ez-Kyosk-SEO/issues/1#issuecomment-6972058518) | Phase 6 HTML layout | H1 terminal/phone changes and branding cleanup. |
| [Home sections and Articles destination](https://github.com/Reniel-Relearn/Ez-Kyosk-SEO/issues/1#issuecomment-6972318029) | Phase 2 migration and Phase 12 wireframe | No faster-crawling guarantee or actual articles. |
| [AEO search-question research](https://github.com/Reniel-Relearn/Ez-Kyosk-SEO/issues/1#issuecomment-6972340308) | Existing factual/technical checks only | H2 research and content expansion. |

Meeting-note actions are covered by Phase 1 composition/background, Phase 2 navigation, Phase 3 centered contrast, Phase 8 six-card horizontal/vertical flow, and the held research/asset queues. Latest owner answers supersede separate Solutions/subdomain proposals, full-screen controls and unrelated brand/numeric statements. Offers uses the revised PDF and later commercial approval, not the automated meeting summary.

## On-hold phases

These do not block Phase 1 and are not implicitly released after Phase 13.

### H1: Image generation and raster-image revision

- Enhanced kiosk and eventual consistent hardware across the website.
- Existing platform-photo revisions: kiosk, embedded logos, inventory spreadsheet, analytics dashboard and cashier-device orientation.
- Home product-panel realism after references arrive.
- Terminal-only cutout and phone content/logo changes. Retain AltPayNet/Visa/Mastercard; remove GCash/Maya marks and phone Ez Kyosk branding; keep approved kiosk/website identity.
- Four-card platform new-photo concepts and inactive standalone-Product image ideas.
- When unblocked: brief one asset exactly, obtain approval, generate/edit, QA geometry/UI/arithmetic/branding/transparency, show it, obtain integration approval, version/optimize, integrate locally and use normal review/deployment gates. Preserve originals; label illustrations accurately.

### H2: Research

- Search demand, keywords, AEO/GEO questions, competitor/topic research and actual article content.
- No invented rankings/statistics/keyword counts/client claims or citation guarantees.
- When unblocked: approve evidence sources/research plan before claims or drafts. Active engineering checks do not wait for marketing research.

### H3: Screenshot references

- Owner-supplied inventory spreadsheet, analytics dashboard and realistic interface references.
- Remind the owner before the first dependent asset brief; do not request confidential data or invent exact software UI.
- QA screenshots are allowed. New source/reference collection remains held.

### H4: Overlap and four-card platform proposal

- Proposed customizable kiosk; POS and payment solutions; merchant dashboards; Treats loyalty.
- Photo transfer into Products and new four-card photos/placeholders are deferred together.
- Do not implement half this restructuring during a centering/image fix. Reopen its brief only when the owner lifts the hold.

## Completion report required after each phase

1. Phase/title and exact approved scope completed.
2. Local acceptance and publication approval received.
3. Files/assets/tests/docs changed; unrelated work preserved.
4. Checks, actual failures, limitations and held sub-actions.
5. Commit, successful checks/Pages workflow and verified live link.
6. Issue replies posted if approved; remaining comments/sub-actions pending.
7. Next phase's complete numbered actions, files, acceptance checks and boundaries.
8. A clear stop for the owner's next approval.

## Current next action

Owner reviews **Phase 1: Hero Section** above. After approval, implement that phase locally only and return for review. Do not execute Phase 2, generate images or deploy from the instruction to create this plan.
