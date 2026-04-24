import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center pt-24 pb-12 bg-gradient-to-br from-[#8C867B] to-[#4A453A]" id="hero">
      
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between relative z-10 h-full">
        
        {/* Left Content */}
        <div className="md:w-1/2 text-left pt-10 md:pt-0 z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/30 text-white/90 text-sm mb-6 font-medium tracking-wide">
              Financial Management & QA
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tight mb-6 italic">
              SHISHIR<br />RAHMAN
            </h1>
            
            <p className="text-lg text-white/80 mb-10 max-w-xl leading-relaxed font-medium">
              Dedicated professional with a strong background in Finance, Accounts, and Administrative operations, seeking to leverage expertise in ERP systems and Technology to drive organizational efficiency. Proven track record in managing high-value financial transactions, ensuring VAT & TAX compliance, and optimizing administrative workflows. Committed to utilizing technical proficiency in software quality and data management to deliver precise financial reporting and streamlined operational discipline.
            </p>

            <div className="flex gap-4">
              <a href="#contact" className="inline-flex items-center gap-3 bg-stone-900 text-white px-8 py-4 rounded-full font-bold hover:bg-stone-800 transition-colors shadow-lg">
                Book a Free Call <ArrowRight size={20} />
              </a>
            </div>

            {/* "As seen in" style footer */}
            <div className="mt-16 md:mt-24">
              <p className="text-white/60 text-xs font-bold tracking-widest uppercase mb-4">Core Expertise</p>
              <div className="flex flex-wrap items-center gap-6 text-white/70 font-semibold text-sm md:text-base">
                <span className="flex items-center gap-2"><CheckCircle size={18} /> ERP Systems</span>
                <span className="flex items-center gap-2"><CheckCircle size={18} /> Financial Reporting</span>
                <span className="flex items-center gap-2"><CheckCircle size={18} /> VAT & TAX</span>
                <span className="flex items-center gap-2"><CheckCircle size={18} /> Admin Ops</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Image & Floating Cards */}
        <div className="md:w-1/2 flex justify-center items-end relative h-[60vh] md:h-[80vh] w-full mt-12 md:mt-0">
          <motion.div 
            className="w-full h-full relative flex justify-center items-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Main Avatar Image */}
            <img 
              src="/images/avatar.png" 
              alt="Shishir Rahman" 
              className="w-auto h-full object-contain object-bottom z-10 max-h-[85vh]"
            />
            
            {/* Background Glow behind image */}
            <div className="absolute bottom-10 w-3/4 h-3/4 bg-white/10 blur-[100px] rounded-full z-0" />

            {/* Floating Card 1 */}
            {/*<motion.div 
              className="absolute top-1/4 right-0 md:-right-12 glass-panel bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl z-20 shadow-2xl max-w-[200px]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-stone-700 border-2 border-stone-500 flex items-center justify-center text-xs text-white">QA</div>
                  <div className="w-8 h-8 rounded-full bg-stone-600 border-2 border-stone-400 flex items-center justify-center text-xs text-white">ERP</div>
                </div>
              </div>
              <p className="text-white text-xs font-bold leading-tight">BDT 5M+ Transactions Managed Monthly</p>
            </motion.div>

            {/* Floating Card 2 */} 
            <motion.div 
              className="absolute bottom-1/4 left-0 md:-left-8 glass-panel bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl z-20 shadow-2xl max-w-[220px]"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mb-2">
                <Star size={16} className="text-white" />
              </div>
              <p className="text-white text-xs font-bold leading-tight">100% VAT, TAX & Compliance Record Maintained</p>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
