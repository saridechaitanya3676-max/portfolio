import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiInstagram, FiYoutube } from 'react-icons/fi';

const SocialMedia = () => {
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
      ),
      description: 'Check out my projects and contributions'
    },
    { 
      icon: FiLinkedin, 
      href: 'https://linkedin.com/in/saride-chaitanya', 
      label: 'LinkedIn',
      description: 'Connect with me professionally'
    },
    { 
      icon: FiTwitter, 
      href: 'https://twitter.com/saridechaitanya', 
      label: 'Twitter',
      description: 'Follow my thoughts and updates'
    },
    { 
      icon: FiMail, 
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=saridechaitanya7443@gmail.com&su=Hello from Portfolio&body=Hi Saride Chaitanya,%0D%0A%0D%0AI came across your portfolio and would like to connect with you.%0D%0A%0D%0ABest regards,', 
      label: 'Email',
      description: 'Send me a direct message'
    },
    { 
      icon: FiInstagram, 
      href: 'https://www.instagram.com/saridechaitanya', 
      label: 'Instagram',
      description: 'See my creative side'
    },
    { 
      icon: FiYoutube, 
      href: 'https://youtube.com/@saridechaitanya', 
      label: 'YouTube',
      description: 'Watch my tutorials and content'
    }
  ];

  return (
    <section id="social" className="section-padding bg-darkBlue">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">Let's Connect</h2>
          <p className="text-textSecondary text-lg max-w-2xl mx-auto">
            I'm always open to new opportunities and interesting conversations. 
            Feel free to reach out through any of these platforms!
          </p>
        </motion.div>

        {/* Icon-only Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center items-center space-x-8 mb-16"
        >
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
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 bg-primary border border-lightBlue rounded-full text-textSecondary hover:text-secondary hover:border-secondary transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label={social.label}
            >
              {social.customIcon || <social.icon size={28} />}
            </motion.a>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-textSecondary mb-6">
            Don't see the platform you prefer? 
          </p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=saridechaitanya7443@gmail.com&su=Hello from Portfolio&body=Hi Saride Chaitanya,%0D%0A%0D%0AI came across your portfolio and would like to connect with you.%0D%0A%0D%0ABest regards,"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center space-x-2"
          >
            <FiMail size={18} />
            <span>Send me an email</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialMedia;
