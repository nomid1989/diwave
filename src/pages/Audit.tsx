import React from 'react';
import SEO from '@/components/SEO';

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

type Item = {
  title: string;
  impact: 'Immediate Performance Fix' | 'High-Impact SEO' | 'Critical Branding';
  summary: string;
};

const items: Item[] = [
  {
    title: 'Convert all raster images to AVIF (fallback WebP), add responsive srcset/sizes, native lazy-loading',
    impact: 'Immediate Performance Fix',
    summary:
      'Inventory /public images, convert JPG/PNG → AVIF (q=45–60) with WebP fallback; deliver responsive srcset/sizes and decoding=async. Expect lower LCP/CLS and bandwidth by 40–70%.'
  },
  {
    title: 'Inline Critical CSS for above-the-fold and defer non-critical CSS/JS',
    impact: 'Immediate Performance Fix',
    summary:
      'Use a critical CSS approach (e.g., Vite + Critters or pre-render) to eliminate render-blocking. Defer/async non-critical scripts and remove unused CSS to improve FCP/LCP and INP.'
  },
  {
    title: 'Optimize font loading (swap, subset/self-host, minimal weights)',
    impact: 'Immediate Performance Fix',
    summary:
      'Keep preconnect + display=swap (already present). Limit Montserrat weights to used set, consider local hosting with WOFF2 subsets. Add robust fallback stack to reduce FOIT/FOUT and improve LCP.'
  },
  {
    title: 'CDN + caching strategy (Brotli/Gzip, immutable assets, HTML caching policy)',
    impact: 'Immediate Performance Fix',
    summary:
      'Serve through CDN, enable Brotli, set Cache-Control: immutable for hashed assets, and appropriate HTML caching (no-store or short max-age + SWR). Aim for TTFB < 200ms and better INP.'
  },
  {
    title: 'Structured Data expansion: Organization, ProfessionalService, Person, Service/Product, FAQ, BreadcrumbList',
    impact: 'High-Impact SEO',
    summary:
      'Add precise JSON-LD across pages: homepage (Organization + ProfessionalService + Person), solutions (Service/Product), FAQ, and BreadcrumbList to increase rich results and AI comprehension.'
  },
  {
    title: 'Topical Authority architecture (pillar/cluster) for Digital Product Automation & Online Sales Enablement',
    impact: 'High-Impact SEO',
    summary:
      'Create a pillar page with clusters: IoT/SCADA, Payments, CRM/Loyalty, E-commerce, Drones, Analytics. Interlink clusters and case studies to boost semantic coverage and E-E-A-T.'
  },
  {
    title: 'International SEO hygiene: canonical + hreflang for uk/en, clean slugs, metadata completeness',
    impact: 'High-Impact SEO',
    summary:
      'Ensure canonical and hreflang per locale (already partly via SEO component), complete meta titles/descriptions, and align headings (H1–H3) with the target queries on each page.'
  },
  {
    title: 'Case studies: Problem → Solution → Result (quantified) with visuals and credibility markers',
    impact: 'Critical Branding',
    summary:
      'Rewrite key case studies (e.g., car wash EBITDA 70%) in PSR format, add metrics, timelines, stack, client quotes, and images to reinforce expertise and sales readiness.'
  },
  {
    title: 'Trust signals: prominent founder identity and contact (LinkedIn, Upwork) across header/footer',
    impact: 'Critical Branding',
    summary:
      'Surface Dmytro’s LinkedIn/Upwork + phone/email prominently (header CTA + footer). Add client logos/affiliations to elevate credibility and conversion rate.'
  },
  {
    title: 'CTA funnel optimization + analytics: clear path (Discovery → Design → Deployment → Support)',
    impact: 'Critical Branding',
    summary:
      'Place sticky/section CTAs, align copy with funnel stages, and instrument events (clicks, lead form) for continuous CRO. Ensure parity on mobile-first layouts.'
  }
];

const Audit: React.FC<{ locale?: 'uk' | 'en' }> = ({ locale = 'uk' }) => {
  const url = `${baseUrl}${locale === 'en' ? '/en' : ''}/audit`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Top 10 Action Items — diwave.company Audit',
      itemListOrder: 'http://schema.org/ItemListOrderAscending',
      itemListElement: items.map((it, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: it.title,
        description: it.summary,
        additionalProperty: [{ '@type': 'PropertyValue', name: 'Impact', value: it.impact }]
      }))
    }
  ];

  return (
    <>
      <SEO
        title={locale === 'en' ? 'AI Audit — Top 10 Action Items | Diwave' : 'AI-аудит — Топ‑10 дій | Diwave'}
        description={
          locale === 'en'
            ? 'Concise, prioritized Top 10 actions to reach 95+ PSI, enhance SEO/AI-readability, and strengthen branding.'
            : 'Стислий, пріоритезований Топ‑10 дій для 95+ PageSpeed, кращого SEO/AI та посилення бренду.'
        }
        url={url}
        jsonLd={jsonLd}
      />

      <section className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-white">{locale === 'en' ? 'Top 10 Action Items' : 'Топ‑10 дій для diwave.company'}</h1>
        <p className="text-gray-300 mt-3">
          {locale === 'en'
            ? 'Prioritized roadmap to meet October 2025 standards across Performance, SEO, and Branding.'
            : 'Пріоритезована дорожня карта під стандарти жовтня 2025 за напрямами Performance, SEO та Branding.'}
        </p>

        <div className="mt-8 space-y-4">
          {items.map((it, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 h-6 w-6 flex items-center justify-center rounded-full bg-cyan-400/20 text-cyan-200 text-sm">
                  {i + 1}
                </div>
                <div>
                  <div className="text-white font-semibold">{it.title}</div>
                  <div className="mt-1 inline-flex text-xs px-2 py-1 rounded bg-gray-700/50 border border-white/10 text-gray-200">
                    {it.impact}
                  </div>
                  <p className="text-gray-300 text-sm mt-2">{it.summary}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href={locale === 'en' ? '/en/contact' : '/contact'} className="inline-flex items-center rounded-md px-5 py-2 bg-white text-black font-semibold hover:bg-white/90 transition">
            {locale === 'en' ? 'Discuss implementation' : 'Обговорити впровадження'}
          </a>
        </div>
      </section>
    </>
  );
};

export default Audit;
