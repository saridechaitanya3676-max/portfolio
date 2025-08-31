import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiMail } from 'react-icons/fi';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/saridechaitanya3676-max',
      icon: FiGithub
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/saride-chaitanya-806ba636b',
      icon: FiLinkedin
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/chaitu__065',
      icon: FiTwitter
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/chaitu___065?igsh=NTVmY3V6MHZ4bjUy',
      icon: FiInstagram
    },
    {
      name: 'Email',
      url: 'https://mail.google.com/mail/u/0/?fs=1&to=saridechaitanya7443@gmail.com&su=Hello+from+Portfolio&body=Hi+Saride+Chaitanya,%0D%0A%0D%0AI+came+across+your+portfolio+and+would+like+to+connect+with+you.%0D%0A%0D%0ABest+regards,&tf=cm',
      icon: FiMail
    }
  ];

  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-700/50">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white font-tech">Saride Chaitanya</h3>
            <p className="text-gray-400 max-w-md">
              Electronics & Communication Engineering student specializing in EV charger manufacturing, 
              testing, and innovative IoT solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-gray-400 hover:text-orange-500 hover:border-orange-500/50 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Saride Chaitanya. All rights reserved. | Built with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
