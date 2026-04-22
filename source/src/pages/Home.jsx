import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  { id: '1', title: 'The Horizon Residence', image: './301/RylZH8xFR1SifU4rKfyl.jpg', desc: 'A study in brutalist harmony' },
  { id: '2', title: 'Vertex Tower', image: './302/EXTERIOR RENDER.png', desc: 'Vertical integration of natural elements' },
  { id: '3', title: 'Echo Pavilion', image: './401/plan 1.jpg', desc: 'Responsive acoustic architecture' },
  { id: '4', title: 'Lumina Complex', image: './402/RENDER NEW.png', desc: 'Manipulating natural light' },
];

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-24 flex flex-col items-center text-center space-y-6"
      >
        <h1 className="text-5xl md:text-7xl font-serif text-arch-charcoal leading-tight">
          Designing the <br/> <span className="text-arch-accent italic">Future</span> of Space.
        </h1>
        <p className="max-w-2xl text-lg text-arch-concrete font-sans leading-relaxed">
          We are a visionary architectural firm dedicated to creating spaces that blur the lines between form, function, and environment.
        </p>
      </motion.section>

      {/* Projects Grid */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative ${index % 2 !== 0 ? 'md:mt-24' : ''}`} // Asymmetrical layout on desktop
            >
              <Link to={`/project/${project.id}`} className="block overflow-hidden relative">
                <div className="aspect-[4/5] bg-arch-concrete/10 overflow-hidden relative">
                   <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                   />
                   <div className="absolute inset-0 bg-arch-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="mt-6 flex flex-col items-start">
                  <h2 className="text-2xl font-serif text-arch-black group-hover:text-arch-accent transition-colors duration-300">
                    {project.title}
                  </h2>
                  <p className="text-sm text-arch-concrete mt-2 uppercase tracking-widest">
                    {project.desc}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
