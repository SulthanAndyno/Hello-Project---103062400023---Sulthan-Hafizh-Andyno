import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const mobileNavVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <>
      <motion.nav 
        className="navbar"
        initial="hidden"
        animate="visible"
        variants={menuVariants}
      >
        <a href="#hero" className="logo">Sulthan Andyno</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          {/* <li><a href="#experience">Experience</a></li> */}
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <FaBars />
        </div>
      </motion.nav>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <motion.div
          className="mobile-nav-overlay"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={mobileNavVariants}
        >
          <div className="close-btn" onClick={toggleMenu}>
            <FaTimes />
          </div>
          <ul className="nav-links">
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            {/* <li><a href="#experience" onClick={toggleMenu}>Experience</a></li> */}
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;