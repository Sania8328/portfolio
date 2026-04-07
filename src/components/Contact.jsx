import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiDownload, FiMail } from 'react-icons/fi';
import { contactLinks } from '../constants/projectData';

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  // Function to handle resume download
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = contactLinks.resume;
    link.download = 'Sania-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="bg-dark-bg px-4 sm:px-6 lg:px-8 py-20 border-t border-dark-border">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Let's <span className="text-cyber-blue">Connect</span>
        </h2>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, opportunities, and ideas.
          Reach out to me on any of these platforms.
        </p>

        {/* Contact Links */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12 flex-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {/* LinkedIn */}
          <motion.a
            variants={linkVariants}
            href={contactLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 217, 255, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-dark-card border border-cyber-blue/50 text-white rounded-lg font-semibold hover:border-cyber-blue transition-all"
          >
            <FiLinkedin size={20} />
            LinkedIn
          </motion.a>

          {/* GitHub */}
          <motion.a
            variants={linkVariants}
            href={contactLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 217, 255, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-dark-card border border-cyber-blue/50 text-white rounded-lg font-semibold hover:border-cyber-blue transition-all"
          >
            <FiGithub size={20} />
            GitHub
          </motion.a>

          {/* Email */}
          <motion.a
            variants={linkVariants}
            href={`mailto:${contactLinks.email}`}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 217, 255, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-dark-card border border-cyber-blue/50 text-white rounded-lg font-semibold hover:border-cyber-blue transition-all"
          >
            <FiMail size={20} />
            Email
          </motion.a>
        </motion.div>

        {/* Resume Button */}
        <motion.button
          variants={linkVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onClick={downloadResume}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-8 py-4 bg-cyber-blue text-dark-bg font-bold text-lg rounded-lg hover:shadow-glow transition-all"
        >
          <FiDownload size={20} />
          Download Resume
        </motion.button>

        {/* Footer */}
        <motion.div
          variants={containerVariants}
          className="mt-16 pt-8 border-t border-dark-border"
        >
          <p className="text-gray-500 text-sm">
            © 2026 Sania. Built with React, Tailwind CSS & Framer Motion.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}