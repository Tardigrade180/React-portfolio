// import React from "react";
// import { Code, Terminal, Codepen } from "lucide-react";
// import headshot from "../assets/img/headshot.jpg";

// const AboutMe = () => {
//   return (
//     <section className="py-20 relative">
//       {/* Background Detail */}
//       <div className="absolute top-0 left-0 w-24 h-24 border border-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />

//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start space-y-14 md:space-y-0 md:space-x-20 px-6 md:px-0">
//         {/* Text Section */}
//         <div className="w-full md:w-2/3 space-y-10">
//           <header className="space-y-3">
//             <div className="flex items-center space-x-4">
//               <span className="text-base font-mono text-white/60">01.</span>
//               <h2 className="text-4xl font-bold">About Me</h2>
//             </div>
//             <div className="w-20 h-px bg-white/20" />
//           </header>

//           <div className="space-y-8 text-white/80 relative">
//             <p className="text-xl leading-relaxed font-space-grotesk text-justify relative border-2 border-white/20 rounded-lg p-6 overflow-hidden glow-border">
//               Hello! My name is Abdallah, and I enjoy building things on the web. My
//               passion for software development started during my early days of
//               tinkering with web pages, and since then, I've been dedicated to
//               crafting meaningful, user-friendly digital experiences.
//               <span className="orbiting-rocket">🚀</span>
//             </p>
//           </div>
//         </div>

//         {/* Image Section */}
//         <div className="relative w-full md:w-1/2">
//           <div className="relative group">
//             {/* Image Container with Responsive Adjustments */}
//             <div className="relative z-10 overflow-hidden rounded-lg">
//               <img
//                 src={headshot}
//                 alt="Abdallah"
//                 className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
//               />
//               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500" />
//             </div>

//             {/* Decorative Frame */}
//             <div className="absolute -inset-4 border border-white/20 rounded-lg -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-500" />

//             {/* Floating Icons */}
//             <Code className="absolute -top-6 -left-6 w-8 h-8 text-white/40 animate-float" />
//             <Terminal className="absolute -bottom-6 -right-6 w-8 h-8 text-white/40 animate-float-delayed" />
//             <Codepen className="absolute top-1/2 -right-8 w-6 h-6 text-white/40 animate-float-alt" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutMe;

import React from "react";
import { Code, Terminal, Codepen } from "lucide-react";
import { motion } from "framer-motion";
import headshot from "../assets/img/headshot.jpg";

const AboutMe = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-10 left-10 w-24 h-24 border border-white/10 rounded-full blur-xl opacity-30 animate-pulse" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start space-y-14 md:space-y-0 md:space-x-20 px-6 md:px-0">
        {/* Text Section */}
        <motion.div 
          className="w-full md:w-2/3 space-y-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <header className="space-y-3">
            <div className="flex items-center space-x-4">
              <span className="text-base font-mono text-white/60">01.</span>
              <h2 className="text-4xl font-bold text-white">About Me</h2>
            </div>
            <div className="w-20 h-px bg-white/20" />
          </header>

          <div className="space-y-8 text-white/80 relative">
            <motion.p
              className="text-xl leading-relaxed font-space-grotesk text-justify relative border-2 border-white/20 rounded-lg p-6 bg-white/5 shadow-lg backdrop-blur-lg overflow-hidden glow-border"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Hello! My name is Abdallah, and I enjoy building things on the web. My
              passion for software development started during my early days of
              tinkering with web pages, and since then, I've been dedicated to
              crafting meaningful, user-friendly digital experiences.
              <span className="orbiting-rocket">🚀</span>
            </motion.p>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div 
          className="relative w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <div className="relative group">
            {/* Image Container with Responsive Adjustments */}
            <div className="relative z-10 overflow-hidden rounded-lg shadow-lg">
              <motion.img
                src={headshot}
                alt="Abdallah"
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
                whileHover={{ scale: 1.05 }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500" />
            </div>

            {/* Decorative Frame */}
            <div className="absolute -inset-4 border border-white/20 rounded-lg -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-500" />

            {/* Floating Icons */}
            <motion.div 
              className="absolute -top-6 -left-6 w-8 h-8 text-white/40 animate-float"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <Code />
            </motion.div>
            <motion.div 
              className="absolute -bottom-6 -right-6 w-8 h-8 text-white/40 animate-float-delayed"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            >
              <Terminal />
            </motion.div>
            <motion.div 
              className="absolute top-1/2 -right-8 w-6 h-6 text-white/40 animate-float-alt"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <Codepen />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;

