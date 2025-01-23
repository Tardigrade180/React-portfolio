import React from "react";
import { Circle, Code, Terminal, Codepen } from "lucide-react";
// Import the image file directly
import headshot from "../assets/img/headshot.jpg";

const AboutMe = () => {
  return (
    <section className="py-16 relative">
      {/* Background Detail */}
      <div className="absolute top-0 left-0 w-24 h-24 border border-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start space-y-12 md:space-y-0 md:space-x-16">
        {/* Text Section */}
        <div className="w-full md:w-2/3 space-y-8">
          <header className="space-y-2">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-mono text-white/60">01.</span>
              <h2 className="text-3xl font-bold">About Me</h2>
            </div>
            <div className="w-16 h-px bg-white/20" />
          </header>

          <div className="space-y-6 text-white/80">
            <p className="text-lg leading-relaxed">
              Hello! My name is Abdallah, and I enjoy building things on the web. My
              passion for software development started during my early days of
              tinkering with web pages, and since then, I've been dedicated to
              crafting meaningful, user-friendly digital experiences.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-1/2">
          <div className="relative group">
            {/* Image Container with extended size */}
            <div className="relative z-10 overflow-hidden rounded-lg h-full md:h-[450px]">
              <img
                src={headshot}
                alt="Abdallah"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500" />
            </div>
            
            {/* Decorative Frame */}
            <div className="absolute -inset-4 border border-white/20 rounded-lg -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-500" />
            
            {/* Floating Icons */}
            <Code className="absolute -top-6 -left-6 w-8 h-8 text-white/40 animate-float" />
            <Terminal className="absolute -bottom-6 -right-6 w-8 h-8 text-white/40 animate-float-delayed" />
            <Codepen className="absolute top-1/2 -right-8 w-6 h-6 text-white/40 animate-float-alt" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
