/**
 * Sitemap Generator для Diwave
 *
 * Генерує sitemap.xml для всіх сторінок сайту
 *
 * Використання:
 *   node scripts/generate-sitemap.js
 */

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://diwave.company';
const OUTPUT_FILE = path.join(__dirname, '..', 'public', 'sitemap.xml');

// Всі маршрути сайту
const routes = {
  // Основні сторінки (пріоритет: високий, зміни: щотижня)
  main: [
    { url: '/', priority: '1.0', changefreq: 'weekly', languages: ['uk', 'en'] },
    { url: '/about', priority: '0.8', changefreq: 'monthly', languages: ['uk', 'en'] },
    { url: '/contact', priority: '0.8', changefreq: 'monthly', languages: ['uk', 'en'] },
    { url: '/audit', priority: '0.7', changefreq: 'monthly', languages: ['uk', 'en'] }
  ],

  // Каталоги (пріоритет: високий)
  catalogs: [
    { url: '/solutions', priority: '0.9', changefreq: 'weekly', languages: ['uk', 'en'] },
    { url: '/projects', priority: '0.9', changefreq: 'weekly', languages: ['uk', 'en'] },
    { url: '/industries', priority: '0.9', changefreq: 'weekly', languages: ['uk', 'en'] }
  ],

  // Рішення (пріоритет: високий)
  solutions: [
    { url: '/solutions/car-washes', priority: '0.8', changefreq: 'monthly', languages: ['uk', 'en'] },
    { url: '/solutions/alcohol-vending', priority: '0.8', changefreq: 'monthly', languages: ['uk', 'en'] },
    { url: '/solutions/drones', priority: '0.8', changefreq: 'monthly', languages: ['uk', 'en'] },
    { url: '/solutions/ecommerce', priority: '0.8', changefreq: 'monthly', languages: ['uk', 'en'] },
    { url: '/solutions/iot-scada', priority: '0.8', changefreq: 'monthly', languages: ['uk', 'en'] },
    { url: '/solutions/marketing', priority: '0.8', changefreq: 'monthly', languages: ['uk', 'en'] },
    { url: '/solutions/project-sourcing', priority: '0.7', changefreq: 'monthly', languages: ['uk', 'en'] },
    { url: '/solutions/samwash-qr', priority: '0.7', changefreq: 'monthly', languages: ['uk', 'en'] }
  ],

  // Проєкти (пріоритет: середній-високий)
  projects: [
    { url: '/projects/car-wash', priority: '0.7', changefreq: 'monthly', languages: ['uk', 'en'] },
    { url: '/projects/vending', priority: '0.7', changefreq: 'monthly', languages: ['uk', 'en'] },
    { url: '/projects/drones', priority: '0.7', changefreq: 'monthly', languages: ['uk', 'en'] },
    { url: '/projects/ecommerce', priority: '0.7', changefreq: 'monthly', languages: ['uk', 'en'] },
    { url: '/projects/plantpol', priority: '0.6', changefreq: 'monthly', languages: ['uk', 'en'] },
    { url: '/projects/lemberg-flowers', priority: '0.6', changefreq: 'monthly', languages: ['uk', 'en'] },
    { url: '/projects/usa-ua', priority: '0.6', changefreq: 'monthly', languages: ['uk', 'en'] },
    { url: '/projects/gnizdo', priority: '0.6', changefreq: 'monthly', languages: ['uk', 'en'] },
    { url: '/projects/lasso-ai', priority: '0.6', changefreq: 'monthly', languages: ['uk', 'en'] },
    { url: '/projects/hostel-booking', priority: '0.6', changefreq: 'monthly', languages: ['uk', 'en'] },
    { url: '/projects/areascode', priority: '0.6', changefreq: 'monthly', languages: ['uk', 'en'] },
    { url: '/projects/gust-energy', priority: '0.6', changefreq: 'monthly', languages: ['uk', 'en'] },
    { url: '/projects/paolla', priority: '0.6', changefreq: 'monthly', languages: ['uk', 'en'] },
    { url: '/projects/energy', priority: '0.6', changefreq: 'monthly', languages: ['uk', 'en'] },
    { url: '/projects/loyalty-crm', priority: '0.6', changefreq: 'monthly', languages: ['uk', 'en'] },
    { url: '/projects/samwash-qr', priority: '0.6', changefreq: 'monthly', languages: ['uk', 'en'] }
  ],

  // Індустрії (пріоритет: середній)
  industries: [
    { url: '/industries/automotive', priority: '0.7', changefreq: 'monthly', languages: ['uk', 'en'] },
    { url: '/industries/vending', priority: '0.7', changefreq: 'monthly', languages: ['uk', 'en'] },
    { url: '/industries/fintech', priority: '0.7', changefreq: 'monthly', languages: ['uk', 'en'] },
    { url: '/industries/energy', priority: '0.7', changefreq: 'monthly', languages: ['uk', 'en'] },
    { url: '/industries/retail', priority: '0.7', changefreq: 'monthly', languages: ['uk', 'en'] },
    { url: '/industries/logistics', priority: '0.7', changefreq: 'monthly', languages: ['uk', 'en'] },
    { url: '/industries/iot', priority: '0.7', changefreq: 'monthly', languages: ['uk', 'en'] },
    { url: '/industries/marketing', priority: '0.7', changefreq: 'monthly', languages: ['uk', 'en'] },
    { url: '/industries/automotive/car-wash-qr', priority: '0.6', changefreq: 'monthly', languages: ['uk', 'en'] }
  ]
};

/**
 * Генерує URL entry для sitemap
 */
function generateUrlEntry(url, priority, changefreq, locale = 'uk') {
  const fullUrl = locale === 'en' ? `${BASE_URL}/en${url}` : `${BASE_URL}${url}`;
  const lastmod = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

  return `
  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="uk" href="${BASE_URL}${url}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}/en${url}"/>
  </url>`;
}

/**
 * Генерує sitemap.xml
 */
function generateSitemap() {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">`;

  // Додаємо всі маршрути
  Object.values(routes).forEach(category => {
    category.forEach(route => {
      route.languages.forEach(locale => {
        sitemap += generateUrlEntry(route.url, route.priority, route.changefreq, locale);
      });
    });
  });

  sitemap += '\n</urlset>';

  return sitemap;
}

/**
 * Головна функція
 */
function main() {
  console.log('🗺️  Generating sitemap.xml...\n');

  const sitemap = generateSitemap();

  fs.writeFileSync(OUTPUT_FILE, sitemap, 'utf8');

  console.log(`✅ Sitemap generated successfully!`);
  console.log(`📁 Location: ${OUTPUT_FILE}`);

  // Підрахунок URL
  const totalUrls = Object.values(routes).reduce((acc, category) => {
    return acc + category.reduce((sum, route) => sum + route.languages.length, 0);
  }, 0);

  console.log(`📊 Total URLs: ${totalUrls}`);
  console.log(`🌐 Base URL: ${BASE_URL}\n`);
  console.log('💡 Не забудьте додати sitemap.xml до Google Search Console!\n');
}

main();
