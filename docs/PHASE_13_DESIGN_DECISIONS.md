# Phase 13 design decisions awaiting review

20 November 2026. These are exact proposals, not applied website changes. The patch plan requires owner selection of the section map and explicit review of CTA wording and page corrections. A general request to execute the plan does not resolve the specific choices below. Patch A and B can be reviewed locally independently.

## C. Proposed complete Home surface map

Keep all section content, assets, dimensions and spacing unchanged. Apply only to Home; preserve the header's current alpha and no-blur treatment. Proposed ending choice: retain the dark final CTA as a deliberate exception rather than silently recolor its inverse controls.

| Section in current order | Light mode | Dark mode |
| --- | --- | --- |
| Hero | Existing blue-to-page gradient | Existing blue-to-page gradient |
| A better way to take orders | White-smoke `#F5F5F5` | Surface `#111827` |
| One Connected Platform | White `#FFFFFF` | Page `#080D16` |
| Products | White-smoke `#F5F5F5` | Surface `#111827` |
| Payments | White `#FFFFFF` | Page `#080D16` |
| How Ez Kyosk works | White-smoke `#F5F5F5` | Surface `#111827` |
| Industries / Designed to adapt | White `#FFFFFF` | Page `#080D16` |
| FAQs | White-smoke `#F5F5F5` | Surface `#111827` |
| About Us | White `#FFFFFF` | Page `#080D16` |
| Final CTA | Existing dark treatment, deliberate exception | Existing dark treatment |
| Footer | Existing shared treatment | Existing shared treatment |

Implementation after selection: scope a Home-only surface stylesheet; use theme text/muted tokens for Products and How It Works instead of inverse-white rules; retain white card surfaces in light mode and raised theme surfaces in dark mode, with existing border tokens for separation. Do not recolor embedded images. Verify rest/hover/active text and icons, contrast, card separation, theme persistence and no-JavaScript. Recheck all section-framing tests without changing their thresholds. Header contrast remains E, not a hidden part of C.

Decision needed: approve this exact map and the final CTA exception, or identify changed rows.

## D. Proposed CTA role and wording map

The six-route audit inventory was read before preparing this map. Destinations and the no-send preview form remain unchanged. A request for a demo is not an instant working demo; the external kiosk is a different action. Decorative arrows remain hidden from accessible names. Prices, inclusions, Hero text and future YourAI qualifications remain untouched.

| Location | Existing label | Proposed label | Role / alignment |
| --- | --- | --- | --- |
| Shared header and mobile menu | Request a Demo | Unchanged | Primary inquiry; current positions |
| Home Hero | Request a Demo / Explore Ez Kyosk | Both unchanged | Protected Hero; current layout |
| Five Product panels | Discuss this product area | Discuss Self-Ordering / Discuss POS & Checkout / Discuss Inventory / Discuss Reports & Analytics / Discuss Customer Tools, respectively | Contextual inquiry; centered within panel |
| Terminal payment | Discuss terminal requirements | Unchanged | Contextual inquiry; left in copy column |
| Online payment | Discuss online payments | Unchanged, preserve desktop one-line fit | Contextual inquiry; left in copy column |
| FAQ | Ask a different question | Unchanged | Contextual inquiry; approved flush-left position |
| About Us | Discuss your requirements | Unchanged | Contextual inquiry; current centered block |
| Home final CTA | Request a Demo / Explore Ez Kyosk | Both unchanged | Primary inquiry plus secondary external exploration; centered |
| Offers demo card | Get My Free Demo | Request a Free Demo | Primary inquiry; bottom-aligned within card |
| Offers Starter | Get a Starter Quote | Request a Starter Quote | Primary quote; bottom-aligned within card |
| Offers Complete | Request a Complete Package Quote | Request a Complete Quote | Primary quote; bottom-aligned within card |
| Offers future upgrade | Ask about YourAI | Unchanged | Contextual inquiry; preserve future-product caveat |
| Offers closing | Try Ez Kyosk for Free | Request a Free Demo | Primary inquiry; centered |
| Articles wireframe | Back to Home / Discuss your requirements | Both unchanged | Navigation plus contextual inquiry; current positions |
| Contact preview/live submit | Preview inquiry / Send demo request | Both unchanged | Native form action, not navigation |
| Contact privacy link | privacy notice | Unchanged | Inline legal navigation, not a promotional button |
| Contact external exploration | Explore the kiosk experience | Explore Ez Kyosk | Secondary external exploration; left in aside |
| Shared footer | Explore the kiosk experience | Explore Ez Kyosk | Secondary external exploration; existing footer grouping |
| 404 | Return home / Explore the product / Request a Demo | Return home / View Products / Request a Demo | Navigation / section navigation / inquiry; retain existing destination behavior |

Visual system after approval: use existing blue/on-blue filled controls for primary demo/quote requests, existing outlined controls for secondary exploration, and current blue text-link styling for contextual inquiries. Retain the dark final CTA's inverse button variants until C's ending choice is approved. Use existing hover/pressed tokens, never brightness alone, and preserve native focus, minimum targets, readable contrast, disabled/sending states and responsive wrapping. Do not center FAQ text, convert legal links to buttons, add tracking, change destinations or enable the form service.

Verification after implementation: compare rendered accessible labels and exact hrefs across all six routes; both themes and mobile/tablet/desktop; primary/secondary rest/hover/focus/pressed/disabled states; form preview plus mocked success/failure without real inquiries. Validate that any retained long label wraps safely on phones.

Decision needed: approve the exact old-to-new label map and role treatment before copy/style changes. The Offers wording currently comes from an approved earlier phase, so this proposal does not silently override it.

## F. Verified retained-page mismatches and exact corrections

Read-only browser evidence: scripts/qa-page-alignment-audit.mjs; 24 route/width/theme samples at 390, 768, 1440 and 1920px; screenshots and measured results in ignored artifacts/phase13/page-alignment. No horizontal overflow was observed. Both pages already share the correct seven-destination navigation and supplied logo; do not rebuild or replace those components.

At 1440px viewport, measured in light mode:

| Element | Existing measured state | Proposed correction |
| --- | --- | --- |
| Home header and Hero | 120px equal content margins, 1200px content boundary | Reference only; do not alter Home |
| Contact and Privacy headers | 36px equal content margins | Scope the same centered 1200px content boundary to these two routes |
| Contact Hero | 36px content margins; 115.2px top/bottom padding; minimum height 680px; h1 82px | Equal Home-aligned content margins; padding clamp(32px,4vw,56px); remove legacy minimum height; h1 clamp(34px,4vw,52px) with 1.12 line height |
| Contact form section | 36px content margins; 129.6px top/bottom padding | Same 1200px content boundary and compact 32-56px section spacing; retain accessible field sizing and two-column desktop / stacked mobile structure |
| Contact information badges | Visible 01, 02, 03 | Three decorative inline outline icons for workflow, payment/operations and quotation; retain all three explanatory paragraphs in order; no raster generation |
| Privacy Hero | 36px margins; 115.2px top/bottom padding; minimum height 460px; h1 82px | Home-aligned content margins; compact 32-56px padding and same title scale; no fixed/minimum hero height |
| Privacy reading block | 980px outer width anchored at x=0; content edges 36px and 496px from viewport edges | Full-width background with centered readable column: width min(100% - 40px, 960px), margin-inline:auto, no asymmetric inner gutter; retain left-aligned paragraphs and natural line endings |
| Both page colors | Existing shared blue/cyan theme tokens | Retain tokens and use page/surface plus text/muted tokens consistently; Contact aside may remain a deliberate dark panel with inverse text/links |

Keep existing visible headings, paragraphs, page titles, descriptions, field labels, required/optional flags, input lengths, honeypot, validation, status announcements, endpoint conditions and success/failure handling. Do not stamp a new legal revision date merely for a CSS edit. Keep current factual privacy caveats; do not add legal identity, provider retention promises or production data collection. The header's 50% transparency and contrast issue remain E's separate decision.

Implementation after approval: import a route-scoped retained-pages stylesheet from Contact and Privacy; mark only those page bodies or their existing route wrappers for scoping; adjust presentation without altering other routes. Add three decorative SVG icons inline or via the existing icon approach, with aria-hidden and no new focusable controls. Preserve branding assets and the shared navigation script. The form privacy link stays inline.

Verification after implementation: assert equal header/content margins at desktop widths, centered reading column, compact spacing, expected title sizing, no horizontal overflow and no clipped text at 320/390/768/1024/1440/1920px in both themes. Compare existing text/metadata/form attributes before and after. Run keyboard/skip/menu and no-JavaScript checks; no-send preview must issue zero POST requests. Use mocked successful and failed endpoint responses only, never real inquiry submissions. Verify the sidebar and all controls with accessibility checks and show local screenshots for review.

Decision needed: approve these exact presentation corrections before implementation. Any CTA wording changes follow D's separate map; no privacy-policy rewrite is proposed.
