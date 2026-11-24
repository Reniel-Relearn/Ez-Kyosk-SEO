import sharp from 'sharp';
import {access} from 'node:fs/promises';
import {verifyHeroImage} from './verify-hero-image.mjs';
const version=process.argv[2]||'v4';
if(!/^v\d+$/.test(version))throw new Error('Pass a version such as v5');
const source=`assets/hero-kiosk-hardware-${version}-source.png`;
const target=`assets/hero-kiosk-hardware-${version}.webp`;
await verifyHeroImage(source);
let exists=false;
try {await access(target);exists=true;} catch(error) {if(error.code!=='ENOENT') throw error;}
if(exists) throw new Error('Preserve versioned output');
await sharp(source).webp({quality:92,alphaQuality:100,effort:6}).toFile(target);
console.log(await verifyHeroImage(target));
