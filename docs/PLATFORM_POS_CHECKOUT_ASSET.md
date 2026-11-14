# POS and checkout platform card

Date: 14 November 2026. This record describes the second-card iteration, when the third card was a proposal only. The owner has since separately authorized that third card; current implementation is recorded in [PLATFORM_PAYMENTS_ASSET.md](PLATFORM_PAYMENTS_ASSET.md). Historical second-card verification below retains its original scope.

## Exact placement and scope

Home > One connected platform > From the first tap to the next task. > second card, **POS and checkout**.

The card uses the same `PlatformImageCard.astro` component as Self-Ordering Experience: full-width edge-to-edge 4:3 upper image, no visible 02, one unchanged heading below the image, and a plus/minus native disclosure. The description remains verbatim in initial HTML: "Connect confirmed orders to checkout, queueing, and the operational flow defined for your business." It starts collapsed and expands inline. At the second-card release, cards 3-5 were unchanged. The separately authorized third-card release retains this card and the first card; cards 4-5, hero, and other sections remain unchanged.

## Visual and accuracy boundary

Original photorealistic imagery generated with the built-in ImageGen tool, not CLI fallback. The first platform image supplies the cool gray-blue lighting/material direction; the ORIGINAL `assets/ez-kyosk-lockup.png` supplies brand identity. No header screenshot is used, and original logo assets are not modified.

The image shows a staff-side landscape POS touchscreen on a short charcoal/silver stand and a compact thermal receipt printer on a neutral counter. The dark idle screen displays the cyan/light Ez Kyosk logo directly without a white backing plate. No verified POS interface screenshot exists in the available assets, so no detailed interface, confirmed transaction, customer information, sales figures, or fabricated receipt text is depicted. The printer's paper is blank. This is illustrative workstation imagery, not documentation of exact supplied hardware or a live product screenshot.

## Responsive assets

All deliverables are saved inside `public/assets/images/`. `scripts/prepare-platform-card.mjs` performs only deterministic resizing and WebP encoding, quality 86 / effort 6; it requires a versioned filename and refuses to overwrite existing assets. The original 1448 x 1086 PNG is retained in built-in tool storage at `C:/Users/galan/.codex/generated_images/01a1c0d8-c8e5-7a93-9967-fb113f664c04/exec-161e7e00-e5eb-4c58-9fc0-6834b47e2062.png`.

| File | Dimensions | Bytes |
| --- | --- | --- |
| platform-pos-checkout-v1-320.webp | 320 x 240 | 7,172 |
| platform-pos-checkout-v1-640.webp | 640 x 480 | 17,782 |
| platform-pos-checkout-v1-1280.webp | 1280 x 960 | 53,228 |

Integration uses base-safe URLs, responsive srcset/sizes, lazy loading, asynchronous decoding, an illustrative descriptive alt, and explicit width/height. No new runtime JavaScript or dependency is added.

## Verification

Production build and static verification passed, including both card headings, retained initial-HTML descriptions, collapsed defaults, six responsive WebP files, and unchanged indexing/metadata controls. The optimized 1280px asset and mobile/desktop light/dark card screenshots were visually inspected. The two-card suite passed 64 closed/open states across six widths and high-density phone/desktop variants, 16 section accessibility scans, Enter/Space and pointer controls, and no-JavaScript operation. Full-site regression passed 48 responsive route checks and 32 light/dark accessibility scans, with zero violations, browser errors, or failed requests. Cards 3-5 retain their original numbers, headings, and placeholders. No real inquiry was sent.

## Historical next-card proposal: Payments with AltPayNet

Exact location: Home > One connected platform > third card. The owner subsequently asked to continue; see [PLATFORM_PAYMENTS_ASSET.md](PLATFORM_PAYMENTS_ASSET.md). The proposal below is preserved as provenance, not a current pending status.

- Purpose: show the two payment paths at a glance, distinct from staff checkout and from later payment-section close-ups.
- Subject/composition: one compact card/contactless terminal beside one upright smartphone, a simple grouped 4:3 product composition with both devices fully visible and clear at small card sizes.
- Phone: an illustrative QR-payment cue, not a working payment QR code, invented merchant account, transaction, balance, or success confirmation. Detailed provider UI requires a verified reference.
- Style: the same restrained gray/cool-blue setting, soft daylight, natural dark hardware, realistic screen reflections, and subtle cyan accents as cards 1-2. No floating icons, neon, bank cards with personal data, or extra props.
- Identity: use the original Ez Kyosk logo without white backing plates. Verify any AltPayNet/provider marks against authoritative assets before including them; never invent a mark or certification.
- Layout: remove visible 03, add the edge-to-edge image, retain the existing heading and description as HTML, and use the same plus/minus disclosure.
- Preserve the existing copy: "Support approved card, QR, GCash, Maya, and e-wallet payment paths."

## Exact built-in ImageGen prompt

```text
Use case: product-mockup.
Asset type: original photorealistic production website image for Ez Kyosk's "POS and checkout" platform overview card, landscape 4:3.
Input images: Image 1 is ONLY the existing first platform card's photographic art-direction reference: match its soft neutral cool-gray/blue studio background, clean lighting, realistic charcoal/silver materials and restrained professional appearance. Do NOT copy its tall kiosk, food menu, pedestal or composition. Image 2 is the ORIGINAL complete transparent Ez Kyosk logo, the only permitted brand identity, not a header screenshot.
Scene/backdrop: a clean light-gray checkout counter against the same subtle cool-blue-gray studio setting. Soft daylight and gentle grounded shadows. No cafe scenery, people, hands, food or decorative props.
Subject: one elegant staff-facing landscape POS touchscreen on a short sturdy charcoal/silver desktop stand, accompanied by one compact charcoal thermal receipt printer with a short clean white paper strip emerging naturally. The screen and printer together clearly communicate a staff checkout workstation rather than a customer self-ordering kiosk or card-payment scene.
Composition: modest three-quarter perspective, large clear monitor toward center-left and the smaller receipt printer beside it, a cohesive tight equipment group fully inside a central crop-safe area. Keep the entire monitor, its stand, and printer visible with comfortable small margins. Both devices sit naturally on the same counter. Camera approximately at screen level. Landscape 4:3 canvas, no borders.
Screen: use only a dark clean branded idle display showing the original full logo: cyan/turquoise kiosk symbol and "Ez", light/white "Kyosk" letters for dark-surface legibility, exact mixed case "Ez Kyosk". No other interface: no invented POS screens, totals, transactions, order confirmations, statuses, charts, buttons or tiny fake words. The image is an illustrative workstation composition, NOT a screenshot or evidence of specific supplied hardware.
Branding: faithfully follow Image 2's complete original symbol/wordmark. Apply it directly to the screen with no white/light backing badge, plate, sticker, rectangle, fill, halo or outline. No extra logos on the printer. Do not mirror text.
Style/medium: premium ultra-photorealistic product photography, tactile matte metal and plastic, convincing screen glass, physically plausible edges and proportions, soft controlled reflections, natural studio lighting. Subtle blue/cyan cues only; neutral hardware and counter dominate.
Avoid: standing kiosk, food menu, smartphones, card terminals, bank cards, payment-provider marks, QR codes, floating icons, arrows, connection lines, neon, marketing labels, sales figures, customer information, fictional receipt text, watermark, clutter, cartoon or glossy toy-like 3D render.
Output: ONE polished opaque landscape 4:3 raster image for this second card only. Website heading and description will be HTML below it; do not bake those into the photograph.
```
