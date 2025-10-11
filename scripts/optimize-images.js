/**
 * Image Optimization Script для Diwave
 *
 * Конвертує великі PNG/JPG в AVIF та WebP формати
 * для покращення швидкості завантаження сайту.
 *
 * Використання:
 *   npm install --save-dev sharp
 *   node scripts/optimize-images.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

// Налаштування якості
const QUALITY_SETTINGS = {
  avif: 80,  // Найкраще стиснення
  webp: 85,  // Для старіших браузерів
  jpeg: 85   // Якщо потрібна JPG версія
};

// Мінімальний розмір для оптимізації (KB)
const MIN_SIZE_KB = 100;

// Статистика
let stats = {
  total: 0,
  optimized: 0,
  skipped: 0,
  errors: 0,
  savedBytes: 0
};

/**
 * Рекурсивно знаходить всі зображення в директорії
 */
async function findImages(dir, fileList = []) {
  const files = await readdir(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const fileStat = await stat(filePath);

    if (fileStat.isDirectory()) {
      await findImages(filePath, fileList);
    } else if (/\.(png|jpe?g)$/i.test(file)) {
      fileList.push(filePath);
    }
  }

  return fileList;
}

/**
 * Оптимізує одне зображення
 */
async function optimizeImage(imagePath) {
  const fileStat = await stat(imagePath);
  const sizeKB = fileStat.size / 1024;

  // Пропускаємо маленькі файли
  if (sizeKB < MIN_SIZE_KB) {
    console.log(`⏭️  Skipped (${Math.round(sizeKB)}KB): ${path.basename(imagePath)}`);
    stats.skipped++;
    return;
  }

  const ext = path.extname(imagePath);
  const base = imagePath.slice(0, -ext.length);

  try {
    // Перевіряємо чи вже існують оптимізовані версії
    const avifExists = fs.existsSync(`${base}.avif`);
    const webpExists = fs.existsSync(`${base}.webp`);

    if (avifExists && webpExists) {
      console.log(`✓  Already optimized: ${path.basename(imagePath)}`);
      stats.skipped++;
      return;
    }

    const image = sharp(imagePath);
    const metadata = await image.metadata();

    // Генеруємо AVIF (найсучасніший формат, найкраще стиснення)
    if (!avifExists) {
      await image
        .avif({ quality: QUALITY_SETTINGS.avif, effort: 6 })
        .toFile(`${base}.avif`);
    }

    // Генеруємо WebP (для більшої сумісності)
    if (!webpExists) {
      await image
        .webp({ quality: QUALITY_SETTINGS.webp, effort: 6 })
        .toFile(`${base}.webp`);
    }

    // Статистика
    const avifStat = await stat(`${base}.avif`);
    const webpStat = await stat(`${base}.webp`);

    const originalSize = fileStat.size;
    const newSize = Math.min(avifStat.size, webpStat.size);
    const saved = originalSize - newSize;
    const savedPercent = ((saved / originalSize) * 100).toFixed(1);

    stats.optimized++;
    stats.savedBytes += saved;

    console.log(
      `✅ ${path.basename(imagePath)} (${Math.round(sizeKB)}KB → ${Math.round(newSize / 1024)}KB, -${savedPercent}%)`
    );
  } catch (err) {
    console.error(`❌ Error processing ${imagePath}:`, err.message);
    stats.errors++;
  }
}

/**
 * Головна функція
 */
async function main() {
  console.log('🚀 Diwave Image Optimization\n');
  console.log(`Settings:`);
  console.log(`  AVIF quality: ${QUALITY_SETTINGS.avif}`);
  console.log(`  WebP quality: ${QUALITY_SETTINGS.webp}`);
  console.log(`  Min file size: ${MIN_SIZE_KB}KB\n`);

  const imagesDir = path.join(__dirname, '..', 'public', 'images');

  console.log(`📁 Scanning: ${imagesDir}\n`);

  const images = await findImages(imagesDir);
  stats.total = images.length;

  console.log(`Found ${images.length} images\n`);
  console.log('───────────────────────────────────────────────\n');

  // Обробляємо зображення паралельно (по 5 одночасно)
  const BATCH_SIZE = 5;
  for (let i = 0; i < images.length; i += BATCH_SIZE) {
    const batch = images.slice(i, i + BATCH_SIZE);
    await Promise.all(batch.map(optimizeImage));
  }

  console.log('\n───────────────────────────────────────────────');
  console.log('\n📊 Statistics:\n');
  console.log(`  Total images:     ${stats.total}`);
  console.log(`  Optimized:        ${stats.optimized}`);
  console.log(`  Skipped:          ${stats.skipped}`);
  console.log(`  Errors:           ${stats.errors}`);
  console.log(`  Space saved:      ${(stats.savedBytes / 1024 / 1024).toFixed(2)} MB`);

  if (stats.savedBytes > 0) {
    const avgReduction = ((stats.savedBytes / stats.optimized / 1024)).toFixed(0);
    console.log(`  Avg reduction:    ${avgReduction} KB per image`);
  }

  console.log('\n✅ Done!\n');
  console.log('💡 SmartImage component буде автоматично використовувати AVIF/WebP версії.\n');
}

// Запускаємо
main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
