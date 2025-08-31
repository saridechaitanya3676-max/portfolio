import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiUser, FiMessageSquare } from 'react-icons/fi';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(''); // 'success' or 'error'

  // Initialize EmailJS with new public key
  useEffect(() => {
    emailjs.init("4yYSnDUcAAY9gC8Yn"); // Updated EmailJS Public Key
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

         // EmailJS template parameters
     const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'saridechaitanya7443@gmail.com'
     };

         try {
       await emailjs.send(
        'service_znb2cc8', // Gmail service ID
        'template_qce1z1n', // EmailJS template ID
         templateParams
       );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'saridechaitanya7443@gmail.com',
      href: 'mailto:saridechaitanya7443@gmail.com'
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+91 8499960979',
      href: 'tel:+918499960979'
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: '8-24, Main Road Iragavaram, Iragavaram Mandal, West Godavari, Andhra Pradesh 534217',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">Get In Touch</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to start a conversation? Let's discuss your next project or just say hello!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
                         <div>
              <h3 className="text-3xl font-bold text-white mb-6 font-display">
                 Let's talk about everything!
               </h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                 I'm currently looking for new opportunities. Whether you have a question 
                 or just want to say hi, I'll try my best to get back to you!
               </p>
              <motion.a
                href="https://drive.google.com/file/d/16xCDil_7fPshjiYyziy4MMHvXnxc_aRu/view?usp=sharing"
                 target="_blank"
                 rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-2xl hover:from-cyan-500 hover:to-purple-500 transition-all duration-500 font-semibold shadow-lg hover:shadow-xl"
               >
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                 </svg>
                 <span>Download Resume</span>
              </motion.a>
             </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white mb-6 font-heading">Contact Information</h4>
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center space-x-4 p-4 bg-gray-800/50 border border-gray-700 rounded-2xl hover:border-orange-500 hover:bg-gray-800/80 transition-all duration-300 group"
                >
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl group-hover:from-cyan-500 group-hover:to-purple-500 transition-all duration-500">
                    <info.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{info.label}</p>
                    <p className="text-gray-400 text-sm">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-6 font-heading">
                Follow me on social media
              </h4>
              <div className="flex flex-wrap gap-4">
                                   {[
                    { 
                      name: 'GitHub', 
                    href: 'https://github.com/saridechaitanya',
                    icon: FiGithub,
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
                  { name: 'LinkedIn', href: 'https://linkedin.com/in/saride-chaitanya', icon: FiLinkedin },
                  { name: 'Twitter', href: 'https://twitter.com/saridechaitanya', icon: FiTwitter },
                  { name: 'Instagram', href: 'https://www.instagram.com/saridechaitanya', icon: FiInstagram }
                  ].map((social, index) => (
                                     <motion.a
                     key={social.name}
                     href={social.href}
                     target="_blank"
                     rel="noopener noreferrer"
                     initial={{ opacity: 0, scale: 0.8 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.5, delay: index * 0.1 }}
                     viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-300 hover:text-white hover:border-orange-500 hover:bg-gray-800/80 transition-all duration-300 flex items-center space-x-2 font-medium"
                   >
                    {social.customIcon || <social.icon size={18} />}
                     <span>{social.name}</span>
                   </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 shadow-2xl"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2 font-display">Send me a message</h3>
              <p className="text-gray-400">I'll get back to you as soon as possible!</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-semibold text-white mb-3 flex items-center space-x-2">
                    <FiUser size={16} />
                    <span>Name</span>
                  </label>
                  <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                      className="w-full px-4 py-4 bg-gray-800/80 border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:bg-gray-800 transition-all duration-300 font-medium"
                      placeholder="Enter your name"
                  />
                    <div className="absolute inset-0 border-2 border-transparent rounded-xl pointer-events-none transition-all duration-300 group-hover:border-orange-500/50"></div>
                  </div>
                </div>
                
                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-3 flex items-center space-x-2">
                    <FiMail size={16} />
                    <span>Email</span>
                  </label>
                  <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                      className="w-full px-4 py-4 bg-gray-800/80 border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:bg-gray-800 transition-all duration-300 font-medium"
                      placeholder="Enter your email"
                  />
                    <div className="absolute inset-0 border-2 border-transparent rounded-xl pointer-events-none transition-all duration-300 group-hover:border-orange-500/50"></div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <label htmlFor="subject" className="block text-sm font-semibold text-white mb-3 flex items-center space-x-2">
                  <FiMessageSquare size={16} />
                  <span>Subject</span>
                </label>
                <div className="relative">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                    className="w-full px-4 py-4 bg-gray-800/80 border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:bg-gray-800 transition-all duration-300 font-medium"
                  placeholder="What's this about?"
                />
                  <div className="absolute inset-0 border-2 border-transparent rounded-xl pointer-events-none transition-all duration-300 group-hover:border-orange-500/50"></div>
                </div>
              </div>

              <div className="relative">
                <label htmlFor="message" className="block text-sm font-semibold text-white mb-3 flex items-center space-x-2">
                  <FiMessageSquare size={16} />
                  <span>Message</span>
                </label>
                <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                    className="w-full px-4 py-4 bg-gray-800/80 border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:bg-gray-800 transition-all duration-300 font-medium resize-none"
                    placeholder="Tell me about your project or just say hello..."
                />
                  <div className="absolute inset-0 border-2 border-transparent rounded-xl pointer-events-none transition-all duration-300 group-hover:border-orange-500/50"></div>
                </div>
              </div>

                             <motion.button
                 type="submit"
                 disabled={isSubmitting}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-xl hover:from-cyan-500 hover:to-purple-500 transition-all duration-500 font-semibold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
               >
                 <FiSend size={18} />
                 <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
               </motion.button>

               {/* Success/Error Messages */}
               {submitStatus === 'success' && (
                 <motion.div
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 text-center font-medium"
                 >
                   ✅ Thank you for your message! I will get back to you soon.
                 </motion.div>
               )}

               {submitStatus === 'error' && (
                 <motion.div
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 text-center font-medium"
                 >
                  ❌ Sorry, there was an error sending your message. Please try again or contact me directly at saridechaitanya7443@gmail.com
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
