import React from 'react';
import { Github, ExternalLink, ArrowUpRight, Folder } from 'lucide-react';

// Import images
import ecommercePlatformImage from '../assets/img/update-service-hub.jpg';
import taskManagementImage from '../assets/img/todoapp.jpg';
import adCraftImage from '../assets/img/adspic.jpg';
import libraryManagementImage from '../assets/img/livrarypic.jpg';
const oceanGuardImage = new URL("../assets/img/oceanguardsscreenshot.png", import.meta.url).href;

const projects = [
  {
    title: "E-commerce Platform",
    description: "Modern e-commerce solution with real-time inventory management, secure payment processing, and responsive design.",
    image: ecommercePlatformImage,
    liveLink: "https://service-hub-pro.netlify.app/",
    githubLink: "https://github.com/username/ecommerce-project",
    tech: ["React.js", "Tailwind", "Prisma", "PostgreSQL"]
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, task assignments, and progress tracking features.",
    image: taskManagementImage,
    liveLink: "https://todoapp-100.netlify.app/",
    githubLink: "https://github.com/username/task-manager",
    tech: ["Vue.js", "Firebase", "Vuex", "TailwindCSS"]
  },
  {
    title: "Advertisement-Web-App",
    description: "AI-powered digital advertising platform with real-time campaign optimization, audience targeting, and performance analytics.",
    image: adCraftImage,
    liveLink: "https://adcraft-pro.com",
    githubLink: "https://github.com/Rundiva/Advertisement-Web-App",
    tech: ["React", "Machine Learning", "Google Ads API", "ChartJS"]
  },
  {
    title: "Library Management System",
    description: "A full-stack library management application built with React and Node.js.",
    image: libraryManagementImage,
    liveLink: "https://library-project.com",
    githubLink: "https://github.com/Rundiva/library-app",
    tech: ["React", "Node.js", "MongoDB", "Express"]
  },
];