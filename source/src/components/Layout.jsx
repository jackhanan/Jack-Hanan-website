import React from 'react';
import Navbar from './Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col selection:bg-arch-accent selection:text-white">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex-grow mt-24" // Offset for fixed navbar
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <footer className="py-8 text-center text-sm text-arch-concrete tracking-widest uppercase border-t border-arch-concrete/20 mt-16">
        &copy; {new Date().getFullYear()} STUDIO ARCHITECTURE. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Layout;
