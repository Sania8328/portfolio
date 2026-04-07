import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

export default function Experience({ experiences }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  // Function to handle certificate download
  const downloadCertificate = (certificateLink, companyName) => {
    if (certificateLink && certificateLink !== '#') {
      const link = document.createElement('a');
      link.href = certificateLink;
      link.download = `${companyName}-certificate.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert(`Certificate for ${companyName} is not available yet. Please check back soon!`);
    }
  };

  return (
    <section className="bg-dark-bg px-4 sm:px-6 lg:px-8 py-20 border-t border-dark-border">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-cyber-blue">Virtual</span> Internships
          </h2>
          <p className="text-gray-400 text-lg">
            Professional development through structured learning
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="bg-dark-card border border-dark-border rounded-xl p-6 md:p-8 relative"
            >
              {/* Timeline connector */}
              {idx !== experiences.length - 1 && (
                <div className="absolute left-8 top-full h-6 w-0.5 bg-gradient-to-b from-cyber-blue to-transparent" />
              )}

              {/* Timeline dot */}
              <div className="absolute -left-6 top-8 w-4 h-4 bg-cyber-blue rounded-full border-4 border-dark-bg" />

              {/* Content */}
              <div className="pl-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {exp.company}
                    </h3>
                    <p className="text-cyber-blue font-semibold">{exp.position}</p>
                  </div>
                  <span className="text-gray-400 text-sm">{exp.duration}</span>
                </div>

                <p className="text-gray-300 mb-6">{exp.description}</p>

                {/* Certificate Button */}
                <motion.button
                  onClick={() => downloadCertificate(exp.certificateLink, exp.company)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-cyber-blue/10 border border-cyber-blue text-cyber-blue rounded-lg font-semibold hover:bg-cyber-blue/20 transition-all"
                >
                  <FiDownload size={18} />
                  View Certificate
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}