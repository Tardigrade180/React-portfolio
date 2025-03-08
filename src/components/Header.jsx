import React, { useState, useEffect } from "react";
import { Menu, X, User, Code, Layers, Mail, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "about", icon: User, label: "About" },
    { href: "technologies", icon: Layers, label: "Technologies" },
    { href: "projects", icon: Code, label: "Projects" },
    { href: "contact", icon: Mail, label: "Contact" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-black/90 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo & Branding */}
        <div className="flex items-center space-x-4">
          <motion.img
            src="/logo.jpg"
            alt="Logo"
            className="h-10 w-10 rounded-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />

          <motion.a
            href="https://github.com/Tardigrade180"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center space-x-2 text-white transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Github className="w-7 h-7 text-white" />
            
            {/* Animated Name with Gradient */}
            <motion.span
              className="text-2xl md:text-3xl font-bold tracking-wide relative bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundImage: "linear-gradient(90deg, red, yellow, green, red)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
              }}
            >
              Tardigrade180
            </motion.span>

            {/* Small Animated Star */}
            <motion.span
              className="absolute -top-2 right-0 text-yellow-400 text-lg"
              animate={{
                y: [-3, 3, -3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ⭐
            </motion.span>
          </motion.a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ol className="flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.1 }}
              >
                <Link
                  to={item.href}
                  smooth={true}
                  spy={true}
                  duration={500}
                  offset={-70}
                  className="group flex items-center space-x-2 text-white/60 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <span className="font-mono text-xs opacity-60 group-hover:opacity-100">
                    0{index + 1}.
                  </span>
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              </motion.li>
            ))}
          </ol>

          {/* Animated Resume Button */}
          <motion.a
            href="/Resume.pdf"
            download
            className="relative px-6 py-3 text-lg font-semibold border border-white/20 text-white/90 hover:text-white transition-all duration-500 rounded-lg overflow-hidden group"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {/* Moving Gradient Background */}
            <motion.div
              className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-all duration-1000 blur-md"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundImage: "linear-gradient(90deg, red, yellow, green, red)",
                backgroundSize: "200% 200%",
                filter: "blur(10px)",
              }}
            ></motion.div>

            {/* Glow Effect on Hover */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
              style={{
                boxShadow: "0px 0px 20px rgba(255, 215, 0, 0.7)", // Gold glow
              }}
            ></motion.div>

            <span className="relative z-10">Resume</span>
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white/80 hover:text-white transition-all duration-300"
          whileHover={{ scale: 1.2 }}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 w-full bg-black/90 backdrop-blur-md shadow-lg flex flex-col items-center py-6 space-y-6 md:hidden"
          >
            {navItems.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ scale: 1.1 }}
                className="text-white/80 hover:text-white transition-all duration-300"
              >
                <Link
                  to={item.href}
                  smooth={true}
                  spy={true}
                  duration={500}
                  offset={-70}
                  className="flex items-center space-x-2 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
