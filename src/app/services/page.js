"use client";

import Link from "next/link";
import { Linkedin, Github, Instagram } from "lucide-react";

export default function SocialIcons() {
  const socials = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={26} />,
      href: "https://linkedin.com",
      hover: "hover:text-blue-500",
    },
    {
      name: "GitHub",
      icon: <Github size={26} />,
      href: "https://github.com",
      hover: "hover:text-gray-200",
    },
    {
      name: "Instagram",
      icon: <Instagram size={26} />,
      href: "https://instagram.com",
      hover: "hover:text-pink-500",
    },
  ];

  return (
    <div className="flex items-center justify-center gap-6 mt-8">
      {socials.map((item, idx) => (
        <Link
          key={idx}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.name}
          className={`text-gray-400 transition-all duration-300 ${item.hover} transform 
            hover:scale-125 active:scale-95`}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
}
