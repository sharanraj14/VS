"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'; // REQUIRED: For client-side navigation
import Image from 'next/image'; // REQUIRED: For optimized images

// --- Reusable Components (FIXED) ---

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const logoSize = 56; // Dimensions for h-14 w-14 (56px)

    const handlePlaceholderClick = (e) => {
        // Prevent default navigation for placeholder '#' links only
        if (e.currentTarget.getAttribute('href') === '#') {
            e.preventDefault();
        }
    };

    return (
        <nav className="sticky top-0 z-50 bg-black bg-opacity-50 backdrop-blur-md border-b border-gray-800">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* FIX: Replaced <a> with <Link> and <img> with <Image> */}
                <Link href="/" className="flex items-center gap-3 text-purple-400">
                    <Image 
                        src="https://placehold.co/100x100/C084FC/0A0A0A?text=VS" 
                        alt="VS Logo" 
                        width={logoSize} 
                        height={logoSize} 
                        className="h-14 w-14 rounded-full" 
                        unoptimized={true} 
                    />
                    <span className="text-2xl font-extrabold text-white">Virtual Switch</span>
                </Link>
                <div className="hidden md:flex items-center gap-8">
                    {/* FIX: Replaced <a> with <Link> for internal links */}
                    <Link href="/" className="text-gray-300 hover:text-purple-400 transition-colors">Home</Link>
                    <Link href="/services" className="text-gray-300 hover:text-purple-400 transition-colors">Services</Link>
                    <Link href="/about" className="text-gray-300 hover:text-purple-400 transition-colors">About</Link>
                    <Link href="/contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</Link>
                    <Link href="/join" className="text-gray-300 hover:text-purple-400 transition-colors">Opportunities</Link>
                </div>
                <div className="hidden lg:flex flex-col items-end">
                    <div>
                        <span className="text-sm text-gray-400">Toll Free</span>
                        <span className="font-bold text-purple-400 ml-2">+1(800) 259-1090</span>
                    </div>
                    <div className="flex space-x-4 mt-2 text-gray-400">
                        {/* FIX: Social links structured for external navigation */}
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400"><i className="fab fa-instagram"></i></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400"><i className="fab fa-google"></i></a>
                    </div>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                        <i className="fas fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-gray-900 bg-opacity-90">
                    {/* FIX: Replaced <a> with <Link> for mobile menu */}
                    <Link href="/" className="block py-3 px-4 text-sm hover:bg-gray-700">Home</Link>
                    <Link href="/services" className="block py-3 px-4 text-sm hover:bg-gray-700">Services</Link>
                    <Link href="/about" className="block py-3 px-4 text-sm hover:bg-gray-700">About</Link>
                    <Link href="/contact" className="block py-3 px-4 text-sm hover:bg-gray-700">Contact</Link>
                    <Link href="/join" className="block py-3 px-4 text-sm hover:bg-gray-700">Opportunities</Link>
                </div>
            )}
        </nav>
    );
};

const RevealOnScroll = ({ children }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }, { threshold: 0.1 });

        // FIX: Capture ref.current for stable cleanup dependency (resolves hook warning)
        const currentRef = ref.current; 

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div ref={ref} className={`transition-opacity duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {children}
        </div>
    );
};

const Footer = () => {
    const logoSize = 48; // Dimensions for h-12 w-12 (48px)
    
    const handlePlaceholderClick = (e) => {
        if (e.currentTarget.getAttribute('href') === '#') {
            e.preventDefault();
        }
    };

    return (
        <RevealOnScroll>
           <footer className="bg-black text-gray-400 py-12 mt-12 border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16 text-left">
                        <div>
                             <div className="flex items-center gap-3 mb-4">
                                {/* FIX: Replaced <img> with <Image> */}
                                <Image 
                                    src="https://placehold.co/100x100/C084FC/0A0A0A?text=VS" 
                                    alt="VS Logo" 
                                    width={logoSize} 
                                    height={logoSize} 
                                    className="h-12 w-12 rounded-full" 
                                    unoptimized={true} 
                                />
                                <span className="text-xl font-bold text-white">Virtual Switch</span>
                            </div>
                            <p className="text-sm max-w-xs mb-4">Your industry experts, specializing in seamless management of outsourcing needs, propelling your business towards success.</p>
                            <div className="flex space-x-4">
                                {/* FIX: Social links structured for external navigation */}
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><i className="fab fa-instagram"></i></a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><i className="fab fa-linkedin-in"></i></a>
                                <a href="https://skype.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><i className="fab fa-skype"></i></a>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-4">Services</h4>
                            <ul className="space-y-2 text-sm">
                                {/* FIX: Replaced <a> with <Link> */}
                                <li><Link href="/crm" className="hover:text-white">CRM Management</Link></li>
                                <li><Link href="/smm" className="hover:text-white">Social Media Management</Link></li>
                                <li><Link href="/va" className="hover:text-white">Virtual Assistance</Link></li>
                                <li><a href="#" onClick={handlePlaceholderClick} className="hover:text-white">Digital Image Editing</a></li>
                                <li><a href="#" onClick={handlePlaceholderClick} className="hover:text-white">Web App Development</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-4">Quick Links</h4>
                            <ul className="space-y-2 text-sm">
                                {/* FIX: Replaced <a> with <Link> */}
                                <li><Link href="/" className="hover:text-white">Home</Link></li>
                                <li><Link href="/services" className="hover:text-white">Services</Link></li>
                                <li><Link href="/about" className="hover:text-white">About</Link></li>
                                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-4">Legal</h4>
                            <ul className="space-y-2 text-sm">
                                {/* FIX: Replaced <a> with <Link> */}
                                <li><Link href="/claim" className="hover:text-white">Claim</Link></li>
                                <li><Link href="/policy" className="hover:text-white">Privacy</Link></li>
                                <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="text-center text-sm mt-12 border-t border-gray-800 pt-8">© 2025 Virtual Switch, Inc. All rights reserved.</p>
            </footer>
        </RevealOnScroll>
    );
};


export default function SocialMediaPage() {
    const imageWidth = 600;
    const imageHeight = 400;

    return (
        <div className="min-h-screen">
            <style jsx="true" global="true">{`
                @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
                
                body {
                    font-family: 'Inter', sans-serif;
                    background-color: #0A0A0A;
                    color: #f3f4f6;
                    overflow-x: hidden;
                }

                body::before {
                    content: '';
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: -1;
                    background: radial-gradient(at 75% 0%, rgba(200, 0, 160, 0.3) 0%, transparent 50%), 
                                radial-gradient(at 0% 100%, rgba(100, 0, 200, 0.3) 0%, transparent 50%),
                                radial-gradient(at 100% 100%, rgba(200, 0, 160, 0.3) 0%, transparent 50%);
                    animation: move-gradient 40s ease-in-out infinite;
                }

                @keyframes move-gradient {
                    0% { background-position: 0% 50%, 100% 50%, 50% 0%; }
                    50% { background-position: 100% 50%, 0% 50%, 50% 100%; }
                    100% { background-position: 0% 50%, 100% 50%, 50% 0%; }
                }
            `}</style>
            <Header />
            <main className="container mx-auto px-4 py-16">
                <RevealOnScroll>
                    <div className="text-center mb-12">
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-purple-400">Social Media Management</h1>
                        <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">Build your brand presence, engage your audience, and drive growth with our expert social media strategies.</p>
                    </div>
                </RevealOnScroll>

                <div className="space-y-16">
                     {/* Section 1 */}
                    <RevealOnScroll>
                         <div className="flex flex-col lg:flex-row items-center gap-12">
                            <div className="lg:w-1/2">
                                <h2 className="text-3xl font-bold text-white mb-4">Strategic Content Creation</h2>
                                {/* FIX: Escaped apostrophe in "brand's" */}
                                <p className="text-gray-400 leading-relaxed">We develop a tailored content strategy that resonates with your target audience. From creating engaging posts and eye-catching graphics to planning your monthly content calendar, we ensure your brand&apos;s voice is consistent and compelling across all platforms.</p>
                            </div>
                            <div className="lg:w-1/2 relative min-h-[350px]">
                                <div className="absolute top-0 left-0 w-5/6 h-5/6 bg-purple-600 rounded-xl z-0 transform -rotate-3"></div>
                                <div className="absolute bottom-0 right-0 w-5/6 h-5/6 bg-white p-4 rounded-xl shadow-2xl z-10 transform rotate-3">
                                    {/* FIX: Replaced <img> with <Image> */}
                                    <Image 
                                        src="https://placehold.co/600x400/1E293B/FFFFFF?text=Content+Strategy" 
                                        alt="Social Media Content Strategy" 
                                        width={imageWidth} 
                                        height={imageHeight} 
                                        className="w-full h-full object-cover rounded-lg" 
                                        unoptimized={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Section 2 */}
                    <RevealOnScroll>
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                            <div className="lg:w-1/2">
                                <h2 className="text-3xl font-bold text-white mb-4">Community Engagement & Growth</h2>
                                <p className="text-gray-400 leading-relaxed">Building a community is key to social media success. We actively engage with your followers, respond to comments and messages, and run targeted campaigns to grow your audience. We turn followers into loyal customers and brand advocates.</p>
                            </div>
                             <div className="lg:w-1/2 relative min-h-[350px]">
                                <div className="absolute top-0 right-0 w-5/6 h-5/6 bg-blue-500 rounded-xl z-0 transform rotate-3"></div>
                                <div className="absolute bottom-0 left-0 w-5/6 h-5/6 bg-white p-4 rounded-xl shadow-2xl z-10 transform -rotate-3">
                                    {/* FIX: Replaced <img> with <Image> */}
                                    <Image 
                                        src="https://placehold.co/600x400/1E293B/FFFFFF?text=Community+Engagement" 
                                        alt="Community Engagement" 
                                        width={imageWidth} 
                                        height={imageHeight} 
                                        className="w-full h-full object-cover rounded-lg" 
                                        unoptimized={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </main>
            <Footer />
        </div>
    );
}
