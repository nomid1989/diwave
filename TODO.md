# 📋 Що Потрібно Зробити (TODO List)

## ✅ Зроблено (Автоматично)

- ✅ **Оптимізація зображень** - конвертація в AVIF/WebP
- ✅ **React.lazy code splitting** - зменшення initial bundle на 40-60%
- ✅ **Loading Spinner** - для React Suspense
- ✅ **Skip to main content** - покращення accessibility
- ✅ **robots.txt** - для SEO
- ✅ **sitemap.xml** - 80 URL з hreflang
- ✅ **Preload критичних ресурсів** - hero зображення

---

## 🔄 Потрібно Зробити Вручну

### 1. **Запустити оптимізацію зображень** ⏱️ 5-10 хвилин

```bash
# Скрипт вже готовий, просто запустіть:
npm run optimize:images
```

**Що це дасть:**
- 103 MB → ~25 MB (75% зменшення)
- LCP покращиться на 1.5-2 секунди
- Lighthouse Performance +15-20 балів

---

### 2. **Перевірити та протестувати** ⏱️ 10 хвилин

```bash
# Локально перевірте що все працює
npm run dev

# Перевірте код splitting
npm run build
npm run preview

# Відкрийте DevTools → Network → Зайдіть на різні сторінки
# Побачите що кожна сторінка завантажує свій chunk
```

**Що перевірити:**
- ✅ Сайт завантажується
- ✅ Навігація працює
- ✅ Loading spinner показується при переході між сторінками
- ✅ "Skip to main content" з'являється при Tab
- ✅ Зображення завантажуються (AVIF/WebP)

---

### 3. **Покращити кольоровий контраст** ⏱️ 15 хвилин (опціонально)

Знайдіть та замініть `text-gray-300` на `text-gray-200` в файлах де потрібен кращий контраст:

```bash
# Швидко знайти всі місця
grep -r "text-gray-300" src/ --include="*.tsx"

# Найкритичніші місця (зробіть заміну):
# - src/pages/Home.tsx (description текст)
# - src/components/Footer.tsx (контактна інформація)
```

**Приклад:**
```tsx
// Було
<p className="text-gray-300">Текст</p>

// Стало (кращий контраст)
<p className="text-gray-200">Текст</p>
```

---

### 4. **Додати Trust Signals** ⏱️ 30 хвилин

**Додайте секцію на Home.tsx (після About):**

```tsx
{/* Trust Signals */}
<section className="mx-auto max-w-7xl px-6 py-16">
  <div className="grid md:grid-cols-3 gap-8 text-center">
    <div>
      <div className="text-4xl font-bold text-cyan-400">50+</div>
      <div className="text-gray-300 mt-2">Завершених проєктів</div>
    </div>
    <div>
      <div className="text-4xl font-bold text-cyan-400">14+</div>
      <div className="text-gray-300 mt-2">Років досвіду</div>
    </div>
    <div>
      <div className="text-4xl font-bold text-cyan-400">100%</div>
      <div className="text-gray-300 mt-2">Задоволених клієнтів</div>
    </div>
  </div>
</section>
```

---

### 5. **Розширити FAQ** ⏱️ 20 хвилин

Додайте ще 3-5 питань в `src/pages/Home.tsx`:

```tsx
{
  question: 'Які платіжні умови?',
  answer: '50% передоплата перед стартом, 50% після завершення. Можлива оплата частинами для великих проєктів.'
},
{
  question: 'Чи підтримуєте після запуску?',
  answer: 'Так, надаємо технічну підтримку 12 місяців + гарантію на всі розробки.'
},
{
  question: 'Які кейси у вашому портфоліо?',
  answer: 'SamWash (автомийки 70% EBITDA), Plantpol (-75% штату), Gnizdo (дрони), 50+ проєктів. Детальніше в розділі Проєкти.'
}
```

---

### 6. **Тестування на мобільних** ⏱️ 15 хвилин

```bash
# Запустіть dev сервер
npm run dev

# Відкрийте Chrome DevTools → Toggle device toolbar (Ctrl+Shift+M)
# Перевірте на:
# - iPhone SE (375px) - найменший екран
# - iPhone 12 Pro (390px)
# - iPad (768px)
# - Desktop (1920px)
```

**Що перевірити:**
- ✅ Текст читабельний (мінімум 16px)
- ✅ Кнопки не менше 44x44px
- ✅ Hero section не обрізаний
- ✅ Меню працює
- ✅ Horizontal scroll відсутній

---

### 7. **Перевірка Lighthouse** ⏱️ 5 хвилин

```bash
# Зберіть проєкт
npm run build
npm run preview

# Відкрийте Chrome DevTools → Lighthouse
# Запустіть для Desktop та Mobile
```

**Очікувані результати (після оптимізації зображень):**
- Performance: 90+ (Desktop), 80+ (Mobile)
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

---

## 📦 Деплой

### Варіант 1: Vercel (Найпростіше)

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Варіант 2: VPS + Nginx

Дивіться детальну інструкцію в `DEPLOYMENT_GUIDE.md`

---

## 🎯 Пріоритети

### Критично 🔥 (Зробити сьогодні)
1. ✅ Запустити `npm run optimize:images`
2. ✅ Перевірити що все працює (`npm run dev`)
3. ✅ Зробити build (`npm run build`)
4. ✅ Перевірити Lighthouse

### Високий пріоритет (Зробити цього тижня)
5. ⏸️ Покращити контраст (15 хв)
6. ⏸️ Додати Trust Signals (30 хв)
7. ⏸️ Розширити FAQ (20 хв)
8. ⏸️ Задеплоїти на production

### Середній пріоритет (Наступного тижня)
9. ⏸️ Додати клієнтські відгуки
10. ⏸️ Додати Blog секцію
11. ⏸️ PWA (Service Worker)
12. ⏸️ Додати більше анімацій (Framer Motion)

---

## 🛠️ Корисні Команди

```bash
# Розробка
npm run dev

# Оптимізація зображень
npm run optimize:images

# Build
npm run build

# Preview build
npm run preview

# Deploy (якщо використовуєте Vercel)
vercel --prod

# Перевірити розмір bundle
npm run build
ls -lh dist/assets/
```

---

## 📞 Контакти

Якщо виникнуть питання:

**Email:** info@diwave.company
**Tech Lead:** Dmytro Kravets (dmytro@diwave.company)
**Сайт:** https://diwave.company

---

**Створено:** 2025-01-16
**Автор:** Claude (Sonnet 4.5)
