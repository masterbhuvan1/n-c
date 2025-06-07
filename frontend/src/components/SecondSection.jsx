"use client";

import { useState, useEffect } from "react"; // Import useEffect for window size check

export default function SecondSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false); // State to track mobile view

  const tabs = [
    {
      label: "Offer Land",
      theme: "green",
      content: (
        <div className="space-y-4 text-base sm:text-lg">
          <p className="text-gray-800">Have land? Let’s turn it into a lush, breathing forest.</p>
          <p className="text-green-800 font-semibold text-xl sm:text-2xl mt-2">
            No Land? No Problem:
          </p>
          <p className="text-gray-800">
            Sponsor trees through us — we’ll plant on your behalf in one of our certified projects.
          </p>
        </div>
      ),
    },
    {
      label: "Donate A Tree",
      theme: "green",
      content: (
        <div className="space-y-4 text-base sm:text-lg">
          <p className="text-[#23553C] font-semibold text-xl sm:text-2xl">
            Honor A Birthday, A Loss, A New Beginning
          </p>
          <p className="text-gray-800">
            — with a tree. We plant it. Nurture it. And send you updates for 3 years.
          </p>
          <p className="text-[#23553C] font-semibold text-xl sm:text-2xl mt-2">
            Corporate Sponsorship:
          </p>
          <p className="text-gray-800">
            Support large-scale plantation as part of your ESG/CSR goals. We handle land, planting,
            branding, and tree-tracking.
          </p>
        </div>
      ),
    },
    {
      label: "Beyond Trees",
      theme: "green",
      content: (
        <div className="space-y-4 text-base sm:text-lg">
          <p className="text-[#23553C] font-semibold text-xl sm:text-2xl">Reach Out To Us For:</p>
          <ul className="list-disc ml-5 text-gray-800 space-y-2">
            <li>Organic & natural farming consultancy</li>
            <li>Soil revival & biodiversity restoration</li>
            <li>Agroforestry to support local farmers</li>
            <li>Training & micro-jobs for rural women</li>
          </ul>
        </div>
      ),
    },
  ];

  // Effect to check window size and update isMobile state
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's 'md' breakpoint is 768px
    };

    checkMobile(); // Check on initial render
    window.addEventListener("resize", checkMobile); // Add event listener for resize

    return () => {
      window.removeEventListener("resize", checkMobile); // Cleanup on component unmount
    };
  }, []);

  const themeColor = tabs[activeTab].theme === "green" ? "text-green-900" : "text-orange-800";

  return (
    <div
      id="about-us"
      className="max-w-[1250px] h-full px-5 my-6 md:my-10 md:border-2 border-[#23553C] rounded-[20px] md:rounded-[40px] 
      md:mx-auto w-full p-4 sm:p-6 flex justify-center bg-cover bg-center bg-white overflow-hidden" // Reduced mobile padding, rounded
      style={{ backgroundImage: "url('/Images/bg2.png')" }} // Background image for the section
    >
      <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Left section - Image and Heading/Button for Desktop */}
        <div
          className="hidden md:flex flex-col justify-between w-full md:w-1/2 bg-cover bg-center rounded-xl px-4 sm:px-6 py-8 sm:py-10"
          style={{
            backgroundImage: "url('/Images/tree2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "400px", // Adjusted height for better responsiveness
            height: "auto", // Allow height to adjust
            maxHeight: "600px", // Max height for large screens
          }}
        >
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-bold leading-snug text-[#23553C] drop-shadow-md ${themeColor}`}
          >
            HOW CAN YOU <br /> HELP?
          </h2>
          <button className="mt-6 w-fit border-[#23553C] border-2 px-6 py-2 bg-white text-lg font-semibold rounded-xl text-black hover:bg-green-600 hover:text-black transition">
            Donate Now
          </button>
        </div>

        {/* Right section - Tabs and Tab Content */}
        <div className="w-full md:w-1/2 p-0 sm:p-0 md:p-10 flex flex-col">
          {" "}
          {/* Remove padding on mobile, let parent handle */}
          {/* Heading for mobile (shown only when image is hidden) */}
          <div className="md:hidden mb-4 text-center">
            {" "}
            {/* Centered for mobile */}
            <h2
              className={`text-2xl sm:text-3xl font-bold leading-snug text-[#23553C] drop-shadow-md ${themeColor}`}
            >
              HOW CAN YOU <br /> HELP?
            </h2>
          </div>
          {/* Tabs */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
            {" "}
            {/* Centered tabs on mobile */}
            {tabs.map((tab, index) => (
              <button
                key={tab.label}
                className={`px-4 py-2 border rounded-full transition-all duration-200 text-sm sm:text-base ${
                  // Smaller text on mobile
                  activeTab === index
                    ? "bg-[#23553C] text-white border-green-900"
                    : "border-gray-300 text-gray-700"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {/* Tab content */}
          <div
            className="text-base flex flex-col justify-start space-y-3 overflow-y-auto w-full px-2 sm:px-0" // Added mobile horizontal padding for content if needed
            style={{
              minHeight: "240px",
              maxHeight: "380px",
            }}
          >
            {tabs[activeTab].content}
          </div>
          {/* Donate Now Button for Mobile (conditional rendering) */}
          {isMobile && (
            <div className="mt-8 text-center w-full">
              {" "}
              {/* Margin top to separate, centered */}
              <button className="w-full border-[#23553C] border-2 px-6 py-3 bg-white text-lg font-semibold rounded-xl text-black hover:bg-green-600 hover:text-black transition max-w-xs mx-auto">
                {" "}
                {/* Full width on mobile, max-width to not stretch too much */}
                Donate Now
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
