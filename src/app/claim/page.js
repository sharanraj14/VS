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
          {["Home", "Services", "About", "Contact", "Opportunities"].map(
            (item) => (
              <Link
                key={item}
                href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                {item}
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-90">
          {["Home", "Services", "About", "Contact", "Opportunities"].map(
            (item) => (
              <Link
                key={item}
                href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className="block py-3 px-4 text-sm hover:bg-gray-700"
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

// --- ClaimPage Component ---
export default function ClaimPage() {
  return (
    <div className="min-h-screen">
      {/* ✅ External styles moved here (Vercel-safe) */}
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

      {/* Global Styling */}
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

        .policy-section {
          background-color: rgba(23, 23, 23, 0.4);
          padding: 2rem;
          border-radius: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .policy-content h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #c084fc;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }

        .policy-content p {
          line-height: 1.75;
        }
      `}</style>

      <Header />

      <main className="container mx-auto px-4 py-8">
        <RevealOnScroll>
          <section className="policy-section">
            <h1 className="text-3xl font-extrabold text-purple-400 mb-4">
              Claims & Indemnification
            </h1>

            <div className="policy-content text-gray-300">
              {/* Your policy sections */}
              <h3>1. Scope of Services & Limitations</h3>
              <p>
                Virtual Switch will provide virtual assistance services as agreed
                in the proposal or onboarding document...
              </p>

              <h3>2. Performance & Quality Disclaimer</h3>
              <p>
                While Virtual Switch strives to meet client requirements and
                deadlines, the company is not liable for delays...
              </p>

              <h3>3. Intellectual Property Rights</h3>
              <p>
                Upon full payment, any work product created for the client becomes
                the client’s property...
              </p>

              <h3>4. Force Majeure Clause</h3>
              <p>
                Virtual Switch will not be held liable for failure to perform
                services due to circumstances beyond its control...
              </p>

              <h3>5. Communication Channels & Response Times</h3>
              <p>
                All communication should occur via the official channels...
              </p>

              <h3>6. Refund Policy</h3>
              <p>Fees paid are non-refundable except where required by law.</p>

              <h3>7. Indemnification</h3>
              <p>
                The client shall defend, indemnify, and hold harmless Virtual
                Switch and its affiliates...
              </p>
            </div>
          </section>
        </RevealOnScroll>
      </main>
    </div>
  );
}
