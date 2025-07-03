import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css'
import Navbar from '@/components/Navbar/Navbar'

import Home from 'src/pages/Home/Home.tsx'
import About from 'src/pages/About/About.tsx'
import Gelato from 'src/pages/Gelato/Gelato.tsx'
import Contact from 'src/pages/Contact/Contact.tsx'
import Wholesale from 'src/pages/Wholesale/Wholesale.tsx'

export default function App() {
  const [isMobileView, setIsMobileView] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    // Check on initial load
    checkMobile();

    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []); // Runs once on mount

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
    // Toggle body overflow to prevent scrolling when menu is open
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };


  return (
    <div>
    <Router>
      <Navbar
        isMobileView={isMobileView}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}/>
      <div className={`${styles.app} ${isMenuOpen ? styles.hideContent : ''}`}>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/about" element={ <About />} />
          <Route path="/wholesale" element={ <Wholesale />} />
          <Route path="/gelato" element={ <Gelato />} />
          <Route path="/contact" element={ <Contact />} />
        </Routes>
      </div>
    </Router>
    </div>
  )
}
