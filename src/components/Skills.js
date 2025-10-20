import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Import ikon Font Awesome yang digunakan
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaFigma, FaVuejs
} from 'react-icons/fa';

// Import ikon Devicons yang digunakan
import {
  DiVisualstudio
} from 'react-icons/di';

// Import ikon Simple Icons (for Tailwind) yang digunakan
import { SiTailwindcss } from 'react-icons/si';


const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      name: 'Core Web Stack',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 /> },
        { name: 'CSS3', icon: <FaCss3Alt /> },
        { name: 'JavaScript', icon: <FaJsSquare /> },
      ],
    },
    {
      name: 'Framework & Library',
      skills: [
        { name: 'React.js', icon: <FaReact /> },
        { name: 'Vue.js', icon: <FaVuejs /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      ],
    },
    {
      name: 'Tools',
      skills: [
        { name: 'Git & GitHub', icon: <FaGitAlt /> },
        { name: 'VS Code', icon: <DiVisualstudio /> },
        { name: 'Figma', icon: <FaFigma /> },
        // Vite tidak ada dalam daftar skill yang kamu berikan, jadi tidak diimpor/ditambahkan
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="skills" className="skills" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        My Skills
      </motion.h2>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {skillCategories.map((category, catIndex) => (
          <motion.div className="skill-category" key={catIndex} variants={itemVariants}>
            <h3>{category.name}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <motion.div 
                  className="skill-item" 
                  key={skillIndex}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(216, 64, 64, 0.7)" }}
                >
                  {typeof skill.icon === 'string' ? <span>{skill.icon}</span> : skill.icon}
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;