# Payments with AltPayNet platform card

Date: 14 November 2026. This is the record of the third-card release, when cards 4-5 were pending. The owner subsequently authorized card 4; see [PLATFORM_INVENTORY_TRACKING_ASSET.md](PLATFORM_INVENTORY_TRACKING_ASSET.md). Historical scope and verification below refer to the third-card release.

## Placement and integration

Home > One connected platform > From the first tap to the next task. > third card, **Payments with AltPayNet**.

The card uses the existing `PlatformImageCard.astro`: full-width edge-to-edge 4:3 upper image, no visible 03, one unchanged heading below, and a native plus/minus disclosure. The existing description remains verbatim in the initial HTML, collapsed by default: "Support approved card, QR, GCash, Maya, and e-wallet payment paths."

Only the third card is newly redesigned. Cards 1-2 retain their images/layouts. Cards 4-5 retain their numbers, placeholders, headings, and visible descriptions. The hero, product explorer, separate payments section, other pages, original logo files, and page order remain unchanged. No runtime JavaScript or dependencies are added.

## Art direction and accuracy boundary

Original photorealistic product imagery made with the built-in ImageGen tool, not CLI fallback. The POS card supplies cool gray-blue lighting, realistic charcoal/silver materials, counter, and restrained composition; the ORIGINAL `assets/ez-kyosk-lockup.png` supplies identity, never a header screenshot.

The composition pairs an upright compact contactless/card terminal and smartphone. The terminal has a simple contactless symbol, keypad, and card slot. The phone displays the cyan/light Ez Kyosk logo directly on its dark screen, without a white logo backing panel. A separate white area below contains a deliberately schematic QR-style cue with two finder motifs and sparse modules. This is decorative illustrative imagery, not a live checkout screen, payment instruction, exact AltPayNet hardware model, or evidence of a completed transaction. No merchant/account data, payment destination, amount, success status, or real QR payload was supplied. Local QR-decoder packages were unavailable, so scanner testing is not claimed.

No verified provider logo files were supplied in the local assets. The raster therefore contains no invented AltPayNet, wallet, bank, card-network, hardware-maker, or certification mark. The existing owner-approved AltPayNet heading and payment-capability text stay as HTML; no new product/provider claim is introduced.

## Saved responsive files

All paths below are in `public/assets/images/`. `scripts/prepare-platform-card.mjs` performs only WebP resizing/encoding at quality 86 / effort 6, without cropping, enlarging, or overwriting existing versions.

| File | Dimensions | Bytes |
| --- | --- | --- |
| platform-payments-v1-320.webp | 320 x 240 | 8,840 |
| platform-payments-v1-640.webp | 640 x 480 | 23,482 |
| platform-payments-v1-1280.webp | 1280 x 960 | 73,152 |

Original generated PNG: 1448 x 1086, retained at `C:/Users/galan/.codex/generated_images/01a1c0d8-c8e5-7a93-9967-fb113f664c04/exec-c9ae93d1-8c5a-4864-bb4e-4b9d950b1cb2.png`. All final website deliverables are inside the repository. Integration retains base-path-safe responsive sources, lazy loading, asynchronous decoding, explicit dimensions, and an illustrative descriptive alt.

## Verification

Production build and static verification passed, including the three card headings, all retained descriptions in initial HTML, collapsed disclosures, nine responsive image files, and existing SEO/indexing checks. The optimized asset and mobile/desktop light/dark closed/open screenshots were visually inspected.

The three-card browser suite passed 96 closed/open states across six viewport widths and high-density phone/desktop variants, plus 24 platform-section accessibility scans with zero violations. Tests cover edge-to-edge 4:3 geometry, heading placement, 44px control targets, visible focus, Enter/Space, pointer toggling, correct responsive image selection, retained cards 1-2, unchanged cards 4-5, and operation without JavaScript. Full-site regression passed 48 responsive route checks and 32 light/dark accessibility scans, with zero violations, browser errors, or failed requests. No real inquiry was sent.

## Historical next-card proposal

The owner subsequently authorized Home > One connected platform > fourth card, Inventory and order tracking, implemented with organized stock/order-preparation context and a branded idle tablet. See [PLATFORM_INVENTORY_TRACKING_ASSET.md](PLATFORM_INVENTORY_TRACKING_ASSET.md). Detailed inventory/status UI still requires an approved real reference.

## Exact built-in ImageGen prompt

```text
Use case: product-mockup.
Asset type: original premium photorealistic website overview card for "Payments with AltPayNet", landscape 4:3.
Input images: Image 1 is ONLY the second platform card's photographic art-direction reference. Match its neutral cool-gray/blue studio setting, matte charcoal/silver hardware, soft daylight, gentle grounded shadows and realistic scale. Do NOT reuse its POS monitor, printer or workstation. Image 2 is the ORIGINAL transparent complete Ez Kyosk lockup, the sole brand identity reference, not a header screenshot.
Scene/backdrop: clean light-gray counter and subtle cool-blue-gray studio background, coherent with the reference. No venue scenery, people, hands or extra props.
Subject: one compact upright charcoal card/contactless payment terminal beside one upright dark smartphone, both on the same counter, forming a simple tightly grouped composition. Terminal slightly to the left, smartphone to the right. Realistic terminal keypad, discreet red/yellow/green function keys, contactless symbol on its dark display; show a plausible card slot but no inserted card. Smartphone in a minimal unobtrusive support, not floating.
Phone display: a clean dark screen with the ORIGINAL Ez Kyosk cyan/light logo directly at the top, and a large simple white square containing a deliberately schematic QR-style visual cue below. This is NOT a working payment QR code: use just TWO corner finder squares, omit the third QR finder and use sparse abstract square modules, no encoded text/URL, account data or payment destination. No merchant name, amount, customer records, transaction status, confirmation, e-wallet logos, fabricated buttons, menus or detailed provider UI.
Branding: use only Image 2's complete original turquoise kiosk/cart/orbit symbol + mixed-case "Ez Kyosk". Cyan/turquoise symbol and Ez, light/white Kyosk for dark-screen contrast. The LOGO has NO white/light backing plate, sticker, badge, rectangle, fill, border or glow. The white QR illustration area below is a separate screen element, not a logo plate. No AltPayNet, bank, card-network, wallet or hardware-maker logos: no verified provider logo source is supplied. The website's existing AltPayNet title will be HTML below the image, not baked into the photograph.
Composition: landscape 4:3, modest three-quarter camera angle, both devices large, fully visible, upright and easily recognizable at small card sizes, central crop-safe placement, balanced small margins. Keep screen reflections controlled and preserve legible normally oriented Ez Kyosk text.
Style: ultra-photorealistic high-end product photography with tactile matte plastic/metal, convincing glass, physically plausible geometry and soft natural shadows. Blue/cyan is restrained; neutral surfaces dominate. Opaque studio background.
Avoid: standing kiosk, POS monitor, receipt printer, actual bank cards or personal data, functioning payment links/codes, certification badges, invented financial/provider UI or claims, decorative floating icons, arrows, connector arcs, neon, background haze, watermarks, captions, outside-device text, or toy-like 3D rendering.
Output: ONE polished original 4:3 raster image for platform card 3 only.
```
