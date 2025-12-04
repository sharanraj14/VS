"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// ---------------- RevealOnScroll ----------------
const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShow(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
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

// ---------------- Header ----------------
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Opportunities", href: "/join" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black bg-opacity-50 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-purple-400 font-bold text-2xl">
          Virtual Switch
        </Link>

        <div className="hidden md:flex gap-6">
          {navLinks.map((link, i) => (
            <Link key={i} href={link.href} className="text-gray-300 hover:text-purple-400">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            Menu
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-90">
          {navLinks.map((link, i) => (
            <Link key={i} href={link.href}>
              <span className="block py-3 px-4 text-gray-300 hover:bg-gray-700">{link.name}</span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

// ---------------- Footer ----------------
const Footer = () => (
  <RevealOnScroll>
    <footer className="bg-black text-gray-400 py-12 mt-12 border-t border-gray-800 text-center">
      <p>© 2025 Virtual Switch, Inc. All rights reserved.</p>
    </footer>
  </RevealOnScroll>
);

// ---------------- Page ----------------
export default function VirtualAssistancePage() {
  const imageWidth = 600;
  const imageHeight = 400;

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="container mx-auto px-4 py-16 space-y-16">

        {/* Hero Section */}
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-purple-400">
              Virtual Assistance Services
            </h1>
            <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
              Delegate your tasks, reclaim your time, and focus on what matters most
              with a dedicated virtual assistant.
            </p>
          </div>
        </RevealOnScroll>

        {/* Section 1 */}
        <RevealOnScroll>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-4">
                Comprehensive Administrative Support
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Our virtual assistants handle all your administrative needs, from managing
                schedules and appointments to handling email correspondence and data entry.
                We keep your operations organized and efficient.
              </p>
              <Link href="/join">
                <span className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-500 cursor-pointer">
                  Get Started
                </span>
              </Link>
            </div>

            <div className="lg:w-1/2 relative min-h-[350px]">
              <div className="absolute top-0 left-0 w-5/6 h-5/6 bg-purple-600 rounded-xl z-0 -rotate-3"></div>
              <div className="absolute bottom-0 right-0 w-5/6 h-5/6 bg-white p-4 rounded-xl shadow-2xl z-10 rotate-3">
                <Image
                  src="https://placehold.co/600x400/1E293B/FFFFFF?text=Admin+Support"
                  alt="Administrative Support"
                  width={imageWidth}
                  height={imageHeight}
                  className="w-full h-full object-cover rounded-lg"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Section 2 */}
        <RevealOnScroll>
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-4">
                Personalized Executive Assistance
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Get high-level support for your executive tasks. Our VAs assist with travel,
                reports, presentations, and managing commitments—boosting your productivity.
              </p>
              <Link href="/join">
                <span className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 cursor-pointer">
                  Book a VA
                </span>
              </Link>
            </div>

            <div className="lg:w-1/2 relative min-h-[350px]">
              <div className="absolute top-0 right-0 w-5/6 h-5/6 bg-blue-500 rounded-xl z-0 rotate-3"></div>
              <div className="absolute bottom-0 left-0 w-5/6 h-5/6 bg-white p-4 rounded-xl shadow-2xl z-10 -rotate-3">
                <Image
                  src="https://placehold.co/600x400/1E293B/FFFFFF?text=Executive+Assistance"
                  alt="Executive Assistance"
                  width={imageWidth}
                  height={imageHeight}
                  className="w-full h-full object-cover rounded-lg"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </RevealOnScroll>

      </main>

      <Footer />
    </div>
  );
}
