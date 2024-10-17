import React from 'react';
import IndividualProject from './IndividualProject';

const ProjectList = () => {
  const projects = [
    {
      title: 'Library Management System',
      description: 'A full-stack library management application...',
      link: '/path-to-library-project',
    },
    // Add more projects as needed
  ];

  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
      {projects.map((project, index) => (
        <IndividualProject key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
