import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/frontendimages/assets';
import { FaWhatsapp, FaPhone } from "react-icons/fa"; // Importing FaWhatsapp and FaPhone icons

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content'>
        {/* Footer Left Section */}
        <div className='footer-left'>
          <h2 className='logo'><Link to='/'>Jeerayz Solar.</Link></h2>
          <p>
            Empowering a sustainable future with innovative solar panel installation solutions. We provide high-quality, cost-effective solar energy systems tailored to meet your energy needs. Join us in harnessing the power of the sun to build a greener tomorrow.
          </p>
          <div className='social-media-icons'>
             <a
    className='social-link'
    href='https://m.facebook.com/profile.php?id=61566502061796'
    target='_blank'
    rel='noopener noreferrer'
  >
    <img src={assets.facebook_icon} alt='Facebook Icon' />
  </a>

            <a
    className='social-link'
    href='https://twitter.com/YourProfile' // Add your correct Twitter profile link here
    target='_blank'
    rel='noopener noreferrer'
  >   <img src={assets.twitter_icon} alt='Twitter Icon' />
  </a>
          </div>
        </div>

        {/* Footer Center Section */}
        <div className='footer-center'>
          <h2>COMPANY</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link>Privacy</Link></li>
          </ul>
        </div>

        {/* Footer Right Section */}
        <div className='footer-right'>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li><a href="tel:9345576725">9345576725</a></li>
            <li>jeerayzsolar@gmail.com</li>
            <li>
              Jeerayz Solar<br />
              No 11, Pollachi Main Road,<br />
              Kappini Gounder Layout,<br />
              Othakkalmandabam,<br />
              641032
            </li>
          </ul>
        </div>
      </div>

      <hr />

      <p className='footer-copyright'>
        &copy; 2024 Jeerayz Solar.com - All Rights Reserved.
      </p>

      {/* Contact Icons and WhatsApp Button */}
      <div className="contact-icons">
        {/* Phone Icon */}
        <a href="tel:9345576725" className="contact-icon" aria-label="Call Us">
          <FaPhone className='phone-icon'/>
        </a>
      </div>

      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/917540036762" // WhatsApp number without plus sign
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="whatsapp-icon" />
      </a>
    </div>
  );
}

export default Footer;
