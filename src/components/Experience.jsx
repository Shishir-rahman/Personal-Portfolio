import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Executive, Accounts & Admin",
      company: "Sokrio Technologies Ltd.",
      period: "June 2025 - Present",
      achievements: [
        "Financial Integrity: Overseeing daily financial operations, including ledger maintenance, bank reconciliations, and voucher management to ensure 100% data accuracy.",
        "Strategic Reporting: Synthesizing complex financial data into monthly statements and reports for executive leadership review.",
        "Regulatory Compliance: Managing the end-to-end process of VAT and TAX return submissions while ensuring adherence to government regulations.",
        "Operational Excellence: Streamlining administrative workflows, payroll processing, and vendor logistics to maintain organizational efficiency."
      ]
    },
    {
      role: "Accounts & Admin Officer",
      company: "Suzuki Premium",
      period: "February 2025 - June 2025",
      achievements: [
        "Oversaw financial operations with transactions exceeding BDT 5M+ monthly.",
        "Streamlined procurement and compliance processes, boosting efficiency by 30%.",
        "Reduced audit preparation time by 40% through improved reporting."
      ]
    },
    {
      role: "Software Quality Assurance",
      company: "Alphasoft Technology Ltd.",
      period: "Oct. 2022 - Jan. 2025",
      achievements: [
        "Conducted QA testing on ERP modules, improving defect detection by 30%.",
        "Developed test documentation and user manuals, improving team efficiency by 20%.",
        "Nominated for Responsible Employee of the Year (2024)."
      ]
    },
    {
      role: "Customer Service Representative",
      company: "Digicon Technologies Ltd.",
      period: "Sep. 2021 - Jun. 2022",
      achievements: [
        "Handled 100+ customer queries daily across calls and social media with 95% resolution rate.",
        "Boosted customer retention by 20% through consistent engagement.",
        "Awarded Employee of the Month for exceptional communication and service quality."
      ]
    },
    {
      role: "Freelance Trainer",
      company: "Bangladesh Bureau of Statistics",
      period: "Jan. 2021 - Apr. 2022",
      achievements: [
        "Trained 300+ field data collectors on mobile application usage nationwide.",
        "Designed user-friendly tutorials, improving app adoption and efficiency by 40%."
      ]
    }
  ];

  return (
    <section className="py-24 relative z-10 border-t border-white/10 bg-space" id="experience">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-glow-blue mb-4">PROFESSIONAL EXPERIENCE</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A trajectory of operational excellence and financial management.</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 relative z-10">
          <div className="lg:w-2/3 space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-8 md:p-10 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-neonBlue transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                      <Briefcase className="text-neonBlue" size={24} /> {exp.role}
                    </h3>
                    <h4 className="text-xl text-neonPurple mt-1">{exp.company}</h4>
                  </div>
                  <div className="mt-4 md:mt-0 text-gray-400 font-semibold bg-white/5 px-4 py-2 rounded-lg inline-block">
                    {exp.period}
                  </div>
                </div>
                
                <ul className="space-y-3 mt-4">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-start">
                      <span className="text-neonBlue mr-3 mt-1">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Decorative Side Visual */}
          <motion.div 
            className="lg:w-1/3 hidden lg:flex items-center justify-center relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <motion.div
              animate={{ y: [0, -30, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(157,0,255,0.3)] border border-white/10"
            >
              <img src="/images/finance.png" alt="Finance Visual" className="w-full h-auto object-cover" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
