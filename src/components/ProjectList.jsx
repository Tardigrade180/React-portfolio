import React from 'react';
import IndividualProject from './IndividualProject';

const ProjectList = () => {
  const projects = [
    {
      title: 'Library Management System',
      description: 'A full-stack library management application built with React and Node.js. Features include user authentication, book tracking, and automated notifications.',
      link: 'https://library-project.com',
      github: 'https://github.com/username/library-project',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express']
    },
    {
      title: 'E-commerce Platform',
      description: 'Modern e-commerce solution with real-time inventory management, secure payment processing, and responsive design.',
      link: 'https://ecommerce-project.com',
      github: 'https://github.com/username/ecommerce-project',
      technologies: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL']
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather monitoring application with interactive maps and detailed forecasts using weather API integration.',
      link: 'https://weather-dashboard.com',
      github: 'https://github.com/username/weather-dashboard',
      technologies: ['React', 'OpenWeather API', 'ChartJS', 'TailwindCSS']
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, task assignments, and progress tracking features.',
      link: 'https://task-manager.com',
      github: 'https://github.com/username/task-manager',
      technologies: ['Vue.js', 'Firebase', 'Vuex', 'TailwindCSS']
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Archive Projects Header */}
        <header className="mb-12 space-y-2">
          <div className="flex items-center space-x-4">
            <span className="text-sm font-mono text-white/60">04.</span>
            <h2 className="text-2xl font-bold text-white">Archive</h2>
          </div>
          <p className="text-white/60">Other noteworthy projects</p>
        </header>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="opacity-0 animate-fade-in"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <IndividualProject project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;