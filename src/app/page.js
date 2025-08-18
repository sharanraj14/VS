"use client";
import React, { useState, useEffect, useRef } from 'react';

// --- Helper Components & Data ---

const testimonials = [
    { img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Dr. Aleksandra Gajer', quote: "Wishup's VA has successfully handled a variety of tasks for us, including email marketing and social media management. They have been efficient and productive.", author: 'Dr. Aleksandra Gajer', title: 'Founder - The Giant Practice' },
    { img: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Jason Ellinger', quote: "I realized I was lacking in generating leads. My VA helped manage my calendar, invoices, and HR and is now an integral part of our business.", author: 'Jason Ellinger', title: 'Co-founder - Record & Reverb' },
    { img: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Jane Doe', quote: "Partnering with Wishup, we've experienced a significant improvement in our overall efficiency. Our VA has freed up our time to focus on our clients.", author: 'Jane Doe', title: 'CEO - Creative Solutions' },
    { img: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'John Smith', quote: "The level of professionalism and dedication is outstanding. Our virtual assistant has become a key part of our team's success and daily workflow.", author: 'John Smith', title: 'Director of Operations' },
    { img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Emily White', quote: "I was hesitant about virtual assistants at first, but the experience has been transformative. Our productivity has skyrocketed since we started.", author: 'Emily White', title: 'Marketing Manager' }
];

const services = [
    { icon: 'fas fa-edit', title: 'CRM Management', description: 'Unlock the Power of Vector Art with Our Studio! From overdue tasks to urgent needs, our expert artists are at your service.', link: '/crm' },
    { icon: 'fas fa-paint-brush', title: 'Embroidery Digitizing', description: 'Elevate Your Embroidery Game! Trust our skilled team for top-tier Embroidery Digitizing. We are masters of the craft.', link: '/embroidery' },
    { icon: 'fas fa-image', title: 'Digital Image Editing', description: 'Transform Your Visuals with Precision! Elevate your brand with our tailored Digital Image Editing services for web and print perfection.', link: '/digital-editing' },
    { icon: 'fas fa-tools', title: 'Custom Services', description: 'Have a unique project in mind? Our team is flexible and ready to create custom solutions to fit your needs.', link: '/custom-services' },
    { icon: 'fas fa-cogs', title: 'Web Development', description: 'We build modern, responsive, and high-performance websites and web applications from front-end to back-end.', link: '/web-development' },
    { icon: 'fab fa-wordpress', title: 'WordPress Solutions', description: 'Leverage the power of WordPress with our comprehensive solutions, including custom theme and plugin development.', link: '/wordpress-solutions' },
    { icon: 'fas fa-database', title: 'Data Processing', description: 'Efficient and accurate data processing services to help you manage, organize, and utilize your valuable information.', link: '/data-processing' },
    { icon: 'fas fa-user-tie', title: 'Virtual Assistant', description: 'Our professional virtual assistants can handle your administrative tasks, allowing you to focus on growing your business.', link: '/virtual-assistant' }
];

// --- Main Components ---

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
                    <a href="/" className="text-purple-400 transition-colors">Home</a>
                    <a href="/services" className="text-gray-300 hover:text-purple-400 transition-colors">Services</a>
                    <a href="/about" className="text-gray-300 hover:text-purple-400 transition-colors">About</a>
                    <a href="/contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</a>
                    <a href="/join" className="text-gray-300 hover:text-purple-400 transition-colors">Opportunities</a>
                </div>
                <div className="hidden lg:flex flex-col items-end">
                    <div>
                        <span className="text-sm text-gray-400">Toll Free</span>
                        <span className="font-bold text-purple-400 ml-2">+1(800) 259-1090</span>
                    </div>
                    <div className="flex space-x-4 mt-2 text-gray-400">
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
                    <a href="/" className="block py-3 px-4 text-sm hover:bg-gray-700">Home</a>
                    <a href="/services" className="block py-3 px-4 text-sm hover:bg-gray-700">Services</a>
                    <a href="/about" className="block py-3 px-4 text-sm hover:bg-gray-700">About</a>
                    <a href="/contact" className="block py-3 px-4 text-sm hover:bg-gray-700">Contact</a>
                    <a href="/join" className="block py-3 px-4 text-sm hover:bg-gray-700">Opportunities</a>
                </div>
            )}
        </nav>
    );
};

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { 
            bg: 'https://placehold.co/1920x1080/1A1A1A/FFFFFF?text=Modern+Solutions',
            title: 'Modern Solutions for a Digital World',
            subtitle: 'We provide the tools and talent to help you succeed.'
        },
        { 
            bg: 'https://placehold.co/1920x1080/1A1A1A/C084FC?text=Creative+Designs',
            title: 'Creative Designs, Powerful Results',
            subtitle: 'From concept to creation, we bring your vision to life.'
        },
        { 
            bg: 'https://placehold.co/1920x1080/1A1A1A/3B82F6?text=Global+Talent',
            title: 'Unlock a World of Talent',
            subtitle: 'Access a global network of skilled professionals ready to help you grow.'
        }
    ];

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 5000);
        return () => clearInterval(slideInterval);
    }, []);

    return (
        <header className="relative text-white py-8 text-center">
            <div className="relative w-full h-[75vh] mx-auto overflow-hidden bg-black rounded-xl border border-gray-800">
                {slides.map((slide, index) => (
                    <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
                        <img src={slide.bg} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-6">
                            <h1 className={`text-4xl sm:text-6xl font-extrabold max-w-3xl transition-transform duration-1000 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>{slide.title}</h1>
                            <p className={`text-lg text-gray-300 mt-4 max-w-2xl transition-transform duration-1000 delay-200 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>{slide.subtitle}</p>
                        </div>
                    </div>
                ))}
                <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-10"><i className="fas fa-chevron-left"></i></button>
                <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-10"><i className="fas fa-chevron-right"></i></button>
            </div>
            <div className="flex justify-center mt-4">
                {slides.map((_, index) => (
                    <button key={index} onClick={() => setCurrentSlide(index)} className={`h-3 w-3 mx-1 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-500'}`}></button>
                ))}
            </div>
        </header>
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

const About = () => (
    <RevealOnScroll>
        <section className="py-8">
            <div className="flex flex-col lg:flex-row items-center gap-8 bg-transparent p-8 rounded-xl border border-gray-800 hover:shadow-2xl hover:shadow-purple-500/10 transition-shadow duration-300">
                <div className="relative w-full max-w-md lg:w-1/2 min-h-[400px]">
                    <div className="absolute top-0 left-0 w-5/6 h-5/6 bg-purple-800 rounded-xl z-0"></div>
                    <div className="absolute bottom-0 right-0 w-5/6 h-5/6 bg-white p-4 rounded-xl shadow-2xl z-10">
                        <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Team collaborating" className="w-full h-full object-cover rounded-lg" />
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <h2 className="text-3xl font-extrabold text-purple-400 mb-4">Our Mission</h2>
                    <p className="text-gray-300 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p className="text-gray-300 leading-relaxed mt-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>
            </div>
        </section>
    </RevealOnScroll>
);

const Testimonials = () => (
     <RevealOnScroll>
        <section className="py-8">
            <h2 className="text-3xl font-extrabold text-purple-400 mb-8 text-center">What Life Looks Like With Our VAs</h2>
            <div className="relative overflow-hidden group">
                <div className="flex animate-scroll group-hover:pause">
                    {[...testimonials, ...testimonials].map((testimonial, index) => (
                        <div key={index} className="min-w-[335px] p-2">
                            <div className="bg-transparent rounded-lg h-[420px] border border-gray-800 relative mt-12">
                                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full overflow-hidden border-4 border-gray-800 z-10">
                                    <img src={testimonial.img} alt={testimonial.alt} className="w-full h-full object-cover" />
                                </div>
                                <div className="pt-16 p-6 text-center flex flex-col justify-between h-full">
                                    <i className="fas fa-quote-left text-purple-400 opacity-20 text-2xl absolute top-4 left-4"></i>
                                    <p className="italic text-gray-300 flex-grow">{testimonial.quote}</p>
                                    <div>
                                        <cite className="font-bold text-white not-italic block">{testimonial.author}</cite>
                                        <span className="text-sm text-gray-400">{testimonial.title}</span>
                                    </div>
                                    <i className="fas fa-quote-right text-purple-400 opacity-20 text-2xl absolute bottom-4 right-4"></i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </RevealOnScroll>
);

const Services = () => (
    <RevealOnScroll>
        <section className="py-8">
            <div className="bg-transparent p-8 rounded-xl border border-gray-800 hover:shadow-2xl hover:shadow-purple-500/10 transition-shadow duration-300">
                <div className="text-center mb-8">
                    <h3 className="text-purple-400 font-semibold">What We Do Best</h3>
                    <h2 className="text-3xl font-extrabold text-white">Excellence in Every Service</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mt-4">We take pride in delivering excellence in every service we offer. From web app development to virtual assistance, our dedicated teams are committed to meeting your unique business needs.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="bg-transparent p-6 rounded-lg border border-gray-800 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                            <a href={service.link}>
                                <div className="bg-purple-600 inline-block p-3 rounded-lg mb-4 transition-transform hover:scale-110">
                                    <i className={`${service.icon} text-white text-2xl`}></i>
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
                            </a>
                            <p className="text-gray-400 text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </RevealOnScroll>
);

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
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><i className="fab fa-instagram"></i></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://www.skype.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><i className="fab fa-skype"></i></a>
                    </div>
                </div>
                <div>
                    <h4 className="font-bold text-white mb-4">Services</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/crm" className="hover:text-white">CRM Management</a></li>
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
                        <li><a href="/about" className="hover:text-white">About</a></li>
                        <li><a href="/contact" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-white mb-4">Legal</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/claim" className="hover:text-white">Claim</a></li>
                        <li><a href="/policy" className="hover:text-white">Policies</a></li>
                        <li><a href="/terms" className="hover:text-white">Terms</a></li>
                    </ul>
                </div>
            </div>
            <p className="text-center text-sm mt-12 border-t border-gray-800 pt-8">© 2025 Virtual Switch, Inc. All rights reserved.</p>
        </footer>
    </RevealOnScroll>
);


export default function App() {
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
        
        @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-335px * 5)); }
        }

        .animate-scroll {
            animation: scroll 20s linear infinite;
        }
        
        .pause:hover {
            animation-play-state: paused;
        }
      `}</style>
      <Header />
      <main className="container mx-auto px-4">
        <HeroCarousel />
        <About />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
