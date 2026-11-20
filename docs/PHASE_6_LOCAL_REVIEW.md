# Phase 6: Payments with AltPayNet

Date: 20 November 2026, Asia/Manila.

Status: owner accepted Phase 6, including the one-line online-payment action fix, and authorized publication on 20 November. Verify live before phase closure. Phase 7 is approved for subsequent local implementation only. Held payment-artwork corrections remain unresolved.

- Live through Phase 5: https://reniel-relearn.github.io/Ez-Kyosk-SEO/
- Local through Phase 6: http://127.0.0.1:4323/Ez-Kyosk-SEO/

## Published before local implementation

The owner requested separate pushes. Phase 4 final heading fix ca34718 and Phase 5 9b03f6b were separately committed, pushed, deployed and verified. Source-release workflows and closure documentation release 6f1fe53 all succeeded. See [release evidence](PHASE_5_RELEASE.md).

Phase 5 public document/style hashes were saved independently before the local build changed. A later manifest-only comparison passed while the local build contained Phase 6, proving the public site remains the approved Phase 5 version. No Phase 6 source was included in the published releases.

## Implemented exact scope

Owner-review correction, 20 November: “Discuss online payments” wrapped at desktop widths because the label/arrow exceeded the online card's 173px inner copy width. Verified at 1440px and 1920px. Scoped `white-space: nowrap` plus a stable 6px arrow gap now fits the full action in about 171px, including hover. Wording, font sizes, 44px click target, card columns/padding, images and the other payment action remain unchanged. Explicit rest/hover line-count and overflow assertions cover all 52 layouts; this correction remains local only.

1. Centered section label, heading and unchanged introduction with a readable responsive width. Centered both card headings, labels, descriptions and Contact actions.
2. Applied `padding-block: clamp(32px, 4vw, 56px)`, matching accepted preceding sections. Retained hero-aligned side margins and compact existing card sizing/image proportions.
3. Preserved all payment wording, headings, supported-method statements and Contact destinations. FAQ content and its supported payment paths remain unchanged. No marketing-site payment processing, endpoint or live form transmission added.
4. Kept both current raster assets, image markup/source selections, dimensions and alt text unchanged. The original terminal remains centered in its media frame; the online wrist remains flush with the card's inner bottom edge.
5. Prepared flexible media columns using zero minimum inline sizing and bounded width, with natural image height and containment. Later approved terminal-only/phone artwork can replace the media without fixed-height boxes, cropping, overflow, collapsed copy or blank placeholders. No future asset was generated or substituted now.
6. Scoped every new rule to Home Payments. Other sections, tab/disclosure/navigation behavior, hero/header, page order, shared styles, metadata and preview indexing controls remain unchanged.

## Still held, not completed

- Terminal-only raster: future removal of the kiosk and embedded Ez Kyosk branding from that composition while retaining the payment terminal.
- Revised phone raster: future logo/content/AltPayNet repositioning and the requested image-half composition.
- Retain AltPayNet, Visa and Mastercard in future artwork; remove GCash/Maya artwork marks then, not from supported-method FAQ/copy.
- No cropping, regeneration, image editing or silent removal of current content to simulate completed artwork changes. Image references/approval remain necessary for those held tasks.

## Files

- `src/pages/index.astro`: one local-only import for payment presentation styles.
- `src/styles/payments-section.css`: centered presentation, compact spacing and flexible media containment.
- `scripts/qa-payments-section.mjs`: fixed original component hash, spacing, alignment, links/44px actions, readability, both themes, JavaScript/no-JavaScript and preservation checks.
- Architecture, phase plan, roadmap and this review document: local review status only.

Original `PaymentShowcase.astro`, payment rasters, FAQ/product data, shared styles, package/deployment configuration and other source components were not edited. Payment component preservation is checked against the accepted Phase 5 source with normalized line endings only.

## Verification

- Pages-subpath build and static verification passed.
- Dedicated payment presentation suite: 52 layouts over 13 widths (320-2560px), both themes and JavaScript enabled/disabled; 104 card checks. Exact component hash, headings, centered text/actions, compact padding, side margins, valid Contact links, minimum 44px actions and no clipped text or horizontal overflow passed.
- Existing payment-image suite: 56 responsive/theme cases and four scoped accessibility scans passed, including natural image ratios/source selections, no transform/filter/re-encoding, compact card height, image containment and wrist-to-card-bottom alignment.
- Existing full-site smoke suite: 36 layouts and 24 sampled accessibility scans passed. Menu/focus/FAQ/tabs/theme behavior and mocked form success/failure passed; no real submissions, browser errors or failed requests.
- Existing preservation guard passed for protected Home sections (with the previously approved Phase 4 h2 normalization), all original Home image markup and 72 original artwork/shared-style files.
- Desktop light and phone dark full-section captures visually inspected. Local ignored evidence: `artifacts/phase6/payments-report.json`, `payments-*.png`, `artifacts/phase6-payment-images-report.json` and existing full-site report.
- Public separation check: 12 documents and both stylesheets still match the saved Phase 5 manifest while local output includes Phase 6.

Known limitations: preview remains noindex/nofollow with robots blocking; approved translucent-header contrast remains background-dependent as documented previously. Sampled accessibility results are not full-site certification. Narrow CSS viewport reflow is tested, not automated browser-toolbar zoom. Held raster changes remain pending.

## Exact next actions

1. Review local Payments with AltPayNet on desktop and phone in both themes. Check centered headings/copy/actions, compact vertical spacing, side margins and readable links.
2. Check both original images, terminal centering, compact card fit and the online wrist meeting the card's bottom border. Use Contact actions to confirm their destinations without submitting real inquiries.
3. Request corrections or approve the local Phase 6 result. Obtain separate publication approval before committing/pushing Phase 6, then verify workflows/live and close the presentation scope only.
4. After Phase 6 publication, next proposed phase is Phase 7, Designed to adapt/Industries: keep four industries and existing photos; center section introduction/card headings; apply the same compact vertical-spacing baseline and preserve side margins, badges and descriptions; verify useful Contact/compatibility destinations, four/two/one-column behavior, image loading, row alignment, focus and themes; integrate locally and stop for review. No Phase 7 implementation or image generation is authorized yet.
