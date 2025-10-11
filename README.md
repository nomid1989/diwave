# 🌊 Diwave - Корпоративний вебсайт

Сучасний багатомовний вебсайт на **Vite + React + TypeScript + Tailwind CSS + Framer Motion**.

## 🚀 Технології

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS з кастомною конфігурацією (glassmorphism, glow effects)
- **Анімації**: Framer Motion для плавних переходів
- **i18n**: react-i18next (українська/англійська)
- **SEO**: react-helmet-async + JSON-LD structured data
- **Форми**: Telegram Bot API + Email (formsubmit.co або SMTP)

## 📦 Встановлення

```bash
npm install
```

## 🔧 Налаштування

1. Створіть файл `.env` з `.env.example`:
```bash
cp .env.example .env
```

2. Заповніть змінні середовища:
```env
# Telegram Bot
VITE_TELEGRAM_BOT_TOKEN=your_bot_token
VITE_TELEGRAM_CHAT_ID=your_chat_id

# Email
VITE_TO_EMAIL=dmytro@diwave.company

# Site URL
VITE_SITE_URL=https://diwave.company
```

## 🎨 Структура проєкту

```
diwavenew/
├── public/
│   ├── images/
│   │   ├── home/          # Фото для головної сторінки
│   │   ├── about/         # Фото про компанію
│   │   ├── team/          # Фото команди
│   │   ├── projects/      # Фото проєктів
│   │   └── industries/    # Фото індустрій
│   └── robots.txt
├── src/
│   ├── components/        # React компоненти
│   ├── pages/             # Сторінки
│   ├── lib/               # Утиліти та бібліотеки
│   └── router.tsx         # Налаштування роутингу
├── scripts/
│   └── optimize-images.js # Скрипт оптимізації зображень
└── api/
    └── contact.ts         # API для контактної форми (Vercel)
```

## 🖼️ Оптимізація зображень

Проєкт включає скрипт автоматичної оптимізації зображень:

```bash
npm run optimize:images
```

Скрипт конвертує JPG/PNG → WebP з оптимальним стисненням:
- WebP: якість 85%, зменшує розмір на ~30-50%
- Створює responsive версії для великих зображень
- Зберігає оригінали як fallback

### Використання SmartImage

Компонент автоматично підбирає оптимальний формат:

```tsx
// З папки
<SmartImage
  srcFolder="/images/team"
  alt="Команда Diwave"
  className="w-full h-64 rounded"
/>

// З конкретними шляхами
<SmartImage
  sources={[
    "/images/home/design.jpeg",
    "/images/home/design2.jpeg"
  ]}
  alt="Дизайн проєкту"
/>
```

## 📝 Контактна форма

Форма надсилає повідомлення одночасно в **Telegram + Email**.

### Варіант 1: Серверний API (рекомендовано для production)

Використовує `api/contact.ts` на Vercel Functions:

1. Deploy на Vercel
2. Додайте Environment Variables:
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`
   - `TO_EMAIL`

### Варіант 2: Клієнтський (fallback)

Працює через браузер:
- **Telegram**: no-cors запит до Bot API
- **Email**: formsubmit.co (потрібне підтвердження при першій відправці)

## 🌍 Багатомовність

Сайт підтримує українську (за замовчуванням) та англійську мови:

- Українська: `https://diwave.company/`
- Англійська: `https://diwave.company/en`

Перемикач мов у Header компоненті.

## 🎯 SEO оптимізація

- ✅ Динамічні meta теги (title, description, og:image)
- ✅ JSON-LD structured data (Organization, Person, FAQPage)
- ✅ Canonical та alternate URLs
- ✅ Sitemap.xml та robots.txt
- ✅ Lazy loading зображень
- ✅ Performance оптимізація

## 📱 Responsive Design

Повністю адаптивний дизайн з breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Команди

```bash
# Розробка
npm run dev              # Запуск dev server на http://localhost:5173

# Production
npm run build            # Збірка для production
npm run preview          # Перегляд production збірки

# Оптимізація
npm run optimize:images  # Оптимізація всіх зображень
```

## 📊 Що додано

### ✅ Виконані завдання:

1. **Контактна форма** - працює через Telegram Bot API + Email
2. **Мобільна версія** - прибрано кнопку "Обговорити проєкт" з mobile menu
3. **Галерея дизайнів** - додано секцію "Наші роботи" з 6 фото
4. **Команда** - 12 членів команди з ролями на сторінці About
5. **Проєкти** - 2 великі featured проєкти (SamWash, E-commerce)
6. **Responsive** - всі секції адаптовані під всі пристрої

### 🎨 Сучасний дизайн (2025):

- ✅ Glassmorphism ефекти
- ✅ Smooth градієнти та glow effects
- ✅ Micro-interactions при hover
- ✅ Scroll-triggered анімації (Framer Motion)
- ✅ Темна тема з яскравими акцентами (cyan/emerald)
- ✅ Performance-оптимізовані зображення

## 🖼️ Використані зображення

### Home page:
- `FPF team with Diwave.jpeg` - командне фото в секції "Хто ми?"
- `design.jpeg`, `design2-4.jpeg` - галерея робіт
- `equipment.jpeg` - обладнання в картках продуктів

### About page:
- `team/*.jpg` - 12 фото команди (artem, danik, denus, denys, diana, dimon, edik, ira, mykola, slavik, tamila, ylia)

### Projects:
- `Samwash_Full.jpg` - featured проєкт автомийок
- `Rozkriy_Full.jpg` - featured e-commerce проєкт
- `projects/*.webp` - інші проєкти

## 🔐 Безпека

- ✅ Honeypot для захисту від спаму
- ✅ Rate limiting (1 запит на 60 сек)
- ✅ Environment variables для токенів
- ✅ CORS-safe запити

## 📄 Ліцензія

© 2025 Diwave. Всі права захищено.

---

**Розробник**: Diwave Team
**Контакт**: info@diwave.company
**Tech Lead**: Dmytro Kravets (dmytro@diwave.company)
**Сайт**: https://diwave.company

---

## 📚 Додаткова Документація

- **[ARCHITECTURE_AUDIT_2025.md](./ARCHITECTURE_AUDIT_2025.md)** - Комплексний аудит архітектури проєкту
- **[OPTIMIZATION_GUIDE.md](./OPTIMIZATION_GUIDE.md)** - Покрокова інструкція оптимізації швидкості
- **[NAVIGATION_AUDIT.md](./NAVIGATION_AUDIT.md)** - Аудит навігації та посилань
- **[/src/lib/content/README.md](./src/lib/content/README.md)** - Документація i18n структури
