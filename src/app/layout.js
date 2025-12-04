// /app/layout.js
"use client";

import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// --- Fonts ---
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- Reusable Components ---
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black bg-opacity-50 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="/" className="flex items-center gap-3 text-purple-400">
          <img
            src="https://placehold.co/100x100/C084FC/0A0A0A?text=VS"
            alt="VS Logo"
            className="h-14 w-14 rounded-full"
          />
          <span className="text-2xl font-extrabold text-white">
            Virtual Switch
          </span>
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
  const ref = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
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
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16 text-left">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="https://placehold.co/100x100/C084FC/0A0A0A?text=VS" alt="VS Logo" className="h-12 w-12 rounded-full" />
              <span className="text-xl font-bold text-white">Virtual Switch</span>
            </div>
          </div>
          <div>
            <p className="text-sm max-w-xs mb-4">Your industry experts, specializing in seamless management of outsourcing needs, propelling your business towards success.</p>
            <div className="flex space-x-4">
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
              <li><a href="/smm" className="hover:text-white">Social Media Management</a></li>
              <li><a href="/va" className="hover:text-white">Virtual Assistance</a></li>
              <li><a href="#" className="hover:text-white">Digital Image Editing</a></li>
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
      </div>
      <p className="text-center text-sm mt-12 border-t border-gray-800 pt-8">© 2025 Virtual Switch, Inc. All rights reserved.</p>
    </footer>
  </RevealOnScroll>
);

// --- Root Layout ---
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
