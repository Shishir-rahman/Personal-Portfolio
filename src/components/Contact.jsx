import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Globe, Terminal } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 relative z-10 border-t border-white/10" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-glow-purple mb-4">CONTACT & INFO</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Open a communication channel for collaborations or inquiries.</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            className="lg:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-panel p-6 flex items-center gap-4">
              <div className="p-4 bg-neonBlue/10 rounded-full text-neonBlue">
                <Mail />
              </div>
              <div>
                <h4 className="text-white font-bold">Email</h4>
                <a href="mailto:sarkershishir4@gmail.com" className="text-gray-400 text-sm hover:text-neonBlue transition-colors">
                  sarkershishir4@gmail.com
                </a>
              </div>
            </div>

            <div className="glass-panel p-6 flex items-center gap-4">
              <div className="p-4 bg-white/5 rounded-full text-white">
                <Phone />
              </div>
              <div>
                <h4 className="text-white font-bold">Phone</h4>
                <a href="tel:+8801750054243" className="text-gray-400 text-sm hover:text-neonBlue transition-colors">
                  +8801750054243
                </a>
              </div>
            </div>

            <div className="glass-panel p-6 flex items-center gap-4">
              <div className="p-4 bg-neonPurple/10 rounded-full text-neonPurple">
                <Globe />
              </div>
              <div>
                <h4 className="text-white font-bold">LinkedIn</h4>
                <a href="https://linkedin.com/in/md-shishir-rahman" target="_blank" rel="noreferrer" className="text-gray-400 text-sm hover:text-neonPurple transition-colors">
                  linkedin.com/in/md-shishir-rahman
                </a>
              </div>
            </div>

            <div className="glass-panel p-6 flex items-center gap-4">
              <div className="p-4 bg-neonBlue/10 rounded-full text-neonBlue">
                <Terminal />
              </div>
              <div>
                <h4 className="text-white font-bold">GitHub</h4>
                <a href="https://github.com/Shishir-rahman" target="_blank" rel="noreferrer" className="text-gray-400 text-sm hover:text-neonBlue transition-colors">
                  github.com/Shishir-rahman
                </a>
              </div>
            </div>

            <div className="glass-panel p-6 flex items-center gap-4">
              <div className="p-4 bg-white/5 rounded-full text-white">
                <MapPin />
              </div>
              <div>
                <h4 className="text-white font-bold">Location</h4>
                <p className="text-gray-400 text-sm">Uttara, Dhaka, Bangladesh</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="lg:w-1/2 glass-panel p-8 flex flex-col justify-between"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <div className="mb-6">
                <label className="block text-sm text-gray-400 mb-2">Identifier</label>
                <input
                  type="text"
                  className="w-full bg-space border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neonBlue transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm text-gray-400 mb-2">Return Address</label>
                <input
                  type="email"
                  className="w-full bg-space border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neonPurple transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm text-gray-400 mb-2">Message Payload</label>
                <textarea
                  rows="4"
                  className="w-full bg-space border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neonBlue transition-colors resize-none"
                  placeholder="Initiate transmission..."
                ></textarea>
              </div>
            </div>
            <button className="w-full py-4 rounded-lg bg-gradient-to-r from-neonBlue to-neonPurple text-space font-bold uppercase tracking-widest hover:opacity-90 transition-opacity mt-4">
              Send Transmission
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
