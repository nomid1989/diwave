import React from 'react';
import SEO from '@/components/SEO';

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

export default function UsaUaProject() {
  const title = 'USA.UA — Міжнародна логістика з США | Diwave Solutions';
  const description = 'E-commerce платформа для закупівлі та доставки товарів з американських сайтів в Україну. Трекінг, payment gateway, автоматизація.';
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
            Комплексна платформа для закупівлі та доставки товарів з американських магазинів в Україну
          </p>

          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 md:p-12 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Про Платформу</h2>
            <p className="text-gray-300 mb-6">
              USA.UA — сервіс міжнародної доставки, який допомагає клієнтам купувати та отримувати товари з США в Україну.
              Платформа забезпечує повний цикл: від допомоги в покупці до доставки з відстеженням на кожному етапі.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">Ключові Можливості</h3>
            <ul className="space-y-3 text-gray-300 mb-6">
              <li>✓ Допомога в закупівлі товарів з американських магазинів</li>
              <li>✓ Два способи доставки: авіа (до 17 днів) та море (до 35 днів)</li>
              <li>✓ Real-time трекінг посилок на всіх етапах</li>
              <li>✓ Точне зважування (з точністю до 0.1 кг)</li>
              <li>✓ Безкоштовна доставка всередині США для комбінованих замовлень</li>
              <li>✓ Email та SMS нотифікації про статус замовлення</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">Переваги Сервісу</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                <div className="text-cyan-400 font-semibold mb-2">Прозорість</div>
                <div className="text-sm text-gray-300">Без прихованих комісій, точне зважування, історія балансу</div>
              </div>
              <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                <div className="text-cyan-400 font-semibold mb-2">Гнучкість</div>
                <div className="text-sm text-gray-300">Мінімальна вага 0.2 кг, індивідуальні та групові замовлення</div>
              </div>
              <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                <div className="text-cyan-400 font-semibold mb-2">Економія</div>
                <div className="text-sm text-gray-300">Без комісії на покупку, безподаткові штати, низькі тарифи</div>
              </div>
              <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                <div className="text-cyan-400 font-semibold mb-2">Зручність</div>
                <div className="text-sm text-gray-300">Множинні способи оплати, онлайн поповнення балансу, реферальна програма</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Технічна Реалізація</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• E-commerce платформа з особистим кабінетом</li>
                <li>• Інтеграція міжнародних платіжних систем</li>
                <li>• Система трекінгу з API інтеграціями</li>
                <li>• Автоматизовані нотифікації (Email/SMS)</li>
                <li>• Управління замовленнями та балансом</li>
                <li>• Реферальна програма</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Експертиза Diwave</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Складна логістична автоматизація</li>
                <li>• Міжнародні платіжні інтеграції</li>
                <li>• Tracking API та real-time моніторинг</li>
                <li>• E-commerce архітектура</li>
                <li>• CRM для логістичних операцій</li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8">
            <h3 className="text-xl font-semibold text-white mb-3">Результати</h3>
            <ul className="space-y-3 text-gray-300">
              <li>✓ Повна автоматизація міжнародних закупівель</li>
              <li>✓ Прозоре трекінгове супроводження на всіх етапах</li>
              <li>✓ Інтеграція складних логістичних процесів</li>
              <li>✓ Ефективне управління замовленнями та платежами</li>
              <li>✓ Висока задоволеність клієнтів завдяки прозорості</li>
            </ul>

            <div className="mt-6 p-4 rounded-xl border border-white/10 bg-white/5">
              <h4 className="text-white font-semibold mb-2">Технології</h4>
              <p className="text-gray-300 text-sm">E-commerce, International Logistics, Tracking API, Payment Gateways, SMS/Email Automation, CRM</p>
            </div>
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
