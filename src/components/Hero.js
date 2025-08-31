import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiMail, FiDownload } from 'react-icons/fi';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
  const gmailUrl = 'https://mail.google.com/mail/u/0/?fs=1&to=saridechaitanya7443@gmail.com&su=Hello+from+Portfolio&body=Hi+Saride+Chaitanya,%0D%0A%0D%0AI+came+across+your+portfolio+and+would+like+to+connect+with+you.%0D%0A%0D%0ABest+regards,&tf=cm';

  const handleEmailClick = () => {
    console.log('Email URL:', gmailUrl);
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/saridechaitanya3676-max',
      icon: FiGithub,
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/saride-chaitanya-806ba636b',
      icon: FiLinkedin,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/chaitu__065',
      icon: FiTwitter,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/chaitu___065?igsh=NTVmY3V6MHZ4bjUy',
      icon: FiInstagram,
      color: 'hover:text-pink-400'
    },
    {
      name: 'Email',
      icon: FiMail,
      color: 'hover:text-orange-400',
      onClick: handleEmailClick
    }
  ];

  return (
    <section id="home" className="section-padding pt-32">
      <div className="container-custom">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/3 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, 60, 0],
              y: [0, -40, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full px-4 py-2 font-tech text-orange-400 text-sm"
            >
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              <span>Available for opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold font-tech"
            >
              <span className="gradient-text">SARIDE</span>
              <br />
              <span className="gradient-text">CHAITANYA</span>
            </motion.h1>

            {/* Tagline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl lg:text-3xl font-semibold text-gray-300 font-heading"
            >
              I work on electronics and EV charger manufacturing.
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-gray-400 max-w-2xl font-body leading-relaxed"
            >
              Passionate electronics engineer specializing in EV charger manufacturing and innovative IoT solutions. 
              Creating smart systems that make a difference in the world of electric vehicles and automation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://drive.google.com/file/d/16xCDil_7fPshjiYyziy4MMHvXnxc_aRu/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient group"
              >
                <FiDownload className="mr-2 group-hover:animate-bounce" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="btn-fire group"
              >
                Get In Touch
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  →
                </motion.div>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="space-y-4"
            >
              <p className="text-gray-400 font-heading">Follow me</p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  link.onClick ? (
                    <motion.button
                      key={link.name}
                      onClick={link.onClick}
                      className={`p-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-gray-400 ${link.color} transition-all duration-300 hover:scale-110 hover:shadow-lg backdrop-blur-sm`}
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    >
                      <link.icon size={20} />
                    </motion.button>
                  ) : (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-gray-400 ${link.color} transition-all duration-300 hover:scale-110 hover:shadow-lg backdrop-blur-sm`}
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    >
                      <link.icon size={20} />
                    </motion.a>
                  )
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Rotating Border Rings */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #ff6b35, #f7931e, #ff6b35)',
                  padding: '4px',
                  borderRadius: '50%'
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-2 rounded-full"
                style={{
                  background: 'conic-gradient(from 180deg, #00ff88, #00ccff, #00ff88)',
                  padding: '2px',
                  borderRadius: '50%'
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Main Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 bg-gray-800 rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Saride Chaitanya"
                  className="w-full h-full object-cover"
                />
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 bg-orange-500 rounded-full"
                  animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-6 left-6 w-6 h-6 bg-green-500 rounded-full"
                  animate={{
                    y: [0, 8, 0],
                    scale: [1, 0.9, 1],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
                <motion.div
                  className="absolute top-1/2 left-4 w-4 h-4 bg-blue-500 rounded-full"
                  animate={{
                    x: [0, 6, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
