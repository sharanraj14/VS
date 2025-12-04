"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoSize = 56; // 56px for h-14 w-14

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
            unoptimized={true} // For external placeholder image
          />
          <span className="text-2xl font-extrabold text-white">Virtual Switch</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-300 hover:text-purple-400 transition-colors">Home</Link>
          <Link href="/services" className="text-gray-300 hover:text-purple-400 transition-colors">Services</Link>
          <Link href="/about" className="text-gray-300 hover:text-purple-400 transition-colors">About</Link>
          <Link href="/contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</Link>
          <Link href="/join" className="text-gray-300 hover:text-purple-400 transition-colors">Opportunities</Link>
        </div>

        <div className="hidden lg:flex flex-col items-end">
          <div>
            <span className="text-sm text-gray-400">Toll Free</span>
            <span className="font-bold text-purple-400 ml-2">+1(800) 259-1090</span>
          </div>
          <div className="flex space-x-4 mt-2 text-gray-400">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400"><i className="fab fa-facebook-f"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400"><i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400"><i className="fab fa-google"></i></a>
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

export default Header;
