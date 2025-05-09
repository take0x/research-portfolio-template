import { getRequestConfig } from 'next-intl/server';
import { locales } from '@/config/locales';
import { notFound } from 'next/navigation';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the locale is supported
  if (!locales.includes(locale as any)) {
    notFound();
  }

  return {
    locale: locale as string,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
}); 
