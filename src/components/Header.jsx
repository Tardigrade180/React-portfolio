import React, { useState, useEffect } from "react";
import { Menu, X, User, Briefcase, Code, Mail, Github } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", icon: User, label: "About" },
    { href: "#experience", icon: Briefcase, label: "Experience" },
    { href: "#work", icon: Code, label: "Work" },
    { href: "#contact", icon: Mail, label: "Contact" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-sm" : "bg-black"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo & Branding */}
          <div className="flex items-center space-x-4">
            <img
              src="/src/assets/img/logo.jpg" // Ensure the image is in the public folder
              alt="Logo"
              className="h-8 w-8 rounded-full object-cover hover:scale-105 transition-all duration-300"
            />
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/Tardigrade180"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity duration-300"
              >
                <Github className="w-6 h-6 text-white" />
              </a>
              <div className="font-mono text-white">
                <span className="font-bold">Tardigrade</span>
                <span className="text-white/60">180</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ol className="flex items-center space-x-8">
              {navItems.map((item, index) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group flex items-center space-x-2 text-white/60 hover:text-white transition-colors duration-300"
                  >
                    <span className="font-mono text-xs opacity-60 group-hover:opacity-100">
                      0{index + 1}.
                    </span>
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ol>
            <a
              href="/src/assets/img/Resumeupdate.pdf"
              className="px-4 py-2 border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition-all duration-300 rounded text-sm"
            >
              Resume
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white/80 hover:text-white transition-colors duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-black/95 backdrop-blur-sm transition-transform duration-300 flex flex-col items-center justify-center space-y-8 md:hidden ${
            isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
          }`}
        >
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="group flex flex-col items-center space-y-2 text-white/60 hover:text-white transition-colors duration-300"
            >
              <span className="font-mono text-xs opacity-60 group-hover:opacity-100">
                0{index + 1}.
              </span>
              <div className="flex items-center space-x-2">
                <item.icon className="w-5 h-5" />
                <span className="text-lg">{item.label}</span>
              </div>
            </a>
          ))}
          <a
            href="/Resumeupdate.pdf"
            className="mt-8 px-6 py-2 border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition-all duration-300 rounded"
          >
            Resume
          </a>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-5 right-5 text-white hover:opacity-70 transition-opacity duration-300"
          >
            <X className="w-8 h-8" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
