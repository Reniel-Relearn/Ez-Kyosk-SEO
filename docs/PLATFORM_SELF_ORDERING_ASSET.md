# Self-ordering overview card image (current: v3)

Status: the owner's 14 November review corrections are integrated in v3: remove both logo backing panels and reverse the kiosk's three-quarter view. Owner review of the corrected sample is still pending; do not generate the remaining four overview images automatically.

## Placement and scope

Home > One connected platform > From the first tap to the next task. > card 01, Self-ordering experience. This replaces only that card's generic bar illustration. Existing hero artwork/copy, card labels/descriptions/numbers, five-card grid, remaining four visuals, product panels, payment cards, industry cards, and journey remain unchanged.

## Provenance and visual boundary

Generated with the built-in ImageGen tool, originally using owner-supplied `assets/hero-kiosk-original.png` as a kiosk-design and illustrative-menu reference. The output is AI-generated product imagery, not a verified live interface screenshot or evidence of specific hardware deployment. Do not reuse this as detailed interface documentation. V3 edits the previous v2 card using the ORIGINAL `assets/ez-kyosk-lockup.png` as the sole identity reference and the corrected hero only as a reference for dark-surface logo contrast, never a header screenshot. No hero objects are transferred into this card.

Both white logo backing panels are removed. Continuous opaque dark material remains behind the cyan-symbol/Ez and light-Kyosk lockups, without transparent holes through the hardware. The left silver edge is now visible instead of the right: the kiosk faces slightly toward the viewer's right. This is a new physical perspective, not a mirrored bitmap; words and menu controls remain readable in their normal order. Natural charcoal/silver materials and the existing opaque neutral blue-tinted studio background remain. The request concerns logo fills, not removal of the studio background. Current branding rules are in [BRAND_GUIDELINES.md](BRAND_GUIDELINES.md).

## Responsive deliverables

All paths are inside `public/assets/images/`. The 4:3 composition shows the complete touchscreen and upper pedestal without a destructive crop. WebP quality 86, effort 6; visually reviewed against the generated output. The original generated PNG remains outside the repository in the tool's generated-image storage.

| File | Dimensions | Bytes |
| --- | --- | --- |
| platform-self-ordering-v3-320.webp | 320 x 240 | 8,064 |
| platform-self-ordering-v3-640.webp | 640 x 480 | 21,694 |
| platform-self-ordering-v3-1280.webp | 1280 x 960 | 56,296 |

Integration uses base-path-safe URLs, `srcset`/`sizes`, descriptive alt text, lazy loading, asynchronous decoding, and explicit width/height to reserve space. The image is not tinted or inverted in dark mode. No additional runtime JavaScript.

`scripts/prepare-platform-ordering.mjs` performs only deterministic WebP resizing/optimization, not visual editing. The original 1448 x 1086 PNG is retained at `C:/Users/galan/.codex/generated_images/01a1c0d8-c8e5-7a93-9967-fb113f664c04/exec-24968caf-d268-4c93-aa7b-844328599f83.png`; all three final website deliverables are saved in the repository. Older v2 WebPs are retained for recovery and are no longer referenced by Home.

## Verification

V3 production build and static verification passed. Targeted browser checks passed at 320, 390, 768, 1024, 1440, and 1920px in both themes, plus high-density phone/desktop checks (16 combinations total). All five titles, the four unchanged placeholders, original card dimensions, responsive source selection, lazy loading, decoding, and benefit icons remain intact. Four platform-section accessibility scans found zero violations, with no browser errors, failed requests, or horizontal overflow. Optimized master, mobile light/dark cards, and desktop light/dark sections were visually inspected.

Full-site V3 regression: 48 responsive route checks and 32 light/dark accessibility scans passed with zero violations, browser errors, or failed requests. Keyboard navigation, theme persistence, product tabs, FAQs, sticky header, and mocked inquiry flows passed. No real form submission was sent.

## Exact built-in ImageGen edit prompt (current v3)

```text
Use case: precise-object-edit.
Asset type: first Ez Kyosk website platform overview card, landscape 4:3 photorealistic product photo.
Input images: Image 1 is the EXISTING SELF-ORDERING CARD photograph to edit, the only composition target. Image 2 is the ORIGINAL transparent logo assets/ez-kyosk-lockup.png, sole brand identity reference, not a screenshot. Image 3 is the corrected hero, ONLY a reference for dark-surface logos without white backing panels; do NOT import any of its icons, terminal, arcs or other composition elements.
Make exactly these TWO requested changes to Image 1:
1. Remove BOTH white/light rounded rectangular backing plates behind the logos in the top touchscreen header and on the pedestal. Restore continuous opaque charcoal/black device surfaces behind the logo. Apply the supplied full kiosk-symbol + "Ez Kyosk" identity directly to those surfaces, with cyan/turquoise symbol and Ez, light/white Kyosk letters for dark-surface legibility, mixed case exactly Ez Kyosk. No sticker, badge, backing fill, rectangle, outline, glow, or transparent holes through the device. Keep the ORIGINAL logo design and proportions.
2. Turn the physical kiosk to the OPPOSITE modest three-quarter view: its LEFT silver side edge must now be visible, its screen facing slightly toward the viewer's RIGHT. The current target shows the silver side on the right; reverse that camera/physical orientation. This is NOT a horizontal flip of the raster. All logos, words, product names, prices, categories and menu controls must remain normally readable left-to-right, with the same internal menu order and content. Keep the kiosk upright with plausible undistorted physical perspective.
Preserve Image 1's neutral light-gray/cool-blue studio backdrop, soft daylight, restrained photographic lighting, realistic matte charcoal and silver materials, existing café menu composition/food photos/categories/prices/order summary/button, large subject scale, centered crop-safe placement, entire screen and short upper pedestal, landscape 4:3 canvas. Keep comparable breathing room and realistic perspective without adding anything.
Avoid new props, people, payment terminals, floating icons, connector arcs, decorative effects, watermarks, external text, fake dashboards, feature claims or extra branding. Keep the studio background opaque; only the LOGO backing panels are removed, not the scene background. Produce one polished replacement for the first card only.
```

## Exact generation prompt (historical v1)

The prompt below is preserved verbatim as provenance, not current branding direction. Its older name/logo instructions are superseded by [BRAND_GUIDELINES.md](BRAND_GUIDELINES.md). Superseded v1 WebP files are retained in `assets/archive/`, not deployed. Historical v2 branding-edit prompts are recorded in the brand guidelines; the current v3 edit prompt is above.

```text
Use case: product-mockup.
Asset type: premium production-ready website card image, landscape 4:3 composition, for EZ Kyosk's "Self-ordering experience" overview card.
Primary request: create an original ultra-photorealistic product photograph of the self-ordering kiosk in Image 1, focusing on browsing a cafe menu on its touchscreen.
Image 1 role: owner-supplied physical kiosk and existing illustrative menu artwork reference, not an edit target and not a verified live software screenshot.
Scene: restrained neutral light-gray studio setting with soft daylight and a very subtle cool-blue background tint. No busy venue, people, counter props, or other devices.
Subject: the SAME charcoal-black upright kiosk with rounded black touchscreen bezel, silver side edge, narrow dark pedestal and the existing small gold EZ Kyosk brand details. Preserve its recognizable design and plausible physical proportions. Show the entire touchscreen and a short upper section of its pedestal, at a modest three-quarter angle. Keep the device large, fully within a central crop-safe region, with comfortable clear space around it. The full floor/base need not be shown.
Screen: retain the reference's cafe-menu visual structure and recognizable coffee/pastry thumbnails. No new dashboards, invented analytics, feature claims, payment confirmation, performance figures, or fabricated detailed software views. This is illustrative product imagery; no explanatory labels or promotional copy outside the device.
Style: convincing real product photography, tactile matte-metal and glass, subtle realistic reflections, clean perspective and controlled soft shadows, professional restrained composition. Not a cartoon, icon, vector, glossy 3D advertisement, or screenshot collage.
Website context: minimalist blue/white light theme and blue/black/white dark theme, Plus Jakarta Sans typography; headings remain live HTML and are not baked into image. Blue/cyan should be only a quiet environmental cue; preserve the source kiosk's gold branding rather than recoloring it.
Avoid: the reference's floating shopping/QR/payment/table icons, companion payment terminal, glowing orbit, lightning, neon, watermark, captions, extra logos, people/hands, tiny invented words, or clutter.
Output: one high-quality landscape 4:3 raster image with opaque background, optimized later for responsive website use.
```

