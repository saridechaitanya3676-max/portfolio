import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiInstagram } from 'react-icons/fi';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
  const socialLinks = [
    { 
      icon: FiGithub, 
      href: 'https://github.com/yourusername', 
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
              { icon: FiLinkedin, href: 'https://linkedin.com/in/kumar-badavath-48444633b', label: 'LinkedIn' },
     { icon: FiTwitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
                                               { icon: FiInstagram, href: 'https://www.instagram.com/mr_kumar__155', label: 'Instagram' },
          { icon: FiMail, href: 'mailto:badavathkumar811@gmail.com', label: 'Email' }
  ];

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-secondary font-mono text-lg"
            >
              Hi, my name is
            </motion.p>
            
                         <motion.h1
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.4 }}
               className="heading-primary"
             >
               BADAVATH KUMAR.
             </motion.h1>
             
             <motion.h2
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.6 }}
               className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-textSecondary"
             >
               I build embedded systems and IoT solutions.
             </motion.h2>
             
             <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.8 }}
               className="text-textSecondary text-lg max-w-lg"
             >
               I'm an Electronics & Communication Engineering student specializing in embedded systems, 
               IoT, and circuit design. Currently pursuing B.Tech 2nd year at Lovely Professional University, Punjab.
             </motion.p>
            
                         <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 1 }}
               className="flex flex-wrap gap-4"
             >
               <button onClick={scrollToContact} className="btn-secondary">
                 Get In Touch
               </button>
               <button 
                 onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                 className="btn-primary"
               >
                 View My Work
               </button>
               <a
                 href="https://drive.google.com/file/d/1Lihf2KtvpgYthXsJ_McmuUB93nREzORj/view?usp=sharing"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="btn-primary border-2 border-secondary bg-transparent hover:bg-secondary hover:text-primary transition-all duration-300"
               >
                 Download Resume
               </a>
             </motion.div>
          </motion.div>

                     {/* Right Content - Placeholder for future content */}
           <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="flex flex-col items-center lg:items-end space-y-6"
           >
                                                   {/* Profile Image */}
                          <div className="w-80 h-96 bg-darkBlue border border-lightBlue rounded-lg overflow-hidden flex items-center justify-center">
                                <img
                   src={profileImage}
                   alt="Badavath Kumar - Electronics & Communication Engineering Student"
                   className="w-full h-full object-contain rounded-lg"
                 />
                
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
            className="w-6 h-10 border-2 border-secondary rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-secondary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
