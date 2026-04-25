import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Interests', href: '#interests' },
    { name: 'Blog', href: '#blog' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed w-full z-50 top-0 left-0 px-4 md:px-6 py-4"
    >
      <div className="glass-panel flex justify-between items-center max-w-6xl mx-auto px-6 py-4 rounded-full relative">
        <h1 className="text-xl md:text-2xl font-black tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-neonBlue via-white to-neonPurple drop-shadow-[0_0_8px_rgba(0,243,255,0.3)]">
          PORTFOLIO
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-gray-300">
          {navLinks.map((link) => (
            <li key={link.name} className="hover:text-neonBlue transition-colors cursor-pointer">
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-300 hover:text-neonBlue transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-20 left-0 w-full bg-space/95 backdrop-blur-2xl rounded-3xl p-6 md:hidden z-50 border border-white/10 shadow-2xl"
            >
              <ul className="flex flex-col gap-6 text-center text-sm uppercase tracking-widest text-gray-300">
                {navLinks.map((link) => (
                  <li 
                    key={link.name} 
                    className="hover:text-neonBlue transition-colors cursor-pointer w-full text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <a href={link.href} className="block w-full py-2">{link.name}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
