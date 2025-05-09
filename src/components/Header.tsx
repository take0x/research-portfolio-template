'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { locales } from '@/config/locales';

export default function Header() {
  const t = useTranslations('Navigation');
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Determine current locale and create path for language switcher
  const currentLocale = pathname.split('/')[1];
  const isValidLocale = locales.includes(currentLocale as any);
  
  // If the current locale is not valid, default to English
  const effectiveLocale = isValidLocale ? currentLocale : 'en';
  
  // Determine which locale to switch to
  const switchLocale = effectiveLocale === 'en' ? 'ja' : 'en';
  
  // Create new path with switched locale
  const newPath = isValidLocale 
    ? pathname.replace(`/${currentLocale}`, `/${switchLocale}`)
    : `/${switchLocale}`;
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { text: t('home'), href: `/${effectiveLocale}` },
    { text: t('research'), href: `/${effectiveLocale}/research` },
    { text: t('publications'), href: `/${effectiveLocale}/publications` },
    { text: t('contact'), href: `/${effectiveLocale}/contact` },
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href={`/${effectiveLocale}`} className="text-xl font-bold text-gray-800">
          Research Portfolio
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {menuItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {item.text}
            </Link>
          ))}
          
          {/* Language switcher */}
          <Link 
            href={newPath}
            className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50"
          >
            {effectiveLocale === 'en' ? '日本語' : 'English'}
          </Link>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-2 bg-white border-t">
          <nav className="flex flex-col space-y-3">
            {menuItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.text}
              </Link>
            ))}
            
            {/* Language switcher */}
            <Link 
              href={newPath}
              className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 w-fit"
              onClick={() => setIsMenuOpen(false)}
            >
              {effectiveLocale === 'en' ? '日本語' : 'English'}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
} 
