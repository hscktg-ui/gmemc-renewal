const sharp = require("sharp");
const fs = require("fs");

async function makeIcon(tilePng, size, out) {
  const mark = await sharp(tilePng)
    .resize(Math.round(size * 0.78), Math.round(size * 0.78), {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  const radius = Math.round(size * 0.2);
  const svg = Buffer.from(
    `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg"><rect width="${size}" height="${size}" rx="${radius}" fill="#0b274f"/></svg>`,
  );

  await sharp(svg)
    .composite([{ input: mark, gravity: "centre" }])
    .png()
    .toFile(out);
}

async function main() {
  // GM tiles only from clean logo (right-top)
  const clean = "public/assets/logo-header-clean.png";
  const m = await sharp(clean).metadata();
  const left = Math.floor(m.width * 0.72);
  const top = 0;
  const width = m.width - left;
  const height = Math.floor(m.height * 0.62);

  const { data, info } = await sharp(clean)
    .extract({ left, top, width, height })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += info.channels) {
    if (data[i] < 30 && data[i + 1] < 30 && data[i + 2] < 30) data[i + 3] = 0;
  }

  // trim to content
  let minX = info.width,
    minY = info.height,
    maxX = 0,
    maxY = 0;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const a = data[(y * info.width + x) * info.channels + 3];
      if (a > 20) {
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }
  }
  const pad = 4;
  minX = Math.max(0, minX - pad);
  minY = Math.max(0, minY - pad);
  maxX = Math.min(info.width - 1, maxX + pad);
  maxY = Math.min(info.height - 1, maxY + pad);

  const tilePng = await sharp(data, { raw: info })
    .extract({
      left: minX,
      top: minY,
      width: maxX - minX + 1,
      height: maxY - minY + 1,
    })
    .png()
    .toBuffer();

  await sharp(tilePng).toFile("public/assets/logo-mark.png");

  for (const [size, out] of [
    [32, "public/favicon-32.png"],
    [48, "public/favicon-48.png"],
    [180, "public/apple-touch-icon.png"],
    [192, "public/icon-192.png"],
    [512, "public/icon-512.png"],
    [32, "src/app/icon.png"],
    [180, "src/app/apple-icon.png"],
  ]) {
    await makeIcon(tilePng, size, out);
  }
  await sharp("public/favicon-32.png").resize(32, 32).png().toFile("public/favicon.ico");

  // OG: building (mapo HQ) 1200x630
  const w = 1200;
  const h = 630;
  const bg = await sharp("public/assets/hero-mapo-hq.jpg")
    .resize(w, h, { fit: "cover", position: "attention" })
    .modulate({ brightness: 0.9, saturation: 0.95 })
    .jpeg({ quality: 92 })
    .toBuffer();

  const brandLogo = await sharp("public/assets/logo-footer-white.png")
    .resize({ width: 460 })
    .png()
    .toBuffer();

  const overlay = Buffer.from(`<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#071f42" stop-opacity="0.93"/>
      <stop offset="50%" stop-color="#0b274f" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#0b274f" stop-opacity="0.22"/>
    </linearGradient>
    <linearGradient id="v" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stop-color="#071f42" stop-opacity="0.7"/>
      <stop offset="50%" stop-color="#071f42" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="#071f42" stop-opacity="0.3"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <rect width="${w}" height="${h}" fill="url(#v)"/>
  <text x="72" y="455" fill="rgba(255,255,255,0.88)" font-family="Malgun Gothic, Segoe UI, sans-serif" font-size="30">전문소방을 포함한 설비 설계·감리</text>
  <text x="72" y="505" fill="rgba(255,255,255,0.55)" font-family="Malgun Gothic, Segoe UI, sans-serif" font-size="20">전기 · 통신 · 전문소방 · 기계  |  고양</text>
</svg>`);

  await sharp(bg)
    .composite([
      { input: overlay, top: 0, left: 0 },
      { input: brandLogo, top: 185, left: 72 },
    ])
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile("public/og-image.jpg");

  await sharp("public/og-image.jpg").toFile("public/assets/og-share.jpg");

  // cleanup temp
  for (const f of ["public/assets/_tile-crop.png"]) {
    if (fs.existsSync(f)) fs.unlinkSync(f);
  }

  console.log("done", {
    mark: fs.statSync("public/assets/logo-mark.png").size,
    icon: fs.statSync("src/app/icon.png").size,
    apple: fs.statSync("src/app/apple-icon.png").size,
    og: fs.statSync("public/og-image.jpg").size,
  });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
