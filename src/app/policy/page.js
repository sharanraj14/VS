"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

// ---------------- HEADER ----------------
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black/60 backdrop-blur-md border-b border-gray-800">
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

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {["Home", "Services", "About", "Contact", "Opportunities"].map(
            (item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                className="text-gray-300 hover:text-purple-400 transition"
              >
                {item}
              </Link>
            )
          )}
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex flex-col items-end">
          <div className="flex items-center gap-3 text-sm">
            <span className="text-gray-400">Toll Free</span>
            <span className="font-bold text-purple-400">+1 (800) 259-1090</span>
          </div>

          <div className="flex space-x-4 mt-2 text-gray-400">
            <Link href="#" className="hover:text-purple-400"><Facebook size={18} /></Link>
            <Link href="#" className="hover:text-purple-400"><Instagram size={18} /></Link>
            <Link href="#" className="hover:text-purple-400"><Linkedin size={18} /></Link>
            <Link href="#" className="hover:text-purple-400"><Mail size={18} /></Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
        >
          <svg width="28" height="28" fill="none" stroke="currentColor">
            <path strokeWidth="2" d="M4 7h20M4 14h20M4 21h20" />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          {["Home", "Services", "About", "Contact", "Opportunities"].map(
            (item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                className="block py-3 px-4 text-sm text-gray-300 hover:bg-gray-700 transition"
              >
                {item}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
};

// ---------------- REVEAL ANIMATION ----------------
const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => setShow(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);

    return () => ref.current && obs.unobserve(ref.current);
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

// ---------------- FOOTER ----------------
const Footer = () => (
  <RevealOnScroll>
    <footer className="bg-black text-gray-400 py-12 mt-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="https://placehold.co/100x100/C084FC/0A0A0A?text=VS"
              alt="Logo"
              width={48}
              height={48}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-white">Virtual Switch</span>
          </div>
        </div>

        {/* About */}
        <div>
          <p className="text-sm max-w-xs mb-4">
            Your industry experts, specializing in management and outsourcing.
          </p>

          <div className="flex space-x-4">
            <Link href="#" className="hover:text-white"><Facebook size={18} /></Link>
            <Link href="#" className="hover:text-white"><Instagram size={18} /></Link>
            <Link href="#" className="hover:text-white"><Linkedin size={18} /></Link>
            <Link href="#" className="hover:text-white"><Phone size={18} /></Link>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold text-white mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/crm">CRM Management</Link></li>
            <li><Link href="/smm">Social Media Management</Link></li>
            <li><Link href="/va">Virtual Assistance</Link></li>
            <li><Link href="#">Digital Image Editing</Link></li>
            <li><Link href="#">Web App Development</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-bold text-white mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/claim">Claim</Link></li>
            <li><Link href="/policy">Privacy</Link></li>
            <li><Link href="/terms">Terms</Link></li>
          </ul>
        </div>
      </div>

      <p className="text-center text-sm mt-12 border-t border-gray-800 pt-8">
        © 2025 Virtual Switch, Inc. All rights reserved.
      </p>
    </footer>
  </RevealOnScroll>
);

// ---------------- PAGE ----------------
export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <RevealOnScroll>
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-400 text-center mb-10">
            Policy
          </h1>
          <p className="max-w-3xl mx-auto text-gray-300 text-center leading-relaxed">
            Welcome to our Policy page. Here, we explain our privacy practices,
            user guidelines, and legal terms to ensure transparency and trust.
          </p>
        </RevealOnScroll>
      </main>

      <Footer />
    </div>
  );
}
