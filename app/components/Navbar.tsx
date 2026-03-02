"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Mail, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 shadow-sm">

      {/* ===== TOP CONTACT BAR ===== */}
      <div className="hidden md:block bg-[#0B1C2D] text-white text-sm">
        <div className="w-full px-6 lg:px-12 px-6 py-2 flex justify-between items-center">
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span> 408-770-4607 </span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span> info@boostezly.com </span>
            </div>
          </div>

        </div>
      </div>

      {/* ===== MAIN NAVBAR ===== */}
      <nav className="bg-white border-b border-gray-200">
        <div className="w-full px-6 lg:px-12 h-[80px] flex justify-between items-center">
      
          {/* ===== LOGO ===== */}
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
              width={1800}
              height={700}
              className="h-14 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* ===== DESKTOP NAVIGATION ===== */}
          <div className="hidden md:flex items-center gap-10 text-gray-700 font-medium text-[15px]">
            <button onClick={() => scrollToSection("home")} className="hover:text-[#14B8A6] transition">
              Home
            </button>
            <button onClick={() => scrollToSection("services")} className="hover:text-[#14B8A6] transition">
              Services
            </button>
            <button onClick={() => scrollToSection("about")} className="hover:text-[#14B8A6] transition">
              About Us
            </button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-[#14B8A6] transition">
              Contact Us
            </button>
          </div>

          {/* ===== RIGHT CTA ===== */}
          <div className="hidden md:flex items-center gap-4">
            <Phone size={18} className="text-[#14B8A6]" />
            <span className="font-semibold text-gray-900">
              408-770-4607
            </span>

            {/* ===== PAYPAL BUTTON (NEW) ===== */}
            <a
              href="https://www.paypal.com/paypalme/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#14B8A6] text-white px-5 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              💳 Pay Now
            </a>
          </div>

          {/* ===== MOBILE MENU BUTTON ===== */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* ===== MOBILE MENU ===== */}
        {isOpen && (
              <div className="md:hidden bg-white border-t px-6 py-6 flex flex-col gap-5 text-gray-700 font-medium">
              <button onClick={() => scrollToSection("home")}>Home</button>
              <button onClick={() => scrollToSection("services")}>Services</button>
              <button onClick={() => scrollToSection("about")}>About Us</button>
              <button onClick={() => scrollToSection("contact")}>Contact Us</button>

        {/* ===== MOBILE PAYPAL BUTTON ===== */}
              <a
              href="https://www.paypal.com/paypalme/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-[#14B8A6] text-white text-center px-5 py-3 rounded-full font-medium hover:shadow-lg transition"
              >
                💳 Pay Now
              </a>
            </div>
          )}
      </nav>
    </header>
  );
}