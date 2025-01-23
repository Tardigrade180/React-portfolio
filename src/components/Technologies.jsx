import React from "react";
import { Circle } from "lucide-react";

const Technologies = () => {
  const technologies = [
    "HTML",
    "JavaScript (ES6+)",
    "React.js",
    "Tailwind CSS",
    "Git",
    "REST APIs",
  ];

  const softSkills = [
    "Effective Communication",
    "Problem-Solving",
    "Time Management",
    "Adaptability",
    "Attention to Detail",
    "Client Relationship Management",
    "Self-Motivation",
    "Team Collaboration",
  ];

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Technologies Section */}
        <div className="space-y-8">
          <header className="space-y-2">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-mono text-white/60">02.</span>
              <h2 className="text-3xl font-bold text-white">Technologies</h2>
            </div>
            <div className="w-16 h-px bg-white/20" />
          </header>

          <div className="grid grid-cols-2 gap-y-3 gap-x-8">
            {technologies.map((tech, index) => (
              <TechItem key={index} name={tech} />
            ))}
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="space-y-8">
          <header className="space-y-2">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-mono text-white/60">03.</span>
              <h2 className="text-3xl font-bold text-white">Soft Skills</h2>
            </div>
            <div className="w-16 h-px bg-white/20" />
          </header>

          <div className="grid grid-cols-2 gap-y-3 gap-x-8">
            {softSkills.map((skill, index) => (
              <TechItem key={index} name={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TechItem = ({ name }) => (
  <div className="flex items-center space-x-2 group">
    <Circle className="w-1.5 h-1.5 text-white/40 group-hover:text-white transition-colors duration-300" />
    <span className="text-sm text-white/60 group-hover:text-white transition-colors duration-300">
      {name}
    </span>
  </div>
);

export default Technologies;
