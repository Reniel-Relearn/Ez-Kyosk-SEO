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
