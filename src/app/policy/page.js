"use client";
import React, { useState, useEffect, useRef } from 'react';

// --- Reusable Components ---

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
                    <a href="/about" className="block py-3 px-4 text-sm hover:bg-gray-700">About</a>
                    <a href="/contact" className="block py-3 px-4 text-sm hover:bg-gray-700">Contact</a>
                    <a href="/join" className="block py-3 px-4 text-sm hover:bg-gray-700">Opportunities</a>
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
                        <li><a href="/policy" className="hover:text-white">Privacy</a></li>
                        <li><a href="/terms" className="hover:text-white">Terms</a></li>
                    </ul>
                </div>
            </div>
            <p className="text-center text-sm mt-12 border-t border-gray-800 pt-8">© 2025 Virtual Switch, Inc. All rights reserved.</p>
        </footer>
    </RevealOnScroll>
);


export default function PolicyPage() {
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
        
        .policy-content h3 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #c084fc;
            margin-top: 2rem;
            margin-bottom: 1rem;
        }
        .policy-content ul {
            list-style-type: disc;
            padding-left: 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
        .policy-content p {
            line-height: 1.75;
        }
            .section-title {
            font-size: 2.25rem;
            font-weight: 900; /* Bolder font weight */
            color: #c084fc;
            margin-bottom: 2rem;
            text-align: center;
        }
      `}</style>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <RevealOnScroll>
             <h1 className="section-title">Policy</h1>
            <div className="policy-content">
                <h3>Why Does This Program Work for You?</h3>
                <ul>
                    <li><strong>Dedicated Customer Success Manager:</strong> You will have a personal account manager to ensure everything runs smoothly and to serve as your primary point of contact.</li>
                    <li><strong>Flexible Support:</strong> We provide coverage during public holidays and offer a backup resource if your primary VA is unavailable, ensuring continuous support.</li>
                    <li><strong>Tailored Assistance:</strong> A Virtual Assistant (VA) is specifically assigned to you and your business, chosen for their expertise in your industry and ready to support your unique needs.</li>
                    <li><strong>2-Month Nesting Period for Success:</strong> The first two months serve as a nesting period where we get to know your business better, refine our approach, and make adjustments based on your feedback.</li>
                    <li><strong>Virtual Assistant Replacement:</strong> If at any point you feel your VA isn’t the right fit, we offer a free replacement until we find the perfect match for your needs.</li>
                    <li><strong>Referral Discount:</strong> If you refer a new client to us, you will receive a 5% to 10% discount on your next invoice as a thank you.</li>
                </ul>

                <h3>Adjustments and Usage Policy</h3>
                <ul>
                    <li><strong>Changes to VA Hours or Timings:</strong> Please inform us at least 2 days in advance for minor adjustments.</li>
                    <li><strong>Adjustments to Resource Hours:</strong> For significant changes, such as altering the overall allocation of hours, kindly notify us 1 week in advance.</li>
                </ul>

                <h3>Payment Terms</h3>
                <p>We use a monthly subscription system, with payments due every month. (Weekly payment is also accepted).</p>
                <ul>
                    <li>Payment is due no later than the 5th of the following month.</li>
                    <li>Failure to settle invoices by the specified due dates will result in a 1% late fee per month. Immediate suspension of services will be applicable until all dues are cleared.</li>
                </ul>

                 <h3>Data Security and Confidentiality</h3>
                 <p>To ensure the highest standards of data security, clients are required to adhere to the following guidelines:</p>
                <ul>
                    <li><strong>Restricted Sharing of Sensitive Information:</strong> Clients must not share sensitive details (e.g., credit card information, banking details, or login credentials) directly with the virtual assistant.</li>
                    <li><strong>Point of Contact:</strong> All sensitive data must be communicated solely to the designated account manager.</li>
                    <li><strong>Client Responsibilities:</strong> Clients are responsible for ensuring that any sensitive information shared aligns with this protocol.</li>
                </ul>
            </div>
        </RevealOnScroll>
      </main>
      <Footer />
    </div>
  );
}
