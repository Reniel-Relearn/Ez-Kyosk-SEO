import sharp from 'sharp';
import assert from 'node:assert/strict';

// Test decoded pixels, not just the presence of an alpha channel.
export async function verifyHeroImage(file) {
  const { data, info } = await sharp(file).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const pixel = (x, y) => {
    const offset = (Math.min(info.height - 1, Math.round(y * info.height)) * info.width + Math.min(info.width - 1, Math.round(x * info.width))) * 4;
    return data.subarray(offset, offset + 4);
  };
  let transparent = 0, solid = 0;
  for (let i = 3; i < data.length; i += 4) {
    if (data[i] === 0) transparent++;
    if (data[i] >= 250) solid++;
  }
  const pixels = info.width * info.height;
  assert.ok(Math.abs(info.height / info.width - 1.5) < .01, `${file}: portrait proportions`);
  assert.ok(transparent / pixels > .4 && transparent / pixels < .65, `${file}: substantial actual transparency without losing the subject`);
  assert.ok(solid / pixels > .35, `${file}: solid kiosk and icons`);
  for (const [x, y] of [[0,0],[.999,0],[0,.999],[.999,.999],[.05,.65],[.95,.85]])
    assert.equal(pixel(x,y)[3], 0, `${file}: clear background at ${x},${y}`);
  for (const [x, y] of [[.5,.4],[.45,.8],[.45,.92]])
    assert.ok(pixel(x,y)[3] >= 250, `${file}: no holes through the device at ${x},${y}`);
  const whiteFraction = (left, top, width, height) => {
    let white = 0, total = 0;
    for (let y = Math.round(top * info.height); y < Math.round((top + height) * info.height); y++)
      for (let x = Math.round(left * info.width); x < Math.round((left + width) * info.width); x++) {
        const i = (y * info.width + x) * 4;
        total++;
        if (data[i] > 205 && data[i+1] > 205 && data[i+2] > 205 && data[i+3] > 240) white++;
      }
    return white / total;
  };
  const headerWhite = whiteFraction(.34,.055,.35,.055);
  const pedestalWhite = whiteFraction(.365,.65,.2,.052);
  assert.ok(headerWhite < .25, `${file}: no white header backing panel`);
  assert.ok(pedestalWhite < .2, `${file}: no white pedestal backing panel`);
  return { file, width: info.width, height: info.height, transparentFraction: transparent / pixels, headerWhite, pedestalWhite };
}
