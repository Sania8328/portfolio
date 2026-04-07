import { useEffect } from 'react';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import CodingStats from './components/CodingStats';
import Contact from './components/Contact';
import { projects, experienceData, techStackData, codingStats } from './constants/projectData';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="bg-dark-bg text-white min-h-screen">
      <Hero />
      <FeaturedProjects projects={projects} />
      <TechStack techStack={techStackData} />
      <Experience experiences={experienceData} />
      <CodingStats stats={codingStats} />
      <Contact />
    </div>
  );
}

export default App;
