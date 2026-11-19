import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';
const hash=value=>createHash('sha256').update(value).digest('hex');
export async function collectPhase2Preservation(){
  const home=await readFile('dist/index.html','utf8');
  const sections={};
  for(const name of ['home-hero','benefits-section','platform-section','faq-section']){
    const html=home.match(new RegExp(`<section class="${name}[^>]*>[\\s\\S]*?<\\/section>`))?.[0];
    assert.ok(html,`${name} present`);
    sections[name]=hash(html.replace(/ id="home"| data-section-target(?:="true")?/g,''));
  }
  const artwork=[...home.matchAll(/<img\b[^>]*>/g)].map(match=>match[0]);
  const sources=new Set(artwork.flatMap(html=>[...html.matchAll(/\/Ez-Kyosk-SEO\/([^"'\s,]+\.(?:webp|png|svg|jpg))/g)].map(m=>`dist/${decodeURIComponent(m[1])}`)));
  for(const source of ['assets/hero-kiosk-transparent-v3.webp','assets/ez-kyosk-lockup.png','assets/Hand Holding AltPayNet Payment Phone and Cards.png','src/styles/global.css','src/styles/home-hero.css']) sources.add(source);
  const assets=[];
  for(const file of [...sources].sort()) assets.push([file,hash(await readFile(file))]);
  // The owner-approved section swap changes reading order, not image markup or pixels.
  return {baseline:'e6495cda963b6b2371eda2186fc7aafb25fa3a8e',sections,imageMarkup:hash(JSON.stringify(artwork.sort())),assets:hash(JSON.stringify(assets)),assetCount:assets.length};
}
export async function assertPhase2Preservation(){
  const baseline=JSON.parse(await readFile(new URL('./fixtures/home-phase2-preservation.json',import.meta.url),'utf8'));
  assert.deepEqual(await collectPhase2Preservation(),baseline,'hero, benefits, platform, FAQs, all Home images and existing styles preserved');
  return {unchangedSections:4,allHomeImagesUnchanged:true,protectedAssets:baseline.assetCount};
}
if(process.argv.includes('--baseline')) console.log(JSON.stringify(await collectPhase2Preservation(),null,2));
