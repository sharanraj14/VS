"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGoogle, FaUsersCog, FaShareAlt, FaHeadset, FaClipboardList, FaChevronLeft, FaChevronRight, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Inter } from "next/font/google";

// --- Fonts ---
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// --- Data ---
const slides = [
  {
    bg: "https://placehold.co/1920x1080/1A1A1A/FFFFFF?text=Modern+Solutions",
    title: "Modern Solutions for a Digital World",
    subtitle: "We provide the tools and talent to help you succeed.",
  },
  {
    bg: "https://placehold.co/1920x1080/1A1A1A/C084FC?text=Creative+Designs",
    title: "Creative Designs, Powerful Results",
    subtitle: "From concept to creation, we bring your vision to life.",
  },
  {
    bg: "https://placehold.co/1920x1080/1A1A1A/3B82F6?text=Global+Talent",
    title: "Unlock a World of Talent",
    subtitle: "Access a global network of skilled professionals ready to help you grow.",
  },
];

const services = [
  { icon: FaUsersCog, title: "CRM Management", description: "Centralize customer data, automate sales funnels, and build stronger client relationships.", link: "/crm" },
  { icon: FaShareAlt, title: "Social Media Management", description: "Engage your audience and drive growth with strategic campaigns.", link: "/smm" },
  { icon: FaHeadset, title: "Virtual Assistance", description: "Delegate administrative tasks to focus on core business goals.", link: "/va" },
  { icon: FaClipboardList, title: "Administrative Support", description: "Reliable support for scheduling, emails, and data management.", link: "/admin-support" },
];

const testimonials = [
  { img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Dr. Aleksandra Gajer", quote: "Wishup's VA has successfully handled a variety of tasks for us.", author: "Dr. Aleksandra Gajer", title: "Founder - The Giant Practice" },
  { img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Jason Ellinger", quote: "My VA helped manage my calendar, invoices, and HR.", author: "Jason Ellinger", title: "Co-founder - Record & Reverb" },
];

// --- Components ---
const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.1 });
    if(ref.current) observer.observe(ref.current);
    return ()=>ref.current && observer.unobserve(ref.current);
  }, []);
  return <div ref={ref} className={`transition-opacity duration-1000 transform ${isVisible?'opacity-100 translate-y-0':'opacity-0 translate-y-10'}`}>{children}</div>
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoSize = 56;

  const externalLinks = [
    { icon: FaFacebookF, href: "https://facebook.com" },
    { icon: FaInstagram, href: "https://instagram.com" },
    { icon: FaLinkedinIn, href: "https://linkedin.com" },
    { icon: FaGoogle, href: "https://google.com" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black bg-opacity-50 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="flex items-center gap-3 text-purple-400">
          <Image src="https://placehold.co/100x100/C084FC/0A0A0A?text=VS" alt="VS Logo" width={logoSize} height={logoSize} className="rounded-full" unoptimized={true}/>
          <span className="text-2xl font-extrabold text-white">Virtual Switch</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {["/", "/services", "/about", "/contact", "/join"].map((l,i)=>(
            <Link key={i} href={l} className="text-gray-300 hover:text-purple-400">{l.replace("/","").toUpperCase() || "HOME"}</Link>
          ))}
        </div>

        <div className="hidden lg:flex flex-col items-end">
          <div>
            <span className="text-sm text-gray-400">Toll Free</span>
            <span className="font-bold text-purple-400 ml-2">+1(800) 259-1090</span>
          </div>
          <div className="flex space-x-4 mt-2 text-gray-400">
            {externalLinks.map((link,i)=>(
              <span key={i} onClick={()=>window.open(link.href,"_blank")} className="hover:text-purple-400 cursor-pointer">
                <link.icon size={18}/>
              </span>
            ))}
          </div>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <FaChevronLeft className="text-2xl"/>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-90">
          {["/", "/services", "/about", "/contact", "/join"].map((l,i)=>(
            <Link key={i} href={l}><span className="block py-3 px-4 text-sm cursor-pointer">{l.replace("/","").toUpperCase() || "HOME"}</span></Link>
          ))}
        </div>
      )}
    </nav>
  );
};

const HeroCarousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = slides.length;

  useEffect(() => {
    const interval = setInterval(() => setCurrentSlide(prev => (prev+1)%slideCount),5000);
    return ()=>clearInterval(interval);
  }, [slideCount]);

  const prevSlide = () => setCurrentSlide((currentSlide -1 + slideCount)%slideCount);
  const nextSlide = () => setCurrentSlide((currentSlide +1)%slideCount);

  return (
    <header className="relative text-white py-8">
      <div className="relative w-full h-[75vh] overflow-hidden rounded-xl border border-gray-800">
        {slides.map((slide,index)=>(
          <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index===currentSlide?'opacity-100':'opacity-0'}`}>
            <Image src={slide.bg} alt={`Slide ${index+1}`} fill style={{objectFit:'cover'}} priority={index===0}/>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-6 text-center">
              <h1 className="text-4xl sm:text-6xl font-extrabold max-w-3xl">{slide.title}</h1>
              <p className="text-lg text-gray-300 mt-4 max-w-2xl">{slide.subtitle}</p>
            </div>
          </div>
        ))}
        <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full"><FaChevronLeft/></button>
        <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full"><FaChevronRight/></button>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_,index)=>(
          <button key={index} onClick={()=>setCurrentSlide(index)} className={`h-3 w-3 rounded-full ${currentSlide===index?'bg-white':'bg-gray-500'}`}/>
        ))}
      </div>
    </header>
  );
};

const ServicesSection = ({ services }) => (
  <RevealOnScroll>
    <section className="py-12">
      <div className="text-center mb-12">
        <h3 className="text-purple-400 font-semibold">What We Do Best</h3>
        <h2 className="text-3xl font-extrabold text-white">Excellence in Every Service</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s,i)=>(
          <Link key={i} href={s.link}><span className="bg-transparent p-6 rounded-lg border border-gray-800 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 flex flex-col items-center cursor-pointer">
            <s.icon className="text-white text-2xl mb-4"/>
            <h4 className="text-xl font-bold text-white mb-2 text-center">{s.title}</h4>
            <p className="text-gray-400 text-sm text-center">{s.description}</p>
          </span></Link>
        ))}
      </div>
    </section>
  </RevealOnScroll>
);

const TestimonialsSection = ({ testimonials }) => {
  const profileSize = 96;
  return (
    <RevealOnScroll>
      <section className="py-12">
        <h2 className="text-3xl font-extrabold text-purple-400 mb-8 text-center">What Life Looks Like With Our VAs</h2>
        <div className="relative overflow-hidden group">
          <div className="flex animate-scroll group-hover:pause">
            {[...testimonials,...testimonials].map((t,i)=>(
              <div key={i} className="min-w-[335px] p-2">
                <div className="bg-transparent rounded-lg h-[420px] border border-gray-800 relative mt-12 flex flex-col justify-between text-center p-6">
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full overflow-hidden border-4 border-gray-800 z-10">
                    <Image src={t.img} alt={t.alt} width={profileSize} height={profileSize} style={{objectFit:'cover'}} unoptimized={true} loading="lazy"/>
                  </div>
                  <FaQuoteLeft className="text-purple-400 opacity-20 text-2xl absolute top-4 left-4"/>
                  <p className="italic text-gray-300 flex-grow mt-12">{t.quote}</p>
                  <div className="mt-4">
                    <cite className="font-bold text-white not-italic block">{t.author}</cite>
                    <span className="text-sm text-gray-400">{t.title}</span>
                  </div>
                  <FaQuoteRight className="text-purple-400 opacity-20 text-2xl absolute bottom-4 right-4"/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};

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
              <Image src="https://placehold.co/100x100/C084FC/0A0A0A?text=VS" alt="VS Logo" width={logoSize} height={logoSize} className="rounded-full" unoptimized={true}/>
              <span className="text-xl font-bold text-white">Virtual Switch</span>
            </div>
            <p className="text-sm max-w-xs mb-4">Your industry experts, propelling your business towards success.</p>
            <div className="flex space-x-4">
              {externalLinks.map((link,i)=>(
                <span key={i} onClick={()=>window.open(link.href,"_blank")} className="hover:text-white cursor-pointer"><link.icon/></span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            {services.map((s,i)=><Link key={i} href={s.link}><span className="block text-sm py-1 cursor-pointer hover:text-white">{s.title}</span></Link>)}
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            {["/","/services","/about","/contact"].map((l,i)=><Link key={i} href={l}><span className="block text-sm py-1 cursor-pointer hover:text-white">{l.replace("/","").toUpperCase() || "HOME"}</span></Link>)}
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            {["/claim","/policy","/terms"].map((l,i)=><Link key={i} href={l}><span className="block text-sm py-1 cursor-pointer hover:text-white">{l.replace("/","").toUpperCase()}</span></Link>)}
          </div>
        </div>
        <p className="text-center text-sm mt-12 border-t border-gray-800 pt-8">© 2025 Virtual Switch, Inc. All rights reserved.</p>
      </footer>
    </RevealOnScroll>
  );
};

// --- Main App ---
export default function App() {
  return (
    <div className={`min-h-screen ${inter.variable} font-sans`}>
      <Header/>
      <main className="container mx-auto px-4">
        <HeroCarousel slides={slides}/>
        <ServicesSection services={services}/>
        <TestimonialsSection testimonials={testimonials}/>
      </main>
      <Footer/>
    </div>
  );
}
