"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

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
      className={`transition-opacity duration-1000 transform ${
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

  const navLinks = ["Home", "Services", "Opportunities"];

  return (
    <nav className="sticky top-0 z-50 bg-black bg-opacity-50 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="flex items-center gap-3 text-purple-400">
          <Image
            src="https://placehold.co/100x100/C084FC/0A0A0A?text=VS"
            alt="VS Logo"
            width={logoSize}
            height={logoSize}
            className="h-14 w-14 rounded-full"
            unoptimized
          />
          <span className="text-2xl font-extrabold text-white">Virtual Switch</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`/${link.toLowerCase() === "home" ? "" : link.toLowerCase()}`}
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white text-2xl">
            &#9776;
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-90">
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`/${link.toLowerCase() === "home" ? "" : link.toLowerCase()}`}
              className="block py-3 px-4 text-sm hover:bg-gray-700"
            >
              {link}
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
  return (
    <RevealOnScroll>
      <footer className="bg-black text-gray-400 py-12 mt-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="https://placehold.co/100x100/C084FC/0A0A0A?text=VS"
                alt="VS Logo"
                width={logoSize}
                height={logoSize}
                className="h-12 w-12 rounded-full"
                unoptimized
              />
              <span className="text-xl font-bold text-white">Virtual Switch</span>
            </div>
            <p className="text-sm max-w-xs mb-4">
              Your industry experts, propelling your business towards success.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Home", "Services", "Opportunities"].map((link) => (
                <Link
                  key={link}
                  href={`/${link.toLowerCase() === "home" ? "" : link.toLowerCase()}`}
                  className="hover:text-white"
                >
                  {link}
                </Link>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              {["Claim", "Privacy", "Terms"].map((link) => (
                <Link key={link} href={`/${link.toLowerCase()}`} className="hover:text-white">
                  {link}
                </Link>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-center text-sm mt-12 border-t border-gray-800 pt-8">
          © 2025 Virtual Switch, Inc. All rights reserved.
        </p>
      </footer>
    </RevealOnScroll>
  );
};

// ---------------- ServiceSection ----------------
const ServiceSection = ({ title, text, imageSrc, reverse = false }) => (
  <RevealOnScroll>
    <section className={`flex flex-col lg:flex-row items-center gap-12 ${reverse ? "lg:flex-row-reverse" : ""}`}>
      <div className="lg:w-1/2">
        <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-gray-400 leading-relaxed">{text}</p>
      </div>

      <div className="lg:w-1/2 relative min-h-[350px]">
        <div className={`absolute w-5/6 h-5/6 bg-purple-600 rounded-xl z-0 ${reverse ? "top-0 right-0 rotate-3" : "top-0 left-0 -rotate-3"}`}></div>
        <div className={`absolute w-5/6 h-5/6 bg-white p-4 rounded-xl shadow-2xl z-10 ${reverse ? "bottom-0 left-0 -rotate-3" : "bottom-0 right-0 rotate-3"}`}>
          <Image
            src={imageSrc}
            alt={title}
            width={600}
            height={400}
            className="w-full h-full object-cover rounded-lg"
            unoptimized
          />
        </div>
      </div>
    </section>
  </RevealOnScroll>
);

// ---------------- SocialMediaServicePage ----------------
export default function SocialMediaServicePage() {
  return (
    <div className="min-h-screen relative bg-black text-white">
      <Header />

      <main className="container mx-auto px-4 py-16 space-y-16">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-purple-400">
              Social Media Management
            </h1>
            <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
              Build your brand presence, engage your audience, and drive growth with our expert social media strategies.
            </p>
          </div>
        </RevealOnScroll>

        <ServiceSection
          title="Strategic Content Creation"
          text="We develop a tailored content strategy that resonates with your target audience. From creating engaging posts and eye-catching graphics to planning your monthly content calendar, we ensure your brand's voice is consistent and compelling across all platforms."
          imageSrc="https://placehold.co/600x400/1E293B/FFFFFF?text=Content+Strategy"
        />

        <ServiceSection
          title="Community Engagement & Growth"
          text="Building a community is key to social media success. We actively engage with your followers, respond to comments and messages, and run targeted campaigns to grow your audience. We turn followers into loyal customers and brand advocates."
          imageSrc="https://placehold.co/600x400/1E293B/FFFFFF?text=Community+Engagement"
          reverse
        />
      </main>

      <Footer />
    </div>
  );
}
