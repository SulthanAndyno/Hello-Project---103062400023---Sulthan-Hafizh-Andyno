import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import fins from '../assets/demo_fins.png';
import maymart from '../assets/demo_maymart.png';
import tm from '../assets/demo_taskreminder.png';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projectsData = [
    {
      id: 1,
      title: 'FINS',
      description: 'Financial Insight adalah aplikasi web yang dirancang untuk para pengguna mengelola keuangan pribadi, dengan fitur sebagai asisten finansial cerdas yang didukung oleh AI dari IBM Granite.',
      image: fins,
      tech: ['React', 'Tailwind', 'Postgres', 'IBM Granite AI'],
      demoLink: 'https://finsid.netlify.app/', // Ganti dengan link proyek kamu
      sourceLink: '#', // Ganti dengan link GitHub kamu
    },
    {
      id: 2,
      title: 'MAYMART',
      description: 'MAYMART adalah sebuah platform e-commerce yang didesain untuk menjual produk-produk segar, khususnya sayuran, langsung dari petani ke konsumen.',
      image: maymart,
      tech: ['HTML', 'CSS', 'Javascript',],
      demoLink: 'https://maymart.netlify.app/',
      sourceLink: '#',
    },
    {
      id: 3,
      title: 'Task Reminder Bot',
      description: 'Task Reminder Bot adalah sebuah Bot Telegram yang dibuat menggunakan Golang untuk membantu pengguna dalam mengelola tugas dan pengingat secara efisien.',
      image: tm,
      tech: ['Go', 'Postgres', 'docker'],
      demoLink: 'https://t.me/Shuureminderbot',
      sourceLink: '#',
    },
    // {
    //   id: 4,
    //   title: 'Weather Dashboard',
    //   description: 'Real-time weather application using external APIs, featuring dynamic backgrounds and forecasts.',
    //   image: 'https://via.placeholder.com/400x220/8E1616/EEEEEE?text=Weather+App',
    //   tech: ['React', 'API Integration', 'CSS'],
    //   demoLink: '#',
    //   sourceLink: '#',
    // },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="projects" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>
      <motion.div 
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {projectsData.map(project => (
          <motion.div 
            className="project-card" 
            key={project.id}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.03, 
              boxShadow: "0 15px 35px rgba(0, 0, 0, 0.6), 0 0 20px rgba(216, 64, 64, 0.7)", 
              y: -8 
            }}
            transition={{ duration: 0.3 }}
          >
            <img src={project.image} alt={project.title} />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="tech-stack">
                Tech: {project.tech.map((tech, index) => (
                  <span key={index}>{tech}{index < project.tech.length - 1 ? ', ' : ''}</span>
                ))}
              </p>
              <p>{project.description}</p>
              <div className="card-actions">
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn">View Demo</a>
                {/* <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className="btn">Source Code</a> */}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;