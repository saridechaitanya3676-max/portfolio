import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
// Import project images from assets
import smartHomeImage from '../assets/smart-home-automation.jpg';
import circuitDesignImage from '../assets/CircuitDesign.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Home Automation System',
      description: 'Designed and implemented a comprehensive smart home automation system using Arduino and various sensors. Features include light control, temperature monitoring, and energy saving capabilities.',
      image: smartHomeImage,
      technologies: ['Arduino', 'C Programming', 'Embedded C', 'IoT', 'Sensors', 'Smart Home'],
      github: 'https://github.com/badavathkumar811-bit/smart-home-automation',
      live: '#',
      featured: true
    },
    {
      title: 'Circuit Design & Testing',
      description: 'Worked on basic circuit design and testing using simulation tools. Assisted in developing small embedded projects using Arduino and microcontrollers.',
      image: circuitDesignImage,
      technologies: ['Circuit Design', 'Arduino', 'Microcontrollers', 'PCB Design', 'Simulation Tools'],
      github: 'https://github.com/badavathkumar811-bit/circuit-design',
      live: '#',
      featured: true
    },
    {
      title: 'Temperature Monitoring System',
      description: 'Developed a temperature monitoring system using Arduino and temperature sensors for environmental monitoring and data logging.',
      image: circuitDesignImage,
      technologies: ['Arduino', 'Temperature Sensors', 'C Programming', 'Data Logging', 'IoT'],
      github: 'https://github.com/badavathkumar811-bit/temperature-monitor',
      live: '#',
      featured: false
    },
    {
      title: 'LED Control System',
      description: 'Created an LED control system with various lighting patterns and remote control capabilities using Arduino.',
      image: circuitDesignImage,
      technologies: ['Arduino', 'LED Control', 'Remote Control', 'Pattern Generation', 'C Programming'],
      github: 'https://github.com/badavathkumar811-bit/led-control',
      live: '#',
      featured: false
    },
    {
      title: 'Energy Monitoring Device',
      description: 'Designed an energy monitoring device to track power consumption and provide energy-saving recommendations.',
      image: circuitDesignImage,
      technologies: ['Arduino', 'Energy Monitoring', 'Current Sensors', 'Data Analysis', 'IoT'],
      github: 'https://github.com/badavathkumar811-bit/energy-monitor',
      live: '#',
      featured: false
    },
    {
      title: 'IoT Workshop Projects',
      description: 'Attended workshop on IoT & Embedded Systems. Gained hands-on experience with microcontrollers including 8051, Arduino, and Raspberry Pi.',
      image: circuitDesignImage,
      technologies: ['IoT', '8051', 'Arduino', 'Raspberry Pi', 'Embedded Systems', 'Electronics'],
      github: 'https://github.com/badavathkumar811-bit/iot-workshop',
      live: '#',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center space-x-4 mb-16"
        >
          <h2 className="heading-secondary">Some Things I've Built</h2>
          <div className="flex-1 h-px bg-lightBlue"></div>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group">
                  <div className="w-full h-80 bg-darkBlue border border-lightBlue rounded-lg overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-secondary bg-opacity-20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Project Content */}
              <div className={`space-y-4 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <p className="text-secondary font-mono text-sm">Featured Project</p>
                <h3 className="text-2xl font-semibold text-textPrimary">{project.title}</h3>
                <div className="bg-darkBlue p-6 rounded-lg border border-lightBlue">
                  <p className="text-textSecondary">{project.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="text-xs text-textSecondary font-mono"
                    >
                      {tech}{techIndex < project.technologies.length - 1 ? ' /' : ''}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textSecondary hover:text-secondary transition-colors duration-300"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textSecondary hover:text-secondary transition-colors duration-300"
                  >
                    <FiExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl font-semibold text-textPrimary mb-8"
          >
            Other Noteworthy Projects
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="text-secondary">
                      <FiExternalLink size={20} />
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-textSecondary hover:text-secondary transition-colors duration-300"
                    >
                      <FiGithub size={20} />
                    </a>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-textPrimary mb-2">
                      {project.title}
                    </h4>
                    <p className="text-textSecondary text-sm mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-textSecondary font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
