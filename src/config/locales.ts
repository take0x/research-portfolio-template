// Supported locales
export const locales = ['en', 'ja'] as const;
export type Locale = (typeof locales)[number]; 
