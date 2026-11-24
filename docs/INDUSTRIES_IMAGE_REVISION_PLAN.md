# Industries: four-card image revision plan

Date: 24 November 2026. All four revisions visually approved; owner authorized scoped commit, push and GitHub Pages publication. Preserve section layout, headings, descriptions, badges, links, original assets and 4:3 photographic framing. Earlier planning/local-only entries record their stage history; this release authorization supersedes them.

## Card 1 — Hospitality & food

Status: v3 camera-free hardware revision visually approved and authorized for publication. See [edit prompt and saved assets](INDUSTRY_HOSPITALITY_V3.md).

Edit target: `public/assets/images/industry-hospitality-v2-1280.webp`.

1. Apply the approved Ez Kyosk hardware styling from `assets/EZ Kyosk Cafe Ordering Kiosk.png`, consistent with the current approved hardware family, but obey the newer no-camera rule below. Reference is hardware styling only, not its menu or front-facing pose.
2. **Latest owner requirement: NO camera or top-mounted camera/sensor bar.** Remove the complete accessory and mounts; retain a clean, continuous top enclosure. Do not invent a replacement lens/bar or associated functionality. This overrides all older camera-bearing references and prompts.
3. Use the slim black stand/pedestal and remove its Ez Kyosk icon/wordmark. Do not widen the stand for branding or leave a blank plate/blur patch.
4. Preserve the current screen UI and its screen-header branding, attached payment terminal, existing device angle/position, customer reach, people, cafe, lighting and photographic framing. Pedestal-logo removal is not permission to remove screen branding or provider marks.
5. QA natural top casing, no leftover mounts/lenses, stand geometry/support, menu readability, terminal attachment and finger interaction.

## Card 2 — Retail & shops

Status: v3 unbranded Retail POS visually approved and authorized for publication. See [edit prompt and saved assets](INDUSTRY_RETAIL_V3.md). Original v1 and unused v2 preserved.

Edit target: `public/assets/images/industry-retail-v1-1280.webp`.

Remove only the embedded Ez Kyosk logo/icon/name from the POS hardware. Restore continuous device material and lighting, not a blur patch or replacement brand. Preserve staff-facing orientation, people, accessory handoff, shop, camera angle and framing.

## Card 3 — Wellness & beauty

Status: v2 unbranded Wellness POS visually approved and authorized for publication. See [edit prompt and saved assets](INDUSTRY_WELLNESS_V2.md). Original v1 preserved.

Edit target: `public/assets/images/industry-wellness-v1-1280.webp`.

Remove only the embedded Ez Kyosk logo/icon/name from the POS hardware. Restore its natural surface. Preserve device geometry, consultation scene, people, leaflet, salon, lighting and framing.

## Card 4 — Services & B2B

Status: v7 unbranded four-service revision visually approved and authorized for publication. See [edit prompt and saved assets](INDUSTRY_SERVICES_V7.md). Original v6 and earlier revisions preserved.

Edit target: `public/assets/images/industry-services-v6-1280.webp`.

1. Remove the tablet's Ez Kyosk icon/wordmark and branded header area.
2. Move Services heading and list upward to reclaim the space, maintaining clean screen margins and consistent row spacing.
3. Retain Consultation, Business Support and Additional Services. Owner-approved fourth selectable example: **Custom Setup**, replacing the longer proposed Setup & Onboarding label. This is an illustrative configurable service, not a claim of a new software capability. Keep consistent single-line labels without squeezing text.
4. Fit four readable rows with restrained line icons. Make the existing fingertip correspond naturally to a valid row/control after reflow; preserve the hands rather than introducing unnecessary pose changes.
5. Preserve the portrait tablet's physical geometry, secure grip, viewing angle, people, office and framing.

## Future-reference rule

All future Ez Kyosk image briefs must explicitly say **no camera / no top-mounted sensor bar**, even when using a legacy reference containing one. Canonical rule: [brand/hardware guidelines](BRAND_GUIDELINES.md#current-kiosk-hardware-rule--24-november-2026). Review camera-bearing Hero, YourAI and platform imagery in separate consistency passes; this plan does not silently modify or publish those assets.

## Per-card workflow

Release verification: each local revision passed production build/static verification, 24 responsive/theme/density layouts, 96 card checks, six scoped accessibility scans, no browser/resource errors, no-JavaScript contact links and 72 protected original assets. Deployment success and live asset verification must still be checked before calling this published.

Agree the exact edit prompt → generate a versioned image → inspect geometry/text/branding/hands → optimize without destructive source changes → integrate locally and update accurate alt text → verify responsive/light-dark/layout/link/accessibility behavior → obtain owner visual review. Publication requires separate approval; do not proceed to unrelated assets automatically.

## Next resolution queue after Industries publication

This is a proposal, not implementation or purchase authority. Reviewed against open issues #1/#31 and the November 23 meeting notes; direct later owner decisions override conflicting Gemini summaries. Prior November 18 work is reconciled through the published Phase 1–13 records, not restarted.

1. **Brand and accent palette** (#31 comment 7099163679): inventory shared logo/wordmark, header/footer/favicon/social variants and blue tokens; approve which identity assets change to royal blue. Approve exact orange-light/gold-dark tokens and roles before applying. Preserve payment-provider identity and semantic status colors. Check text/icon/button/focus contrast in both themes; do not perform an unreviewed global replacement.
2. **Benefits contrast** (same comment): audit evidence shows a dark surface, not an accidental white panel, in dark mode. Confirm whether the comment requests a white panel in dark mode or stronger dark separation. Present the exact panel/text/icon palette; implement only after choice, test rest/hover/focus/responsive contrast. Do not invent conversion statistics or reopen approved compact layout unnecessarily.
3. **Hero hardware and camera consistency** (same comment plus newer no-camera instruction): agree whether removing Ez Kyosk includes screen header, pedestal or both, and obtain the exact SUNMI model/approved reference before claiming actual SUNMI hardware. Preserve existing Hero angle/menu/terminal/transparency and remove camera/bar/mounts. Separately inventory camera-bearing YourAI, platform and journey assets; propose one-asset-at-a-time changes, especially for supplied YourAI art. No silent cross-site replacement or invented hardware certification.
4. **Meal imagery, readable UI and motion** (meeting notes): obtain approved actual meal photos and usage rights; choose precise placements (Hero/ordering interfaces) before replacement. Keep generated food labeled as illustrative, not actual products. Audit touch targets, text, selection/quantity feedback and reduced motion. Existing six-step horizontal-to-stacked journey is implemented; do not recreate it. Clarify what “static animation” means before adding motion or changing product behavior.
5. **Scrolled-header readability** (#1): reproduce the existing strict contrast failures over affected backgrounds; propose explicit opaque/stronger scrim options while preserving sticky behavior, logo margins, navigation and keyboard focus. Current owner-approved 50%-alpha/no-blur choice cannot be silently overridden. Test all pages, both themes, mobile menu, section navigation, keyboard and reduced motion. Keep original thresholds, not just sampled axe passes.
6. **H1, page titles and metadata** (meeting notes): distinguish visible H1, browser title and description; inventory current strings, propose factual business-focused replacements and get wording approval. Keep one clear H1 per page, proper heading hierarchy, accurate schema and distinct page intent. Do not enable production indexing or promise rankings/AEO/GEO citations as a wording side effect.
7. **Domain/email and launch** (#31 comment 7099423196): user purchases/confirms domain control, provider and mailbox privately. Existing Pages API reports no custom domain; a cart screenshot is not proof of purchase. Confirm apex/www choice and preserve existing DNS, then approve/add verified Pages DNS and mail MX/SPF/DKIM/DMARC records with rollback and HTTPS checks. Confirm privacy contact, real inquiry delivery, retention/consent and form security separately; test with consented data. Then audit canonicals/sitemap/robots, exclude reserved Articles until real content is ready, and only enable indexing after explicit launch approval. Meeting December 5 target is not authorization to buy hosting or a current price quote. Existing Pages hosting need not be replaced just to use a custom domain.
8. **Held research and content** (#1 comment 6972340308, H2–H4): retain held status for search-demand/AEO questions, article research/writing, owner UI references and four-card platform consolidation. When reopened: agree evidence sources, research business questions, map to FAQs/articles, write sourced factual content, review then publish genuine pages. Wellness posts, language selector, Facebook/Instagram, named client claims and chatbot refinements in Gemini notes require separately verified destinations, permission, service scope and briefs; do not invent them. Ignore unrelated workplace schedule notes. Do not merge quoted monthly software pricing and one-time hardware/setup terms or alter prices based on an abbreviated meeting summary.

After each approved resolution: scoped local implementation → regression/visual review → owner acceptance → separate publication approval → verify live → source-linked issue status reply. Keep #1 and #31 open until all applicable requests are genuinely resolved or explicitly deferred; a new palette request does not reopen previously completed payment/native-product work.
