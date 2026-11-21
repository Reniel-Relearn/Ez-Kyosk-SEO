import sharp from 'sharp';
import {access} from 'node:fs/promises';
const source='assets/payment-online-v4-source.png';
const target='public/assets/images/payment-online-v4-1371.webp';
const meta=await sharp(source).metadata();
if(meta.width!==1371||meta.height!==1148||!meta.hasAlpha) throw new Error('Preserve approved original framing and transparency');
let exists=false;
try {await access(target);exists=true;} catch(error) {if(error.code!=='ENOENT') throw error;}
if(exists) throw new Error('Preserve existing versioned output');
await sharp(source).webp({quality:92,alphaQuality:100,effort:6,smartSubsample:true}).toFile(target);
console.log(target);
