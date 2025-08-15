"use client";
import React, { useState, useEffect, useRef } from 'react';

// --- Reusable Components ---
// Note: For a larger project, these would be in their own files (e.g., in a 'components' folder).

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-black bg-opacity-50 backdrop-blur-md border-b border-gray-800">
            <div className="container mx-auto flex justify-between items-center p-4">
                <a href="/" className="flex items-center gap-3 text-purple-400">
                    <img src="https://placehold.co/100x100/C084FC/0A0A0A?text=VS" alt="VS Logo" className="h-14 w-14 rounded-full" />
                    <span className="text-2xl font-extrabold text-white">Virtual Switch</span>
                </a>
                <div className="hidden md:flex items-center gap-8">
                    <a href="/" className="text-gray-300 hover:text-purple-400 transition-colors">Home</a>
                    <a href="/services" className="text-purple-400 transition-colors">Services</a>
                    <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">About</a>
                    <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</a>
                    <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Opportunities</a>
                </div>
                <div className="hidden lg:flex flex-col items-end">
                    <div>
                        <span className="text-sm text-gray-400">Toll Free</span>
                        <span className="font-bold text-purple-400 ml-2">+1(800) 259-1090</span>
                    </div>
                    <div className="flex space-x-4 mt-2 text-gray-400">
                        <a href="#" className="hover:text-purple-400"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="hover:text-purple-400"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="hover:text-purple-400"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#" className="hover:text-purple-400"><i className="fab fa-google"></i></a>
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
                    <a href="/" className="block py-3 px-4 text-sm hover:bg-gray-700">Home</a>
                    <a href="/services" className="block py-3 px-4 text-sm hover:bg-gray-700">Services</a>
                    <a href="#" className="block py-3 px-4 text-sm hover:bg-gray-700">About</a>
                    <a href="#" className="block py-3 px-4 text-sm hover:bg-gray-700">Contact</a>
                    <a href="#" className="block py-3 px-4 text-sm hover:bg-gray-700">Opportunities</a>
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

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} className={`transition-opacity duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {children}
        </div>
    );
};

const Footer = () => (
    <RevealOnScroll>
        <footer className="bg-black text-gray-400 py-12 mt-12 border-t border-gray-800">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <img src="https://placehold.co/100x100/C084FC/0A0A0A?text=VS" alt="VS Logo" className="h-12 w-12 rounded-full" />
                        <span className="text-xl font-bold text-white">Virtual Switch</span>
                    </div>
                    <p className="text-sm">Your industry experts, specializing in seamless management of outsourcing needs, propelling your business towards success.</p>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="hover:text-white"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="hover:text-white"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="hover:text-white"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#" className="hover:text-white"><i className="fab fa-skype"></i></a>
                    </div>
                </div>
                <div>
                    <h4 className="font-bold text-white mb-4">Services</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white">Vector Artwork</a></li>
                        <li><a href="#" className="hover:text-white">Embroidery Digitizing</a></li>
                        <li><a href="#" className="hover:text-white">Digital Image Editing</a></li>
                        <li><a href="#" className="hover:text-white">Data Processing</a></li>
                        <li><a href="#" className="hover:text-white">Web App Development</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-white mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/" className="hover:text-white">Home</a></li>
                        <li><a href="/services" className="hover:text-white">Services</a></li>
                        <li><a href="#" className="hover:text-white">About</a></li>
                        <li><a href="#" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-white mb-4">Legal</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white">Claim</a></li>
                        <li><a href="#" className="hover:text-white">Privacy</a></li>
                        <li><a href="#" className="hover:text-white">Terms</a></li>
                    </ul>
                </div>
            </div>
            <p className="text-center text-sm mt-12 border-t border-gray-800 pt-8">© 2025 Virtual Switch, Inc. All rights reserved.</p>
        </footer>
    </RevealOnScroll>
);


// --- Services Page Component ---

export default function ServicesPage() {
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
            background: radial-gradient(at 80% 10%, hsla(280, 80%, 50%, 0.2) 0px, transparent 50%), 
                        radial-gradient(at 20% 90%, hsla(260, 90%, 50%, 0.2) 0px, transparent 50%);
            animation: move-gradient 20s ease-in-out infinite;
        }

        @keyframes move-gradient {
            0%, 100% { background-position: 0% 50%, 100% 50%; }
            50% { background-position: 100% 50%, 0% 50%; }
        }
      `}</style>
      <Header />
      <main className="container mx-auto px-4">
        <RevealOnScroll>
            <section className="py-16 text-center">
                 <h1 className="text-4xl sm:text-6xl font-extrabold text-purple-400">Our Services</h1>
                 <p className="text-gray-400 max-w-2xl mx-auto mt-4">A solution for every need. Explore our offerings to find the perfect fit for your business.</p>
            </section>
        </RevealOnScroll>
        
        <div className="flex flex-col gap-16">
            <RevealOnScroll>
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="relative w-full max-w-md lg:w-1/2 min-h-[400px]">
                        <div className="absolute top-0 left-0 w-5/6 h-5/6 bg-purple-800 rounded-xl z-0"></div>
                        <div className="absolute bottom-0 right-0 w-5/6 h-5/6 bg-white p-4 rounded-xl shadow-2xl z-10">
                            <img src="https://placehold.co/600x400/1E293B/FFFFFF?text=CRM" alt="CRM Management" className="w-full h-full object-cover rounded-lg" />
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <h3 className="text-3xl font-extrabold text-purple-400 mb-4">CRM Management</h3>
                        <p className="text-gray-300 leading-relaxed">Unlock the Power of Vector Art with Our Studio! From overdue tasks to urgent needs, our expert artists are at your service. We craft stunning vector artwork tailored to your vision, ensuring lightning-fast delivery and excellence in every detail.</p>
                    </div>
                </div>
            </RevealOnScroll>

            <RevealOnScroll>
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="lg:w-1/2 lg:order-2">
                         <div className="relative w-full max-w-md lg:w-full min-h-[400px] ml-auto">
                            <div className="absolute top-0 right-0 w-5/6 h-5/6 bg-purple-800 rounded-xl z-0"></div>
                            <div className="absolute bottom-0 left-0 w-5/6 h-5/6 bg-white p-4 rounded-xl shadow-2xl z-10">
                                <img src="https://placehold.co/600x400/1E293B/FFFFFF?text=Digitizing" alt="Embroidery Digitizing" className="w-full h-full object-cover rounded-lg" />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 lg:order-1">
                        <h3 className="text-3xl font-extrabold text-purple-400 mb-4">Embroidery Digitizing</h3>
                        <p className="text-gray-300 leading-relaxed">Elevate Your Embroidery Game! Trust our skilled team for top-tier Embroidery Digitizing. We are masters of the craft, delivering efficient, machine-friendly designs that exude excellence. Seamlessly translate your vision into stunning embroidered creations with us!</p>
                    </div>
                </div>
            </RevealOnScroll>
        </div>

      </main>
      <Footer />
    </div>
  );
}
