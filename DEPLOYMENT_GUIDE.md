# 🚀 Інструкція з Деплою Diwave на Сервер

## 📋 Зміст
1. [Підготовка проєкту](#підготовка-проєкту)
2. [Варіанти деплою](#варіанти-деплою)
3. [Деплой через Nginx + PM2](#деплой-через-nginx--pm2)
4. [Деплой через Vercel](#деплой-через-vercel)
5. [Деплой через Netlify](#деплой-через-netlify)
6. [CI/CD з GitHub Actions](#cicd-з-github-actions)
7. [Після деплою](#після-деплою)

---

## 1. Підготовка проєкту

### 1.1 Останні перевірки перед деплоєм

```bash
# Перевірте що всі залежності встановлені
npm install

# Запустіть оптимізацію зображень
npm run optimize:images

# Зберіть проєкт
npm run build

# Перевірте локально build версію
npm run preview
```

### 1.2 Перевірте змінні середовища

Створіть файл `.env.production`:

```env
VITE_SITE_URL=https://diwave.company
VITE_API_URL=https://api.diwave.company
```

### 1.3 Закомітьте зміни

```bash
git add .
git commit -m "chore: prepare for production deployment"
git push origin main
```

---

## 2. Варіанти Деплою

### 🟢 **Варіант 1: VPS (Ubuntu/Debian) + Nginx + PM2**
**Переваги:** Повний контроль, дешевше для великого трафіку
**Складність:** ⭐⭐⭐ (потребує налаштування сервера)
**Ціна:** ~$5-20/місяць (DigitalOcean, Hetzner, AWS EC2)

### 🔵 **Варіант 2: Vercel**
**Переваги:** Автоматичний деплой з Git, безкоштовний SSL, CDN
**Складність:** ⭐ (найпростіше)
**Ціна:** Безкоштовно (до 100GB bandwidth)

### 🟣 **Варіант 3: Netlify**
**Переваги:** Схоже на Vercel, простий деплой
**Складність:** ⭐
**Ціна:** Безкоштовно (до 100GB bandwidth)

---

## 3. Деплой через Nginx + PM2 (VPS)

### 3.1 Підключення до сервера

```bash
# SSH доступ до сервера
ssh root@your-server-ip

# Або якщо є SSH ключ
ssh -i ~/.ssh/id_rsa root@your-server-ip
```

### 3.2 Встановлення залежностей на сервері

```bash
# Оновлення системи
sudo apt update && sudo apt upgrade -y

# Встановлення Node.js 20.x (LTS)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Встановлення Nginx
sudo apt install -y nginx

# Встановлення PM2 (Process Manager)
sudo npm install -g pm2

# Встановлення Git
sudo apt install -y git
```

### 3.3 Клонування репозиторію

```bash
# Створіть директорію для проєкту
sudo mkdir -p /var/www/diwave
cd /var/www/diwave

# Клонуйте репозиторій
sudo git clone https://github.com/your-username/diwavenew.git .

# Або якщо приватний репозиторій
# Згенеруйте SSH ключ на сервері
ssh-keygen -t ed25519 -C "server@diwave.company"
cat ~/.ssh/id_ed25519.pub
# Додайте цей ключ до GitHub → Settings → Deploy Keys

# Встановіть залежності
sudo npm install

# Зберіть проєкт
sudo npm run build
```

### 3.4 Налаштування Nginx

```bash
# Створіть конфігураційний файл
sudo nano /etc/nginx/sites-available/diwave
```

Вставте цей конфіг:

```nginx
server {
    listen 80;
    server_name diwave.company www.diwave.company;

    root /var/www/diwave/dist;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 10240;
    gzip_proxied expired no-cache no-store private auth;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
    gzip_disable "MSIE [1-6]\.";

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot|webp|avif)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # React Router (SPA)
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Robots.txt
    location = /robots.txt {
        log_not_found off;
    }

    # Sitemap.xml
    location = /sitemap.xml {
        log_not_found off;
    }
}
```

```bash
# Активуйте конфіг
sudo ln -s /etc/nginx/sites-available/diwave /etc/nginx/sites-enabled/

# Перевірте конфіг
sudo nginx -t

# Перезапустіть Nginx
sudo systemctl restart nginx
```

### 3.5 SSL з Let's Encrypt (Безкоштовний HTTPS)

```bash
# Встановіть Certbot
sudo apt install -y certbot python3-certbot-nginx

# Отримайте SSL сертифікат
sudo certbot --nginx -d diwave.company -d www.diwave.company

# Автоматичне оновлення (кожні 3 місяці)
sudo systemctl enable certbot.timer
```

### 3.6 Автоматичний деплой з Git

Створіть скрипт для деплою:

```bash
# Створіть deploy скрипт
sudo nano /var/www/diwave/deploy.sh
```

Вставте:

```bash
#!/bin/bash
cd /var/www/diwave

echo "🔄 Pulling latest changes from Git..."
git pull origin main

echo "📦 Installing dependencies..."
npm install

echo "🏗️  Building project..."
npm run build

echo "🔄 Restarting Nginx..."
sudo systemctl reload nginx

echo "✅ Deployment completed!"
```

```bash
# Зробіть скрипт виконуваним
sudo chmod +x /var/www/diwave/deploy.sh

# Тепер для деплою просто запустіть:
sudo /var/www/diwave/deploy.sh
```

---

## 4. Деплой через Vercel

### 4.1 Встановіть Vercel CLI

```bash
npm install -g vercel
```

### 4.2 Залогіньтесь

```bash
vercel login
```

### 4.3 Деплой

```bash
# Перший раз (налаштування проєкту)
vercel

# Для production
vercel --prod
```

### 4.4 Або через GitHub Integration

1. Зайдіть на https://vercel.com
2. Натисніть **"Import Project"**
3. Виберіть ваш GitHub репозиторій
4. Налаштування:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Environment Variables:** додайте `VITE_SITE_URL`

5. Натисніть **Deploy**

✅ Готово! Vercel автоматично деплоїть при кожному push до `main`.

---

## 5. Деплой через Netlify

### 5.1 Створіть `netlify.toml`

```bash
# Створіть файл в корені проєкту
nano netlify.toml
```

Вставте:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "20"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "SAMEORIGIN"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"

[[headers]]
  for = "/*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/images/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

### 5.2 Деплой

1. Зайдіть на https://netlify.com
2. Натисніть **"Add new site" → Import existing project**
3. Виберіть GitHub репозиторій
4. Налаштування (автоматично визначаться з `netlify.toml`)
5. Натисніть **Deploy**

✅ Готово! Netlify автоматично деплоїть при кожному push.

---

## 6. CI/CD з GitHub Actions

Створіть файл `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm install

      - name: Optimize images
        run: npm run optimize:images

      - name: Build
        run: npm run build
        env:
          VITE_SITE_URL: ${{ secrets.VITE_SITE_URL }}

      - name: Deploy to Server via SSH
        uses: appleboy/scp-action@master
        with:
          host: ${{ secrets.SERVER_IP }}
          username: ${{ secrets.SERVER_USER }}
          key: ${{ secrets.SSH_PRIVATE_KEY }}
          source: "dist/*"
          target: "/var/www/diwave/"

      - name: Restart Nginx
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.SERVER_IP }}
          username: ${{ secrets.SERVER_USER }}
          key: ${{ secrets.SSH_PRIVATE_KEY }}
          script: |
            sudo systemctl reload nginx
            echo "✅ Deployment completed!"
```

### Додайте Secrets до GitHub:

1. Зайдіть у ваш репозиторій → **Settings → Secrets and variables → Actions**
2. Додайте:
   - `SERVER_IP`: IP вашого сервера
   - `SERVER_USER`: root або ваш користувач
   - `SSH_PRIVATE_KEY`: ваш приватний SSH ключ
   - `VITE_SITE_URL`: https://diwave.company

---

## 7. Після Деплою

### 7.1 Перевірте сайт

```bash
# Перевірте швидкість
https://pagespeed.web.dev/
# Введіть: https://diwave.company

# Перевірте SSL
https://www.ssllabs.com/ssltest/
```

### 7.2 Додайте до Google Search Console

1. Зайдіть на https://search.google.com/search-console
2. Додайте домен `diwave.company`
3. Підтвердіть через DNS або HTML файл
4. Додайте sitemap: `https://diwave.company/sitemap.xml`

### 7.3 Моніторинг

```bash
# На VPS перевірте логи Nginx
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# Перевірте статус Nginx
sudo systemctl status nginx
```

### 7.4 Автоматичні бекапи (для VPS)

```bash
# Створіть backup скрипт
sudo nano /root/backup-diwave.sh
```

Вставте:

```bash
#!/bin/bash
DATE=$(date +%Y-%m-%d)
BACKUP_DIR="/root/backups"
mkdir -p $BACKUP_DIR

# Backup файлів
tar -czf $BACKUP_DIR/diwave-$DATE.tar.gz /var/www/diwave

# Видалити старі бекапи (більше 7 днів)
find $BACKUP_DIR -name "diwave-*.tar.gz" -mtime +7 -delete

echo "✅ Backup completed: diwave-$DATE.tar.gz"
```

```bash
# Зробіть виконуваним
sudo chmod +x /root/backup-diwave.sh

# Додайте до cron (щоденно о 3:00 ночі)
sudo crontab -e
# Додайте рядок:
0 3 * * * /root/backup-diwave.sh
```

---

## 🎉 Готово!

Ваш сайт тепер працює на production сервері!

### Корисні команди:

```bash
# Для деплою нової версії (VPS)
cd /var/www/diwave
sudo ./deploy.sh

# Для Vercel/Netlify - просто push до main
git push origin main

# Перевірка швидкості
npm run build
npm run preview
```

---

## 📞 Підтримка

**Email:** info@diwave.company
**Tech Lead:** Dmytro Kravets (dmytro@diwave.company)
**Сайт:** https://diwave.company

---

**Створено:** 2025-01-16
**Версія:** 1.0.0
