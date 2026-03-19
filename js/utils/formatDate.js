/**
 * EarnSure Currency Formatter
 * Standardizes financial displays across the entire platform.
 */

export const formatCurrency = (amount, currency = 'USD', locale = 'en-US') => {
    // 1. Handle edge cases (null, undefined, or strings)
    const value = typeof amount === 'number' ? amount : parseFloat(amount || 0);

    // 2. Use the Internationalization API
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(value);
};

/**
 * Example Usage:
 * formatCurrency(1250.5)  => "$1,250.50"
 * formatCurrency(5)       => "$5.00"
 */