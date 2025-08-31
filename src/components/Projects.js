import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'Fire Fighting Robot',
      description: 'Designed and developed an autonomous fire fighting robot capable of detecting and extinguishing fires. The robot uses sensors to detect fire and automatically navigates to the source to extinguish it.',
      image: '/fire.jpg',
      imageDimensions: { width: 682, height: 610 },
      technologies: ['Arduino', 'Fire Detection Sensors', 'Motor Control', 'C Programming', 'Autonomous Navigation', 'Safety Systems'],
      github: 'https://github.com/saridechaitanya/fire-fighting-robot',
      live: '#',
      featured: true
    },
    {
      title: 'Smart Parking System',
      description: 'Developed an intelligent parking system that automatically detects available parking spots and guides vehicles to empty spaces. The system uses sensors and displays real-time parking availability.',
      image: '/smartparking.jpg',
      imageDimensions: { width: 750, height: 532 },
      technologies: ['IoT Sensors', 'Display Systems', 'C Programming', 'Automation', 'Real-time Monitoring', 'User Interface'],
      github: 'https://github.com/saridechaitanya/smart-parking-system',
      live: '#',
      featured: true
    },
    {
      title: 'Smart Attendance System',
      description: 'Created an automated attendance system using RFID or biometric technology to track student attendance efficiently. The system provides real-time attendance reports and analytics.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      technologies: ['RFID Technology', 'Database Management', 'C Programming', 'Automation', 'Reporting System', 'User Management'],
      github: 'https://github.com/saridechaitanya/smart-attendance-system',
      live: '#',
      featured: false
    },
    {
      title: 'Smart Classroom System',
      description: 'Designed an integrated smart classroom system that automates various classroom functions including lighting, temperature control, and multimedia equipment management.',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      technologies: ['IoT', 'Automation', 'C Programming', 'Sensor Integration', 'Control Systems', 'Classroom Management'],
      github: 'https://github.com/saridechaitanya/smart-classroom-system',
      live: '#',
      featured: false
    },
    {
      title: 'EV Charger Manufacturing Process',
      description: 'Gained hands-on experience in the manufacturing process of three-wheeler EV chargers during industrial training at AXIOM ENERGY CONVERSION Pvt. ltd.',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      technologies: ['EV Charger Manufacturing', 'Quality Control', 'Testing Procedures', 'Component Assembly', 'Safety Standards', 'Production Process'],
      github: 'https://github.com/saridechaitanya/ev-charger-manufacturing',
      live: '#',
      featured: false
    },
    {
      title: 'Academic Projects Portfolio',
      description: 'Collection of various academic projects completed during diploma studies including circuit design, testing, and practical electronics applications.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80',
      technologies: ['Circuit Design', 'Electronics', 'C Programming', 'Soldering', 'Testing', 'Academic Projects'],
      github: 'https://github.com/saridechaitanya/academic-projects',
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
                  <div 
                    className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-lg"
                    style={{
                      width: project.imageDimensions ? `${project.imageDimensions.width}px` : '100%',
                      height: project.imageDimensions ? `${project.imageDimensions.height}px` : '320px',
                      maxWidth: '100%',
                      maxHeight: '400px'
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center'
                      }}
                      onError={(e) => {
                        console.log('Image failed to load:', project.title, project.image);
                        e.target.style.display = 'none';
                        e.target.parentElement.style.background = 'linear-gradient(45deg, #ff6b35, #f7931e)';
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Project Content */}
              <div className={`space-y-4 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <p className="text-orange-500 font-mono text-sm">Featured Project</p>
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                  <p className="text-gray-300">{project.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
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
            className="text-xl font-semibold text-white mb-8"
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
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 group hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="text-orange-500">
                      <FiExternalLink size={20} />
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                    >
                      <FiGithub size={20} />
                    </a>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {project.title}
                    </h4>
                    <p className="text-gray-300 text-sm mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium"
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
