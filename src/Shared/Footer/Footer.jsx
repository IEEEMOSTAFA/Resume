import React, { useState, useEffect } from 'react';
import { Linkedin, Facebook, Github, Mail } from 'lucide-react';

export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <footer className="bg-gradient-to-t from-gray-900 via-black to-transparent border-t border-gray-800 relative">
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    
                    {/* Contact Info */}
                    <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '300ms'}}>
                        <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                            Get In Touch
                        </h3>
                        <div className="space-y-4">
                            {/* WhatsApp */}
                            <a 
                                href="https://wa.me/8801889271256" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 group"
                            >
                                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.488"/>
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-medium">WhatsApp</p>
                                    <p className="text-sm text-gray-400">+880 1889 271256</p>
                                </div>
                            </a>

                            {/* Email */}
                            <a 
                                href="mailto:skmostafa8888@gmail.com"
                                className="flex items-center text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 group"
                            >
                                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                                    <Mail className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <p className="font-medium">Email</p>
                                    <p className="text-sm text-gray-400">skmostafa8888@gmail.com</p>
                                </div>
                            </a>

                            {/* Address */}
                            <div className="flex items-center text-gray-300 group">
                                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-all duration-300">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-medium">Address</p>
                                    <p className="text-sm text-gray-400">Shantinagar, Bakolia Access Road<br />Chittagong, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Media Links */}
                    <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '500ms'}}>
                        <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                            Follow Me
                        </h3>
                        <div className="flex flex-wrap gap-6">
                            {/* LinkedIn */}
                            <a 
                                href="https://linkedin.com/in/md-al-mostafa-66817a251" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group relative transform transition-all duration-500 hover:scale-125"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl flex items-center justify-center transition-all duration-500 hover:rotate-12 hover:shadow-2xl hover:shadow-blue-500/40 relative overflow-hidden">
                                    {/* Animated background overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    
                                    {/* Ripple effect */}
                                    <div className="absolute inset-0 rounded-2xl bg-blue-400/30 scale-0 group-hover:scale-100 group-hover:opacity-0 transition-all duration-500"></div>
                                    
                                    <Linkedin className="w-8 h-8 text-white group-hover:scale-125 transition-all duration-500 relative z-10 drop-shadow-lg" />
                                    
                                    {/* Glow effect */}
                                    <div className="absolute inset-0 rounded-2xl bg-blue-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                                
                                {/* Enhanced tooltip */}
                                <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1">
                                    <div className="bg-blue-600 text-white text-sm py-2 px-4 rounded-lg shadow-lg relative">
                                        LinkedIn Profile
                                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-blue-600"></div>
                                    </div>
                                </div>
                                
                                {/* Floating particles */}
                                <div className="absolute inset-0 pointer-events-none">
                                    <div className="absolute top-1 right-1 w-1 h-1 bg-blue-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                                    <div className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce" style={{animationDelay: '0.2s'}}></div>
                                </div>
                            </a>

                            {/* Facebook */}
                            <a 
                                href="https://www.facebook.com/mostafask.farhan.7" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group relative transform transition-all duration-500 hover:scale-125"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl flex items-center justify-center transition-all duration-500 hover:rotate-12 hover:shadow-2xl hover:shadow-blue-600/40 relative overflow-hidden">
                                    {/* Animated background overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    
                                    {/* Ripple effect */}
                                    <div className="absolute inset-0 rounded-2xl bg-blue-500/30 scale-0 group-hover:scale-100 group-hover:opacity-0 transition-all duration-500"></div>
                                    
                                    <Facebook className="w-8 h-8 text-white group-hover:scale-125 transition-all duration-500 relative z-10 drop-shadow-lg" />
                                    
                                    {/* Glow effect */}
                                    <div className="absolute inset-0 rounded-2xl bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                                
                                {/* Enhanced tooltip */}
                                <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1">
                                    <div className="bg-blue-700 text-white text-sm py-2 px-4 rounded-lg shadow-lg relative">
                                        Facebook Profile
                                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-blue-700"></div>
                                    </div>
                                </div>
                                
                                {/* Floating particles */}
                                <div className="absolute inset-0 pointer-events-none">
                                    <div className="absolute top-2 right-2 w-1 h-1 bg-blue-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                                    <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce" style={{animationDelay: '0.3s'}}></div>
                                </div>
                            </a>

                            {/* GitHub */}
                            <a 
                                href="https://github.com/IEEEMOSTAFA" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group relative transform transition-all duration-500 hover:scale-125"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 rounded-2xl flex items-center justify-center transition-all duration-500 hover:rotate-12 hover:shadow-2xl hover:shadow-gray-600/40 relative overflow-hidden">
                                    {/* Animated background overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-gray-500/20 to-gray-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    
                                    {/* Ripple effect */}
                                    <div className="absolute inset-0 rounded-2xl bg-gray-500/30 scale-0 group-hover:scale-100 group-hover:opacity-0 transition-all duration-500"></div>
                                    
                                    <Github className="w-8 h-8 text-white group-hover:scale-125 transition-all duration-500 relative z-10 drop-shadow-lg" />
                                    
                                    {/* Glow effect */}
                                    <div className="absolute inset-0 rounded-2xl bg-gray-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                                
                                {/* Enhanced tooltip */}
                                <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1">
                                    <div className="bg-gray-700 text-white text-sm py-2 px-4 rounded-lg shadow-lg relative">
                                        GitHub Repository
                                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-700"></div>
                                    </div>
                                </div>
                                
                                {/* Floating particles */}
                                <div className="absolute inset-0 pointer-events-none">
                                    <div className="absolute top-1 left-1 w-1 h-1 bg-gray-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                                    <div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-gray-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce" style={{animationDelay: '0.1s'}}></div>
                                </div>
                            </a>
                        </div>

                        {/* Quick Stats */}
                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="text-center p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                                <div className="text-2xl font-bold text-purple-400 mb-1">24/7</div>
                                <div className="text-sm text-gray-400">Available</div>
                            </div>
                            <div className="text-center p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
                                <div className="text-2xl font-bold text-blue-400 mb-1">&lt;1hr</div>
                                <div className="text-sm text-gray-400">Response Time</div>
                            </div>
                        </div>
                    </div>

                    {/* About Section */}
                    <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '700ms'}}>
                        <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                            Let's Build Together
                        </h3>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            Passionate full-stack developer specializing in modern web technologies. 
                            Ready to turn your ideas into reality with clean code and innovative solutions.
                        </p>
                        
                        {/* Project Status */}
                        <div className="mb-8 space-y-4">
                            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl border border-green-700/30">
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-3"></div>
                                    <span className="text-green-300 font-medium">Available for Projects</span>
                                </div>
                                <span className="text-green-200 text-sm">Open to Work</span>
                            </div>
                            
                            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-xl border border-blue-700/30">
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse mr-3"></div>
                                    <span className="text-blue-300 font-medium">Remote Friendly</span>
                                </div>
                                <span className="text-blue-200 text-sm">Worldwide</span>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <button 
                            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 group"
                        >
                            <span className="flex items-center justify-center">
                                Back to Top
                                <svg className="w-5 h-5 ml-2 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className={`border-t border-gray-800 pt-6 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '900ms'}}>
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-center md:text-left mb-4 md:mb-0">
                            <p className="text-gray-400 text-sm">
                                © 2024 <span className="text-white font-semibold">Md Al Mostafa</span>. All rights reserved.
                            </p>
                            <p className="text-gray-500 text-xs mt-1">
                                Crafted with ❤️ in Chittagong, Bangladesh
                            </p>
                        </div>
                        
                        {/* Animated typing effect */}
                        <div className="text-center md:text-right">
                            <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 text-sm font-medium">
                                Building the future, one line of code at a time...
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Background Animation */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 animate-pulse"></div>
        </footer>
    );
}