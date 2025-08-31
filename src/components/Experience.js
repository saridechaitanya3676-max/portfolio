import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: 'SAI MEDHA TECH',
      position: 'Circuit Design Intern',
      duration: '2024 - Present',
      description: [
        'Worked on basic circuit design and testing using simulation tools',
        'Assisted in developing small embedded projects using Arduino and microcontrollers',
        'Learned PCB design and debugging techniques',
        'Gained hands-on experience with circuit simulation software'
      ],
      technologies: ['Circuit Design', 'Arduino', 'Microcontrollers', 'PCB Design', 'Simulation Tools']
    },
    {
      company: 'College Mini Project',
      position: 'Embedded Systems Developer',
      duration: 'Jan 2024 - Apr 2024',
      description: [
        'Designed a Smart Home Automation System using Arduino & sensors',
        'Implemented features like light control, temperature monitoring, and energy saving',
        'Improved coding skills in C and Embedded C programming',
        'Successfully completed project with 80.55% GPA'
      ],
      technologies: ['Arduino', 'C Programming', 'Embedded C', 'IoT', 'Sensors', 'Smart Home']
    },
    {
      company: 'Technical Workshops',
      position: 'IoT & Embedded Systems',
      duration: '2023',
      description: [
        'Attended workshop on IoT & Embedded Systems',
        'Gained hands-on experience with microcontrollers (8051, Arduino, Raspberry Pi)',
        'Learned about IoT protocols and embedded system design',
        'Enhanced practical knowledge in electronics and programming'
      ],
      technologies: ['IoT', '8051', 'Arduino', 'Raspberry Pi', 'Embedded Systems', 'Electronics']
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center space-x-4 mb-16"
        >
          <h2 className="heading-secondary">Where I've Worked</h2>
          <div className="flex-1 h-px bg-lightBlue"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex lg:flex-col space-x-4 lg:space-x-0 lg:space-y-2 overflow-x-auto lg:overflow-x-visible">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-3 text-left whitespace-nowrap lg:whitespace-normal transition-all duration-300 border-l-2 lg:border-l-0 lg:border-b-2 ${
                    activeTab === index
                      ? 'border-secondary text-secondary bg-secondary bg-opacity-10'
                      : 'border-lightBlue text-textSecondary hover:text-secondary hover:border-secondary'
                  }`}
                >
                  {exp.company}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Tab Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div>
                <h3 className="text-xl font-semibold text-textPrimary">
                  {experiences[activeTab].position}
                </h3>
                <p className="text-secondary font-mono text-sm">
                  {experiences[activeTab].company}
                </p>
                <p className="text-textSecondary text-sm">
                  {experiences[activeTab].duration}
                </p>
              </div>

              <ul className="space-y-3">
                {experiences[activeTab].description.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-3 text-textSecondary"
                  >
                    <span className="text-secondary mt-1">▹</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="pt-4">
                <h4 className="text-sm font-semibold text-textPrimary mb-3">
                  Technologies used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experiences[activeTab].technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="px-3 py-1 bg-darkBlue border border-lightBlue rounded-full text-xs text-textSecondary hover:border-secondary transition-colors duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
