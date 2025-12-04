// /app/layout.js
import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

// --- Header ---
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black bg-opacity-50 backdrop-blur-md border-b border-gray-800">
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
          <span className="text-2xl font-extrabold text-white">Virtual Switch</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-300 hover:text-purple-400">Home</Link>
          <Link href="/services" className="text-gray-300 hover:text-purple-400">Services</Link>
          <Link href="/about" className="text-gray-300 hover:text-purple-400">About</Link>
          <Link href="/contact" className="text-gray-300 hover:text-purple-400">Contact</Link>
          <Link href="/join" className="text-gray-300 hover:text-purple-400">Opportunities</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <span className="text-2xl">&#9776;</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-90">
          <Link href="/" className="block py-3 px-4 text-sm hover:bg-gray-700">Home</Link>
          <Link href="/services" className="block py-3 px-4 text-sm hover:bg-gray-700">Services</Link>
          <Link href="/about" className="block py-3 px-4 text-sm hover:bg-gray-700">About</Link>
          <Link href="/contact" className="block py-3 px-4 text-sm hover:bg-gray-700">Contact</Link>
          <Link href="/join" className="block py-3 px-4 text-sm hover:bg-gray-700">Opportunities</Link>
        </div>
      )}
    </nav>
  );
};

// --- RevealOnScroll ---
const RevealOnScroll = ({ children }) => {
  const ref = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
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

// --- Footer ---
const Footer = () => {
  const internalLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/claim", label: "Claim" },
    { href: "/policy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ];

  return (
    <RevealOnScroll>
      <footer className="bg-black text-gray-400 py-12 mt-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <Image
              src="https://placehold.co/100x100/C084FC/0A0A0A?text=VS"
              alt="VS Logo"
              width={48}
              height={48}
              className="rounded-full"
            />
            <p className="text-sm mt-2 max-w-xs">
              Your industry experts, specializing in seamless management of outsourcing needs.
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            {internalLinks.map((link, i) => (
              <Link key={i} href={link.href} className="text-sm hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <p className="text-center text-sm mt-8 border-t border-gray-800 pt-4">
          © 2025 Virtual Switch, Inc. All rights reserved.
        </p>
      </footer>
    </RevealOnScroll>
  );
};

// --- Root Layout ---
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-black text-gray-300">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
