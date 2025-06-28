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
    { href: "your-contribution", label: "Your Contribution" },
    { href: "our-projects", label: "Our Projects" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-[#FBF6EE] z-50 fixed top-0 left-0 w-full border-b-[1.5px] border-[#5B765B] font-[Sylfaen,serif]">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <Image src="/Images/logo.svg" alt="Nature Crusade Logo" width={80} height={80} priority />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-xl items-center">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className={`transition-all duration-200 hover:text-[#C25B14] ${
                activeSection === link.href
                  ? "text-black  underline underline-offset-4"
                  : "text-[#C25B14]"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#333] focus:outline-none"
          >
            {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[#FBF6EE] border-t border-[#5B765B] py-4 space-y-4 text-center text-lg">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className={`block w-full py-2 ${
                activeSection === link.href
                  ? "text-black font-semibold underline underline-offset-4"
                  : "text-[#C25B14]"
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
