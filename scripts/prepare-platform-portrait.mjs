import sharp from 'sharp';
import { access } from 'node:fs/promises';

// Responsive encoding only. ImageGen creates/edits the artwork.
const [source, stem] = process.argv.slice(2);
if (!source || !/^platform-[a-z0-9-]+-v\d+$/.test(stem || '')) {
  throw new Error('Pass a portrait source and a new versioned platform asset stem.');
}
const metadata = await sharp(source).metadata();
if (Math.abs(metadata.width / metadata.height - 3 / 4) > .001 || metadata.width < 1080) {
  throw new Error('Use a 3:4 source at least 1080px wide; do not crop or enlarge it.');
}
const targets = [270, 540, 1080].map(width => ({
  width, target: `public/assets/images/${stem}-${width}.webp`,
}));
for (const { target } of targets) {
  if (await access(target).then(() => true, () => false)) {
    throw new Error(`Preserve existing artwork; choose another version: ${target}`);
  }
}
for (const { width, target } of targets) {
  const result = await sharp(source).resize({ width })
    .webp({ quality: 88, effort: 6, smartSubsample: true }).toFile(target);
  console.log(JSON.stringify({ target, width: result.width, height: result.height, bytes: result.size }));
}
