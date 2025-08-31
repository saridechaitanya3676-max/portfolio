import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiMail, FiYoutube } from 'react-icons/fi';

const SocialMedia = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/saridechaitanya3676-max',
      icon: FiGithub,
      color: 'hover:text-gray-400',
      description: 'Check out my projects'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/saride-chaitanya-806ba636b',
      icon: FiLinkedin,
      color: 'hover:text-blue-400',
      description: 'Connect with me professionally'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/chaitu__065',
      icon: FiTwitter,
      color: 'hover:text-blue-400',
      description: 'Follow my updates'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/chaitu___065?igsh=NTVmY3V6MHZ4bjUy',
      icon: FiInstagram,
      color: 'hover:text-pink-400',
      description: 'See my daily life'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@saridechaitanya',
      icon: FiYoutube,
      color: 'hover:text-red-400',
      description: 'Watch my videos'
    }
  ];

  const gmailUrl = 'https://mail.google.com/mail/u/0/?fs=1&to=saridechaitanya7443@gmail.com&su=Hello+from+Portfolio&body=Hi+Saride+Chaitanya,%0D%0A%0D%0AI+came+across+your+portfolio+and+would+like+to+connect+with+you.%0D%0A%0D%0ABest+regards,&tf=cm';

  const handleEmailClick = () => {
    console.log('Email URL:', gmailUrl);
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="social" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">Let's Connect</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Follow me on social media to stay updated with my latest projects, 
            insights on electronics and EV technology, and behind-the-scenes content.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center hover:border-orange-500/50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className={`p-4 bg-gray-800/50 rounded-xl ${social.color} transition-all duration-300 group-hover:scale-110`}>
                  <social.icon size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{social.name}</h3>
                  <p className="text-gray-400 text-sm">{social.description}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Get In Touch</h3>
            <p className="text-gray-400 mb-6">
              Have a question or want to collaborate? I'd love to hear from you!
            </p>
            <button
              onClick={handleEmailClick}
              className="btn-gradient inline-flex items-center space-x-2"
            >
              <FiMail size={20} />
              <span>Send me an email</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialMedia;
