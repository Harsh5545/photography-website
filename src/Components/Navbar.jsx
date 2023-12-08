// Navbar.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoImage from '../images/logo4.png';

function Navbar() {
  const [scrolled, setScrolled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50; // Change the scroll threshold as needed
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navbarClasses = `navbar ${scrolled ? 'scrolled' : ''}`;

  return (
    <div className={navbarClasses}>
      <div className='navContainer'>
        <img src={logoImage} alt="Logo" className="logo" />
        <div className="navItem">
          <Link to="/">Home</Link>
          <Link to="/about">AboutUs</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/services">Services</Link>
          <button className="button">
            <span href='/contact'>ContactUs</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
