import React from 'react';
import { motion } from 'framer-motion';

// Mock list of images from the 'other' folder based on previous exploration
const otherProjectImages = [
  'Final Drawing (1) (1).jpg',
  'WhatsApp Image 2026-04-21 at 3.27.31 PM.jpeg',
  'WhatsApp Image 2026-04-21 at 3.27.41 PM (1).jpeg',
  'WhatsApp Image 2026-04-21 at 3.27.54 PM.jpeg',
  'WhatsApp Image 2026-04-21 at 3.28.13 PM.jpeg',
  'WhatsApp Image 2026-04-21 at 3.28.28 PM.jpeg',
  'WhatsApp Image 2026-04-21 at 3.29.32 PM.jpeg'
];

const OtherProjects = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <h1 className="text-5xl font-serif text-arch-charcoal mb-4">Selected Works</h1>
        <p className="text-arch-concrete font-sans max-w-2xl mx-auto">
          A curated collection of secondary works, sketches, and conceptual architectural models exploring varied structural typologies.
        </p>
      </motion.div>

      {/* Masonry-style Grid using columns */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {otherProjectImages.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            className="break-inside-avoid overflow-hidden bg-arch-concrete/10 rounded-sm"
          >
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              src={`./other/${img}`}
              alt={`Selected architectural work ${index + 1}`}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OtherProjects;
