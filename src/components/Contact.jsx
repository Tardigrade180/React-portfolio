import React, { useRef } from "react";
import { Mail, MessageCircle } from "lucide-react";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.3 }); // Triggers when 30% of the section is in view

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center min-h-screen px-4 bg-black text-white relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-radial from-gray-900 via-black to-gray-900 animate-pulse opacity-50"></div>

      {/* Title: Get in Touch */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-20 mb-6 text-white text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Get in Touch
      </motion.h1>

      {/* Funny African-Inspired Welcome Message */}
      <motion.p
        className="text-sm sm:text-lg mb-8 text-gray-300 text-center max-w-xl px-2"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        Hey there! 👋 Feel free to message me. I promise I won’t ignore you...
        unless you start with **‘I hope this message finds you well’**—because, my friend,
        in Africa, we all know **life is finding us anyhow!** 🤣
      </motion.p>

      <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 mt-4 relative z-10">
        {/* Gmail */}
        <motion.a
          href="mailto:abdallahhussein595@gmail.com?subject=Hello&body=I%20hope%20this%20message%20finds%20you%20well...%20(just%20kidding!%20😂)%20"
          className="group flex flex-col items-center justify-center w-48 h-48 sm:w-64 sm:h-64 bg-white text-black rounded-full shadow-lg relative transition-all focus:ring-4 focus:ring-red-500"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95, rotate: 3 }}
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-red-500 opacity-0 group-hover:opacity-30 group-focus:opacity-30 transition-all duration-300 blur-xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <Mail
            size={70}
            className="sm:size-110 group-hover:text-red-500 group-focus:text-red-500 transition-colors duration-300"
          />
          <span className="mt-3 text-xl sm:text-3xl font-semibold group-hover:text-red-500 group-focus:text-red-500">
            Gmail
          </span>
        </motion.a>

        {/* WhatsApp */}
        <motion.a
          href="https://wa.me/0541054858"
          className="group flex flex-col items-center justify-center w-48 h-48 sm:w-64 sm:h-64 bg-white text-black rounded-full shadow-lg relative transition-all focus:ring-4 focus:ring-green-500"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95, rotate: -3 }}
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-green-500 opacity-0 group-hover:opacity-30 group-focus:opacity-30 transition-all duration-300 blur-xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <MessageCircle
            size={70}
            className="sm:size-110 group-hover:text-green-500 group-focus:text-green-500 transition-colors duration-300"
          />
          <span className="mt-3 text-xl sm:text-3xl font-semibold group-hover:text-green-500 group-focus:text-green-500">
            WhatsApp
          </span>
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
