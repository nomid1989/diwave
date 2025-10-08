# Diwave WhiteReact SPA

SPA на Vite + React + TypeScript + Tailwind + Framer Motion + i18next + react-helmet-async.

- Мови: uk (за замовчуванням), en (через префікс /en)
- SEO: теги title/description/canonical/alternate + JSON-LD (через компонент SEO)
- Зображення: використовуються з теки `public/` (див. `vite.config.ts -> publicDir`)
- Дизайн: скляні панелі, сяйво, анімації (iOS-подібний стиль)

## Запуск
# diwave

## Оптимізація зображень (public/)

Для кращої швидкодії та якості використовуйте сучасні формати AVIF (пріоритет) і WebP (fallback). Ми додали компонент SmartImage та скрипт конвертації.

1) Компонент SmartImage
- Автоматично віддає AVIF/WebP, якщо такі файли існують поруч з оригіналом.
- Підтримує фон (asBackground), sizes, priority (eager + fetchpriority=high), decoding="async".
- Якщо ви передали лише теку (srcFolder), компонент спробує поширені імена (hero/cover/…); також включено slavik.* для фото команди.

Використання:

<SmartImage srcFolder="/images/team" alt="Команда Diwave" className="w-full h-64 rounded" />

Або з явними шляхами:

<SmartImage sources={["/images/team/slavik.avif", "/images/team/slavik.webp", "/images/team/slavik.jpg"]} alt="Команда" width={1200} height={800} sizes="(max-width: 768px) 100vw, 50vw" />

2) Конвертація існуючих JPG/PNG → AVIF/WebP
- Скрипт: scripts/convert-images.mjs (потребує sharp).
- Встановіть залежність: npm i -D sharp
- Запуск: node scripts/convert-images.mjs
- Скрипт пройде public/ і створить поруч name.avif та name.webp для кожного JPG/PNG.

Рекомендації:
- Тримайте поруч три файли: name.avif, name.webp, name.jpg (джерело).
- Для великих hero-фото обмежуйте ширину (наприклад 1920px) перед конвертацією.
- Додавайте alt-тексти. Для img поза SmartImage — проставляйте loading="lazy" і intrinsic width/height для меншого CLS.

# Diwave WhiteReact SPA

SPA на Vite + React + TypeScript + Tailwind + Framer Motion + i18next + react-helmet-async.

- Мови: uk (за замовчуванням), en (через префікс /en)
- SEO: теги title/description/canonical/alternate + JSON-LD (через компонент SEO)
- Зображення: використовуються з теки `public/` (див. `vite.config.ts -> publicDir`)
- Дизайн: скляні панелі, сяйво, анімації (iOS-подібний стиль)

## Запуск
# diwave

## Оптимізація зображень (public/)

Для кращої швидкодії та якості використовуйте сучасні формати AVIF (пріоритет) і WebP (fallback). Ми додали компонент SmartImage та скрипт конвертації.

1) Компонент SmartImage
- Автоматично віддає AVIF/WebP, якщо такі файли існують поруч з оригіналом.
- Підтримує фон (asBackground), sizes, priority (eager + fetchpriority=high), decoding="async".
- Якщо ви передали лише теку (srcFolder), компонент спробує поширені імена (hero/cover/…); також включено slavik.* для фото команди.

Використання:

<SmartImage srcFolder="/images/team" alt="Команда Diwave" className="в-full h-64 rounded" />

Або з явними шляхами:

<SmartImage sources={["/images/team/slavik.avif", "/images/team/slavik.webp", "/images/team/slavik.jpg"]} alt="Команда" width={1200} height={800} sizes="(max-width: 768px) 100vw, 50vw" />

2) Конвертація існуючих JPG/PNG → AVIF/WebP
- Скрипт: scripts/convert-images.mjs (потребує sharp).
- Встановіть залежність: npm i -D sharp
- Запуск: node scripts/convert-images.mjs
- Скрипт пройде public/ і створить поруч name.avif та name.webp для кожного JPG/PNG.

Рекомендації:
- Тримайте поруч три файли: name.avif, name.webp, name.jpg (джерело).
- Для великих hero-фото обмежуйте ширину (наприклад 1920px) перед конвертацією.
- Додавайте alt-тексти. Для img поза SmartImage — проставляйте loading="lazy" і intrinsic width/height для меншого CLS.

## Контактна форма (E‑mail + Telegram)

Форма на сторінці /contact надсилає повідомлення одночасно в Telegram та на e‑mail.

Налаштування (.env):
- VITE_TO_EMAIL — e‑mail отримувача (буде використано formsubmit.co для пересилки без бекенду).
- VITE_TELEGRAM_BOT_TOKEN — токен бота Telegram.
- VITE_TELEGRAM_CHAT_ID — chat_id одержувача.

Примітки:
- formsubmit.co при першому відправленні на адресу надішле лист підтвердження. Потрібно підтвердити, щоб почати отримувати повідомлення.
- Додано anti‑spam: приховане поле (honeypot) і обмеження частоти (не частіше 1 раз на 60 сек з одного браузера).
- Якщо бажаєте використовувати власний SMTP/бекенд — реалізуйте ендпоінт /api/contact та замініть sendEmail() у src/lib/email.ts на виклик вашого сервера (див. SMTP_* у .env.example).

Тестування:
1. Заповніть .env згідно з пунктами вище.
2. Запустіть застосунок і відкрийте /contact.
3. Надішліть тестове повідомлення — перевірте Telegram і e‑mail.


## Thank You page and tracking

- After a successful submission (via at least one channel), the app redirects to `/thank-you` (or `/en/thank-you`).
- Query param `s` indicates channel success: `both`, `email`, `tg`. Use this page for analytics goals/conversions.

### Telegram delivery (CORS)
- Browsers block JSON POSTs to Telegram Bot API due to CORS. We use a CORS-safe fire-and-forget request (GET no-cors, with FormData POST fallback). You won’t see a response body in devtools, but the message is sent by the browser.
- Make sure:
  - The bot token and chat ID are valid in `.env` (VITE_TELEGRAM_BOT_TOKEN, VITE_TELEGRAM_CHAT_ID).
  - You have started a chat with your bot from the target chat (for personal chat) or added the bot to the group and allowed it to post.

### Email delivery (formsubmit.co)
- First submission to a new recipient triggers a verification email. Confirm it once to start receiving messages.
- Subject and table template are set automatically.

# Diwave WhiteReact SPA

SPA на Vite + React + TypeScript + Tailwind + Framer Motion + i18next + react-helmet-async.

- Мови: uk (за замовчуванням), en (через префікс /en)
- SEO: теги title/description/canonical/alternate + JSON-LD (через компонент SEO)
- Зображення: використовуються з теки `public/` (див. `vite.config.ts -> publicDir`)
- Дизайн: скляні панелі, сяйво, анімації (iOS-подібний стиль)

## Запуск
# diwave

## Оптимізація зображень (public/)

Для кращої швидкодії та якості використовуйте сучасні формати AVIF (пріоритет) і WebP (fallback). Ми додали компонент SmartImage та скрипт конвертації.

1) Компонент SmartImage
- Автоматично віддає AVIF/WebP, якщо такі файли існують поруч з оригіналом.
- Підтримує фон (asBackground), sizes, priority (eager + fetchpriority=high), decoding="async".
- Якщо ви передали лише теку (srcFolder), компонент спробує поширені імена (hero/cover/…); також включено slavik.* для фото команди.

Використання:

<SmartImage srcFolder="/images/team" alt="Команда Diwave" className="w-full h-64 rounded" />

Або з явними шляхами:

<SmartImage sources={["/images/team/slavik.avif", "/images/team/slavik.webp", "/images/team/slavik.jpg"]} alt="Команда" width={1200} height={800} sizes="(max-width: 768px) 100vw, 50vw" />

2) Конвертація існуючих JPG/PNG → AVIF/WebP
- Скрипт: scripts/convert-images.mjs (потребує sharp).
- Встановіть залежність: npm i -D sharp
- Запуск: node scripts/convert-images.mjs
- Скрипт пройде public/ і створить поруч name.avif та name.webp для кожного JPG/PNG.

Рекомендації:
- Тримайте поруч три файли: name.avif, name.webp, name.jpg (джерело).
- Для великих hero-фото обмежуйте ширину (наприклад 1920px) перед конвертацією.
- Додавайте alt-тексти. Для img поза SmartImage — проставляйте loading="lazy" і intrinsic width/height для меншого CLS.

# Diwave WhiteReact SPA

SPA на Vite + React + TypeScript + Tailwind + Framer Motion + i18next + react-helmet-async.

- Мови: uk (за замовчуванням), en (через префікс /en)
- SEO: теги title/description/canonical/alternate + JSON-LD (через компонент SEO)
- Зображення: використовуються з теки `public/` (див. `vite.config.ts -> publicDir`)
- Дизайн: скляні панелі, сяйво, анімації (iOS-подібний стиль)

## Запуск
# diwave

## Оптимізація зображень (public/)

Для кращої швидкодії та якості використовуйте сучасні формати AVIF (пріоритет) і WebP (fallback). Ми додали компонент SmartImage та скрипт конвертації.

1) Компонент SmartImage
- Автоматично віддає AVIF/WebP, якщо такі файли існують поруч з оригіналом.
- Підтримує фон (asBackground), sizes, priority (eager + fetchpriority=high), decoding="async".
- Якщо ви передали лише теку (srcFolder), компонент спробує поширені імена (hero/cover/…); також включено slavik.* для фото команди.

Використання:

<SmartImage srcFolder="/images/team" alt="Команда Diwave" className="в-full h-64 rounded" />

Або з явними шляхами:

<SmartImage sources={["/images/team/slavik.avif", "/images/team/slavik.webp", "/images/team/slavik.jpg"]} alt="Команда" width={1200} height={800} sizes="(max-width: 768px) 100vw, 50vw" />

2) Конвертація існуючих JPG/PNG → AVIF/WebP
- Скрипт: scripts/convert-images.mjs (потребує sharp).
- Встановіть залежність: npm i -D sharp
- Запуск: node scripts/convert-images.mjs
- Скрипт пройде public/ і створить поруч name.avif та name.webp для кожного JPG/PNG.

Рекомендації:
- Тримайте поруч три файли: name.avif, name.webp, name.jpg (джерело).
- Для великих hero-фото обмежуйте ширину (наприклад 1920px) перед конвертацією.
- Додавайте alt-тексти. Для img поза SmartImage — проставляйте loading="lazy" і intrinsic width/height для меншого CLS.

## Контактна форма (E‑mail + Telegram)

Форма на сторінці /contact надсилає повідомлення одночасно в Telegram та на e‑mail.

Варіант 1 (рекомендовано, надійно): серверлес ендпоінт /api/contact (Vercel)
- Працює без CORS та з перевіркою статусу. Використовує Telegram Bot API та SMTP (Gmail або інший).
- Налаштування секретів (на платформі деплою, не в клієнтському .env):
  - TELEGRAM_BOT_TOKEN
  - TELEGRAM_CHAT_ID
  - SMTP_HOST, SMTP_PORT (465), SMTP_USER, SMTP_PASS (наприклад Gmail App Password)
  - TO_EMAIL (адреса отримувача)
- Після деплою перевірте POST /api/contact.

Варіант 2 (fallback): клієнтські відправки
- Telegram: no-cors запит напряму в Bot API (може не показувати статус у браузері, але відправляє).
- Email: formsubmit.co (потрібне одноразове підтвердження адреси-одержувача).

Тестування:
1. Заповніть секрети на платформі деплою (Vercel → Project Settings → Environment Variables).
2. Заповніть .env локально для клієнтської перевірки (VITE_TELEGRAM_*, VITE_TO_EMAIL).
3. Відкрийте /contact, надішліть тестове повідомлення — перевірте Telegram та e‑mail.

### Thank You page and tracking
- Після успішної відправки — редірект на `/thank-you` (або `/en/thank-you`).
- Параметр `s`: `both|email|tg` — для аналітики.

### Telegram delivery (важливо)
- Додайте бота у чат/групу або розпочніть приватний чат, інакше бот не може написати першим.

### Email delivery (SMTP / Gmail)
- Рекомендовано Gmail App Password (2FA обов’язково) або SMTP провайдера.
- From: FROM_EMAIL (якщо не вказано — SMTP_USER). Reply-To виставляється на адресу відправника форми.

## Запис у календар (Booking)

- Нові сторінки: `/book` та `/en/book`.
- Додайте посилання на ваш календар-бронювання у `.env`:
  - `VITE_BOOKING_URL` — посилання Google Calendar Appointments або Calendly.
- Сторінки Contact і Thank You мають кнопку "Записатися в календар / Book a call".
- Якщо сторінку заборонено вбудовувати у iframe (X-Frame-Options), скористайтесь кнопкою "Open in new tab".
