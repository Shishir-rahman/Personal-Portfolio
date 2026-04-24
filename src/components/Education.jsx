import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const educationList = [
    {
      degree: "BBA in Accounting",
      institution: "Govt. Titumir College, Dhaka",
      //result: "CGPA: 2.66/4.00",
      year: "2022"
    },
    {
      degree: "HSC in Business Studies",
      institution: "Uttara Commerce College, Dhaka",
      //result: "GPA: 4.08/5.00",
      year: "2017"
    },
    {
      degree: "SSC in Science",
      institution: "Chalitadanga BBN ML High School, Sirajganj",
      //result: "GPA: 4.39/5.00",
      year: "2015"
    }
  ];

  const activities = [
    {
      role: "Co-Founder",
      organization: "Sonamukhi Social Youth Club",
      period: "January 2017 – Present",
      points: [
        "Founded and led community initiatives in education and environmental sustainability.",
        "Managed a team of 20+ volunteers, organizing events with 500+ participants annually.",
        "Built partnerships with local organizations, expanding project reach by 40%."
      ]
    }
  ];

  return (
    <section className="py-24 relative z-10 overflow-hidden" id="education">
      {/* Decorative Image */}
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] opacity-20 pointer-events-none hidden md:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
      >
        <img src="/images/education.png" alt="Education Decorative" className="w-full h-full object-contain mix-blend-screen" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-glow-purple mb-10 flex items-center gap-4">
            <GraduationCap className="text-neonPurple w-10 h-10" /> EDUCATION
          </h2>
          <div className="space-y-6">
            {educationList.map((edu, idx) => (
              <div key={idx} className="glass-panel p-6 border-l-4 border-l-neonPurple">
                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                <h4 className="text-gray-300 mt-1">{edu.institution}</h4>
                <div className="flex justify-between mt-4 text-sm text-gray-400 font-semibold">
                  <span className="bg-white/10 px-3 py-1 rounded text-neonBlue">{edu.result}</span>
                  <span className="bg-white/10 px-3 py-1 rounded">{edu.year}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Extracurricular Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-glow-blue mb-10 flex items-center gap-4">
            <Award className="text-neonBlue w-10 h-10" /> EXTRACURRICULAR
          </h2>
          <div className="space-y-6">
            {activities.map((act, idx) => (
              <div key={idx} className="glass-panel p-6 border-l-4 border-l-neonBlue">
                <h3 className="text-xl font-bold text-white">{act.role}</h3>
                <h4 className="text-neonBlue mt-1 font-semibold">{act.organization}</h4>
                <p className="text-xs text-gray-400 mt-1 mb-4">{act.period}</p>
                <ul className="space-y-2">
                  {act.points.map((point, i) => (
                    <li key={i} className="text-gray-300 text-sm flex items-start">
                      <span className="text-neonBlue mr-2">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;
