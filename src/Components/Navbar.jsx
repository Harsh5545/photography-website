// Navbar.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import CancelIcon from '@mui/icons-material/Cancel';
import logoImage from '../images/logo4.png';
import MenuIcon from '@mui/icons-material/Menu';

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
  const [toggle, setToggle] = useState(false);
  const toggleNavbar = () => {
    setToggle(!toggle);
  };
  return (
    <div className={navbarClasses}>
      <div className='navContainer'>
        <Link to="/" onClick={scrollToTop}  >
        <img src={logoImage} alt="Logo" className="logo" />
        </Link>
        
        <div className="navItem">
        <nav className={toggle ? "nav-links toggleNavbar" : "nav-links d-flex"}>
          <Link to="/" onClick={scrollToTop} >Home</Link>
          <Link to="/about" >AboutUs</Link>
          <Link to="/portfolio" >Portfolio</Link>
          <Link to="/services" >Services</Link>
          <button className="button" onClick={()=>navigate("/contact")}>
            ContactUs
          </button>
          <button className="btn-close" onClick={toggleNavbar}>
            <CancelIcon/>
          </button>
        </nav>
        <div>
          <button className="btn-menu" onClick={toggleNavbar}>
            <span class="material-symbols-outlined"><MenuIcon/></span>
          </button>
        </div>
        </div>
        </div>
    </div>
  );
}

export default Navbar;
