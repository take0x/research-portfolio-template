'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Home() {
  const t = useTranslations('Home');
  const researchT = useTranslations('Research');
  const publicationsT = useTranslations('Publications');
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1];

  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="py-12 md:py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">
            <span className="block text-gray-600">{t('greeting')}</span>
            <span className="text-blue-600">Your Name</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-6">{t('profession')}</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">{t('introduction')}</p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href={`/${currentLocale}/research`}
              className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors text-center"
            >
              {t('researchButton')}
            </Link>
            <Link 
              href={`/${currentLocale}/contact`}
              className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors text-center"
            >
              {t('contactButton')}
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
            {/* Placeholder for profile image */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <span className="text-white text-6xl font-bold">YN</span>
            </div>
          </div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="py-12 bg-white rounded-lg shadow-md mb-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{researchT('title')}</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-blue-600 mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{researchT(`interest${i}`)}</h3>
              <p className="text-gray-600">{researchT(`interest${i}Description`)}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            href={`/${currentLocale}/research`}
            className="inline-block border-2 border-gray-800 text-gray-800 px-6 py-2 rounded-md font-medium hover:bg-gray-800 hover:text-white transition-colors"
          >
            {t('researchButton')}
          </Link>
        </div>
      </section>
      
      {/* Latest Publications Teaser */}
      <section className="py-12 bg-gray-50 rounded-lg shadow-md">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            <span className="border-b-4 border-blue-600 pb-2">
              {publicationsT('title')}
            </span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[1, 2].map((i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2 text-blue-600">Example Publication Title {i}</h3>
              <p className="text-sm text-gray-500 mb-3">Journal Name (2024)</p>
              <p className="text-gray-600 mb-4 line-clamp-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend velit vel nisi hendrerit, eget efficitur nisi feugiat.
              </p>
              <Link 
                href={`/${currentLocale}/publications`}
                className="text-blue-600 hover:text-blue-800 font-medium text-sm"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            href={`/${currentLocale}/publications`}
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            {publicationsT('title')} →
          </Link>
        </div>
      </section>
    </div>
  );
} 
