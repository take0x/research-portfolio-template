import { notFound } from 'next/navigation';
import ClientLayout from './client-layout';
import { locales } from '@/config/locales';

// This is a server component
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Use function parameters directly
  const { locale } = await params;
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    return null; // notFound() can cause issues with static export
  }

  // Synchronously load messages for static export
  let messages;
  try {
    // Use require instead of import for static compatibility
    messages = require(`../../../messages/${locale}.json`);
  } catch (error) {
    return null;
  }

  return (
    <ClientLayout locale={locale} messages={messages}>
      {children}
    </ClientLayout>
  );
}

// Generate static pages for each locale
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
} 
