"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGoogle } from "react-icons/fa";

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
            <span className="text-2xl">&#9776;</span>
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
            {["/", "/services", "/join"].map((l, i) => (
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

// ---------------- Terms & Conditions Page ----------------
const termsData = [
  {
    title: "Scope of Services & Limitations",
    content: `Virtual Switch will provide virtual assistance services as agreed in the proposal or onboarding document. Any additional tasks or services outside the agreed scope will require prior approval and may incur additional fees. Virtual Switch is not responsible for tasks that require licensed professionals (e.g., legal, medical, or financial advisory services) unless expressly agreed in writing.`,
  },
  {
    title: "Performance & Quality Disclaimer",
    content: `While Virtual Switch strives to meet client requirements and deadlines, the company is not liable for delays or outcomes caused by client-side factors such as delayed feedback, unclear instructions, or lack of necessary information.`,
  },
  {
    title: "Intellectual Property Rights",
    content: `Upon full payment, any work product created for the client under this agreement becomes the client's property. Virtual Switch retains the right to use non-confidential, non-identifying portions of the work for portfolio or marketing purposes unless otherwise agreed.`,
  },
  {
    title: "Force Majeure Clause",
    content: `Virtual Switch will not be held liable for failure to perform services due to circumstances beyond its control, including but not limited to natural disasters, government restrictions, internet outages, strikes, or pandemics.`,
  },
  {
    title: "Communication Channels & Response Times",
    content: `All communication should occur via the designated official channels (e.g., email, project management tool, or agreed messaging platform). Virtual Switch aims to respond within 24 business hours. Urgent requests will be addressed subject to team availability.`,
  },
  {
    title: "Refund Policy",
    content: `Fees paid are non-refundable except where required by law or mutually agreed upon in writing.`,
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-gray-300 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-12 space-y-12">
        <RevealOnScroll>
          <h1 className="text-4xl font-extrabold text-purple-400 mb-12 text-center">
            Terms and Conditions
          </h1>
        </RevealOnScroll>

        <div className="space-y-10">
          {termsData.map((term, index) => (
            <RevealOnScroll key={index}>
              <section>
                <h3 className="text-2xl font-bold text-purple-400 mb-3">
                  {index + 1}. {term.title}
                </h3>
                <p className="leading-relaxed">{term.content}</p>
              </section>
            </RevealOnScroll>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
