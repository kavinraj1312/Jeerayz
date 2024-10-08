import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/frontendimages/assets.js';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar'>
      <h2 className='logo'>
        <Link to='/' onClick={() => setMenu('home')}>
          <img src={assets.logo} alt="Jerayz Solar Logo" className="navbar-logo" />
          Jeerayz Solar.
        </Link>
      </h2>
      <div className='navbar-toggle' onClick={toggleMenu}>
        <span>&#9776;</span> {/* Hamburger icon */}
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}> {/* Toggle menu based on state */}
        <li className={menu === 'home' ? "active" : ""}>
          <Link to="/" onClick={() => { setMenu('home'); setIsMenuOpen(false); }}>Home</Link>
        </li>
        <li className={menu === 'areas' ? "active" : ""}>
          <Link to="/area" onClick={() => { setMenu('areas'); setIsMenuOpen(false); }}>Areas</Link>
        </li>
        <li className={menu === 'installations' ? "active" : ""}>
          <Link to="/installations" onClick={() => { setMenu('installations'); setIsMenuOpen(false); }}>Installations</Link>
        </li>
        <li className={menu === 'services' ? "active" : ""}>
          <Link to="/services" onClick={() => { setMenu('services'); setIsMenuOpen(false); }}>Services</Link>
        </li>
        <li className={menu === 'about' ? "active" : ""}>
          <Link to="/about" onClick={() => { setMenu('about'); setIsMenuOpen(false); }}>About</Link>
        </li>
        <li className={menu === 'adminlogin' ? "active" : ""}>
          <div className='navbar-right'>
            <Link to="/login" onClick={() => { setMenu('adminlogin'); setIsMenuOpen(false); }}>Admin Login</Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
