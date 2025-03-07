import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Brand Message */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Let's Build Together</h3>
            <p className="text-gray-400">
              Passionate about crafting innovative web experiences. Open to collaborations, projects, and tech discussions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><a href="#projects" className="text-gray-400 hover:text-white transition">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-white transition">Blog</a></li>
            </ul>
          </div>

          {/* Connect & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Let's Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-white transition"><Github className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><Linkedin className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><Mail className="w-6 h-6" /></a>
            </div>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} @tardigrade180. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
