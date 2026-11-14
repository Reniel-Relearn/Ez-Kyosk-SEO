# Configurable extensions platform card

Date: 14 November 2026. Owner authorized the fifth card after reviewing its written proposal.

## Placement and scope

Home > One connected platform > From the first tap to the next task. > fifth and final card, **Configurable extensions**, immediately after Inventory and order tracking.

The existing `PlatformImageCard.astro` supplies the edge-to-edge 4:3 upper image, removes visible 05, retains one heading below, and exposes the existing description through a native plus/minus disclosure. The description is unchanged, present in initial HTML, and collapsed by default: "Scope reports, customers, loyalty, promotions, and other needs around your operation."

Cards 1-4, their images and layouts, the hero, other sections/pages, page order, and all other copy are unchanged. All five cards in this overview group now share the approved layout; imagery for other groups and the four-step journey remain pending. No dependency or runtime JavaScript is added.

## Visual and accuracy boundary

One slim charcoal/silver laptop and three physical matte tiles with report/document, customer/profile, and settings/sliders symbols. The tiles are a conceptual visual metaphor for configurable tools, not literal supplied hardware modules. The existing wording scopes extensions around the client's operation; this image adds no included-feature guarantee.

Created with the built-in ImageGen tool, not CLI fallback. The POS image supplies only photographic art direction: neutral cool-gray/blue background, clean counter, soft daylight, tactile materials, and grounded shadows. The ORIGINAL `assets/ez-kyosk-lockup.png` supplies identity, never a header screenshot. Original logo/icon files are untouched. The laptop's dark branded idle screen has cyan/light logo lettering directly on the glass, with no white backing panel. This is illustrative product imagery, not a verified software screenshot or exact supplied hardware.

No dashboard, sales figures, customer records, loyalty balances, payment data, provider marks, or detailed software controls are invented. Detailed interface depictions require approved real references. The studio background stays opaque; logo backing-panel removal does not make the laptop transparent.

## Saved assets

Paths are inside `public/assets/images/`. `scripts/prepare-platform-card.mjs` only resizes/encodes, WebP quality 86 / effort 6, without cropping, enlargement, or overwriting prior assets.

| File | Dimensions | Bytes |
| --- | --- | --- |
| platform-configurable-extensions-v1-320.webp | 320 x 240 | 9,128 |
| platform-configurable-extensions-v1-640.webp | 640 x 480 | 25,044 |
| platform-configurable-extensions-v1-1280.webp | 1280 x 960 | 72,202 |

Original generated PNG: 1448 x 1086, retained at `C:/Users/galan/.codex/generated_images/01a1c0d8-c8e5-7a93-9967-fb113f664c04/exec-05902198-319b-4132-92ea-fb5d5ecbc7b3.png`. All final website assets are saved in the repository. Integration uses base-safe responsive sources, lazy loading, asynchronous decoding, descriptive illustrative alt text, and explicit dimensions.

## Verification

Production build and static verification passed, including all five headings/descriptions in initial HTML, disclosures collapsed by default, and all 15 responsive image files at their intended dimensions. Existing metadata, base-path handling, transparent hero, and review-only indexing controls remain intact.

The five-card browser suite passed 160 closed/open states across six viewport widths and high-density phone/desktop variants, plus 40 section accessibility scans with zero violations. Checks cover edge-to-edge 4:3 geometry, heading placement, 44px controls, visible focus, Enter/Space and pointer behavior, responsive sources, zero remaining overview numbers/placeholders, unchanged first four cards, and operation without JavaScript. Mobile/desktop light/dark closed/open screenshots were visually inspected.

Full-site regression passed 48 responsive route checks and 32 light/dark accessibility scans, with zero violations, browser errors, or failed requests. Navigation, theme persistence, product panels, FAQs, and mocked form success/failure behavior passed. No real inquiry was sent.

## Files changed

- `src/pages/index.astro`: fifth-card image metadata only; existing text/other sections retained.
- Three responsive WebPs above.
- `scripts/qa-platform-card.mjs`, `scripts/qa.mjs`, `scripts/verify-build.mjs`: extend existing checks to all five cards, zero placeholders, and the new responsive sources/retained copy.
- This asset record and current visual/iteration/project/brand documentation; the fourth-card record is labeled historical to avoid outdated placeholder status.

## Exact built-in ImageGen prompt

```text
Use case: product-mockup.
Asset type: original ultra-photorealistic website overview card for Ez Kyosk, "Configurable extensions", landscape 4:3.
Input images: Image 1 is ONLY the photographic art-direction reference from the POS card. Match its neutral cool-gray/blue studio backdrop, clean gray counter, soft daylight, realistic matte charcoal/silver materials and gentle grounded shadows. Do NOT reproduce its desktop POS monitor, receipt printer or composition. Image 2 is the ORIGINAL transparent assets/ez-kyosk-lockup.png identity reference, not a header screenshot.
Primary request: create one restrained premium product photograph suggesting configurable business tools. Show one slim charcoal/silver laptop with its keyboard clearly visible and three small interchangeable physical matte tiles grouped neatly beside it in the foreground. Each tile has one simple etched symbol: a document/report outline, a customer/profile silhouette, and settings/sliders respectively. These tiles are a visual metaphor, NOT literal hardware modules supplied with the product.
Composition/framing: modest three-quarter laptop view, screen visible and keyboard unmistakably that of a laptop. All four objects are grounded on the counter, large and fully visible, centrally crop-safe, recognizable at small website card size. Keep the three tiles close enough to read as a coherent group, without clutter or excessive empty space. Landscape 4:3 canvas.
Laptop screen: clean dark branded IDLE display containing only the original full Ez Kyosk lockup. Cyan/turquoise kiosk/cart/orbit symbol and "Ez", light/white "Kyosk" lettering for contrast, exact normally readable mixed case "Ez Kyosk". Faithfully reference Image 2; NO white/light backing badge, sticker, rectangle, fill, outline or glow behind the logo.
Accuracy boundary: this is an illustrative conceptual composition, not an actual software screenshot or a promise of included extensions/hardware. Do NOT invent dashboards, sales figures, charts, customer records, loyalty balances, promotions, statistics or software interface controls. The etched physical tile symbols are conceptual marks, not a fabricated UI.
Style/medium: premium photorealistic product photography, tactile matte charcoal and brushed silver, convincing glass and restrained reflections, believable keyboard and hinge geometry, physically plausible perspective. Same soft cool-gray/blue lighting as the existing card family, with restrained blue/cyan accents. Opaque studio background.
Avoid: kiosk, desktop POS workstation, receipt printer, payment terminal, smartphone, bank cards, stock containers, packaging, extra screens, people/hands, floating graphics, holograms, arrows, neon, promotional labels, third-party brands, watermark, glossy toy-like 3D artwork, busy dashboard collage or extra props.
Output: ONE polished original 4:3 raster image for platform card 5 only. Website heading and description remain HTML below the image.
```
