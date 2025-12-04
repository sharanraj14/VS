// /app/layout.js
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
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

// --- Header ---
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black bg-opacity-50 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center p-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 text-purple-400">
          <Image
            src="https://placehold.co/100x100/C084FC/0A0A0A?text=VS"
            alt="VS Logo"
            width={56}
            height={56}
            className="rounded-full"
          />
          <span className="text-2xl font-extrabold text-white">
            Virtual Switch
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-300 hover:text-purple-400 transition-colors">Home</Link>
          <Link href="/services" className="text-gray-300 hover:text-purple-400 transition-colors">Services</Link>
          <Link href="/about" className="text-gray-300 hover:text-purple-400 transition-colors">About</Link>
          <Link href="/contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</Link>
          <Link href="/join" className="text-gray-300 hover:text-purple-400 transition-colors">Opportunities</Link>
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex flex-col items-end">
          <div>
            <span className="text-sm text-gray-400">Toll Free</span>
            <span className="font-bold text-purple-400 ml-2">+1(800) 259-1090</span>
          </div>
          <div className="flex space-x-4 mt-2 text-gray-400">

            {/* External Links — rewritten using Link + span */}
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <span className="hover:text-purple-400"><i className="fab fa-facebook-f"></i></span>
            </Link>

            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <span className="hover:text-purple-400"><i className="fab fa-instagram"></i></span>
            </Link>

            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <span className="hover:text-purple-400"><i className="fab fa-linkedin-in"></i></span>
            </Link>

            <Link href="https://google.com" target="_blank" rel="noopener noreferrer">
              <span className="hover:text-purple-400"><i className="fab fa-google"></i></span>
            </Link>

          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-90">
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

// --- RevealOnScroll ---
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
    <div
      ref={ref}
      className={`transition-opacity duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

// --- Footer ---
const Footer = () => {
  const internalLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/claim", label: "Claim" },
    { href: "/policy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ];

  const externalLinks = [
    { href: "https://facebook.com", icon: "fab fa-facebook-f" },
    { href: "https://instagram.com", icon: "fab fa-instagram" },
    { href: "https://linkedin.com", icon: "fab fa-linkedin-in" },
    { href: "https://google.com", icon: "fab fa-google" },
  ];

  return (
    <RevealOnScroll>
      <footer className="bg-black text-gray-400 py-12 mt-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16 text-left">

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="https://placehold.co/100x100/C084FC/0A0A0A?text=VS"
                  alt="VS Logo"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <span className="text-xl font-bold text-white">Virtual Switch</span>
              </div>
              <p className="text-sm max-w-xs mb-4">
                Your industry experts, specializing in seamless management of outsourcing needs.
              </p>
              <div className="flex space-x-4">
                {externalLinks.map((link, i) => (
                  <Link key={i} href={link.href} target="_blank" rel="noopener noreferrer">
                    <span className="hover:text-white"><i className={link.icon}></i></span>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              {internalLinks.map((link, i) => (
                <Link key={i} href={link.href}>
                  <span className="block text-sm py-1 cursor-pointer hover:text-white">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>

          </div>
        </div>

        <p className="text-center text-sm mt-12 border-t border-gray-800 pt-8">
          © 2025 Virtual Switch, Inc. All rights reserved.
        </p>
      </footer>
    </RevealOnScroll>
  );
};

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
