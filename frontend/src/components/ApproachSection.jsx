"use client"; // This directive is specific to Next.js, but kept for context if this component is used within one.

// Using standard <img> tags instead of Next.js Image component
// as the environment does not support "next/image" directly.
export default function ApproachSection() {
  return (
    <section
      className="relative  max-w-[1440px]   items-center     w-full
    px-6 md:px-12 py-5 bg-[#FDFBF6] overflow-hidden font-[Sylfaen,serif]"
    >
      {/* Background Decorative Images */}
      {/* Ensure these paths are correct and the images are optimized */}
      <img
        src="/Images/as1.png" // Adjust path if necessary
        alt="Decorative Trees"
        width={550} // Adjust size as per Figma
        height={300} // Adjust size as per Figma
        className="absolute md:opacity-100 opacity-30 idden bottom-0 left-0 z-30 " // Added opacity for softer look
      />
      <img
        src="/Images/as2.png" // Adjust path if necessary
        alt="Decorative Cloud"
        width={400} // Adjust size as per Figma
        height={200} // Adjust size as per Figma
        className="absolute  md:opacity-100 opacity-70 idden top-0 right-0 z-30" // Added opacity for softer look
      />
      <img
        src="/Images/as3.png" // Adjust path if necessary
        alt="Decorative Bush"
        width={400} // Adjust size as per Figma
        height={150} // Adjust size as per Figma
        className="absolute  md:opacity-100 opacity-30 idden bottom-0 right-0 z-30" // Added opacity for softer look
      />
      <div className=" h-ma max-w-[1280px]  h-full ">
        <div
          // style={{ backgroundImage: "url('/Images/asbg.png')"}} // Adjusted background image and rounded corners
          className="relative z-10 w-full h-full  mx-auto border-[1.5px] border-[#D8771F]  p-6 md:p-12 "
        >
          {" "}
          {/* Increased border width, more rounded, subtle translucent background */}
          {/* Heading */}
          <h2
            style={{ fontFamily: "'Young Serif', serif" }}
            className="text-center text-4xl md:text-5xl font-bold rounded-2xl text-[#B35C1E] uppercase mb-12 tracking-wide"
          >
            {" "}
            {/* Adjusted tracking */}
            Our Approach
          </h2>
          {/* Content Boxes */}
          <div className="flex flex-col gap-6 md:gap-10">
            <div className=" gap-5 md:flex-row flex-col  flex ">
              {/* Card 1 */}
              <div
                className=" flex flex-col gap-2 max-w-[300px] md:min-h-[320px] bg-white border-[1.5px] border-[#E67300]
            rounded-2xl p-7 shadow-sm w-full "
              >
                <h3
                  style={{ fontFamily: "'Young Serif', serif" }}
                  className="text-3xl font-bold text-[#B35C1E] uppercase mb-2"
                >
                  Miyawaki Method:
                </h3>
                <p style={{ fontFamily: "Sylfaen" }} className="text-black text-2xl ">
                  High-density native forests that mature 10x faster.
                </p>
              </div>

              {/* Card 2 */}
              <div
                className=" flex flex-col gap-2 max-w-[300px] md:min-h-[320px] bg-white border-[1.5px] border-[#E67300]
            rounded-2xl p-7 shadow-sm w-full "
              >
                <h3
                  style={{ fontFamily: "'Young Serif', serif" }}
                  className="text-3xl font-bold text-[#B35C1E] uppercase mb-2"
                >
                  Geotagging:
                </h3>
                <p style={{ fontFamily: "Sylfaen" }} className="text-black text-2xl ">
                  Every tree tracked to ensure transparency and monitoring.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="  md:flex-row flex-col  w-full gap-5 justify-end flex ">
              <div
                className=" flex flex-col gap-2 max-w-[300px] md:min-h-[320px] bg-white border-[1.5px] border-[#E67300]
            rounded-2xl p-7 shadow-sm w-full "
              >
                <h3
                  style={{ fontFamily: "'Young Serif', serif" }}
                  className="text-3xl font-bold text-[#B35C1E] uppercase mb-2"
                >
                  Sustainability Focus:
                </h3>
                <p style={{ fontFamily: "Sylfaen" }} className="text-black text-2xl ">
                  Maintenance for 2–3 years ensures survival and growth.
                </p>
              </div>

              {/* Card 4 */}
              <div
                className=" flex flex-col gap-2 max-w-[300px] md:min-h-[320px] bg-white border-[1.5px] border-[#E67300]
            rounded-2xl p-7 shadow-sm w-full "
              >
                <h3
                  style={{ fontFamily: "'Young Serif', serif" }}
                  className="text-3xl font-bold text-[#B35C1E] uppercase mb-2"
                >
                  CSR-Ready:
                </h3>
                <p style={{ fontFamily: "Sylfaen" }} className="text-black text-2xl ">
                  Branded acknowledgment on-site for partner organizations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
