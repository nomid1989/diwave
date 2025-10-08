import React from 'react';
import SEO from '@/components/SEO';
import SmartImage from '@/components/ui/SmartImage';

type Props = { locale: 'uk' | 'en' };

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

const About: React.FC<Props> = ({ locale }) => {
  const url = `${baseUrl}${locale === 'en' ? '/en' : ''}/about`;
  const title = 'Diwave — About';
  const description =
    'D‑Wave / Diwave: інжиніринг, програмні рішення, e‑commerce, IoT та AI. Від ідеї й обладнання до ПЗ, фіскалізації, запуску та масштабування бізнесу.';

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Diwave',
      url,
      areaServed: ['UA', 'EU']
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Dmytro Kravets',
      jobTitle: 'Tech Entrepreneur, CTO',
      url: `${baseUrl}${locale === 'en' ? '/en' : ''}/about`,
      image: `${baseUrl}/images/team/dmytro-kravets-cto-diwave.webp`,
      sameAs: [
        'https://linkedin.com/in/dmytrokravets',
        'https://upwork.com/freelancers/stevark',
        'https://youtube.com/@samwash',
        'https://tiktok.com/@samwash.official',
        'https://instagram.com/samwash_carwash',
        'https://facebook.com/samwashcarwash',
        'https://diwave.company'
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'business',
          email: 'kravets.lviv@gmail.com',
          telephone: '+380505923772',
          areaServed: ['UA', 'EU'],
          availableLanguage: ['Ukrainian', 'English']
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${baseUrl}${locale === 'en' ? '/en' : ''}` },
        { '@type': 'ListItem', position: 2, name: 'About', item: url }
      ]
    }
  ];

  // Команда Diwave
  const teamMembers: Array<{ fileBase: string; name: string; role?: string }> = [
    { fileBase: 'dimon', name: 'Dmytro Kravets', role: 'CTO & Founder' },
    { fileBase: 'artem', name: 'Artem', role: 'Developer' },
    { fileBase: 'danik', name: 'Danik', role: 'Developer' },
    { fileBase: 'denus', name: 'Denus', role: 'Engineer' },
    { fileBase: 'denys', name: 'Denys', role: 'Developer' },
    { fileBase: 'diana', name: 'Diana', role: 'Designer' },
    { fileBase: 'edik', name: 'Edik', role: 'Engineer' },
    { fileBase: 'ira', name: 'Ira', role: 'Manager' },
    { fileBase: 'mykola', name: 'Mykola', role: 'Developer' },
    { fileBase: 'slavik', name: 'Slavik', role: 'Developer' },
    { fileBase: 'tamila', name: 'Tamila', role: 'Marketing' },
    { fileBase: 'ylia', name: 'Yulia', role: 'Designer' }
  ];

  return (
    <>
      <SEO
        title={title}
        description={description}
        url={url}
        image={`${baseUrl}/images/about/cover.jpg`}
        locale={locale}
        alternates={[
          { hrefLang: 'uk', href: `${baseUrl}/about` },
          { hrefLang: 'en', href: `${baseUrl}/en/about` }
        ]}
        jsonLd={jsonLd}
      />

      {/* Hero - iOS 26 style gradient */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a0f1c] via-[#1a1f3a] to-[#0f1419]">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1200px_600px_at_20%_10%,rgba(99,102,241,0.15),transparent),radial-gradient(1000px_500px_at_80%_20%,rgba(236,72,153,0.12),transparent),radial-gradient(800px_400px_at_50%_80%,rgba(56,189,248,0.08),transparent)]" />
        <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px'}} aria-hidden />
        <div className="mx-auto max-w-7xl px-6 py-20 relative">
          <SmartImage srcFolder="/images/about" alt="About Diwave Team" className="w-full max-w-4xl mx-auto mb-8 rounded-xl border border-white/10" imgClassName="w-full h-96 object-cover rounded-xl" />
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 text-center">About Diwave</h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-center">{description}</p>
        </div>
      </section>

      {/* Profile and summary */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="prose prose-invert max-w-none text-gray-300">
            <h2 className="text-white">Профіль</h2>
            <p>
              Дмитро Кравець — Tech Entrepreneur та CTO із 14+ роками досвіду трансформації традиційного бізнесу за рахунок
              вирішення ключових фінансових та операційних викликів. Будую <b>енд‑ту‑енд технологічні екосистеми</b> — від
              ідеї, обладнання та ПЗ до запуску, автоматизації та масштабування.
            </p>
            <p>
              Приклади: усунення витоків готівки через <b>прозору CRM з фіскалізацією</b> (Samwash) та заміна ручних кол‑центрів
              на <b>ефективну e‑commerce платформу</b> (Plantpol). Результат — масштабоване зростання та висока прибутковість
              (до 70% EBITDA у ніші автомийок самообслуговування).
            </p>

            <h2 className="text-white mt-8">Ключові навички</h2>
            <h3 className="text-white">Лідерство та менеджмент</h3>
            <ul>
              <li><b>Стратегія:</b> Technology Strategy, R&amp;D, Go‑to‑Market.</li>
              <li><b>Команди:</b> побудова, менторинг, performance‑менеджмент, делегування та контроль.</li>
              <li><b>Операції:</b> full‑cycle business development, P&amp;L, high‑value B2B sales, комунікація зі стейкхолдерами.</li>
            </ul>
            <h3 className="text-white">Digital‑маркетинг</h3>
            <ul>
              <li>Paid: Google, Facebook/Instagram, YouTube; перформанс‑аналітика та оптимізація; SEO; контент‑маркетинг.</li>
            </ul>
            <h3 className="text-white">Технічна експертиза</h3>
            <ul>
              <li><b>Backend:</b> PHP, Python, Node.js</li>
              <li><b>Frontend:</b> JavaScript, TypeScript</li>
              <li><b>DevOps &amp; Cloud:</b> CI/CD, Docker, Kubernetes, AWS, DigitalOcean, Cloudflare, Linux</li>
              <li><b>Core:</b> E‑commerce &amp; SaaS, фіскалізація/комплаєнс, платежі (Stripe, LiqPay, PayPal, MonoBank), AI‑інтеграції.</li>
            </ul>

            <h2 className="text-white mt-8">Досвід</h2>
            <h3 className="text-white">Founder / CEO | DiWave &amp; бренд Samwash</h3>
            <ul>
              <li><b>High‑value sales:</b> комплексні автомийки €100k+ за одиницю; контент для YouTube/TikTok; масштабні кампанії Google/Facebook.</li>
              <li><b>Власне ПЗ та фіскалізація:</b> CRM із прозорою звітністю та автоматичною генерацією фіскальних чеків.</li>
              <li><b>Клієнтський веб‑додаток:</b> app.samwash.ua з безпечними онлайн‑платежами та історією транзакцій.</li>
              <li><b>E‑commerce автоматизація (Plantpol):</b> plantpol.com.ua — один з найбільших B2B‑магазинів розсади в Україні,
                повна автоматизація приймання замовлень без кол‑центру.</li>
            </ul>
            <h3 className="text-white">Team Lead / Full‑Stack | Ltd. "Crunch"</h3>
            <ul>
              <li>Розробка SaaS для управління проєктами та фінансами з ROI‑аналітикою і бюджетним прогнозуванням.</li>
              <li>Технології: Laravel, Angular, AWS, Docker.</li>
            </ul>
            <h3 className="text-white">Technical Consultant / Developer | RichardGEP Ltd. (Freelance)</h3>
            <ul>
              <li>Міграції інфраструктури, оновлення ПЗ, підвищення безпеки, продуктивності та масштабованості.</li>
            </ul>

            <h2 className="text-white mt-8">Digital‑маркетинг портфоліо (Samwash)</h2>
            <ul>
              <li><a href="https://youtube.com/@samwash" target="_blank" rel="noopener noreferrer">YouTube: @samwash</a></li>
              <li><a href="https://tiktok.com/@samwash.official" target="_blank" rel="noopener noreferrer">TikTok: @samwash.official</a></li>
              <li><a href="https://instagram.com/samwash_carwash" target="_blank" rel="noopener noreferrer">Instagram: @samwash_carwash</a></li>
              <li><a href="https://facebook.com/samwashcarwash" target="_blank" rel="noopener noreferrer">Facebook: @samwashcarwash</a></li>
            </ul>

            <h2 className="text-white mt-8">Освіта</h2>
            <p>Магістр економіки та підприємництва — ЛНУ ім. І. Франка</p>

            <h2 className="text-white mt-8">Сертифікації</h2>
            <ul>
              <li>Web Developer, ЦА «Шаг» (HTML, CSS, PHP, MySQL, JavaScript, SEO)</li>
              <li>Enterprise 21, EU Youth in Action (Менеджмент та підприємництво)</li>
            </ul>
          </div>

          <div className="rounded-xl border border-cyan-400/30 p-4 bg-black/40">
            <div className="rounded-lg w-full h-80 overflow-hidden">
              <SmartImage srcFolder="/images/team" alt="Dmytro Kravets — Tech Entrepreneur, CTO" className="w-full h-80" imgClassName="w-full h-80 object-cover" />
            </div>
            <div className="mt-4 text-gray-200">
              <div className="text-white font-semibold text-lg">Dmytro Kravets — Tech Entrepreneur | CTO</div>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a href="tel:+380505923772" className="hover:text-white text-cyan-300">+380 50 592 3772</a>
                </li>
                <li>
                  <a href="mailto:kravets.lviv@gmail.com" className="hover:text-white text-cyan-300">kravets.lviv@gmail.com</a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/dmytrokravets" target="_blank" rel="noopener noreferrer" className="hover:text-white text-cyan-300">LinkedIn: /in/dmytrokravets</a>
                </li>
                <li>
                  <a href="https://upwork.com/freelancers/stevark" target="_blank" rel="noopener noreferrer" className="hover:text-white text-cyan-300">Upwork: /freelancers/stevark</a>
                </li>
                <li>
                  <a href="https://diwave.company" target="_blank" rel="noopener noreferrer" className="hover:text-white text-cyan-300">Website: diwave.company</a>
                </li>
              </ul>
              <div className="mt-4 text-xs text-gray-400">Локація: Україна та ЄС</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        <h2 className="text-white text-2xl font-semibold mb-4">Команда Diwave</h2>
        <p className="text-gray-300 mb-6">Невелика частина людей, що допомагають клієнтам масштабувати бізнес завдяки технологіям.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((m) => (
            <div key={m.fileBase} className="rounded-xl overflow-hidden border border-cyan-400/20 bg-black/40 hover:border-cyan-400/60 transition-all group">
              <SmartImage
                sources={[`/images/team/${m.fileBase}.jpg`]}
                alt={`${m.name} — команда Diwave`}
                className="w-full h-56"
                imgClassName="w-full h-56 object-cover object-center"
              />
              <div className="p-3 text-center">
                <div className="text-white font-medium">{m.name}</div>
                {m.role && <div className="text-cyan-300 text-sm mt-1">{m.role}</div>}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
