import sharp from 'sharp';
import { access } from 'node:fs/promises';

// Responsive encoding only for the shared 4:3 industry/journey image families.
const [source, stem] = process.argv.slice(2);
if (!source || !/^(industry|journey)-[a-z0-9-]+-v\d+$/.test(stem || '')) {
  throw new Error('Pass a 4:3 source and a new versioned industry or journey asset stem.');
}
const metadata = await sharp(source).metadata();
if (Math.abs(metadata.width / metadata.height - 4 / 3) > .001 || metadata.width < 1280) {
  throw new Error('Use a 4:3 source at least 1280px wide; do not crop or enlarge.');
}
const targets = [320, 640, 1280].map(width => ({
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
