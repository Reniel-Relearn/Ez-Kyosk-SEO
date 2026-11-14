# Self-Ordering product-panel image

Date: 14 November 2026. Owner authorized an original generated generic menu, followed by website integration. Previous proposals requiring actual screenshots are superseded for this first image only.

## Placement and scope

Home > Explore the product > Five areas. One adaptable system. > Self-Ordering > Every choice, clear from the first tap.

Replaces only this panel's CSS interface placeholder with one original 4:3 raster image. Existing heading, description, feature list, link, desktop tab controls/keyboard behavior, mobile stacked panels, other four product placeholders, five overview cards, hero, Product page and section order are unchanged. No dependency or new runtime JavaScript is added. Product-page reuse remains a later action.

## Composition and accuracy boundary

Built-in ImageGen, not CLI fallback. The user's screenshot supplies layout direction only: portrait kiosk left, enlarged matching order-review panel right. Our `public/assets/images/platform-self-ordering-v3-1280.webp` supplies device/photo art direction; ORIGINAL `assets/ez-kyosk-lockup.png` supplies identity. No header screenshot, reference branding, reference menu/cart content, or old gold wordmark is used. The original logo files are untouched.

Original generic menu: Coffee PHP 100, Sandwich PHP 150, Cookie PHP 50. Cart contains one of each; total PHP 300. Menu and cart values agree. Blue/white UI, restrained cyan, dark navy typography, realistic food imagery and charcoal/silver hardware, cool-gray studio background. Screen/pedestal logos have no white backing panels. The lower stand intentionally continues out of frame; screen and enlarged order panel stay fully visible.

This is an owner-authorized proposed illustrative interface, NOT a verified screenshot, a change to the linked kiosk application, proof of a SUNMI model, an actual merchant menu, or live pricing. Alt text explicitly describes the image as illustrative. No customer data, provider logos, LIVE statuses, QR codes, dashboards or performance claims are invented. Website copy remains HTML, outside the raster. No reference supplied in this iteration verifies detailed UI for the other four panels.

## Saved assets and integration

Source PNG: 1448 x 1086, retained at `C:/Users/galan/.codex/generated_images/01a1c0d8-c8e5-7a93-9967-fb113f664c04/exec-71c52e69-66e4-4ce2-8a91-2484e28b4dc2.png`. All final website deliverables below are saved in the repository.

| File inside public/assets/images | Dimensions | Bytes |
| --- | --- | --- |
| product-self-ordering-v1-480.webp | 480 x 360 | 24,932 |
| product-self-ordering-v1-960.webp | 960 x 720 | 65,580 |
| product-self-ordering-v1-1440.webp | 1440 x 1080 | 117,370 |

`scripts/prepare-product-image.mjs` performs resizing/encoding only: WebP quality 88, effort 6, smart subsampling; no cropping, enlargement or overwrites. Integration uses base-safe responsive sources, explicit dimensions, lazy loading and async decoding. The image frame has zero inner padding, no old blurred pseudo-element, natural 4:3 proportions and `object-fit: contain`; it does not stretch the kiosk or crop the cart.

## Verification

Production build/static verification passed. Targeted browser checks passed 16 responsive/theme combinations across six widths and high-density phone/desktop variants, plus four product-section accessibility scans with zero violations. Checks cover decoded image/source selection, alt text, retained copy/list, unclipped 4:3 geometry, removed old background effect, other placeholders/overview cards retained, desktop keyboard tab switching and mobile five-panel stacking. Phone/desktop light/dark screenshots were visually inspected.

Full-site regression passed 48 responsive route checks and 32 light/dark accessibility scans with zero violations, browser errors or failed requests. Navigation, existing platform disclosures, product tabs, theme persistence, FAQs and mocked form behavior passed. No real inquiry was sent. A separate owned static preview was used because Astro's stale preview lock pointed to an unrelated process; that application was not stopped or modified.

## Exact next action

Present the visual brief for Home > Explore the product > POS & Checkout > Move confirmed orders into checkout. Propose a distinct staff-side checkout/order-queue composition rather than repeating this customer menu. Confirm actual approved UI versus a separately authorized generic illustrative concept before generation. Do not automatically generate the next image or modify the Product page. Every completion report must name the completed location and exact next action.

## Modified files

- `src/components/ProductExplorer.astro`: first-panel image only; existing controls/copy retained.
- `src/styles/global.css`: image-only frame/fit rules, scoped away from other placeholders.
- Three responsive WebPs listed above.
- `scripts/prepare-product-image.mjs`, `scripts/qa-product-image.mjs`, `scripts/qa.mjs`, `scripts/verify-build.mjs`: encoding and verification.
- This record, visual asset plan, project plan, iterative redesign notes and brand guidelines.

## Exact built-in ImageGen prompt

```text
Use case: product-mockup.
Asset type: original photorealistic landscape 4:3 website product-panel image for Ez Kyosk Self-Ordering. Create ONE complete raster image, not a whole website.
Input images: Image 1 is our existing kiosk artwork, used ONLY for hardware identity, charcoal/silver physical design, upright portrait screen, photographic realism and cool-gray studio art direction. Replace its old illustrative menu with the NEW original menu described below; do not copy its gold/brown menu, products or prices. Image 2 is the ORIGINAL transparent assets/ez-kyosk-lockup.png logo identity, never a header screenshot. Preserve the full symbol and mixed-case "Ez Kyosk".
Layout: follow a two-part composition, portrait kiosk on the LEFT occupying roughly 45% of the canvas, one enlarged matching order-review UI card on the RIGHT occupying roughly 45%, with a clean gap and comfortable outer margins. The right card is a magnified detail of the proposed software, NOT a physical monitor. No website headline, feature list, page tabs, browser frame or other website content inside the image. Fit the landscape 4:3 canvas without stretching the portrait screen or clipping its edges. Show full touchscreen and upper pedestal only, not a full-height floor stand. Slight three-quarter camera view, predominantly front-on for legibility.
Scene: premium clean neutral cool-gray/light-blue opaque studio backdrop, subtle counter surface, soft daylight, realistic matte charcoal metal, brushed silver side trim and glass, restrained grounded shadows. No blurry color clouds or large glows.
Original menu concept: modern white/light-gray interface, deep navy type, royal blue primary buttons and small cyan highlights. Clear, large sans-serif text and generous spacing. Dark header with original cyan/light Ez Kyosk logo directly on screen, NO white badge behind it. Header "Menu"; categories "Drinks", "Food", "Treats". Three simple product rows/cards with original realistic food thumbnails and readable exact names/prices: "Coffee" "₱100", "Sandwich" "₱150", "Cookie" "₱50". Each has a simple blue plus control. Coffee is a cup of coffee, sandwich is a toasted sandwich, cookie is one chocolate-chip cookie. Bottom summary: "3 items", "Total" "₱300", blue "Review order" button. Do not use items from the supplied layout reference.
Right enlarged review card: restrained rounded white UI panel with subtle shadow and a blue/cyan accent. Heading exactly "Your order". Three rows with matching thumbnails and values: "Coffee ×1" "₱100"; "Sandwich ×1" "₱150"; "Cookie ×1" "₱50". Divider then "Total" and "₱300". One large blue "Review order" button. The quantities, menu prices and cart sum MUST agree: 100 + 150 + 50 = 300. No extra fees or rows. Keep this right panel large, crisp and uncluttered at website display size.
Branding: original logo in screen header and on dark upper pedestal, cyan/turquoise icon and "Ez", light "Kyosk" for contrast. Directly on dark material with NO white/light backing rectangle, sticker, plate or added fill. Do not mirror lettering. No gold slashes or all-uppercase EZ.
Accuracy boundary: owner-authorized NEW GENERIC MENU CONCEPT, not a screenshot of the current live application or verification of a SUNMI hardware model. No factual product claims, real customer data, order IDs, LIVE badges, dashboards, inventory/report/customer navigation or third-party payment-provider logos. No payment terminal, bank cards, QR codes or unrelated props; this image concerns browsing and order review.
Output style: highly polished photorealistic product composite with legible original illustrative UI, realistic food photography and believable proportions. All primary details centrally safe and fully visible. Avoid toy-like 3D art, green/gold interface theme, decorative floating icons, people, watermark and marketing copy. ONE landscape 4:3 image only.
```
