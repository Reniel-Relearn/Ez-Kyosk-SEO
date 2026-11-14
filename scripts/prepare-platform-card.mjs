import sharp from 'sharp';
import { access } from 'node:fs/promises';

// Only responsive resizing/encoding. ImageGen creates the photographic content.
const [source, stem] = process.argv.slice(2);
if (!source || !/^platform-[a-z0-9-]+-v\d+$/.test(stem || '')) {
  throw new Error('Pass a reviewed source image and a versioned platform asset stem.');
}
const metadata = await sharp(source).metadata();
if (Math.abs(metadata.width / metadata.height - 4 / 3) > .001 || metadata.width < 1280) {
  throw new Error('Use a 4:3 source at least 1280px wide; do not crop or enlarge it.');
}
const widths = [320, 640, 1280];
for (const width of widths) {
  const target = `public/assets/images/${stem}-${width}.webp`;
  const exists = await access(target).then(() => true, () => false);
  if (exists) throw new Error(`Keep existing assets; use a new version instead: ${target}`);
}
for (const width of widths) {
  const target = `public/assets/images/${stem}-${width}.webp`;
  const result = await sharp(source).resize({ width }).webp({ quality: 86, effort: 6, smartSubsample: true }).toFile(target);
  console.log(JSON.stringify({ target, width: result.width, height: result.height, bytes: result.size }));
}
