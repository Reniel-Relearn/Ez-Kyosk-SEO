import sharp from 'sharp';
import { access } from 'node:fs/promises';

// Deterministic responsive encoding only; ImageGen creates the raster artwork.
const [source, stem] = process.argv.slice(2);
if (!source || !/^product-[a-z0-9-]+-v\d+$/.test(stem || '')) {
  throw new Error('Pass a reviewed source and a versioned product asset stem.');
}
const metadata = await sharp(source).metadata();
if (Math.abs(metadata.width / metadata.height - 4 / 3) > .001 || metadata.width < 1440) {
  throw new Error('Use a 4:3 source at least 1440px wide; do not crop or enlarge.');
}
for (const width of [480, 960, 1440]) {
  const target = `public/assets/images/${stem}-${width}.webp`;
  if (await access(target).then(() => true, () => false)) {
    throw new Error(`Keep existing assets; use a new version: ${target}`);
  }
}
for (const width of [480, 960, 1440]) {
  const target = `public/assets/images/${stem}-${width}.webp`;
  const result = await sharp(source).resize({ width }).webp({ quality: 88, effort: 6, smartSubsample: true }).toFile(target);
  console.log(JSON.stringify({ target, width: result.width, height: result.height, bytes: result.size }));
}
