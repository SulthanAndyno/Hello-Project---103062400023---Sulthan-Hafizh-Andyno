import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
// import ExperienceEducation from './components/ExperienceEducation';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* <ExperienceEducation /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;