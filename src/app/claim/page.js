"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

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
          <span className="text-2xl font-extrabold text-white">
            Virtual Switch
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-300 hover:text-purple-400 transition-colors">
            Home
          </Link>
          <Link href="/services" className="text-gray-300 hover:text-purple-400 transition-colors">
            Services
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-purple-400 transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-purple-400 transition-colors">
            Contact
          </Link>
          <Link href="/join" className="text-gray-300 hover:text-purple-400 transition-colors">
            Opportunities
          </Link>
        </div>

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
          <Link href="/" className="block py-3 px-4 text-sm hover:bg-gray-700">
            Home
          </Link>
          <Link href="/services" className="block py-3 px-4 text-sm hover:bg-gray-700">
            Services
          </Link>
          <Link href="/about" className="block py-3 px-4 text-sm hover:bg-gray-700">
            About
          </Link>
          <Link href="/contact" className="block py-3 px-4 text-sm hover:bg-gray-700">
            Contact
          </Link>
          <Link href="/join" className="block py-3 px-4 text-sm hover:bg-gray-700">
            Opportunities
          </Link>
        </div>
      )}
    </nav>
  );
};

// --- ClaimPage Component ---
export default function ClaimPage() {
  return (
    <div className="min-h-screen">
      <style jsx global>{`
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');

        body {
          font-family: 'Inter', sans-serif;
          background-color: #0A0A0A;
          color: #f3f4f6;
          overflow-x: hidden;
        }

        body::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          background: radial-gradient(at 80% 10%, hsla(280, 80%, 50%, 0.2) 0px, transparent 50%), 
                      radial-gradient(at 20% 90%, hsla(260, 90%, 50%, 0.2) 0px, transparent 50%);
          animation: move-gradient 20s ease-in-out infinite;
        }

        @keyframes move-gradient {
          0%, 100% { background-position: 0% 50%, 100% 50%; }
          50% { background-position: 100% 50%, 0% 50%; }
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
            <h1 className="section-title text-3xl font-extrabold text-purple-400 mb-4">
              Claims & Indemnification
            </h1>

            <div className="policy-content text-gray-300">
              <h3>1. Scope of Services & Limitations</h3>
              <p>
                Virtual Switch will provide virtual assistance services as agreed in the proposal or onboarding document. Any additional tasks or services outside the agreed scope will require prior approval and may incur additional fees. Virtual Switch is not responsible for tasks that require licensed professionals (e.g., legal, medical, or financial advisory services) unless expressly agreed in writing.
              </p>

              <h3>2. Performance & Quality Disclaimer</h3>
              <p>
                While Virtual Switch strives to meet client requirements and deadlines, the company is not liable for delays or outcomes caused by client-side factors such as delayed feedback, unclear instructions, or lack of necessary information.
              </p>

              <h3>3. Intellectual Property Rights</h3>
              <p>
                Upon full payment, any work product created for the client under this agreement becomes the client’s property. Virtual Switch retains the right to use non-confidential, non-identifying portions of the work for portfolio or marketing purposes unless otherwise agreed.
              </p>

              <h3>4. Force Majeure Clause</h3>
              <p>
                Virtual Switch will not be held liable for failure to perform services due to circumstances beyond its control, including but not limited to natural disasters, government restrictions, internet outages, strikes, or pandemics.
              </p>

              <h3>5. Communication Channels & Response Times</h3>
              <p>
                All communication should occur via the designated official channels (e.g., email, project management tool, or agreed messaging platform). Virtual Switch aims to respond within 24 business hours. Urgent requests will be addressed subject to team availability.
              </p>

              <h3>6. Refund Policy</h3>
              <p>
                Fees paid are non-refundable except where required by law or mutually agreed upon in writing.
              </p>

              <h3>7. Indemnification</h3>
              <p>
                The client shall defend, indemnify, and hold harmless Virtual Switch and its subsidiaries and affiliates from and against any and all losses, claims, costs, damages, fines, or other liabilities of any kind, including reasonable attorneys' fees, arising out of or related to the resource's misconduct or negligent acts or omissions in connection with the services to be provided under this program or any prior program.
              </p>
            </div>
          </section>
        </RevealOnScroll>
      </main>
    </div>
  );
}
