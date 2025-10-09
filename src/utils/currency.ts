/**
 * Currency conversion utilities
 * Base currency: EUR
 */

export interface CurrencyRates {
  EUR: number;
  UAH: number;
  USD: number;
  GBP: number;
}

// Approximate exchange rates (update periodically)
export const CURRENCY_RATES: CurrencyRates = {
  EUR: 1,
  UAH: 40, // 1 EUR ≈ 40 UAH
  USD: 1.08, // 1 EUR ≈ 1.08 USD
  GBP: 0.86, // 1 EUR ≈ 0.86 GBP
};

export const CURRENCY_SYMBOLS: Record<keyof CurrencyRates, string> = {
  EUR: '€',
  UAH: '₴',
  USD: '$',
  GBP: '£',
};

/**
 * Convert amount from EUR to target currency
 */
export function convertFromEUR(
  amountEUR: number,
  targetCurrency: keyof CurrencyRates
): number {
  return Math.round(amountEUR * CURRENCY_RATES[targetCurrency]);
}

/**
 * Format currency amount with symbol
 */
export function formatCurrency(
  amount: number,
  currency: keyof CurrencyRates,
  options?: {
    showSymbol?: boolean;
    showCurrency?: boolean;
    compact?: boolean;
  }
): string {
  const { showSymbol = true, showCurrency = false, compact = false } = options || {};

  let formatted = '';

  if (compact && amount >= 1000) {
    const thousands = Math.round(amount / 1000);
    formatted = `${thousands}K`;
  } else {
    formatted = amount.toLocaleString('en-US');
  }

  if (showSymbol) {
    formatted = `${CURRENCY_SYMBOLS[currency]}${formatted}`;
  }

  if (showCurrency) {
    formatted = `${formatted} ${currency}`;
  }

  return formatted;
}

/**
 * Get user's preferred currency based on locale
 */
export function getPreferredCurrency(locale?: string): keyof CurrencyRates {
  const userLocale = locale || navigator.language || 'en-US';

  if (userLocale.startsWith('uk') || userLocale.includes('UA')) {
    return 'UAH';
  }
  if (userLocale.startsWith('en-US') || userLocale.includes('US')) {
    return 'USD';
  }
  if (userLocale.startsWith('en-GB') || userLocale.includes('GB')) {
    return 'GBP';
  }

  return 'EUR'; // Default to EUR
}

/**
 * Format price with multiple currencies (e.g., "€100,000 (~4,000,000 грн)")
 */
export function formatPriceWithConversion(
  amountEUR: number,
  primaryCurrency: keyof CurrencyRates = 'EUR',
  secondaryCurrency?: keyof CurrencyRates,
  options?: {
    compact?: boolean;
  }
): string {
  const primary = convertFromEUR(amountEUR, primaryCurrency);
  let result = formatCurrency(primary, primaryCurrency, { compact: options?.compact });

  if (secondaryCurrency && secondaryCurrency !== primaryCurrency) {
    const secondary = convertFromEUR(amountEUR, secondaryCurrency);
    const secondaryFormatted = formatCurrency(secondary, secondaryCurrency, { compact: options?.compact });
    result += ` (~${secondaryFormatted})`;
  }

  return result;
}
