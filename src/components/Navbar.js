import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiZap, FiHome, FiUser, FiBriefcase, FiFolder, FiAward, FiMail, FiShare2 } from 'react-icons/fi';

const Navbar = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: FiHome },
    { id: 'about', label: 'About', icon: FiUser },
    { id: 'experience', label: 'Experience', icon: FiBriefcase },
    { id: 'projects', label: 'Projects', icon: FiFolder },
    { id: 'skills', label: 'Skills', icon: FiAward },
    { id: 'contact', label: 'Contact', icon: FiMail },
    { id: 'social', label: 'Social', icon: FiShare2 }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 w-full z-[9999] transition-all duration-500 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-orange-500/30 shadow-2xl' 
          : 'bg-transparent'
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"
        />
      </div>

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className={`py-4 transition-all duration-500 ${
            scrolled 
              ? 'bg-gradient-to-r from-gray-900/95 to-gray-800/95 backdrop-blur-md border border-gray-700/50 rounded-2xl shadow-2xl' 
              : 'bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-md border border-gray-700/30 rounded-3xl shadow-xl'
          }`}
        >
          <div className="flex justify-between items-center h-16 px-6">
            {/* Animated Logo */}
          <motion.div
              initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center space-x-4 cursor-pointer group"
            onClick={() => scrollToSection('home')}
          >
              <motion.div
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 360,
                  boxShadow: "0 0 30px rgba(255, 107, 53, 0.8)"
                }}
                transition={{ duration: 0.5 }}
                className="relative p-3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl group-hover:from-cyan-500 group-hover:to-purple-500 transition-all duration-500"
              >
                <FiZap className="text-white text-xl" />
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl blur-md"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <span className="text-xl font-black bg-gradient-to-r from-orange-500 via-yellow-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 font-tech">
                  Saride Chaitanya
                </span>
                <motion.div
                  animate={{ 
                    width: ["0%", "100%", "0%"],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500"
                />
              </motion.div>
          </motion.div>

            {/* Desktop Navigation with Icons */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                  initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(255, 107, 53, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative group px-4 py-3 rounded-2xl transition-all duration-500 font-heading ${
                    activeSection === item.id 
                      ? 'text-white bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/50' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                onClick={() => scrollToSection(item.id)}
              >
                  <div className="flex items-center space-x-2">
                    <item.icon className="text-lg" />
                    <span className="font-semibold">{item.label}</span>
                  </div>
                  
                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-2xl border border-orange-500/50"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  
                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
            <motion.div 
              className="lg:hidden"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative p-3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl text-white hover:from-cyan-500 hover:to-purple-500 transition-all duration-500 shadow-lg hover:shadow-xl"
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FiX size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FiMenu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Button glow effect */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl blur-md"
                />
              </motion.button>
            </motion.div>
        </div>

        {/* Mobile Navigation */}
          <AnimatePresence>
        {isMenuOpen && (
          <motion.div
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="lg:hidden border-t border-gray-700/50 bg-gradient-to-b from-gray-900/95 to-gray-800/95 backdrop-blur-md overflow-hidden"
              >
                <div className="py-4 px-6 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                  key={item.id}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center space-x-3 w-full text-left py-4 px-4 rounded-xl transition-all duration-300 font-medium font-heading ${
                        activeSection === item.id
                          ? 'text-white bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/50'
                          : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                      }`}
                  onClick={() => scrollToSection(item.id)}
                >
                      <item.icon className="text-lg" />
                      <span className="font-semibold">{item.label}</span>
                      
                      {/* Active indicator for mobile */}
                      {activeSection === item.id && (
                        <motion.div
                          layoutId="mobileActiveIndicator"
                          className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full ml-auto"
                          initial={false}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </motion.button>
              ))}
            </div>
          </motion.div>
        )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
