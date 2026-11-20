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
