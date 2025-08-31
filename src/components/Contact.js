import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';
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

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("Lp2DL9x0ycEvl1gao"); // Your EmailJS Public Key
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
       sender_name: formData.name,
       sender_email: formData.email,
       message_subject: formData.subject,
       message_content: formData.message,
       message_time: new Date().toLocaleString(),
       reply_to: formData.email,
       to_email: 'badavathkumar811@gmail.com'
     };

         try {
       await emailjs.send(
         'service_phpoqg4', // Your Gmail service ID
         'template_uo7pa8c', // Your EmailJS template ID
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
      value: 'badavathkumar811@gmail.com',
      href: 'mailto:badavathkumar811@gmail.com'
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+91 8179616451',
      href: 'tel:+918179616451'
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'India',
      href: '#'
    }
  ];

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
               <h3 className="text-2xl font-semibold text-textPrimary mb-4">
                 Let's talk about everything!
               </h3>
               <p className="text-textSecondary text-lg mb-6">
                 I'm currently looking for new opportunities. Whether you have a question 
                 or just want to say hi, I'll try my best to get back to you!
               </p>
               <a
                 href="https://drive.google.com/file/d/1Lihf2KtvpgYthXsJ_McmuUB93nREzORj/view?usp=sharing"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center space-x-2 px-6 py-3 bg-secondary text-primary rounded-lg hover:bg-opacity-80 transition-all duration-300 font-medium"
               >
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                 </svg>
                 <span>Download Resume</span>
               </a>
             </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 text-textSecondary hover:text-secondary transition-colors duration-300"
                >
                  <div className="p-3 bg-darkBlue border border-lightBlue rounded-lg">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-textPrimary">{info.label}</p>
                    <p className="text-sm">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-textPrimary mb-4">
                Follow me on social media
              </h4>
                             <div className="flex space-x-4">
                                   {[
                    { 
                      name: 'GitHub', 
                      href: 'https://github.com/badavathkumar',
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
                    { name: 'LinkedIn', href: 'https://linkedin.com/in/kumar-badavath-48444633b' },
                    { name: 'Twitter', href: 'https://twitter.com/badavathkumar' },
                    { name: 'Instagram', href: 'https://www.instagram.com/mr_kumar__155' }
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
                     className="px-4 py-2 bg-darkBlue border border-lightBlue rounded-lg text-textSecondary hover:text-secondary hover:border-secondary transition-all duration-300 flex items-center space-x-2"
                   >
                     {social.customIcon && social.customIcon}
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
            className="card"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-textPrimary mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-darkBlue border border-lightBlue rounded-lg text-textPrimary placeholder-textSecondary focus:outline-none focus:border-secondary transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-textPrimary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-darkBlue border border-lightBlue rounded-lg text-textPrimary placeholder-textSecondary focus:outline-none focus:border-secondary transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-textPrimary mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-darkBlue border border-lightBlue rounded-lg text-textPrimary placeholder-textSecondary focus:outline-none focus:border-secondary transition-colors duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-textPrimary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-darkBlue border border-lightBlue rounded-lg text-textPrimary placeholder-textSecondary focus:outline-none focus:border-secondary transition-colors duration-300 resize-none"
                  placeholder="Your message..."
                />
              </div>

                             <motion.button
                 type="submit"
                 disabled={isSubmitting}
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="btn-secondary w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
               >
                 <FiSend size={18} />
                 <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
               </motion.button>

               {/* Success/Error Messages */}
               {submitStatus === 'success' && (
                 <motion.div
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="p-4 bg-green-500 bg-opacity-20 border border-green-500 rounded-lg text-green-400 text-center"
                 >
                   ✅ Thank you for your message! I will get back to you soon.
                 </motion.div>
               )}

               {submitStatus === 'error' && (
                 <motion.div
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="p-4 bg-red-500 bg-opacity-20 border border-red-500 rounded-lg text-red-400 text-center"
                 >
                   ❌ Sorry, there was an error sending your message. Please try again or contact me directly at badavathkumar811@gmail.com
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
