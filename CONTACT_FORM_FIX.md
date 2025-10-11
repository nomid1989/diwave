# Виправлення Контактної Форми — Підтримка Телефону

**Дата:** 12 жовтня 2025  
**Проблема:** При виборі "Телефон" замість "Email" форма не відправляла номер телефону

---

## 🐛 Проблема

Контактна форма має можливість вибору між Email та Phone, але при відправці з номером телефону:
- ❌ Telegram отримував порожнє поле замість номеру телефону
- ❌ Email отримував порожнє поле замість номеру телефону
- ❌ Користувач не міг зв'язатися через телефон

---

## ✅ Виправлення

### 1. **src/components/ContactForm.tsx**

**Рядок 40-44 (серверний API запит):**
```typescript
// БУЛО:
body: JSON.stringify({ name, email, message, honeypot })

// СТАЛО:
const contactValue = contactType === 'email' ? email : phone;
body: JSON.stringify({ 
  name, 
  email: contactValue, 
  contactType, 
  phone: contactType === 'phone' ? phone : undefined, 
  message, 
  honeypot 
})
```

**Рядок 79-82 (клієнтський fallback):**
```typescript
// БУЛО:
sendEmail({ name, email: contactType === 'email' ? email : phone, message })

// СТАЛО:
const contactValue = contactType === 'email' ? email : phone;
sendEmail({ name, email: contactValue, message })
```

---

### 2. **api/contact.ts**

**Рядок 85 (деструктуризація параметрів):**
```typescript
// БУЛО:
const { name = '', email = '', message = '', honeypot = '' } = (req.body || {});

// СТАЛО:
const { name = '', email = '', message = '', honeypot = '', contactType = 'email', phone = '' } = (req.body || {});
```

**Рядок 96-101 (Telegram повідомлення):**
```typescript
// БУЛО:
const tgText = `<b>New contact request</b>\n<b>Name:</b> ${escapeHtml(name)}\n<b>Email:</b> ${escapeHtml(email)}\n<b>Message:</b>\n${escapeHtml(message)}`;

// СТАЛО:
const contactInfo = contactType === 'phone' && phone
  ? `<b>Phone:</b> ${escapeHtml(phone)}`
  : `<b>Email:</b> ${escapeHtml(email)}`;

const tgText = `<b>New contact request</b>\n<b>Name:</b> ${escapeHtml(name)}\n${contactInfo}\n<b>Message:</b>\n${escapeHtml(message)}`;
```

**Рядок 24 (сигнатура функції sendEmailServer):**
```typescript
// БУЛО:
async function sendEmailServer({ name, email, message }: { name: string; email: string; message: string; }): Promise<boolean>

// СТАЛО:
async function sendEmailServer({ name, email, message, contactType, phone }: { name: string; email: string; message: string; contactType?: string; phone?: string; }): Promise<boolean>
```

**Рядок 42-43 (HTML email):**
```typescript
// БУЛО:
<tr><td style="padding:4px 8px;color:#555">Email</td><td style="padding:4px 8px">${escapeHtml(email)}</td></tr>

// СТАЛО:
const contactLabel = contactType === 'phone' && phone ? 'Phone' : 'Email';
const contactValue = contactType === 'phone' && phone ? phone : email;

<tr><td style="padding:4px 8px;color:#555">${contactLabel}</td><td style="padding:4px 8px">${escapeHtml(contactValue)}</td></tr>
```

**Рядок 107-109 (виклик функції):**
```typescript
// БУЛО:
sendEmailServer({ name, email, message }).catch(() => false)

// СТАЛО:
sendEmailServer({ name, email, message, contactType, phone }).catch(() => false)
```

---

## 🧪 Тестування

### Сценарій 1: Відправка з Email
1. Відкрити контактну форму
2. Вибрати "Email"
3. Заповнити: Ім'я, Email, Повідомлення
4. Натиснути "Надіслати"

**Очікуваний результат:**
- ✅ Telegram: "Email: user@example.com"
- ✅ Email: "Email: user@example.com"

### Сценарій 2: Відправка з Phone (ВИПРАВЛЕНО)
1. Відкрити контактну форму
2. Вибрати "Телефон"
3. Заповнити: Ім'я, +380 50 123 4567, Повідомлення
4. Натиснути "Надіслати"

**Очікуваний результат:**
- ✅ Telegram: "Phone: +380 50 123 4567"
- ✅ Email: "Phone: +380 50 123 4567"

---

## 📋 Змінені Файли

1. **src/components/ContactForm.tsx** — Фронтенд компонент форми
2. **api/contact.ts** — Серверний API endpoint

---

## 🚀 Deployment

```bash
# 1. Commit зміни
git add src/components/ContactForm.tsx api/contact.ts CONTACT_FORM_FIX.md
git commit -m "Fix contact form: add phone number support"

# 2. Push на сервер
git push

# 3. На сервері
git pull
npm install
npm run build

# 4. Restart сервера (якщо потрібно для API)
```

---

## ✅ Статус

**Виправлено:** ✅  
**Протестовано:** Потребує тестування на staging/production  
**Breaking Changes:** Немає (backward compatible)

---

**Контакти:**  
Email: info@diwave.company  
Tech Lead: Dmytro Kravets (dmytro@diwave.company)
