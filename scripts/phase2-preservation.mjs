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
    // Phase 4 explicitly approves only this h2 replacement. Keep the original
    // golden hash protecting every other byte of platform copy/markup/artwork.
    let normalized=name==='platform-section'
      ? html.replace('<h2 id="platform-title">Powerful features. Stronger together.</h2>','<h2 id="platform-title">From the first tap to the next task.</h2>')
      : html;
    // Phase 9 permits only moving this unchanged Contact action below the list.
    // Restore its original position for the existing golden comparison.
    if(name==='faq-section'){
      const action=normalized.match(/<div class="faq-actions">(<a class="text-link"[^>]*>Ask a different question[\s\S]*?<\/a>)<\/div>/);
      if(action) normalized=normalized.replace(action[0],'').replace(
        'compatibility, and pricing.</p></div>',
        `compatibility, and pricing.</p>${action[1]}</div>`);
    }
    sections[name]=hash(normalized.replace(/ id="home"| data-section-target(?:="true")?/g,''));
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
  assert.deepEqual(await collectPhase2Preservation(),baseline,'protected sections preserved except explicit Phase 4 h2 and Phase 9 FAQ action relocation; all Home images and existing styles preserved');
  return {comparedSections:4,approvedPlatformHeadingNormalization:true,allHomeImagesUnchanged:true,protectedAssets:baseline.assetCount};
}
if(process.argv.includes('--baseline')) console.log(JSON.stringify(await collectPhase2Preservation(),null,2));
