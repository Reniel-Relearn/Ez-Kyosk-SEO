import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import assert from 'node:assert/strict';

const hash = value => createHash('sha256').update(value).digest('hex');
export async function collectPhase1Preservation() {
  const home = await readFile('dist/index.html', 'utf8');
  const main = home.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1];
  assert.ok(main, 'Home main exists');
  const hero = main.match(/<section class="home-hero[^>]*>[\s\S]*?<\/section>/)?.[0];
  assert.ok(hero, 'exactly scoped hero exists');
  const result = { baseline: 'a0ed9dfe29c0e2d86ce2751cf914ddf0a5efe83e', basePath: '/Ez-Kyosk-SEO',
    homeNonHeroMainSha256: hash(main.replace(hero, '<PHASE_1_HERO/>')),
    homeHeaderSha256: hash(home.match(/<header\b[\s\S]*?<\/header>/)[0]),
    homeFooterSha256: hash(home.match(/<footer\b[\s\S]*?<\/footer>/)[0]), otherPages: {} };
  const documents = [home];
  for (const route of ['features/index.html','how-it-works/index.html','solutions/index.html','about/index.html','contact/index.html','privacy/index.html','404.html','robots.txt','sitemap.xml']) {
    const document = await readFile(`dist/${route}`, 'utf8');
    result.otherPages[route] = hash(document);
    documents.push(document);
  }
  const referenced = new Set(documents.flatMap(html => [...html.matchAll(/\/Ez-Kyosk-SEO\/([^"'\s,]+\.(?:webp|png|svg|jpg))/g)].map(m => `dist/${decodeURIComponent(m[1])}`)));
  for (const source of ['assets/hero-kiosk-transparent-v3.webp', 'assets/ez-kyosk-lockup.png', 'assets/Hand Holding AltPayNet Payment Phone and Cards.png', 'src/styles/global.css']) referenced.add(source);
  const assets = [];
  for (const file of [...referenced].sort()) assets.push([file, hash(await readFile(file))]);
  result.protectedAssetCount = assets.length;
  result.artworkAndSharedStyleSha256 = hash(JSON.stringify(assets));
  return result;
}
export async function assertPhase1Preservation() {
  const expected = JSON.parse(await readFile(new URL('./fixtures/home-phase1-preservation.json', import.meta.url), 'utf8'));
  const actual = await collectPhase1Preservation();
  assert.equal(actual.artworkAndSharedStyleSha256, expected.artworkAndSharedStyleSha256, 'all referenced artwork, original hero/logo/phone and shared CSS unchanged');
  assert.equal(actual.protectedAssetCount, expected.protectedAssetCount);
  assert.deepEqual(actual.otherPages, expected.otherPages, 'all non-Home documents unchanged');
  for (const key of ['homeNonHeroMainSha256', 'homeHeaderSha256', 'homeFooterSha256']) assert.equal(actual[key], expected[key], key);
  return { otherDocuments: Object.keys(expected.otherPages).length, assets: expected.protectedAssetCount,
    homeNonHeroMainUnchanged: true, headerAndFooterUnchanged: true };
}
if (process.argv.includes('--print-baseline')) {
  console.log(JSON.stringify(await collectPhase1Preservation(), null, 2));
}
