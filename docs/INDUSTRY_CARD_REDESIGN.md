# Designed to adapt: approved industry-card direction

Publication authorization, 16 November 2026: owner requested pushing/deploying this completed section to existing main-branch Pages design review. This supersedes earlier local-only/no-deployment restrictions for this release. Only approved responsive artwork ships; rejected/superseded previews and source references remain local. [Release scope and checks](DEPLOYMENT_GUIDE.md#designed-to-adapt-publication-16-november-2026). Confirm CI/live result after push; no automatic next-section work.

CURRENT: owner approved actual balanced Services v6 and integration. All FOUR Home industry photographs filled LOCALLY: Hospitality v2 / Retail v1 / Wellness v1 / Services v6. No reserved images; layout/copy/badges/links retained. [Current integration/checks](INDUSTRY_SERVICES_ASSET.md). No generation/deployment. Next: [customer-journey brainstorm](JOURNEY_REDESIGN_PLAN.md). Earlier progress statuses below are historical.

Latest fourth-photo preview: [balanced Services v6](INDUSTRY_SERVICES_ASSET.md), owner-approved reduction of excessive lean/turn with rear/right-edge grip retained. Saved/not imported, actual review pending. Three-photo layout/copy unchanged; after acceptance integrate fourth only and verify all four, no automatic deployment.

Latest fourth-photo review candidate: [Services v5](INDUSTRY_SERVICES_ASSET.md), client-facing angle and rear/right-edge left grip per owner. Generated/saved, not imported. Current three-photo layout/copy unchanged, actual review required before integration; no deployment.

Latest fourth-image revision: owner requested portrait handheld tablet plus geometry/angle correction. [Services v4 preview](INDUSTRY_SERVICES_ASSET.md) is current review candidate, not imported. Current three-card photography/layout/copy unchanged. After actual acceptance, integrate fourth only and verify all four; no automatic deployment.

Latest fourth-image revision: owner requested HANDHELD tablet. [Services v3 preview](INDUSTRY_SERVICES_ASSET.md) replaces stand-mounted preview as current review candidate, not integrated. First three cards/layout/copy unchanged; actual review precedes fourth integration, no deployment.

Latest image task: owner approved revised Services & B2B touchscreen/sample dashboard; [corrected v2 preview](INDUSTRY_SERVICES_ASSET.md) generated/saved, not imported. Actual-image review precedes fourth integration. Current three-photo layout/copy unchanged, no deployment. Earlier laptop-only proposal superseded by tablet revision.

CURRENT: owner approved actual Wellness v1, now integrated as THIRD photo alongside Hospitality v2 and logo-bearing Retail v1. Shared layout/copy unchanged; ONLY Services & B2B photo reserved. [Integration/checks](INDUSTRY_WELLNESS_ASSET.md), [fourth-image proposed story](INDUSTRY_SERVICES_PLAN.md). No new generation/deployment; earlier statuses below are historical.

Latest image task: approved Wellness & beauty scene generated as [v1 preview](INDUSTRY_WELLNESS_ASSET.md), not imported. Await actual-image review; rear-panel identity deviation flagged. Current two-image Home layout unchanged; fourth photo not generated.

CURRENT: owner selected logo-bearing Retail v1; integrated locally as SECOND photograph, alongside approved Hospitality v2. Last TWO image areas remain reserved. Shared layout/copy/icons/destinations unchanged; no new generation/deployment. [Selection and verification](INDUSTRY_RETAIL_ASSET.md); [next Wellness & beauty proposal](INDUSTRY_WELLNESS_PLAN.md). Earlier statuses below are historical.

Latest image task: owner approved Retail scene; [corrected v2 preview](INDUSTRY_RETAIL_ASSET.md) generated/saved, not integrated. Actual second-image review required before replacing its reserved area. First Hospitality integration and shared layout unchanged; third/fourth photos not generated. Earlier integration results below are historical.

Date: 16 November 2026. Owner approved the proposed layout and first Hospitality & food image brief, using the supplied four-industry-card screenshot for layout reference ONLY. First photographic preview is generated; website layout is not yet edited. Actual-image acceptance precedes integration.

LATEST integration status: owner approved actual Hospitality v2. Shared four-card Home layout is implemented LOCALLY and first image integrated with unchanged bytes. Numbers/large geometric placeholders removed; new original vector category badges, visible descriptions and Explore links. Other THREE photos remain visibly reserved as Image to follow, not fabricated final images. Heading/copy/order/destinations retained. No generation/push/deployment in this integration pass. Next owner review: [Retail & shops exact image proposal](INDUSTRY_RETAIL_PLAN.md). Earlier preview milestones below are historical.

Latest first-image revision: [Hospitality v2](INDUSTRY_HOSPITALITY_REVISION_V2.md) refines adult arm/sleeve proportions and places the kiosk deliberately beside the counter, with a clear walkway. Await actual-v2 review. For future adult female characters, retain realistic slender/softly defined arm proportions and avoid excessive sleeve bulk according to owner preference; do not automatically alter already approved artwork.

## Shared layout for ALL FOUR cards

- Preserve Designed to adapt eyebrow, Different operations. One clearer experience. heading, introduction and order: Hospitality & food; Retail & shops; Wellness & beauty; Services & B2B.
- Remove visible numbers 01-04 and existing large geometric placeholders.
- Full-width 4:3 landscape photo at top, rounded upper corners. Small rounded category icon badge overlaps image/content boundary. Badge is outside the generated photograph and decorative.
- Industry heading, current visible description, and Explore arrow link. No plus/minus or accordion. Preserve current Solutions fragment destinations and one accessible link per card; no nested button/link controls.
- Consistent image frames, padding, icons and heading style; same-row equal heights and aligned heading/description starts/Explore baselines. Natural readable text, not artificial equal word counts, fixed clipped heights or unsupported filler.
- Four desktop columns, two tablet, one mobile. Neutral light/dark card surfaces; blue icons/links, restrained cyan focus/accent; natural photographic colors and stable border/shadow feedback.
- Original matching blue line icons: utensils, storefront, flower and briefcase. Check existing vector assets first; do not generate raster icons to imitate an established vector family.
- Keep existing approved descriptions initially. Do not copy reference claims about appointments, credit clients, invoicing or other unconfirmed capabilities.

## Card-by-card production order

1. Hospitality & food: approved environment-first cafe brief; [first image and prompt](INDUSTRY_HOSPITALITY_ASSET.md). Actual-image review pending.
2. Retail & shops: separate proposed retail environment; detailed subject/activity/device brief must be presented before generation. Do not imply unsupported retail workflows from the screenshot.
3. Wellness & beauty: separate reception/service environment; detailed brief requires approval; no invented appointment/scheduling capability.
4. Services & B2B: separate service/business environment; detailed brief requires approval; no unconfirmed invoicing/project-management software.

Generate and inspect one photograph at a time, receive actual-image acceptance, then optimize/integrate the agreed scope. Implement and review the shared layout pilot with the first accepted photograph before progressing to the second image. Existing placeholder imagery on remaining cards is transitional, not final finished photography.

## Scope and verification

Home section only initially. Proposed shared Solutions reuse is not automatically authorized by this Home layout approval. Preserve hero, platform cards, product explorer, payments, journey, navigation and all original branding. No generation of other cards or remote publication in the first preview pass.

After layout integration: production build/static checks, phone/tablet/desktop and light/dark browser review; full photo ratio/crop checks, aligned rows/headings/CTA, link/keyboard/focus behavior, no horizontal overflow and accessibility. Preview-only checks do not substitute for these future runtime checks.

## Completed local integration verification

Production build and static checks passed with BASE_PATH=/Ez-Kyosk-SEO. New scripts/qa-industry-cards.mjs passed 24 layout/theme/density combinations (96 card checks), six section accessibility scans, all four destinations with JavaScript disabled, pointer and keyboard navigation/focus. Ten standard widths include 720/721 and 1180/1181 breakpoint edges; high-density phone/desktop variants also checked. Assertions cover same-row card/image/heading/description/Explore alignment, full 4:3 framing, overlapping badges without text collisions, exact descriptions/order/destinations, no nested interactive controls, no horizontal overflow and no reported browser/HTTP errors.

Full-site regression passed 48 route/viewport checks and 32 light/dark accessibility scans with no reported browser errors/failed requests; no actual inquiry sent. Desktop light and phone dark screenshots visually reviewed. Hospitality source/built WebP hashes match exactly, first preview v1 not imported; Solutions and platform artwork unchanged. Reports/screenshots remain ignored under artifacts/industry-hospitality-integrated-* and artifacts/qa-report.json. No push or deployment.

Initial accessibility run caught label-content-name-mismatch on a custom aria-labelledby that omitted description text from the whole-card link's accessible name. Removed the unnecessary override; native link content now supplies its name. Rebuilt and reran both final suites above successfully; the initial failed run is not counted as a pass.
