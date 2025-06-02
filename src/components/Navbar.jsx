import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-indigo-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold hover:text-indigo-200 transition">
          Dr. Mahendra Kumar Verma
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-indigo-200 transition">Home</Link>
          <Link to="/research" className="hover:text-indigo-200 transition">Research</Link>
          <Link to="/publications" className="hover:text-indigo-200 transition">Publications</Link>
          <Link to="/teaching" className="hover:text-indigo-200 transition">Teaching</Link>
          <Link to="/contact" className="hover:text-indigo-200 transition">Contact</Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-indigo-800 px-4 pb-4">
          <div className="flex flex-col space-y-3">
            <Link to="/" className="hover:text-indigo-200 transition" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/research" className="hover:text-indigo-200 transition" onClick={() => setIsOpen(false)}>Research</Link>
            <Link to="/publications" className="hover:text-indigo-200 transition" onClick={() => setIsOpen(false)}>Publications</Link>
            <Link to="/teaching" className="hover:text-indigo-200 transition" onClick={() => setIsOpen(false)}>Teaching</Link>
            <Link to="/contact" className="hover:text-indigo-200 transition" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;