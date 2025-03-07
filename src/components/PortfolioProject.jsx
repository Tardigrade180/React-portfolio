import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight, Folder } from 'lucide-react';

import ecommercePlatformImage from '../assets/img/artisam.jpg';
import taskManagementImage from '../assets/img/todoapp.jpg';
import adCraftImage from '../assets/img/adspic.jpg';
import libraryManagementImage from '../assets/img/livrarypic.jpg';

const projects = [
  {
    title: "E-commerce Platform",
    description: "Modern e-commerce solution with real-time inventory management, secure payment processing, and responsive design.",
    image: ecommercePlatformImage,
    liveLink: "https://service-hub-pro.netlify.app/",
    githubLink: "https://github.com/username/ecommerce-project",
    tech: ["Next.js", "Stripe", "Prisma", "PostgreSQL"]
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, task assignments, and progress tracking features.",
    image: taskManagementImage,
    liveLink: "https://todoapp-100.netlify.app/",
    githubLink: "https://github.com/username/task-manager",
    tech: ["Vue.js", "Firebase", "Vuex", "TailwindCSS"]
  },
  {
    title: "Advertisement Web App",
    description: "AI-powered digital advertising platform with real-time campaign optimization, audience targeting, and performance analytics.",
    image: adCraftImage,
    liveLink: "https://adcraft-pro.com",
    githubLink: "https://github.com/Rundiva/Advertisement-Web-App",
    tech: ["React", "Machine Learning", "Google Ads API", "ChartJS"]
  },
  {
    title: "Library Management System",
    description: "A full-stack library management application built with React and Node.js.",
    image: libraryManagementImage,
    liveLink: "https://library-project.com",
    githubLink: "https://github.com/Rundiva/library-app",
    tech: ["React", "Node.js", "MongoDB", "Express"]
  }
];

const PortfolioProjects = () => {
  return (
    <section className="py-16 relative">
      <div className="max-w-5xl mx-auto px-4">
        <header className="mb-16 space-y-2">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4"
          >
            <span className="text-sm font-mono text-white/60">04.</span>
            <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
          </motion.div>
          <div className="w-16 h-px bg-white/20" />
        </header>
        
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <IndividualProject key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const IndividualProject = ({ project, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group relative bg-black/20 backdrop-blur-sm rounded-lg border border-white/10 p-6 transition-all duration-500 hover:border-white/30 hover:bg-white/5"
    >
      <div className="flex justify-between items-start mb-6">
        <Folder className="w-10 h-10 text-white/40 group-hover:text-white transition-colors duration-300" />
        <div className="flex gap-4">
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors duration-300">
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors duration-300">
              <ArrowUpRight className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
      
      {project.image && (
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
      )}
      
      <h3 className="text-lg font-medium text-white group-hover:text-white/90 transition-colors duration-300">
        {project.title}
      </h3>
      <p className="text-sm text-white/60 mt-2">{project.description}</p>
      
      <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/40">
        {project.tech.map((tech, index) => (
          <span key={index} className="font-mono bg-gray-800 px-2 py-1 rounded-md">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default PortfolioProjects;
