# Ez Kyosk brand guidelines

Authoritative update: 13 November 2026. The owner requested consistent naming and the original assets, not a screenshot of the header.

## Name

Use **Ez Kyosk** in visible website text, titles, descriptions, schema, social metadata, alt text, accessible labels, and current documentation. Do not uppercase the brand through CSS. This owner-authorized brand-casing correction also applies to the otherwise locked hero CTA/caption; no other hero wording or page arrangement is changed.

Do not rename repository URLs, case-sensitive external demo paths, the Pages base path, asset filenames, package identifiers, or the existing theme-storage key merely to match prose casing. Those are technical identifiers, not display names.

## Original sources

- Full logo: `assets/ez-kyosk-lockup.png`.
- Matching icon: `assets/ez_kyosk_icon.png`, used for the favicon.
- Supplied wordmark/orbit files remain original reference assets; use the full master lockup for active website logo placements rather than rebuilding it from separate pieces.
- No header screenshot is a source. Original supplied logo/icon files are not overwritten.

`src/lib/brand.ts` defines the canonical name and original logo. `BrandMark.astro` renders the original asset; `BrandLogo.astro` adds the home link. Header, footer, About, payment mockups, and Solutions share the same mark. Header/footer retain the existing dark-background contrast treatment, without introducing another logo design. Other original-color placements sit on light surfaces.

`scripts/prepare-brand-assets.mjs` creates `public/brand-social.png` (1200 x 630, centered original logo) and `public/favicon.png` (64 x 64, matching original icon). These are deterministic resize/layout derivatives, not AI-generated replacements for the logo.

## Kiosk artwork

Both existing gold-wordmark images required raster branding corrections. The built-in ImageGen tool used the original logo and icon as references, never a header screenshot. The resulting device imagery is illustrative, not a verified interface screenshot or pixel-identical embedding of the original source logo.

- Active hero: `assets/hero-kiosk-transparent-v3.webp`, with genuine transparent surroundings and no white logo backing panels. Dark device material shows behind the logos; light lettering supplies contrast without a white plate. V2 is rejected and not imported. See [HERO_TRANSPARENCY_FIX.md](HERO_TRANSPARENCY_FIX.md) for the two-step correction and decoded-pixel checks.
- Active overview card: `public/assets/images/platform-self-ordering-v3-{320,640,1280}.webp`. The 14 November correction removes both white logo backing panels and reverses the kiosk's physical three-quarter view without mirroring its lettering. Dark device material remains behind the cyan/light logos. Card copy and structure are unchanged. See [PLATFORM_SELF_ORDERING_ASSET.md](PLATFORM_SELF_ORDERING_ASSET.md). Older v2 WebPs are retained for recovery, not referenced by the page.
- The old v1 WebPs are retained in `assets/archive/` so they are recoverable but no longer deployed as public files. The original supplied hero/concept images remain untouched as historical references, not active imports.
- The second overview card uses `public/assets/images/platform-pos-checkout-v1-{320,640,1280}.webp`, generated against the original logo and first-card art direction. Its dark branded idle screen has no white logo backing plate; no detailed POS UI is invented. See [PLATFORM_POS_CHECKOUT_ASSET.md](PLATFORM_POS_CHECKOUT_ASSET.md).
- The third overview card uses `public/assets/images/platform-payments-v1-{320,640,1280}.webp`, with the original-reference cyan/light logo directly on a dark phone screen, no logo backing panel, and a separate schematic QR cue. No unverified provider marks or actual payment data are included. See [PLATFORM_PAYMENTS_ASSET.md](PLATFORM_PAYMENTS_ASSET.md).
- The fourth overview card uses `public/assets/images/platform-inventory-tracking-v1-{320,640,1280}.webp`, showing stock and a prepared-order package beside a tablet. Its dark idle screen has the original-reference cyan/light logo without a backing plate; no stock/status UI is invented. See [PLATFORM_INVENTORY_TRACKING_ASSET.md](PLATFORM_INVENTORY_TRACKING_ASSET.md).
- The fifth overview card uses `public/assets/images/platform-configurable-extensions-v1-{320,640,1280}.webp`, showing a laptop and conceptual report/customer/settings tiles. Its idle screen has the original-reference cyan/light logo directly on dark glass without a white backing plate; no detailed software UI is invented. See [PLATFORM_CONFIGURABLE_EXTENSIONS_ASSET.md](PLATFORM_CONFIGURABLE_EXTENSIONS_ASSET.md).
- Existing third-party payment-provider logos are not Ez Kyosk logos and are not replaced.
- Artwork-specific owner override: use `assets/Hand Holding AltPayNet Payment Phone and Cards.png` EXACTLY as supplied for the second shared Home/Product payment card. Do not replace its embedded cart-style wordmark, provider marks, QR, colors or card artwork with newly generated or edited graphics. This exception does not change the original master logo used by the website elsewhere. The source and built PNG are byte-identical; no claim that the embedded payment interface/QR is verified as live. See [PAYMENT_ONLINE_ASSET.md](PAYMENT_ONLINE_ASSET.md).
- First shared Home/Product payment card uses `public/assets/images/payment-terminal-v1-{360,720,1080}.webp`: transparent countertop kiosk/terminal cutout based on the owner's latest composition screenshot, our kiosk hardware family and original logo. Cyan/light logos sit directly on dark header/pedestal, no backing plates. Terminal has generic PHP 300 / Tap card instead of an invented AltPayNet logo; relationship wording remains HTML. This is illustrative device/menu imagery, not verified hardware/UI or proof of a transaction. See [PAYMENT_TERMINAL_ASSET.md](PAYMENT_TERMINAL_ASSET.md).
- Home's fifth product panel uses `public/assets/images/product-customers-v1-{480,960,1440}.webp`: separately authorized optional-tools concept, original-reference cyan/light logo directly on dark phone glass with no white backing plate. Guest 01 / Sample profile and Configurable labels are illustrative, not actual customer records or activated membership. See [PRODUCT_CUSTOMERS_ASSET.md](PRODUCT_CUSTOMERS_ASSET.md).
- Home's fourth product panel uses `public/assets/images/product-reports-v1-{480,960,1440}.webp`: separately authorized generic reporting concept, original-reference cyan/light logo directly on a dark laptop header without a white backing panel. Chart/table visibly say Sample data, not actual merchant results or growth evidence. See [PRODUCT_REPORTS_ASSET.md](PRODUCT_REPORTS_ASSET.md).
- Home's third product panel uses `public/assets/images/product-inventory-v1-{480,960,1440}.webp`: separately authorized generic Inventory concept, original-reference cyan/light logo directly on a dark tablet header without a white backing panel. Sample availability counts are not live inventory or verified UI. See [PRODUCT_INVENTORY_ASSET.md](PRODUCT_INVENTORY_ASSET.md).
- Home's second product panel uses `public/assets/images/product-pos-checkout-v1-{480,960,1440}.webp`: illustrative generic staff queue/checkout, with original-reference cyan/light logo directly on the dark POS header, no white backing panel. This is not verified UI or a hardware/provider claim. See [PRODUCT_POS_CHECKOUT_ASSET.md](PRODUCT_POS_CHECKOUT_ASSET.md).
- Home's first product panel uses `public/assets/images/product-self-ordering-v1-{480,960,1440}.webp`: a separately owner-authorized original generic menu/cart concept, not a screenshot of the live app. Original-reference cyan/light logos sit directly on dark screen/header and pedestal without backing plates. The original supplied identity files remain untouched. See [PRODUCT_SELF_ORDERING_ASSET.md](PRODUCT_SELF_ORDERING_ASSET.md).

## Audit boundary and regression protection

Scanned application source, public assets, metadata/schema, CSS, build/browser checks, current project documentation, and supplied logo/icon/product artwork. Untracked owner PDF/DOCX references, Git history, ignored build/test artifacts, external demo application content, and archived exact generation prompts are not rewritten. Historical prompts are explicitly labeled and do not override this policy.

Build verification checks canonical spelling in generated HTML, shared-logo references, absence of superseded artwork references, and availability of favicon/social assets. Browser QA checks rendered spelling (including CSS effects), shared logo sources/alt text, layout, interaction, and accessibility across all routes.

## Exact raster-edit prompts

Historical v2 prompts below explain the superseded output. Their white-plate instruction applies to neither current kiosk image; the owner's latest requests, [HERO_TRANSPARENCY_FIX.md](HERO_TRANSPARENCY_FIX.md), and [PLATFORM_SELF_ORDERING_ASSET.md](PLATFORM_SELF_ORDERING_ASSET.md) take precedence.

### Hero

```text
Precise branding correction only. Image 1 is the existing kiosk artwork to edit. Image 2 is the ORIGINAL final logo file assets/ez-kyosk-lockup.png, not a screenshot. Image 3 is the ORIGINAL matching kiosk icon assets/ez_kyosk_icon.png, supplied to clarify the logo symbol. Use the complete original logo from Image 2 as the sole Ez Kyosk identity: turquoise kiosk/cart/orbit symbol, turquoise "Ez", navy "Kyosk". Correct BOTH old gold double-slash / uppercase wordmarks: one in the touchscreen header and one on the pedestal. Reproduce the supplied logo faithfully, including the lowercase z. Put it on small light-neutral brand plates in those existing branding areas so its original colors remain legible. Do not invent a logo, simplify the icon, use gold slashes, or substitute plain lettering. Change only those two branding areas. Preserve the full existing kiosk, its exact proportions and geometry, cafe menu, all food pictures, all prices and other screen text, payment terminal and payment-provider marks, four surrounding icons, framing, portrait 2:3 canvas, lighting and transparent alpha cutout. No new props, watermark, layout changes or new artwork.
```

### Self-ordering overview card

```text
Precise branding correction only. Image 1 is the existing landscape self-ordering card photograph to edit. Image 2 is the ORIGINAL approved logo assets/ez-kyosk-lockup.png, not a header screenshot. Image 3 is the ORIGINAL matching icon assets/ez_kyosk_icon.png. Replace BOTH obsolete gold double-slash / uppercase wordmarks in Image 1, on the touchscreen header AND the pedestal, with the complete ORIGINAL turquoise kiosk/cart/orbit symbol + turquoise "Ez" + navy "Kyosk" logo from Image 2. Faithfully retain its design and mixed-case lettering, especially lowercase z. Place the original-color logo on small white/light-neutral brand plates within the existing branding zones so it is readable. No improvised new logo, gold slashes, all-uppercase EZ, or text-only substitution. Change only the two branding areas. Keep the same landscape 4:3 canvas, studio background, lighting, device size, camera angle, geometry and menu, all food thumbnails, prices and other screen labels. Preserve the overall image; no new objects, captions, watermark or composition changes.
```
