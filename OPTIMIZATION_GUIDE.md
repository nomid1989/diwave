# Гід по Оптимізації Швидкості — Diwave 2025

Цей документ містить покрокові інструкції для досягнення максимальної швидкості сайту.

---

## 🎯 Цілі Оптимізації

### Поточні метрики (прогноз):
- **FCP:** 1.5s 🟡 Needs Improvement
- **LCP:** 2.8s 🟡 Needs Improvement  
- **TTI:** 3.5s 🟡 Needs Improvement

### Після оптимізації:
- **FCP:** 0.8s ✅ Good
- **LCP:** 1.2s ✅ Good
- **TTI:** 1.8s ✅ Good

**Покращення:** 50-60% швидше

---

## 🚀 Крок 1: Оптимізація Зображень (КРИТИЧНО)

### Що це дає:
- 103 MB зображень → ~25 MB
- Зменшення на 75%
- LCP покращиться на 1-2 секунди

### Інструкції:

1. **Встановити sharp:**
```bash
npm install --save-dev sharp
```

2. **Запустити оптимізацію:**
```bash
node scripts/optimize-images.js
```

3. **Що відбудеться:**
   - Скрипт знайде всі PNG/JPG файли >100KB
   - Створить AVIF та WebP версії
   - Оригінальні файли залишаться (для fallback)
   - Статистика буде виведена в консоль

4. **Перевірити результат:**
```bash
# Приклад: було img_1.png (1.5 MB)
# Тепер є:
# - img_1.png (1.5 MB, залишився для старих браузерів)
# - img_1.avif (200 KB, для сучасних браузерів)
# - img_1.webp (250 KB, для Safari/старіших браузерів)

# SmartImage component автоматично вибере найкращий формат!
```

### Очікуваний результат:
```
🚀 Diwave Image Optimization

Settings:
  AVIF quality: 80
  WebP quality: 85
  Min file size: 100KB

Found 242 images

✅ img_1.png (1536KB → 205KB, -86.7%)
✅ img_2.png (1024KB → 180KB, -82.4%)
✅ hero.png (687KB → 110KB, -84.0%)
...

📊 Statistics:
  Total images:     242
  Optimized:        47
  Skipped:          195
  Errors:           0
  Space saved:      78.34 MB
  Avg reduction:    1667 KB per image

✅ Done!
```

**Час виконання:** ~5-10 хвилин (залежить від кількості великих зображень)

---

## ⚡ Крок 2: React.lazy Code Splitting (КРИТИЧНО)

### Що це дає:
- Initial bundle ↓ 40-60%
- TTI покращується на 50%
- Кожна сторінка завантажує тільки свій код

### Інструкції:

1. **Відкрити src/router.tsx**

2. **Додати imports на початку файлу:**
```typescript
import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import App from './App';

// Замість прямих імпортів використовуємо lazy
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Projects = lazy(() => import('./pages/Projects'));
const Industries = lazy(() => import('./pages/Industries'));
const Contact = lazy(() => import('./pages/Contact'));
const QR = lazy(() => import('./pages/QR'));

// Детальні сторінки
const SamwashQR = lazy(() => import('./pages/solutions/SamwashQR'));
const SamwashQRProject = lazy(() => import('./pages/projects/SamwashQR'));
const AutomotiveCarWashQR = lazy(() => import('./pages/industries/AutomotiveCarWashQR'));

// Продовжити для ВСІХ імпортів сторінок...
const CarWashProject = lazy(() => import('./pages/projects/CarWash'));
const VendingProject = lazy(() => import('./pages/projects/Vending'));
// ... і так далі для всіх 50+ сторінок
```

3. **Створити LoadingSpinner компонент (src/components/LoadingSpinner.tsx):**
```typescript
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-400"></div>
    </div>
  );
};

export default LoadingSpinner;
```

4. **Оновити withLayout функцію в router.tsx:**
```typescript
import LoadingSpinner from './components/LoadingSpinner';

const withLayout = (element: React.ReactNode) => (
  <App>
    <Suspense fallback={<LoadingSpinner />}>
      {element}
    </Suspense>
  </App>
);
```

5. **Зберегти та протестувати:**
```bash
npm run dev
```

6. **Перевірити в DevTools:**
   - Відкрити Network tab
   - Перезавантажити сторінку
   - Побачите окремі chunk файли для кожної сторінки
   - Initial bundle буде значно меншим

### Очікуваний результат:
```
Було (без lazy):
  main.js: 850 KB

Стало (з lazy):
  main.js: 250 KB (тільки App + Router + Header/Footer)
  Home.chunk.js: 45 KB (завантажується тільки на головній)
  Solutions.chunk.js: 38 KB (завантажується тільки на /solutions)
  CarWash.chunk.js: 32 KB (завантажується тільки на /projects/car-wash)
  ... і так далі
```

**Час виконання:** 1-2 години (потрібно обгорнути всі імпорти)

---

## 🔧 Крок 3: Додаткові Оптимізації (ОПЦІОНАЛЬНО)

### 3.1 Preload Critical Fonts

**public/index.html:**
```html
<head>
  <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>
</head>
```

### 3.2 Service Worker для PWA

**src/serviceWorker.ts:**
```typescript
const CACHE_NAME = 'diwave-v1';
const urlsToCache = [
  '/',
  '/styles.css',
  '/images/logo.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
```

**src/main.tsx:**
```typescript
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/serviceWorker.js');
  });
}
```

### 3.3 CSS Optimization

**package.json (додати script):**
```json
{
  "scripts": {
    "build": "vite build",
    "build:analyze": "vite build --mode production && vite-bundle-analyzer"
  }
}
```

---

## 📊 Як Перевірити Результат

### 1. Локальний Build:
```bash
npm run build
npm run preview
```

### 2. Lighthouse Audit:
```bash
# Chrome DevTools → Lighthouse → Mobile → Generate Report
```

### 3. WebPageTest:
```bash
https://www.webpagetest.org/
# Ввести URL вашого staging/production сайту
```

### 4. Google PageSpeed Insights:
```bash
https://pagespeed.web.dev/
# Ввести URL
```

---

## ✅ Чеклист Оптимізацій

- [ ] **Крок 1:** Оптимізація зображень (AVIF/WebP)
  - [ ] Встановити sharp
  - [ ] Запустити scripts/optimize-images.js
  - [ ] Перевірити що .avif та .webp файли створилися

- [ ] **Крок 2:** React.lazy code splitting
  - [ ] Оновити всі імпорти в router.tsx
  - [ ] Створити LoadingSpinner компонент
  - [ ] Оновити withLayout з Suspense
  - [ ] Протестувати всі сторінки

- [ ] **Крок 3 (опціонально):** Додаткові оптимізації
  - [ ] Preload критичних шрифтів
  - [ ] Service Worker для PWA
  - [ ] CSS minification

- [ ] **Тестування:**
  - [ ] Lighthouse audit (Desktop + Mobile)
  - [ ] WebPageTest
  - [ ] Перевірити всі сторінки завантажуються коректно

---

## 🎯 Очікувані Результати

### Lighthouse Score (після всіх оптимізацій):

**Desktop:**
- Performance: 95+ ✅
- Accessibility: 100 ✅
- Best Practices: 100 ✅
- SEO: 100 ✅

**Mobile:**
- Performance: 85+ ✅
- Accessibility: 100 ✅
- Best Practices: 100 ✅
- SEO: 100 ✅

### Core Web Vitals:

- **LCP:** <1.5s ✅ (було 2.8s)
- **FID:** <50ms ✅ (вже добре)
- **CLS:** <0.1 ✅ (вже добре)
- **FCP:** <1.0s ✅ (було 1.5s)
- **TTI:** <2.0s ✅ (було 3.5s)

---

## 💡 Корисні Команди

```bash
# Аналіз розміру бандлу
npm run build
npx vite-bundle-visualizer

# Перевірка TypeScript
npm run type-check

# Запуск dev сервера
npm run dev

# Production build
npm run build && npm run preview

# Оптимізація зображень
node scripts/optimize-images.js
```

---

## 📞 Контакти

**Diwave**  
Email: info@diwave.company  
Tech Lead: Dmytro Kravets (dmytro@diwave.company)

---

**Дата створення:** 12 жовтня 2025  
**Версія:** 1.0
**Проєкт:** diwavenew
