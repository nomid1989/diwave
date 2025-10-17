import React from 'react';
import SEO from '@/components/SEO';

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

export default function PaollaProject() {
  const title = 'Paolla — Цифрова Платформа для Виробника Взуття | Diwave Solutions';
  const description = 'Розробка e-commerce та корпоративного веб-сайту для української компанії-виробника взуття з 30+ роками досвіду.';
  const url = `${baseUrl}/projects/paolla`;

  return (
    <>
      <SEO title={title} description={description} url={url} locale="uk" />
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(34,211,238,0.25),transparent)]" />
      </div>
      <main className="relative">
        <section className="mx-auto max-w-7xl px-6 pt-16 pb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Paolla — E-commerce для Виробника Взуття</h1>
          <p className="text-xl text-gray-300 mb-8">
            Цифрова платформа для українського виробника взуття з 30+ роками досвіду на ринку
          </p>

          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 md:p-12 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Про Компанію</h2>
            <p className="text-gray-300 mb-6">
              Paolla — український виробник взуття з понад 30 роками досвіду. Компанія спеціалізується на створенні
              комфортного та стильного взуття для всіх вікових груп за доступними цінами, що відповідає європейським
              стандартам якості.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">Виклики Проєкту</h3>
            <p className="text-gray-300 mb-4">
              Необхідність створення сучасної цифрової присутності для виробника з багаторічними традиціями,
              інтеграція online та offline каналів продажу, презентація широкого асортименту продукції.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">Наше Рішення</h3>
            <ul className="space-y-3 text-gray-300 mb-6">
              <li>✓ E-commerce платформа з каталогом продукції</li>
              <li>✓ Система індивідуального замовлення взуття</li>
              <li>✓ Інтеграція з виробничими процесами</li>
              <li>✓ Персоналізовані консультації онлайн</li>
              <li>✓ SEO-оптимізація для локального ринку</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Функціонал</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Каталог з фільтрами по стилях та розмірах</li>
                <li>• Система індивідуального замовлення</li>
                <li>• Онлайн консультації та підтримка</li>
                <li>• Інтеграція з CRM для управління замовленнями</li>
                <li>• Мобільно-адаптивний дизайн</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Технології</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">E-commerce</span>
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">Custom Orders</span>
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">CRM Integration</span>
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">SEO</span>
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">Responsive Design</span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8">
            <h3 className="text-xl font-semibold text-white mb-3">Результати</h3>
            <ul className="space-y-3 text-gray-300">
              <li>✓ Сучасна цифрова платформа для 30-річної компанії</li>
              <li>✓ Зручна система онлайн замовлення взуття</li>
              <li>✓ Інтеграція виробничих процесів з e-commerce</li>
              <li>✓ Покращена комунікація з клієнтами</li>
              <li>✓ Розширення online присутності бренду</li>
            </ul>

            <div className="mt-6 p-4 rounded-xl border border-white/10 bg-white/5">
              <h4 className="text-white font-semibold mb-2">Категорія</h4>
              <p className="text-gray-300 text-sm">Manufacturing E-commerce, B2C, Custom Production, Ukrainian Market</p>
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
