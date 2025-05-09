'use client';

import { useTranslations } from 'next-intl';

export default function ResearchPage() {
  const t = useTranslations('Research');
  
  const researchAreas = [1, 2, 3].map((i) => ({
    id: i,
    title: t(`interest${i}`),
    description: t(`interest${i}Description`),
  }));

  return (
    <div className="container mx-auto px-4">
      <section className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 border-b pb-2">{t('title')}</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto.
          </p>
          
          <p className="text-lg text-gray-600 mb-8">
            Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!
          </p>
        </div>
      </section>
      
      {/* Research Areas */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">
          <span className="border-b-4 border-blue-600 pb-2">{t('title')}</span>
        </h2>
        
        <div className="grid gap-12">
          {researchAreas.map((area) => (
            <div key={area.id} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="bg-blue-50 text-blue-700 p-4 rounded-lg inline-block">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mt-4 text-gray-800">{area.title}</h3>
                </div>
                <div className="md:w-3/4 md:pl-8">
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">Keyword 1</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">Keyword 2</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">Keyword 3</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Current Projects */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">Current Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((project) => (
            <div key={project} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Project Title {project}</h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend velit vel nisi hendrerit, eget efficitur nisi feugiat.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Status: Active</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">2022-Present</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Collaborations */}
      <section className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Research Collaborations</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((collab) => (
            <div key={collab} className="bg-white p-4 rounded-lg shadow-sm flex items-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                <span className="text-gray-600 font-bold">U{collab}</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">University {collab}</h3>
                <p className="text-sm text-gray-600">Department Name</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 
