"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center mt-10 md:mt-24  my- md:my-16 px-8 bg-[#f9f9f9]"
    >
      {/* Desktop Background Images */}
      <div className="hidden md:flex absolute inset-0 w-full h-full z-0 justify-between items-end pointer-events-none">
        {/* Left Tree Image */}
        <div className="relative w-auto h-auto ml-[-350px]">
          <Image
            src="/Images/1.png"
            alt="Tree Illustration"
            width={880} // increased from 350
            height={400} // increased from 500
            className="object-contain "
          />
        </div>

        {/* Right Deer Image */}
        <div className="relative w-auto h-auto mr-[-170px]">
          <Image
            src="/Images/2.png"
            alt="Deer Illustration"
            width={720} // increased from 300
            height={420} // increased from 300
            className="object-contain"
          />
        </div>
      </div>

      {/* Mobile Background */}
      {/* Mobile Background with Reduced Opacity */}
      <div className="md:hidden absolute inset-0 z-0">
        <div className="absolute inset-0 bg-transparent opacity-10 z-10" />
        <Image
          src="/Images/1.png"
          alt="Mobile Background"
          fill
          className="object-cover opacity-30"
        />
      </div>

      {/* Center Content */}
      <div className="relative z-10 justify-self-auto  max-lg:h-1/2  flex flex-col   items-center text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#141414] mb-4">
          YOUR ROOTS. OUR REVOLUTION.
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-[#141414] font-serif mb-4 leading-relaxed">
          “When The Last Tree Falls, We Won’t Just Lose Forests — We’ll Lose Ourselves.”
        </p>

        <p className="text-md sm:text-lg text-[#141414] font-serif mb-8 max-w-2xl">
          join nature crusade – a women-led afforestation movement for a greener future.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#D5CCBB] bg-opacity-40 text-[#23553C] px-8 py-3 rounded-md text-lg font-serif font-semibold border border-[#23553C] hover:bg-[#e6e1d4] transition duration-300"
        >
          Join Our Mission
        </motion.button>
      </div>
    </section>
  );
}
