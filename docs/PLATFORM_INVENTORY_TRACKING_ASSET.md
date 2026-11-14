# Inventory and order tracking platform card

Date: 14 November 2026. Owner authorized card 4 and requested a written proposal for card 5, not its generation.

Historical fourth-card release record below. The owner subsequently authorized card 5 separately; its completed implementation is recorded in [PLATFORM_CONFIGURABLE_EXTENSIONS_ASSET.md](PLATFORM_CONFIGURABLE_EXTENSIONS_ASSET.md). References below to an unchanged fifth placeholder describe the fourth-card release, not current Home.

## Placement and scope

Home > One connected platform > From the first tap to the next task. > fourth card, **Inventory and order tracking**, between Payments with AltPayNet and Configurable extensions.

The fourth card now uses the existing `PlatformImageCard.astro` component: edge-to-edge 4:3 upper image, no visible 04, one unchanged heading below, and a native plus/minus description disclosure. Existing copy remains in initial HTML and is collapsed by default: "Keep inventory visibility and order progress connected to the experience."

Cards 1-3, their assets/layouts, the fifth card, hero, product panels, separate payment section, other pages, and page order are unchanged. Card 5 still has 05, its placeholder, and visible description. No runtime JavaScript or dependency is added.

## Visual and accuracy boundary

Original ultra-photorealistic operational product composition, created with the built-in ImageGen tool, not CLI fallback. The existing POS card supplies lighting/material/counter art direction; the ORIGINAL `assets/ez-kyosk-lockup.png` supplies logo identity, never a header screenshot. Original logo files are untouched.

Two neutral lidded stock containers and two plain cartons are organized beside a separate prepared-order paper bag and a compact charcoal landscape tablet on a stand. The cool gray-blue studio lighting, realistic paper/material texture, and clean counter match the earlier image family. The tablet has only a dark branded idle display, with cyan/light logo directly on the surface and no white logo backing panel.

This is illustrative stock/order-preparation context, not an actual inventory/order-status screenshot, exact supplied hardware, courier service, or proof of a software state. No stock quantities, alerts, statuses, order numbers, timelines, charts, customer records, barcodes, QR codes, or shipping/receipt labels are invented. The physical packages are unbranded. A detailed inventory/status interface requires an approved real reference first, as agreed before generation.

## Saved assets

All paths below are inside `public/assets/images/`. `scripts/prepare-platform-card.mjs` resizes/encodes only, WebP quality 86 / effort 6, without cropping, enlargement, or overwriting an existing version.

| File | Dimensions | Bytes |
| --- | --- | --- |
| platform-inventory-tracking-v1-320.webp | 320 x 240 | 7,486 |
| platform-inventory-tracking-v1-640.webp | 640 x 480 | 20,016 |
| platform-inventory-tracking-v1-1280.webp | 1280 x 960 | 65,444 |

Original generated PNG: 1448 x 1086, retained at `C:/Users/galan/.codex/generated_images/01a1c0d8-c8e5-7a93-9967-fb113f664c04/exec-66246c05-bfc5-423c-b79d-19560e9ca7e2.png`. All final website deliverables are saved in the repository. Integration uses base-safe responsive sources, lazy loading, asynchronous decoding, an illustrative descriptive alt, and explicit dimensions.

## Verification

Production build and static verification passed: the four headings/descriptions remain in initial HTML, disclosures start collapsed, all 12 responsive image files exist at their intended dimensions, and previous indexing/metadata controls remain intact. The four-card browser suite passed 128 closed/open states across six viewport widths and high-density phone/desktop variants, plus 32 section accessibility scans with zero violations. Checks cover edge-to-edge 4:3 geometry, heading placement, 44px targets, visible focus, Enter/Space and pointer controls, responsive sources, no-JavaScript operation, retained cards 1-3, and unchanged fifth-card number/heading/placeholder. Full-site regression passed 48 responsive route checks and 32 light/dark accessibility scans, with zero violations, browser errors, or failed requests. Mobile/desktop light/dark closed/open screenshots were visually inspected. No real inquiry was sent.

## Fifth card proposal only: Configurable extensions

Exact location: Home > One connected platform > final card, immediately after Inventory and order tracking. Not generated or redesigned in this iteration.

- Keep heading: "Configurable extensions".
- Keep description verbatim: "Scope reports, customers, loyalty, promotions, and other needs around your operation."
- Message: the system's surrounding tools can be scoped/configured around client requirements. Do not imply every extension is included by default, or introduce new functionality guarantees.
- Proposed subject: one slim charcoal/silver laptop with a clean dark Ez Kyosk branded idle screen, accompanied by three small, physical, interchangeable matte tiles with simple etched document, customer/profile, and settings/sliders symbols. These are a conceptual visual metaphor for configurable tools, not literal hardware modules supplied with the product.
- Composition: original realistic tabletop 4:3 photograph, modest three-quarter laptop view and neatly grouped modular tiles in the foreground, centrally crop-safe and recognizable at card size. No printer, terminal, smartphone, stock containers, kiosk, extra screen, or people; distinguish it from cards 1-4.
- Style: same cool gray-blue background, neutral counter, soft daylight, charcoal/silver materials, restrained blue/cyan accents, realistic reflections and tactile surfaces. No neon, floating holograms, arrows, promotional labels, or busy dashboard collage.
- Identity/accuracy: use only the original logo reference, directly on dark screen without a white plate. No fabricated sales charts, customer records, loyalty balances, provider marks, software screens, or performance figures. Detailed interface depictions require real approved references.
- Future layout: remove 05, image edge-to-edge above one heading, existing description behind the shared plus/minus disclosure, with keyboard/no-JavaScript support and preserved initial HTML.
- Proposed files: `public/assets/images/platform-configurable-extensions-v1-{320,640,1280}.webp`. Optimize and check both themes/mobile/desktop when authorized.

## Exact built-in ImageGen prompt

```text
Use case: product-mockup.
Asset type: original ultra-photorealistic website overview card for Ez Kyosk, "Inventory and order tracking", landscape 4:3.
Input images: Image 1 is ONLY the photographic art-direction reference from the POS card. Match its neutral cool-gray/blue studio backdrop, clean gray counter, soft daylight, realistic matte charcoal/silver material and gentle grounded shadows. Do NOT reproduce its POS monitor, receipt printer or composition. Image 2 is the ORIGINAL complete transparent assets/ez-kyosk-lockup.png identity reference, not a header screenshot.
Primary request: create one restrained operational product photograph linking organized stock with order preparation. Show a compact landscape charcoal tablet on a minimal stand beside a small neatly arranged stock group and one prepared order package.
Subject/composition: on the same clean counter, place two small neutral lidded stock containers and two plain compact stock cartons grouped tidily toward the left, with one plain prepared-order paper bag in front but visibly separate. Place the tablet toward the right at a modest three-quarter angle, screen visible. This is a small operational tabletop composition, NOT a warehouse, delivery/courier service, or full retail scene. Keep all principal objects large, fully visible, centrally crop-safe and recognizable at thumbnail scale. Avoid clutter and excessive empty space. Landscape 4:3 canvas.
Tablet screen: clean dark branded IDLE display containing only the original full Ez Kyosk lockup. Cyan/turquoise kiosk/cart/orbit symbol and "Ez", light/white "Kyosk" lettering for contrast, exact normally readable mixed case "Ez Kyosk". Faithfully reference Image 2; NO white/light backing badge, sticker, rectangle, fill, outline or glow behind the logo.
Accuracy boundary: NO actual interface screenshot has been supplied. Do NOT invent inventory/order software UI, stock counts, low-stock alerts, order numbers, timelines, statuses, charts, completion estimates, customer data, barcodes, QR codes or receipt text. Keep all containers/cartons/bag unbranded with no labels or numbers. Show physical stock context, an order-preparation package and an idle branded device, not fabricated product evidence.
Style/medium: premium photorealistic product photography, natural textured paper and realistic neutral containers, tactile matte charcoal metal/plastic, convincing glass and controlled reflections, physically plausible proportions and perspective. Match the existing card family's soft cool-gray/blue light, with restrained cyan only in the logo. Opaque background.
Avoid: standing kiosk, desktop POS workstation, receipt printer, payment terminal, smartphone, bank cards, floating graphics, arrows, neon, speed claims, promotional text, extra brands, people/hands, maps, courier tracking or delivery labels, watermark, glossy toy-like 3D artwork, busy shelves or extra props.
Output: ONE polished original 4:3 raster image for platform card 4 only. Website heading/description will stay HTML below the image.
```
