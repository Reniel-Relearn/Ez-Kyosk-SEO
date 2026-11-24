# Selective royal-blue branding — isolated release

24 November 2026. Owner reopened the paused turquoise-only correction and approved a separate PR, squash merge and publication. The earlier all-blue version remains rejected.

Scope: shared native header/footer BrandMark only. Change turquoise to royal blue #2563EB through a dedicated SVG filter and small stylesheet. Preserve original navy, white, source alpha, proportions, accessible names and adaptive white dark/footer wordmark. Original raster logo/icon/favicon/social exports remain byte-for-byte unchanged; no photographic embedded-logo recolor included.

Integration: BrandMark sets a base-path-aware filter URL via sitePath. Layout imports brand-royal-blue.css after existing styles. No accent changes. No content or layout changes.

Verification: Pages-subpath build/static checks pass; 84 responsive/theme/page/no-JavaScript cases pass with no browser/resource errors. Rendered probe confirms turquoise becomes exact [37,99,235], original navy/white remain and transparent areas stay empty. Four original identity assets have unchanged hashes. Desktop header light/dark screenshots inspected; footer and keyboard checks included in the suite. Benefit tests now explicitly expect this approved selective filter, while keeping all unrelated card/section requirements.

Rollback: revert this PR's squash commit via a new PR. That removes only its filter/style integration and tests/docs. Original assets are untouched; no asset recovery or branch history rewriting required. Live rollback takes effect after Pages redeployment, not instantly. Keep this revision independent of the platform artwork and accent PRs.

Related focused issue: #33. Publication and owner acceptance authorization: latest project conversation. This release does not resolve #32's separate scrolled-header contrast concern.
