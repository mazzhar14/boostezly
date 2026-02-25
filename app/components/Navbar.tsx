"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div
          onClick={() => {
            const hero = document.getElementById("home");
            if (hero) {
              hero.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="flex items-center cursor-pointer"
        >
          <Image
            src="/boostezly-logo.png"
            alt="Boostezly LLC Logo"
            width={120}
            height={60}
            className="h-14 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#services" className="hover:text-[#14B8A6] transition">
            Services
          </a>
          <a href="#about" className="hover:text-[#14B8A6] transition">
            About
          </a>
          <a href="#contact" className="hover:text-[#14B8A6] transition">
            Contact
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button className="bg-[#14B8A6] text-white px-5 py-2 rounded-lg hover:opacity-90 transition">
            Book a Call
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col space-y-4 text-gray-700 font-medium">
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#14B8A6] transition"
          >
            Services
          </a>

          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#14B8A6] transition"
          >
            About
          </a>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#14B8A6] transition"
          >
            Contact
          </a>

          <button
            onClick={() => setIsOpen(false)}
            className="bg-[#14B8A6] text-white px-5 py-2 rounded-lg hover:opacity-90 transition"
          >
            Book a Call
          </button>
        </div>
      )}
    </nav>
  );
}