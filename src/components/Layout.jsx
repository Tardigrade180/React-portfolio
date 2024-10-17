import React from 'react';
import { Github, Instagram, Twitter, Linkedin } from 'lucide-react';

const Layout = ({ children }) => {
    return (
        <div className="flex h-screen bg-black text-white ">
            {/* Left sidebar */}
            <div className="w-[15%] fixed left-0 top-0 h-full flex flex-col justify-between items-center py-8">
                <div className="h-2/3 w-px bg-white" /> {/* Increased Top vertical line height */}

                <div className="h-[300px] space-y-8"> {/* Increased space between icons */}
                    <a href="https://github.com/Tardigrade180" target="_blank" rel="noopener ">
                        <Github className="w-6 h-6 hover:text-[#6366F1]" />
                    </a> <br />
                    <a href="https://www.instagram.com/wumpini_180" target="_blank" rel="noopener noreferrer">
                        <Instagram className="w-6 h-6 hover:text-[#6366F1]" />
                    </a> <br />
                    <a href="https://x.com/hussen1ab" target="_blank" rel="noopener noreferrer">
                        <Twitter className="w-6 h-6 hover:text-[#6366F1]" />
                    </a> <br />
                    <a href="https://www.linkedin.com/in/abdallahhussein180" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-6 h-6 hover:text-[#6366F1]" />
                    </a>
                </div>

                <div className="h-1/3 w-px bg-white" /> {/* Increased Bottom vertical line height */}
            </div>

            {/* Main content area */}
            <div className="w-[70%] ml-[15%] mr-[15%]  overflow-y-auto overflow-x-auto space-y-4 scrollbar-hide">
                {children}
            </div>

            {/* Right sidebar */}
            <div className="w-[15%] fixed right-0 top-0 h-full flex flex-col justify-between items-center py-8">
                <div className="h-2/3 w-px bg-white" /> {/* Increased Top vertical line height */}

                <a href="mailto:abdallahhussein595@gmail.com" className="vertical-text hover:text-[#6366F1]">
                    abdallahhussein595@gmail.com
                </a>

                <div className="h-2/3 w-px bg-white" /> {/* Increased Bottom vertical line height */}
            </div>
        </div>



    );
};

export default Layout;