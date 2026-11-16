# Review & Edit Order image preview

CURRENT COMPLETED: corrected cart v4 supersedes v1-v3 after owner requested text/button alignment QA and direct local integration, then all six cards. [Active six-card assets, exact prompts and passed QA](JOURNEY_SIX_CARDS_COMPLETION.md). Earlier preview statuses below historical; v1-v3 preserved.

16 November 2026. Owner authorized the next image after selecting the original tight Start & Select close-up. Built-in ImageGen used, no CLI fallback. Preview generated and saved, NOT integrated, committed, pushed or deployed. Home remains one image/five reserved areas; first card remains journey-start-select-v3 unchanged.

## Provenance and inspection

Reference: public/assets/images/journey-start-select-v3-1280.webp, viewed before generation. Primary continuity anchor for same fictional customer, hairstyle, wardrobe, device and cafe; generated resemblance not guaranteed pixel-identical identity. New screen is illustrative cart review, not actual software capture or proof of backend behavior.

Source output: local generated master: exec-4d956153-4ea6-4441-9233-921004294051.png. Opaque 1448 x 1086 (4:3). One image, no additional variant/refinement generated.

Inspected full output: device LEFT/customer RIGHT close over-the-shoulder framing, cream blouse/dark ponytail/gold hoop/profile continuity, full screen in device, attached terminal passive. Latte quantity 1 and price/subtotal 160, croissant quantity 1 and price/subtotal 120, total 280. Finger at edge of latte plus, before quantity changes; no payment action. Natural connected wrist/forearm, no obvious extra disconnected digits on inspection. Right arm overlaps some blank cart space but important item/quantity/total labels readable. Tight top hair/device framing follows owner-selected first image, not wider rejected refinement. Original generated logo interpretation preserved, no backing plate. No extra characters, tracking/payment QR, cash/card/phone, receipt, queue or collection. Small interface text may not be readable at thumbnail, as expected.

## Saved preview assets

Responsive WebP copies under public/assets/images/journey-review-edit-v1-{320,640,1280}.webp, quality 88 resize/encode only through existing prepare-industry-image.mjs; no crop/upscale/manual art edits. 320 x 240: 21,480 bytes; 640 x 480: 57,450; 1280 x 960: 141,506. Thumbnail also inspected; main order/edit story remains distinguishable, small text naturally reduced. These files are not referenced by Home yet. No browser/build claim for integration that has not happened. git diff --check passed.

## Exact generation prompt

```text
Use case: photorealistic-natural.
Asset type: original website customer journey photograph, SECOND card "Review & Edit Order", matching the supplied FIRST card in a six-part sequence. Generate ONE opaque LANDSCAPE 4:3 image at least 1440px wide, not a website card mockup.
Input image 1: PRIMARY continuity reference for the SAME fictional adult Filipina customer, face/profile, dark wavy ponytail with simple dark tie, soft face-framing curtain bangs and delicate temple/ear/nape strands, small gold hoop, cream blouse, charcoal/silver Ez Kyosk portrait kiosk with attached RIGHT-side terminal, cafe pastry display/light wood/window/greenery, and neutral daylight photo realism. Do not use the reference's browsing screen as the second card's action: here she is reviewing her CART.
Composition: close three-quarter over-the-shoulder/side view, kiosk LEFT, customer RIGHT. Screen is dominant and legible, her head/profile/ponytail, shoulder, cream upper torso and natural right interacting hand still present. Screen plane realistic, full display safely visible, attached terminal visible unused. No pedestal or legs, no wide establishing view. Keep gaze towards CART not viewer, relaxed candid expression, not presentation. Hair and shoulder should not cover order lines or total. Same feminine natural adult build, realistic forearm and neat lightweight blouse sleeve.
Screen content is a simplified illustrative CART REVIEW, not an actual software screenshot. Retain Ez Kyosk header identity directly on dark top bar, no white logo backplate, followed by cream/white review area with clean restrained coffee-brown/gold accents from reference. No category/menu grid or cafe banner taking over. Heading "Your Order".
EXACT TWO sample rows only, with small appropriate item photos:
"Caffè Latte"   "₱160.00"   quantity controls "−  1  +"   line subtotal "₱160.00"
"Butter Croissant"   "₱120.00"   quantity controls "−  1  +"   line subtotal "₱120.00"
Below rows a clear label "Total" and "₱280.00".
Bottom button "Proceed to Payment", secondary subtle "Back to Menu".
Keep typography normal-reading and screen-aligned, sensible spacing. Not a floating/enlarged interface external to device. No invented extra rows, discounts/tax/fees, mismatched quantities or arithmetic. 1 x 160 + 1 x 120 =280.
Action: RIGHT index finger hovering immediately BESIDE the latte plus control BEFORE changing displayed quantity. Finger not on payment button, must not cover number 1, prices or total. Natural connected forearm/wrist, believable finger/thumb anatomy with no extra/fused digits or broken elbow. Other hand out of frame naturally, not another disconnected hand. Looking at quantities. This single frozen moment demonstrates review/edit, not completed payment.
Attached terminal passive, original hardware family/position; no card, phone, cash, receipt, tracking QR, queue board, payment success, collecting food, extra people, overlays, arrows, numbers or watermarks. Keep original logo family, no invented shop brand or white plate.
Ultra-realistic candid editorial cafe photo: actual-looking skin/hair/cotton/metal and restrained reflections, accurate device geometry, soft natural window daylight. Cafe background only supporting context, not heavy blur smear; no blue/orange filter, plastic retouch, glam pose or oversaturated glow. Preserve continuity with first photo but show distinctly cart-review state.
```

## Next actions

1. Owner reviews/approves this actual preview or requests a targeted revision.
2. On integration approval, replace ONLY second reserved image, add illustrative alt, update static/browser assertions to two images/four pending, run build/asset/responsive/accessibility checks. Preserve first card and others.
3. Report full THIRD-image payment proposal for separate approval. No automatic third generation or deployment.
