import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faChalkboard } from '@fortawesome/free-solid-svg-icons';

const Publications = () => {
  const [filter, setFilter] = useState('all');
  
  const publications = [
    {
      id: 1,
      type: 'journal',
      authors: 'Verma, M., Singh, A., and Chaware, L.',
      year: 2023,
      title: 'Photometric study of the nuclear region of the galaxy ngc 5689',
      journal: 'Journal of Physics: Conference Series',
      volume: '2576(1)',
      pages: '012014',
      doi: '10.1088/1742-6596/2576/1/012014',
      link: 'https://doi.org/10.1088/1742-6596/2576/1/012014'
    },
    {
      id: 2,
      type: 'under-review',
      authors: 'Verma, M., Chaware, L., Pandey, S.K.',
      year: 2023,
      title: 'The central region of classical bulges of So galaxies',
      journal: 'Under Review',
      manuscript: 'J.OAA-D-22-00279'
    }
  ];

  const presentations = [
    {
      id: 1,
      type: 'conference',
      authors: 'Verma, M.',
      year: 2023,
      title: 'Photometric study of the nuclear region of the galaxy NGC 5689',
      event: '2nd National Conference on Signal Processing, Sustainable Energy Materials And Astronomy & Astrophysics (NSSEMA) 2023',
      date: '16 to 18 March, 2023',
      format: 'Poster'
    },
    {
      id: 2,
      type: 'conference',
      authors: 'Verma, M.',
      year: 2017,
      title: 'Multiwavelength photometric study of a sample of radio-loud early-type galaxies',
      event: 'National Conference on Signal Processing, Sustainable Energy Material and Astronomy and Astrophysics, NSSEMA - 2017',
      format: 'Talk'
    }
  ];

  const filteredPublications = filter === 'all' 
    ? publications 
    : publications.filter(pub => pub.type === filter);

  const filteredPresentations = filter === 'all' 
    ? presentations 
    : presentations.filter(pres => pres.type === filter);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Publications</h1>
        
        <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${filter === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('journal')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${filter === 'journal' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            Journal Articles
          </button>
          <button
            onClick={() => setFilter('under-review')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${filter === 'under-review' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            Under Review
          </button>
          <button
            onClick={() => setFilter('conference')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${filter === 'conference' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            Conference Presentations
          </button>
        </div>

        {(filter === 'all' || filter === 'journal' || filter === 'under-review') && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2 flex items-center">
              <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
              {filter === 'journal' ? 'Journal Articles' : filter === 'under-review' ? 'Under Review' : 'Publications'}
            </h2>
            {filteredPublications.map((pub) => (
              <div key={pub.id} className="bg-gray-50 p-4 rounded-lg mb-4 hover:bg-gray-100 transition-colors">
                <p className="text-gray-700 mb-1">
                  <span className="font-semibold">{pub.authors}</span> ({pub.year}). 
                  <span className="italic"> "{pub.title}."</span>
                </p>
                {pub.journal !== 'Under Review' ? (
                  <>
                    <p className="text-gray-600 mb-1">
                      {pub.journal}, {pub.volume}, {pub.pages}.
                    </p>
                    {pub.doi && (
                      <a 
                        href={pub.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-800 text-sm inline-flex items-center"
                      >
                        DOI: {pub.doi}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </>
                ) : (
                  <p className="text-gray-600">
                    Manuscript No. {pub.manuscript}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {(filter === 'all' || filter === 'conference') && (
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2 flex items-center">
              <FontAwesomeIcon icon={faChalkboard} className="mr-2" />
              Conference Presentations
            </h2>
            {filteredPresentations.map((pres) => (
              <div key={pres.id} className="bg-gray-50 p-4 rounded-lg mb-4 hover:bg-gray-100 transition-colors">
                <p className="text-gray-700 mb-1">
                  <span className="font-semibold">{pres.authors}</span> ({pres.year}). 
                  <span className="italic"> "{pres.title}"</span>
                </p>
                <p className="text-gray-600 mb-1">
                  {pres.event}
                </p>
                <p className="text-gray-500 text-sm">
                  {pres.date && `${pres.date} • `}{pres.format}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Publications;