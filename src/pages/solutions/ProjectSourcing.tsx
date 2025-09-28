import React from 'react';
import SEO from '@/components/SEO';
import SmartImage from '@/components/ui/SmartImage';

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

export default function ProjectSourcing() {
  const title = 'Project sourcing та Delivery | Diwave Solutions';
  const description =
    'Беремо на себе пошук спеціалістів, управління проєктом і поставку: від Discovery та дизайну до розробки, QA, DevOps і запуску.';
  const url = `${baseUrl}/solutions/project-sourcing`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Project sourcing та Delivery',
      description:
        'Е2Е супровід: команда під задачу, управління, процеси, терміни та якість.',
      provider: { '@type': 'Organization', name: 'Diwave Solutions', url: baseUrl },
      areaServed: ['UA', 'EU'],
      inLanguage: ['uk', 'en'],
      url
    }
  ];

  return (
    <>
      <SEO
        title={title}
        description={description}
        url={url}
        image={`${baseUrl}/images/solutions/project-sourcing/cover.jpg`}
        locale="uk"
        jsonLd={jsonLd}
      />
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(34,211,238,0.25),transparent),radial-gradient(1000px_500px_at_90%_10%,rgba(168,85,247,0.18),transparent)]" />
        <div className="absolute inset-0 backdrop-blur-[2px]" aria-hidden />
      </div>
      <main className="relative">
        <section className="mx-auto max-w-7xl px-6 pt-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
                Project sourcing та Delivery
              </h1>
              <p className="mt-4 text-gray-300">{description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-md px-5 py-2.5 bg-white/90 text-black font-medium hover:bg-white transition"
                >
                  Дивитись кейси
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-md px-5 py-2.5 border border-white/30 text-white hover:bg-white/10 transition"
                >
                  Обговорити проєкт
                </a>
              </div>
            </div>
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-400/20 to-fuchsia-400/20 blur-2xl"
                aria-hidden
              />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
                <SmartImage
                  srcFolder="/images/solutions/project-sourcing"
                  alt="Project sourcing та Delivery — Diwave Solutions"
                  className="w-full h-[420px]"
                  imgClassName="w-full h-[420px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: 'Discovery → Plan', d: 'Інтерв’ю, вимоги, беклог, оцінка, бюджет.' },
              { t: 'Team → Build', d: 'Підбір фахівців, дизайн, розробка, QA, безпека.' },
              { t: 'Launch → Grow', d: 'DevOps, аналітика, SLA, оптимізація, roadmap.' }
            ].map((f) => (
              <div
                key={f.t}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <div className="text-white font-medium">{f.t}</div>
                <div className="text-gray-300 text-sm mt-1">{f.d}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-white text-xl font-semibold">Ролі та відповідальність</h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-200">
              <li>
                <b>PM / Delivery:</b> план, ризики, терміни, бюджет, комунікації.
              </li>
              <li>
                <b>Tech Lead:</b> архітектура, стек, code review, безпека, performance.
              </li>
              <li>
                <b>Design → QA → DevOps:</b> UX/UI, прототипи, тести, CI/CD, моніторинг.
              </li>
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/solutions"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10"
            >
              ← До каталогу Рішень
            </a>
            <a
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10"
            >
              Кейси
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white/90 text-black hover:bg-white"
            >
              Замовити консультацію
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
