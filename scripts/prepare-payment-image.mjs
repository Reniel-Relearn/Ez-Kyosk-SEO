import sharp from 'sharp';
import { access } from 'node:fs/promises';

// Responsive encoding only; ImageGen creates the artwork and transparency.
const [source, stem] = process.argv.slice(2);
if (!source || !/^payment-[a-z0-9-]+-v\d+$/.test(stem || '')) {
  throw new Error('Pass a reviewed source and a versioned payment asset stem.');
}
const metadata = await sharp(source).metadata();
if (Math.abs(metadata.width / metadata.height - 3 / 4) > .001 || metadata.width < 1080 || !metadata.hasAlpha) {
  throw new Error('Use a transparent 3:4 source at least 1080px wide; do not crop or enlarge.');
}
for (const width of [360, 720, 1080]) {
  const target = `public/assets/images/${stem}-${width}.webp`;
  if (await access(target).then(() => true, () => false)) {
    throw new Error(`Keep existing assets; use a new version: ${target}`);
  }
}
for (const width of [360, 720, 1080]) {
  const target = `public/assets/images/${stem}-${width}.webp`;
  const result = await sharp(source).resize({ width }).webp({ quality: 88, alphaQuality: 100, effort: 6, smartSubsample: true }).toFile(target);
  console.log(JSON.stringify({ target, width: result.width, height: result.height, bytes: result.size }));
}
