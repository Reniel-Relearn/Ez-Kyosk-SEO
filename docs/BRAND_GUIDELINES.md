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

- Active hero: `assets/hero-kiosk-branded-v2.webp`, used by `HeroProduct.astro` and optimized by Astro at the existing responsive widths. Its aspect ratio and cutout presentation are retained.
- Active overview card: `public/assets/images/platform-self-ordering-v2-{320,640,1280}.webp`, replacing the v1 URLs without altering the card's copy or structure.
- The old v1 WebPs are retained in `assets/archive/` so they are recoverable but no longer deployed as public files. The original supplied hero/concept images remain untouched as historical references, not active imports.
- Existing third-party payment-provider logos are not Ez Kyosk logos and are not replaced.

## Audit boundary and regression protection

Scanned application source, public assets, metadata/schema, CSS, build/browser checks, current project documentation, and supplied logo/icon/product artwork. Untracked owner PDF/DOCX references, Git history, ignored build/test artifacts, external demo application content, and archived exact generation prompts are not rewritten. Historical prompts are explicitly labeled and do not override this policy.

Build verification checks canonical spelling in generated HTML, shared-logo references, absence of superseded artwork references, and availability of favicon/social assets. Browser QA checks rendered spelling (including CSS effects), shared logo sources/alt text, layout, interaction, and accessibility across all routes.

## Exact raster-edit prompts

### Hero

```text
Precise branding correction only. Image 1 is the existing kiosk artwork to edit. Image 2 is the ORIGINAL final logo file assets/ez-kyosk-lockup.png, not a screenshot. Image 3 is the ORIGINAL matching kiosk icon assets/ez_kyosk_icon.png, supplied to clarify the logo symbol. Use the complete original logo from Image 2 as the sole Ez Kyosk identity: turquoise kiosk/cart/orbit symbol, turquoise "Ez", navy "Kyosk". Correct BOTH old gold double-slash / uppercase wordmarks: one in the touchscreen header and one on the pedestal. Reproduce the supplied logo faithfully, including the lowercase z. Put it on small light-neutral brand plates in those existing branding areas so its original colors remain legible. Do not invent a logo, simplify the icon, use gold slashes, or substitute plain lettering. Change only those two branding areas. Preserve the full existing kiosk, its exact proportions and geometry, cafe menu, all food pictures, all prices and other screen text, payment terminal and payment-provider marks, four surrounding icons, framing, portrait 2:3 canvas, lighting and transparent alpha cutout. No new props, watermark, layout changes or new artwork.
```

### Self-ordering overview card

```text
Precise branding correction only. Image 1 is the existing landscape self-ordering card photograph to edit. Image 2 is the ORIGINAL approved logo assets/ez-kyosk-lockup.png, not a header screenshot. Image 3 is the ORIGINAL matching icon assets/ez_kyosk_icon.png. Replace BOTH obsolete gold double-slash / uppercase wordmarks in Image 1, on the touchscreen header AND the pedestal, with the complete ORIGINAL turquoise kiosk/cart/orbit symbol + turquoise "Ez" + navy "Kyosk" logo from Image 2. Faithfully retain its design and mixed-case lettering, especially lowercase z. Place the original-color logo on small white/light-neutral brand plates within the existing branding zones so it is readable. No improvised new logo, gold slashes, all-uppercase EZ, or text-only substitution. Change only the two branding areas. Keep the same landscape 4:3 canvas, studio background, lighting, device size, camera angle, geometry and menu, all food thumbnails, prices and other screen labels. Preserve the overall image; no new objects, captions, watermark or composition changes.
```
