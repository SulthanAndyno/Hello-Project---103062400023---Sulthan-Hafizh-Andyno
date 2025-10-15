// about.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
              src="https://via.placeholder.com/250/D84040/EEEEEE?text=Your+Photo" 
              alt="Profil Sulthan Andyno" 
              className="profile-image" 
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <motion.div className="text-content" variants={itemVariants}>
            <p>
              I’m an <span className="highlight">IT student</span> who loves exploring the bridge between logic and creativity. Currently delving deep into web development, especially with <span className="highlight">React.js</span>, to build user-centric and performant applications.
            </p>
            <p>
              My journey started at <span className="highlight">Universitas Telkom</span>, pursuing a Bachelor's degree in Informatics. I thrive on solving complex problems, learning new technologies, and contributing to open-source projects. My philosophy is to craft digital experiences with both precision and passion.
            </p>
            <p>
              When I'm not coding, you can find me exploring new design patterns, reading tech blogs, or trying out new programming challenges.
            </p>
            <motion.a 
              href="/path/to/your-cv.pdf" // Ganti dengan path CV kamu
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
