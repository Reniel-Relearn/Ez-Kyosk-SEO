import sharp from 'sharp';

// Resize only: visual edits are performed with the built-in ImageGen tool.
const source = process.argv[2];
if (!source) throw new Error('Pass the reviewed generated source image path.');
const metadata = await sharp(source).metadata();
if (Math.abs(metadata.width / metadata.height - 4 / 3) > .001) {
  throw new Error('The reviewed source must have the existing 4:3 card composition.');
}
for (const width of [320, 640, 1280]) {
  const target = `public/assets/images/platform-self-ordering-v3-${width}.webp`;
  const result = await sharp(source).resize({ width, withoutEnlargement: true })
    .webp({ quality: 86, effort: 6, smartSubsample: true }).toFile(target);
  console.log(JSON.stringify({ target, width: result.width, height: result.height, bytes: result.size }));
}
