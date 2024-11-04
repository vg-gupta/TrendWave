import React from 'react';
import './Footer.css';
import footer_logo from '../components/assets/logo.png';
import instagram_icon from '../components/assets/Assets/Frontend_Assets/instagram_icon.png';
import pinterest_icon from '../components/assets/Assets/Frontend_Assets/pintester_icon.png';
import whatsapp_icon from '../components/assets/Assets/Frontend_Assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt='Footer Logo'/>
        <p>TrendWave</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <a href="https://www.instagram.com" className="footer-icon-link">
          <img src={instagram_icon} alt='Instagram Icon'/>
        </a>
        <a href="https://www.pinterest.com" className="footer-icon-link">
          <img src={pinterest_icon} alt='Pinterest Icon'/>
        </a>
        <a href="https://www.whatsapp.com" className="footer-icon-link">
          <img src={whatsapp_icon} alt='WhatsApp Icon'/>
        </a>
      </div>
      <div className="footer-copyrights">
        <hr/>
        <p>Copyright @2024 - All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
