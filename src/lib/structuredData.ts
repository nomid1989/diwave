/**
 * Structured Data (JSON-LD) Schemas для Google Search Gallery
 * Документація: https://developers.google.com/search/docs/appearance/structured-data/search-gallery
 * 
 * Підтримувані типи:
 * - Organization
 * - LocalBusiness
 * - Product
 * - Service
 * - FAQPage
 * - HowTo
 * - BreadcrumbList
 * - WebSite (SearchAction)
 * - Article
 * - SoftwareApplication
 * - Review / AggregateRating
 * - Course
 * - Event
 */

export type Locale = 'uk' | 'en';

const SITE_URL = 'https://diwave.com.ua';
const LOGO_URL = `${SITE_URL}/images/logo.png`;

// ==========================================
// ORGANIZATION + LOCAL BUSINESS
// ==========================================
export const getOrganizationSchema = (locale: Locale) => {
  const isUk = locale === 'uk';
  
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
    '@id': `${SITE_URL}/#organization`,
    name: 'Diwave Solutions',
    legalName: 'ТОВ "Діджитал Вейв"',
    alternateName: ['Diwave', 'DiWave', 'Digital Wave'],
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: LOGO_URL,
      width: '512',
      height: '512'
    },
    image: LOGO_URL,
    description: isUk 
      ? 'Автоматизація бізнесу: IoT/SCADA, E-commerce, CRM, платіжні інтеграції, AI-SEO. 14+ років досвіду в 15+ індустріях.'
      : 'Business automation: IoT/SCADA, E-commerce, CRM, payment integrations, AI-SEO. 14+ years experience across 15+ industries.',
    
    // Contact Information
    email: 'hello@diwave.com.ua',
    telephone: '+380-67-123-4567',
    
    // Address
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Шевченка 1',
      addressLocality: 'Львів',
      addressRegion: 'Львівська область',
      postalCode: '79000',
      addressCountry: 'UA'
    },
    
    // Geographic coordinates (Lviv)
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 49.8397,
      longitude: 24.0297
    },
    
    // Business hours
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00'
    },
    
    // Social Media
    sameAs: [
      'https://www.facebook.com/DiWave.company',
      'https://www.instagram.com/diwave.company/',
      'https://www.youtube.com/@DigitalWaveAI',
      'https://www.linkedin.com/company/diwave',
      'https://github.com/diwave'
    ],
    
    // Founder
    founder: {
      '@type': 'Person',
      name: 'Dmytro Kravets',
      jobTitle: 'Founder & CEO',
      email: 'dmytro@diwave.com.ua'
    },
    
    // Services offered
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: isUk ? 'Каталог рішень' : 'Solutions Catalog',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: isUk ? 'IoT/SCADA Рішення' : 'IoT/SCADA Solutions',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: isUk ? 'Автомийки самообслуговування' : 'Self-service Car Wash',
                description: isUk 
                  ? 'IoT/SCADA платформа для автомийок з EBITDA 70%'
                  : 'IoT/SCADA platform for car washes with 70% EBITDA'
              }
            }
          ]
        }
      ]
    },
    
    // Awards & Recognition (optional)
    award: isUk 
      ? '14+ років досвіду в автоматизації бізнесу'
      : '14+ years of business automation experience',
    
    // Aggregate Rating (якщо є відгуки)
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '47',
      bestRating: '5',
      worstRating: '1'
    }
  };
};

// ==========================================
// WEBSITE + SEARCH ACTION
// ==========================================
export const getWebSiteSchema = (locale: Locale) => {
  const isUk = locale === 'uk';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'Diwave Solutions',
    description: isUk
      ? 'Автоматизація бізнесу та підключення обладнання до інтернету'
      : 'Business automation and equipment connectivity',
    inLanguage: locale === 'uk' ? 'uk-UA' : 'en-US',
    
    // Search functionality
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    },
    
    // Publisher
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`
    }
  };
};

// ==========================================
// BREADCRUMB LIST
// ==========================================
export const getBreadcrumbSchema = (
  items: Array<{ name: string; url: string }>,
  locale: Locale
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
};

// ==========================================
// PRODUCT (для рішень типу SamWash, Пилососи)
// ==========================================
export const getProductSchema = (product: {
  name: string;
  description: string;
  image: string;
  brand?: string;
  sku?: string;
  price?: number;
  currency?: string;
  availability?: 'InStock' | 'OutOfStock' | 'PreOrder';
  rating?: { value: number; count: number };
}, locale: Locale) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      '@type': 'Brand',
      name: product.brand || 'Diwave'
    },
    sku: product.sku,
    
    offers: product.price ? {
      '@type': 'Offer',
      url: SITE_URL,
      priceCurrency: product.currency || 'UAH',
      price: product.price,
      availability: `https://schema.org/${product.availability || 'InStock'}`,
      seller: {
        '@type': 'Organization',
        name: 'Diwave Solutions'
      }
    } : undefined,
    
    aggregateRating: product.rating ? {
      '@type': 'AggregateRating',
      ratingValue: product.rating.value,
      reviewCount: product.rating.count,
      bestRating: 5,
      worstRating: 1
    } : undefined
  };
};

// ==========================================
// SERVICE (для послуг типу IoT/SCADA, E-commerce)
// ==========================================
export const getServiceSchema = (service: {
  name: string;
  description: string;
  serviceType: string;
  areaServed?: string[];
  provider?: string;
}, locale: Locale) => {
  const isUk = locale === 'uk';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    serviceType: service.serviceType,
    
    provider: {
      '@type': 'Organization',
      name: service.provider || 'Diwave Solutions',
      '@id': `${SITE_URL}/#organization`
    },
    
    areaServed: (service.areaServed || ['Ukraine', 'EU']).map(area => ({
      '@type': 'Country',
      name: area
    })),
    
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      price: '0',
      priceCurrency: 'UAH',
      description: isUk ? 'Ціна за домовленістю' : 'Price upon request'
    }
  };
};

// ==========================================
// FAQ PAGE
// ==========================================
export const getFAQSchema = (
  faqs: Array<{ question: string; answer: string }>,
  locale: Locale
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
};

// ==========================================
// HOW-TO (для інструкцій)
// ==========================================
export const getHowToSchema = (howto: {
  name: string;
  description: string;
  totalTime?: string;
  steps: Array<{ name: string; text: string; image?: string }>;
}, locale: Locale) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howto.name,
    description: howto.description,
    totalTime: howto.totalTime || 'PT30M',
    
    step: howto.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image
    }))
  };
};

// ==========================================
// ARTICLE (для блогу/кейсів)
// ==========================================
export const getArticleSchema = (article: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  url: string;
}, locale: Locale) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    
    author: {
      '@type': 'Person',
      name: article.author || 'Dmytro Kravets',
      url: `${SITE_URL}/about`
    },
    
    publisher: {
      '@type': 'Organization',
      name: 'Diwave Solutions',
      logo: {
        '@type': 'ImageObject',
        url: LOGO_URL
      }
    },
    
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url
    }
  };
};

// ==========================================
// SOFTWARE APPLICATION (для SaaS продуктів)
// ==========================================
export const getSoftwareApplicationSchema = (app: {
  name: string;
  description: string;
  applicationCategory: string;
  operatingSystem?: string;
  price?: number;
  rating?: { value: number; count: number };
}, locale: Locale) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: app.name,
    description: app.description,
    applicationCategory: app.applicationCategory,
    operatingSystem: app.operatingSystem || 'Web Browser',
    
    offers: {
      '@type': 'Offer',
      price: app.price || '0',
      priceCurrency: 'UAH'
    },
    
    aggregateRating: app.rating ? {
      '@type': 'AggregateRating',
      ratingValue: app.rating.value,
      reviewCount: app.rating.count,
      bestRating: 5
    } : undefined,
    
    author: {
      '@type': 'Organization',
      name: 'Diwave Solutions'
    }
  };
};

// ==========================================
// REVIEW / TESTIMONIAL
// ==========================================
export const getReviewSchema = (review: {
  itemReviewed: string;
  reviewRating: number;
  author: string;
  reviewBody: string;
  datePublished: string;
}, locale: Locale) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Organization',
      name: review.itemReviewed
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.reviewRating,
      bestRating: 5,
      worstRating: 1
    },
    author: {
      '@type': 'Person',
      name: review.author
    },
    reviewBody: review.reviewBody,
    datePublished: review.datePublished
  };
};

// ==========================================
// EVENT (для вебінарів, конференцій)
// ==========================================
export const getEventSchema = (event: {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: { name: string; address?: string } | 'online';
  url: string;
  image?: string;
}, locale: Locale) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate || event.startDate,
    
    location: event.location === 'online' ? {
      '@type': 'VirtualLocation',
      url: event.url
    } : {
      '@type': 'Place',
      name: event.location.name,
      address: event.location.address
    },
    
    image: event.image || LOGO_URL,
    
    organizer: {
      '@type': 'Organization',
      name: 'Diwave Solutions',
      url: SITE_URL
    },
    
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: event.location === 'online' 
      ? 'https://schema.org/OnlineEventAttendanceMode'
      : 'https://schema.org/OfflineEventAttendanceMode'
  };
};

// ==========================================
// VIDEO OBJECT (для відео-контенту)
// ==========================================
export const getVideoSchema = (video: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string;
  contentUrl: string;
  embedUrl?: string;
}, locale: Locale) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.name,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl,
    uploadDate: video.uploadDate,
    duration: video.duration || 'PT1M',
    contentUrl: video.contentUrl,
    embedUrl: video.embedUrl,
    
    publisher: {
      '@type': 'Organization',
      name: 'Diwave Solutions',
      logo: {
        '@type': 'ImageObject',
        url: LOGO_URL
      }
    }
  };
};

// ==========================================
// COURSE (якщо є навчальні матеріали)
// ==========================================
export const getCourseSchema = (course: {
  name: string;
  description: string;
  provider: string;
  url: string;
}, locale: Locale) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.name,
    description: course.description,
    
    provider: {
      '@type': 'Organization',
      name: course.provider,
      url: SITE_URL
    },
    
    url: course.url
  };
};

// ==========================================
// HELPER: Комбінувати всі schemas для сторінки
// ==========================================
export const combineSchemas = (...schemas: any[]) => {
  return schemas.filter(Boolean);
};
