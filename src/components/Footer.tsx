import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-cyan-400/20 bg-gradient-to-b from-transparent to-black/20 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-400/30">
                <img
                  src="/images/team/dmytro.jpg"
                  alt="Dmytro Kravets - CTO Diwave Solutions"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="text-white font-bold text-lg">Diwave</div>
                <div className="text-gray-400 text-xs">Solutions</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              IoT, FinTech та автоматизація бізнесу. Розробка інноваційних рішень для українського та європейського ринку.
            </p>
          </div>

          {/* Quick Links - Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Рішення</h3>
            <nav className="flex flex-col gap-2">
              <a href="/solutions/car-washes" className="text-gray-400 hover:text-cyan-400 transition text-sm">Автомийки</a>
              <a href="/solutions/alcohol-vending" className="text-gray-400 hover:text-cyan-400 transition text-sm">Вендинг</a>
              <a href="/solutions/iot-scada" className="text-gray-400 hover:text-cyan-400 transition text-sm">IoT & SCADA</a>
              <a href="/solutions/ecommerce" className="text-gray-400 hover:text-cyan-400 transition text-sm">E-commerce</a>
              <a href="/solutions/marketing" className="text-gray-400 hover:text-cyan-400 transition text-sm">Маркетинг</a>
            </nav>
          </div>

          {/* Quick Links - Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Компанія</h3>
            <nav className="flex flex-col gap-2">
              <a href="/about" className="text-gray-400 hover:text-cyan-400 transition text-sm">Про нас</a>
              <a href="/projects" className="text-gray-400 hover:text-cyan-400 transition text-sm">Проєкти</a>
              <a href="/industries" className="text-gray-400 hover:text-cyan-400 transition text-sm">Індустрії</a>
              <a href="/contact" className="text-gray-400 hover:text-cyan-400 transition text-sm">Контакти</a>
              <a href="/audit" className="text-gray-400 hover:text-cyan-400 transition text-sm">Безкоштовний аудит</a>
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Контакти</h3>
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
                <span className="text-gray-400">Львів, Україна</span>
              </div>

              {/* Messengers */}
              <div className="pt-2">
                <div className="text-gray-500 text-xs mb-2">Месенджери:</div>
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
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-xs text-center md:text-left">
              © {new Date().getFullYear()} <span className="text-white font-semibold">Diwave Solutions</span>, Lviv, Ukraine • Всі права захищені
            </div>
            <div className="flex gap-6 text-xs">
              <span className="text-gray-500">🇺🇦 Made in Ukraine</span>
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
            'https://wa.me/380505923772'
          ]
        })}
      </script>
    </footer>
  );
};

export default Footer;
