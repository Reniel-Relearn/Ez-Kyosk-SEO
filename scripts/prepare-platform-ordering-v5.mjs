import sharp from 'sharp';
import assert from 'node:assert/strict';
import {access} from 'node:fs/promises';
const source='assets/platform-self-ordering-human-v5-source.png';
const meta=await sharp(source).metadata();
assert.ok(Math.abs(meta.width/meta.height-.75)<.01,'portrait 3:4 source');
assert.ok(meta.width>=1080,'enough source resolution');
for(const width of [270,540,1080]){
 const target=`public/assets/images/platform-self-ordering-human-v5-${width}.webp`;
 await assert.rejects(access(target),'preserve existing versions');
 await sharp(source).resize({width,withoutEnlargement:true}).webp({quality:88}).toFile(target);
 console.log(target);
}
