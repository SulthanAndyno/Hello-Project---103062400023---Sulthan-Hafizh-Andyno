import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-logo">Sulthan Andyno</div>
      <p className="quote">"Code. Create. Connect."</p>
      <div className="social-icons">
        <a href="https://linkedin.com/in/sulthanandyno" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/sulthanandyno" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://instagram.com/sulthan.andyno" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
      <p>&copy; {currentYear} Sulthan Andyno. All rights reserved.</p>
    </footer>
  );
};

export default Footer;