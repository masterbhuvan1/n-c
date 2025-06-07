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
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className={`text-lg font-medium focus:outline-none ${
                activeSection === link.href
                  ? "text-green-700 border-b-2 border-green-700 pb-1"
                  : "text-gray-700 hover:text-green-700"
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
            className="text-gray-700 hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-md p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 space-y-4 text-center">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className={`block text-lg font-medium py-2 rounded-md focus:outline-none ${
                activeSection === link.href
                  ? "bg-green-100 text-green-700"
                  : "text-gray-700 hover:bg-gray-50"
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
