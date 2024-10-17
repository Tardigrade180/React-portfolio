import React from 'react';
import { Circle } from 'lucide-react';

const AboutMe = () => {
  return (
    <div className="about-section max-w-3xl mx-auto text-left">
      <h1 className="text-4xl font-bold text-indigo-500">
        <span className="text-indigo-500">1.</span> About Me
      </h1>
      <hr className="border-t-2 border-gray-300 my-4 w-1/4" />
      <p className="mb-4 text-gray-600 text-lg">
        Hello! My name is Abdallah, and I enjoy building things on the web...
      </p>
      {/* List of Technologies */}
      <TechList />
    </div>
  );
};

const TechList = () => {
  return (
    <div className="p-6 border-2 border-indigo-500 rounded-lg">
      <ul className="grid grid-cols-2 gap-4 text-gray-600 text-lg">
        <li className="flex items-center group hover:text-indigo-500 transition-all duration-300 ease-in-out">
          <Circle className="text-indigo-500 mr-2 group-hover:text-indigo-700" size={16} />
          JavaScript (ES6+)
        </li>
        {/* Add more technology items here */}
      </ul>
    </div>
  );
};

export default AboutMe;
