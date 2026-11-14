# POS & Checkout product-panel image

Date: 14 November 2026. Owner requested proceeding with the next card after Self-Ordering and reporting the exact details of the following card.

## Placement and completed scope

Home > Explore the product > Five areas. One adaptable system. > POS & Checkout > Move confirmed orders into checkout.

Replaces only the second product placeholder. The first artwork, all headings/descriptions/lists/links, five desktop tabs/keyboard behavior, mobile stacked panels, three remaining placeholders, overview cards, hero, Product page and page order are retained. Shared image metadata now selects the two responsive images; existing frame/CSS is reused without changes. No new dependency or runtime JavaScript.

## Artwork and accuracy boundary

Built-in ImageGen, not CLI fallback. Inputs: existing POS overview photo for hardware; first product image for art direction and generic interface family; ORIGINAL `assets/ez-kyosk-lockup.png` for identity. No header screenshot or original-source logo modification.

4:3 landscape, charcoal/silver staff-side workstation plus compact receipt printer on left, enlarged checkout detail on right. Screen queue: demo 01 Checkout / 02 Preparing / 03 Ready. Checkout detail for Order 01: Coffee x1 PHP 100, Sandwich x1 PHP 150, Cookie x1 PHP 50, total PHP 300, Complete checkout control. Short blank receipt paper, no actual transaction receipt. Neutral cool-gray studio, soft daylight, blue/white interface, subtle cyan, original-reference logo directly on dark header without a white backing panel.

Illustrative proposed UI, not a verified screenshot, software implementation, live transaction, payment success or guaranteed hardware/printing bundle. Generic items and arithmetic match the first image. No provider marks, payment card/QR data, personal records, LIVE badges, invented performance metrics or actual customer orders. Alt text identifies the image as illustrative. Only this second image is authorized; Inventory remains a written proposal below.

## Saved assets

Source PNG: 1448 x 1086, retained at `C:/Users/galan/.codex/generated_images/01a1c0d8-c8e5-7a93-9967-fb113f664c04/exec-0f8e75ca-8fd0-4d25-81a4-7b501ab6fae3.png`. Final website assets are inside the repository.

| File inside public/assets/images | Dimensions | Bytes |
| --- | --- | --- |
| product-pos-checkout-v1-480.webp | 480 x 360 | 21,640 |
| product-pos-checkout-v1-960.webp | 960 x 720 | 56,330 |
| product-pos-checkout-v1-1440.webp | 1440 x 1080 | 98,380 |

`scripts/prepare-product-image.mjs` resizes/encodes only, quality 88 / effort 6 / smart subsampling, no cropping, enlargement or overwrite. Base-safe responsive sources, explicit dimensions, lazy loading, async decoding, descriptive alt and the existing uncropped 4:3 frame are retained.

## Verification

Production build/static checks passed, including both responsive image families, preserved copy and three remaining placeholders. Targeted browser verification passed 32 responsive/theme combinations for the two images across six widths and high-density phone/desktop variants, plus eight product-section accessibility scans with zero violations. Checks cover source selection/decoding, natural 4:3 geometry, no clipping/overflow, preserved copy/lists, first artwork retained, pointer/keyboard tabs and mobile stacking. Phone/desktop light/dark screenshots were visually inspected.

Full-site regression passed 48 responsive route checks and 32 light/dark accessibility scans with zero violations, browser errors or failed requests. Navigation, theme persistence, platform disclosures, FAQs, product tabs and mocked form flows passed. No real inquiry was sent.

## Exact details of the next card: Inventory (proposal only)

- Location: Home > Explore the product > Five areas. One adaptable system. > third tab, Inventory.
- Heading retained exactly: **Keep menu availability closer to reality.**
- Description retained exactly: **Real-time inventory support helps the ordering experience reflect operational availability and gives teams a clearer view of stock movement.**
- Visual purpose: connect item stock with menu availability, not checkout or order queueing.
- Composition: one 4:3 landscape image. Left: compact charcoal landscape tablet angled slightly toward the viewer, beside two small neutral stock containers on a clean counter. Right: enlarged white availability panel. No full kiosk, POS pedestal, printer, order bag, payment terminal or extra screens.
- Tablet: original Ez Kyosk logo directly on a dark header without a white backing plate, simple Inventory title and concise matching sample item list.
- Enlarged panel title: **Item availability**. Columns: **Item**, **Stock**, **Status**. Proposed generic rows: **Coffee / 20 / Available**, **Sandwich / 12 / Available**, **Cookie / 0 / Unavailable**. Sample counts only, not actual inventory or live sync proof. Text makes availability clear without relying on color alone.
- Styling: same blue/white UI, subtle cyan, dark navy text, cool-gray background, soft daylight and realistic charcoal/glass/neutral materials. No neon, warehouse setting, courier scene, graphs, revenue figures, stock forecasts, low-stock alerts or claims of automatic replenishment.
- Scope after authorization: replace only the third Home placeholder; retain existing text, tabs, mobile behavior, first two artworks and other sections. No Product-page reuse yet.
- Proposed filenames: `public/assets/images/product-inventory-v1-{480,960,1440}.webp`.
- Not generated or integrated in this iteration. Present these exact details to the owner before proceeding, rather than reporting only a generic next-action list.

## Modified files

ProductExplorer component; three new responsive WebPs; product/full-site browser and static verification scripts; this asset record and current visual/project/iteration/brand docs. First product asset record is labeled historical where it names the now-completed next step. No global stylesheet or actual kiosk application changes.

## Exact built-in ImageGen prompt

```text
Use case: product-mockup.
Asset type: ONE original premium photorealistic 4:3 landscape website product image for Ez Kyosk POS & Checkout, not a whole website.
Input images: Image 1 is our existing POS overview photograph, used ONLY for physical charcoal/silver staff-side landscape touchscreen workstation, pedestal and compact receipt printer identity. Image 2 is our Self-Ordering product image, used for matching cool-gray studio art direction, blue/white generic illustrative interface style, typography, lighting and two-part composition. Do not reproduce its portrait kiosk, menu layout or large food thumbnails. Image 3 is the ORIGINAL transparent assets/ez-kyosk-lockup.png logo identity, never a header screenshot.
Composition: landscape 4:3 with a physical staff-side POS workstation toward the LEFT, small receipt printer beside it in the lower foreground, and ONE enlarged white checkout-detail UI panel on the RIGHT. Right panel is a magnified software detail, not another physical monitor. Balance device and panel with comfortable outer margins; fit all screen edges, printer and panel fully inside canvas. Keep principal details large/readable at website display size, not a dashboard collage.
Scene/materials: same neutral cool-gray/light-blue opaque studio backdrop and clean counter as references, soft daylight, tactile matte charcoal plastic/metal, brushed silver trim, realistic glass reflections, gentle grounded shadows. Match the first product image without large glows or blurry color clouds.
POS screen: simple original staff-side order queue interface. Dark header contains original Ez Kyosk lockup, cyan/turquoise symbol and "Ez", light "Kyosk", directly on dark surface with NO white/light backing rectangle, plate or sticker. Below header, title exactly "Order queue". Three clear uncluttered rows with demo order IDs and stages: "01" "Checkout"; "02" "Preparing"; "03" "Ready". White/light-gray surfaces, navy type, restrained blue/cyan accents. These are static illustrative stages, not actual live orders. No food-grid menu on the POS.
Right panel: original generic checkout interface, visually coherent with the first product image but staff-focused. Top heading exactly "Checkout"; a small secondary label "Order 01". Three plain readable line items, no food photos: "Coffee ×1" "₱100"; "Sandwich ×1" "₱150"; "Cookie ×1" "₱50". A divider, then "Total" "₱300". One large royal-blue button exactly "Complete checkout". Arithmetic MUST agree: 100 + 150 + 50 = 300. No invented taxes, fees, discounts or extra line items.
Printer: compact realistic receipt printer, a short blank unprinted paper strip only. No fabricated payment receipts, real customer data, QR codes, fiscal codes or extra brand names.
Branding: use only full original Image 3 logo identity, exact mixed case "Ez Kyosk", not old gold slashes or uppercase EZ. No added white logo backing panels. No SUNMI or hardware-model claim.
Accuracy boundary: owner-requested original GENERIC ILLUSTRATIVE UI concept, not a screenshot of a verified deployed POS. No live/paid/success badges, actual transaction proof, payment-provider logos, customer details, performance metrics, analytics, loyalty, inventory or unrelated functionality. Do not imply a hardware bundle or guaranteed printing configuration.
Avoid: portrait customer kiosk, smartphone, payment terminal, bank cards, people/hands, extra monitors, floating decorative icons, holograms, neon, green/gold theme, arrows between devices, marketing copy, website headings/tabs/features baked into image, watermark or toy-like 3D art.
Output: ONE polished original landscape 4:3 raster image only, consistent with product image 1. Website title, explanatory copy, feature list and tabs remain HTML outside this image.
```
