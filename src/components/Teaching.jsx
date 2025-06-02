import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faUserTie, faStar, faUsers } from '@fortawesome/free-solid-svg-icons';

const Teaching = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Teaching Experience</h1>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2 flex items-center">
            <FontAwesomeIcon icon={faUserTie} className="mr-2" />
            Current Position
          </h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800">Assistant Professor in Physics</h3>
            <p className="text-gray-600 mb-2">Mats University Raipur, C.G., India</p>
            <p className="text-gray-500">Since 18th July 2023</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2 flex items-center">
            <FontAwesomeIcon icon={faChalkboardTeacher} className="mr-2" />
            Teaching Timeline
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 h-full w-0.5 bg-indigo-200"></div>
            
            {/* Timeline items */}
            <div className="space-y-8 pl-10">
              <div className="relative">
                <div className="absolute -left-10 w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                  <FontAwesomeIcon icon={faChalkboardTeacher} />
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800">Guest Assistant Professor in Physics</h3>
                  <p className="text-gray-600 mb-2">Center for Basic Sciences, Pt. Ravishankar Shukla University, Raipur</p>
                  <p className="text-gray-500">September 2017 – April 2018</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-10 w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                  <FontAwesomeIcon icon={faChalkboardTeacher} />
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800">Guest Assistant Professor in Physics</h3>
                  <p className="text-gray-600 mb-2">SoS Physics and Astrophysics, Pt. Ravishankar Shukla University, Raipur</p>
                  <p className="text-gray-500">September 2016 – April 2017</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-10 w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                  <FontAwesomeIcon icon={faChalkboardTeacher} />
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800">Guest Assistant Professor in Physics</h3>
                  <p className="text-gray-600 mb-2">SoS Physics and Astrophysics, Pt. Ravishankar Shukla University, Raipur</p>
                  <p className="text-gray-500">August 2015 – April 2016</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2 flex items-center">
            <FontAwesomeIcon icon={faStar} className="mr-2" />
            Invited Talks
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800">Workshop on Science and Technology in Astronomy Research (STAR 2022)</h3>
              <p className="text-gray-600 mb-2">15-18 October, 2022</p>
              <p className="text-gray-700">Topic: Galaxy Evolution and Formation</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800">Five Day National Workshop on LaTeX</h3>
              <p className="text-gray-600 mb-2">20-24 March, 2023</p>
              <p className="text-gray-700">Resource person at Center for Basic Sciences, Pt. Ravishankar Shukla University</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2 flex items-center">
            <FontAwesomeIcon icon={faUsers} className="mr-2" />
            Science Outreach
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                Organized sky gazing programs and science popularization activities at School of Studies in Physics and Astrophysics, Pt. Ravishankar Shukla University and various schools in Chhattisgarh.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                Conducted celestial observations with small telescopes for students of Inspire camp hosted by Pt. RSU Raipur, using balloon planetarium to illustrate solar system concepts.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800">Sky Gazing Program at JNV Mana (Raipur)</h3>
              <p className="text-gray-600">March 2017</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800">Three-day Sky Gazing Program at Narayanpur</h3>
              <p className="text-gray-600">July 2018</p>
              <p className="text-gray-700">Organized by Science Centre Raipur and Government of Chhattisgarh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teaching;