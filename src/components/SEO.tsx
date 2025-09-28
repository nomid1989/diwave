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
};

const SEO: React.FC<SEOProps> = ({ title, description, url, alternates = [], jsonLd = [], image, locale = 'uk' }) => {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        {alternates.map((a) => (
          <link key={a.hrefLang} rel="alternate" hrefLang={a.hrefLang} href={a.href} />
        ))}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:locale" content={locale} />
        {image && <meta property="og:image" content={image} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {image && <meta name="twitter:image" content={image} />}
      </Helmet>
      {jsonLd.map((obj, i) => (
        <Helmet key={i}>
          <script type="application/ld+json">{JSON.stringify(obj)}</script>
        </Helmet>
      ))}
    </>
  );
};

export default SEO;
