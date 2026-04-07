import { motion } from 'framer-motion';

export default function TechStack({ techStack }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
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
            <span className="text-cyber-blue">Tech</span> Stack
          </h2>
          <p className="text-gray-400 text-lg">
            Tools and technologies I work with daily
          </p>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 30px rgba(0, 217, 255, 0.3)',
              }}
              className="bg-dark-card border border-dark-border rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-all hover:border-cyber-blue/50"
            >
              <div className="text-5xl mb-3">{tech.icon}</div>
              <h3 className="text-white font-semibold text-sm md:text-base">
                {tech.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}