import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isNavVisible, setNavVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNavbar = () => {
    setNavVisible(prev => !prev);
  };

  const closeNavbar = () => {
    setNavVisible(false);
  };

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.toLowerCase() === path.toLowerCase();
  };

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="bars" onClick={toggleNavbar}>
        <i className="fa-solid fa-bars-staggered"></i>
      </div>

      <Link to="/" className="logo" onClick={closeNavbar}>
        <img src="/img/logo.png" alt="Rangrag Studio" />
      </Link>

      <nav className={isNavVisible ? 'show' : ''}>
        <Link 
          to="/" 
          onClick={closeNavbar}
          style={isActive('/') ? { color: '#2e7d32', fontWeight: 'bold' } : {}}
        >
          Home
        </Link>
        <Link 
          to="/projects" 
          onClick={closeNavbar}
          style={isActive('/projects') ? { color: '#2e7d32', fontWeight: 'bold' } : {}}
        >
          Projects
        </Link>
        <a 
          href="https://rangragstudio.myportfolio.com/" 
          rel="noopener noreferrer"
          onClick={closeNavbar}
        >
          Portfolio
        </a>
        <Link 
          to="/services" 
          onClick={closeNavbar}
          style={isActive('/services') ? { color: '#2e7d32', fontWeight: 'bold' } : {}}
        >
          Services
        </Link>
        <Link 
          to="/aboutUs" 
          onClick={closeNavbar}
          style={isActive('/aboutUs') ? { color: '#2e7d32', fontWeight: 'bold' } : {}}
        >
          About us
        </Link>
        <Link 
          to="/blog" 
          onClick={closeNavbar}
          style={isActive('/blog') ? { color: '#2e7d32', fontWeight: 'bold' } : {}}
        >
          Blog
        </Link>
        <Link 
          to="/contactUs" 
          onClick={closeNavbar}
          style={isActive('/contactUs') ? { color: '#2e7d32', fontWeight: 'bold' } : {}}
        >
          Contact us
        </Link>
      </nav>

      <div className="icon">
        <a href="https://www.instagram.com/rangrag_studio?igsh=MWljc3U0YnZvenlteQ==" target="_blank" rel="noopener noreferrer">
          <div className="insta"><i className="fa-brands fa-instagram"></i></div>
        </a>
        <a href="https://www.facebook.com/people/RangRag-Interior-Design-Studio/61561135798667/" target="_blank" rel="noopener noreferrer">
          <div className="insta"><i className="fa-brands fa-facebook-f"></i></div>
        </a>
        <a href="https://www.linkedin.com/company/rangrag-studio/" target="_blank" rel="noopener noreferrer">
          <div className="insta"><i className="fa-brands fa-linkedin-in"></i></div>
        </a>
        <a href="https://youtube.com/@rangraginterior?si=ysiDjGfY8xrtHrgY" target="_blank" rel="noopener noreferrer">
          <div className="insta"><i className="fa-brands fa-youtube"></i></div>
        </a>
      </div>
    </header>
  );
}
