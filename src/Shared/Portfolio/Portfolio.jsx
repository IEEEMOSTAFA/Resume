

// import React, { useState } from 'react';
// import { Code, Award, Star, ExternalLink, Calendar } from 'lucide-react';

// const Portfolio = () => {
//     // State for active tab
//     const [activeTab, setActiveTab] = useState('projects');

//     // Projects data
//     const projects = [
//         {
//             id: 1,
//             title: "Govt. Service Platform",
//             duration: "Month 2-3",
//             demo: "https://govt-service-007.netlify.app",
//             features: ["User management", "Product catalog", "Shopping cart", "Orders"],
//             techStack: ["Express.js", "PostgreSQL", "JWT authentication"],
//             skills: ["REST API design", "Database relationships", "Authentication"],
//             description: "A comprehensive government service platform with user management and catalog features."
//         },
//         {
//             id: 2,
//             title: "Smart Ticket Booking",
//             duration: "Month 4-5",
//             demo: "https://ieeemostafa.github.io/B9A5-Smart-Ticket-System/",
//             features: ["User posts", "Comments", "Likes", "Follow system", "Real-time notifications"],
//             techStack: ["Express.js", "PostgreSQL", "Redis", "WebSockets"],
//             skills: ["Complex relationships", "Caching", "Real-time features"],
//             description: "An intelligent ticket booking system with social features and real-time updates."
//         },
//         {
//             id: 3,
//             title: "Craft E-commerce Shop",
//             duration: "Month 6-7",
//             demo: "https://react-assignment-07.netlify.app/",
//             features: ["Projects", "Tasks", "Team collaboration", "File uploads", "Email notifications"],
//             techStack: ["Full stack", "Deployment", "Testing", "Documentation"],
//             skills: ["File handling", "Email services", "Comprehensive testing"],
//             description: "A complete e-commerce solution for craft items with team collaboration features."
//         },
//         {
//             id: 4,
//             title: "Portfolio Management",
//             duration: "Month 8-9",
//             demo: "#",
//             features: ["Project showcase", "Dynamic content", "Responsive design", "Performance optimization"],
//             techStack: ["React", "Tailwind CSS", "Daisy UI", "TypeScript"],
//             skills: ["Modern frameworks", "UI/UX design", "Performance tuning"],
//             description: "A modern portfolio website showcasing projects and technical expertise."
//         }
//     ];

//     // Tech stack data
//     const techStack = [
//         { name: "HTML", icon: "🌐", category: "Frontend" },
//         { name: "CSS", icon: "🎨", category: "Frontend" },
//         { name: "JavaScript", icon: "⚡", category: "Frontend" },
//         { name: "TypeScript", icon: "📘", category: "Frontend" },
//         { name: "React", icon: "⚛️", category: "Frontend" },
//         { name: "Tailwind CSS", icon: "🎨", category: "Frontend" },
//         { name: "Express JS", icon: "🚀", category: "Backend" },
//         { name: "Node JS", icon: "💚", category: "Backend" },
//         { name: "MongoDB", icon: "🍃", category: "Database" },
//         { name: "PostgreSQL", icon: "🐘", category: "Database" },
//         { name: "JWT", icon: "🔐", category: "Authentication" },
//         { name: "Docker", icon: "🐳", category: "DevOps" },
//         { name: "GitHub Actions", icon: "🔄", category: "DevOps" }
//     ];

//     // Certificates data
//     const certificates = [
//         {
//             id: 1,
//             title: "Full-Stack Development Certificate",
//             issuer: "Tech Academy",
//             date: "2024",
//             status: "Completed",
//             skills: ["JavaScript", "React", "Node.js", "Database Design"]
//         },
//         {
//             id: 2,
//             title: "Advanced JavaScript Certification",
//             issuer: "Online Platform",
//             date: "2024",
//             status: "Completed",
//             skills: ["ES6+", "Async Programming", "DOM Manipulation"]
//         }
//     ];

//     return (
//         <div className="min-h-screen bg-base-100">
//             {/* Portfolio Showcase Section */}
//             <section id="portfolio" className="py-20 px-4 max-w-7xl mx-auto">
//                 <div className="text-center mb-12">
//                     <h2 className="text-4xl font-bold text-base-content mb-4">Portfolio Showcase</h2>
//                     <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
//                         Explore my journey through projects, certifications, and technical expertise.
//                         Each section represents a milestone in my continuous learning path.
//                     </p>
//                 </div>

//                 {/* Tab Navigation */}
//                 <div className="flex justify-center mb-8">
//                     <div className="tabs tabs-lifted tabs-lg">
//                         <button
//                             className={`tab tab-lifted ${activeTab === 'projects' ? 'tab-active' : ''}`}
//                             onClick={() => setActiveTab('projects')}
//                         >
//                             <Code className="mr-2" size={20} />
//                             Projects
//                         </button>
//                         <button
//                             className={`tab tab-lifted ${activeTab === 'certificates' ? 'tab-active' : ''}`}
//                             onClick={() => setActiveTab('certificates')}
//                         >
//                             <Award className="mr-2" size={20} />
//                             Certificates
//                         </button>
//                         <button
//                             className={`tab tab-lifted ${activeTab === 'stack' ? 'tab-active' : ''}`}
//                             onClick={() => setActiveTab('stack')}
//                         >
//                             <Star className="mr-2" size={20} />
//                             Tech Stack
//                         </button>
//                     </div>
//                 </div>

//                 {/* Tab Content */}
//                 <div className="min-h-[600px]">

//                     {/* Projects Tab */}
//                     {activeTab === 'projects' && (
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-0 animate-[fadeIn_0.5s_ease-in-out_forwards]">
//                             {projects.map((project) => (
//                                 <div key={project.id} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
//                                     <div className="card-body">
//                                         <div className="flex justify-between items-start mb-4">
//                                             <h3 className="card-title text-xl">{project.title}</h3>
//                                             <div className="badge badge-outline">{project.duration}</div>
//                                         </div>

//                                         <p className="text-base-content/70 mb-4">{project.description}</p>

//                                         <div className="mb-4">
//                                             <h4 className="font-semibold mb-2">Key Features:</h4>
//                                             <div className="flex flex-wrap gap-2">
//                                                 {project.features.map((feature, index) => (
//                                                     <span key={index} className="badge badge-primary badge-sm">
//                                                         {feature}
//                                                     </span>
//                                                 ))}
//                                             </div>
//                                         </div>

//                                         <div className="mb-4">
//                                             <h4 className="font-semibold mb-2">Tech Stack:</h4>
//                                             <div className="flex flex-wrap gap-2">
//                                                 {project.techStack.map((tech, index) => (
//                                                     <span key={index} className="badge badge-secondary badge-sm">
//                                                         {tech}
//                                                     </span>
//                                                 ))}
//                                             </div>
//                                         </div>

//                                         <div className="mb-4">
//                                             <h4 className="font-semibold mb-2">Skills Developed:</h4>
//                                             <div className="flex flex-wrap gap-2">
//                                                 {project.skills.map((skill, index) => (
//                                                     <span key={index} className="badge badge-accent badge-sm">
//                                                         {skill}
//                                                     </span>
//                                                 ))}
//                                             </div>
//                                         </div>

//                                         <div className="card-actions justify-end">
//                                             {project.demo !== '#' && (
//                                                 <a
//                                                     href={project.demo}
//                                                     target="_blank"
//                                                     rel="noopener noreferrer"
//                                                     className="btn btn-primary btn-sm"
//                                                 >
//                                                     <ExternalLink size={16} className="mr-2" />
//                                                     Live Demo
//                                                 </a>
//                                             )}
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     )}

//                     {/* Certificates Tab */}
//                     {activeTab === 'certificates' && (
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-0 animate-[fadeIn_0.5s_ease-in-out_forwards]">
//                             {certificates.map((cert) => (
//                                 <div key={cert.id} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
//                                     <div className="card-body">
//                                         <div className="flex justify-between items-start mb-4">
//                                             <h3 className="card-title text-xl">{cert.title}</h3>
//                                             <div className="badge badge-success">{cert.status}</div>
//                                         </div>

//                                         <div className="flex items-center mb-4 text-base-content/70">
//                                             <Calendar size={16} className="mr-2" />
//                                             <span className="mr-4">{cert.date}</span>
//                                             <span>by {cert.issuer}</span>
//                                         </div>

//                                         <div className="mb-4">
//                                             <h4 className="font-semibold mb-2">Skills Covered:</h4>
//                                             <div className="flex flex-wrap gap-2">
//                                                 {cert.skills.map((skill, index) => (
//                                                     <span key={index} className="badge badge-primary badge-sm">
//                                                         {skill}
//                                                     </span>
//                                                 ))}
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}

//                             {/* Future Certificates Placeholder */}
//                             <div className="card bg-base-200 shadow-xl border-2 border-dashed border-base-content/20">
//                                 <div className="card-body items-center text-center">
//                                     <Award size={48} className="text-base-content/30 mb-4" />
//                                     <h3 className="card-title text-base-content/50">More Certificates Coming Soon</h3>
//                                     <p className="text-base-content/40">
//                                         Currently working on additional certifications in AI, Data Science, and Cloud Technologies.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     )}

//                     {/* Tech Stack Tab */}
//                     {activeTab === 'stack' && (
//                         <div className="opacity-0 animate-[fadeIn_0.5s_ease-in-out_forwards]">
//                             {['Frontend', 'Backend', 'Database', 'Authentication', 'DevOps'].map((category) => (
//                                 <div key={category} className="mb-8">
//                                     <h3 className="text-2xl font-bold mb-4 text-center">{category}</h3>
//                                     <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
//                                         {techStack
//                                             .filter((tech) => tech.category === category)
//                                             .map((tech, index) => (
//                                                 <div
//                                                     key={index}
//                                                     className="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105"
//                                                 >
//                                                     <div className="card-body items-center text-center p-6">
//                                                         <div className="text-4xl mb-2">{tech.icon}</div>
//                                                         <h4 className="font-semibold text-sm">{tech.name}</h4>
//                                                     </div>
//                                                 </div>
//                                             ))}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     )}

//                 </div>
//             </section>

//             <style jsx>{`
//                 @keyframes fadeIn {
//                     from { opacity: 0; transform: translateY(20px); }
//                     to { opacity: 1; transform: translateY(0); }
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default Portfolio;






















import React, { useState } from 'react';
import { Code, Award, Star, ExternalLink, Calendar } from 'lucide-react';

const Portfolio = () => {
    // State for active tab
    const [activeTab, setActiveTab] = useState('projects');

    // Projects data
    const projects = [
        {
            id: 1,
            title: "Govt. Service Platform",
            duration: "Month 2-3",
            demo: "https://govt-service-007.netlify.app",
            features: ["User management", "Product catalog", "Shopping cart", "Orders"],
            techStack: ["Express.js", "PostgreSQL", "JWT authentication"],
            skills: ["REST API design", "Database relationships", "Authentication"],
            description: "A comprehensive government service platform with user management and catalog features."
        },
        {
            id: 2,
            title: "Smart Ticket Booking",
            duration: "Month 4-5",
            demo: "https://ieeemostafa.github.io/B9A5-Smart-Ticket-System/",
            features: ["User posts", "Comments", "Likes", "Follow system", "Real-time notifications"],
            techStack: ["Express.js", "PostgreSQL", "Redis", "WebSockets"],
            skills: ["Complex relationships", "Caching", "Real-time features"],
            description: "An intelligent ticket booking system with social features and real-time updates."
        },
        {
            id: 3,
            title: "Craft E-commerce Shop",
            duration: "Month 6-7",
            demo: "https://react-assignment-07.netlify.app/",
            features: ["Projects", "Tasks", "Team collaboration", "File uploads", "Email notifications"],
            techStack: ["Full stack", "Deployment", "Testing", "Documentation"],
            skills: ["File handling", "Email services", "Comprehensive testing"],
            description: "A complete e-commerce solution for craft items with team collaboration features."
        },
        {
            id: 4,
            title: "Portfolio Management",
            duration: "Month 8-9",
            demo: "#",
            features: ["Project showcase", "Dynamic content", "Responsive design", "Performance optimization"],
            techStack: ["React", "Tailwind CSS", "Daisy UI", "TypeScript"],
            skills: ["Modern frameworks", "UI/UX design", "Performance tuning"],
            description: "A modern portfolio website showcasing projects and technical expertise."
        }
    ];

    // Updated tech stack data with more categories and technologies
    const techStack = [
        // Frontend
        { name: "HTML", icon: "🌐", category: "Frontend" },
        { name: "CSS", icon: "🎨", category: "Frontend" },
        { name: "JavaScript", icon: "⚡", category: "Frontend" },
        { name: "TypeScript", icon: "📘", category: "Frontend" },
        { name: "React", icon: "⚛️", category: "Frontend" },
        { name: "Tailwind CSS", icon: "🎨", category: "Frontend" },
        
        // Backend
        { name: "Node.js", icon: "💚", category: "Backend" },
        { name: "Express.js", icon: "🚀", category: "Backend" },
        
        // SQL Database
        { name: "PostgreSQL", icon: "🐘", category: "SQL Database" },
        
        // NoSQL Database
        { name: "MongoDB", icon: "🍃", category: "NoSQL Database" },
        
        // ORM
        { name: "Mongoose", icon: "🔗", category: "ORM" },
        
        // Authentication
        { name: "JWT", icon: "🔐", category: "Authentication" },
        
        // DevOps
        { name: "Linux", icon: "🐧", category: "DevOps" },
        { name: "CLI", icon: "💻", category: "DevOps" },
        { name: "Docker", icon: "🐳", category: "DevOps" },
        { name: "GitHub Actions", icon: "🔄", category: "DevOps" },
        
        // Cloud
        { name: "AWS", icon: "☁️", category: "Cloud" },
        
        // Caching
        { name: "Redis", icon: "🔴", category: "Caching" },
        
        // Testing
        { name: "Jest", icon: "🧪", category: "Testing" },
        { name: "Cypress", icon: "🌲", category: "Testing" }
    ];

    // Certificates data
    const certificates = [
        {
            id: 1,
            title: "Full-Stack Development Certificate",
            issuer: "Tech Academy",
            date: "2024",
            status: "Completed",
            skills: ["JavaScript", "React", "Node.js", "Database Design"]
        },
        {
            id: 2,
            title: "Advanced JavaScript Certification",
            issuer: "Online Platform",
            date: "2024",
            status: "Completed",
            skills: ["ES6+", "Async Programming", "DOM Manipulation"]
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse"></div>
            </div>

            {/* Portfolio Showcase Section */}
            <section id="portfolio" className="py-20 px-4 max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-purple-300 to-blue-400 bg-clip-text text-transparent mb-6">
                        Portfolio Showcase
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Explore my journey through projects, certifications, and technical expertise.
                        Each section represents a milestone in my continuous learning path.
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-12">
                    <div className="flex bg-gray-900/50 backdrop-blur-xl rounded-2xl p-2 border border-gray-800">
                        <button
                            className={`flex items-center px-6 py-3 rounded-xl transition-all duration-300 ${
                                activeTab === 'projects' 
                                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg' 
                                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                            }`}
                            onClick={() => setActiveTab('projects')}
                        >
                            <Code className="mr-2" size={20} />
                            Projects
                        </button>
                        <button
                            className={`flex items-center px-6 py-3 rounded-xl transition-all duration-300 ${
                                activeTab === 'certificates' 
                                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg' 
                                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                            }`}
                            onClick={() => setActiveTab('certificates')}
                        >
                            <Award className="mr-2" size={20} />
                            Certificates
                        </button>
                        <button
                            className={`flex items-center px-6 py-3 rounded-xl transition-all duration-300 ${
                                activeTab === 'stack' 
                                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg' 
                                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                            }`}
                            onClick={() => setActiveTab('stack')}
                        >
                            <Star className="mr-2" size={20} />
                            Tech Stack
                        </button>
                    </div>
                </div>

                {/* Tab Content */}
                <div className="min-h-[600px]">

                    {/* Projects Tab */}
                    {activeTab === 'projects' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 opacity-0 animate-[fadeIn_0.5s_ease-in-out_forwards]">
                            {projects.map((project, index) => (
                                <div 
                                    key={project.id} 
                                    className="bg-gray-900/50 backdrop-blur-xl rounded-3xl border border-gray-800 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/30"
                                    style={{animationDelay: `${index * 100}ms`}}
                                >
                                    <div className="p-8">
                                        <div className="flex justify-between items-start mb-6">
                                            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                                            <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-600/30">
                                                {project.duration}
                                            </span>
                                        </div>

                                        <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                                        <div className="mb-6">
                                            <h4 className="text-lg font-semibold mb-3 text-purple-300">Key Features:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.features.map((feature, index) => (
                                                    <span key={index} className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-600/30">
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <h4 className="text-lg font-semibold mb-3 text-green-300">Tech Stack:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.techStack.map((tech, index) => (
                                                    <span key={index} className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm border border-green-600/30">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mb-8">
                                            <h4 className="text-lg font-semibold mb-3 text-orange-300">Skills Developed:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.skills.map((skill, index) => (
                                                    <span key={index} className="px-3 py-1 bg-orange-600/20 text-orange-300 rounded-full text-sm border border-orange-600/30">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex justify-end">
                                            {project.demo !== '#' && (
                                                <a
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                                                >
                                                    <ExternalLink size={16} className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                                                    Live Demo
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Certificates Tab */}
                    {activeTab === 'certificates' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 opacity-0 animate-[fadeIn_0.5s_ease-in-out_forwards]">
                            {certificates.map((cert, index) => (
                                <div 
                                    key={cert.id} 
                                    className="bg-gray-900/50 backdrop-blur-xl rounded-3xl border border-gray-800 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/30"
                                    style={{animationDelay: `${index * 100}ms`}}
                                >
                                    <div className="p-8">
                                        <div className="flex justify-between items-start mb-6">
                                            <h3 className="text-2xl font-bold text-white">{cert.title}</h3>
                                            <span className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm border border-green-600/30">
                                                {cert.status}
                                            </span>
                                        </div>

                                        <div className="flex items-center mb-6 text-gray-300">
                                            <Calendar size={16} className="mr-2 text-purple-400" />
                                            <span className="mr-4">{cert.date}</span>
                                            <span>by {cert.issuer}</span>
                                        </div>

                                        <div className="mb-6">
                                            <h4 className="text-lg font-semibold mb-3 text-blue-300">Skills Covered:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {cert.skills.map((skill, index) => (
                                                    <span key={index} className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-600/30">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Future Certificates Placeholder */}
                            <div className="bg-gray-900/30 backdrop-blur-xl rounded-3xl border-2 border-dashed border-gray-700 hover:border-purple-500/50 transition-all duration-500">
                                <div className="p-8 text-center">
                                    <Award size={48} className="text-gray-500 mb-4 mx-auto" />
                                    <h3 className="text-xl font-bold text-gray-400 mb-3">More Certificates Coming Soon</h3>
                                    <p className="text-gray-500 leading-relaxed">
                                        Currently working on additional certifications in AI, Data Science, and Cloud Technologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Tech Stack Tab */}
                    {activeTab === 'stack' && (
                        <div className="opacity-0 animate-[fadeIn_0.5s_ease-in-out_forwards]">
                            {[
                                'Frontend', 
                                'Backend', 
                                'SQL Database', 
                                'NoSQL Database', 
                                'ORM', 
                                'Authentication', 
                                'DevOps', 
                                'Cloud', 
                                'Caching', 
                                'Testing'
                            ].map((category, categoryIndex) => (
                                <div key={category} className="mb-12">
                                    <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                                        {category}
                                    </h3>
                                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                                        {techStack
                                            .filter((tech) => tech.category === category)
                                            .map((tech, index) => (
                                                <div
                                                    key={index}
                                                    className="bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-800 shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-3 hover:scale-110 hover:border-purple-500/50 group"
                                                    style={{animationDelay: `${categoryIndex * 200 + index * 100}ms`}}
                                                >
                                                    <div className="p-6 text-center">
                                                        <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                                                            {tech.icon}
                                                        </div>
                                                        <h4 className="font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                                                            {tech.name}
                                                        </h4>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                </div>
            </section>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

export default Portfolio;