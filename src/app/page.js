"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// --- HeroCarousel Component ---
const HeroCarousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = slides.length;

  // Auto slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slideCount);
    }, 5000);
    return () => clearInterval(interval);
  }, [slideCount]);

  const prevSlide = () => setCurrentSlide((currentSlide - 1 + slideCount) % slideCount);
  const nextSlide = () => setCurrentSlide((currentSlide + 1) % slideCount);

  return (
    <header className="relative text-white py-8">
      <div className="relative w-full h-[75vh] overflow-hidden rounded-xl border border-gray-800">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.bg}
              alt={`Slide ${index + 1}`}
              fill
              style={{ objectFit: 'cover' }}
              priority={index === 0} // load first slide immediately
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-6 text-center">
              <h1 className="text-4xl sm:text-6xl font-extrabold max-w-3xl">{slide.title}</h1>
              <p className="text-lg text-gray-300 mt-4 max-w-2xl">{slide.subtitle}</p>
            </div>
          </div>
        ))}
        {/* Navigation */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-500'}`}
          />
        ))}
      </div>
    </header>
  );
};

// --- RevealOnScroll Hook/Component ---
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
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

// --- Services Component ---
const Services = ({ services }) => (
  <RevealOnScroll>
    <section className="py-12">
      <div className="text-center mb-12">
        <h3 className="text-purple-400 font-semibold">What We Do Best</h3>
        <h2 className="text-3xl font-extrabold text-white">Excellence in Every Service</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4">
          We take pride in delivering excellence in every service we offer. From web development to virtual assistance, our teams are committed to your business needs.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <Link
            key={i}
            href={service.link || '#'}
            className="bg-transparent p-6 rounded-lg border border-gray-800 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 flex flex-col items-center"
          >
            <div className="bg-purple-600 inline-block p-3 rounded-lg mb-4">
              <i className={`${service.icon} text-white text-2xl`}></i>
            </div>
            <h4 className="text-xl font-bold text-white mb-2 text-center">{service.title}</h4>
            <p className="text-gray-400 text-sm text-center">{service.description}</p>
          </Link>
        ))}
      </div>
    </section>
  </RevealOnScroll>
);

// --- Testimonials Component ---
const Testimonials = ({ testimonials }) => {
  const profileSize = 96;

  return (
    <RevealOnScroll>
      <section className="py-12">
        <h2 className="text-3xl font-extrabold text-purple-400 mb-8 text-center">What Life Looks Like With Our VAs</h2>
        <div className="relative overflow-hidden group">
          <div
            className="flex animate-scroll group-hover:pause"
            style={{ width: `${testimonials.length * 350 * 2}px` }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="min-w-[335px] p-2">
                <div className="bg-transparent rounded-lg h-[420px] border border-gray-800 relative mt-12 flex flex-col justify-between text-center p-6">
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full overflow-hidden border-4 border-gray-800 z-10">
                    <Image
                      src={t.img}
                      alt={t.alt}
                      width={profileSize}
                      height={profileSize}
                      style={{ objectFit: 'cover' }}
                      className="w-full h-full"
                      unoptimized={true}
                      loading="lazy"
                    />
                  </div>
                  <i className="fas fa-quote-left text-purple-400 opacity-20 text-2xl absolute top-4 left-4"></i>
                  <p className="italic text-gray-300 flex-grow mt-12">{t.quote}</p>
                  <div className="mt-4">
                    <cite className="font-bold text-white not-italic block">{t.author}</cite>
                    <span className="text-sm text-gray-400">{t.title}</span>
                  </div>
                  <i className="fas fa-quote-right text-purple-400 opacity-20 text-2xl absolute bottom-4 right-4"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};

export { HeroCarousel, Services, Testimonials, RevealOnScroll };
