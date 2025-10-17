import React from 'react';
import SEO from '@/components/SEO';

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

export default function GustEnergyProject() {
  const title = 'Gust Energy — Енергетичні Рішення | Diwave Solutions';
  const description = 'Розробка цифрових рішень для енергетичного сектору Туреччини. Smart meters, моніторинг енергоспоживання, аналітика.';
  const url = `${baseUrl}/projects/gust-energy`;

  return (
    <>
      <SEO title={title} description={description} url={url} locale="uk" />
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(34,211,238,0.25),transparent)]" />
      </div>
      <main className="relative">
        <section className="mx-auto max-w-7xl px-6 pt-16 pb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Gust Energy — Цифрові Рішення для Енергетики</h1>
          <p className="text-xl text-gray-300 mb-8">
            Участь у розробці енергетичних технологій та систем моніторингу для турецького ринку
          </p>

          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 md:p-12 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Про Проєкт</h2>
            <p className="text-gray-300 mb-6">
              Gust Energy (gustenergy.com.tr) — турецька компанія, що спеціалізується на енергетичних рішеннях.
              Diwave надавала експертизу у розробці цифрових платформ для енергетичного сектору.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">Ключові Напрямки</h3>
            <ul className="space-y-3 text-gray-300 mb-6">
              <li>✓ Системи моніторингу енергоспоживання</li>
              <li>✓ Smart meters та IoT інтеграції</li>
              <li>✓ Дашборди та аналітика в реальному часі</li>
              <li>✓ Оптимізація енергоефективності</li>
              <li>✓ Алерти та рекомендаційні системи</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Технології</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">IoT/SCADA</span>
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">Smart Meters</span>
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">Real-time Analytics</span>
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">Dashboards</span>
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">ML Anomaly Detection</span>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Експертиза Diwave</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• IoT архітектура та телеметрія</li>
                <li>• Обробка даних у реальному часі</li>
                <li>• Візуалізація складних даних</li>
                <li>• Системи алертів та моніторингу</li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8">
            <h3 className="text-xl font-semibold text-white mb-3">Результати</h3>
            <ul className="space-y-3 text-gray-300">
              <li>✓ Створення масштабованої платформи для енергомоніторингу</li>
              <li>✓ Інтеграція з IoT пристроями та лічильниками</li>
              <li>✓ Впровадження систем аналітики та прогнозування</li>
              <li>✓ Оптимізація енергоспоживання для клієнтів</li>
            </ul>

            <div className="mt-6 p-4 rounded-xl border border-white/10 bg-white/5">
              <h4 className="text-white font-semibold mb-2">Напрямок</h4>
              <p className="text-gray-300 text-sm">Energy Monitoring, Smart Grids, IoT Integration, Predictive Analytics</p>
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
