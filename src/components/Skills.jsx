import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    "Financial Management", "Quality Assurance", "Data Management", 
    "Social Media Management", "Mobile Application", "Training & Reporting", 
    "Office Software", "Effective Communication", "Team Leadership",
    "Problem Solving", "Customer Service", "Time Management",
    "Attention to Detail", "Administrative Support", "Operational Efficiency",
    "Event Coordination", "Project Management", "Reliability & Adaptability"
  ];

  return (
    <section className="py-24 relative z-10 border-t border-white/10 bg-space" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-glow-purple mb-6">CORE COMPETENCIES</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              A diverse set of skills honed through experience in accounting, administration, quality assurance, and community leadership.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
            }}
          >
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 }
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-panel px-6 py-3 text-white border-white/10 font-medium tracking-wide cursor-default hover:border-neonPurple hover:text-neonBlue transition-colors"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
