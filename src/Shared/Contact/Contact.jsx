import React, { useState, useEffect } from 'react';
import { Send, Linkedin, Facebook, Github, Mail, ExternalLink, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [errors, setErrors] = useState({});
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }

        if (submitStatus) {
            setSubmitStatus(null);
        }
    };

    const handleSubmit = async () => {
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            await new Promise(resolve => setTimeout(resolve, 2000));

            if (Math.random() > 0.2) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const socialLinks = [
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/md-al-mostafa-66817a251',
            icon: Linkedin,
            bgColor: 'bg-blue-600',
            hoverColor: 'hover:bg-blue-900/30',
            username: 'Md Al Mostafa',
            testId: 'link-linkedin'
        },
        {
            name: 'Facebook',
            url: 'https://www.facebook.com/mostafask.farhan.7',
            icon: Facebook,
            bgColor: 'bg-blue-700',
            hoverColor: 'hover:bg-blue-900/30',
            username: '@Mostafa sk Farhan',
            testId: 'link-facebook'
        },
        {
            name: 'GitHub',
            url: 'https://github.com/IEEEMOSTAFA',
            icon: Github,
            bgColor: 'bg-gray-700',
            hoverColor: 'hover:bg-gray-800/30',
            username: '@IEEEMOSTAFA',
            testId: 'link-github'
        },
        {
            name: 'Email',
            url: 'mailto:skmostafa8888@gmail.com',
            icon: Mail,
            bgColor: 'bg-red-600',
            hoverColor: 'hover:bg-red-900/30',
            username: 'skmostafa8888@gmail.com',
            testId: 'link-email'
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-600/10 to-orange-600/10 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }}></div>
            </div>

            <div className="relative z-10 py-16 px-4">
                <section id="contact" className="max-w-7xl mx-auto">
                    {/* Animated Header */}
                    <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                        <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-300 to-blue-400 bg-clip-text text-transparent mb-6">
                            Get In Touch
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Ready to bring your ideas to life? Let's collaborate and create something extraordinary together.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form - Slides in from left */}
                        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                            <div className="bg-gray-900/50 backdrop-blur-xl rounded-3xl border border-gray-800 shadow-2xl overflow-hidden">
                                <div className="p-8">
                                    <div className="text-center mb-8">
                                        <h3 className="text-4xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                                            Send Message
                                        </h3>
                                        <p className="text-gray-400">
                                            Fill out the form and I'll get back to you within 24 hours
                                        </p>
                                    </div>

                                    {/* Success/Error Messages */}
                                    {submitStatus === 'success' && (
                                        <div className="mb-6 p-4 bg-green-900/30 border border-green-700/50 rounded-xl flex items-center animate-pulse">
                                            <CheckCircle className="text-green-400 mr-3" size={20} />
                                            <span className="text-green-300 font-medium">Message sent successfully! I'll get back to you soon.</span>
                                        </div>
                                    )}

                                    {submitStatus === 'error' && (
                                        <div className="mb-6 p-4 bg-red-900/30 border border-red-700/50 rounded-xl flex items-center animate-pulse">
                                            <AlertCircle className="text-red-400 mr-3" size={20} />
                                            <span className="text-red-300 font-medium">Failed to send message. Please try again or contact me directly.</span>
                                        </div>
                                    )}

                                    <div className="space-y-6">
                                        {/* Name Input */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-300 mb-2">
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder="Enter your full name"
                                                className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-500 text-white ${errors.name ? 'border-red-500/50 bg-red-900/20' : 'border-gray-700 hover:border-gray-600'
                                                    }`}
                                                data-testid="input-name"
                                            />
                                            {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                                        </div>

                                        {/* Email Input */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-300 mb-2">
                                                Your Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="Enter your email address"
                                                className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-500 text-white ${errors.email ? 'border-red-500/50 bg-red-900/20' : 'border-gray-700 hover:border-gray-600'
                                                    }`}
                                                data-testid="input-email"
                                            />
                                            {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                                        </div>

                                        {/* Message Textarea */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-300 mb-2">
                                                Your Message
                                            </label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                placeholder="Tell me about your project, ideas, or any questions you have..."
                                                rows={5}
                                                className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none placeholder-gray-500 text-white ${errors.message ? 'border-red-500/50 bg-red-900/20' : 'border-gray-700 hover:border-gray-600'
                                                    }`}
                                                data-testid="textarea-message"
                                            />
                                            {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
                                            <p className="mt-1 text-sm text-gray-500">
                                                {formData.message.length}/500 characters
                                            </p>
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="button"
                                            onClick={handleSubmit}
                                            disabled={isSubmitting}
                                            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 group"
                                            data-testid="button-send-message"
                                        >
                                            {isSubmitting ? (
                                                <div className="flex items-center justify-center">
                                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                                                    Sending...
                                                </div>
                                            ) : (
                                                <div className="flex items-center justify-center">
                                                    <Send className="mr-3 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                                                    Send Message
                                                </div>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Connect With Me - Slides in from right */}
                        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                            <div className="bg-gray-900/50 backdrop-blur-xl rounded-3xl border border-gray-800 shadow-2xl p-8">
                                <div className="text-center mb-8">
                                    <h3 className="text-4xl font-bold mb-3 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                                        Connect With Me
                                    </h3>
                                    <p className="text-gray-400">
                                        Let's connect on social media and build something amazing together
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    {socialLinks.map((social, index) => {
                                        const IconComponent = social.icon;
                                        return (
                                            <div
                                                key={social.name}
                                                className={`transition-all duration-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
                                                style={{ transitionDelay: `${700 + index * 100}ms` }}
                                            >
                                                <a
                                                    href={social.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`flex items-center p-5 rounded-2xl bg-gray-800/50 border border-gray-700 ${social.hoverColor} transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-gray-600 group`}
                                                    data-testid={social.testId}
                                                >
                                                    <div className={`w-14 h-14 ${social.bgColor} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                                                        <IconComponent className="text-white" size={26} />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="font-bold text-white text-lg group-hover:text-purple-300 transition-colors duration-300">{social.name}</h4>
                                                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{social.username}</p>
                                                    </div>
                                                    <ExternalLink className="text-gray-500 group-hover:text-white group-hover:scale-110 transition-all duration-300" size={18} />
                                                </a>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Call to Action */}
                                <div className={`mt-8 p-6 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl border border-purple-700/30 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                    <h4 className="text-2xl font-bold mb-3 text-white">Ready to Start?</h4>
                                    <p className="text-gray-300 mb-4">
                                        Let's discuss your project and turn your vision into reality
                                    </p>
                                    <div className="flex justify-center space-x-3">
                                        <span className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm font-medium border border-purple-600/30">Available Now</span>
                                        <span className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium border border-blue-600/30">Quick Response</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Floating particles animation */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
                <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            </div>
        </div>
    );
}