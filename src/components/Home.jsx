import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faResearchgate } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto animate-fadeIn">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-indigo-700 shadow-lg transition-transform hover:scale-105">
          <img 
            src="https://res.cloudinary.com/dn4trwbmw/image/upload/v1748848852/wq1lhvlmoja1qh9bzojh.png" 
            alt="Dr. Mahendra Kumar Verma" 
            className="w-full h-full object-cover"
                  />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Dr. Mahendra Kumar Verma</h1>
          <h2 className="text-xl text-indigo-700 mb-4">Assistant Professor in Physics</h2>
          <p className="text-gray-600 mb-4">
            Mats University Raipur, Chhattisgarh, India
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="mailto:mahendverma@gmail.com" 
              className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Email
            </a>
            <a 
              href="https://www.linkedin.com/in/mahendra-verma-52b02167" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
              LinkedIn
            </a>
            <a 
              href="https://www.researchgate.net/profile/Mahendra-Verma-11" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              <FontAwesomeIcon icon={faResearchgate} className="mr-2" />
              ResearchGate
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8 transition-shadow hover:shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">About Me</h2>
        <p className="text-gray-700 mb-4">
          I am an Assistant Professor in Physics at Mats University Raipur with a Ph.D. in Physics from Pt. Ravishankar Shukla University. My research focuses on observational astronomy, galactic bulges, and the structure and evolution of lenticular galaxies.
        </p>
        <p className="text-gray-700">
          My expertise includes astronomical archival data analysis, surface photometry of galaxies, and multi-wavelength studies of galactic central regions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-1">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">Research Interests</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Observational Astronomy</li>
            <li>Galaxy Formation and Evolution</li>
            <li>Lenticular Galaxies</li>
            <li>Galactic Bulges (Pseudo and Classical)</li>
            <li>Multi-Wavelength Study of Galaxies</li>
            <li>Surface Photometry of Galaxies</li>
            <li>Structure and Evolution of Galaxies</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-1">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800">Ph.D. in Physics</h3>
              <p className="text-gray-600">Pt. Ravishankar Shukla University (2014-2022)</p>
              <p className="text-sm text-gray-500">Thesis: A Study of Central Regions of Lenticular (So) Galaxies</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">M.Sc. Physics</h3>
              <p className="text-gray-600">PRSU Raipur (2008-2009)</p>
              <p className="text-sm text-gray-500">Project: Study of Light Curve of V711 Tau Binary Star</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">B.Sc. Computer Science</h3>
              <p className="text-gray-600">Kalyan College, PRSU Raipur (2005-2007)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;