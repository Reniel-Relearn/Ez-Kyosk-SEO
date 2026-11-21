# H1: Online-payment image cleanup

Publication authorization: owner visually approved the final v4 Scan Code artwork and requested publication. Release includes only the final image/master, integration, preparation script, regression checks and this record. Earlier v2/v3 variants remain historical/local; they are not the active website asset. Do not infer approval for Hero/YourAI generation, held work or GitHub issue closure. Build/static and local v4 responsive/accessibility/preservation checks passed before publication. Final commit/workflow/live verification is reported after deployment completes.

## Latest follow-up: Scan Code button (v4)

Owner requested removing the card icon, replacing Scan QR with Scan Code, and enclosing the words in a button. Current local version uses a royal-blue rounded button with centered white Scan Code text and no icon. Other HTML, CSS, section text and terminal image unchanged. Built-in ImageGen edit of `assets/payment-online-v3-source.png`; new master `assets/payment-online-v4-source.png`, derivative `public/assets/images/payment-online-v4-1371.webp`. Original dimensions and alpha retained; older versions preserved. Static illustrated button only, no payment functionality added. No commit/push/deployment.

First candidate rejected because it added background haze; never integrated. Second edit restores clean transparent surroundings. Generative editing does not guarantee identical pixels outside the requested edit.

v4 QA: production build/static verifier passed; 56 responsive/theme/density image checks and four scoped accessibility scans passed with no errors. Golden preservation passed for four sections and 72 original assets. Phone dark screenshot visually reviewed; no card icon, correct Scan Code button, transparent background and bottom-aligned wrist retained. Evidence: `artifacts/online-payment-v4-report.json`, `artifacts/online-payment-v4-home-online-390-dark.png`.

Final prompt: Use case: precise-object-edit. Image 1 is the approved transparent edit target. Make ONLY this local change inside the phone screen: remove the small bank-card icon and its pale tile plus the label 'Scan QR'; in that exact location render a compact royal-blue rounded rectangular button containing the exact centered white text 'Scan Code', with NO icon. EVERYTHING OUTSIDE THAT SMALL TILE MUST REMAIN AS IN IMAGE 1, especially the alpha transparency. Empty background must be alpha=0 fully clear. Absolutely no surrounding haze, glow, shadow field, colored fringe, white/gray/black matte, or backdrop. Do not recreate the whole photograph. Preserve the phone, QR code, AltPayNet, Visa/Mastercard cards, hand, strokes, lighting, 1371x1148 framing, wrist flush at bottom. Keep the existing genuine transparent cutout completely clean. No other textual, icon, photographic or compositional change. Output real RGBA transparency.

## Latest follow-up: Scan QR label (v3)

Owner requested changing only the bottom tile wording from Card to Scan QR. Built-in ImageGen edit of `assets/payment-online-v2-source.png`; new master `assets/payment-online-v3-source.png`, website derivative `public/assets/images/payment-online-v3-1371.webp`. Previous versions preserved. Current local integration uses v3; original dimensions, native HTML/CSS, first terminal card and layout unchanged. No commit/push/deployment.

Exact prompt: Use case: text-localization. Image 1 is the EDIT TARGET. Make ONE tiny text correction only: replace the black word 'Card' in the small pale rounded tile near the bottom of the phone display with the exact words 'Scan QR'. Keep it on one line, same font style, appropriate compact size, centered beneath the existing bank-card outline icon. Do NOT change or replace that icon. Preserve absolutely everything else: AltPayNet logo and wording, QR artwork and corner brackets, phone angle/frame/camera, Visa and Mastercard cards/marks, hand anatomy/texture, accent strokes, lighting, original 1371x1148 dimensions/framing, genuine transparent background, wrist cropped flush to bottom edge. No new text or objects, no redesign or reflow. Change only 'Card' to 'Scan QR'.

The text and composition were visually inspected in the generated output; original pixel identity outside the edit is not guaranteed by generative editing. Build/asset/layout checks are rerun for v3; the v2 acceptance record below remains historical.

v3 verification completed: build/static checks passed; 56 responsive/theme/density image checks and four scoped accessibility scans passed with no errors. Golden preservation still protects four sections and 72 original assets. Phone screenshot reviewed at `artifacts/online-payment-v3-home-online-390-light.png`; report `artifacts/online-payment-v3-report.json`.

## Original v2 cleanup record

Date: 21 November 2026. Owner authorized proceeding with H1 after the exact second-card cleanup brief. Local integration/review only; no commit, push or deployment in this pass.

## Exact scope

Home → Payments with AltPayNet → Online payments. Remove embedded Ez Kyosk branding, GCash and Maya screen marks. Move AltPayNet and the illustrative QR block upward; retain a compact generic Card tile. Preserve the physical Visa/Mastercard cards, phone, hand, original dimensions, transparency and wrist crop. The generated edit closely preserves the original composition; pixel-identical preservation of the photographic subject is not claimed.

Native heading, description, CTA, layout/CSS, approved terminal-only card and website branding remain unchanged. Removing visual marks does not independently retract owner-approved supported-payment copy. QR artwork is illustrative, not a verified functional payment endpoint.

## Assets and method

Built-in ImageGen edit; no CLI fallback. Edit target and preserved original: `assets/Hand Holding AltPayNet Payment Phone and Cards.png` (SHA256 `6e5c2d1de4e3d0eef00417515d4fa18234a23e68ccd713793d836c01e528124d`). Versioned master: `assets/payment-online-v2-source.png` (1371×1148 RGBA). Website output: `public/assets/images/payment-online-v2-1371.webp` (192,482 bytes). Preparation: `scripts/prepare-online-payment-image.mjs`, no crop, resize or manual raster changes; quality 92, alpha quality 100, effort 6. Original PNG is unchanged.

## Exact prompt

> Use case: precise-object-edit. Asset type: transparent online-payment phone cutout for an existing website card. Image 1 is the EDIT TARGET. Change ONLY the software content on the white phone display. Remove the top EzKyosk cart logo and brand name COMPLETELY. Remove the GCash and Maya logos and names COMPLETELY. Move the existing AltPayNet symbol and exact wording 'Pay with AltPayNet' UPWARD into the formerly branded top area, below the camera island with comfortable clearance. Move the existing illustrative QR block and its four teal corner brackets upward correspondingly, with an orderly balanced vertical layout. Under the QR show ONLY the existing generic bank-card outline icon with the single label 'Card', compact and centered; no GCash or Maya, no replacement brand. Keep remaining white screen elegantly spaced, without giant blank header or additional headings. Preserve the AltPayNet mark and correct readable spelling. Preserve the existing physical blue VISA card and black Mastercard card behind the phone with their existing branding; DO NOT remove these physical cards. STRICT INVARIANTS: preserve phone's black thin frame, camera island, original screen plane and angle, hand anatomy and all fingers, skin texture, wrist crop, card positions, highlights, shadows, teal accent strokes outside the phone, original framing and approximately original 1371:1148 aspect ratio. Wrist must continue to and be cropped flush by the bottom canvas edge exactly as input, NOT a floating severed hand with transparent gap below it. Keep genuinely transparent surroundings, including around accent strokes and silhouette, no opaque backdrop/checkerboard. No website text, borders, terminal, kiosk, extra hands, added objects, new logos, payment success claims or watermark. Premium photorealistic edit, not a scene redesign. QR is illustrative artwork, not a functional transaction endpoint.

## Verification

Check the new asset/alt only; normalize those explicit changes for golden comparison, not the native copy or layout. Preserve the original source hash and original 72-asset guard. Static checks cover dimensions, actual alpha, deployed derivative bytes and opaque wrist pixels at the last image row. Browser checks retain responsive behavior, both themes, centered terminal, bottom-anchored wrist, action links, no overflow and scoped accessibility. Initial browser attempt correctly rejected the obsolete original-PNG requirement; updated that assertion to the approved WebP source and reran rather than weakening layout checks.

Acceptance evidence: production build/static verification passed; 56 responsive/theme/density image checks and four payment accessibility scans passed; 52 JavaScript-on/off layouts (104 card checks) passed with four protected sections and 72 original assets preserved. Full-site regression passed 36 layouts and 24 accessibility scans, no browser errors/failed requests, zero preview submissions, mocked form and keyboard checks passed. Desktop light and phone dark payment screenshots visually inspected. Evidence: `artifacts/online-payment-v2-report.json`, `artifacts/online-payment-v2-home-section-light.png`, `artifacts/online-payment-v2-home-online-390-dark.png`, `artifacts/qa-report.json`. Existing header-readability concern remains separately pending despite these sampled passes.

## Next priorities

Hero image brief, then Offers/YourAI new visual brief. Neither is generated or integrated by this online-payment edit. YourAI remains a planned optional upgrade with pricing/availability unfinalized. H2–H4 are held; proposed future-revision deferral awaits owner confirmation.
