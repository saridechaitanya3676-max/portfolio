import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiInstagram, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const socialLinks = [
    { 
      icon: FiGithub, 
      href: 'https://github.com/yourusername', 
      label: 'GitHub',
      customIcon: (
        <svg 
          className="w-5 h-5" 
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-darkBlue border-t border-lightBlue">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
                         <h3 className="text-2xl font-bold text-secondary cursor-pointer" onClick={scrollToTop}>
               Badavath Kumar
             </h3>
                         <p className="text-textSecondary text-sm max-w-md">
               A passionate Electronics & Communication Engineering student focused on creating 
               embedded systems and IoT solutions that make a difference.
             </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-textPrimary">Quick Links</h4>
            <div className="space-y-2">
                             {[
                 { name: 'About', href: '#about' },
                 { name: 'Experience', href: '#experience' },
                 { name: 'Projects', href: '#projects' },
                 { name: 'Contact', href: '#contact' },
                 { name: 'Social', href: '#social' }
               ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-textSecondary hover:text-secondary transition-colors duration-300 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-textPrimary">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                                 <motion.a
                   key={social.label}
                   href={social.href}
                   target="_blank"
                   rel="noopener noreferrer"
                   initial={{ opacity: 0, scale: 0.8 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 0.5, delay: index * 0.1 }}
                   viewport={{ once: true }}
                   whileHover={{ scale: 1.1 }}
                   whileTap={{ scale: 0.9 }}
                   className="p-3 bg-primary border border-lightBlue rounded-lg text-textSecondary hover:text-secondary hover:border-secondary transition-all duration-300"
                   aria-label={social.label}
                 >
                   {social.customIcon || <social.icon size={20} />}
                 </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-lightBlue mt-8 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                         <p className="text-textSecondary text-sm">
               © {new Date().getFullYear()} Badavath Kumar. All rights reserved.
             </p>
            
            <div className="flex items-center space-x-2 text-textSecondary text-sm">
              <span>Made with</span>
              <FiHeart className="text-red-500 animate-pulse" size={16} />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 p-3 bg-secondary text-primary rounded-full shadow-lg hover:bg-opacity-80 transition-all duration-300 z-50"
          aria-label="Back to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
