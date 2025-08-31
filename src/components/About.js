import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiTool, FiBookOpen, FiAward } from 'react-icons/fi';
import profileImage from '../assets/profile.jpg';

const About = () => {
  const skills = [
    'Knowledge of three wheeler EV charger manufacturing process', 'Basic knowledge of C programming', 
    'Basic knowledge of Computer', 'Soldering', 'English', 'Telugu'
  ];

  const educationData = [
    {
      icon: FiBookOpen,
      title: 'B.Tech in Electronics Communication Engineering',
      institution: 'Lovely Professional University, Punjab',
      period: '2025 - 2028',
      status: 'Ongoing'
    },
    {
      icon: FiAward,
      title: 'Diploma in Electronics Communication Engineering',
      institution: 'Andhra Polytechnic College, Kakinada',
      period: '2022 - 2025',
      percentage: '70%'
    },
    {
      icon: FiAward,
      title: 'Secondary School Certificate (SSC)',
      institution: 'Tirumala Educational Institutes',
      period: '2021 - 2022',
      percentage: '85.2%'
    }
  ];

  return (
    <section id="about" className="section-padding bg-surface">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate Electronics & Communication Engineering student with expertise in EV charger manufacturing and electronics testing
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6 text-textSecondary">
              <p className="text-lg leading-relaxed">
                Hello! I'm <span className="text-secondary font-semibold">Saride Chaitanya</span>, a passionate Electronics & Communication Engineering 
                student with a strong foundation in electronics and a drive for innovation. My journey 
                in electronics began with my diploma studies, and I've been continuously learning and growing ever since.
              </p>
              
              <p className="text-lg leading-relaxed">
                I enjoy working on practical projects and gaining hands-on experience in electronics 
                manufacturing and testing. My goal is to contribute to the growing field of electric 
                vehicles and renewable energy technologies.
              </p>
              
              <p className="text-lg leading-relaxed">
                Currently pursuing my B.Tech at Lovely Professional University, I bring a unique combination 
                of academic knowledge and practical experience from my industrial training at AXIOM ENERGY CONVERSION Pvt. ltd.
              </p>
            </div>

            {/* Skills List */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-textPrimary">Key Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                    className="flex items-center space-x-3 text-textSecondary bg-darkGray px-4 py-3 rounded-xl"
                >
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-sm font-medium">{skill}</span>
                </motion.div>
              ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content - Education & Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary to-accent rounded-3xl transform rotate-6 scale-105 opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-darkGray to-surface rounded-3xl transform -rotate-6 scale-105 opacity-20"></div>
                
                             {/* Profile Image */}
                <div className="relative bg-darkGray rounded-3xl overflow-hidden shadow-large border-4 border-border">
                  <img
                    src={profileImage}
                    alt="Saride Chaitanya - Electronics & Communication Engineering Student"
                    className="w-full h-full object-cover"
                  />
                 
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              </div>
                </div>
              
            {/* Education Timeline */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-textPrimary">Education Journey</h3>
              <div className="space-y-4">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card-hover"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-darkGray rounded-xl">
                        <edu.icon className="text-secondary" size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-textPrimary">{edu.title}</h4>
                        <p className="text-textSecondary text-sm">{edu.institution}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="text-xs bg-darkGray text-textSecondary px-2 py-1 rounded-full">
                            {edu.period}
                          </span>
                          {edu.percentage && (
                            <span className="text-xs bg-darkGray text-success px-2 py-1 rounded-full font-medium">
                              {edu.percentage}
                            </span>
                          )}
                          {edu.status && (
                            <span className="text-xs bg-darkGray text-secondary px-2 py-1 rounded-full font-medium">
                              {edu.status}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
