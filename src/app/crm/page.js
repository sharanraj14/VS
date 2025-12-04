"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

// --- Reveal on Scroll Component ---
const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
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

// --- Header Component ---
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
            className="rounded-full"
          />
          <span className="text-2xl font-extrabold text-white">Virtual Switch</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-300 hover:text-purple-400">Home</Link>
          <Link href="/services" className="text-gray-300 hover:text-purple-400">Services</Link>
          <Link href="/about" className="text-gray-300 hover:text-purple-400">About</Link>
          <Link href="/contact" className="text-gray-300 hover:text-purple-400">Contact</Link>
          <Link href="/join" className="text-gray-300 hover:text-purple-400">Opportunities</Link>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-90">
          <Link href="/" className="block py-3 px-4 hover:bg-gray-700">Home</Link>
          <Link href="/services" className="block py-3 px-4 hover:bg-gray-700">Services</Link>
          <Link href="/about" className="block py-3 px-4 hover:bg-gray-700">About</Link>
          <Link href="/contact" className="block py-3 px-4 hover:bg-gray-700">Contact</Link>
          <Link href="/join" className="block py-3 px-4 hover:bg-gray-700">Opportunities</Link>
        </div>
      )}
    </nav>
  );
};

// --- CRM Page Component ---
export default function CrmPage() {
  return (
    <div className="min-h-screen bg-black">

      {/* ✨ FIXED: External imports MUST be inside <Head /> */}
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Global custom styles (safe version) */}
      <style jsx global>{`
        body {
          font-family: "Inter", sans-serif;
          background-color: #0a0a0a;
          color: #f3f4f6;
          overflow-x: hidden;
        }

        body::before {
          content: "";
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          background: radial-gradient(
              at 80% 10%,
              hsla(280, 80%, 50%, 0.2) 0px,
              transparent 50%
            ),
            radial-gradient(
              at 20% 90%,
              hsla(260, 90%, 50%, 0.2) 0px,
              transparent 50%
            );
          animation: move-gradient 20s ease-in-out infinite;
        }

        @keyframes move-gradient {
          0%,
          100% {
            background-position: 0% 50%, 100% 50%;
          }
          50% {
            background-position: 100% 50%, 0% 50%;
          }
        }
      `}</style>

      <Header />

      <main className="container mx-auto px-4 py-16">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-purple-400">
              CRM Management Services
            </h1>
            <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
              Streamline your customer relationships, boost sales, and enhance service with our expert CRM management solutions.
            </p>
          </div>
        </RevealOnScroll>

        <div className="space-y-16">

          {/* Section 1 */}
          <RevealOnScroll>
            <div className="flex flex-col lg:flex-row items-center gap-12">

              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-white mb-4">Centralize Your Customer Data</h2>
                <p className="text-gray-400 leading-relaxed">
                  Say goodbye to scattered spreadsheets and notes. We help you manage a centralized CRM system that gives a 360° view of every customer interaction.
                </p>
              </div>

              <div className="lg:w-1/2 relative min-h-[350px]">
                <div className="absolute top-0 left-0 w-5/6 h-5/6 bg-purple-600 rounded-xl z-0 -rotate-3"></div>
                <div className="absolute bottom-0 right-0 w-5/6 h-5/6 bg-white p-4 rounded-xl shadow-2xl z-10 rotate-3">
                  <Image
                    src="https://placehold.co/600x400/1E293B/FFFFFF?text=CRM+Dashboard"
                    alt="CRM Dashboard"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover rounded-lg"
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
                  Automate & Optimize Your Sales Funnel
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  We create automated marketing and sales workflows that nurture leads and help close deals faster—so your team can focus on selling.
                </p>
              </div>

              <div className="lg:w-1/2 relative min-h-[350px]">
                <div className="absolute top-0 right-0 w-5/6 h-5/6 bg-blue-500 rounded-xl z-0 rotate-3"></div>
                <div className="absolute bottom-0 left-0 w-5/6 h-5/6 bg-white p-4 rounded-xl shadow-2xl z-10 -rotate-3">
                  <Image
                    src="https://placehold.co/600x400/1E293B/FFFFFF?text=Sales+Automation"
                    alt="Sales Automation"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

            </div>
          </RevealOnScroll>

        </div>
      </main>
    </div>
  );
}
