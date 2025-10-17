# 🤖 Налаштування GitHub Actions для Автоматичного Деплою

## 📋 Що Таке GitHub Actions?

**GitHub Actions** - це безкоштовний CI/CD сервіс від GitHub, який автоматично виконує команди при певних подіях (наприклад, `git push`).

### Як Це Працює:

```
┌─────────────────────────────────────────────────────────────┐
│  Твій Комп'ютер                                             │
│  ─────────────────                                          │
│  git add .                                                  │
│  git commit -m "update"                                     │
│  git push origin main  ────────────────────────────────┐    │
└─────────────────────────────────────────────────────────┼────┘
                                                          │
                                                          ▼
┌─────────────────────────────────────────────────────────────┐
│  GitHub (https://github.com)                                │
│  ────────────────────────────                               │
│  1. Бачить новий push                                       │
│  2. Читає .github/workflows/deploy.yml                      │
│  3. Створює віртуальну Ubuntu машину (безкоштовно!)         │
│  4. Виконує всі команди з deploy.yml:                       │
│     - npm install                                           │
│     - npm run build                                         │
│     - Копіює файли на твій сервер через SSH                 │
│  ────────────────────────────────────────────────────────┐  │
└──────────────────────────────────────────────────────────┼──┘
                                                           │
                                                           ▼
┌─────────────────────────────────────────────────────────────┐
│  Твій Сервер (VPS)                                          │
│  ─────────────────────                                      │
│  1. Отримує файли через SSH/SCP                             │
│  2. Розархівовує dist.tar.gz                                │
│  3. Перезапускає Nginx                                      │
│  4. ✅ Сайт оновлено!                                        │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔧 Крок 1: Створення SSH Ключа для GitHub Actions

### На твоєму сервері:

```bash
# 1. Підключися до сервера
ssh root@your-server-ip

# 2. Створи новий SSH ключ (спеціально для GitHub Actions)
ssh-keygen -t ed25519 -C "github-actions@diwave.company" -f ~/.ssh/github_actions

# Натисни Enter 3 рази (без паролю!)

# 3. Додай публічний ключ до authorized_keys
cat ~/.ssh/github_actions.pub >> ~/.ssh/authorized_keys

# 4. Виведи ПРИВАТНИЙ ключ (зберігай в секреті!)
cat ~/.ssh/github_actions

# Скопіюй ВСЕ (від "-----BEGIN" до "-----END")
```

**Важливо:** Приватний ключ (`github_actions`) - це СЕКРЕТ. Не публікуй його ніде!

---

## 🔐 Крок 2: Додавання Secrets до GitHub

### 2.1 Відкрий свій репозиторій на GitHub:
```
https://github.com/твій-username/diwavenew
```

### 2.2 Перейди до Settings → Secrets and variables → Actions:
```
1. Натисни на свій репозиторій
2. Зверху праворуч: Settings
3. Ліворуч у меню: Secrets and variables → Actions
4. Натисни: New repository secret
```

### 2.3 Додай ці 4 секрети:

#### **SECRET 1: SERVER_IP**
- **Name:** `SERVER_IP`
- **Value:** `123.45.67.89` (твій IP сервера)

#### **SECRET 2: SERVER_USER**
- **Name:** `SERVER_USER`
- **Value:** `root` (або інший користувач)

#### **SECRET 3: SSH_PRIVATE_KEY**
- **Name:** `SSH_PRIVATE_KEY`
- **Value:** Вставте ВСЕ з файлу `~/.ssh/github_actions` (включно з `-----BEGIN` та `-----END`)

**Приклад як має виглядати:**
```
-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW
QyNTUxOQAAACBrM3kK8J5fK3zK8J5fK3zK8J5fK3zK8J5fK3zK8J5fKwAAAKBVBJh7VQSY
... (багато рядків) ...
-----END OPENSSH PRIVATE KEY-----
```

#### **SECRET 4: SERVER_PORT** (опціонально)
- **Name:** `SERVER_PORT`
- **Value:** `22` (або твій SSH порт, якщо змінював)

### 2.4 Результат:

Маєш побачити 4 секрети:
```
✅ SERVER_IP         (Updated X minutes ago)
✅ SERVER_USER       (Updated X minutes ago)
✅ SSH_PRIVATE_KEY   (Updated X minutes ago)
✅ SERVER_PORT       (Updated X minutes ago)
```

---

## 📁 Крок 3: Додавання deploy.yml (Вже Зроблено!)

Файл `.github/workflows/deploy.yml` вже створено! Перевір що він є:

```bash
ls -la .github/workflows/deploy.yml
```

Якщо файлу немає, створи:
```bash
mkdir -p .github/workflows
# Скопіюй deploy.yml з попереднього повідомлення
```

---

## 🚀 Крок 4: Налаштування Сервера

### 4.1 Створи директорію для проєкту (якщо ще не створена):

```bash
# На сервері
sudo mkdir -p /var/www/diwave
sudo chown -R $USER:$USER /var/www/diwave
```

### 4.2 Дозволь root/user виконувати sudo без паролю (для перезапуску Nginx):

```bash
# На сервері
sudo visudo
```

Додай в кінець файлу:
```
# GitHub Actions user
root ALL=(ALL) NOPASSWD: /bin/systemctl reload nginx
root ALL=(ALL) NOPASSWD: /bin/systemctl restart nginx
```

Збережи: `Ctrl+X`, потім `Y`, потім `Enter`

---

## ✅ Крок 5: Тестування Деплою

### 5.1 Зроби тестовий коміт:

```bash
# На твоєму комп'ютері
git add .
git commit -m "test: setup GitHub Actions"
git push origin main
```

### 5.2 Перевір що запустилося:

1. Відкрий GitHub репозиторій
2. Зверху вкладка: **Actions**
3. Побачиш: "🚀 Deploy to Production" (жовта іконка ⏳)

### 5.3 Слідкуй за прогресом:

Натисни на workflow → побачиш всі кроки:
```
✅ Checkout code
✅ Setup Node.js
✅ Install dependencies
✅ Optimize images
✅ Build project
✅ Deploy to Server
✅ Extract and Restart
✅ Deployment Success
```

### 5.4 Якщо все зелене ✅:

Відкрий https://diwave.company - сайт оновлено!

---

## 🐛 Крок 6: Що Робити Якщо Помилка?

### Помилка: "Permission denied (publickey)"

**Проблема:** GitHub Actions не може підключитися до сервера.

**Рішення:**
```bash
# На сервері перевір
cat ~/.ssh/authorized_keys | grep github-actions

# Якщо порожньо, додай:
cat ~/.ssh/github_actions.pub >> ~/.ssh/authorized_keys

# Перевір права доступу
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
```

### Помилка: "npm: command not found"

**Проблема:** На GitHub Actions машині немає Node.js (але має бути).

**Рішення:** Перевір що в `deploy.yml` є:
```yaml
- name: 🟢 Setup Node.js
  uses: actions/setup-node@v3
  with:
    node-version: '20'
```

### Помилка: "sudo: no tty present"

**Проблема:** Користувач не має прав на `sudo systemctl`.

**Рішення:** Додай в `/etc/sudoers` (див. Крок 4.2)

---

## 📊 Моніторинг Деплоїв

### Де дивитися логи:

1. **GitHub Actions:**
   - Репозиторій → Actions → Клік на workflow
   - Побачиш всі кроки та їх вивід

2. **Сервер (Nginx):**
```bash
# На сервері
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

3. **Email сповіщення:**

Додай в `deploy.yml` (в кінець):
```yaml
      - name: 📧 Send Email Notification
        if: always()  # Завжди відправляти
        uses: dawidd6/action-send-mail@v3
        with:
          server_address: smtp.gmail.com
          server_port: 587
          username: ${{ secrets.EMAIL_USERNAME }}
          password: ${{ secrets.EMAIL_PASSWORD }}
          subject: "Deploy: ${{ job.status }}"
          to: dmytro@diwave.company
          from: GitHub Actions
          body: |
            Deployment ${{ job.status }}!
            Repository: ${{ github.repository }}
            Commit: ${{ github.sha }}
            Time: ${{ github.event.head_commit.timestamp }}
```

---

## 🔄 Як Це Працює Повсякденно:

### Звичайний робочий процес:

```bash
# 1. Робиш зміни локально
nano src/pages/Home.tsx

# 2. Тестуєш локально
npm run dev

# 3. Коміт + пуш
git add .
git commit -m "feat: add new feature"
git push origin main

# 4. ☕ Чекаєш 2-3 хвилини
# GitHub Actions автоматично:
#  - Збере проєкт
#  - Оптимізує зображення
#  - Завантажить на сервер
#  - Перезапустить Nginx

# 5. 🎉 Відкриваєш https://diwave.company
# Сайт вже оновлено!
```

---

## 🎨 Бонус: Badge для README

Додай в `README.md` щоб показати статус деплою:

```markdown
# Diwave

![Deploy Status](https://github.com/твій-username/diwavenew/workflows/🚀%20Deploy%20to%20Production/badge.svg)

Automated deployment: Every push to `main` → Live in 2-3 minutes! 🚀
```

Результат: ![Deploy Status](https://img.shields.io/badge/deploy-passing-brightgreen)

---

## 💰 Чи Це Безкоштовно?

### GitHub Actions ліміти (безкоштовно):
- ✅ **2000 хвилин/місяць** для приватних репозиторіїв
- ✅ **Необмежено** для публічних репозиторіїв
- ✅ **20 одночасних jobs**

### Твоє використання:
- 1 деплой = ~2-3 хвилини
- Якщо деплоїш 10 разів на день = 30 хвилин
- **30 днів × 30 хвилин = 900 хвилин/місяць**

✅ Вистачить з запасом!

---

## 🆘 Альтернатива (Простіша): Vercel/Netlify

Якщо GitHub Actions здається складним, є простіші варіанти:

### Vercel (1 клік):
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Netlify (1 клік):
1. Зайди на https://netlify.com
2. "Import from Git" → Вибери репозиторій
3. Готово! Автодеплой при кожному push

**Переваги Vercel/Netlify:**
- ✅ Безкоштовний SSL
- ✅ CDN (швидше в усьому світі)
- ✅ Авто-деплой з Git
- ✅ Preview для кожного PR

**Недоліки:**
- ❌ Немає повного контролю (не свій сервер)
- ❌ Ліміт bandwidth (100GB/місяць безкоштовно)

---

## 📞 Потрібна Допомога?

Якщо щось не виходить:

1. **Перевір логи:** GitHub Actions → твій workflow → Read logs
2. **Тестуй SSH вручну:**
```bash
ssh -i ~/.ssh/github_actions root@your-server-ip
```
3. **Пиши:** dmytro@diwave.company

---

## ✅ Чеклист Налаштування

- [ ] Створив SSH ключ на сервері
- [ ] Додав 4 secrets до GitHub (SERVER_IP, SERVER_USER, SSH_PRIVATE_KEY, SERVER_PORT)
- [ ] Перевірив що `.github/workflows/deploy.yml` існує
- [ ] Налаштував sudo без паролю для systemctl
- [ ] Зробив тестовий push
- [ ] Перевірив GitHub Actions (зелена галочка ✅)
- [ ] Сайт оновився на https://diwave.company

---

**Створено:** 2025-01-16
**Автор:** Claude (Sonnet 4.5)
**Статус:** 📖 Ready to Use
