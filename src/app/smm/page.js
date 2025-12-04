"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

// ---------------- RevealOnScroll ----------------
const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    const current = ref.current;
    if (current) observer.observe(current);
    return () => current && observer.unobserve(current);
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

        <div className="hidden md:flex items-center gap-8">
          {["Home","Services","About","Contact","Opportunities"].map((link) => (
            <Link
              key={link}
              href={`/${link.toLowerCase() === "home" ? "" : link.toLowerCase()}`}
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              {link}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex flex-col items-end">
          <div>
            <span className="text-sm text-gray-400">Toll Free</span>
            <span className="font-bold text-purple-400 ml-2">+1(800) 259-1090</span>
          </div>
          <div className="flex space-x-4 mt-2 text-gray-400">
            {["facebook","instagram","linkedin","google"].map((platform) => (
              <a
                key={platform}
                href={`https://${platform}.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400"
              >
                <i className={`fab fa-${platform}${platform==="google"?"":"-in"}`}></i>
              </a>
            ))}
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
          {["Home","Services","About","Contact","Opportunities"].map((link) => (
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
              Your industry experts, specializing in seamless management of outsourcing needs, propelling your business towards success.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {["CRM Management","Social Media Management","Virtual Assistance","Digital Image Editing","Web App Development"].map((service) => (
                <li key={service}>
                  <a href="#" onClick={(e)=>e.preventDefault()} className="hover:text-white">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Home","Services","About","Contact"].map((link) => (
                <Link key={link} href={`/${link.toLowerCase() === "home" ? "" : link.toLowerCase()}`} className="hover:text-white">{link}</Link>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              {["Claim","Privacy","Terms"].map((link) => (
                <Link key={link} href={`/${link.toLowerCase()}`} className="hover:text-white">{link}</Link>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-center text-sm mt-12 border-t border-gray-800 pt-8">© 2025 Virtual Switch, Inc. All rights reserved.</p>
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
    <div className="min-h-screen relative">
      <Head>
        <title>Virtual Switch - Social Media Management</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <style jsx global>{`
        body {
          font-family: 'Inter', sans-serif;
          background-color: #0a0a0a;
          color: #f3f4f6;
          overflow-x: hidden;
        }
        body::before {
          content: '';
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          z-index: -1;
          background: radial-gradient(at 75% 0%, rgba(200,0,160,0.3) 0%, transparent 50%), 
                      radial-gradient(at 0% 100%, rgba(100,0,200,0.3) 0%, transparent 50%), 
                      radial-gradient(at 100% 100%, rgba(200,0,160,0.3) 0%, transparent 50%);
          animation: move-gradient 40s ease-in-out infinite;
        }
        @keyframes move-gradient {
          0% { background-position: 0% 50%, 100% 50%, 50% 0%; }
          50% { background-position: 100% 50%, 0% 50%, 50% 100%; }
          100% { background-position: 0% 50%, 100% 50%, 50% 0%; }
        }
      `}</style>

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
