import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const location = useLocation();
  const locale = location.pathname.startsWith('/en') ? 'en' : 'uk';
  const prefix = locale === 'en' ? '/en' : '';

  const content = {
    uk: {
      description: 'IoT, FinTech та автоматизація бізнесу. Розробка інноваційних рішень для українського та європейського ринку.',
      solutions: 'Рішення',
      solutionsLinks: {
        carWashes: 'Автомийки',
        vending: 'Вендинг',
        iot: 'IoT & SCADA',
        ecommerce: 'E-commerce',
        marketing: 'Маркетинг'
      },
      company: 'Компанія',
      companyLinks: {
        about: 'Про нас',
        projects: 'Проєкти',
        industries: 'Індустрії',
        contact: 'Контакти',
        audit: 'Безкоштовний аудит'
      },
      contacts: 'Контакти',
      location: 'Львів, Україна',
      messengers: 'Месенджери:',
      copyright: 'Всі права захищені',
      madeIn: '🇺🇦 Made in Ukraine'
    },
    en: {
      description: 'IoT, FinTech, and business automation. Developing innovative solutions for Ukrainian and European markets.',
      solutions: 'Solutions',
      solutionsLinks: {
        carWashes: 'Car Washes',
        vending: 'Vending',
        iot: 'IoT & SCADA',
        ecommerce: 'E-commerce',
        marketing: 'Marketing'
      },
      company: 'Company',
      companyLinks: {
        about: 'About Us',
        projects: 'Projects',
        industries: 'Industries',
        contact: 'Contact',
        audit: 'Free Audit'
      },
      contacts: 'Contact',
      location: 'Lviv, Ukraine',
      messengers: 'Messengers:',
      copyright: 'All rights reserved',
      madeIn: '🇺🇦 Made in Ukraine'
    }
  };

  const t = content[locale];

  return (
    <footer className="relative overflow-hidden border-t border-cyan-400/20 bg-gradient-to-b from-transparent to-black/20 backdrop-blur-sm">
      {/* iOS 26 underlay to make transparency visible */}
      <div className="pointer-events-none absolute inset-0 opacity-40 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_-20%,rgba(34,211,238,0.18),transparent),radial-gradient(700px_350px_at_90%_-10%,rgba(168,85,247,0.16),transparent),radial-gradient(900px_450px_at_50%_120%,rgba(59,130,246,0.14),transparent)]" />
        <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)', backgroundSize: '34px 34px'}} aria-hidden />
      </div>
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 flex-shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="diwave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#06B6D4', stopOpacity: 1}} />
                      <stop offset="50%" style={{stopColor: '#3B82F6', stopOpacity: 1}} />
                      <stop offset="100%" style={{stopColor: '#8B5CF6', stopOpacity: 1}} />
                    </linearGradient>
                  </defs>
                  <circle cx="50" cy="50" r="48" fill="url(#diwave-gradient)" opacity="0.1"/>
                  <text x="50" y="65" fontFamily="Arial, sans-serif" fontSize="42" fontWeight="bold" fill="url(#diwave-gradient)" textAnchor="middle">D</text>
                </svg>
              </div>
              <div>
                <div className=" font-bold text-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Diwave</div>
                <div className="text-gray-400 text-xs">Solutions</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.description}
            </p>
          </div>

          {/* Quick Links - Solutions */}
          <div>
            <h3 className=" font-semibold mb-4 text-sm uppercase tracking-wide">{t.solutions}</h3>
            <nav className="flex flex-col gap-2">
              <a href={`${prefix}/solutions/car-washes`} className="text-gray-400 hover:text-cyan-400 transition text-sm">{t.solutionsLinks.carWashes}</a>
              <a href={`${prefix}/solutions/alcohol-vending`} className="text-gray-400 hover:text-cyan-400 transition text-sm">{t.solutionsLinks.vending}</a>
              <a href={`${prefix}/solutions/iot-scada`} className="text-gray-400 hover:text-cyan-400 transition text-sm">{t.solutionsLinks.iot}</a>
              <a href={`${prefix}/solutions/ecommerce`} className="text-gray-400 hover:text-cyan-400 transition text-sm">{t.solutionsLinks.ecommerce}</a>
              <a href={`${prefix}/solutions/marketing`} className="text-gray-400 hover:text-cyan-400 transition text-sm">{t.solutionsLinks.marketing}</a>
            </nav>
          </div>

          {/* Quick Links - Company */}
          <div>
            <h3 className=" font-semibold mb-4 text-sm uppercase tracking-wide">{t.company}</h3>
            <nav className="flex flex-col gap-2">
              <a href={`${prefix}/about`} className="text-gray-400 hover:text-cyan-400 transition text-sm">{t.companyLinks.about}</a>
              <a href={`${prefix}/projects`} className="text-gray-400 hover:text-cyan-400 transition text-sm">{t.companyLinks.projects}</a>
              <a href={`${prefix}/industries`} className="text-gray-400 hover:text-cyan-400 transition text-sm">{t.companyLinks.industries}</a>
              <a href={`${prefix}/contact`} className="text-gray-400 hover:text-cyan-400 transition text-sm">{t.companyLinks.contact}</a>
              <a href={`${prefix}/audit`} className="text-gray-400 hover:text-cyan-400 transition text-sm">{t.companyLinks.audit}</a>
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className=" font-semibold mb-4 text-sm uppercase tracking-wide">{t.contacts}</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">📞</span>
                <a href="tel:+380505923772" className="text-cyan-400 hover:text-cyan-300 transition">+380 50 592 3772</a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">✉️</span>
                <a href="mailto:info@diwave.company" className="text-cyan-400 hover:text-cyan-300 transition break-all">info@diwave.company</a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">📍</span>
                <span className="text-gray-400">{t.location}</span>
              </div>

              {/* Messengers */}
              <div className="pt-2">
                <div className="text-gray-500 text-xs mb-2">{t.messengers}</div>
                <div className="flex gap-3">
                  <a
                    href="https://t.me/+380505923772"
                    className="text-cyan-400 hover:text-cyan-300 transition text-sm"
                    title="Telegram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Telegram
                  </a>
                  <a
                    href="https://wa.me/380505923772"
                    className="text-emerald-400 hover:text-emerald-300 transition text-sm"
                    title="WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="viber://chat?number=%2B380505923772"
                    className="text-purple-400 hover:text-purple-300 transition text-sm"
                    title="Viber"
                  >
                    Viber
                  </a>
                </div>
              </div>

              {/* Social Networks */}
              <div className="pt-4">
                <div className="text-gray-500 text-xs mb-2">{locale === 'en' ? 'Social:' : 'Соцмережі:'}</div>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/DiWave.company"
                    className="text-blue-400 hover:text-blue-300 transition text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={locale === 'en' ? 'Facebook — Diwave' : 'Facebook — Diwave'}
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/diwave.company/"
                    className="text-pink-400 hover:text-pink-300 transition text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={locale === 'en' ? 'Instagram — Diwave' : 'Instagram — Diwave'}
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.youtube.com/@DigitalWaveAI"
                    className="text-red-400 hover:text-red-300 transition text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={locale === 'en' ? 'YouTube — DigitalWaveAI' : 'YouTube — DigitalWaveAI'}
                  >
                    YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-xs text-center md:text-left">
              © {new Date().getFullYear()} <span className=" font-semibold">Diwave Solutions</span>, Lviv, Ukraine • {t.copyright}
            </div>
            <div className="flex gap-6 text-xs">
              <span className="text-gray-500">{t.madeIn}</span>
              <span className="text-gray-500">IoT • FinTech • E-commerce</span>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data for Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Diwave Solutions',
          url: 'https://diwave.company',
          logo: 'https://diwave.company/favicon.ico',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+380505923772',
            contactType: 'customer service',
            areaServed: ['UA', 'EU'],
            availableLanguage: ['Ukrainian', 'English']
          },
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Lviv',
            addressCountry: 'UA'
          },
          sameAs: [
            'https://t.me/diwave',
            'https://wa.me/380505923772',
            'https://www.facebook.com/DiWave.company',
            'https://www.instagram.com/diwave.company/',
            'https://www.youtube.com/@DigitalWaveAI',
            'https://clutch.co/profile/diwave'
          ]
        })}
      </script>
    </footer>
  );
};

export default Footer;
