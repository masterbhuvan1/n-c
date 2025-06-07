"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-fit bg-[#f9f9f9] md:h-screen w-full flex items-center justify-center py-5 md:py-0 mt-24 my-8 md:my-16 px-8 bg-cover bg-center bg-no-repeat
        bg-[url('/Images/hbg1m.png')] md:bg-[url('/Images/hbg1.png')]"
    >
      {/* Overlay to ensure text visibility */}
      <div className="absolute inset-0 bg-[#f9f9f9] md:opacity-40 opacity-70"></div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2A5141] mb-4 drop-shadow-md">
          YOUR ROOTS, OUR REVOLUTION.
        </h1>
        <p className="text-lg  sm:text-xl  lg:text-2xl text-black font-serif mb-6 leading-relaxed">
          “When The Last Tree Falls, We Won’t Just Lose Forests — We’ll Lose Ourselves.”
        </p>
        <p className="text-md sm:text-lg   text-black font-serif mb-8 max-w-2xl">
          Join Nature Crusade – a women-led afforestation movement for a greener future.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#D2E4D5] text-[#2A5141] px-8 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-[#c3d8c7] transition duration-300 border border-[#2A5141]"
        >
          Join Our Mission
        </motion.button>
      </div>
    </section>
  );
}
