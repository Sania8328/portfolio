import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import { personalInfo } from '../constants/projectData';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  // Function to download resume
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/SaniaResume.pdf';
    link.download = 'Sania-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-dark-bg relative overflow-hidden pt-20 pb-20">
      {/* Background gradient blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/10 via-transparent to-transparent pointer-events-none" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10"
      >
        {/* Location Tag */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="inline-block bg-dark-card border border-dark-border rounded-full px-4 py-2">
            <span className="text-cyber-blue animate-pulse-soft">📍 {personalInfo.location}</span>
          </div>
        </motion.div>

        {/* Main Greeting Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-center text-white mb-4 leading-tight"
        >
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyan-300">
            Sania
          </span>
          <br />
          the Digital Architect
        </motion.h1>

        {/* Sub-heading */}
        <motion.h2
          variants={itemVariants}
          className="text-xl md:text-2xl text-center text-gray-300 mb-8 max-w-3xl mx-auto"
        >
        </motion.h2>

        {/* About/Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto"
        >
          {personalInfo.about}
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants} className="flex justify-center gap-4 flex-wrap">
          <motion.a
            href="#featured-projects"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 217, 255, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-3 bg-cyber-blue text-dark-bg font-semibold rounded-lg flex items-center gap-2 hover:gap-3 transition-all cursor-pointer"
          >
            Explore My Work <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.button
            onClick={downloadResume}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-cyber-blue text-cyber-blue font-semibold rounded-lg hover:bg-cyber-blue/10 transition-all flex items-center gap-2"
          >
            <FiDownload size={18} />
            Download Resume
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-cyber-blue"
          >
            ↓ Scroll to explore
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}