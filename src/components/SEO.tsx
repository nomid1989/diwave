import React from 'react';
import { Helmet } from 'react-helmet-async';

type Alternate = { hrefLang: string; href: string };

type SEOProps = {
  title: string;
  description: string;
  url: string;
  alternates?: Alternate[];
  jsonLd?: unknown[];
  image?: string;
  locale?: 'uk' | 'en';
  keywords?: string;
  author?: string;
  type?: 'website' | 'article' | 'product' | 'profile';
};

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  url,
  alternates = [],
  jsonLd = [],
  image,
  locale = 'uk',
  keywords = 'IoT, FinTech, E-commerce, CRM, Автоматизація бізнесу, Розробка ПЗ',
  author = 'Diwave Solutions',
  type = 'website'
}) => {
  const siteName = 'Diwave Solutions';
  const siteUrl = (import.meta as any).env?.VITE_SITE_URL || (typeof window !== 'undefined' ? window.location.origin : '');
  const defaultImage = image && image.startsWith('http') ? image : `${siteUrl}${image || '/images/og-default.jpg'}`;

  // Map hreflang to OG locale codes
  const mapOgLocale = (hl: string) => {
    const code = hl.toLowerCase();
    if (code === 'uk' || code === 'uk-ua') return 'uk_UA';
    if (code === 'en' || code === 'en-us' || code === 'en-ua') return 'en_US';
    return undefined;
  };

  // Default JSON-LD for Organization and WebSite to help SEO/AI
  const defaultJsonLdObjects: any[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: siteName,
      url: siteUrl,
      logo: `${siteUrl}/images/logo.png`,
      sameAs: [
        'https://www.facebook.com/DiWave.company',
        'https://www.instagram.com/diwave.company/',
        'https://www.youtube.com/@DigitalWaveAI'
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteName,
      url: siteUrl,
      inLanguage: locale === 'uk' ? 'uk-UA' : 'en-US',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${siteUrl}/?s={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    }
  ];

  const allJsonLd = [...defaultJsonLdObjects, ...jsonLd];

  return (
    <>
      <Helmet prioritizeSeoTags>
        {/* Basic Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <link rel="canonical" href={url} />

        {/* Language Alternates */}
        {alternates.map((a) => (
          <link key={a.hrefLang} rel="alternate" hrefLang={a.hrefLang} href={a.href} />
        ))}

        {/* OG Locale Alternates */}
        {alternates
          .map((a) => mapOgLocale(a.hrefLang))
          .filter(Boolean)
          .map((code, i) => (
            <meta key={`og-alt-${i}`} property="og:locale:alternate" content={code as string} />
          ))}

        {/* Robots & Indexing - 2025 Best Practices */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />

        {/* Geographic Targeting */}
        <meta name="geo.region" content="UA" />
        <meta name="geo.placename" content="Ukraine" />
        <meta name="geo.position" content="50.4501;30.5234" />
        <meta name="ICBM" content="50.4501, 30.5234" />

        {/* Open Graph / Facebook - Enhanced for 2025 */}
        <meta property="og:type" content={type} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:locale" content={locale === 'uk' ? 'uk_UA' : 'en_US'} />
        <meta property="og:image" content={defaultImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={title} />
        <meta property="og:image:type" content="image/jpeg" />

        {/* Twitter Card - Enhanced */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@diwave" />
        <meta name="twitter:creator" content="@diwave" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={defaultImage} />
        <meta name="twitter:image:alt" content={title} />

        {/* Telegram - Enhanced Preview */}
        <meta property="telegram:card" content="summary_large_image" />
        <meta property="telegram:title" content={title} />
        <meta property="telegram:description" content={description} />
        <meta property="telegram:image" content={defaultImage} />

        {/* Mobile & PWA */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content={siteName} />
        <meta name="theme-color" content="#0a0a0f" />

        {/* Performance & UX Hints */}
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="format-detection" content="telephone=yes" />

        {/* Copyright & Legal */}
        <meta name="copyright" content={`© ${new Date().getFullYear()} Diwave Solutions`} />
        <meta name="rating" content="general" />

        {/* Modern Browser Features - 2025 */}
        <meta name="color-scheme" content="dark light" />
      </Helmet>

      {/* JSON-LD Structured Data */}
      {allJsonLd.map((obj, i) => (
        <Helmet key={i}>
          <script type="application/ld+json">{JSON.stringify(obj)}</script>
        </Helmet>
      ))}
    </>
  );
};

export default SEO;
