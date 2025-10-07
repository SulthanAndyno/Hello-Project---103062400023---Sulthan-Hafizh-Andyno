import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Untuk Formspree, ganti action URL ini dengan URL Formspree kamu
    // https://formspree.io/f/{your-form-id}
    alert('Pesan terkirim! (Ini hanya simulasi. Gunakan Formspree/EmailJS untuk fungsi nyata)');
    console.log('Form data submitted:', formData);
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

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
    <section id="contact" className="contact" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>
      <motion.div
        className="contact-content"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.p variants={itemVariants}>Let’s collaborate or just say hi 👋</motion.p>
        
        <motion.form 
          className="contact-form" 
          onSubmit={handleSubmit}
          action="https://formspree.io/f/YOUR_FORMSPREE_ID" // GANTI DENGAN ID FORMSPREE KAMU!
          method="POST"
          variants={itemVariants}
        >
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          ></textarea>
          <motion.button 
            type="submit" 
            className="btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        <motion.div className="social-links" variants={itemVariants}>
          <a href="mailto:sulthan.andyno@example.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope /> Email
          </a>
          <a href="https://linkedin.com/in/sulthanandyno" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/sulthanandyno" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="https://instagram.com/sulthan.andyno" target="_blank" rel="noopener noreferrer">
            <FaInstagram /> Instagram
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;