import React from 'react';
import { motion } from 'framer-motion'; // <<< TAMBAHKAN BARIS INI
import { useInView } from 'react-intersection-observer'; // <<< TAMBAHKAN BARIS INI

// Import ikon Font Awesome
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPhp, FaLaravel, FaGitAlt, FaFigma
} from 'react-icons/fa';

// Import ikon Devicons
import {
  DiGo, DiVisualstudio, DiMysql
} from 'react-icons/di';
const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      name: 'Frontend',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 /> },
        { name: 'CSS3', icon: <FaCss3Alt /> },
        { name: 'JavaScript', icon: <FaJsSquare /> },
        { name: 'React.js', icon: <FaReact /> },
        // { name: 'Tailwind CSS', icon: <SiTailwindcss /> }, // Example from react-icons/si
      ],
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'PHP', icon: <FaPhp /> },
        { name: 'Laravel', icon: <FaLaravel /> },
        { name: 'Go', icon: <DiGo /> }, // Go lang icon
        // { name: 'Python', icon: <FaPython /> },
      ],
    },
    {
      name: 'Tools & Database',
      skills: [
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'VS Code', icon: <DiVisualstudio /> }, // VS Code icon
        { name: 'XAMPP', icon: <DiMysql /> }, // Using MySQL icon as a stand-in for XAMPP
        { name: 'Figma', icon: <FaFigma /> },
        // { name: 'MongoDB', icon: <DiMongodb /> },
      ],
    },
    {
      name: 'Soft Skills (Optional)',
      skills: [
        { name: 'Teamwork', icon: '👥' }, // Bisa pakai emoji atau ikon khusus
        { name: 'Problem Solving', icon: '🧠' },
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
        My Skills / Tech Stack
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