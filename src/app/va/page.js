"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import RevealOnScroll from "../components/RevealOnScroll"; // optional: can extract if reused

export default function VirtualAssistancePage() {
  const imageWidth = 600;
  const imageHeight = 400;

  return (
    <main className="container mx-auto px-4 py-16">
      <RevealOnScroll>
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-purple-400">
            Virtual Assistance Services
          </h1>
          <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
            Delegate your tasks, reclaim your time, and focus on what matters most with a dedicated virtual assistant.
          </p>
        </div>
      </RevealOnScroll>

      <div className="space-y-16">
        {/* Section 1 */}
        <RevealOnScroll>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-4">
                Comprehensive Administrative Support
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Our virtual assistants handle all your administrative needs, from managing schedules and appointments to handling email correspondence and data entry. We keep your operations organized and efficient, freeing you to focus on strategic goals.
              </p>
            </div>
            <div className="lg:w-1/2 relative min-h-[350px]">
              <div className="absolute top-0 left-0 w-5/6 h-5/6 bg-purple-600 rounded-xl z-0 transform -rotate-3"></div>
              <div className="absolute bottom-0 right-0 w-5/6 h-5/6 bg-white p-4 rounded-xl shadow-2xl z-10 transform rotate-3">
                <Image
                  src="https://placehold.co/600x400/1E293B/FFFFFF?text=Admin+Support"
                  alt="Administrative Support"
                  width={imageWidth}
                  height={imageHeight}
                  className="w-full h-full object-cover rounded-lg"
                  unoptimized={true}
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
                Personalized Executive Assistance
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Get high-level support for your executive tasks. Our VAs can assist with travel arrangements, preparing reports and presentations, and managing your personal and professional commitments, allowing you to be more productive and effective in your role.
              </p>
            </div>
            <div className="lg:w-1/2 relative min-h-[350px]">
              <div className="absolute top-0 right-0 w-5/6 h-5/6 bg-blue-500 rounded-xl z-0 transform rotate-3"></div>
              <div className="absolute bottom-0 left-0 w-5/6 h-5/6 bg-white p-4 rounded-xl shadow-2xl z-10 transform -rotate-3">
                <Image
                  src="https://placehold.co/600x400/1E293B/FFFFFF?text=Executive+Assistance"
                  alt="Executive Assistance"
                  width={imageWidth}
                  height={imageHeight}
                  className="w-full h-full object-cover rounded-lg"
                  unoptimized={true}
                />
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </main>
  );
}
