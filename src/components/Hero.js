import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiInstagram, FiArrowRight, FiDownload, FiZap, FiStar } from 'react-icons/fi';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
  const socialLinks = [
    { 
      icon: FiGithub, 
      href: 'https://github.com/saridechaitanya', 
      label: 'GitHub',
      customIcon: (
        <svg 
          className="w-6 h-6" 
          fill="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      )
    },
    { icon: FiLinkedin, href: 'https://linkedin.com/in/saride-chaitanya', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://twitter.com/saridechaitanya', label: 'Twitter' },
    { icon: FiInstagram, href: 'https://www.instagram.com/saridechaitanya', label: 'Instagram' },
    { icon: FiMail, href: 'mailto:saridechaitanya7443@gmail.com', label: 'Email' }
  ];

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-32 bg-gradient-to-br from-primary via-surface to-darkGray relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-cool rounded-full opacity-10 blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-ocean rounded-full opacity-10 blur-3xl"
        />
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-fire rounded-full opacity-20 blur-2xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Status Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full text-sm font-bold shadow-lg font-tech"
              >
                <FiZap className="mr-2 animate-pulse" />
                Available for opportunities
              </motion.div>
              
              <h1 className="heading-primary font-tech">
                <span className="gradient-text">Saride Chaitanya</span>
              </h1>
              
              <p className="text-xl text-gray-400 max-w-lg leading-relaxed font-body">
                Electronics & Communication Engineering student specializing in EV charger manufacturing, 
                testing, and electronics with hands-on experience in industrial training. 
                Passionate about creating innovative solutions in the field of electric vehicles and renewable energy.
              </p>
            </motion.div>
            
                         <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-6"
            >
              <button onClick={scrollToContact} className="btn-gradient inline-flex items-center space-x-3">
                <FiStar className="animate-pulse" />
                <span>Let's get started</span>
                <FiArrowRight size={18} />
               </button>
               <button 
                 onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="btn-fire inline-flex items-center space-x-3"
               >
                <span>View My Work</span>
               </button>
               <a
                href="https://drive.google.com/file/d/16xCDil_7fPshjiYyziy4MMHvXnxc_aRu/view?usp=sharing"
                 target="_blank"
                 rel="noopener noreferrer"
                className="btn-ocean inline-flex items-center space-x-3"
               >
                <FiDownload size={18} />
                <span>Download Resume</span>
               </a>
             </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex items-center space-x-8"
            >
              <span className="text-gray-300 text-sm font-bold font-heading">Follow me:</span>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl text-gray-400 hover:text-orange-500 hover:border-orange-500 transition-all duration-500 shadow-lg hover:shadow-xl hover-lift"
                    aria-label={social.label}
                  >
                    {social.customIcon || <social.icon size={24} />}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hexagonal Profile Image */}
           <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Rotating Background Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-96 h-96 border-2 border-orange-500/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 w-88 h-88 border-2 border-purple-500/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 w-80 h-80 border-2 border-pink-500/30 rounded-full"
              />
              
              {/* Hexagonal Profile Image */}
              <div className="relative w-80 h-80 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-3xl overflow-hidden shadow-2xl border-4 border-orange-500 p-2">
                <div className="w-full h-full bg-gray-900 rounded-2xl overflow-hidden">
                                <img
                   src={profileImage}
                    alt="Saride Chaitanya - Electronics & Communication Engineering Student"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <FiMail className="text-white" size={28} />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg"
              >
                <FiGithub className="text-white" size={24} />
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -right-12 w-12 h-12 bg-gradient-to-r from-orange-500 via-yellow-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
              >
                <FiStar className="text-white" size={20} />
              </motion.div>
              </div>
           </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-8 h-12 border-2 border-orange-500 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-4 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
