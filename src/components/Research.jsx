import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity, faFlask, faChartLine, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const Research = () => {
  const [activeTab, setActiveTab] = useState('current');

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Research</h1>
        
        <div className="mb-8">
          <div className="flex border-b border-gray-200">
            <button
              className={`py-2 px-4 font-medium ${activeTab === 'current' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('current')}
            >
              <FontAwesomeIcon icon={faUniversity} className="mr-2" />
              Current Position
            </button>
            <button
              className={`py-2 px-4 font-medium ${activeTab === 'projects' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('projects')}
            >
              <FontAwesomeIcon icon={faFlask} className="mr-2" />
              Projects
            </button>
            <button
              className={`py-2 px-4 font-medium ${activeTab === 'conferences' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('conferences')}
            >
              <FontAwesomeIcon icon={faChartLine} className="mr-2" />
              Conferences
            </button>
            <button
              className={`py-2 px-4 font-medium ${activeTab === 'skills' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('skills')}
            >
              <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />
              Skills
            </button>
          </div>

          <div className="py-4">
            {activeTab === 'current' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Current Position</h2>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Assistant Professor in Physics</span> (since 18th July 2023)
                </p>
                <p className="text-gray-600">Mats University Raipur, Chhattisgarh, India</p>
              </div>
            )}

            {activeTab === 'projects' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Research Projects</h2>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-gray-800">INDO-SOUTH AFRICAN FLAGSHIP PROGRAM IN ASTRONOMY</h3>
                  <p className="text-gray-600 mb-2">2016-2018</p>
                  <p className="text-gray-700">Galaxy Evolution: simulations, observations and data analysis</p>
                </div>
              </div>
            )}

            {activeTab === 'conferences' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Conferences & Workshops</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800">Second Indo-French Astronomical School (IFAS2)</h3>
                    <p className="text-gray-600 mb-2">11 to 16 July, 2016 | Lyon, France</p>
                    <p className="text-gray-700">Galaxy Formation and Evolution - Models to interpret observations</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800">National Conference on Signal Processing, Sustainable Energy Materials And Astronomy & Astrophysics (NSSEMA) 2023</h3>
                    <p className="text-gray-600 mb-2">16 to 18 March, 2023</p>
                    <p className="text-gray-700">Presented a poster: Photometric Study of the nuclear region of the galaxy NGC 5689</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800">Workshop on Science and Technology in Astronomy Research (STAR 2022)</h3>
                    <p className="text-gray-600 mb-2">15-18 October, 2022</p>
                    <p className="text-gray-700">Delivered a talk on Galaxy Evolution and Formation</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'skills' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Technical Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Programming</h3>
                    <ul className="list-disc pl-5 text-gray-700">
                      <li>Python</li>
                      <li>LaTeX</li>
                      <li>Fortran</li>
                      <li>HTML</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Astronomy Software</h3>
                    <ul className="list-disc pl-5 text-gray-700">
                      <li>IRAF, PYRAF</li>
                      <li>TOPCAT</li>
                      <li>GNUPLOT</li>
                      <li>SEXTRACTOR</li>
                      <li>Tiny Tim</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Data Archives</h3>
                    <ul className="list-disc pl-5 text-gray-700">
                      <li>Sloan Digital Sky Survey (SDSS)</li>
                      <li>NASA/IPAC Extragalactic Database (NED)</li>
                      <li>HST Legacy Archive</li>
                      <li>Spitzer IPAC/IRSA</li>
                      <li>Mikulski Archive for Space Telescopes (MAST)</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Other Skills</h3>
                    <ul className="list-disc pl-5 text-gray-700">
                      <li>Academic research</li>
                      <li>Teaching and training</li>
                      <li>LaTeX typesetting</li>
                      <li>Science outreach</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;