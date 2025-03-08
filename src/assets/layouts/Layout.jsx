import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Instagram, Twitter, Linkedin, Menu, X, ArrowUp } from "lucide-react";

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/Tardigrade180", label: "GitHub" },
    { icon: Instagram, href: "https://www.instagram.com/wumpini_180", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/hussen1ab", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/abdallahhussein180", label: "LinkedIn" },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-4 right-4 z-50 p-2"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-95 flex flex-col items-center justify-center space-y-8">
          <div className="flex space-x-8">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="group">
                <link.icon className="w-6 h-6 text-white group-hover:text-gray-500 transition duration-300" />
              </a>
            ))}
          </div>
          <motion.a
            href="mailto:abdallahhussein595@gmail.com"
            className="text-sm font-bold text-white"
            whileHover={{ scale: 2, color: "#f8b400" }}
            transition={{ duration: 0.3 }}
          >
            abdallahhussein595@gmail.com
          </motion.a>
        </div>
      )}

      {/* Left Sidebar */}
      <div className="hidden md:flex md:w-[15%] fixed left-0 top-0 h-full flex-col justify-between items-center py-8">
        <div className="h-2/3 w-px bg-white/30" />
        <div className="space-y-8">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              aria-label={link.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 1,
                scale: [1, 1.3, 1],
                transition: { duration: 0.6, repeat: Infinity, repeatDelay: 5 },
              }}
              whileHover={{ scale: 1.5, color: "#f8b400" }}
            >
              <link.icon className="w-8 h-8 text-white" />
            </motion.a>
          ))}
        </div>
        <div className="h-1/3 w-px bg-white/30" />
      </div>

      {/* Main Content */}
      <main className="w-full md:w-[70%] md:ml-[15%] md:mr-[15%] p-6 min-h-screen">
        <div className="max-w-4xl mx-auto">
          {children}
          {/* Resume Button */}
          <motion.a
            href="/Resume.pdf"
            className="mt-8 px-6 py-2 border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition-all duration-300 rounded block text-center"
            whileHover={{ scale: 1.2, boxShadow: "0px 0px 20px rgba(255, 255, 255, 1)" }}
          >
            Resume
          </motion.a>
        </div>
      </main>

      {/* Right Sidebar */}
      <div className="hidden md:flex md:w-[15%] fixed right-0 top-0 h-full flex-col justify-between items-center py-8">
        <div className="h-2/3 w-px bg-white/30" />
        <motion.a
          href="mailto:abdallahhussein595@gmail.com"
          className="text-sm font-bold text-white"
          initial={{ opacity: 0, rotate: 90 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          whileHover={{ scale: 3, color: "#f8b400" }}
        >
          abdallahhussein595@gmail.com
        </motion.a>
        <div className="h-1/3 w-px bg-white/30" />
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          className="fixed bottom-6 right-6 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition-all"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.2, rotate: 15 }}
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  );
};

export default Layout;
