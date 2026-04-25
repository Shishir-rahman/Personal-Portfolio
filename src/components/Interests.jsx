import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Globe, Plane, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const Interests = () => {
  const images = [
    "/images/travel1.jpg",
    "/images/travel2.jpg",
    "/images/travel3.jpg",
    "/images/travel4.jpg",
    "/images/travel5.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="py-24 relative z-10 border-t border-white/10 bg-space overflow-hidden" id="interests">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-neonBlue rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-neonPurple rounded-full blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-glow-blue mb-8">BEYOND THE DESK</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              When I'm not managing finances & accounts, you'll likely find me on the road. I am a passionate traveler with a soul deeply connected to the diverse landscapes of Bangladesh.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="glass-panel p-6 border-t-2 border-t-neonBlue">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="text-neonBlue" size={24} />
                  <span className="text-2xl font-bold text-white">40+</span>
                </div>
                <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Districts Explored</p>
              </div>
              <div className="glass-panel p-6 border-t-2 border-t-neonPurple">
                <div className="flex items-center gap-3 mb-2">
                  <Globe className="text-neonPurple" size={24} />
                  <span className="text-2xl font-bold text-white">All Major</span>
                </div>
                <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Tourist Spots Covered</p>
              </div>
            </div>

            <p className="text-gray-300 mb-8 italic border-l-4 border-neonPurple pl-6 py-2 bg-white/5 rounded-r-lg">
              "Traveling allows me to see the world from different perspectives, which I then bring back to my professional life—helping me stay adaptable and creative in problem-solving."
            </p>

            <motion.a 
              href="#blog" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-neonPurple text-white px-8 py-4 rounded-full font-bold shadow-[0_0_20px_rgba(157,0,255,0.4)] hover:shadow-[0_0_30px_rgba(157,0,255,0.6)] transition-all"
            >
              Visit My Travel Blog <ExternalLink size={20} />
            </motion.a>
          </motion.div>

          {/* Visual Content - Image Slider */}
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group aspect-[4/5] md:aspect-[4/3] lg:aspect-[4/5]">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentIndex}
                  src={images[currentIndex]} 
                  alt={`Travel Photo ${currentIndex + 1}`} 
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              
              <div className="absolute inset-0 bg-gradient-to-t from-space/60 to-transparent" />
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 glass-panel p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity z-20 hover:text-neonBlue"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 glass-panel p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity z-20 hover:text-neonBlue"
              >
                <ChevronRight size={24} />
              </button>

              {/* Progress Dots */}
              <div className="absolute bottom-6 right-8 flex gap-2 z-20">
                {images.map((_, idx) => (
                  <div 
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'w-6 bg-neonBlue' : 'bg-white/30'}`}
                  />
                ))}
              </div>

              <div className="absolute bottom-8 left-8 z-20">
                <div className="flex items-center gap-2 text-neonBlue mb-2">
                  <Plane size={20} />
                  <span className="font-bold tracking-widest text-sm uppercase">Adventure Seeker</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Exploring the Beauty of Bangladesh</h3>
              </div>
            </div>
            
            {/* Small floating detail */}
            <motion.div 
              className="absolute -top-6 -right-6 glass-panel p-4 z-30"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="bg-neonBlue/20 p-2 rounded-lg">
                <Globe className="text-neonBlue" size={32} />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Interests;
