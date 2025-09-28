import React from 'react';
import SEO from '@/components/SEO';
import SmartImage from '@/components/ui/SmartImage';

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

export default function EcommerceProject() {
  const title = 'E‑commerce інтеграції — кейс | Diwave Solutions';
  const description =
    'Каталог, кошик, чек‑аут, ERP, аналітика. Платформа для B2B/B2C з фокусом на швидкодію і конверсії.';
  const url = `${baseUrl}/projects/ecommerce`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: 'Кейс: E‑commerce інтеграції',
      description:
        'Впровадження e‑commerce з глибокими інтеграціями, аналітикою та оптимізацією конверсій.',
      author: { '@type': 'Organization', name: 'Diwave Solutions', url: baseUrl },
      inLanguage: ['uk', 'en'],
      url
    }
  ];

  return (
    <>
      <SEO title={title} description={description} url={url} image={`${baseUrl}/images/projects/ecommerce/cover.jpg`} locale="uk" jsonLd={jsonLd} />
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(34,211,238,0.25),transparent),radial-gradient(1000px_500px_at_90%_10%,rgba(168,85,247,0.18),transparent)]" />
        <div className="absolute inset-0 backdrop-blur-[2px]" aria-hidden />
      </div>
      <main className="relative">
        <section className="mx-auto max-w-7xl px-6 pt-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">E‑commerce інтеграції</h1>
              <p className="mt-4 text-gray-300">{description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/solutions/ecommerce" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-white/90 text-black font-medium hover:bg-white transition">Перейти до рішення</a>
                <a href="#results" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 border border-white/30 text-white hover:bg-white/10 transition">Результати</a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-400/20 to-fuchsia-400/20 blur-2xl" aria-hidden />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
                <SmartImage srcFolder="/images/projects/ecommerce" alt="Кейс: e‑commerce" className="w-full h-[420px]" imgClassName="w-full h-[420px] object-cover" />
              </div>
            </div>
          </div>
        </section>
        <section id="results" className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-white text-xl font-semibold">Результати</h2>
            <div className="mt-4 grid md:grid-cols-3 gap-4">
              {[
                { m: '↑', t: 'Конверсії' },
                { m: '↑', t: 'Швидкодія' },
                { m: '↓', t: 'Вартість підтримки' }
              ].map((r) => (
                <div key={r.t} className="rounded-xl border border-white/10 bg-black/20 p-4 text-center">
                  <div className="text-2xl text-white font-semibold">{r.m}</div>
                  <div className="text-xs text-gray-300">{r.t}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-6 pb-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-white text-xl font-semibold">Партнери e‑commerce</h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-200">
              <li>
                <a href="https://plantpol.com.ua" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">Plantpol — інтернет‑магазин квіткового господарства</a>
                <span className="text-gray-400"> · </span>
                <a href="https://www.instagram.com/plantpol_ukraina/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">Instagram</a>
                <span className="text-gray-400"> · </span>
                <a href="https://www.facebook.com/plantpol.ukraine/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">Facebook</a>
                <span className="text-gray-400"> · </span>
                <a href="https://www.youtube.com/@plantpol_ukraina" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">YouTube</a>
              </li>
              <li>
                <a href="https://lembergflowers.com.ua" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">Lemberg Flowers — партнер</a>
                <span className="text-gray-400"> · </span>
                <a href="https://www.instagram.com/lembergflowers/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">Instagram</a>
                <span className="text-gray-400"> · </span>
                <a href="https://www.facebook.com/lembergflowers.ltd/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">Facebook</a>
              </li>
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-white text-xl font-semibold">Деталі реалізації e‑commerce з нуля</h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-200">
              <li><b>Discovery та KPI:</b> спільно з клієнтом — скорочення витрат на підтримку, підвищення конверсії та AOV.</li>
              <li><b>Каталог і пошук:</b> швидке фільтрування, варіанти, залишки, оптові прайси.</li>
              <li><b>Кошик і чек‑аут:</b> мінімум кроків, застосунок промокодів, різні способи оплати.</li>
              <li><b>ERP/CRM інтеграції:</b> синхронізація замовлень, клієнтів і складу; нотифікації.</li>
              <li><b>SEO/перформанс:</b> швидкі сторінки, структуровані дані, мікророзмітка, кешування.</li>
              <li><b>Операції:</b> звіти, ролі/права, SLA, журнал подій, підтримка без простоїв.</li>
              <li><b>Маркетинг:</b> email/SMS, ремаркетинг, UTM‑аналітика, контент, партнерські інтеграції.</li>
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-white text-xl font-semibold">Технічний стек та інтеграції</h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-200">
              <li><b>Frontend:</b> React 18, TypeScript, Tailwind, i18n.</li>
              <li><b>Backend:</b> Node.js/PHP, REST/GraphQL, кеші та черги.</li>
              <li><b>Платежі:</b> картки, Apple/Google Pay, безпечні вебхуки та звірка.</li>
              <li><b>ERP/CRM:</b> двобічна синхронізація, оновлення статусів, антифрод‑правила.</li>
              <li><b>DevOps:</b> Docker, CI/CD, моніторинг, алерти, CDN/WAF, бекапи.</li>
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="flex flex-wrap items-center gap-3">
            <a href="/projects" className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10">← До каталогу Проєктів</a>
            <a href="/solutions/ecommerce" className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10">Пов’язане рішення</a>
          </div>
        </section>
      </main>
    </>
  );
}
