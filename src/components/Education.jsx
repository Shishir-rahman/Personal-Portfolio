import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const educationList = [
    {
      degree: "Bachelor of Business Administration (BBA) in Accounting",
      institution: "Govt. Titumir College, Dhaka",
      year: "Graduated: 2022",
      description: "Key Coursework: Financial Accounting, Cost Accounting, Taxation, Auditing, and Management Accounting."
    },
    {
      degree: "Higher Secondary Certificate (HSC) in Business Studies",
      institution: "Uttara Commerce College, Dhaka",
      year: "Passing Year: 2017"
    },
    {
      degree: "Secondary School Certificate (SSC) in Science",
      institution: "Chalitadanga BBN ML High School, Sirajganj",
      year: "Passing Year: 2015"
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
    },
    {
      role: "Founder Treasurer",
      organization: "Public University Students' Association of Kazipur (PUSAK)",
      period: "2020 – 2021",
      points: [
        "Financial Stewardship: Managed the organization's initial funds and established transparent financial reporting for various community-driven projects.",
        "Educational Development: Organized workshops and seminars focused on improving the quality of education and skill development for students in the Kazipur Upazila.",
        "Social & Environmental Initiatives: Led community outreach programs centered on social development and environmental awareness campaigns.",
        "Organizational Leadership: Collaborated with other founders to build a platform that supports student growth and local community welfare."
      ]
    },
    {
      role: "Co-Founder & Chief Instructor",
      organization: "Prottoy Coaching Center",
      period: "2020 – 2022",
      points: [
        "Entrepreneurial Initiative: Co-founded a coaching center to provide quality education and guidance for university admission seekers during the challenging COVID-19 period.",
        "Operational Management: Managed daily administrative tasks, student enrollments, and academic scheduling, ensuring a smooth learning environment despite pandemic restrictions.",
        "Success Rate: Successfully mentored numerous students who achieved admission into top-tier public and private universities through personalized guidance and rigorous training."
      ]
    },
    {
      role: "Class Captain",
      organization: "Uttara Commerce College, Dhaka",
      period: "2015 – 2016",
      points: [
        "Coordination: Served as a bridge between students and faculty, ensuring effective communication and maintaining classroom discipline.",
        "Problem Solving: Represented student concerns to college administration and assisted in resolving academic or logistical issues.",
        "Event Support: Provided leadership in organizing classroom activities and college-level events, fostering a collaborative environment."
      ]
    }
  ];

  const certifications = [
    {
      title: "VAT/TAX Management",
      organization: "LCBS Dhaka",
      date: "April 2026"
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

      <div className="max-w-6xl mx-auto px-6 space-y-24 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
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
                  {edu.description && (
                    <p className="text-sm text-gray-400 mt-3 border-t border-white/5 pt-3">
                      <span className="text-neonPurple font-semibold">Key Coursework:</span> {edu.description.replace('Key Coursework: ', '')}
                    </p>
                  )}
                  <div className="flex justify-between mt-4 text-sm text-gray-400 font-semibold">
                    {edu.result && <span className="bg-white/10 px-3 py-1 rounded text-neonBlue">{edu.result}</span>}
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
            <h2 className="text-3xl md:text-4xl font-bold text-glow-blue mb-10 flex items-center gap-4 uppercase">
              <Award className="text-neonBlue w-10 h-10" /> Leadership & Extracurricular Activities
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

        {/* Training & Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-glow-purple mb-10 flex items-center gap-4">
            <Award className="text-neonPurple w-10 h-10" /> TRAINING & PROFESSIONAL CERTIFICATIONS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="glass-panel p-6 border-l-4 border-l-neonPurple flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                  <h4 className="text-gray-300 mt-1">{cert.organization}</h4>
                </div>
                <div className="text-sm text-gray-400 font-semibold bg-white/10 px-3 py-1 rounded">
                  {cert.date}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;
