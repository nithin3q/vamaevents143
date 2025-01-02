import React, { useState, useEffect } from 'react';
import '../styles/NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import { NavHashLink } from "react-router-hash-link";
import logo from '../assets/images/logo-nav.png';

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${isScrolled ? 'bg-light scrolled' : 'bg-transparent'} py-2 fixed-top`}>
      <div className="container-fluid container-lg">
        <div className="logo">
          <a className="navbar-brand fw-bold" href="#">
            <img className="img-fluid logo-image" width="220" height="20" src={logo} alt="cine special effects" />
          </a>
        </div>
        <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-lg-auto">
            {[
              { to: 'home', icon: faHome, text: 'Home' },
              { to: 'services', icon: faWandMagicSparkles, text: 'Services' },
              { to: 'aboutus', icon: faInfoCircle, text: 'About Us' },
              { to: 'contact', icon: faEnvelope, text: 'Contact Us' }
            ].map(({ to, icon, text }) => (
              <li className="nav-item" key={to}>
                <NavHashLink 
                  className={`nav-link ${activeLink === to ? 'active' : ''}`}
                  smooth 
                  to={`#${to}`}
                  onClick={() => setActiveLink(to)}
                >
                  <FontAwesomeIcon icon={icon} className='nav-icons me-2' />
                  {text}
                </NavHashLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
