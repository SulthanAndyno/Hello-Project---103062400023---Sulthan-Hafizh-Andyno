// Hero.js
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Animasi anak-anak dengan penundaan
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="hero" className="hero">
      <motion.div
        className="content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants}>Hi, I’m <span className="highlight">Sulthan Andyno</span> 👋</motion.h1>
        <motion.p variants={itemVariants}>
          Frontend Developer | Information Technology Student <br />
          Crafting digital experiences with logic & passion
        </motion.p>
        <motion.div 
          className="cta-buttons"
          variants={itemVariants}
        >
          <motion.a 
            href="#projects" 
            className="btn"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(216, 64, 64, 0.7)" }}
            whileTap={{ scale: 0.95 }}
          >
            View My Projects
          </motion.a>
          <motion.a 
            href="#contact" 
            className="btn"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(216, 64, 64, 0.7)" }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;