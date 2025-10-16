import React from 'react';
import SEO from '@/components/SEO';

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

export default function LassoAiProject() {
  const title = 'Lasso.ai — AI Sales Intelligence Platform | Diwave Solutions';
  const description = 'AI-платформа для B2B продажів з верифікацією контактів, sales intelligence та інтеграцією з CRM. 500M+ професійних профілів.';
  const url = `${baseUrl}/projects/lasso-ai`;

  return (
    <>
      <SEO title={title} description={description} url={url} locale="uk" />
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(34,211,238,0.25),transparent)]" />
      </div>
      <main className="relative">
        <section className="mx-auto max-w-7xl px-6 pt-16 pb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Lasso.ai — AI-платформа Sales Intelligence</h1>
          <p className="text-xl text-gray-300 mb-8">
            Участь у розробці AI-платформи для автоматизації B2B продажів та генерації лідів
          </p>

          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 md:p-12 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Про Платформу</h2>
            <p className="text-gray-300 mb-6">
              Lasso.ai — AI-платформа для sales-команд, яка допомагає знаходити нові можливості для росту revenue.
              Платформа індексує бізнеси з веб-сайтами, LinkedIn-сторінками та надає верифіковані контакти з понад 500 мільйонів
              професійних профілів.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">Ключові Можливості</h3>
            <ul className="space-y-3 text-gray-300 mb-6">
              <li>✓ AI-driven пошук і верифікація контактних даних</li>
              <li>✓ 100% нові, адитивні контакти (не дублікати з CRM)</li>
              <li>✓ Низький bounce rate (нижче 5%)</li>
              <li>✓ Real-time результати замість статичних баз</li>
              <li>✓ Кастомізовані контактні дані на вимогу</li>
              <li>✓ Інтеграція з HubSpot та іншими CRM</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">Результати Клієнтів</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                <div className="text-3xl font-bold text-cyan-400 mb-2">1,200%</div>
                <div className="text-sm text-gray-300">ROI</div>
              </div>
              <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                <div className="text-3xl font-bold text-cyan-400 mb-2">3,700%</div>
                <div className="text-sm text-gray-300">Зростання sales prospects</div>
              </div>
              <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                <div className="text-3xl font-bold text-cyan-400 mb-2">&lt;5%</div>
                <div className="text-sm text-gray-300">Bounce rate</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Експертиза Diwave</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Високонавантажені SaaS платформи</li>
                <li>• AI/ML інтеграції для B2B sales</li>
                <li>• Системи верифікації та валідації даних</li>
                <li>• Real-time обробка великих об'ємів даних</li>
                <li>• CRM інтеграції та автоматизація</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Технології</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">AI/ML</span>
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">SaaS</span>
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">Sales Intelligence</span>
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">Data Verification</span>
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">CRM Integration</span>
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">High-load</span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8">
            <h3 className="text-xl font-semibold text-white mb-3">Наш Внесок</h3>
            <ul className="space-y-3 text-gray-300">
              <li>✓ Архітектура високонавантажених систем обробки даних</li>
              <li>✓ Інтеграція AI/ML для пошуку та верифікації контактів</li>
              <li>✓ Розробка систем real-time аналітики</li>
              <li>✓ Створення масштабованої SaaS інфраструктури</li>
              <li>✓ Імплементація CRM інтеграцій</li>
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
