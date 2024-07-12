// src/App.js
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Loader from './Loader';
import Footer from './Footer';
const Home = lazy(() => import('./Home'));
const Projects = lazy(() => import('./Projects'));
const Aboutme = lazy(() => import('./Aboutme'));
const Certificates = lazy(() => import('./Certificates'));
const Hobbies = lazy(() => import('./Hobbies') );
const Services = lazy(() => import('./Services') );
const Skills = lazy(() => import('./Skills') );
const Contact = lazy(() => import('./Contact') );

function App() {
  const [loading, setLoading] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    setShowNavbar(false); // Hide navbar when page loads
    const timer = setTimeout(() => {
      setLoading(false);
      setShowNavbar(true); // Show navbar after loading
    }, 800); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loader />}
      {showNavbar && <Navbar />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path='/hobbies' element={<Hobbies />} />
          <Route path="/services" element={<Services />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
