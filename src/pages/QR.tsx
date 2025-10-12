import React, { useEffect } from 'react';
import SEO from '@/components/SEO';
import SectionHeader from '@/components/sections/SectionHeader';
import { SolutionsQRSection, ProjectsQRSection, IndustriesQRSection } from '@/content/QRSections';

type Props = { locale: 'uk' | 'en' };

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

const QR: React.FC<Props> = ({ locale }) => {
  const t = (uk: string, en: string) => (locale === 'uk' ? uk : en);
  const url = `${baseUrl}${locale === 'en' ? '/en' : ''}/qr`;

  const title = t('QR‑оплата: швидко, без терміналів, масштабовано | Diwave', 'QR Payments: fast, terminal‑free, scalable | Diwave');
  const description = t(
    'Єдине рішення QR‑оплат для мереж: локалізація, двомовність, інтеграції та масштабування. Перегляньте рішення, кейс і застосування в індустріях.',
    'Unified QR‑payments for networks: localization, bilingual, integrations and scaling. Explore solution, case and industry applications.'
  );

  // Базова аналітика: dataLayer + CustomEvent
  useEffect(() => {
    try {
      // @ts-ignore
      window.dataLayer?.push({ event: 'qr_page_view', locale });
      window.dispatchEvent(new CustomEvent('qr_page_view', { detail: { locale } }));
    } catch {}
  }, [locale]);

  const track = (action: string, label: string) => {
    try {
      // @ts-ignore
      window.dataLayer?.push({ event: 'qr_interaction', action, label, locale });
      window.dispatchEvent(new CustomEvent('qr_interaction', { detail: { action, label, locale } }));
    } catch {}
  };

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      url,
      description
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${baseUrl}${locale === 'en' ? '/en' : ''}` },
        { '@type': 'ListItem', position: 2, name: t('QR‑оплата', 'QR Payments'), item: url }
      ]
    }
  ];

  return (
    <>
      <SEO
        title={title}
        description={description}
        url={url}
        image={`${baseUrl}/images/qr/cover.jpg`}
        locale={locale}
        alternates={[
          { hrefLang: 'uk', href: `${baseUrl}/qr` },
          { hrefLang: 'en', href: `${baseUrl}/en/qr` }
        ]}
        jsonLd={jsonLd}
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeader
          title={t('QR‑оплата для бізнесу', 'QR Payments for business')}
          subtitle={description}
        />
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`${locale === 'en' ? '/en' : ''}/solutions/samwash-qr`}
            onClick={() => track('cta_click', 'solutions_samwash_qr')}
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-white/90 text-black font-medium hover:bg-white transition"
          >
            {t('Перейти до рішення', 'View solution')}
          </a>
          <a
            href={`${locale === 'en' ? '/en' : ''}/projects/samwash-qr`}
            onClick={() => track('cta_click', 'projects_samwash_qr')}
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 border border-white/30 text-white hover:bg-white/10 transition"
          >
            {t('Дивитися кейс', 'View case')}
          </a>
          <a
            href={`${locale === 'en' ? '/en' : ''}/industries/automotive/car-wash-qr`}
            onClick={() => track('cta_click', 'industries_car_wash_qr')}
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 border border-white/30 text-white hover:bg-white/10 transition"
          >
            {t('Застосування в індустріях', 'Industry application')}
          </a>
        </div>

        {/* Контентні секції */}
        <div className="mt-12 space-y-12">
          <div>
            <h2 className="text-white text-2xl font-semibold mb-3">{t('Рішення', 'Solution')}</h2>
            <SolutionsQRSection />
          </div>
          <div>
            <h2 className="text-white text-2xl font-semibold mb-3">{t('Кейс', 'Case')}</h2>
            <ProjectsQRSection />
          </div>
          <div>
            <h2 className="text-white text-2xl font-semibold mb-3">{t('Індустрії', 'Industries')}</h2>
            <IndustriesQRSection />
          </div>
        </div>

        {/* Додаткові посилання */}
        <nav className="mt-10 text-sm text-gray-300">
          <p>
            {t('Детальні сторінки:', 'Detailed pages:')}{' '}
            <a className="underline underline-offset-4 hover:text-white" href="/solutions/samwash-qr">Samwash QR</a> ·{' '}
            <a className="underline underline-offset-4 hover:text-white" href="/projects/samwash-qr">Case</a> ·{' '}
            <a className="underline underline-offset-4 hover:text-white" href="/industries/automotive/car-wash-qr">Industry</a>
          </p>
        </nav>
      </section>
    </>
  );
};

export default QR;
