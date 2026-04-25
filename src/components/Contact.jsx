import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, Globe, Terminal, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xaqakeqz", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const errorData = await response.json();
        alert("Transmission Failed: " + (errorData.errors?.[0]?.message || "Please ensure you have verified your email with Formspree. Check your Spam folder for a verification link."));
      }
    } catch (error) {
      alert("Network Error: Could not connect to the transmission server. Please check your internet connection.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="py-24 relative z-10 border-t border-white/10" id="contact">
      {/* Success Notification */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            className="fixed bottom-10 left-1/2 z-[100] bg-neonBlue text-space px-8 py-4 rounded-2xl shadow-[0_0_30px_rgba(0,243,255,0.4)] flex items-center gap-4 font-bold"
          >
            <CheckCircle className="w-6 h-6" />
            <span>Transmission Received! I will get back to you soon, Shishir.</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-glow-purple mb-4 uppercase">CONTACT & INFO</h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-medium text-lg">Open a communication channel for collaborations or inquiries.</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            className="lg:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-panel p-6 flex items-center gap-4 hover:border-neonBlue transition-colors group">
              <div className="p-4 bg-neonBlue/10 rounded-full text-neonBlue group-hover:scale-110 transition-transform">
                <Mail />
              </div>
              <div>
                <h4 className="text-white font-bold">Email</h4>
                <a href="mailto:sarkershishir4@gmail.com" className="text-gray-400 text-sm hover:text-neonBlue transition-colors">
                  sarkershishir4@gmail.com
                </a>
              </div>
            </div>

            <div className="glass-panel p-6 flex items-center gap-4 hover:border-white transition-colors group">
              <div className="p-4 bg-white/5 rounded-full text-white group-hover:scale-110 transition-transform">
                <Phone />
              </div>
              <div>
                <h4 className="text-white font-bold">Phone</h4>
                <a href="tel:+8801750054243" className="text-gray-400 text-sm hover:text-white transition-colors">
                  +8801750054243
                </a>
              </div>
            </div>

            <div className="glass-panel p-6 flex items-center gap-4 hover:border-neonPurple transition-colors group">
              <div className="p-4 bg-neonPurple/10 rounded-full text-neonPurple group-hover:scale-110 transition-transform">
                <Globe />
              </div>
              <div>
                <h4 className="text-white font-bold">LinkedIn</h4>
                <a href="https://linkedin.com/in/md-shishir-rahman" target="_blank" rel="noreferrer" className="text-gray-400 text-sm hover:text-neonPurple transition-colors">
                  linkedin.com/in/md-shishir-rahman
                </a>
              </div>
            </div>

            <div className="glass-panel p-6 flex items-center gap-4 hover:border-neonBlue transition-colors group">
              <div className="p-4 bg-neonBlue/10 rounded-full text-neonBlue group-hover:scale-110 transition-transform">
                <Terminal />
              </div>
              <div>
                <h4 className="text-white font-bold">GitHub</h4>
                <a href="https://github.com/Shishir-rahman" target="_blank" rel="noreferrer" className="text-gray-400 text-sm hover:text-neonBlue transition-colors">
                  github.com/Shishir-rahman
                </a>
              </div>
            </div>

            <div className="glass-panel p-6 flex items-center gap-4 hover:border-neonBlue transition-colors group">
              <div className="p-4 bg-neonBlue/10 rounded-full text-neonBlue group-hover:scale-110 transition-transform">
                <Globe />
              </div>
              <div>
                <h4 className="text-white font-bold">Facebook</h4>
                <a href="https://www.facebook.com/Shishir.007S" target="_blank" rel="noreferrer" className="text-gray-400 text-sm hover:text-neonBlue transition-colors">
                  facebook.com/Shishir.007S
                </a>
              </div>
            </div>

            <div className="glass-panel p-6 flex items-center gap-4 hover:border-white transition-colors group">
              <div className="p-4 bg-white/5 rounded-full text-white group-hover:scale-110 transition-transform">
                <MapPin />
              </div>
              <div>
                <h4 className="text-white font-bold">Location</h4>
                <p className="text-gray-400 text-sm">Uttara, Dhaka, Bangladesh</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="lg:w-1/2 glass-panel p-8 flex flex-col justify-between border-t-4 border-t-neonBlue"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <div className="mb-6">
                <label className="block text-sm text-gray-400 mb-2 uppercase tracking-widest font-bold">Your Name</label>
                <input
                  required
                  name="name"
                  type="text"
                  className="w-full bg-space border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neonBlue transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm text-gray-400 mb-2 uppercase tracking-widest font-bold">Your Professional Email</label>
                <input
                  required
                  name="email"
                  type="email"
                  className="w-full bg-space border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neonPurple transition-colors"
                  placeholder="Your Professional Email"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm text-gray-400 mb-2 uppercase tracking-widest font-bold">Your Message</label>
                <textarea
                  required
                  name="message"
                  rows="5"
                  className="w-full bg-space border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neonBlue transition-colors resize-none"
                  placeholder="Your Message"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              disabled={isSending}
              className={`w-full py-4 rounded-xl bg-gradient-to-r from-neonBlue to-neonPurple text-space font-black uppercase tracking-[0.2em] transition-all shadow-lg ${isSending ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02] active:scale-95'}`}
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
