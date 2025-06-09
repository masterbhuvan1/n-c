"use client";

import { useState, useEffect } from "react";

export default function SecondSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const tabs = [
    {
      label: "Offer Land",
      theme: "green",
      content: (
        <div className="space-y-4 text-base sm:text-lg font-body">
          <p className="text-[#141414]">Have land? Let’s turn it into a lush, breathing forest.</p>
          <p className="text-[#23553C] font-semibold text-xl sm:text-2xl mt-2">
            No Land? No Problem:
          </p>
          <p className="text-[#141414]">
            Sponsor trees through us — we’ll plant on your behalf in one of our certified projects.
          </p>
        </div>
      ),
    },
    {
      label: "Donate A Tree",
      theme: "green",
      content: (
        <div className="space-y-4 text-base sm:text-lg font-body">
          <p className="text-[#23553C] font-semibold text-xl sm:text-2xl">
            Honor A Birthday, A Loss, A New Beginning
          </p>
          <p className="text-[#141414]">
            — with a tree. We plant it. Nurture it. And send you updates for 3 years.
          </p>
          <p className="text-[#23553C] font-semibold text-xl sm:text-2xl mt-2">
            Corporate Sponsorship:
          </p>
          <p className="text-[#141414]">
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
        <div className="space-y-4 text-base sm:text-lg font-body">
          <p className="text-[#23553C] font-semibold text-xl sm:text-2xl">Reach Out To Us For:</p>
          <ul className="list-disc ml-5 text-[#141414] space-y-2">
            <li>Organic & natural farming consultancy</li>
            <li>Soil revival & biodiversity restoration</li>
            <li>Agroforestry to support local farmers</li>
            <li>Training & micro-jobs for rural women</li>
          </ul>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 768);
      }
    };

    checkMobile();

    if (typeof window !== "undefined") {
      window.addEventListener("resize", checkMobile);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", checkMobile);
      }
    };
  }, []);

  const themeColor = tabs[activeTab].theme === "green" ? "text-[#23553C]" : "text-[#C7621E]";

  return (
    <div
      id="about-us"
      className="max-w-[1250px] h-full px-5  md:my-10 md:border-2 border-[#23553C] rounded-[20px] md:rounded-[40px]
      md:mx-auto w-full p-4 sm:p-6 flex justify-center bg-cover bg-center bg-white overflow-hidden"
      style={{ backgroundImage: "url('/Images/bg2.png')" }}
    >
      <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Left Section */}
        <div
          className="hidden md:flex flex-col justify-between w-full md:w-1/2 bg-cover bg-center rounded-xl px-4 sm:px-6 py-8 sm:py-10"
          style={{
            backgroundImage: "url('/Images/tree2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "400px",
            height: "auto",
            maxHeight: "600px",
          }}
        >
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-headings font-bold leading-snug drop-shadow-md ${themeColor}`}
          >
            HOW CAN YOU <br /> HELP?
          </h2>
          <button className="mt-6 w-fit border-[#23553C] border-2 px-6 py-2 bg-white text-lg font-body font-semibold rounded-xl text-[#141414] hover:bg-[#23553C] hover:text-white transition">
            Donate Now
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 p-0 sm:p-0 md:p-10 flex flex-col">
          <div className="md:hidden mb-4 text-center">
            <h2
              className={`text-2xl sm:text-3xl font-headings font-bold leading-snug drop-shadow-md ${themeColor}`}
            >
              HOW CAN YOU <br /> HELP?
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
            {tabs.map((tab, index) => (
              <button
                key={tab.label}
                className={`px-4 py-2 border rounded-[10%] transition-all duration-200 text-sm sm:text-base font-body ${
                  activeTab === index
                    ? "bg-[#23553C] text-white border-[#23553C]"
                    : "border-gray-300 text-[#141414]"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div
            className="text-base flex flex-col justify-start space-y-3 overflow-y-auto w-full px-2 sm:px-0"
            style={{
              minHeight: "240px",
              maxHeight: "380px",
            }}
          >
            {tabs[activeTab].content}
          </div>

          {/* Donate Button for Mobile */}
          {isMobile && (
            <div className="mt-8 text-center w-full">
              <button className="w-full border-[#23553C] border-2 px-6 py-3 bg-white text-lg font-body font-semibold rounded-xl text-[#141414] hover:bg-[#23553C] hover:text-white transition max-w-xs mx-auto">
                Donate Now
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
