import React from 'react';
import SEO from '@/components/SEO';

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

export default function HostelBookingProject() {
  const title = 'Готельний Менеджмент (Хостели) | Diwave Solutions';
  const description = 'Кастомна програма бронювання для хостелів. Гнучка логіка кімнат/ліжок, оплата, нотифікації.';
  const url = `${baseUrl}/projects/hostel-booking`;

  return (
    <>
      <SEO title={title} description={description} url={url} locale="uk" />
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(168,85,247,0.25),transparent)]" />
      </div>
      <main className="relative">
        <section className="mx-auto max-w-7xl px-6 pt-16 pb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Готельний Менеджмент для Хостелів</h1>
          <p className="text-xl text-gray-300 mb-8">
            Кастомна програма бронювання для трьох хостелів з унікальною логікою
          </p>
          
          <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-8 md:p-12">
            <h2 className="text-2xl font-semibold text-white mb-4">Рішення</h2>
            <p className="text-gray-300 mb-4">
              Розроблено систему з вибором бронювання кімнати або ліжка, автоматичним розрахунком суми, 
              інтеграцією оплати та миттєвим сповіщенням власника.
            </p>
            
            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Ключові функції</h3>
            <ul className="space-y-3 text-gray-300">
              <li>✓ Бронювання кімнат або окремих ліжок</li>
              <li>✓ Автоматичний розрахунок вартості</li>
              <li>✓ Інтеграція платіжних систем</li>
              <li>✓ Миттєві нотифікації власнику</li>
              <li>✓ Управління доступністю місць</li>
            </ul>

            <div className="mt-6 p-4 rounded-xl border border-white/10 bg-white/5">
              <h3 className="text-white font-semibold mb-2">Результат</h3>
              <p className="text-gray-300 text-sm">Автоматизація процесу бронювання, гнучка логіка, зручність для гостей та власників</p>
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
