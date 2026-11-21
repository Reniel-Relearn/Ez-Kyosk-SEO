import sharp from 'sharp';
import {access} from 'node:fs/promises';
import {verifyHeroImage} from './verify-hero-image.mjs';
const source='assets/hero-kiosk-hardware-v4-source.png';
const target='assets/hero-kiosk-hardware-v4.webp';
await verifyHeroImage(source);
let exists=false;
try {await access(target);exists=true;} catch(error) {if(error.code!=='ENOENT') throw error;}
if(exists) throw new Error('Preserve versioned output');
await sharp(source).webp({quality:92,alphaQuality:100,effort:6}).toFile(target);
console.log(await verifyHeroImage(target));
