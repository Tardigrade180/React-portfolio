import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

// Import images
import ecommercePlatformImage from '../assets/img/artisam.jpg';
import taskManagementImage from '../assets/img/todoapp.jpg';
import adCraftImage from '../assets/img/adspic.jpg';
import libraryManagementImage from '../assets/img/livrarypic.jpg';

// Dynamic import for missing or problematic images
const oceanGuardImage = new URL("../assets/img/oceanguardsscreenshot.png", import.meta.url).href;

const PortfolioProjects = () => {
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
  //  {
  //    title: "Ocean Guard Project",
  //    description: "Environmental monitoring platform focused on ocean conservation and data visualization.",
  //    image: oceanGuardImage,
  //    liveLink: "https://tardigrade180.github.io/Anything/",
  //    githubLink: "https://github.com/Tardigrade180/Anything",
  //    tech: ["React", "Node.js", "Express"]
  //  },
   {
     title: "Advertisement-Web-App",
     description: "AI-powered digital advertising platform with real-time campaign optimization, audience targeting, and performance analytics.",
     image: adCraftImage,
     liveLink: "https://adcraft-pro.com",
     githubLink: "https://github.com/Rundiva/Advertisement-Web-App",
     tech: ["React", "Machine Learning", "Google Ads API", "ChartJS"]
   },
   {
     title: "Library Management System",
     description: "A full-stack library management application built with React and Node.js. Features include user authentication, book tracking, and automated notifications.",
     image: libraryManagementImage,
     liveLink: "https://library-project.com",
     githubLink: "https://github.com/Rundiva/library-app",
     tech: ["React", "Node.js", "MongoDB", "Express"]
   },
 ];

 return (
   <section className="py-16 relative">
     <div className="max-w-5xl mx-auto px-4">
       <header className="mb-16 space-y-2">
         <div className="flex items-center space-x-4">
           <span className="text-sm font-mono text-white/60">04.</span>
           <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
         </div>
         <div className="w-16 h-px bg-white/20" />
       </header>
       <div className="space-y-24">
         {projects.map((project, index) => (
           <ProjectCard 
             key={project.title}
             project={project}
             isReversed={index % 2 !== 0}
           />
         ))}
       </div>
     </div>
   </section>
 );
};

const ProjectCard = ({ project, isReversed }) => {
 return (
   <div className={`relative flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8`}>
     <div className="relative w-full md:w-2/3 group">
       <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="block">
         <div className="relative overflow-hidden rounded-lg">
           <img 
             src={project.image} 
             alt={project.title}
             className="w-full aspect-video object-cover transform transition-transform duration-500 group-hover:scale-105"
           />
           <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500" />
         </div>
       </a>
     </div>
     <div className={`w-full md:w-1/3 flex flex-col ${isReversed ? 'md:text-right' : 'text-left'}`}>
       <div className="space-y-4">
         <div className="space-y-1">
           <span className="text-sm font-mono text-white/60">Featured Project</span>
           <h3 className="text-xl font-bold text-white">{project.title}</h3>
         </div>
         <div className="relative p-6 bg-white/5 rounded-lg backdrop-blur-sm">
           <p className="text-white/80 text-sm leading-relaxed">
             {project.description}
           </p>
         </div>
         <div className={`flex gap-3 text-sm text-white/60 font-mono ${isReversed ? 'justify-end' : 'justify-start'}`}>
           {project.tech.map(tech => (
             <span key={tech}>{tech}</span>
           ))}
         </div>
         <div className={`flex gap-4 ${isReversed ? 'justify-end' : 'justify-start'}`}>
           <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors duration-300">
             <Github className="w-5 h-5" />
           </a>
           <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors duration-300">
             <ExternalLink className="w-5 h-5" />
           </a>
         </div>
       </div>
     </div>
   </div>
 );
};

export default PortfolioProjects;
