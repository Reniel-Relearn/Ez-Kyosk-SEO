# Self-Ordering Experience: human-interaction previews v1 and v2

Date: 16 November 2026.

Latest status: owner approved the actual terminal revision v3 and it is integrated LOCALLY, superseding v2 as the page import. This overrides the original prompt's no-terminal constraint without changing the customer's ordering action. No deployment or new generation in this pass. See [PLATFORM_SELF_ORDERING_TERMINAL_REVISION.md](PLATFORM_SELF_ORDERING_TERMINAL_REVISION.md). Second-card generation is paused for the [business-facing section review](CONNECTED_PLATFORM_BUSINESS_REVIEW.md). The v2 integration record below is historical.

Prior integration status: approved v2 was integrated locally with the full 3:4 image and unchanged text/disclosure. V3 now replaces only those image references and alt. V1/v2 and preview-stage notes below are retained as provenance.

## Scope and status

Location: Home > One connected platform > Self-Ordering Experience. Integration uses platform-self-ordering-human-v2 responsive WebPs, base-safe URLs, width/height 540/720, lazy loading, asynchronous decoding and descriptive illustrative alt text. Shared component dimensions are configurable and image framing follows intrinsic proportions. Other four cards retain 640/480 attributes, their existing assets and 4:3 framing. No CSS mirroring, cropping, new runtime JavaScript or dependency. The deployed site remains unchanged until a separate publication step.

## Local integration verification

Build and static verification passed with BASE_PATH=/Ez-Kyosk-SEO. Targeted platform suite passed 160 closed/open card states across six widths (320, 390, 768, 1024, 1440, 1920) and high-density phone/desktop variants, 40 section accessibility scans, Enter/Space/pointer toggling and no-JavaScript disclosure operation. Checks assert natural image proportions, edge-to-edge framing, unchanged titles/descriptions, no horizontal overflow and no CSS mirroring. Full-site regression passed 48 route/viewport checks and 32 light/dark accessibility scans, with zero reported browser errors or failed requests. Desktop light and phone dark/open first-card screenshots were visually inspected. Local reports/screenshots are ignored under artifacts/platform-human-v2-* and artifacts/qa-report.json. No actual inquiry was sent. No remote publication is claimed.

## Original generation and references

Generated using the built-in ImageGen tool with two local references:

- public/assets/images/platform-self-ordering-v3-1280.webp: physical device family and menu appearance.
- assets/ez-kyosk-lockup.png: original identity reference, not a header screenshot.

Source retained unchanged at C:/Users/galan/.codex/generated_images/01a1c0d8-c8e5-7a93-9967-fb113f664c04/exec-822e6aee-ef23-4f64-b7ff-bd364a34497b.png (1086 x 1448 PNG). This is generated illustrative marketing imagery, NOT an actual customer, client installation or verified software screenshot. Generated embedded logos are raster interpretations of the reference, not guaranteed pixel-identical copies of the master; owner review includes those small details.

## Saved review assets

public/assets/images/platform-self-ordering-human-v1-{270,540,1080}.webp, at 270 x 360, 540 x 720 and 1080 x 1440 respectively. Encoding only via scripts/prepare-platform-portrait.mjs: WebP quality 88, no crop, no upscaling, no artwork edits. Source and existing v3 assets retained. Preview files are not referenced by any page.

## Review observations and next action

The preview shows one adult customer on the left, kiosk on the right, cream blouse/navy trousers, a visible right index finger at a menu item, left arm resting, softly blurred cafe, and logos directly on dark hardware without white backing panels. Visual inspection found no obvious disconnected wrist, extra limb or floating hand; this is a visual check, not a guarantee of perfect anatomy or software fidelity. Check full-resolution and small-card versions before acceptance.

Historical preview gate: review preceded integration. That gate is now satisfied for v2. Next: review the proposed second human-interaction image in [PLATFORM_POS_CHECKOUT_HUMAN_PLAN.md](PLATFORM_POS_CHECKOUT_HUMAN_PLAN.md); do not generate it without approval. Other four older images remain intact.

## Exact generation prompt

```text
Use case: photorealistic-natural.
Asset type: ONE original premium photorealistic editorial/lifestyle image for the first Ez Kyosk website platform card, Self-Ordering Experience. This is an image asset, not a screenshot of a website.
Output: PORTRAIT 3:4, high resolution at least 1080px wide, opaque photographic cafe background.
References: Image 1 is our existing approved Ez Kyosk kiosk, used for the SAME physical device family, portrait display, charcoal/silver housing, pedestal and cafe-menu visual identity. It is not a photographic background to retain and not a new standalone device render. Image 2 is the ORIGINAL full Ez Kyosk logo, the sole identity reference. No header screenshot. Generate a new original customer-interaction photograph with these references.
Scene: believable candid moment inside a clean contemporary cafe, softly out-of-focus neutral wood/counter details behind the subjects. No identifiable venue, extra people or competing brands.
Subject: ONE fictional adult Filipina cafe customer, approximately 25-35, plain cream blouse and navy trousers, natural hair and grooming, no clothing logos. Customer on LEFT, our kiosk on RIGHT, both prominent and naturally scaled. Three-quarter side view, eye-level normal-lens photographic perspective. Frame from a little above her head to approximately mid-thigh, with kiosk screen and part of pedestal visible. Keep comfortable safe margins around head, arm, fingertip and screen. The camera can see her natural three-quarter/profile expression AND the front of the screen.
Action: she looks directly at the menu, not the camera. Relaxed shoulders, a slight comfortable forward lean. Her RIGHT index finger is gently making real contact with one food/menu item around the middle of the screen. Other fingers curl naturally. Her LEFT arm rests naturally at her side. Anatomically plausible reach and elbow/wrist angles; no floating hand, intersecting wrist, extra fingers or disconnected arm. Fingertip touches the active glass, not the bezel. Do not obscure the logo or most of the menu with her hand.
Device: same recognizable charcoal housing, brushed-silver edge, portrait glass screen and plausible pedestal as Image 1. Position/angle the device naturally so customer and camera both see the screen, without inventing a different hardware design or distorted perspective. Realistic adult-to-screen scale and accessible screen reach. Original Ez Kyosk logo from Image 2 directly on dark screen header and dark pedestal, cyan/turquoise symbol and Ez with light contrasting Kyosk, exact mixed case. NO white logo backing panel, sticker or plaque.
Screen: preserve the existing cafe-menu visual language from Image 1 with food/coffee tiles; do not add new detailed prices, labels, metrics or a different invented dashboard. The human selecting a menu item is the point. Do not depict payment completion or a verified live software screen.
Photography: ultra-realistic skin pores, subtle natural expression, stray hair, believable finger joints/nails, natural fabric folds, consistent contact shadows and realistic restrained glass reflections. Crisp customer, fingertip and screen edges; gently blurred background. Soft side daylight, neutral white balance, understated blue/cyan brand details with natural cafe materials. No plastic-looking skin/hardware, excessive retouching, exaggerated grin or theatrical stock-photo pose.
Exclude: phone, payment card, terminal, receipt, queue, extra people, floating icons, decorative orbit rings, enlarged UI panel, marketing headlines, embedded card title, website controls, artificial speed/performance claims, watermark. Not a real client installation, testimonial or actual customer photo.
Generate only this ONE original portrait photograph-style raster image.
```

## Revision v2: reversed arrangement and candid posture

Owner approved these two revisions on 16 November 2026. Built-in ImageGen edited the original generated PNG; the original assets/ez-kyosk-lockup.png was the supporting identity reference. No mechanical horizontal pixel flip was used, so the menu and logos are not reversed.

Source retained unchanged: C:/Users/galan/.codex/generated_images/01a1c0d8-c8e5-7a93-9967-fb113f664c04/exec-873d2538-2827-4cae-90d7-4175e7eeeafb.png.

Saved optimized previews: public/assets/images/platform-self-ordering-human-v2-{270,540,1080}.webp (270 x 360, 540 x 720, 1080 x 1440). Same portrait preparation script, no crop or upscaling. V1 remains available for comparison.

Visual inspection: kiosk on the LEFT, customer on the RIGHT with back shoulder more visible, reduced face visibility and head/body directed toward the menu; right index fingertip at a menu item, left arm resting. Screen and contact point remain readable as an interaction at small size. No obvious disconnected limb or extra finger detected. Lettering reads normally; logos have no white backing panels. Generated logos remain raster interpretations, not guaranteed master-identical reproductions. Pose and arrangement changed, so background/perspective were recomposed rather than promised pixel-identical.

Preview-stage status (historical): v2 was saved for review without integration. The owner has since approved it; see current local integration status above. V1 is not imported, and other four artworks remain unchanged. No new image was generated during integration.

### Exact v2 edit prompt

```text
Use case: compositing; photorealistic candid lifestyle photograph.
Asset: targeted revision of the first Ez Kyosk Self-Ordering Experience card, PORTRAIT 3:4, at least 1080px wide, opaque photographic cafe background.
Input image 1 is the EDIT TARGET: preserve the same fictional adult Filipina customer, hair, cream blouse, navy trousers, same kiosk hardware family, cafe context, soft natural daylight, realistic skin/fabric/material textures and high photographic detail. Input image 2 is the original logo identity reference only.
Make ONLY these two approved compositional/pose revisions:
1. Reverse the left/right arrangement: the KIOSK now occupies the LEFT side, customer the RIGHT. Recompose the scene instead of mechanically mirroring all pixels. ALL menu lettering, logos, icons and UI remain correctly oriented/readable, not backwards. Maintain the same charcoal/silver portrait display and pedestal, screen facing sufficiently toward the camera and customer. No white logo backing panels. Branding must read "Ez Kyosk" with the original kiosk/cart/orbit symbol and cyan/light contrast on dark hardware, never reversed.
2. Make her convincingly candid and engaged in ordering, not presenting the kiosk. Rotate her shoulders, torso and head farther TOWARD the screen, away from the camera. Photograph from slightly behind her right-side position: more back shoulder, substantially less face, only a small natural side profile visible. Eyes clearly directed at the selected menu item, relaxed mouth, not smiling toward an audience. Her body faces the device, not the lens. Her right elbow bends naturally, her right index fingertip actually touches a menu item on the glass; do not point at the device for display. Left arm rests naturally. Plausible arm reach, wrist, thumb, curled fingers and screen contact, no extra digits, disconnected limbs or intersecting hands. Keep the touch point and enough screen clear, do not let her body obscure the entire screen. Naturally absorbed in the task as if camera unnoticed.
Retain head-to-mid-thigh framing, both subjects prominent and realistic adult-to-device scale, original food/coffee menu appearance with no new prices or dashboard, soft blurred neutral wood cafe, consistent shadows and restrained glass reflections. Preserve margins for head, fingertip and hardware. Background can recompose as required for the reversed arrangement; no new props or people.
Do not add payment card, terminal, phone, receipt, extra people, floating icons, website headings/controls, watermark or claims. This is illustrative generated imagery, not an actual client photograph or software screenshot.
Deliver ONE revised portrait raster preview.
```
