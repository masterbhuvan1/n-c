"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function HeroSection() {
  const [isGreenMode, setIsGreenMode] = useState(false);

  const handleToggle = () => {
    setIsGreenMode((prev) => !prev);
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center 
      justify-center md:mt-20 px-8 bg-[#f9f9f9]"
    >
      {/* Desktop Background Images */}
      <div className="hidden md:flex absolute inset-0 w-full h-full z-0 justify-between items-end pointer-events-none">
        {/* Left Tree Image */}
        <div className="relative w-auto h-auto ml-[-350px]">
          <Image
            src={isGreenMode ? "/Images/1g.png" : "/Images/1.png"}
            alt="Tree Illustration"
            width={880}
            height={400}
            className="object-contain"
          />
        </div>

        {/* Right Deer Image */}
        <div className="relative w-auto h-auto mr-[-170px]">
          <Image
            src={isGreenMode ? "/Images/2g.png" : "/Images/2.png"}
            alt="Deer Illustration"
            width={720}
            height={420}
            className="object-contain"
          />
        </div>
      </div>

      {/* Mobile Background with Reduced Opacity */}
      <div className="md:hidden absolute inset-0 z-0">
        <div className="absolute inset-0 bg-transparent opacity-10 z-10" />
        <Image
          src={isGreenMode ? "/Images/1g.png" : "/Images/1.png"}
          alt="Mobile Background"
          fill
          className="object-cover opacity-30"
        />
      </div>

      {/* Center Content */}
      <div className="relative gap-5 z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          style={{ fontFamily: "'Young Serif', serif" }}
          className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1F4436] mb-4"
        >
          We are two mothers.
          <br />
          Not scientists.
          <br />
          Not activists.
        </h1>
        <div>
          <p
            style={{ fontFamily: "Sylfaen" }}
            className="text-md mb-1 hidden md:block sm:text-lg text-[#141414] font-serif  max-w-2xl"
          >
            Just moms – who looked at their children and saw a<br />
            future slipping away. So we planted a seed.
          </p>
          <p
            style={{ fontFamily: "Sylfaen" }}
            className="text-md mb-1 block md:hidden sm:text-lg text-[#141414] font-serif  max-w-2xl"
          >
            Just moms – who looked at their children and saw a
            future slipping away. So we planted a seed.
          </p>
          <p className="text-lg sm:text-xl   text-[#1F4436] mb-8">A SEED OF HOPE.</p>
        </div>
        <motion.button
          style={{ fontFamily: "serif" }}
          onClick={handleToggle}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#D5CCBB] bg-opacity-40 text-[#23553C] px-8 py-3 rounded-md text-lg font-serif font-semibold border border-[#23553C] hover:bg-[#e6e1d4] transition duration-300"
        >
          Join The Crusade
        </motion.button>
      </div>
    </section>
  );
}
