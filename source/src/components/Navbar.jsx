import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Project 1', path: '/project/1' },
    { name: 'Project 2', path: '/project/2' },
    { name: 'Project 3', path: '/project/3' },
    { name: 'Project 4', path: '/project/4' },
    { name: 'Other Projects', path: '/other-projects' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-arch-offwhite/90 backdrop-blur-sm border-b border-arch-concrete/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-serif font-bold text-arch-black tracking-widest z-50">
          STUDIO
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm tracking-widest uppercase transition-colors duration-300 hover:text-arch-accent ${
                location.pathname === link.path ? 'text-arch-accent font-semibold' : 'text-arch-charcoal'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden z-50 text-arch-black focus:outline-none" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-arch-black text-arch-offwhite flex flex-col items-center justify-center space-y-8 z-40 md:hidden"
          >
            {links.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <Link
                  to={link.path}
                  onClick={closeMenu}
                  className={`text-3xl font-serif tracking-wider ${
                    location.pathname === link.path ? 'text-arch-accent' : 'text-arch-offwhite hover:text-arch-concrete transition-colors'
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
