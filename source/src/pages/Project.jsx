import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

// Mock database to match folder structure to ID
const projectData = {
  '1': {
    title: 'The Horizon Residence',
    client: 'Private Client',
    location: 'Coastal Cliffs, CA',
    year: '2023',
    folder: '301',
    description: 'The Horizon Residence is a study in brutalist harmony. Integrating raw concrete with the natural jaggedness of the coastal cliffs, this project explores the threshold between shelter and the abyss. Natural light is guided through deep light wells to illuminate the monolithic interior spaces.',
    images: [
      'RylZH8xFR1SifU4rKfyl.jpg',
      'cQdaTiF8F4lfiKO3bhZj.jpeg',
      'A5 ELEVATIONS.jpg',
      'A5-1FPLAN.jpg',
      'A5-ROOFPLAN.jpg',
      'FACADE DETAIL.jpg',
      'magnific-5NqYuaAZ7WOWEmwjOCxI-Image2_000.jpg',
      'magnific-9PZ3pcKURCokMsjdbOJD-Image6.jpg',
      'magnific-NaB1tbkSmjBgeyH6ji6u-Image7-Recovered.jpg',
      'magnific-nRH5oGkhEESEBZM0hd6o-Image13.jpg',
      'wuEGAnN7e57nI3sfVC4N.jpg'
    ],
    heroImage: 'RylZH8xFR1SifU4rKfyl.jpg'
  },
  '2': {
    title: 'Vertex Tower',
    client: 'Vertex Holdings',
    location: 'Metropolitan District',
    year: '2024',
    folder: '302',
    description: 'Vertex Tower represents the vertical integration of natural elements. Designed to break the monotony of the urban skyline, the tower features spiraling green terraces that act as a lung for the surrounding metropolis, blending residential and commercial spaces seamlessly.',
    images: [
      'EXTERIOR RENDER.png',
      'EXTERIOR RENDER 2.png',
      'INTERIOR RENDER.jpg',
      'S-101 GROUND FLOOR PLAN comp.jpg',
      'S-101 GROUND FLOOR PLAN.jpg'
    ],
    heroImage: 'EXTERIOR RENDER.png'
  },
  '3': {
    title: 'Echo Pavilion',
    client: 'City Arts Council',
    location: 'Downtown Cultural Park',
    year: '2022',
    folder: '401',
    description: 'A masterpiece of responsive acoustic architecture. The Echo Pavilion was commissioned to host open-air performances. Its swooping, parabolic canopies are engineered to amplify sound naturally while providing a visually striking sculptural presence in the park.',
    images: [
      'plan 1.jpg',
      'Image (11).jpeg',
      'Image (13).jpeg',
      'Image (21).jpeg',
      'Image (3).jpeg',
      'Image (4).jpeg',
      'Image (7).jpeg',
      'Image (9).jpeg',
      'Perspective outline [Converted].png',
      'masterPlan2.pdf.jpg',
      'redner 3 final.jpg',
      'redner2.jpeg',
      'render 4 final.jpg'
    ],
    heroImage: 'redner 3 final.jpg'
  },
  '4': {
    title: 'Lumina Complex',
    client: 'Lumina Tech',
    location: 'Silicon Valley, CA',
    year: '2025',
    folder: '402',
    description: 'Manipulating natural light to foster productivity and well-being. The Lumina Complex employs a dynamic facade system that responds to solar tracking, optimizing daylight harvesting while minimizing glare. The interior is a fluid sequence of collaborative and private zones.',
    images: [
      'RENDER NEW.png',
      'interior render.png',
      'sbs plans.jpg',
      'sbs section.jpg'
    ],
    heroImage: 'RENDER NEW.png'
  }
};

const Project = () => {
  const { id } = useParams();
  const data = projectData[id];

  if (!data) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-3xl font-serif text-arch-charcoal">Project Not Found</h1>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Massive Hero Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden"
      >
        <img
          src={`./${data.folder}/${data.heroImage}`}
          alt={data.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-arch-black/70 flex items-end">
          <div className="max-w-7xl mx-auto px-6 pb-16 w-full">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl md:text-8xl font-serif text-arch-offwhite"
            >
              {data.title}
            </motion.h1>
          </div>
        </div>
      </motion.div>

      {/* Project Details */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4 space-y-8">
          <div>
            <h3 className="text-sm text-arch-concrete uppercase tracking-widest mb-2">Client</h3>
            <p className="text-lg font-serif text-arch-charcoal">{data.client}</p>
          </div>
          <div>
            <h3 className="text-sm text-arch-concrete uppercase tracking-widest mb-2">Location</h3>
            <p className="text-lg font-serif text-arch-charcoal">{data.location}</p>
          </div>
          <div>
            <h3 className="text-sm text-arch-concrete uppercase tracking-widest mb-2">Year</h3>
            <p className="text-lg font-serif text-arch-charcoal">{data.year}</p>
          </div>
        </div>
        <div className="md:col-span-8">
          <h2 className="text-3xl font-serif text-arch-charcoal mb-6">About the Project</h2>
          <p className="text-lg text-arch-concrete font-sans leading-relaxed">
            {data.description}
          </p>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="overflow-hidden bg-arch-concrete/10 aspect-square"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                src={`./${data.folder}/${img}`}
                alt={`${data.title} gallery image ${idx + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
