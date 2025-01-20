import React, { useEffect, useState } from 'react';
import { Github, Instagram, Twitter, Linkedin, Menu, X } from 'lucide-react';

const Layout = ({ children }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Close mobile menu when window is resized to desktop size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const socialLinks = [
        { icon: Github, href: 'https://github.com/Tardigrade180', label: 'GitHub' },
        { icon: Instagram, href: 'https://www.instagram.com/wumpini_180', label: 'Instagram' },
        { icon: Twitter, href: 'https://x.com/hussen1ab', label: 'Twitter' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/abdallahhussein180', label: 'LinkedIn' }
    ];

    return (
        <div className="relative min-h-screen bg-black text-white">
            {/* Mobile Menu Button */}
            <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden fixed top-4 right-4 z-50 p-2"
            >
                {isMobileMenuOpen ? (
                    <X className="w-6 h-6" />
                ) : (
                    <Menu className="w-6 h-6" />
                )}
            </button>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-95 flex flex-col items-center justify-center space-y-8">
                    <div className="flex space-x-8">
                        {socialLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group"
                                aria-label={link.label}
                            >
                                <link.icon className="w-6 h-6 text-white group-hover:text-gray-500 transition duration-300" />
                            </a>
                        ))}
                    </div>
                    <a
                        href="mailto:abdallahhussein595@gmail.com"
                        className="text-sm font-bold text-white hover:text-gray-500 transition duration-300"
                    >
                        abdallahhussein595@gmail.com
                    </a>
                </div>
            )}

            {/* Left Sidebar */}
            <div className="hidden md:flex md:w-[15%] fixed left-0 top-0 h-full flex-col justify-between items-center py-8">
                <div className="h-2/3 w-px bg-white/30" />
                <div className="space-y-8">
                    {socialLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                            aria-label={link.label}
                        >
                            <link.icon className="w-8 h-8 text-white group-hover:text-gray-500 transition-all duration-300 transform group-hover:scale-110" />
                        </a>
                    ))}
                </div>
                <div className="h-1/3 w-px bg-white/30" />
            </div>

            {/* Main Content */}
            <main className="w-full md:w-[70%] md:ml-[15%] md:mr-[15%] p-6 min-h-screen">
                <div className="max-w-4xl mx-auto">
                    {children}
                </div>
            </main>

            {/* Right Sidebar */}
            <div className="hidden md:flex md:w-[15%] fixed right-0 top-0 h-full flex-col justify-between items-center py-8">
                <div className="h-2/3 w-px bg-white/30" />
                <a
                    href="mailto:abdallahhussein595@gmail.com"
                    className="transform rotate-90 whitespace-nowrap text-sm font-bold text-white hover:text-gray-500 transition-all duration-300 hover:scale-105"
                >
                    abdallahhussein595@gmail.com
                </a>
                <div className="h-1/3 w-px bg-white/30" />
            </div>
        </div>
    );
};

export default Layout;