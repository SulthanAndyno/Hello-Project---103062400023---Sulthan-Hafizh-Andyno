import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ExperienceEducation = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineData = [
    {
      type: 'education',
      title: 'S1 Informatika',
      institution: 'Universitas Telkom',
      period: '2023 - Now',
      description: 'Memperdalam ilmu komputer, struktur data, algoritma, dan pengembangan perangkat lunak.',
      side: 'left',
    },
    {
      type: 'experience',
      title: 'Anggota Divisi IT',
      institution: 'Himpunan Mahasiswa Fiktif',
      period: 'Jan 2024 - Sekarang',
      description: 'Bertanggung jawab dalam pengembangan dan pemeliharaan website himpunan, serta support teknis acara.',
      side: 'right',
    },
    {
      type: 'certificate',
      title: 'Front-End Web Development Course',
      institution: 'Dicoding Academy',
      period: '2023',
      description: 'Menyelesaikan modul pembelajaran React, JavaScript modern, dan optimasi performa web.',
      side: 'left',
    },
    {
      type: 'experience',
      title: 'Freelance Web Developer',
      institution: 'Self-Employed',
      period: 'Maret 2023 - Sekarang',
      description: 'Membangun berbagai website klien menggunakan React dan WordPress, fokus pada responsivitas dan UX.',
      side: 'right',
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const itemVariantsRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="experience" className="experience" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Experience & Education
      </motion.h2>

      <div className="timeline">
        {timelineData.map((item, index) => (
          <motion.div
            className={`timeline-item timeline-item-${item.side}`}
            key={index}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={item.side === 'left' ? itemVariants : itemVariantsRight}
            transition={{ delay: index * 0.2 }}
          >
            <div className="content">
              <h3>{item.title}</h3>
              <small>{item.institution} | {item.period}</small>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceEducation;