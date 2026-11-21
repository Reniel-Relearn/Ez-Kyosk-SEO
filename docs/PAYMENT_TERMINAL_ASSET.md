# Terminal integration payment image

## Current revision: terminal only — 21 November 2026

Owner approved replacing ONLY the first Home payment card artwork, using the supplied terminal-only composition as reference. The older kiosk-and-terminal composition below is historical. Native copy, inquiry link, layout/CSS and online-payment card remain unchanged. Local review only; no commit, push or deployment in this pass.

Built-in ImageGen edit; no CLI fallback. Existing `public/assets/images/payment-terminal-v1-1080.webp` was the edit input. Original assets are preserved. New master: `assets/payment-terminal-only-v2-source.png`. Responsive transparent derivatives: `public/assets/images/payment-terminal-v2-{360,720,1080}.webp`, at 360×480, 720×960 and 1080×1440. WebP quality 88, alpha quality 100. Device is illustrative, not a verified hardware model or evidence of a real transaction.

One complete charcoal terminal at a slight three-quarter angle, blue display with contactless icon, ₱300 and Tap card; aligned numeric keypad and red/yellow/green action keys. No kiosk, stand, embedded branding or opaque backdrop. Transparent clearance and a detached soft shadow create the floating appearance without changing the second card's bottom anchoring.

### Generation prompt

> Use case: precise-object-edit / background-extraction. Asset type: premium photorealistic transparent website payment-terminal cutout, portrait 3:4 canvas, ideally 1536x2048 or at least 1080 pixels wide. Input image 1 is the EXISTING edit target: kiosk plus payment terminal. Keep only the payment terminal's visual/material family, REMOVE THE ENTIRE KIOSK and BOTH stands/bases/mounting poles. Recompose as ONE complete freestanding handheld card-payment terminal, centered and fully uncropped, floating slightly above a very subtle neutral soft elliptical contact shadow on genuinely transparent surroundings. This is the only output subject. NO website card, border, headings, marketing copy, backdrop, table, hands, phone, logos or watermark. Match the user's approved reference direction: premium matte charcoal black rounded terminal, believable slim enclosure, slight three-quarter perspective showing its right side, readable front screen and keypad, physically consistent geometry, straight aligned edges, soft studio highlights. Blue display with white contactless symbol, exact clear text '₱300' and 'Tap card'. Above screen retain subtle physical contactless symbol. Keypad must be clean and plausible: rows 1 2 3 / 4 5 6 / 7 8 9 / centered 0, then three distinct bottom action keys red X, yellow back arrow, green check. No invented provider branding, successful-payment message or real card number. Make the terminal large within the portrait canvas but leave approximately 8 percent clean transparent top/side margins and enough transparent bottom clearance for the detached soft shadow, so it floats without touching the card edge. Preserve actual alpha, not a checkerboard or opaque black/white background; shadow on transparent alpha. Do not include any part of the original kiosk, stand, pedestal or other objects. Website text is native HTML and must not be generated in this asset.

### Verification scope

Production build/static checks, alpha/dimension checks, responsive image loading/centering in both themes and preservation of original assets, online card, copy and links. Browser screenshots are QA artifacts, not new proprietary software references. Existing header contrast concerns remain outside this artwork scope.

Completed targeted checks: build and static verifier passed; 56 responsive/theme/density image checks and four scoped accessibility scans passed; 52 JavaScript-on/off payment layouts (104 card checks) passed. Golden comparison retained four protected sections and 72 original assets. Desktop dark and phone light screenshots visually reviewed: terminal complete, floating, readable, no kiosk/stand; online image unchanged. Evidence: `artifacts/terminal-only-v2-report.json`, `artifacts/terminal-only-v2-home-section-dark.png`, `artifacts/terminal-only-v2-home-terminal-390-light.png` and payment layout report. No CSS changes were necessary.

Current v2 wider regression: `npm run qa` passed 36 layouts and 24 accessibility scans, with no browser errors, failed requests or preview form submissions. Keyboard/menu/tabs/theme checks and mocked form success/failure passed. Report: `artifacts/qa-report.json`.

## Historical first composition

Date: 14 November 2026. Owner authorized the FIRST payment card only after supplying the latest two-card screenshot.

## Placement and revised reference

Home AND Product > Payments with AltPayNet > Flexible ways to complete an order. > In-store payments > Terminal integration.

The attached screenshot is the close composition reference: text on the left, countertop kiosk and separate terminal on short stands on the right. The earlier hand presenting a card proposal is superseded. NO hand/card/phone in this first image. A portrait transparent asset supports the landscape HTML card; the full screenshot is not pasted into the website. Existing heading, body, link, card grid and responsive stacking are retained. Pixel-identical generation is not claimed.

Retained body: **Connect a secure payment terminal to the kiosk checkout flow for supported card and in-store payment requirements.** Retained link: **Discuss terminal requirements**. Second QR/e-wallet CSS placeholder remains untouched. All five overview images, all five Home product images, hero, other copy and page order are unchanged.

## Generation and accuracy

Built-in ImageGen, not CLI fallback. References: attached owner payment screenshot (composition only); existing `assets/hero-kiosk-transparent-v3.webp` (device materials/identity, without decorative icons or tall floor stand); ORIGINAL `assets/ez-kyosk-lockup.png` (logo). The three recent images were included together. No header screenshot; original files untouched.

Photorealistic charcoal/silver countertop portrait kiosk left within the device group, smaller terminal on separate stand to its right. Both bases visible. Genuine transparent surroundings and space between devices. Original-reference cyan/light logos directly on dark screen header and pedestal, no white plates. Blue/white/cyan generic menu: Coffee PHP 100, Sandwich PHP 150, Cookie PHP 50, one each, total PHP 300. Terminal repeats PHP 300 / Tap card, not Paid/Approved.

Illustrative device/menu concept, not an actual software capture, verified SUNMI/AltPayNet hardware model, real transaction or payment-success evidence. No original standalone provider-logo assets are available in this repository; terminal remains neutral rather than inventing AltPayNet/bank/network marks. Existing owner-confirmed integration wording remains in HTML. No hand, payment card, phone, QR, floating icon, colored haze or opaque background.

## Saved assets and encoding

Original PNG: 1086 x 1448, retained at `C:/Users/galan/.codex/generated_images/01a1c0d8-c8e5-7a93-9967-fb113f664c04/exec-0284f8eb-5a3c-4dc3-bd4d-33174be8b42a.png`.

| File inside public/assets/images | Dimensions | Bytes |
| --- | --- | --- |
| payment-terminal-v1-360.webp | 360 x 480 | 39,240 |
| payment-terminal-v1-720.webp | 720 x 960 | 100,218 |
| payment-terminal-v1-1080.webp | 1080 x 1440 | 174,592 |

New deterministic `scripts/prepare-payment-image.mjs`: 3:4 transparent source, no crop/enlargement, versioned filenames, refuses overwrite; WebP quality 88, alpha quality 100, effort 6, smart subsampling. Only responsive resizing/encoding, not drawing or editing artwork. Alpha is retained: approximately 30% fully transparent surroundings; device interiors largely alpha 252-254 in the original generator output. Static checks require genuinely transparent pixels and near-opaque device detail rather than incorrectly demanding alpha 255 everywhere.

Shared PaymentShowcase uses base-safe src/srcset, explicit dimensions, lazy/async loading and illustrative alt. Scoped frame removes the old radial haze and contains the full image without stretching. Image sits right of copy above 1180px; existing smaller-screen stacked layout remains. No new dependency or runtime JavaScript.

Historical spacing correction, 14 November: the owner first requested vertical centering with equal 32px top/bottom padding. That correction passed build/static verification, 32 targeted checks and 8 accessibility scans (`payment-terminal-centered` artifacts). The later owner request supersedes the breathing-room rule: make BOTH cards compact with zero added image top/bottom padding. See [PAYMENT_CARD_LAYOUT.md](PAYMENT_CARD_LAYOUT.md) for current layout and checks. Neither original payment image is regenerated or changed.

## Verification

Build/static verification and targeted browser checks passed: 32 responsive/theme checks across Home/Product, six widths and high-density phone/desktop variants; 8 payment-section accessibility scans, zero violations/errors. Checks cover copy/links, image sources/decoding/ratio/containment, no overflow or backdrop, keyboard link focus and unchanged second placeholder. Screenshots reviewed on phone and desktop in both themes and on Product.

Full-site regression passed 48 responsive route checks and 32 light/dark accessibility scans with zero violations, browser errors or failed requests. Navigation, theme persistence, existing product tabs/platform disclosures/FAQs and mocked form success/failure passed. No real inquiry was sent. Reports: ignored `artifacts/payment-terminal-report.json` and `artifacts/qa-report.json`; reviewed screenshot family `artifacts/payment-terminal-{home,product}-{390,1440}-{light,dark}.png` plus desktop section captures.

## Exact next card: QR and e-wallet checkout (proposal only)

Historical handoff: owner subsequently supplied an exact PNG and explicitly requested unchanged integration rather than generation. The proposal below is superseded by [PAYMENT_ONLINE_ASSET.md](PAYMENT_ONLINE_ASSET.md). Original terminal artwork and centering remain unchanged.

- Same shared Home/Product section, second card: **Online payments > QR and e-wallet checkout**.
- Keep existing description: **Let customers use supported QR, GCash, Maya, card, and e-wallet payment paths from a mobile device.** Keep **Discuss online payments** link.
- Match the supplied screenshot's SECOND image: realistic cropped hand gripping lower/right edges of a slightly angled black portrait smartphone, visible fingers with natural anatomy, no face/full person.
- Place phone/hand on right of existing HTML copy at desktop. White screen with original Ez Kyosk logo, **Pay with AltPayNet** text, large illustrative NON-TRANSACTION QR cue inside subtle cyan corner marks, and small **GCash**, **Maya**, **Card** labels.
- Only original supplied provider marks if available; otherwise plain labels, not generated imitation logos. No actual payment URL, personal details, card/account numbers, balance, transaction ID, Paid/Approved state or success claim. QR is a visual cue, not a working checkout.
- Transparent surroundings, realistic glass/skin/materials, soft studio light, blue/white/cyan accents, no colored haze. No kiosk/terminal or floating decorations.
- Proposed assets: `public/assets/images/payment-online-v1-{360,720,1080}.webp`, portrait 3:4 cutout family.
- Replace only second payment artwork after authorization, preserve first finished image, both card texts/links and responsive behavior. Shared component affects BOTH Home and Product.
- NOT generated or integrated now. Continue one card at a time; every completion report gives exact next-card details.

## Modified files

PaymentShowcase first artwork; two scoped CSS rules; three WebPs; new resize/encoding and targeted QA scripts; existing build/full-site checks; this record and current roadmap/visual/iteration/brand/prompt-status docs. Previous Customers next-card proposal labeled superseded.

## Exact built-in ImageGen prompt

```text
Use case: product-mockup.
Create ONE premium photorealistic raster asset for the FIRST payment card of the Ez Kyosk website, not a whole website or screenshot. PORTRAIT 3:4 canvas, ideally 1200 x 1600 or larger. GENUINE TRANSPARENT background.
References, supplied as the three recent images: the owner's wide screenshot of two payment cards is the COMPOSITION reference, especially its LEFT card's kiosk plus terminal. The transparent tall kiosk is our EXISTING DEVICE / MATERIAL / identity reference, not an instruction to copy its decorative orbit icons. The original transparent Ez Kyosk full lockup is the SOLE LOGO identity reference. This is new original asset generation with references, not repainting the entire reference screenshot.
Composition: closely follow the LEFT payment card's device arrangement: one charcoal/silver portrait self-ordering touchscreen on a SHORT countertop pedestal/base, modest three-quarter perspective with the silver right edge visible, angled slightly like the reference. To its RIGHT, a separate compact charcoal payment terminal on a short vertical stand. Both bases grounded at the same baseline. The terminal reaches about the lower half to two-thirds of the kiosk screen and does not cover the menu. Kiosk taller and dominant, terminal smaller and clearly separate. Full device silhouettes and bases visible with small clean margins. This asset will be placed on the RIGHT side of a real HTML card; do NOT include the card's left heading, description or buttons, any card outline, background, website tabs or second phone card.
Use our kiosk family's realistic brushed silver housing, black bevel, glass display, dark charcoal pedestal, original Ez Kyosk logo directly on BOTH dark screen header and pedestal with cyan/light contrast. No white backing plate or logo sticker. Faithful kiosk/cart/orbit logo symbol with exact mixed case Ez Kyosk. Countertop proportions of screenshot, not the tall floor pedestal of the hardware reference.
Screen: original GENERIC illustrative cafe menu in BLUE and WHITE with subtle CYAN, navy type. Header logo, title "Menu", photographic Coffee / Sandwich / Cookie tiles, clear prices "₱100", "₱150", "₱50" respectively. Compact order review, one of each, total "₱300", blue bottom action "Pay & Order". Generous clean interface; no unrelated dashboard, no LIVE badge.
Terminal: plausible contactless terminal, glass upper screen, tactile numeric keypad with colored function keys, short stand and stable base as in screenshot. Screen is neutral, NO provider/bank/network logo. Exact small text "₱300" and "Tap card", generic contactless symbol on reader top. No payment success or approval. Do not copy AltPayNet graphics from screenshot or Visa/Mastercard/GCash/Maya graphics from the hardware reference, because no original provider assets were supplied.
Lighting: realistic premium soft daylight studio product photography, matte charcoal, brushed silver, controlled glass highlights, clean precise edges; only subtle tight contact shadow with soft alpha. Blue/white/cyan UI aligned with our website; no green/gold themed UI, neon, clouds or colored haze.
ABSOLUTE exclusions: NO hand, person, phone, physical payment card, QR, floating decorative icons, orbit rings, terminal approval, financial results, invented provider marks, white logo fills, opaque background rectangle, baked checkerboard, watermark or marketing copy. Output only the two-device cutout, genuinely transparent around and between devices.
```
