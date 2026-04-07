import { motion } from 'framer-motion';

export default function CodingStats({ stats }) {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="bg-dark-bg px-4 sm:px-6 lg:px-8 py-20 border-t border-dark-border">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-cyber-blue">Coding</span> Achievements
          </h2>
          <p className="text-gray-400 text-lg">
            Continuous learning and problem-solving
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* LeetCode Stats */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 40px rgba(0, 217, 255, 0.3)',
            }}
            className="bg-dark-card border border-dark-border rounded-xl p-8 text-center cursor-pointer transition-all"
          >
            <div className="text-6xl font-bold text-cyber-blue mb-2">
              {stats.leetcode}
            </div>
            <p className="text-gray-300 text-lg font-semibold">
              {stats.problems}
            </p>
            <p className="text-gray-500 text-sm mt-2">
              LeetCode Problems
            </p>
          </motion.div>

          {/* GitHub Contributions */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 40px rgba(0, 217, 255, 0.3)',
            }}
            className="md:col-span-2 bg-dark-card border border-dark-border rounded-xl p-8 cursor-pointer transition-all"
          >
            <h3 className="text-xl font-bold text-white mb-4">
              GitHub Contributions
            </h3>
            {/* Placeholder for GitHub Contribution Graph */}
            <div className="bg-dark-bg rounded-lg p-6 min-h-40 flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-400 text-lg mb-2">
                  🔗 Connect your GitHub to display contribution graph
                </p>
                <a
                  href="https://github.com/Sania8328"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-cyber-blue text-dark-bg font-semibold rounded-lg hover:shadow-glow transition-all"
                >
                  Visit GitHub Profile
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}