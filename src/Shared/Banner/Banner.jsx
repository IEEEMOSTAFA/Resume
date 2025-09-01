













import React from 'react';

const Banner = () => {
    return (
        // Add top padding to account for fixed navbar height
        <div className="hero min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 pt-20">
            <div className="hero-content flex-col lg:flex-row-reverse max-w-7xl mx-auto px-4 lg:px-8">
                {/* Right side - Image */}
                <div className="flex-1 flex justify-center items-center">
                    <div className="relative">
                        {/* Main image */}
                        <div className="w-80 h-80 lg:w-96 lg:h-96 flex items-center justify-center">
                            <img 
                                src="https://i.postimg.cc/WpKjqF2C/scrool-img.png"
                                alt="Developer Illustration"
                                className="w-full h-full object-contain animate-float"
                            />
                        </div>
                        
                        {/* Floating tech icons around the image */}
                        <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm animate-float shadow-xl">
                            React
                        </div>
                        <div className="absolute -top-8 right-8 w-14 h-14 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-xs animate-float-delayed shadow-xl">
                            JS
                        </div>
                        <div className="absolute bottom-4 -left-8 w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xs animate-bounce shadow-xl">
                            MongoDB
                        </div>
                        <div className="absolute -bottom-2 right-4 w-18 h-18 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs animate-pulse shadow-xl">
                            Docker
                        </div>
                        <div className="absolute top-1/2 -right-6 w-14 h-14 bg-gradient-to-r from-red-400 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xs animate-float shadow-xl transform -translate-y-1/2">
                            Security
                        </div>
                    </div>
                </div>

                {/* Left side - Content */}
                <div className="flex-1 text-white">
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent animate-fade-in">
                        Full Stack Developer
                    </h1>
                    
                    <p className="text-lg sm:text-xl lg:text-2xl mb-2 text-purple-100 animate-fade-in-delayed">
                        Electrical & Electronics Engg. Student
                    </p>
                    
                    <p className="text-base sm:text-lg lg:text-xl mb-8 text-white/90 max-w-2xl animate-fade-in-delayed-2">
                        Enhancing digital experiences that are smooth, scalable, and made to impress.
                    </p>

                    {/* Skills */}
                    <div className="mb-8 animate-fade-in-delayed-3">
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                            {[
                                'React', 
                                'Javascript', 
                                'Node.js', 
                                'MongoDB', 
                                'Docker', 
                                'GitHub Actions', 
                                'Software Security'
                            ].map((skill, index) => (
                                <span 
                                    key={skill}
                                    className="px-3 py-2 sm:px-4 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Projects and Contact Buttons */}
                    <div className="mb-8 animate-fade-in-delayed-4">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button 
                                className="btn btn-md sm:btn-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white border-none hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:from-purple-700 hover:to-pink-700"
                                onClick={() => {
                                    // Scroll to projects section or navigate
                                    const projectsSection = document.getElementById('projects');
                                    if (projectsSection) {
                                        projectsSection.scrollIntoView({ behavior: 'smooth' });
                                    } else {
                                        console.log('Navigate to projects');
                                    }
                                }}
                            >
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                                </svg>
                                Projects
                            </button>
                            
                            <button 
                                className="btn btn-outline btn-md sm:btn-lg text-white border-white hover:bg-white hover:text-purple-600 transition-all duration-300 hover:scale-105"
                                onClick={() => {
                                    // Scroll to contact section or open contact modal
                                    const contactSection = document.getElementById('contact');
                                    if (contactSection) {
                                        contactSection.scrollIntoView({ behavior: 'smooth' });
                                    } else {
                                        console.log('Open contact modal or navigate to contact');
                                    }
                                }}
                            >
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                                Contact
                            </button>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="animate-fade-in-delayed-5">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                            <h3 className="text-base sm:text-lg font-semibold text-white/90">Connect with me:</h3>
                            
                            <div className="flex gap-3 sm:gap-4">
                                {/* GitHub */}
                                <a 
                                    href="https://github.com/IEEEMOSTAFA" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="btn btn-circle btn-sm sm:btn-md bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-purple-600 hover:border-white transition-all duration-300 hover:scale-110 tooltip tooltip-top"
                                    data-tip="GitHub"
                                >
                                    <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                                    </svg>
                                </a>

                                {/* LinkedIn */}
                                <a 
                                    href="https://www.linkedin.com/in/md-al-mostafa-66817a251" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="btn btn-circle btn-sm sm:btn-md bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 hover:scale-110 tooltip tooltip-top"
                                    data-tip="LinkedIn"
                                >
                                    <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </a>

                                {/* Facebook */}
                                <a 
                                    href="https://www.facebook.com/mostafask.farhan.7" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="btn btn-circle btn-sm sm:btn-md bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300 hover:scale-110 tooltip tooltip-top"
                                    data-tip="Facebook"
                                >
                                    <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom CSS for animations */}
            <style jsx>{`
                .animate-spin-slow {
                    animation: spin 20s linear infinite;
                }
                
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                
                .animate-float-delayed {
                    animation: float 3s ease-in-out infinite;
                    animation-delay: 1s;
                }
                
                .animate-fade-in {
                    animation: fadeIn 1s ease-out;
                }
                
                .animate-fade-in-delayed {
                    animation: fadeIn 1s ease-out;
                    animation-delay: 0.2s;
                    animation-fill-mode: both;
                }
                
                .animate-fade-in-delayed-2 {
                    animation: fadeIn 1s ease-out;
                    animation-delay: 0.4s;
                    animation-fill-mode: both;
                }
                
                .animate-fade-in-delayed-3 {
                    animation: fadeIn 1s ease-out;
                    animation-delay: 0.6s;
                    animation-fill-mode: both;
                }
                
                .animate-fade-in-delayed-4 {
                    animation: fadeIn 1s ease-out;
                    animation-delay: 0.8s;
                    animation-fill-mode: both;
                }
                
                .animate-fade-in-delayed-5 {
                    animation: fadeIn 1s ease-out;
                    animation-delay: 1s;
                    animation-fill-mode: both;
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default Banner;