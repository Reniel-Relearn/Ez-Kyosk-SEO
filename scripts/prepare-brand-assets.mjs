import sharp from 'sharp';

// Deterministic derivatives of the original supplied assets, never regenerated logos.
const logo = await sharp('assets/ez-kyosk-lockup.png').resize({ width: 1000, height: 400, fit: 'inside' }).png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#ffffff' } })
  .composite([{ input: logo, gravity: 'centre' }]).png().toFile('public/brand-social.png');
await sharp('assets/ez_kyosk_icon.png')
  .resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png().toFile('public/favicon.png');
console.log('Prepared social preview and favicon from the original assets.');
