"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGoogle, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// ---------------- RevealOnScroll ----------------
const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

// ---------------- Header ----------------
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoSize = 56;

  const externalLinks = [
    { icon: FaFacebookF, href: "https://facebook.com" },
    { icon: FaInstagram, href: "https://instagram.com" },
    { icon: FaLinkedinIn, href: "https://linkedin.com" },
    { icon: FaGoogle, href: "https://google.com" },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Opportunities", href: "/join" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black bg-opacity-50 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="flex items-center gap-3 text-purple-400">
          <Image
            src="https://placehold.co/100x100/C084FC/0A0A0A?text=VS"
            alt="VS Logo"
            width={logoSize}
            height={logoSize}
            className="rounded-full"
            unoptimized
          />
          <span className="text-2xl font-extrabold text-white">Virtual Switch</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <Link key={i} href={link.href} className="text-gray-300 hover:text-purple-400 transition">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex flex-col items-end">
          <div>
            <span className="text-sm text-gray-400">Toll Free</span>
            <span className="font-bold text-purple-400 ml-2">+1(800) 259-1090</span>
          </div>
          <div className="flex space-x-4 mt-2 text-gray-400">
            {externalLinks.map((link, i) => (
              <span key={i} onClick={() => window.open(link.href, "_blank")} className="hover:text-purple-400 cursor-pointer">
                <link.icon size={18} />
              </span>
            ))}
          </div>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <FaChevronLeft className="text-2xl" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-90">
          {navLinks.map((link, i) => (
            <Link key={i} href={link.href}>
              <span className="block py-3 px-4 text-sm cursor-pointer text-gray-300 hover:bg-gray-700">
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

// ---------------- Footer ----------------
const Footer = () => {
  const logoSize = 48;
  const externalLinks = [
    { icon: FaFacebookF, href: "https://facebook.com" },
    { icon: FaInstagram, href: "https://instagram.com" },
    { icon: FaLinkedinIn, href: "https://linkedin.com" },
    { icon: FaGoogle, href: "https://google.com" },
  ];

  return (
    <RevealOnScroll>
      <footer className="bg-black text-gray-400 py-12 mt-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="https://placehold.co/100x100/C084FC/0A0A0A?text=VS" alt="Logo" width={logoSize} height={logoSize} className="rounded-full" unoptimized />
              <span className="text-xl font-bold text-white">Virtual Switch</span>
            </div>
            <p className="text-sm max-w-xs mb-4">Your industry experts, propelling your business towards success.</p>
            <div className="flex space-x-4">
              {externalLinks.map((link, i) => (
                <span key={i} onClick={() => window.open(link.href, "_blank")} className="hover:text-white cursor-pointer">
                  <link.icon />
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            {["/", "/services", "/about", "/contact"].map((l, i) => (
              <Link key={i} href={l}>
                <span className="block text-sm py-1 cursor-pointer hover:text-white">{l.replace("/", "").toUpperCase() || "HOME"}</span>
              </Link>
            ))}
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            {["/claim", "/policy", "/terms"].map((l, i) => (
              <Link key={i} href={l}>
                <span className="block text-sm py-1 cursor-pointer hover:text-white">{l.replace("/", "").toUpperCase()}</span>
              </Link>
            ))}
          </div>
        </div>
        <p className="text-center text-sm mt-12 border-t border-gray-800 pt-8">© 2025 Virtual Switch, Inc. All rights reserved.</p>
      </footer>
    </RevealOnScroll>
  );
};

// ---------------- Page Template ----------------
export default function PageTemplate({ title = "Page Title", description = "Page description goes here." }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="container mx-auto px-4 py-16 space-y-8">
        <RevealOnScroll>
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-400 text-center">{title}</h1>
          <p className="text-gray-300 text-center max-w-3xl mx-auto">{description}</p>
        </RevealOnScroll>
      </main>
      <Footer />
    </div>
  );
}
