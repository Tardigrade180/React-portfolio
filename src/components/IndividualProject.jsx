import React from 'react';

const IndividualProject = ({ project }) => {
  return (
    <div className="bg-black/40 shadow-lg rounded-lg p-6 border border-white/20 hover:border-[#6366F1] transition-all duration-300">
      <h2 className="text-xl font-semibold text-[#6366F1]">{project.title}</h2>
      <p className="text-gray-300 mt-2">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        className="mt-4 inline-block text-white hover:text-[#6366F1] transition-colors duration-300"
      >
        View Project
      </a>
    </div>
  );
};

export default IndividualProject;
