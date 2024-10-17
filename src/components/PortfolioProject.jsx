import React from 'react';
import farmScreenshot from './assets/img/25farmsscreenshot.png';
import oceanGuardScreenshot from './assets/img/oceanguardscreenshot.png';
import { Link } from 'lucide-react';

const PortfolioProjects = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-indigo-500 text-center">3. PROJECTS</h1>
      <hr className="border-t-2 border-gray-300 my-4 w-1/4 mx-auto" />
      <ProjectImage title="25 Farm Website" image={farmScreenshot} link="https://tardigrade180.github.io/farm-site/" />
      <ProjectImage title="Ocean Guard Project" image={oceanGuardScreenshot} link="https://tardigrade180.github.io/Anything/" />
    </div>
  );
};

const ProjectImage = ({ title, image, link }) => {
  return (
    <div className="mb-8">
      <img className="w-full h-auto object-cover rounded-lg shadow-md mb-4" src={image} alt={title} />
      <h4 className="text-2xl font-semibold text-gray-700 mt-4">{title}</h4>
      <button className="mt-4 inline-flex items-center px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-all duration-200">
        <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center">
          <Link className="mr-2" size={16} /> PREVIEW
        </a>
      </button>
    </div>
  );
};

export default PortfolioProjects;
