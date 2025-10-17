import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// <<< IMPOR SEMUA GAMBAR PROYEK DI SINI
// import projectEcommerce from '../assets/images/project-ecommerce.jpg';
// import projectTaskManager from '../assets/images/project-task-manager.png';
// import projectBlog from '../assets/images/project-blog.jpg';
// import projectWeatherApp from '../assets/images/project-weather-app.png';


const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projectsData = [
    {
      id: 1,
      title: 'E-commerce React App',
      description: 'A full-featured e-commerce platform built with React, Redux, and Firebase for authentication and database.',
      image: 'https://via.placeholder.com/400x220/8E1616/EEEEEE?text=E-commerce+App',
      tech: ['React', 'Redux', 'Firebase', 'Stripe'],
      demoLink: '#', // Ganti dengan link proyek kamu
      sourceLink: '#', // Ganti dengan link GitHub kamu
    },
    {
      id: 2,
      title: 'Task Manager (MERN Stack)',
      description: 'A complete task management application with a Node.js, Express, MongoDB backend, and a React frontend.',
      image: 'https://via.placeholder.com/400x220/8E1616/EEEEEE?text=Task+Manager',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      demoLink: '#',
      sourceLink: '#',
    },
    {
      id: 3,
      title: 'Personal Blog with Next.js',
      description: 'A static personal blog built with Next.js and Markdown for content, deployed to Vercel.',
      image: 'https://via.placeholder.com/400x220/8E1616/EEEEEE?text=Personal+Blog',
      tech: ['Next.js', 'Markdown', 'Vercel'],
      demoLink: '#',
      sourceLink: '#',
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Real-time weather application using external APIs, featuring dynamic backgrounds and forecasts.',
      image: 'https://via.placeholder.com/400x220/8E1616/EEEEEE?text=Weather+App',
      tech: ['React', 'API Integration', 'CSS'],
      demoLink: '#',
      sourceLink: '#',
    },
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
                <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className="btn">Source Code</a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;