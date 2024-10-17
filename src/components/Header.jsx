import React, { useState } from 'react';
import { Menu, X, User, Briefcase, Code, Mail, Github } from 'lucide-react'; // Import Github icon
import logo from '../assets/img/logo.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const lightGreen = 'bg-[#6366F1]';
  const hoverWhite = 'hover:text-white';

  return (
    <header className={`fixed w-full top-0 z-50 ${lightGreen} text-black`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-[70px] w-[70px]" />
          {/* Github Icon */}
          <Github className="w-8 h-8 text-white" />
          {/* Name Container */}
          <div className="tracking-in-expand font-bold text-xl text-white flex items-center">
            <span className="text-white">Tardigrade</span>
            <span>180</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <ol className="flex space-x-8">
            <li>
              <a href="#about" className={`flex items-center ${hoverWhite}`}>
                <User className="mr-2" size={24} /> About
              </a>
            </li>
            <li>
              <a href="#experience" className={`flex items-center ${hoverWhite}`}>
                <Briefcase className="mr-2" size={24} /> Experience
              </a>
            </li>
            <li>
              <a href="#work" className={`flex items-center ${hoverWhite}`}>
                <Code className="mr-2" size={24} /> Work
              </a>
            </li>
            <li>
              <a href="#contact" className={`flex items-center ${hoverWhite}`}>
                <Mail className="mr-2" size={24} /> Contact
              </a>
            </li>
          </ol>
          <a href="/public/Resume.pdf" className={`px-4 py-2 border border-black ${hoverWhite} hover:bg-black hover:bg-opacity-1 rounded`}>
            Resume
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden p-2 rounded-full hover:bg-black hover:bg-opacity-10">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 bg-white shadow-lg">
          <nav className="flex flex-col space-y-4 px-4 py-2">
            <ol className="flex flex-col space-y-4">
              <li>
                <a href="#about" className={`flex items-center ${hoverWhite}`}>
                  <User className="mr-2" size={24} /> About
                </a>
              </li>
              <li>
                <a href="#experience" className={`flex items-center ${hoverWhite}`}>
                  <Briefcase className="mr-2" size={24} /> Experience
                </a>
              </li>
              <li>
                <a href="#work" className={`flex items-center ${hoverWhite}`}>
                  <Code className="mr-2" size={24} /> Work
                </a>
              </li>
              <li>
                <a href="#contact" className={`flex items-center ${hoverWhite}`}>
                  <Mail className="mr-2" size={24} /> Contact
                </a>
              </li>
            </ol>
            <a href="/public/Resume.pdf" className={`px-4 py-2 border border-black ${hoverWhite} hover:bg-black hover:bg-opacity-10 rounded text-center`}>
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
