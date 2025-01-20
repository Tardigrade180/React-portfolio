import React from 'react';
import { Link, Github, ExternalLink } from 'lucide-react';

const PortfolioProjects = () => {
  const projects = [
    {
      title: "25 Farm Website",
      description: "A modern website for agricultural business featuring responsive design and interactive elements.",
      image: "../src/assets/img/25farmsscreenshot.png",
      liveLink: "https://tardigrade180.github.io/farm-site/",
      githubLink: "https://github.com/Tardigrade180/farm-site",
      tech: ["React", "Tailwind CSS", "JavaScript"]
    },
    {
      title: "Ocean Guard Project",
      description: "Environmental monitoring platform focused on ocean conservation and data visualization.",
      image: "../src/assets/img/oceanguardscreenshot.png",
      liveLink: "https://tardigrade180.github.io/Anything/",
      githubLink: "https://github.com/Tardigrade180/Anything",
      tech: ["React", "Node.js", "Express"]
    }
  ];

  return (
    <section className="py-16 relative">
      {/* Background Detail */}
      <div className="absolute top-0 left-0 w-32 h-32 border border-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <header className="mb-16 space-y-2">
          <div className="flex items-center space-x-4">
            <span className="text-sm font-mono text-white/60">03.</span>
            <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
          </div>
          <div className="w-16 h-px bg-white/20" />
        </header>

        {/* Projects Grid */}
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
      {/* Image Section */}
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

      {/* Content Section */}
      <div className={`w-full md:w-1/3 flex flex-col ${isReversed ? 'md:text-right' : 'text-left'}`}>
        <div className="space-y-4">
          <div className="space-y-1">
            <span className="text-sm font-mono text-white/60">Featured Project</span>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
          </div>

          {/* Project Description */}
          <div className="relative p-6 bg-white/5 rounded-lg backdrop-blur-sm">
            <p className="text-white/80 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className={`flex gap-3 text-sm text-white/60 font-mono ${isReversed ? 'justify-end' : 'justify-start'}`}>
            {project.tech.map(tech => (
              <span key={tech}>{tech}</span>
            ))}
          </div>

          {/* Links */}
          <div className={`flex gap-4 ${isReversed ? 'justify-end' : 'justify-start'}`}>
            <a 
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors duration-300"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioProjects;