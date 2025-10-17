# ⚡ Швидкий Старт - Diwave Production

## 🎯 Мета: Запустити сайт на production за 15 хвилин

---

## 📋 Що Треба Зробити:

### ✅ Вже Зроблено Автоматично:
- [x] React.lazy code splitting (↓40-60% bundle size)
- [x] Loading Spinner
- [x] Skip to main content (accessibility)
- [x] robots.txt + sitemap.xml (SEO)
- [x] Preload критичних ресурсів
- [x] GitHub Actions workflow (автодеплой)

### 🔥 Треба Зробити (5 хвилин):

```bash
# 1. Оптимізувати зображення (ОБОВ'ЯЗКОВО!)
npm run optimize:images

# 2. Протестувати локально
npm run dev

# 3. Зробити build
npm run build

# 4. Перевірити build локально
npm run preview
```

---

## 🚀 Варіанти Деплою

### **Варіант A: Vercel (Найпростіше) - 5 хвилин**

```bash
# Встановити Vercel CLI
npm install -g vercel

# Залогінитись
vercel login

# Деплой
vercel --prod
```

✅ **Готово!** Сайт на https://твій-проєкт.vercel.app

**Автодеплой:** Кожен `git push` → автоматично оновлює сайт

---

### **Варіант B: VPS (Повний Контроль) - 30 хвилин**

#### Крок 1: На сервері

```bash
# Підключитись
ssh root@your-server-ip

# Встановити Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs nginx git

# Клонувати репозиторій
cd /var/www
git clone https://github.com/your-username/diwavenew.git diwave
cd diwave

# Встановити + зібрати
npm install
npm run optimize:images
npm run build
```

#### Крок 2: Nginx конфіг

```bash
sudo nano /etc/nginx/sites-available/diwave
```

Вставити:
```nginx
server {
    listen 80;
    server_name diwave.company www.diwave.company;
    root /var/www/diwave/dist;
    index index.html;

    gzip on;
    gzip_types text/plain text/css application/javascript application/json;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|webp|avif)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

```bash
# Активувати
sudo ln -s /etc/nginx/sites-available/diwave /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

#### Крок 3: SSL (Безкоштовний HTTPS)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d diwave.company -d www.diwave.company
```

✅ **Готово!** Сайт на https://diwave.company

---

### **Варіант C: GitHub Actions (Автодеплой) - 15 хвилин**

#### 1. На сервері створити SSH ключ:

```bash
ssh-keygen -t ed25519 -C "github@diwave.company" -f ~/.ssh/github_actions
cat ~/.ssh/github_actions.pub >> ~/.ssh/authorized_keys
cat ~/.ssh/github_actions  # Скопіювати ВСЕ
```

#### 2. Додати secrets до GitHub:

```
GitHub → Твій Репозиторій → Settings → Secrets and variables → Actions

Додати 4 секрети:
1. SERVER_IP: 123.45.67.89
2. SERVER_USER: root
3. SSH_PRIVATE_KEY: (вставити вміст ~/.ssh/github_actions)
4. SERVER_PORT: 22
```

#### 3. Дозволити sudo без паролю:

```bash
sudo visudo
```

Додати:
```
root ALL=(ALL) NOPASSWD: /bin/systemctl reload nginx
```

#### 4. Push до GitHub:

```bash
git add .
git commit -m "setup: GitHub Actions"
git push origin main
```

✅ **Готово!** Тепер кожен `git push` → автоматично деплоїть на сервер

---

## 📊 Перевірити Результат

### Lighthouse Test:

```
1. Відкрити https://diwave.company
2. Chrome DevTools (F12) → Lighthouse
3. Generate Report
```

**Очікувані результати:**
- Performance: **95+** (Desktop), **85+** (Mobile)
- Accessibility: **100**
- Best Practices: **100**
- SEO: **100**

---

## 🛠️ Корисні Команди

```bash
# Розробка
npm run dev                 # Запустити dev сервер

# Оптимізація
npm run optimize:images     # Конвертувати PNG/JPG → AVIF/WebP

# Build
npm run build               # Зібрати production build
npm run preview             # Протестувати build локально

# Git
git add .
git commit -m "update"
git push origin main        # Автоматичний деплой (якщо GitHub Actions)

# Сервер (VPS)
ssh root@your-server-ip     # Підключитись
cd /var/www/diwave && git pull && npm install && npm run build && sudo systemctl reload nginx
```

---

## 📁 Важливі Файли

### Для довідки:
- `SUMMARY.md` - що зроблено та результати
- `TODO.md` - що робити далі
- `DEPLOYMENT_GUIDE.md` - детальна інструкція деплою
- `GITHUB_ACTIONS_SETUP.md` - як налаштувати GitHub Actions

### Конфігурація:
- `.github/workflows/deploy.yml` - автодеплой
- `public/robots.txt` - для пошукових ботів
- `public/sitemap.xml` - карта сайту (80 URLs)
- `scripts/optimize-images.cjs` - оптимізація зображень

---

## 🎯 Швидкий Чеклист

### Перед деплоєм:
- [ ] Запустив `npm run optimize:images`
- [ ] Протестував `npm run dev`
- [ ] Зібрав `npm run build`
- [ ] Перевірив `npm run preview`

### Деплой:
- [ ] Обрав варіант (Vercel/VPS/GitHub Actions)
- [ ] Налаштував (див. інструкції вище)
- [ ] Зробив `git push`
- [ ] Перевірив що сайт працює

### Після деплою:
- [ ] Перевірив Lighthouse (95+ Performance)
- [ ] Додав sitemap до Google Search Console
- [ ] Протестував на мобільному
- [ ] Перевірив SSL (зелений замок 🔒)

---

## 📞 Потрібна Допомога?

### Документація:
- [Vercel Docs](https://vercel.com/docs)
- [Nginx Docs](https://nginx.org/en/docs/)
- [GitHub Actions Docs](https://docs.github.com/en/actions)

### Підтримка:
- **Email:** info@diwave.company
- **Tech Lead:** Dmytro Kravets (dmytro@diwave.company)

---

## 🎉 Готово!

Після деплою твій сайт:
- ✅ Працює на production
- ✅ Швидкість: Lighthouse 95+
- ✅ SEO: 100/100
- ✅ HTTPS (SSL)
- ✅ Автодеплой при `git push`

**Час до запуску:** 5-30 хвилин (залежно від варіанту)

🚀 **Успіхів з запуском!**

---

**Створено:** 2025-01-16
**Версія:** 1.0.0
