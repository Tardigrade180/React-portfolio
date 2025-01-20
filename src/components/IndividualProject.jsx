import React from 'react';
import { ArrowUpRight, Github, Folder } from 'lucide-react';

const IndividualProject = ({ project }) => {
  return (
    <div className="group relative">
      {/* Card Container */}
      <div className="relative overflow-hidden bg-black/20 backdrop-blur-sm rounded-lg border border-white/10 p-6 h-full 
        transition-all duration-500 hover:border-white/30 hover:bg-white/5">
        
        {/* Top Section */}
        <div className="flex justify-between items-start mb-6">
          <Folder className="w-10 h-10 text-white/40 group-hover:text-white transition-colors duration-300" />
          <div className="flex gap-4">
            {project.github && (
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors duration-300"
                aria-label="View Github Repository"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.link && (
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors duration-300"
                aria-label="View Live Project"
              >
                <ArrowUpRight className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-white group-hover:text-white/90 transition-colors duration-300">
            {project.title}
          </h3>
          
          <p className="text-sm text-white/60 line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack */}
          {project.technologies && (
            <div className="pt-4 mt-auto">
              <ul className="flex flex-wrap gap-2 text-xs text-white/40">
                {project.technologies.map((tech, index) => (
                  <li key={index} className="font-mono">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
};

export default IndividualProject;