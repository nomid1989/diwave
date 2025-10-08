#!/usr/bin/env node
// Batch convert images in public/ to AVIF (primary) and WebP (fallback).
// Usage:
//   npm i -D sharp
//   node scripts/convert-images.mjs
// Notes:
// - Creates sibling files next to original: name.avif and name.webp
// - Skips if output exists and is newer than input
// - Safe to re-run

import { promises as fs } from 'node:fs';
import path from 'node:path';

async function loadSharp() {
  try {
    const sharp = (await import('sharp')).default;
    return sharp;
  } catch (e) {
    console.error('\nMissing dependency: sharp. Install with:');
    console.error('  npm i -D sharp');
    process.exit(1);
  }
}

const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, 'public');
const exts = new Set(['.jpg', '.jpeg', '.png']);

async function walk(dir) {
  const out = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const ent of entries) {
    if (ent.name.startsWith('.')) continue;
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...await walk(full));
    else out.push(full);
  }
  return out;
}

async function fileMTime(p) {
  try { return (await fs.stat(p)).mtimeMs; } catch { return 0; }
}

async function convertFile(sharp, file) {
  const ext = path.extname(file).toLowerCase();
  if (!exts.has(ext)) return; // skip already-optimized or unsupported

  const base = file.slice(0, -ext.length);
  const avifOut = base + '.avif';
  const webpOut = base + '.webp';

  const srcM = await fileMTime(file);
  const avifM = await fileMTime(avifOut);
  const webpM = await fileMTime(webpOut);

  // Convert to AVIF
  if (srcM > avifM) {
    await sharp(file)
      .avif({ quality: 48 })
      .toFile(avifOut);
    console.log('AVIF:', path.relative(PUBLIC_DIR, avifOut));
  }
  // Convert to WebP
  if (srcM > webpM) {
    await sharp(file)
      .webp({ quality: 68 })
      .toFile(webpOut);
    console.log('WEBP:', path.relative(PUBLIC_DIR, webpOut));
  }
}

(async () => {
  const sharp = await loadSharp();
  const all = await walk(PUBLIC_DIR);
  const files = all.filter((p) => exts.has(path.extname(p).toLowerCase()));
  console.log(`Found ${files.length} raster files in public/`);
  for (const f of files) {
    try {
      await convertFile(sharp, f);
    } catch (e) {
      console.warn('Failed:', path.relative(PUBLIC_DIR, f), e?.message || e);
    }
  }
  console.log('Done.');
})();
