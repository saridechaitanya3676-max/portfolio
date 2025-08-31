import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpg';

const About = () => {
  const skills = [
    'Embedded Systems', 'IoT', 'Circuit Design', 'Arduino', 'Microcontrollers', 'C Programming', 
    'PCB Design', 'Project Management', 'Teamwork', 'Leadership', 'Effective Communication'
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center space-x-4 mb-16"
        >
          <h2 className="heading-secondary">About Me</h2>
          <div className="flex-1 h-px bg-lightBlue"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4 text-textSecondary">
              <p>
                Hello! I'm Badavath Kumar, a passionate Electronics & Communication Engineering 
                student with a love for creating embedded systems and IoT solutions. My journey 
                in electronics began when I built my first circuit, and I've been hooked ever since.
              </p>
              
              <p>
                I enjoy creating hardware and software solutions that solve real-world problems, 
                whether that be smart home automation, IoT devices, or embedded systems. My goal 
                is to always build products that provide efficient, reliable, and innovative experiences.
              </p>
              
              <p>
                I completed my diploma in St Mary's Engineering College with 80.55% percentage. 
                Currently, I'm pursuing B.Tech 2nd year in Electronics & Communication Engineering 
                at Lovely Professional University, Punjab.
              </p>
              
              <p>
                Here are a few technologies and skills I've been working with recently:
              </p>
            </div>

            {/* Skills List */}
            <div className="grid grid-cols-2 gap-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2 text-textSecondary"
                >
                  <span className="text-secondary">▹</span>
                  <span>{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group">
                             {/* Profile Image */}
                              <div className="w-80 h-96 bg-darkBlue border border-lightBlue rounded-lg overflow-hidden flex items-center justify-center">
                  <img
                    src={profileImage}
                    alt="Badavath Kumar - Electronics & Communication Engineering Student"
                    className="w-full h-full object-contain rounded-lg"
                  />
                 
                </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-secondary bg-opacity-20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Border Effect */}
              <div className="absolute inset-0 border-2 border-secondary rounded-lg transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
