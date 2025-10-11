import React from 'react';
import SEO from '@/components/SEO';

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

export default function UsaUaProject() {
  const title = 'USA.UA — Міжнародна логістика | Diwave Solutions';
  const description = 'Система закупівлі товарів з США. Агрегатор доставки з американських сайтів в Україну з трекінгом.';
  const url = `${baseUrl}/projects/usa-ua`;

  return (
    <>
      <SEO title={title} description={description} url={url} locale="uk" />
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(34,211,238,0.25),transparent)]" />
      </div>
      <main className="relative">
        <section className="mx-auto max-w-7xl px-6 pt-16 pb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">USA.UA — Міжнародна E-commerce Логістика</h1>
          <p className="text-xl text-gray-300 mb-8">
            Складна e-commerce система-посередник для закупівлі товарів з американських сайтів з доставкою в Україну
          </p>
          
          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 md:p-12">
            <h2 className="text-2xl font-semibold text-white mb-4">Ключові можливості</h2>
            <ul className="space-y-3 text-gray-300">
              <li>✓ Автоматична закупівля товарів з американських сайтів</li>
              <li>✓ Логістичне трекінгове супроводження</li>
              <li>✓ Інтеграція міжнародних платіжних шлюзів</li>
              <li>✓ Доставка в Україну з повним контролем</li>
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <a href="/projects" className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10">
            ← До каталогу Проєктів
          </a>
        </section>
      </main>
    </>
  );
}
