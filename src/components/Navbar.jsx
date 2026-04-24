import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed w-full z-50 top-0 left-0 px-6 py-4"
    >
      <div className="glass-panel flex justify-between items-center max-w-6xl mx-auto px-6 py-4 rounded-full">
        <h1 className="text-2xl font-bold text-glow-blue tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple">
          PORTFOLIO
        </h1>
        <ul className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-gray-300">
          <li className="hover:text-neonBlue transition-colors cursor-pointer"><a href="#experience">Experience</a></li>
          <li className="hover:text-neonBlue transition-colors cursor-pointer"><a href="#skills">Skills</a></li>
          <li className="hover:text-neonBlue transition-colors cursor-pointer"><a href="#education">Education</a></li>
          <li className="hover:text-neonBlue transition-colors cursor-pointer"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
