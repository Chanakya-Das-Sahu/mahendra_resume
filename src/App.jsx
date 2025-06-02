// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Research from './components/Research';
import Publications from './components/Publications';
import Teaching from './components/Teaching';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// OwnershipBadge component
const OwnershipBadge = () => (
  <div
    style={{
      position: "fixed",
      right: "-12px",
      bottom: "3px",
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      background: "rgba(255,255,255,0.95)",
      borderRadius: "2rem",
      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      padding: "0.5rem 1rem"
    }}
  >
    <img
      src="https://res.cloudinary.com/dn4trwbmw/image/upload/v1745310402/ivg4tam9i3rfxz4skr01.jpg"
      alt="Owner"
      style={{
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        objectFit: "cover",
        marginRight: "0.75rem",
        border: "2px solid #222"
      }}
    />
    <a
      href="https://chanakya-das-sahu.netlify.app"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: "#222",
        fontWeight: "bold",
        textDecoration: "none",
        fontSize: "1rem"
      }}
      title="Visit my portfolio"
    >
      Chanakya Das Sahu
      {/* <span style={{ marginLeft: "0.5rem", fontSize: "1.2rem" }} role="img" aria-label="ownership">👑</span> */}
    </a>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/teaching" element={<Teaching />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <OwnershipBadge />
      </div>
    </Router>
  );
}

export default App;