# Review & Edit Order: Butter Croissant increment v3

HISTORICAL: owner requested fixing text/control overlap and screen alignment. Corrected v4 retains quantity2/subtotal240/total400, is integrated and QA-passed as part of [six-card completion](JOURNEY_SIX_CARDS_COMPLETION.md). v3 preserved, not active.

16 November 2026. Owner requested pointing to Butter Croissant plus instead of Proceed to Payment, with croissant quantity changed from1 to2. Built-in ImageGen edit, no CLI fallback. Preview ONLY, awaiting actual approval; no Home/code changes, integration, commit, push or deployment. First card stays journey-start-select-v3. Earlier second-image v1/v2 preserved.

## Source and result

Viewed/edit target: local generated master: exec-9e14859c-89fa-4bcd-b9e7-b7aab6e4d14d.png.
Output: local generated master: exec-c675f44e-12a8-47e6-af50-0aaff3951280.png. Opaque 1448 x1086,4:3.

Full preview inspected: right index touches SECOND-row Butter Croissant plus, quantity2 visible, unit price120 unchanged, row subtotal240. Latte quantity1/unit160/subtotal160 unchanged. Total400 correct:160+2x120=400. Frozen just-after-increment state, not an additional third croissant action. Important quantity/amount labels readable, no payment transition. Apparent customer/hair/cream blouse/earring/close camera/device/cafe continuity retained, attached terminal passive. No obvious duplicate/disconnected hand on inspection; forearm crosses some blank screen area. Generated illustrative UI and identity not claimed exact actual software or pixel-identical invariants.

## Saved preview assets

public/assets/images/journey-review-edit-v3-{320,640,1280}.webp, existing helper quality88 resize/encode only, no crop/upscale/manual image edits. Not imported by Home yet. Original PNG and earlier variants preserved. No browser/build integration claim.

## Exact built-in edit prompt

```text
Use case: precise-object-edit.
Input Image1 is EDIT TARGET. Make only the following linked action/arithmetic revision to this SAME cart-review photograph.
MOVE SAME woman's RIGHT hand/connected forearm UP to Butter Croissant row. Right index fingertip lightly touching the circular PLUS sign immediately RIGHT of the Butter Croissant quantity field (SECOND row). Not latte plus, not Proceed to Payment. Keep plus visibly identifiable and quantity numeral unobstructed. Single plausible right hand, comfortable natural wrist/elbow, fingers naturally curled. Completely remove old pointing hand from bottom button area and restore scene there.
Show the state IMMEDIATELY AFTER ONE increment of croissant quantity: Butter Croissant quantity field MUST change from "1" to "2", keeping unit price below item name "₱120.00", changing RIGHT-hand croissant line subtotal to "₱240.00". Keep Caffè Latte quantity"1", unit price "₱160.00" and right-hand line subtotal"₱160.00". Change bottom order Total from ₱280.00 to "₱400.00". Arithmetic exactly 1x160+2x120=400, no taxes/fees/discounts or extra rows. Don't confuse unit120 with line240.
PRESERVE REST of reference: same fictional adult Filipina face/profile, dark wavy ponytail with simple dark tie/soft bangs/temple-nape wisps, cream blouse/gold hoop, exact close over-the-shoulder camera/crop, charcoal/silver Ez Kyosk portrait kiosk/menu hardware/attached UNUSED terminal, same background cafe/window/daylight/lightwood/pastrycase, neutral photo-real textures. Screen still cart with two product photos/rows, Your Order header, lower Proceed to Payment and Back to Menu buttons unchanged. No screen redesign/new UI. Brand/header identity same directly on black, no white backing plate.
Do not change customer's face/gaze/pose except forearm/hand needed to point to SECOND-row plus. No additional hand, card, phone, payment success, QR, queue, receipt, collection, new people or overlays. Do not zoom out or alter device geometry. Opaque LANDSCAPE4:3 at least1440px wide, premium candid photorealism. Only requested hand/action/quantity/subtotal/total changes, everything else invariant.
```

## Next actions

1. Owner reviews actual v3, approves integration or requests targeted refinement.
2. On approval integrate ONLY second card using v3, update expected Home state two images/four reserved, build/asset/responsive/accessibility checks, first card unchanged.
3. Present THIRD payment-image full brief; any future payment amount should retain new400 total unless owner changes sample order. No automatic third generation or deployment.
