# Inventory product-panel image

Date: 14 November 2026. Owner authorized proceeding with the previously detailed Inventory card.

## Placement and scope

Home > Explore the product > Five areas. One adaptable system. > third tab, Inventory > Keep menu availability closer to reality.

Replaces only the third placeholder. Existing heading, description, five features, link, desktop tabs/keyboard controls, mobile stacking, first two artworks, other two placeholders, overview cards, hero, Product page and page order are unchanged. Existing shared frame and CSS are reused. No new dependency or runtime JavaScript.

## Artwork and accuracy boundary

Built-in ImageGen, not CLI fallback. Inputs: POS product image for photographic/UI family only; inventory overview for compact tablet and two neutral lidded containers only; ORIGINAL `assets/ez-kyosk-lockup.png` for identity. Original logo files are untouched; no header screenshot is used.

4:3 landscape composition: charcoal landscape tablet and two stock containers left, enlarged white Item availability panel right. Both display Coffee / 20 / Available, Sandwich / 12 / Available, Cookie / 0 / Unavailable. Blue/white/cyan UI, navy type, neutral cool-gray studio, soft daylight and realistic materials. Original-reference logo directly on dark header, no white backing panel. Availability is explicit text, not color alone.

Owner-approved illustrative UI and generic sample quantities, NOT live inventory, verified software capture, sync evidence, an implementation of stock functionality, a hardware-model claim or actual merchant data. No prices, order IDs, paid states, analytics, forecasts, replenishment claims, real customer information, provider marks, QR/barcodes, warehouse or courier scenes. Alt text identifies it as illustrative. Website content remains HTML outside the image.

## Saved assets

Source PNG: 1448 x 1086, retained at `C:/Users/galan/.codex/generated_images/01a1c0d8-c8e5-7a93-9967-fb113f664c04/exec-3f73d92e-f015-4f0c-8264-2e8faf9abcc0.png`. All final website assets are saved in the repository.

| File inside public/assets/images | Dimensions | Bytes |
| --- | --- | --- |
| product-inventory-v1-480.webp | 480 x 360 | 20,176 |
| product-inventory-v1-960.webp | 960 x 720 | 55,452 |
| product-inventory-v1-1440.webp | 1440 x 1080 | 101,238 |

`scripts/prepare-product-image.mjs` resizes/encodes only: WebP quality 88, effort 6, smart subsampling, no cropping, enlargement or overwrite. Integration retains base-safe responsive sources, explicit dimensions, lazy loading, async decoding, illustrative alt and natural uncropped 4:3 fit.

## Verification

Production build and static checks passed, including all three responsive image families, original headings/descriptions and two remaining placeholders. Targeted browser verification passed 48 responsive/theme combinations for the three images across six viewport widths and high-density phone/desktop variants, plus 12 product-section accessibility scans with zero violations. Checks cover source selection/decoding, 4:3 geometry, no clipping/overflow, retained copy/lists, first two artworks, pointer/keyboard tabs and mobile stacking. Phone/desktop light/dark screenshots were visually inspected.

Full-site regression passed 48 responsive route checks and 32 light/dark accessibility scans with zero violations, browser errors or failed requests. Navigation, theme persistence, platform disclosures, FAQs, product tabs and mocked form flows passed. No real inquiry was sent.

## Exact next card details: Reports & Analytics (proposal only)

- Location: Home > Explore the product > Five areas. One adaptable system. > fourth tab, Reports & Analytics.
- Retain heading: **Shape reporting around the questions you ask.**
- Retain description: **Reporting and analytics can be configured to the information, roles, and workflows a client needs rather than forcing every business into one template.**
- Purpose: illustrate configurable item-sales reporting, not promise included features or portray real merchant results.
- Composition: one 4:3 landscape image. Left: slim charcoal/silver laptop, angled slightly toward viewer, with a simple three-bar item-quantity chart. Right: enlarged white **Sales summary** panel. No stock containers, printer, kiosk, terminal or additional props.
- Laptop header: original Ez Kyosk logo on dark material without a white backing plate; **Reports** title. Chart labels Coffee, Sandwich, Cookie; bar values 10, 6, 4. No upward growth arrow or percentage.
- Right table columns: **Item**, **Qty**, **Sales**. Proposed sample rows: Coffee / 10 / PHP 1,000; Sandwich / 6 / PHP 900; Cookie / 4 / PHP 200. Totals: **20 items**, **PHP 2,100**. Quantities and values agree with the original generic unit prices 100, 150 and 50.
- Both interfaces carry a small readable **Sample data** label. These are illustrative past-sales examples, not current stock, real revenues, verified reporting UI or evidence of business improvement.
- Style: same blue/white interface, subtle cyan, navy type, cool-gray studio, soft daylight and realistic charcoal/silver/glass materials. Keep text readable, avoid a crowded dashboard collage.
- Exclude: customer identities, actual merchant details, profit/tax figures, forecasts, uplift claims, comparison percentages, payment data, LIVE badges and unsupported exports/integrations.
- Scope if authorized: replace only the fourth Home placeholder, retaining its configurable-scope wording, tabs and the first three artworks. No Product-page reuse yet.
- Proposed files: `public/assets/images/product-reports-v1-{480,960,1440}.webp`.
- Not generated or integrated now. The completion report must provide these exact next-card details before further generation.

## Modified files

ProductExplorer image metadata; three responsive Inventory WebPs; product/full-site browser and static verification scripts; this record plus current visual/project/iteration/brand/prompt-status docs. Previous POS next-card handoff is labeled historical. No CSS, copy, actual kiosk application or other page changes.

## Exact built-in ImageGen prompt

```text
Use case: product-mockup.
Asset type: ONE original photorealistic landscape 4:3 website product image for Ez Kyosk Inventory, not a full website.
Input images: Image 1 is our POS product image, photographic art-direction and UI-family reference only: match cool-gray/light-blue opaque studio, neutral counter, soft daylight, blue/white UI, navy type, small cyan accent, two-part device-plus-enlarged-panel composition. Do NOT reproduce its POS workstation, printer, checkout or order queue. Image 2 is our inventory overview, used ONLY for the compact charcoal landscape tablet and two neutral lidded stock containers. Omit its paper bag and cartons. Image 3 is the ORIGINAL transparent assets/ez-kyosk-lockup.png logo identity, never a header screenshot.
Composition: LEFT half shows one compact landscape tablet in a low minimal stand, slightly angled toward viewer, with two small neutral charcoal/silver lidded stock containers beside it. RIGHT half shows one enlarged rounded white availability panel, a magnified software detail NOT a physical second screen. All principal objects fully inside landscape 4:3 canvas, large and legible with a clean gap and modest margins. Do not crop the tablet or panel edges. Restrained and uncluttered.
Tablet screen: dark header with the full original Ez Kyosk logo directly on it, cyan/turquoise symbol and "Ez", light "Kyosk", exact mixed case. NO white/light backing badge, sticker or plate. Below, original simple blue/white illustrative Inventory interface. Title exactly "Inventory". Clear rows matching the enlarged panel: Coffee stock 20 Available; Sandwich stock 12 Available; Cookie stock 0 Unavailable. No additional metrics, graphs, alerts, buttons, timestamps or sync indicators.
Right enlarged panel: heading exactly "Item availability", a short subtle cyan accent below it. Table column headings exactly "Item", "Stock", "Status". Three easy-to-read rows exactly:
"Coffee" | "20" | "Available"
"Sandwich" | "12" | "Available"
"Cookie" | "0" | "Unavailable".
Keep 0 as zero, not letter O. Availability is stated in words, not color alone. Blue/cyan understated Available treatment; muted neutral Unavailable treatment, NOT bright green/red. No prices, totals, checkout actions, order numbers, performance claims or additional data. Rows and values must match on tablet and panel.
Style: premium photorealistic product composite with believable matte charcoal, brushed silver, glass, neutral containers, grounded subtle shadows, controlled reflections and soft daylight. Modern generous readable sans-serif UI. Same blue/white and cool-gray family as earlier product images. Opaque background, no blurred color clouds, neon glow or floating decorative graphics.
Accuracy boundary: owner-approved generic illustrative interface and sample stock quantities, NOT a verified screenshot, live inventory, sync proof, a hardware-model claim or actual merchant data. Do not imply replenishment, forecasting or unsupported functionality. No branded packaging, real barcodes, QR codes, order tracking, customer data, provider logos or LIVE badges.
Avoid: full kiosk, desktop POS pedestal, printer, payment terminal, phone, order bag, cartons, warehouse shelves, courier/delivery scene, checkout detail, food menu grid, analytics charts, people/hands, marketing text, website tabs/headings/features, watermark and toy-like 3D rendering.
Output: ONE polished original 4:3 landscape raster image only. Website heading, description, feature list and tab controls remain HTML outside the image.
```
