import sharp from 'sharp';
import pngToIco from 'png-to-ico';
import { writeFileSync } from 'fs';

const SIZE = 512;
const RADIUS = 96; // rounded corner radius at 512px
const COLOR = '#F97316';

// SVG logo: orange rounded square with white bold "M"
const logoSvg = `
<svg width="${SIZE}" height="${SIZE}" viewBox="0 0 ${SIZE} ${SIZE}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${SIZE}" height="${SIZE}" rx="${RADIUS}" ry="${RADIUS}" fill="${COLOR}"/>
  <text
    x="50%" y="54%"
    dominant-baseline="central"
    text-anchor="middle"
    font-family="Arial, Helvetica, sans-serif"
    font-weight="bold"
    font-size="320"
    fill="white"
    letter-spacing="-10"
  >M</text>
</svg>`;

// Scalable icon.svg (clean, no fixed size)
const iconSvg = `<svg viewBox="0 0 ${SIZE} ${SIZE}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${SIZE}" height="${SIZE}" rx="${RADIUS}" ry="${RADIUS}" fill="${COLOR}"/>
  <text
    x="50%" y="54%"
    dominant-baseline="central"
    text-anchor="middle"
    font-family="Arial, Helvetica, sans-serif"
    font-weight="bold"
    font-size="320"
    fill="white"
    letter-spacing="-10"
  >M</text>
</svg>`;

const svgBuffer = Buffer.from(logoSvg);

// Generate all assets
async function main() {
  // 1. logo-512.png
  await sharp(svgBuffer).resize(512, 512).png().toFile('public/logo-512.png');
  console.log('✓ public/logo-512.png (512x512)');

  // 2. apple-touch-icon.png (180x180)
  await sharp(svgBuffer).resize(180, 180).png().toFile('public/apple-touch-icon.png');
  console.log('✓ public/apple-touch-icon.png (180x180)');

  // 3. favicon.ico (32x32)
  const png32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
  const ico = await pngToIco(png32);
  writeFileSync('public/favicon.ico', ico);
  console.log('✓ public/favicon.ico (32x32)');

  // 4. icon.svg
  writeFileSync('public/icon.svg', iconSvg.trim());
  console.log('✓ public/icon.svg');
}

main().catch(err => { console.error(err); process.exit(1); });
