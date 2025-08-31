import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiMessageSquare, FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'saridechaitanya7443@gmail.com',
      link: 'https://mail.google.com/mail/u/0/?fs=1&to=saridechaitanya7443@gmail.com&su=Hello+from+Portfolio&body=Hi+Saride+Chaitanya,%0D%0A%0D%0AI+came+across+your+portfolio+and+would+like+to+connect+with+you.%0D%0A%0D%0ABest+regards,&tf=cm'
    },
    {
      icon: FiPhone,
      title: 'Phone',
      value: '+91 8499960979',
      link: 'tel:+918499960979'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'Iragavaram, West Godavari, Andhra Pradesh',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: FiGithub,
      title: 'GitHub',
      url: 'https://github.com/saridechaitanya3676-max',
      color: 'hover:text-gray-400'
    },
    {
      icon: FiLinkedin,
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/saride-chaitanya-806ba636b',
      color: 'hover:text-blue-400'
    },
    {
      icon: FiTwitter,
      title: 'Twitter',
      url: 'https://twitter.com/chaitu__065',
      color: 'hover:text-blue-400'
    },
    {
      icon: FiInstagram,
      title: 'Instagram',
      url: 'https://www.instagram.com/chaitu___065?igsh=NTVmY3V6MHZ4bjUy',
      color: 'hover:text-pink-400'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        'service_znb2cc8',
        'template_qce1z1n',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'saridechaitanya7443@gmail.com'
        },
        '4yYSnDUcAAY9gC8Yn'
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center space-x-4 mb-16"
        >
          <h2 className="heading-secondary">Get In Touch</h2>
          <div className="flex-1 h-px bg-lightBlue"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Let's Connect</h3>
              <p className="text-gray-400 mb-8">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about electronics and EV technology.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  target={info.title === 'Email' ? '_blank' : undefined}
                  rel={info.title === 'Email' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 bg-gray-800/50 border border-gray-700/50 rounded-xl hover:border-orange-500/50 transition-all duration-300 group"
                >
                  <div className="p-3 bg-orange-500/20 rounded-lg group-hover:bg-orange-500/30 transition-colors duration-300">
                    <info.icon className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{info.title}</h4>
                    <p className="text-gray-400">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Media Links */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.title}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`p-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-gray-400 ${social.color} transition-all duration-300 hover:border-orange-500/50`}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Download Resume */}
            <motion.a
              href="https://drive.google.com/file/d/16xCDil_7fPshjiYyziy4MMHvXnxc_aRu/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              <span>Download Resume</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="flex items-center space-x-2 text-gray-300 mb-2">
                  <FiUser size={16} />
                  <span>Your Name</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-gray-800/80 border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:bg-gray-800 transition-all duration-300 font-medium"
                    placeholder="Enter your name"
                  />
                  <div className="absolute inset-0 border-2 border-transparent rounded-xl pointer-events-none group-hover:border-orange-500/30 transition-colors duration-300"></div>
                </div>
              </div>

              <div>
                <label className="flex items-center space-x-2 text-gray-300 mb-2">
                  <FiMail size={16} />
                  <span>Your Email</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-gray-800/80 border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:bg-gray-800 transition-all duration-300 font-medium"
                    placeholder="Enter your email"
                  />
                  <div className="absolute inset-0 border-2 border-transparent rounded-xl pointer-events-none group-hover:border-orange-500/30 transition-colors duration-300"></div>
                </div>
              </div>

              <div>
                <label className="flex items-center space-x-2 text-gray-300 mb-2">
                  <FiMessageSquare size={16} />
                  <span>Subject</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-gray-800/80 border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:bg-gray-800 transition-all duration-300 font-medium"
                    placeholder="What's this about?"
                  />
                  <div className="absolute inset-0 border-2 border-transparent rounded-xl pointer-events-none group-hover:border-orange-500/30 transition-colors duration-300"></div>
                </div>
              </div>

              <div>
                <label className="flex items-center space-x-2 text-gray-300 mb-2">
                  <FiMessageSquare size={16} />
                  <span>Message</span>
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-4 bg-gray-800/80 border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:bg-gray-800 transition-all duration-300 font-medium resize-none"
                    placeholder="Your message..."
                  />
                  <div className="absolute inset-0 border-2 border-transparent rounded-xl pointer-events-none group-hover:border-orange-500/30 transition-colors duration-300"></div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400"
                >
                  Failed to send message. Please try again or email me directly at saridechaitanya7443@gmail.com
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
