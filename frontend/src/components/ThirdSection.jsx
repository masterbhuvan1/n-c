import Head from "next/head";

export default function ThirdSection() {
  return (
    <div
      id="our-projects"
      className="md:min-h-screen mb-8 md:mb-0 max-w-[1440px] mx-auto w-full flex flex-col md:flex-row"
    >
      <Head>
        <title>Forest Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Left Section - Branding */}
      <div className="w-full md:w-1/2 bg-[#23553C] text-white p-8 sm:p-12 md:p-16 flex flex-col justify-center">
        <h1 className="text-4xl sm:text-5xl font-headings font-bold mb-4 md:mb-8">
          FOREST TRACKER
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-body mb-8 md:mb-12 text-green-200 opacity-90">
          Technology & Transparency
        </h2>
        <ul className="list-disc list-inside text-base sm:text-lg md:text-xl space-y-3 md:space-y-4 font-body text-white">
          <li>Geotagging of every tree</li>
          <li>Live dashboard with growth tracking</li>
          <li>Periodic photos & reports for sponsors</li>
          <li>Visible CSR branding on-site</li>
        </ul>
      </div>

      {/* Right Section - Form */}
      <div
        className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-8 relative"
        style={{
          backgroundImage: `url('/Images/tree3.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Semi-transparent white overlay */}
        <div className="absolute inset-0 bg- bg-opacity-0 backdropblur-sm"></div>

        <form className="relative z-10 w-full max-w-sm sm:max-w-md bg-  p-6 sm:p-8 rounded-lg">
          {/* Name */}
          <div className="mb-4 sm:mb-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 sm:p-4 text-black border border-[#21A08B] rounded-md focus:outline-none focus:ring-2 focus:ring-[#23553C] font-body placeholder-gray-600 shadow-sm"
            />
          </div>

          {/* Tree ID */}
          <div className="mb-4 sm:mb-6">
            <input
              type="text"
              name="tree_id"
              placeholder="Tree ID"
              className="w-full p-3 sm:p-4 text-black border border-[#21A08B] rounded-md focus:outline-none focus:ring-2 focus:ring-[#23553C] font-body placeholder-gray-600 shadow-sm"
            />
          </div>

          {/* Location */}
          <div className="mb-4 sm:mb-6">
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="w-full p-3 sm:p-4 border text-black border-[#21A08B] rounded-md focus:outline-none focus:ring-2 focus:ring-[#23553C] font-body placeholder-gray-600 shadow-sm"
            />
          </div>

          {/* Date */}
          <div className="mb-6 sm:mb-8">
            <input
              type="date"
              name="date"
              className="w-full p-3 sm:p-4 border text-black border-[#21A08B] rounded-md focus:outline-none focus:ring-2 focus:ring-[#23553C] font-body placeholder-gray-600 shadow-sm"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#23553C] text-white font-body font-semibold py-3 sm:py-4 px-6 rounded-md hover:bg-[#21A08B] transition duration-300 ease-in-out shadow-lg text-base sm:text-lg"
          >
            Track My Tree
          </button>
        </form>
      </div>
    </div>
  );
}
