'use client';

import { NextIntlClientProvider } from 'next-intl';

export function Providers({
  locale,
  children,
  messages
}: {
  locale: string;
  children: React.ReactNode;
  messages: Record<string, any>;
}) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="UTC">
      {children}
    </NextIntlClientProvider>
  );
} 
