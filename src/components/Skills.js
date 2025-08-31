import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCode, FiDatabase, FiCloud, FiSmartphone, FiMonitor, FiTool 
} from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Embedded Systems',
      icon: FiCode,
      skills: [
        { name: 'Arduino', level: 88 },
        { name: 'Microcontrollers', level: 82 },
        { name: 'C Programming', level: 85 },
        { name: 'Embedded C', level: 78 },
        { name: '8051', level: 75 },
        { name: 'Raspberry Pi', level: 72 }
      ]
    },
    {
      title: 'Hardware & Design',
      icon: FiTool,
      skills: [
        { name: 'Circuit Design', level: 85 },
        { name: 'PCB Design', level: 78 },
        { name: 'IoT', level: 80 },
        { name: 'Sensors', level: 82 },
        { name: 'Simulation Tools', level: 75 },
        { name: 'Debugging', level: 88 }
      ]
    },
    {
      title: 'Soft Skills',
      icon: FiMonitor,
      skills: [
        { name: 'Project Management', level: 82 },
        { name: 'Teamwork', level: 90 },
        { name: 'Leadership', level: 78 },
        { name: 'Communication', level: 85 },
        { name: 'Time Management', level: 80 },
        { name: 'Critical Thinking', level: 88 }
      ]
    },
    {
      title: 'Languages',
      icon: FiSmartphone,
      skills: [
        { name: 'English', level: 85 },
        { name: 'Telugu', level: 95 },
        { name: 'Hindi', level: 80 },
        { name: 'Public Relations', level: 78 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center space-x-4 mb-16"
        >
          <h2 className="heading-secondary">Skills & Technologies</h2>
          <div className="flex-1 h-px bg-lightBlue"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="space-y-6">
                {/* Category Header */}
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-secondary bg-opacity-20 rounded-lg">
                    <category.icon className="text-secondary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-textPrimary">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-textSecondary text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className="text-secondary text-xs font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-darkBlue rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="h-2 bg-gradient-to-r from-secondary to-blue-500 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-textPrimary mb-8">
            Additional Skills & Interests
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Smart Home Automation', 'Energy Monitoring', 'Temperature Control', 'Light Control',
              'Circuit Simulation', 'PCB Layout', 'Component Selection', 'Troubleshooting',
              'Problem Solving', 'Team Collaboration', 'Project Management', 'Continuous Learning'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 text-textSecondary hover:text-secondary transition-colors duration-300"
              >
                <span className="text-secondary">▹</span>
                <span className="text-sm">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
