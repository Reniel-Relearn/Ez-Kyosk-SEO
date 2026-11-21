import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
const previous=readFileSync(new URL('./fixtures/hero-pre-hardware.html',import.meta.url),'utf8').trimEnd();
const stripSources=tag=>tag.replace(/\s(?:src|srcset)="[^"]*"/g,'');
export function normalizeHeroHardwareHtml(html){
 const tag=html.match(/<img[^>]+alt="Ez Kyosk product artwork[^>]*>/)?.[0];
 if(!tag?.includes('hero-kiosk-hardware-v4.')) return html;
 assert.equal(stripSources(tag),stripSources(previous),'only Hero asset URLs may change; dimensions, alt, loading and layout attributes preserved');
 const sources=[...tag.matchAll(/\/Ez-Kyosk-SEO\/_astro\/[^\s",]+\.webp/g)].map(m=>m[0]);
 assert.equal(sources.length,4);
 assert.ok(sources.every(src=>src.includes('hero-kiosk-hardware-v4.')));
 return html.replace(tag,previous);
}
