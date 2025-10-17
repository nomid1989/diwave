import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const uk = {
  brand: 'Diwave',
  nav: {
    home: 'Головна',
    solutions: 'Рішення',
    projects: 'Проєкти',
    industries: 'Індустрії',
    about: 'Про нас',
    contact: 'Контакти'
  },
  cta: {
    discuss: 'Обговорити проєкт'
  },
  hero: {
    h1: 'Diwave — One Step Solution to All Your Needs',
    subtitle:
      'Dmytro Kravets — засновник D‑Wave. Ми будуємо рішення, поєднуючи hardware, software та аналітику: від автомийок самообслуговування з EBITDA 70% і e‑commerce до онлайн‑платежів, лояльності, дронів та міжнародних проєктів у fintech, енергетиці та email‑маркетингу. Використовуємо AI, щоб щодня підвищувати ефективність бізнесу.',
    cta: 'Надіслати запит'
  },
  headings: {
    products: 'Продукти та рішення',
    projects: 'Проєкти',
    how: 'Як це працює',
    contact: 'Контакти'
  },
  products: {
    payment: 'Платіжні рішення',
    iot: 'IoT рішення',
    automation: 'Автоматизація',
    analytics: 'Аналітика',
    support: 'Підтримка'
  },
  steps: {
    discovery: 'Discovery Call',
    design: 'Solution Design',
    deployment: 'Deployment',
    support: 'Support'
  }
};

const en = {
  brand: 'Diwave',
  nav: {
    home: 'Home',
    solutions: 'Solutions',
    projects: 'Projects',
    industries: 'Industries',
    about: 'About',
    contact: 'Contacts'
  },
  cta: {
    discuss: 'Discuss a project'
  },
  hero: {
    h1: 'Diwave — One Step Solution to All Your Needs',
    subtitle:
      'Dmytro Kravets is the founder of D‑Wave. We build solutions combining hardware, software and analytics: from self-service car washes with 70% EBITDA and e‑commerce to online payments, loyalty, drones, and international projects in fintech, energy and email marketing. We use AI to automate processes and make business more efficient every day.',
    cta: 'Send request'
  },
  headings: {
    products: 'Products & Solutions',
    projects: 'Projects',
    how: 'How it works',
    contact: 'Contact'
  },
  products: {
    payment: 'Payment Solutions',
    iot: 'IoT Solutions',
    automation: 'Automation',
    analytics: 'Analytics',
    support: 'Support'
  },
  steps: {
    discovery: 'Discovery Call',
    design: 'Solution Design',
    deployment: 'Deployment',
    support: 'Support'
  }
};

i18n.use(initReactI18next).init({
  resources: {
    uk: { translation: uk },
    en: { translation: en }
  },
  lng: 'uk',
  fallbackLng: 'uk',
  interpolation: { escapeValue: false }
});

export default i18n;
