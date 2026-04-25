import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Map, X, Maximize2 } from 'lucide-react';

const Gallery = () => {
  const categories = ['All', 'Photography', 'Travel'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    // Photography Category
    { id: 1, src: '/images/gallery/photo_1.jpg', category: 'Photography', title: 'Geometric Perspectives' },
    { id: 2, src: '/images/gallery/photo_2.jpg', category: 'Photography', title: 'Silent Sculptures' },
    { id: 3, src: '/images/gallery/photo_3.jpg', category: 'Photography', title: 'Stone Balance' },
    { id: 4, src: '/images/gallery/photo_4.jpg', category: 'Photography', title: 'Urban Geometry' },
    { id: 5, src: '/images/gallery/photo_5.jpg', category: 'Photography', title: 'Nature\'s Bloom' },
    { id: 13, src: '/images/gallery/photo_6.jpg', category: 'Photography', title: 'Azure Horizons' },
    { id: 14, src: '/images/gallery/photo_7.jpg', category: 'Photography', title: 'River Chronicles' },
    
    // Travel Category
    { id: 6, src: '/images/travel1.jpg', category: 'Travel', title: 'Mountain Trails' },
    { id: 7, src: '/images/travel2.jpg', category: 'Travel', title: 'Serene Landscapes' },
    { id: 8, src: '/images/travel3.jpg', category: 'Travel', title: 'Misty Valleys' },
    { id: 9, src: '/images/blog/sylhet_1.jpg', category: 'Travel', title: 'White Stones of Sylhet' },
    { id: 10, src: '/images/blog/chittagong_1.jpg', category: 'Travel', title: 'Sitakunda Peaks' },
    { id: 11, src: '/images/blog/sunamganj_1.jpg', category: 'Travel', title: 'Tanguar Haor' },
    { id: 12, src: '/images/blog/star_hotel_2.jpg', category: 'Travel', title: 'Bandarban Nights' }
  ];

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <section className="py-24 relative z-10 border-t border-white/10 bg-space" id="gallery">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-glow-blue mb-6 uppercase tracking-tight"
          >
            Visual Portfolio
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            A collection of moments captured through my lens, showcasing the intersection of art and adventure.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all border ${
                activeCategory === cat
                  ? 'bg-neonBlue text-white border-neonBlue shadow-[0_0_20px_rgba(0,243,255,0.4)]'
                  : 'bg-white/5 text-gray-400 border-white/10 hover:border-white/20'
              }`}
            >
              {cat === 'Photography' && <Camera className="inline-block mr-2" size={16} />}
              {cat === 'Travel' && <Map className="inline-block mr-2" size={16} />}
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer border border-white/10"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-space/90 via-space/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <span className="text-neonBlue text-xs font-bold uppercase tracking-widest mb-1">{img.category}</span>
                  <h4 className="text-white font-bold text-lg">{img.title}</h4>
                  <div className="mt-4 flex items-center text-white/60 text-sm">
                    <Maximize2 size={16} className="mr-2" />
                    View Larger
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-space/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
              onClick={() => setSelectedImage(null)}
            >
              <button 
                className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-10"
                onClick={() => setSelectedImage(null)}
              >
                <X size={40} />
              </button>
              
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.title} 
                  className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl border border-white/10"
                />
                <div className="mt-8 text-center">
                  <span className="text-neonBlue text-sm font-bold uppercase tracking-widest">{selectedImage.category}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mt-2">{selectedImage.title}</h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Gallery;
