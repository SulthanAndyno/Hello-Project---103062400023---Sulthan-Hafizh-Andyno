// about.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import profileImage from '../assets/me.jpg';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animasi hanya sekali saat masuk viewport
    threshold: 0.1, // Berapa persen elemen harus terlihat
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="about" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>
      <motion.div
        className="about-content"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="about-columns">
          <motion.div className="image-wrapper" variants={itemVariants}>
            <motion.img 
              src={profileImage}
              alt="Profil Sulthan Andyno" 
              className="profile-image" 
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <motion.div className="text-content" variants={itemVariants}>
            <p>
              I’m an Information Technology student at Telkom University Jakarta, driven by curiosity and a love for creating interactive and meaningful digital experiences. My main focus is on front-end development, where I enjoy crafting interfaces that feel intuitive, responsive, and alive.
            </p>
            <p>
              My journey began with a fascination for how design and logic can blend seamlessly to build something both beautiful and functional. Since then, I’ve been continuously learning, experimenting, and refining my skills from building dynamic layouts to improving user experiences through thoughtful design.
            </p>
            <p>
              My goal is to grow into a developer who doesn’t just build products, but creates experiences — ones that connect people, simplify lives, and leave a lasting impression.
            </p>
            <motion.a 
              href="https://drive.google.com/file/d/1tet08SQAtft1fdndzfc6hDv9Yg5T2NLs/view?usp=sharing"
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              experience
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;