import sharp from 'sharp';
import { readdir, mkdir, rename, unlink } from 'fs/promises';
import { join, extname, dirname } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '../public');

const QUALITY = {
  webp: 85,
  jpeg: 85,
  png: 90
};

const SIZES = {
  thumbnail: 400,
  medium: 800,
  large: 1920,
  hero: 2560
};

async function processImage(inputPath, outputDir) {
  const ext = extname(inputPath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;

  const filename = inputPath.split('/').pop().replace(/\.(jpg|jpeg|png)$/i, '');

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    console.log(`Processing: ${filename}${ext} (${metadata.width}x${metadata.height})`);

    // Create WebP version (best compression)
    await image
      .webp({ quality: QUALITY.webp, effort: 6 })
      .toFile(join(outputDir, `${filename}.webp`));

    // Create responsive sizes for large images (before replacing source)
    if (metadata.width > 1200) {
      await sharp(inputPath)
        .resize(SIZES.medium, null, { withoutEnlargement: true })
        .webp({ quality: QUALITY.webp })
        .toFile(join(outputDir, `${filename}-medium.webp`));
    }

    // Create optimized JPEG/PNG as fallback
    if (['.jpg', '.jpeg'].includes(ext)) {
      const tempFile = join(outputDir, `${filename}.temp.jpg`);
      await sharp(inputPath)
        .jpeg({ quality: QUALITY.jpeg, mozjpeg: true })
        .toFile(tempFile);
      await unlink(inputPath);
      await rename(tempFile, join(outputDir, `${filename}.jpg`));
    } else if (ext === '.png') {
      const tempFile = join(outputDir, `${filename}.temp.png`);
      await sharp(inputPath)
        .png({ quality: QUALITY.png, compressionLevel: 9 })
        .toFile(tempFile);
      await unlink(inputPath);
      await rename(tempFile, join(outputDir, `${filename}.png`));
    }

    console.log(`✓ Optimized: ${filename}`);
  } catch (error) {
    console.error(`✗ Error processing ${filename}:`, error.message);
  }
}

async function walkDirectory(dir, callback) {
  const files = await readdir(dir, { withFileTypes: true });

  for (const file of files) {
    const path = join(dir, file.name);
    if (file.isDirectory() && !file.name.startsWith('.')) {
      await walkDirectory(path, callback);
    } else if (file.isFile()) {
      await callback(path, dir);
    }
  }
}

async function main() {
  console.log('🖼️  Starting image optimization...\n');

  const imageDirs = [
    'images/home',
    'images/about',
    'images/contacts',
    'images/team',
    'images/projects',
    'images/industries'
  ];

  for (const dir of imageDirs) {
    const fullPath = join(publicDir, dir);
    if (!existsSync(fullPath)) continue;

    console.log(`\n📁 Processing: ${dir}`);
    await walkDirectory(fullPath, (file, outputDir) => processImage(file, outputDir));
  }

  console.log('\n✅ Image optimization complete!');
}

main().catch(console.error);
