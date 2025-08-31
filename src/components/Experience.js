import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle } from 'react-icons/fi';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: 'AXIOM ENERGY CONVERSION Pvt. ltd.',
      position: 'Trainee (Industrial Training)',
      duration: '2024 - Present',
      location: 'Cherlapalli, Hyderabad',
      description: [
        'Primary testing of electronic components and systems',
        'Visual inspection of manufactured products',
        'Final testing procedures and quality assurance',
        'Software dumping and firmware installation',
        'Gained hands-on experience in EV charger manufacturing process',
        'Quality control and production process optimization'
      ],
      technologies: ['Primary Testing', 'Visual Inspection', 'Final Testing', 'Software Dumping', 'EV Charger Manufacturing', 'Quality Assurance']
    },
    {
      company: 'Academic Projects',
      position: 'Electronics & Communication Engineering Student',
      duration: '2022 - 2025',
      location: 'Andhra Polytechnic College, Kakinada',
      description: [
        'Completed Diploma in Electronics Communication Engineering with 70% percentage',
        'Worked on various academic projects including circuit design and testing',
        'Gained practical knowledge in electronics and soldering techniques',
        'Developed basic programming skills in C language',
        'Participated in technical workshops and hands-on training',
        'Completed multiple mini-projects in electronics and embedded systems'
      ],
      technologies: ['Electronics', 'C Programming', 'Soldering', 'Circuit Design', 'Academic Projects', 'Diploma Studies']
    },
    {
      company: 'Educational Background',
      position: 'Student',
      duration: '2021 - Present',
      location: 'Lovely Professional University, Punjab',
      description: [
        'Completed SSC from Tirumala Educational Institutes with 85.2% percentage',
        'Currently pursuing B.Tech in Electronics Communication Engineering',
        'Certified by UNXT by SGBS UNNATI FOUNDATION',
        'Fluent in English and Telugu languages',
        'Interested in playing games, visiting new places, and watching movies',
        'Active participation in technical and cultural activities'
      ],
      technologies: ['SSC Education', 'B.Tech Studies', 'Certifications', 'Languages', 'Personal Interests', 'Student Activities']
    }
  ];

  return (
    <section id="experience" className="section-padding bg-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            My professional journey and hands-on experience in electronics and EV charger manufacturing
          </p>
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
            <div className="flex lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-4 text-left whitespace-nowrap lg:whitespace-normal transition-all duration-300 rounded-2xl border-2 ${
                    activeTab === index
                      ? 'border-secondary text-secondary bg-darkGray shadow-medium'
                      : 'border-border text-textSecondary hover:text-secondary hover:border-secondary bg-surface hover:shadow-soft'
                  }`}
                >
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm">{exp.company}</h3>
                    <p className="text-xs opacity-75">{exp.position}</p>
                  </div>
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
              className="card-hover"
            >
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-darkGray rounded-xl">
                      <FiBriefcase className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-textPrimary">
                        {experiences[activeTab].position}
                      </h3>
                      <p className="text-secondary font-medium">
                        {experiences[activeTab].company}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-textSecondary">
                    <div className="flex items-center space-x-2">
                      <FiCalendar size={16} />
                      <span>{experiences[activeTab].duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FiMapPin size={16} />
                      <span>{experiences[activeTab].location}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-textPrimary">Key Responsibilities & Achievements:</h4>
                  <ul className="space-y-3">
                    {experiences[activeTab].description.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start space-x-3 text-textSecondary"
                      >
                        <FiCheckCircle className="text-secondary mt-0.5 flex-shrink-0" size={16} />
                        <span className="leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border">
                  <h4 className="text-sm font-semibold text-textPrimary mb-3">
                    Technologies & Skills:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experiences[activeTab].technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="px-3 py-1 bg-darkGray text-textSecondary rounded-full text-xs font-medium hover:bg-secondary hover:text-primary transition-colors duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
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
