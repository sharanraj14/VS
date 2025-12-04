"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// -------- Header --------

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black bg-opacity-50 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="flex items-center gap-3 text-purple-400">
          <Image
            src="https://placehold.co/100x100/C084FC/0A0A0A?text=VS"
            alt="VS Logo"
            width={56}
            height={56}
            className="h-14 w-14 rounded-full"
          />
          <span className="text-2xl font-extrabold text-white">
            Virtual Switch
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-300 hover:text-purple-400">
            Home
          </Link>
          <Link href="/services" className="text-gray-300 hover:text-purple-400">
            Services
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-purple-400">
            About
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-purple-400">
            Contact
          </Link>
          <Link href="/join" className="text-gray-300 hover:text-purple-400">
            Opportunities
          </Link>
        </div>

        <div className="hidden lg:flex flex-col items-end">
          <div>
            <span className="text-sm text-gray-400">Toll Free</span>
            <span className="font-bold text-purple-400 ml-2">
              +1(800) 259-1090
            </span>
          </div>
          <div className="flex space-x-4 mt-2 text-gray-400">
            <Link href="#" className="hover:text-purple-400">
              <i className="fab fa-facebook-f" />
            </Link>
            <Link href="#" className="hover:text-purple-400">
              <i className="fab fa-instagram" />
            </Link>
            <Link href="#" className="hover:text-purple-400">
              <i className="fab fa-linkedin-in" />
            </Link>
            <Link href="#" className="hover:text-purple-400">
              <i className="fab fa-google" />
            </Link>
          </div>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
        >
          <i className="fas fa-bars text-2xl" />
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-900">
          <Link href="/" className="block py-3 px-4 text-sm hover:bg-gray-700">
            Home
          </Link>
          <Link
            href="/services"
            className="block py-3 px-4 text-sm hover:bg-gray-700"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="block py-3 px-4 text-sm hover:bg-gray-700"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block py-3 px-4 text-sm hover:bg-gray-700"
          >
            Contact
          </Link>
          <Link
            href="/join"
            className="block py-3 px-4 text-sm hover:bg-gray-700"
          >
            Opportunities
          </Link>
        </div>
      )}
    </nav>
  );
};

// -------- Reveal Animation --------

const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShow(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
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

// -------- Footer --------

const Footer = () => (
  <RevealOnScroll>
    <footer className="bg-black text-gray-400 py-12 mt-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16">

        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="https://placehold.co/100x100/C084FC/0A0A0A?text=VS"
              alt="Logo"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full"
            />
            <span className="text-xl font-bold text-white">Virtual Switch</span>
          </div>
        </div>

        <div>
          <p className="text-sm max-w-xs mb-4">
            Your industry experts, specializing in management and outsourcing.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-white">
              <i className="fab fa-facebook-f" />
            </Link>
            <Link href="#" className="hover:text-white">
              <i className="fab fa-instagram" />
            </Link>
            <Link href="#" className="hover:text-white">
              <i className="fab fa-linkedin-in" />
            </Link>
            <Link href="#" className="hover:text-white">
              <i className="fab fa-skype" />
            </Link>
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

export default function PolicyPage() {
  return (
    <div className="min-h-screen">

      {/* Global CSS for Next.js */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />

      <Header />

      <main className="container mx-auto px-4 py-8">
        <RevealOnScroll>
          <h1 className="text-4xl font-extrabold text-purple-400 text-center mb-10">
            Policy
          </h1>
        </RevealOnScroll>
      </main>

      <Footer />
    </div>
  );
}
