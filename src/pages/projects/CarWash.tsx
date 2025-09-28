import React from 'react';
import SEO from '@/components/SEO';
import SmartImage from '@/components/ui/SmartImage';

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

export default function CarWashProject() {
  const title = 'Платформа для автомийок самообслуговування — кейс | Diwave Solutions';
  const description =
    'IoT/SCADA, моніторинг у реальному часі, платежі, CRM та лояльність. Зменшення простоїв, прозора аналітика, масштабованість.';
  const url = `${baseUrl}/projects/car-wash`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: 'Кейс: Платформа для автомийок самообслуговування',
      description:
        'Реалізація платформи для мереж автомийок: телеметрія, платежі, CRM і лояльність.',
      author: { '@type': 'Organization', name: 'Diwave Solutions', url: baseUrl },
      inLanguage: ['uk', 'en'],
      url
    }
  ];

  return (
    <>
      <SEO title={title} description={description} url={url} image={`${baseUrl}/images/projects/car-wash/cover.jpg`} locale="uk" jsonLd={jsonLd} />
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(34,211,238,0.25),transparent),radial-gradient(1000px_500px_at_90%_10%,rgba(168,85,247,0.18),transparent)]" />
        <div className="absolute inset-0 backdrop-blur-[2px]" aria-hidden />
      </div>
      <main className="relative">
        <section className="mx-auto max-w-7xl px-6 pt-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">Платформа для автомийок</h1>
              <p className="mt-4 text-gray-300">{description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/solutions/car-washes" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-white/90 text-black font-medium hover:bg-white transition">Перейти до рішення</a>
                <a href="#results" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 border border-white/30 text-white hover:bg-white/10 transition">Результати</a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-400/20 to-fuchsia-400/20 blur-2xl" aria-hidden />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
                <SmartImage srcFolder="/images/projects/car-wash" alt="Кейс: автомийки самообслуговування" className="w-full h-[420px]" imgClassName="w-full h-[420px] object-cover" />
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h2 className="text-white text-xl font-semibold">Мета</h2>
              <ul className="mt-3 list-disc list-inside text-gray-300 space-y-1">
                <li>Зменшити простій і втрати виручки.</li>
                <li>Єдина панель KPIs та аналітики.</li>
                <li>Підвищити частку безготівкових оплат.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h2 className="text-white text-xl font-semibold">Реалізація (з нуля)</h2>
              <ol className="mt-3 list-decimal list-inside text-gray-300 space-y-1">
                <li>Discovery з власниками локацій та мереж: визначення KPI (аптайм, конверсія в оплату, середній чек, безготівка).</li>
                <li>UX та контент: потік “скан → вибір → оплата”, мультимовність, мікрокомунікації для зменшення тертя.</li>
                <li>Архітектура IoT/SCADA: телеметрія в реальному часі, подієвий обмін, захищені команди на обладнання.</li>
                <li>Платежі: QR, картки, Apple/Google Pay; безпечні вебхуки, повтори, reconcilliation.</li>
                <li>CRM та лояльність: єдиний профіль клієнта, історія транзакцій, бонуси/промокоди.</li>
                <li>Адмін‑панель і аналітика: KPI, дашборди простоїв, виручка по локаціях, алерти.</li>
                <li>Інфраструктура: CI/CD, контейнеризація, моніторинг, логування, WAF/CDN, бекапи.</li>
                <li>Фіскалізація/комплаєнс: інтеграції та автоматизована звітність (де це потрібно).</li>
                <li>QA та надійність: тестування з польовими випробуваннями, SLA 24/7.</li>
                <li>Запуск і маркетинг: GTM, навчальні матеріали, ретеншн‑кампанії, контент для YouTube/TikTok/IG/FB.</li>
              </ol>
            </div>
          </div>
        </section>
        <section id="results" className="mx-auto max-w-7xl px-6 pb-20">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-white text-xl font-semibold">Результати</h2>
            <div className="mt-4 grid md:grid-cols-3 gap-4">
              {[
                { m: '↓', t: 'Простій' },
                { m: '+', t: 'Частка безготівкових оплат' },
                { m: '↑', t: 'Продуктивність мережі' }
              ].map((r) => (
                <div key={r.t} className="rounded-xl border border-white/10 bg-black/20 p-4 text-center">
                  <div className="text-2xl text-white font-semibold">{r.m}</div>
                  <div className="text-xs text-gray-300">{r.t}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="flex flex-wrap items-center gap-3">
            <a href="/projects" className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10">← До каталогу Проєктів</a>
            <a href="/solutions/car-washes" className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10">Рішення</a>
          </div>
        </section>
      </main>
    </>
  );
}
