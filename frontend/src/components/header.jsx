"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { href: "home", label: "Home" },
    { href: "about-us", label: "About Us" },
    { href: "our-projects", label: "Our Projects" },
    { href: "profile", label: "Profile" },
  ];

  // Scroll smoothly to section and update active tab
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  // Optional: Update activeSection on scroll (advanced)
  // Could add an effect with IntersectionObserver here to update activeSection automatically

  return (
    <header className="bg-white z-[999] fixed top-0 left-0 w-full shadow-sm py-4 px-5 border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <Image
            src="Images/logo.svg"
            alt="Nature Crusader Logo"
            width={100}
            height={100}
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 font-body">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className={`text-lg font-medium focus:outline-none ${
                activeSection === link.href
                  ? "text-[#23553C] border-b-2 border-[#23553C] pb-1" // Dark Green
                  : "text-[#141414] hover:text-[#23553C]" // Black and Dark Green
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#141414] hover:text-[#23553C] focus:outline-none focus:ring-2 focus:ring-[#23553C] rounded-md p-2" // Black, Dark Green, Dark Green ring
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6}" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 space-y-4 text-center font-body">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className={`block text-lg font-medium py-2 rounded-md focus:outline-none ${
                activeSection === link.href
                  ? "bg-[#D2E4D5] text-[#23553C]" // A light green was present as bg-green-100. Based on your other components, a common light green is D2E4D5 (from HeroSection button). Using that. Text is Dark Green.
                  : "text-[#141414] hover:bg-gray-50" // Black text, kept hover:bg-gray-50 as no specific light gray hover was provided.
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
