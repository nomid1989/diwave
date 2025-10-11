# Content Management Structure

## 📁 Architecture

This directory contains all **static content** and **translations** for the website, organized in a scalable, type-safe manner.

```
src/lib/content/
├── README.md           # This file - documentation
├── home.ts             # Homepage content & translations
├── solutions.ts        # Solutions catalog content
├── projects.ts         # Projects catalog content
├── industries.ts       # Industries catalog content
└── [future-page].ts    # Add new pages here
```

## 🌍 Multi-Language Support

### Current Languages
- **Ukrainian (uk)** - Default
- **English (en)**

### Adding New Languages

To add a new language (e.g., French, Italian, Greek):

#### 1. Update the Locale type in each content file

```typescript
// Before
export type Locale = 'uk' | 'en';

// After
export type Locale = 'uk' | 'en' | 'fr' | 'it' | 'el';
```

#### 2. Add translation in the content object

```typescript
export const getHomeContent = (locale: Locale): HomeContent => {
  const content: Record<Locale, HomeContent> = {
    uk: { /* Ukrainian content */ },
    en: { /* English content */ },
    fr: { /* French content */ },  // NEW
    it: { /* Italian content */ },  // NEW
    el: { /* Greek content */ }     // NEW
  };

  return content[locale];
};
```

#### 3. Update routing (if needed)

Add new route in `src/router.tsx`:
```typescript
{ path: '/fr', element: <Home locale="fr" /> }
{ path: '/it', element: <Home locale="it" /> }
{ path: '/el', element: <Home locale="el" /> }
```

## 📝 Content File Structure

Each content file follows this pattern:

### 1. Type Definitions

```typescript
export type Locale = 'uk' | 'en';

export type PageContent = {
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  sections: {
    // Section-specific types
  };
};
```

### 2. Content Getter Function

```typescript
export const getPageContent = (locale: Locale): PageContent => {
  const content: Record<Locale, PageContent> = {
    uk: { /* Ukrainian */ },
    en: { /* English */ }
  };

  return content[locale];
};
```

### 3. Helper Functions (optional)

```typescript
// For inline translations
export const t = (locale: Locale, uk: string, en: string): string => {
  return locale === 'uk' ? uk : en;
};
```

## 🎯 Usage Examples

### In Page Components

```typescript
import { getHomeContent } from '@/lib/content/home';

const Home: React.FC<{ locale: 'uk' | 'en' }> = ({ locale }) => {
  const content = getHomeContent(locale);

  return (
    <>
      <SEO
        title={content.seo.title}
        description={content.seo.description}
        keywords={content.seo.keywords}
      />
      <h1>{content.hero.title}</h1>
      <p>{content.hero.subtitle}</p>
    </>
  );
};
```

### For Inline Translations

```typescript
import { t } from '@/lib/content/home';

const image = {
  alt: t(locale, 'Автомийка', 'Car wash'),
  title: t(locale, 'Наше рішення', 'Our solution')
};
```

## ✅ Benefits of This Structure

### 1. **Type Safety**
- Full TypeScript support
- Compile-time errors if translations are missing
- Auto-completion in IDE

### 2. **Scalability**
- Easy to add new languages
- Easy to add new pages
- Consistent structure across all content

### 3. **Maintainability**
- All content in one place
- No hardcoded strings in components
- Easy to review and update translations

### 4. **SEO Optimization**
- Each page has dedicated SEO fields
- Keywords, descriptions properly translated
- Schema.org data can use same content

### 5. **DRY Principle**
- No duplication of content
- Reusable content objects
- Single source of truth

## 📋 Content Checklist

When creating a new content file:

- [ ] Define `Locale` type
- [ ] Create comprehensive type definitions for all content
- [ ] Add SEO fields (title, description, keywords)
- [ ] Implement `getContent()` function with all locales
- [ ] Add helper functions if needed
- [ ] Export all necessary types and functions
- [ ] Update this README with the new file

## 🔍 Example: Adding a New Page

### Step 1: Create content file

```typescript
// src/lib/content/pricing.ts
export type Locale = 'uk' | 'en';

export type PricingContent = {
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  plans: {
    name: string;
    price: string;
    features: string[];
  }[];
};

export const getPricingContent = (locale: Locale): PricingContent => {
  const content: Record<Locale, PricingContent> = {
    uk: {
      seo: {
        title: 'Diwave — Тарифи та Ціни',
        description: 'Прозорі ціни на наші послуги',
        keywords: 'diwave ціни, тарифи, вартість'
      },
      hero: {
        title: 'Наші тарифи',
        subtitle: 'Виберіть план для вашого бізнесу'
      },
      plans: [
        {
          name: 'Стартовий',
          price: 'від $500',
          features: ['Feature 1', 'Feature 2']
        }
      ]
    },
    en: {
      seo: {
        title: 'Diwave — Pricing & Plans',
        description: 'Transparent pricing for our services',
        keywords: 'diwave pricing, plans, cost'
      },
      hero: {
        title: 'Our Pricing',
        subtitle: 'Choose a plan for your business'
      },
      plans: [
        {
          name: 'Starter',
          price: 'from $500',
          features: ['Feature 1', 'Feature 2']
        }
      ]
    }
  };

  return content[locale];
};
```

### Step 2: Use in component

```typescript
import { getPricingContent } from '@/lib/content/pricing';

const Pricing: React.FC<{ locale: 'uk' | 'en' }> = ({ locale }) => {
  const content = getPricingContent(locale);

  return (
    <>
      <SEO {...content.seo} />
      <h1>{content.hero.title}</h1>
      {content.plans.map(plan => (
        <div key={plan.name}>
          <h2>{plan.name}</h2>
          <p>{plan.price}</p>
        </div>
      ))}
    </>
  );
};
```

## 🚀 Future Enhancements

### Planned Features
- [ ] JSON/YAML export for translation services
- [ ] CLI tool for managing translations
- [ ] Translation coverage reports
- [ ] Auto-detection of missing translations
- [ ] Integration with translation management platforms

### Potential Improvements
- Content validation schemas (Zod)
- Translation fallback mechanism
- Dynamic locale loading (code splitting)
- RTL support for Arabic/Hebrew

## 📞 Questions?

Contact: dmytro@diwave.company

---

**Last Updated**: 2025-01-12
**Maintained by**: Diwave Team
