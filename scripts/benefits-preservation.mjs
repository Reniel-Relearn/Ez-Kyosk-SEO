// Normalize only the exact approved Benefits replacement; retain original golden hashes.
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';
const hash=value=>createHash('sha256').update(value).digest('hex');
const previous=readFileSync(new URL('./fixtures/benefits-pre-minimal.html',import.meta.url),'utf8').trimEnd();
assert.equal(hash(previous),'126a3d9728122c63bd1fb1e584087dddd34d40b47ea7dccbd9b2a6f92893480e','original Benefits fixture retained');
export function normalizeMinimalBenefitsHtml(html) {
  const section=html.match(/<section class="benefits-section[^>]*>[\s\S]*?<\/section>/)?.[0];
  if(!section?.includes('class="benefits-panel"'))return html;
  assert.equal(hash(section),'87199ccabd239348d646da1d7902715352655104820f6c3b946d00a337655ee7','only exact approved icon-heading-description Benefits markup normalized');
  return html.replace(section,previous);
}
