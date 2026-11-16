# First-card revision v3: attached payment terminal

Date: 16 November 2026.

## Scope and current state

Owner approved adding the physical side-mounted card/contactless terminal shown in assets/hero-kiosk-transparent-v3.webp to the first human-interaction image. This supersedes the initial scene's no-terminal constraint, but does not change her action from selecting a menu item to paying. It does not authorize payment software/backend changes.

Owner approved the actual v3 image. It is now integrated LOCALLY into the first card, with the existing full 3:4 frame, title, description and disclosure retained. V1/v2 and the hero source are preserved. No push/deployment or new image generation in this integration pass. Other four cards unchanged. Second-card generation is paused while the owner reviews the business-facing structure in [CONNECTED_PLATFORM_BUSINESS_REVIEW.md](CONNECTED_PLATFORM_BUSINESS_REVIEW.md).

## References and provenance

- Edit target: original approved v2 PNG, C:/Users/galan/.codex/generated_images/01a1c0d8-c8e5-7a93-9967-fb113f664c04/exec-873d2538-2827-4cae-90d7-4175e7eeeafb.png.
- Hardware reference only: assets/hero-kiosk-transparent-v3.webp. Floating icons, orbit rings, decorative glow and background were excluded.
- Generated v3 source retained unchanged: C:/Users/galan/.codex/generated_images/01a1c0d8-c8e5-7a93-9967-fb113f664c04/exec-552902e6-7ff3-44d1-90fe-0f7e59a76c70.png.
- Generated provider lettering/device details are illustrative reference-based renderings, not certification of an exact terminal model or pixel-identical provider artwork. No new provider integration or successful payment is claimed.

## Saved responsive review assets

public/assets/images/platform-self-ordering-human-v3-{270,540,1080}.webp. Prepared with existing scripts/prepare-platform-portrait.mjs, WebP quality 88, resize/encode only, no crop, no upscaling or deterministic artwork manipulation. Existing v1/v2 and hero retained.

## Visual review

The black terminal has a contactless area, small provider-mark display, physical keypad with red/yellow/green keys and a visible supporting bracket attached on the right side of the kiosk. It occupies the gap above her reaching hand. Face, fingertip and selected menu item remain unobstructed. Kiosk-left/customer-right arrangement, cream blouse/navy trousers, candid posture, menu, dark-surface logos without white backing plates, photographic cafe and portrait framing are visually retained. Inspected at full resolution and small card size; no obvious floating mount, arm intersection, extra limb or mirrored lettering found. This is visual inspection, not a pixel-identical-preservation guarantee or verified client photograph.

Original preview-only pass did not rerun build/browser tests. Subsequent approved local integration updates the first-card responsive references and descriptive alt to mention the attached terminal, plus test expectations; fresh verification is recorded below. Next is the business-facing structure review, not another image generation. Existing headings and descriptions have not been changed to the proposed taxonomy.

## Approved local integration verification

BASE_PATH=/Ez-Kyosk-SEO production build and static verification passed. Targeted platform suite passed 160 card states and 40 section accessibility scans over 320, 390, 768, 1024, 1440 and 1920px plus high-density phone/desktop variants. Natural 3:4 first-card and unchanged 4:3 remaining-card proportions, loaded v3 srcset, uncropped full-width framing, original titles/descriptions, pointer/Enter/Space controls, no-JavaScript disclosure operation and no horizontal overflow were checked. No browser errors or failed responses reported. Screenshots/report: ignored artifacts/platform-human-v3-*. No full-site browser rerun claimed in this image-only replacement; prior v2 full-site results are historical. Hero, payment section and remaining artworks unchanged.

## Exact built-in edit prompt (generation provenance)

```text
Use case: precise-object-edit / compositing.
Edit Image 1 ONLY by adding ONE physically attached payment terminal. Preserve the rest of Image 1 as closely as possible.
Input roles: Image 1 is the edit target, our approved photorealistic portrait of an adult Filipina customer on the RIGHT using a kiosk on the LEFT. Image 2 is solely the reference for the compact black side-mounted payment terminal and its mounting bracket, NOT a replacement scene, UI, background or decorative reference.
Required addition: mount the same recognizable black card/contactless terminal from Image 2 on the RIGHT SIDE of the kiosk screen, facing the customer, with its contactless area above a small display, physical numeric keypad and red/yellow/green function keys, and a realistic dark support bracket visibly connecting it to the kiosk housing. Terminal proportion comparable to the hero hardware, not a second full-size screen or separate freestanding pedestal. Put it in the available gap to the right of the screen, above the customer's reaching hand if needed. It must not cover her face, fingertip, wrist or the menu item she is touching. Maintain plausible accessible reach and device orientation.
Match the existing scene perspective, daylight, matte black plastic, glass reflections, contact shadows and depth/occlusion. The bracket should look structurally attached, not floating, fused into her arm or hanging by itself. Display/marks should follow only the provided terminal reference; no invented provider, merchant details, bank numbers, payment amount, success status or AltPayNet logo.
Critical invariants: SAME customer, same cream blouse and navy trousers, same hair and candid screen-facing back/side pose, right index fingertip touching SAME coffee menu item, left arm resting. SAME left kiosk/right customer arrangement; SAME kiosk shape, menu, screen content, original-reference normal-reading Ez Kyosk header and pedestal logos directly on dark surfaces with NO white backing panels; SAME soft cafe, lighting, camera, framing and photo-realistic texture. Do not change her activity to paying, no card or phone in her hand. Preserve face, limb anatomy and finger contact.
Preserve PORTRAIT 3:4 framing and resolution at least 1080px wide; opaque photographic background, no crop or added border. No mirror of text or logo.
Do not copy any floating shopping-cart/QR/dining/payment icons, orbit rings, glow, yellow decorative accents or transparent cutout background from Image 2. Add only the physical attached terminal and bracket with natural local shadows. No extra people, objects, headings, website controls or watermarks. This is an illustrative scene, not an actual customer installation or live software capture.
Return ONE revised portrait preview.
```
