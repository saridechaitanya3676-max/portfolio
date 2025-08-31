import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCode, FiDatabase, FiCloud, FiSmartphone, FiMonitor, FiTool 
} from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Technical Skills',
      icon: FiCode,
      skills: [
        { name: 'EV Charger Manufacturing Process', level: 85 },
        { name: 'C Programming', level: 75 },
        { name: 'Computer Knowledge', level: 80 },
        { name: 'Soldering', level: 88 },
        { name: 'Primary Testing', level: 82 },
        { name: 'Visual Inspection', level: 85 }
      ]
    },
    {
      title: 'Work Experience',
      icon: FiTool,
      skills: [
        { name: 'Final Testing', level: 80 },
        { name: 'Software Dumping', level: 75 },
        { name: 'Quality Assurance', level: 82 },
        { name: 'Circuit Design', level: 78 },
        { name: 'Component Testing', level: 85 },
        { name: 'Manufacturing Process', level: 88 }
      ]
    },
    {
      title: 'Education & Certifications',
      icon: FiMonitor,
      skills: [
        { name: 'Diploma in ECE', level: 70 },
        { name: 'SSC Education', level: 85 },
        { name: 'B.Tech ECE (Ongoing)', level: 75 },
        { name: 'UNXT Certification', level: 90 },
        { name: 'Academic Projects', level: 80 },
        { name: 'Industrial Training', level: 85 }
      ]
    },
    {
      title: 'Languages',
      icon: FiSmartphone,
      skills: [
        { name: 'English', level: 85 },
        { name: 'Telugu', level: 95 },
        { name: 'Communication Skills', level: 80 },
        { name: 'Technical Writing', level: 75 }
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
              'Fire Fighting Robot', 'Smart Parking System', 'Smart Attendance System', 'Smart Classroom System',
              'Playing Games', 'Visiting New Places', 'Watching Movies', 'Problem Solving',
              'Team Collaboration', 'Continuous Learning', 'Quality Control', 'Manufacturing Processes'
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
