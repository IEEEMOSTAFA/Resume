// import React, { useState, useEffect } from 'react';

// const Navbar = () => {
//     const [activeLink, setActiveLink] = useState('home');
//     const [scrolled, setScrolled] = useState(false);

//     // Handle scroll effect
//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 50) {
//                 setScrolled(true);
//             } else {
//                 setScrolled(false);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     // Handle active navigation
//     const handleSetActive = (linkName) => {
//         setActiveLink(linkName);
        
//         // Close mobile menu
//         const activeElement = document.activeElement;
//         if (activeElement) {
//             activeElement.blur();
//         }
//     };

//     // Scroll to top when logo is clicked
//     const scrollToTop = () => {
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth'
//         });
//     };

//     // Handle smooth scrolling
//     const handleNavClick = (e, targetId) => {
//         e.preventDefault();
        
//         // Simulate scroll to different sections
//         let scrollPosition = 0;
//         switch(targetId) {
//             case 'home':
//                 scrollPosition = 0;
//                 break;
//             case 'about':
//                 scrollPosition = window.innerHeight;
//                 break;
//             case 'portfolio':
//                 scrollPosition = window.innerHeight * 1.5;
//                 break;
//             case 'contact':
//                 scrollPosition = window.innerHeight * 2;
//                 break;
//             default:
//                 scrollPosition = 0;
//         }
        
//         window.scrollTo({
//             top: scrollPosition,
//             behavior: 'smooth'
//         });
//     };

//     const navItems = [
//         { name: 'Home', id: 'home' },
//         { name: 'About', id: 'about' },
//         { name: 'Portfolio', id: 'portfolio' },
//         { name: 'Contact', id: 'contact' }
//     ];

//     return (
//         <>
//             {/* Navbar */}
//             <div className={`navbar fixed top-0 z-50 transition-all duration-300 ${
//                 scrolled 
//                     ? 'bg-base-100/95 shadow-2xl backdrop-blur-xl' 
//                     : 'bg-base-100/90 shadow-xl backdrop-blur-xl'
//             }`}>
//                 {/* Mobile Menu Button */}
//                 <div className="navbar-start">
//                     <div className="dropdown lg:hidden">
//                         <div tabIndex={0} role="button" className="btn btn-ghost">
//                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"></path>
//                             </svg>
//                         </div>
//                         <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl bg-base-100 rounded-box w-52 border border-base-300">
//                             {navItems.map((item) => (
//                                 <li key={item.id}>
//                                     <a 
//                                         href={`#${item.id}`} 
//                                         className="text-lg font-semibold hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300"
//                                         onClick={(e) => {
//                                             handleNavClick(e, item.id);
//                                             handleSetActive(item.id);
//                                         }}
//                                     >
//                                         {item.name}
//                                     </a>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
                    
//                     {/* Logo */}
//                     <div className="cursor-pointer" onClick={scrollToTop}>
//                         <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent hover:animate-bounce transition-all duration-300">
//                             Md Al Mostafa
//                         </h1>
//                     </div>
//                 </div>

//                 {/* Desktop Menu */}
//                 <div className="navbar-end hidden lg:flex">
//                     <ul className="menu menu-horizontal px-1 gap-2">
//                         {navItems.map((item) => (
//                             <li key={item.id}>
//                                 <a 
//                                     href={`#${item.id}`}
//                                     className={`btn btn-ghost text-base font-semibold hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
//                                         activeLink === item.id 
//                                             ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' 
//                                             : ''
//                                     }`}
//                                     onClick={(e) => {
//                                         handleNavClick(e, item.id);
//                                         handleSetActive(item.id);
//                                     }}
//                                 >
//                                     {item.name}
//                                 </a>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>

//             {/* Demo Content */}
//             <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
//                 {/* Hero Section */}
//                 {/* <div className="hero min-h-screen bg-transparent pt-20">
//                     <div className="hero-content text-center text-white">
//                         <div className="max-w-md">
//                             <h1 className="text-5xl font-bold mb-5 animate-pulse">Welcome to My Portfolio</h1>
//                             <p className="text-xl mb-5 opacity-90">
//                                 This is your modern React navbar built with DaisyUI and Tailwind CSS. 
//                                 Try clicking the navigation items!
//                             </p>
//                             <button className="btn btn-primary btn-lg bg-gradient-to-r from-purple-600 to-pink-600 border-none hover:shadow-xl hover:scale-105 transition-all duration-300">
//                                 Get Started
//                             </button>
//                         </div>
//                     </div>
//                 </div> */}

//                 {/* About Section */}
//                 {/* <div className="min-h-screen bg-base-200 p-8">
//                     <div className="container mx-auto">
//                         <div className="text-center mb-12">
//                             <h2 className="text-4xl font-bold mb-4">About Section</h2>
//                             <p className="text-xl opacity-70">Scroll to see the navbar effects in action</p>
//                         </div>
                        
//                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                             {[
//                                 { title: 'Skills', description: 'My technical expertise and core competencies.' },
//                                 { title: 'Experience', description: 'Professional journey and achievements.' },
//                                 { title: 'Education', description: 'Academic background and certifications.' }
//                             ].map((card, index) => (
//                                 <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
//                                     <div className="card-body">
//                                         <h3 className="card-title text-2xl">{card.title}</h3>
//                                         <p>{card.description}</p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div> */}

//                 {/* Portfolio Section */}
//                 <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 p-8 flex items-center">
//                     {/* <div className="container mx-auto text-center text-white">
//                         <h2 className="text-4xl font-bold mb-8">Portfolio Section</h2>
//                         <p className="text-xl opacity-90">Your amazing projects will be showcased here!</p>
//                     </div> */}
//                 </div>

//                 {/* Contact Section */}
//                 <div className="min-h-screen bg-base-300 p-8 flex items-center">
//                     {/* <div className="container mx-auto text-center">
//                         <h2 className="text-4xl font-bold mb-8">Contact Section</h2>
//                         <p className="text-xl opacity-70 mb-8">Let's get in touch and work together!</p>
//                         <button className="btn btn-primary btn-lg bg-gradient-to-r from-green-500 to-blue-500 border-none hover:shadow-xl hover:scale-105 transition-all duration-300">
//                             Contact Me
//                         </button>
//                     </div> */}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Navbar;




















import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle active navigation
    const handleSetActive = (linkName) => {
        setActiveLink(linkName);
        
        // Close mobile menu
        const activeElement = document.activeElement;
        if (activeElement) {
            activeElement.blur();
        }
    };

    // Scroll to top when logo is clicked
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Handle smooth scrolling
    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        
        // Simulate scroll to different sections
        let scrollPosition = 0;
        switch(targetId) {
            case 'home':
                scrollPosition = 0;
                break;
            case 'about':
                scrollPosition = window.innerHeight;
                break;
            case 'portfolio':
                scrollPosition = window.innerHeight * 1.5;
                break;
            case 'contact':
                scrollPosition = window.innerHeight * 2;
                break;
            default:
                scrollPosition = 0;
        }
        
        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        });
    };

    const navItems = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Portfolio', id: 'portfolio' },
        { name: 'Contact', id: 'contact' }
    ];

    return (
        <div className={`navbar fixed top-0 z-50 transition-all duration-300 ${
            scrolled 
                ? 'bg-base-100/95 shadow-2xl backdrop-blur-xl' 
                : 'bg-base-100/90 shadow-xl backdrop-blur-xl'
        }`}>
            {/* Mobile Menu Button */}
            <div className="navbar-start">
                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"></path>
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl bg-base-100 rounded-box w-52 border border-base-300">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a 
                                    href={`#${item.id}`} 
                                    className="text-lg font-semibold hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300"
                                    onClick={(e) => {
                                        handleNavClick(e, item.id);
                                        handleSetActive(item.id);
                                    }}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* Logo */}
                <div className="cursor-pointer" onClick={scrollToTop}>
                    <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent hover:animate-bounce transition-all duration-300">
                        Md Al Mostafa
                    </h1>
                </div>
            </div>

            {/* Desktop Menu */}
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <a 
                                href={`#${item.id}`}
                                className={`btn btn-ghost text-base font-semibold hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                                    activeLink === item.id 
                                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' 
                                        : ''
                                }`}
                                onClick={(e) => {
                                    handleNavClick(e, item.id);
                                    handleSetActive(item.id);
                                }}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;