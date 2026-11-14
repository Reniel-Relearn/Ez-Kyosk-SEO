# Website visual asset plan

Updated: 14 November 2026

Branding override: [BRAND_GUIDELINES.md](BRAND_GUIDELINES.md) is authoritative. Display name is Ez Kyosk. Use only original logo/icon assets, not header screenshots. The hero uses transparent v3 artwork without white logo panels; see [HERO_TRANSPARENCY_FIX.md](HERO_TRANSPARENCY_FIX.md). The first overview card now uses v3 without logo backing plates and with the opposite three-quarter kiosk view, as requested on 14 November. Original source images and superseded samples remain reference material, not active page imports.

Actions 3 and 4: visual assignments and shared art direction. All three benefit icons, all five Home overview cards, and all five Explore the product images are integrated. Later payment/industry imagery, Product deep-dive reuse and the four-step journey remain pending. The Word-arrangement action is removed; retain the current homepage sequence.

## First product-panel image: Self-Ordering

Exact location: Home > Explore the product > Five areas. One adaptable system. > Self-Ordering tab > Every choice, clear from the first tap.

The owner explicitly changed this first-panel brief from an actual screenshot to a new generated generic menu and authorized generation plus integration. The supplied screenshot is a layout reference only: portrait kiosk left, enlarged matching order-review panel right, in one 4:3 image. Our existing kiosk artwork supplies hardware/art direction; the original lockup supplies identity. No reference branding, menu, cart, LIVE badge, or dashboard is copied.

Implemented concept: Coffee PHP 100, Sandwich PHP 150, Cookie PHP 50, one of each, total PHP 300. Blue/white UI with subtle cyan, photorealistic hardware/food, cool-gray background, original-reference logos without white backing plates. This is illustrative proposed UI, not a capture or implementation of the live app or a verified SUNMI model. Alt text identifies it as illustrative. This specific exception does not authorize fabricated screens for other panels.

The first image remains unchanged in the later POS iteration below. Existing text, five desktop tabs, keyboard controls, mobile stacking, overview cards, hero, and page order are unchanged. The Product page remains unchanged; planned reuse there is not performed. Responsive assets: `public/assets/images/product-self-ordering-v1-{480,960,1440}.webp`. Exact prompt, provenance, optimization and first-release verification: [PRODUCT_SELF_ORDERING_ASSET.md](PRODUCT_SELF_ORDERING_ASSET.md).

## Second product-panel image: POS & Checkout

Home > Explore the product > Five areas. One adaptable system. > POS & Checkout > Move confirmed orders into checkout.

Owner requested proceeding with the next card after the generic Self-Ordering concept. The second concept uses a staff-side POS workstation and small receipt printer on the left, an enlarged checkout detail on the right, and the same Coffee PHP 100 / Sandwich PHP 150 / Cookie PHP 50 order totaling PHP 300. The queue shows demo stages Checkout, Preparing and Ready. No live orders, payment success, real receipts or provider marks are claimed. Original-reference logo has no white backing plate. The first image/copy and three remaining placeholders are retained.

Responsive assets: `public/assets/images/product-pos-checkout-v1-{480,960,1440}.webp`. Generation provenance, exact prompt, verification and the detailed next Inventory proposal: [PRODUCT_POS_CHECKOUT_ASSET.md](PRODUCT_POS_CHECKOUT_ASSET.md). Both completed product visuals are illustrative concepts, not verified live screenshots or changes to the actual software.

## Third product-panel image: Inventory

Home > Explore the product > Five areas. One adaptable system. > Inventory > Keep menu availability closer to reality.

Owner authorized the proposed third image: compact charcoal landscape tablet and two neutral stock containers on the left, enlarged **Item availability** panel on the right. Matching sample rows on both screens: Coffee / 20 / Available; Sandwich / 12 / Available; Cookie / 0 / Unavailable. Same blue/white/cyan UI and neutral studio family, original-reference logo without a white backing plate. This is illustrative sample data, not live stock or proof of a synchronization state. Only the third placeholder is replaced; the first two artworks, existing text/tabs, other sections and Product page are retained. Responsive assets: `public/assets/images/product-inventory-v1-{480,960,1440}.webp`. See [PRODUCT_INVENTORY_ASSET.md](PRODUCT_INVENTORY_ASSET.md) for prompt, provenance, verification and exact next-card details.

## Fourth product-panel image: Reports & Analytics

Home > Explore the product > Five areas. One adaptable system. > Reports & Analytics > Shape reporting around the questions you ask.

Owner authorized the detailed fourth-image proposal. Slim charcoal/silver laptop left with item-quantity bars Coffee 10 / Sandwich 6 / Cookie 4; enlarged Sales summary panel right with quantities and sales PHP 1,000 / 900 / 200, totaling 20 items and PHP 2,100. Both interfaces visibly say **Sample data**. Quantities and sales agree with generic unit prices 100 / 150 / 50. This is illustrative reporting, not real merchant revenue or growth evidence. Original-reference logo has no white backing plate; same 4:3 blue/white/cyan studio family. Only the fourth placeholder is replaced; first three artworks, configurable-scope copy, tabs, Customers placeholder, other sections and Product page are retained. Assets: `public/assets/images/product-reports-v1-{480,960,1440}.webp`. Exact prompt, provenance, checks and next proposal: [PRODUCT_REPORTS_ASSET.md](PRODUCT_REPORTS_ASSET.md).

## Fifth product-panel image: Customers

Home > Explore the product > Five areas. One adaptable system. > Customers > Add customer tools when they serve the experience.

Owner authorized this final product image. Charcoal portrait phone left: original-reference logo directly on dark glass without a backing plate, Customers heading, outline avatar, Guest 01 and Sample profile. Enlarged white Customer tools panel right has Configurable options subtitle and Profile / Loyalty / Promotions rows, each marked Configurable. The phone repeats the same options. No real personal information, points, balances, history, discounts, payment data or engagement claims. This is an illustrative optional-tools concept, not verified live UI or an activated membership. Existing conditional wording, first four artworks, tabs/mobile stacking, other sections and Product page are unchanged. All five Home product panels now have images. Assets: `public/assets/images/product-customers-v1-{480,960,1440}.webp`. Exact prompt, provenance, tests and next-card brief: [PRODUCT_CUSTOMERS_ASSET.md](PRODUCT_CUSTOMERS_ASSET.md).

Next card, not generated: **Payments with AltPayNet > Flexible ways to complete an order. > Terminal integration**. Proposed landscape close composition: kiosk upper housing/review screen left/back, payment terminal prominent right/front, cropped hand presenting a plain unbranded contactless card. Matching generic Coffee PHP 100 / Sandwich PHP 150 / Cookie PHP 50, total PHP 300; terminal PHP 300 and Tap card, not Paid/Approved. Original Ez Kyosk logo without backing plate; neutral terminal, no invented provider/bank logos or card details. No phone/QR (reserved for second payment card). Same cool-gray studio, soft daylight and blue/white/cyan family. Preserve heading/body/link; replace only first payment artwork after authorization. This component is shared by Home and Product, so a future approved replacement would appear on both pages. Every completion report must give exact next-card details. Other payment, industry and journey imagery remains pending.

## Image-led platform card layout: all five cards

Owner-approved direction for all five Home > One connected platform cards: remove the visible numbers, make the image edge-to-edge across the upper card, show one heading below it, and initially hide the existing short description behind a plus control. Expanding shows the description in the same card; the control becomes a minus for collapse.

Implementation is complete for **all five overview cards**. Self-Ordering Experience uses the corrected v3 kiosk image; POS and checkout shows a workstation/printer; Payments with AltPayNet pairs a terminal and smartphone; Inventory and order tracking shows organized stock, a separate order package, and a branded idle tablet. Configurable extensions shows a slim laptop and three conceptual report/customer/settings tiles. All five have a full-width 4:3 upper image, no visible number, one heading below, and a native HTML details/summary control with a 44px target. Descriptions remain unchanged in initial HTML and work without JavaScript. The hero, other sections, and page order are unchanged.

`src/components/PlatformImageCard.astro` provides the shared structure. Each card was separately authorized. The newest asset, exact prompt, and accuracy boundary are recorded in [PLATFORM_CONFIGURABLE_EXTENSIONS_ASSET.md](PLATFORM_CONFIGURABLE_EXTENSIONS_ASSET.md). The tiles are a conceptual metaphor, not supplied hardware or a promise that extensions are included by default. No detailed software interface is invented. Completion of this group does not authorize other section imagery automatically.

## Shared direction

- Use [COLOR_PALETTE.md](COLOR_PALETTE.md) for website surfaces, controls, and icon colors. Blue is primary; cyan appears in small details. Preserve natural photography, official logos, payment marks, and accurate product references.
- Use premium, ultra-realistic photography/product imagery for appropriate cards. Use consistent soft daylight, realistic materials, restrained backgrounds, and a coherent kiosk/device reference. Avoid mismatched device designs or exaggerated speed claims.
- Keep lighting and perspective consistent within each card group. Small overview images use simple compositions, detailed product panels show the relevant capability, and industry scenes show broader environments.
- Keep card titles and explanatory copy as HTML. Avoid generated labels, unreadable dashboard text, fabricated metrics, invented provider marks, or fake screenshots presented as the actual system.
- Use actual interface references when presenting actual product UI. Missing references require review before depicting detailed interfaces. The five separately owner-authorized Home product concepts are not permission to present generated UI as live screenshots or automatically generate other screens. Configurable features must remain consistent with the existing product scope.
- Use one line-icon family for the benefit cards: 64px square artwork, approximately 2.5px strokes, rounded caps and joins, simple silhouettes, transparent background. Icons share optical size and stroke weight.
- Define mobile crops before integration. Keep essential subjects within a central safe area; do not crop away the interaction or rely on tiny text.
- Save approved assets with descriptive versioned filenames in `public/assets/images`. Use optimized responsive raster formats for photographs and product imagery. The completed benefit icon family uses SVG, with the first icon as its style reference.

## Asset assignments

| ID | Placement | Visual subject and distinct purpose | Format / crop |
| --- | --- | --- | --- |
| benefit-faster | Home benefit 1 | Kiosk touchscreen and tapping finger: a direct interaction | Line icon, 1:1 |
| benefit-more | Home benefit 2: More Order Capacity | Two order slips and paths joining a shared queue: an additional ordering channel | Matching line icon, 1:1 |
| benefit-better | Home benefit 3: Better Service Flow | Connected stages ending in a checkmark: clearer coordinated operations | Matching line icon, 1:1 |
| platform-ordering | Home platform overview | Kiosk menu/product selection shown as a focused product composition | Realistic device composition, 4:3 |
| platform-checkout | Home platform overview | Staff checkout workstation receiving a confirmed order | Realistic operational composition, 4:3 |
| platform-payments | Home platform overview | Terminal and phone together, explaining the available payment paths at a glance | Realistic product composition, 4:3 |
| platform-inventory | Home platform overview | Products/stock context with an order-status device, connecting availability and progress | Realistic operational composition, 4:3 |
| platform-extensions | Home platform overview | Slim laptop and three conceptual report/customer/settings tiles, without fabricated analytics or supplied-module claims | Realistic workstation composition, 4:3 |
| product-self-ordering | Home product panel implemented; Product deep-dive reuse pending | Owner-approved original generic portrait menu and matching cart, not a live screenshot | Illustrative device/UI composition, 4:3 |
| product-checkout | Home product panel implemented; Product deep-dive reuse pending | Original generic staff-side queue/checkout concept with the same sample order, not a live screenshot | Illustrative device/UI composition, 4:3 |
| product-inventory | Home product panel implemented; Product deep-dive reuse pending | Original illustrative stock/menu availability concept, matching sample rows on tablet and detail panel | Illustrative device/UI composition, 4:3 |
| product-reports | Home product panel implemented; Product deep-dive reuse pending | Original item-sales reporting concept with explicit Sample data labels and matching chart/table figures | Illustrative device/UI composition, 4:3 |
| product-customers | Home product panel implemented; Product deep-dive reuse pending | Original sample-profile phone and configurable Profile/Loyalty/Promotions detail, no real personal records | Illustrative device/UI composition, 4:3 |
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
2. Completed: owner authorized More Order Capacity and Better Service Flow. All three matching icons are integrated for light/dark review.
3. The first sample/layout were reviewed iteratively; cards 2-5 were then separately authorized and integrated. This five-card overview group is complete for owner review. Continue one card at a time in later groups after direction.
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

Implemented asset: `public/assets/images/benefit-faster-v1.svg`. `src/components/FasterOrderingIcon.astro` embeds this trusted local SVG inline so the shared theme tokens control its two stroke colors without a separate image request. The transparent 64px icon is decorative, not focusable, and sits 24px above the first heading. It is original SVG artwork, not an AI-generated raster image.

## Second icon: More Order Capacity

Owner authorization: proceed with the next icon, named "More Order Capacity". The second card heading now uses that wording; its existing explanatory paragraph is unchanged.

- Meaning: another ordering channel feeding a shared queue, not a measured throughput or revenue guarantee.
- Composition: two rounded order slips on the left, each with two short abstract content strokes. Their paths merge centrally and a single right-facing arrow leads into a shared order/queue card on the right.
- Accent: one small cyan junction at the merge point. No extra colors, numbers, labels, payment marks, analytics, or completion checkmark.
- Family: the same transparent 64 by 64 canvas, 2.5-unit rounded blue strokes, and theme tokens as Faster Ordering Experience. Left-aligned above the second heading with the same 24px gap; decorative and non-focusable.
- Asset: `public/assets/images/benefit-more-capacity-v1.svg`, embedded inline by `src/components/MoreOrderCapacityIcon.astro`. No raster generation or additional runtime JavaScript.

## Third icon: Better Service Flow

Owner authorization: proceed with "Better Service Flow". The third card heading now uses that wording; its explanatory paragraph is unchanged.

- Meaning: connected service stages progressing toward order completion, not a guaranteed service time or a literal count of workflow steps.
- Composition: two rounded stage nodes joined by an orderly stepped path, ending in a circular completion node. One cyan checkmark is the only accent. Unlike the capacity icon, this is one sequential path with no branching or merging.
- Family: transparent 64 by 64 canvas, 2.5-unit rounded blue strokes, shared light/dark blue and cyan tokens, and 24px spacing above the heading. Decorative, non-focusable, with all meaningful text retained as HTML.
- Asset: `public/assets/images/benefit-better-flow-v1.svg`, embedded inline by `src/components/BetterServiceFlowIcon.astro`. No raster generation or additional runtime JavaScript.

All three benefit icons and all five realistic overview cards are implemented. Imagery for other sections and the four-step journey are pending.

## First realistic sample: platform-ordering

Exact location: Home > One connected platform > From the first tap to the next task. > first card, Self-Ordering Experience. Its visible number is removed in the layout pilot described above.

Generated a restrained 4:3 product composition using the existing owner-supplied kiosk artwork as its physical-device and illustrative-menu reference. The touchscreen and upper pedestal remain visible against a neutral background with a subtle blue tint. This is illustrative product imagery, not a verified live interface screenshot. The first image iteration replaced only this placeholder; a separately authorized second-card iteration is recorded below. Existing descriptions remain unchanged.

Responsive WebP assets: `public/assets/images/platform-self-ordering-v3-{320,640,1280}.webp`, approximately 8KB, 22KB, and 56KB. V3 removes both white logo plates and turns the kiosk to show its left silver edge, with readable non-mirrored text. The studio background remains opaque. Integration preserves the five-card grid, uses base-path-safe responsive URLs, lazy loading, explicit dimensions, and alt text. Full prompt, provenance, optimization settings, and verification: [PLATFORM_SELF_ORDERING_ASSET.md](PLATFORM_SELF_ORDERING_ASSET.md).

Continue iterative owner review. Cards 2-5 were separately authorized; creation of imagery in other groups is not implied.

Completed second iteration: POS and checkout has a restrained 4:3 staff-side workstation and receipt printer, matching the first card's neutral/cool-blue art direction. The screen is a branded idle display, not fabricated detailed POS UI. Responsive assets are `public/assets/images/platform-pos-checkout-v1-{320,640,1280}.webp`; see [PLATFORM_POS_CHECKOUT_ASSET.md](PLATFORM_POS_CHECKOUT_ASSET.md).

Completed third iteration: Payments with AltPayNet has a contactless terminal and phone composition in the same photographic family, no visible number, and the shared disclosure layout. Responsive assets are `public/assets/images/platform-payments-v1-{320,640,1280}.webp`, approximately 9KB, 23KB, and 73KB. The phone has a schematic QR cue and plate-free original-reference logo, not a fabricated provider interface or real payment link. See [PLATFORM_PAYMENTS_ASSET.md](PLATFORM_PAYMENTS_ASSET.md).

Completed fourth iteration: Inventory and order tracking uses stock containers/cartons, a separate order bag, and a branded idle tablet, without invented inventory/status data. Assets are `public/assets/images/platform-inventory-tracking-v1-{320,640,1280}.webp`, approximately 7.5KB, 20KB, and 65KB. See [PLATFORM_INVENTORY_TRACKING_ASSET.md](PLATFORM_INVENTORY_TRACKING_ASSET.md).

Completed fifth iteration: Configurable extensions uses one slim laptop and three physical concept tiles with report, customer/profile, and settings symbols. The dark idle screen has the original-reference cyan/light logo without a backing panel. No dashboard, customer records, loyalty balances, or included-extension claims are invented. Assets are `public/assets/images/platform-configurable-extensions-v1-{320,640,1280}.webp`, approximately 9KB, 25KB, and 72KB. See [PLATFORM_CONFIGURABLE_EXTENSIONS_ASSET.md](PLATFORM_CONFIGURABLE_EXTENSIONS_ASSET.md). All five overview cards now share the approved layout.
