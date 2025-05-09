'use client';

import { Providers } from './providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ClientLayout({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode;
  locale: string;
  messages: Record<string, any>;
}) {
  return (
    <Providers locale={locale} messages={messages}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-gray-50 py-8">
          {children}
        </main>
        <Footer />
      </div>
    </Providers>
  );
} 
