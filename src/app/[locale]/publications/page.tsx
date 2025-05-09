'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function PublicationsPage() {
  const t = useTranslations('Publications');
  const [activeTab, setActiveTab] = useState('journal');
  
  const publications = {
    journal: [
      {
        id: 1,
        title: 'Journal Paper Title 1',
        authors: 'Your Name, Co-author A, Co-author B',
        journal: 'Journal of Science',
        year: 2023,
        doi: 'https://doi.org/10.1234/example',
        abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend velit vel nisi hendrerit, eget efficitur nisi feugiat. Praesent a semper libero. Nullam eu urna vel nulla facilisis consequat.'
      },
      {
        id: 2,
        title: 'Journal Paper Title 2',
        authors: 'Your Name, Co-author C',
        journal: 'Nature Communications',
        year: 2022,
        doi: 'https://doi.org/10.1234/example2',
        abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend velit vel nisi hendrerit, eget efficitur nisi feugiat. Praesent a semper libero. Nullam eu urna vel nulla facilisis consequat.'
      },
      {
        id: 3,
        title: 'Journal Paper Title 3',
        authors: 'Your Name, Co-author D, Co-author E',
        journal: 'Scientific Reports',
        year: 2021,
        doi: 'https://doi.org/10.1234/example3',
        abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend velit vel nisi hendrerit, eget efficitur nisi feugiat. Praesent a semper libero. Nullam eu urna vel nulla facilisis consequat.'
      }
    ],
    conference: [
      {
        id: 1,
        title: 'Conference Paper Title 1',
        authors: 'Your Name, Co-author F',
        conference: 'International Conference on Science and Technology',
        year: 2023,
        doi: 'https://doi.org/10.1234/example4',
        abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend velit vel nisi hendrerit, eget efficitur nisi feugiat. Praesent a semper libero.'
      },
      {
        id: 2,
        title: 'Conference Paper Title 2',
        authors: 'Your Name, Co-author G, Co-author H',
        conference: 'Annual Symposium on Advanced Research',
        year: 2022,
        doi: 'https://doi.org/10.1234/example5',
        abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend velit vel nisi hendrerit, eget efficitur nisi feugiat. Praesent a semper libero.'
      }
    ],
    book: [
      {
        id: 1,
        title: 'Book Chapter Title 1',
        authors: 'Your Name, Co-author I',
        book: 'Advances in Research',
        year: 2022,
        publisher: 'Academic Press',
        doi: 'https://doi.org/10.1234/example6',
        abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend velit vel nisi hendrerit, eget efficitur nisi feugiat.'
      }
    ],
    other: [
      {
        id: 1,
        title: 'Technical Report Title 1',
        authors: 'Your Name',
        publisher: 'University Research Center',
        year: 2023,
        url: 'https://example.com/report1',
        abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend velit vel nisi hendrerit.'
      }
    ]
  };
  
  const tabs = [
    { id: 'journal', label: t('journal') },
    { id: 'conference', label: t('conference') },
    { id: 'book', label: t('book') },
    { id: 'other', label: t('other') }
  ];
  
  const renderPublication = (pub: any) => {
    const commonClasses = "bg-white p-6 rounded-lg shadow-md mb-6 hover:shadow-lg transition-shadow";
    
    return (
      <div key={pub.id} className={commonClasses}>
        <h3 className="text-xl font-semibold mb-2 text-blue-600">{pub.title}</h3>
        <p className="text-gray-700 mb-2">{pub.authors}</p>
        
        {activeTab === 'journal' && (
          <p className="text-gray-600 italic mb-2">
            {pub.journal}, {pub.year}
          </p>
        )}
        
        {activeTab === 'conference' && (
          <p className="text-gray-600 italic mb-2">
            {pub.conference}, {pub.year}
          </p>
        )}
        
        {activeTab === 'book' && (
          <p className="text-gray-600 italic mb-2">
            {pub.book}, {pub.publisher}, {pub.year}
          </p>
        )}
        
        {activeTab === 'other' && (
          <p className="text-gray-600 italic mb-2">
            {pub.publisher}, {pub.year}
          </p>
        )}
        
        <div className="mb-4">
          <details className="cursor-pointer">
            <summary className="text-blue-700 font-medium hover:text-blue-800">Abstract</summary>
            <p className="mt-2 text-gray-600 pl-4 border-l-2 border-gray-200">{pub.abstract}</p>
          </details>
        </div>
        
        <div className="flex space-x-4">
          {pub.doi && (
            <a 
              href={pub.doi} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              DOI
            </a>
          )}
          
          {pub.url && (
            <a 
              href={pub.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              URL
            </a>
          )}
          
          <button className="text-green-600 hover:text-green-800 text-sm font-medium">
            BibTeX
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4">
      <section className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 border-b pb-2">{t('title')}</h1>
        
        {/* Publication Tabs */}
        <div className="mb-8 border-b">
          <div className="flex flex-wrap -mb-px">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-block py-4 px-6 text-sm font-medium ${
                  activeTab === tab.id 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Publications List */}
        <div className="mt-6">
          {publications[activeTab as keyof typeof publications].length > 0 ? (
            publications[activeTab as keyof typeof publications].map((pub: any) => renderPublication(pub))
          ) : (
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <p className="text-gray-600">No publications in this category yet.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
} 
