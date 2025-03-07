import React from "react";
import { Circle } from "lucide-react";
import { motion } from "framer-motion";

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
        <Section title="Technologies" number="02">
          <GridList items={technologies} />
        </Section>

        {/* Soft Skills Section */}
        <Section title="Soft Skills" number="03">
          <GridList items={softSkills} />
        </Section>
      </div>
    </section>
  );
};

// Section Component
const Section = ({ title, number, children }) => (
  <div className="space-y-8">
    <header className="space-y-2">
      <div className="flex items-center space-x-4">
        <span className="text-sm font-mono text-white/60">{number}.</span>
        <h2 className="text-3xl font-bold text-white">{title}</h2>
      </div>
      <div className="w-16 h-px bg-white/20" />
    </header>
    {children}
  </div>
);

// Grid List Component with Scroll Animation
const GridList = ({ items }) => (
  <motion.div
    className="grid grid-cols-2 gap-y-3 gap-x-8"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.2 }}
    variants={containerVariants}
  >
    {items.map((item, index) => (
      <TechItem key={index} name={item} index={index} />
    ))}
  </motion.div>
);

// Tech Item Component with Animation
const TechItem = ({ name, index }) => (
  <motion.div
    className="flex items-center space-x-2 group bg-white/5 rounded-lg px-3 py-2 transition-all duration-300 hover:bg-white/10 hover:scale-105"
    variants={itemVariants}
    custom={index}
  >
    <Circle className="w-2 h-2 text-white/40 group-hover:text-green-400 transition-colors duration-300" />
    <span className="text-sm text-white/60 group-hover:text-white transition-colors duration-300">
      {name}
    </span>
  </motion.div>
);

// Framer Motion Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { staggerChildren: 0.15, ease: "easeOut" } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.4, ease: "easeOut" }
  })
};

export default Technologies;
