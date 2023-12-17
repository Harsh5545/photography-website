// Navbar.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logoImage from '../images/logo4.png';

function Navbar() {
  const [scrolled, setScrolled] = useState(true);
  const navigate=useNavigate()
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
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

  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className={navbarClasses}>
      <div className='navContainer'>
        <Link to="/" onClick={scrollToTop}  >
        <img src={logoImage} alt="Logo" className="logo" />
        </Link>
        <div className="navItem">
          <Link to="/" onClick={scrollToTop} >Home</Link>
          <Link to="/about" >AboutUs</Link>
          <Link to="/portfolio" >Portfolio</Link>
          <Link to="/services" >Services</Link>
          <button className="button" onClick={()=>navigate("/contact")}>
            ContactUs
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
