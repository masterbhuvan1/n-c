"use client";

import Image from "next/image";

export default function SeventhSection() {
  return (
    <section className="w-full max-w-[1440px] md:min-h-[480px] h-full  bg-black text-white pt-10 px-5 relative overflow-hidden">
      <div className=" mx-auto max-w-[1200px]   flex flex-col lg:flex-row items-center gap-10">
        {/* Left - Heading */}
        <div className="lg:w-1/3 flex md:w-min w-full justify-center">
          <div className="md:text-6xl hidden md:block text-3xl sm:text-5xl font-bold font-serif text-white mb-6">
            IMPACT <br />
            METRICS
          </div>
          <div className=" md:hidden block text-3xl sm:text-5xl font-bold font-serif text-white mb-6">
            IMPACT
            METRICS
          </div>
        </div>

        {/* Right - Bullet Points */}
        <div
          style={{ fontFamily: "Sylfaen" }}
          className="lg:w-2/3 text-lg md:text-3xl font-serif leading-relaxed space-y-4"
        >
          <p>• One mature tree = ~48 lbs CO₂ absorbed/year</p>
          <p>• One human emits ~4.3 tons CO₂/year = 400–500 trees needed/lifetime</p>
          <p>• Forests = cleaner air, enriched soil, better water retention, biodiversity</p>
        </div>
      </div>

      {/* Decorative Birds & Flowers - Bottom Image */}
      <div className="relativ mt-12 w-full h-full ">
        <Image
          src="/Images/ss1-bottom.png" // make sure this image is saved and available in public/Images
          alt="Floral and bird illustration"
          // layout="fill"
          className="object-contain h-full"
          priority
          height={300}
          width={1400}
        />
      </div>
    </section>
  );
}
