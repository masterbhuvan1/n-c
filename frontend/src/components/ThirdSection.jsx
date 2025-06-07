import Head from "next/head";

export default function ThirdSection() {
  return (
    // Parent container: stacks vertically on mobile, horizontally on medium screens and up
    <div
      id="our-projects"
      className="md:min-h-screen mb- md:mb-0 max-w-[1440px] mx-auto w-full flex flex-col md:flex-row"
    >
      <Head>
        <title>Forest Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Left Section - Black Background */}
      <div className="w-full md:w-1/2 bg-black text-white p-8 sm:p-12 md:p-16 flex flex-col justify-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 md:mb-8">FOREST TRACKER</h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl mb-8 md:mb-12 opacity-80">
          Technology & Transparency
        </h2>

        <ul className="list-disc list-inside text-base sm:text-lg md:text-xl space-y-3 md:space-y-4">
          <li>Geotagging of every tree</li>
          <li>Live dashboard with growth tracking</li>
          <li>Periodic photos & reports for sponsors</li>
          <li>Visible CSR branding on-site</li>
        </ul>
      </div>

      {/* Right Section - Image Background and Form */}
      <div
        className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-8 relative"
        style={{
          backgroundImage: `url('/Images/tree3.png')`, // Make sure tree3.png is in your public directory
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Corrected overlay: 'absolute' instead of 'bsolute' and restored styling */}
        <div className="absolute inset-0 bg-white bg-opacity-70 backdrop-blur-sm"></div>

        <form className="relative z-10 w-full max-w-sm sm:max-w-md bg-white bg-opacity-80 p-6 sm:p-8 rounded-lg shadow-xl">
          <div className="mb-4 sm:mb-6">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="name"
              className="w-full p-3 sm:p-4 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4 sm:mb-6">
            <input
              type="text"
              id="tree_id"
              name="tree_id"
              placeholder="tree id"
              className="w-full p-3 sm:p-4 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4 sm:mb-6">
            <input
              type="text"
              id="location"
              name="location"
              placeholder="location"
              className="w-full p-3 sm:p-4 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-6 sm:mb-8">
            <input
              type="date"
              id="date"
              name="date"
              placeholder="date"
              className="w-full p-3 sm:p-4 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 text-white font-bold py-3 sm:py-4 px-6 rounded-md hover:bg-green-800 transition duration-300 ease-in-out shadow-lg text-base sm:text-lg"
          >
            Track My Tree
          </button>
        </form>
      </div>
    </div>
  );
}
