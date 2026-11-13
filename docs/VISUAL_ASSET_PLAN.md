# Website visual asset plan

Updated: 13 November 2026

Actions 3 and 4: visual assignments and shared art direction. The owner approved creation of the first benefit icon, which is now integrated. The other two icons, raster imagery, and four-step journey remain pending. The Word-arrangement action is removed at the owner's request; retain the current homepage section sequence.

## Shared direction

- Use [COLOR_PALETTE.md](COLOR_PALETTE.md) for website surfaces, controls, and icon colors. Blue is primary; cyan appears in small details. Preserve natural photography, official logos, payment marks, and accurate product references.
- Use premium, ultra-realistic photography/product imagery for appropriate cards. Use consistent soft daylight, realistic materials, restrained backgrounds, and a coherent kiosk/device reference. Avoid mismatched device designs or exaggerated speed claims.
- Keep lighting and perspective consistent within each card group. Small overview images use simple compositions, detailed product panels show the relevant capability, and industry scenes show broader environments.
- Keep card titles and explanatory copy as HTML. Avoid generated labels, unreadable dashboard text, fabricated metrics, invented provider marks, or fake screenshots presented as the actual system.
- Use actual interface references when showing a specific product function. Missing references require review before depicting detailed interfaces. Configurable features must remain consistent with the existing product scope.
- Use one line-icon family for the benefit cards: 64px square artwork, approximately 2.5px strokes, rounded caps and joins, simple silhouettes, transparent background. Icons share optical size and stroke weight.
- Define mobile crops before integration. Keep essential subjects within a central safe area; do not crop away the interaction or rely on tiny text.
- Save approved assets with descriptive versioned filenames in `public/assets/images`. Use optimized responsive raster formats for photographs and product imagery. Simple line icons use SVG; the first icon is the reference for the remaining benefit icons.

## Asset assignments

| ID | Placement | Visual subject and distinct purpose | Format / crop |
| --- | --- | --- | --- |
| benefit-faster | Home benefit 1 | Kiosk touchscreen and tapping finger: a direct interaction | Line icon, 1:1 |
| benefit-more | Home benefit 2 | Two order paths joining a shared destination: an additional ordering channel | Matching line icon, 1:1 |
| benefit-better | Home benefit 3 | Connected order flow and a checkmark: clearer coordinated operations | Matching line icon, 1:1 |
| platform-ordering | Home platform overview | Kiosk menu/product selection shown as a focused product composition | Realistic device composition, 4:3 |
| platform-checkout | Home platform overview | Staff checkout workstation receiving a confirmed order | Realistic operational composition, 4:3 |
| platform-payments | Home platform overview | Terminal and phone together, explaining the available payment paths at a glance | Realistic product composition, 4:3 |
| platform-inventory | Home platform overview | Products/stock context with an order-status device, connecting availability and progress | Realistic operational composition, 4:3 |
| platform-extensions | Home platform overview | A business workstation with a few configurable tool modules, without fabricated analytics | Realistic workstation composition, 4:3 |
| product-self-ordering | Home product panel and Product deep dive | Actual menu, options, and order review, focused on interface detail | Approved interface/device composition, 4:3 |
| product-checkout | Home product panel and Product deep dive | Checkout and order queue/handoff, based on the relevant system reference | Approved interface/device composition, 4:3 |
| product-inventory | Home product panel and Product deep dive | Item availability and stock visibility, based on the relevant system reference | Approved interface/device composition, 4:3 |
| product-reports | Home product panel and Product deep dive | Reporting tools matched to verified or configurable scope, with no invented performance claims | Approved interface or reviewed concept composition, 4:3 |
| product-customers | Home product panel and Product deep dive | Customer tools matched to verified or configurable scope, without fabricated personal records | Approved interface or reviewed concept composition, 4:3 |
| payment-terminal | Shared Home/Product payment section | Close view of terminal payment in context | Realistic close composition, layout-specific crop |
| payment-online | Shared Home/Product payment section | Phone payment interaction, distinct from the terminal composition | Realistic close composition, layout-specific crop |
| industry-hospitality | Home card and Solutions section | Wider cafe or food-service environment and its ordering touchpoint | Ultra-realistic scene, 3:2 master with alternate crops |
| industry-retail | Home card and Solutions section | Retail products and a suitable ordering touchpoint | Ultra-realistic scene, 3:2 master with alternate crops |
| industry-wellness | Home card and Solutions section | Reception/service selection in a wellness or beauty setting | Ultra-realistic scene, 3:2 master with alternate crops |
| industry-services | Home card and Solutions section | Service counter or business ordering environment | Ultra-realistic scene, 3:2 master with alternate crops |
| journey-browse | Future four-step journey | Customer exploring menu categories; establish the same customer, venue, and kiosk for the sequence | Ultra-realistic scene, 3:2 |
| journey-select | Future four-step journey | Closer product/option selection at the same kiosk | Ultra-realistic scene, 3:2 |
| journey-payment | Future four-step journey | Customer completing the payment interaction in that same setting | Ultra-realistic scene, 3:2 |
| journey-get-order | Future four-step journey | Staff handing the completed order to that customer | Ultra-realistic scene, 3:2 |

These 23 assignments include three icons. They are a production plan, not 23 generated deliverables. The existing hero artwork remains in use. Home/Product share product masters and payment assets; Home/Solutions share industry masters with appropriate crops. Reuse is intentional where the subject and message match.

The Product hero's semantic system map, navigation, FAQ, About principles, Contact information cards, and conversion CTAs do not need decorative photographs merely because they use a card layout. Retain useful diagrams and text where these explain the content clearly.

## Review sequence

1. Completed: present `benefit-faster` in words and receive the owner's approval to create it.
2. First icon integrated for light/dark owner review. Do not extend its style to the remaining benefit icons until reviewed.
3. Later, create one representative realistic image and review the group art direction before producing the remaining imagery.
4. Optimize and integrate approved assets section by section; validate responsive crops, light/dark contrast, and page performance.

## First icon specification and implementation

Name: Faster Ordering Experience.

Meaning: a straightforward touchscreen order interaction. The icon communicates the customer action rather than promising a measured speed improvement.

- Canvas: 64 by 64 units with a transparent background and comfortable clear space.
- Main silhouette: a small upright self-ordering kiosk occupying the left/central portion, with a rounded rectangular screen, a short central stem, and a simple horizontal base.
- Screen contents: two small rounded product tiles, leaving the lower-right screen area clear for the gesture. No letters, numbers, menu prices, brand marks, or miniature dashboard.
- Gesture: an outlined hand enters from the lower-right. One extended index finger touches the lower-right area of the screen; simplify the remaining fingers into one clean hand contour.
- Touch detail: one small cyan arc around the fingertip contact point. This is the only cyan detail.
- Stroke: approximately 2.5 units, with rounded caps and joins throughout. Match the other two icons to this optical weight later.
- Color in light mode: blue `#2563EB` strokes with the touch detail in cyan `#0E7490`.
- Color in dark mode: blue `#60A5FA` strokes with the touch detail in cyan `#22D3EE`.
- Presentation: flat, crisp line artwork. No photo background, 3D bevel, drop shadow, large glow, stopwatch, lightning bolt, payment symbol, or order-completion badge.
- Placement after creation: above the first benefit heading, aligned with the card's text edge, with roughly 20px to 24px between icon and heading. The icon is decorative because the heading and paragraph communicate its meaning.

Implemented asset: `public/assets/images/benefit-faster-v1.svg`. `src/components/FasterOrderingIcon.astro` embeds this trusted local SVG inline so the shared theme tokens control its two stroke colors without a separate image request. The transparent 64px icon is decorative, not focusable, and sits 24px above the first heading. It is original SVG artwork, not an AI-generated raster image. No other planned asset has been created.
