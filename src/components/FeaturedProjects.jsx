import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

export default function FeaturedProjects({ projects }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const hoverVariants = {
    hover: {
      y: -10,
      boxShadow: '0 0 40px rgba(0, 217, 255, 0.2)',
    },
  };

  return (
    <section className="bg-dark-bg px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-cyber-blue">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Innovative solutions designed to solve real-world problems
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              variants={hoverVariants}
              className="bg-dark-card border border-dark-border rounded-xl p-6 md:p-8 cursor-pointer transition-all"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl">{project.image}</div>
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    project.status === 'Live'
                      ? 'bg-green-900/30 text-green-400'
                      : 'bg-yellow-900/30 text-yellow-400'
                  }`}
                >
                  [{project.status}]
                </motion.span>
              </div>

              {/* Project Title */}
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>

              {/* Project Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-cyber-blue mb-3 uppercase tracking-wider">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="text-gray-300 text-sm flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-cyber-blue rounded-full" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-dark-bg border border-cyber-blue/30 text-cyber-blue text-xs rounded-lg font-medium"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                {/* GitHub Repo Button */}
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 text-cyber-blue font-semibold hover:text-white transition-colors"
                >
                  <FiGithub size={18} />
                  GitHub Repo
                </motion.a>

                {/* Live Demo Button (if available) */}
                {project.liveLink && (
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 text-green-400 font-semibold hover:text-green-300 transition-colors"
                  >
                    <FiExternalLink size={18} />
                    Live Demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}