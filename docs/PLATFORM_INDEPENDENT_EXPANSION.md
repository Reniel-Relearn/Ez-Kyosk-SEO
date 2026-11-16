# One Connected Platform: independent expansion correction

Date: 16 November 2026. Owner selected independent expansion after reviewing the mixed-state empty panels introduced by the first alignment fix. This supersedes the requirement for equal bottom edges in EVERY mixed state.

## Verified regression and required behavior

The old three-track stretch made closed cards occupy the open card's description area. On the deployed first fix, opening Reports alone increased each closed neighbour by approximately 94px at 1440px. Its paragraph stayed hidden, but its card background stretched into an empty panel. Earlier alignment tests required matching bottoms and did not catch this unwanted result.

Correct behavior:
- Each native plus/minus control opens/closes ONLY its own description.
- Closed cards stay at their all-closed baseline height, even when neighbours open.
- Image and heading areas remain aligned within each visual row.
- Open descriptions share a starting line. When every card in a row is open, their bottom edges align.
- Mixed-state closed/open bottom edges intentionally differ. The next responsive row begins below the tallest card, with a 16px gap.
- Five desktop columns, three tablet columns, one mobile column; no horizontal scroll, fixed overall heights, cropped images or rewritten text.

## Implementation

CSS-only: existing five cards are placed explicitly in responsive three-track row groups. Closed cards span image and heading tracks; :has(details[open]) adds the description track ONLY to open cards. Heading padding is owned by the shared heading track, not differently spanning bodies. A 1px open-heading end allowance matches the closed card's bottom border. Parent row gaps are zero internally; margins supply the 16px gap between visual card rows, avoiding phantom gaps for absent descriptions.

All original native details/summary markup is retained. No JavaScript measurement, synchronization or group expansion. Existing typography, 44px controls, stationary hover targets, order, full 3:4 artwork and descriptions remain unchanged. The proposed Optional Cashier heading and balanced-copy revisions are not applied in this behavior-only change.

Explicit CSS placement is scoped to the existing FIVE-card section. Adding/removing/reordering cards or changing column breakpoints requires updating and retesting those placements together.

## Verification and publication

Initial development tests exposed heading-boundary differences at 721px, caused by inherited subgrid gap/border allowances. Corrected the layout and reran the matrix successfully; intermediate failed attempts are not represented as successful checks.

Final production build and static checks passed. Complete targeted suite passed 160 card states, 640 independent-expansion cases (all 32 combinations at ten widths in both themes), 40 section accessibility scans and 80 hover-edge stability checks. Assertions cover closed-neighbour baseline heights, heading alignment, open-description starts, all-open/all-closed bottoms and responsive row counts. Native no-JavaScript pointer/keyboard checks passed at 390/1024/1920px. Full-site regression passed 48 route/viewport checks and 32 light/dark accessibility scans with zero reported errors/failed requests; no actual inquiry sent.

Visually reviewed dark desktop Reports-only, light tablet all-open and light phone mixed screenshots. QA reports/screenshots remain ignored under artifacts/platform-independent-final-* and artifacts/qa-report.json. Existing local owner reference files and superseded art are excluded from the commit. Publication uses the existing main-branch Pages workflow; remote outcome and post-deployment verification are reported in the task handoff and linked feedback comment rather than inferred from local tests.

## Exact next-section actions

Location: Home > Designed to adapt > Different operations. One clearer experience. > Hospitality & food, the FIRST of four industry cards.

1. Brainstorm the first card's image frame and how its photograph fits the existing linked-card layout. Do not assume the platform disclosure layout also applies here.
2. Agree a wider, candid cafe/food-service scene showing the ordering touchpoint within the business environment. Keep it distinct from close-up ordering, payment, queue, inventory and analytics visuals already used above.
3. Define the subject placement and crop-safe area for a proposed 3:2 master, with suitable Home-card and Solutions-section crops; confirm whether both locations should be updated together.
4. Present the exact written image brief for owner approval.
5. After approval, generate ONLY Hospitality & food preview using original project identity/assets; inspect human/device anatomy and show the actual image BEFORE integration.
6. After actual-image acceptance, optimize and integrate the approved scope, verify responsive crops, loading, link behavior, accessibility and both themes.
7. Only then propose Retail & shops, followed separately by Wellness & beauty and Services & B2B. No next-section generation is authorized by this card-behavior correction.
