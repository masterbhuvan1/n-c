"use client";

import Image from "next/image";

export default function VisionSection() {
  return (
    <section className="w-full bg-white px-4 md:px-12 lg:px-24 py-10 relative font-[Sylfaen,serif]">
      {/* Decorative Leafs */}
      <Image
        src="/Images/vs2.png"
        alt="top right leaves"
        width={200}
        height={100}
        className="absolute top-8 right-0 z-0"
      />
      <Image
        src="/Images/vs3.png"
        alt="bottom left leaves"
        width={200}
        height={150}
        className="absolute opacity-75 md:opacity-100 bottom-8 left-0 z-0"
      />

      <div className="relative z-10 max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        {/* Top Row */}
        <div className="flex justify-center">
          <Image
            src="/Images/vs1.png"
            alt="two people in forest"
            width={500}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="w-full flex items-start justify-start">
          <div className="max-w-[520px] h-full w-full flex flex-col justify-center items-start text-left">
            <h2
              style={{ fontFamily: "'Young Serif', serif" }}
              className="text-4xl young-serif md:text-6xl font-bold text-black mb-4"
            >
              Who Are We?
            </h2>
            <p style={{ fontFamily: "Sylfaen" }} className="text-2xl text-gray-800 leading-relaxed">
              Nature Crusade is a grassroots, women-led movement committed to restoring ecological
              balance through afforestation.
            </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex md:hidden  justify-center">
          <Image
            src="/Images/vs4.png"
            alt="hands on tree"
            width={500}
            height={400}
            className="rounded-lg "
          />
        </div>
        <div className="w-full flex items-start justify-start">
          <div className="max-w-[520px] h-full w-full flex flex-col justify-center items-start text-left">
            <h2
              style={{ fontFamily: "'Young Serif', serif" }}
              className="text-4xl md:text-6xl font-bold text-black mb-4 lowercase"
            >
              Our Vision
            </h2>
            <p style={{ fontFamily: "Sylfaen" }} className="text-2xl text-gray-800 leading-relaxed">
              To restore Mother Earth through inclusive, community-driven reforestation using
              innovative and sustainable models. Aligning with Prime Minister Modi’s “Ek Ped Maa Ke
              Naam” Initiative.
            </p>
          </div>
        </div>
        <div className="md:flex hidden justify-center">
          <Image
            src="/Images/vs4.png"
            alt="hands on tree"
            width={500}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
