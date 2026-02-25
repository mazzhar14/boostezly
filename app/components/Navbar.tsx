"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div onClick={() => {const hero = document.getElementById("home"); if (hero) {hero.scrollIntoView({ behavior: "smooth" });}}}
            className="flex items-center cursor-pointer"><img src="/boostezly-logo.png" alt="Boostezly LLC Logo" className="h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"/>
        </div>

        {/* Links */}
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

        {/* CTA Button */}
        <button className="bg-[#14B8A6] text-white px-5 py-2 rounded-lg hover:opacity-90 transition">
          Book a Call
        </button>

      </div>
    </nav>
  );
}