"use client";

export default function FourthSection() {
  return (
    <section
      id="contact"
      className="w-full bg-[#D5CCBB] py-16 px-4 md:px-8 lg:px-12 font-[Sylfaen,serif]"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl mb-6 text-center font-bold text-[#813706] md:mb-12">
          JOIN THE CRUSADE
        </h2>

        {/* Two Column Layout */}
        <div className="flex flex-col md:flex-row gap-12 text-[#813706]">
          {/* Left Side - Text Info */}
          <div className="md:w-1/2 md:text-2xl leading-relaxed space-y-6">
            <p>
              Whether you're a Corporate, Government Body, Individual Or NGO, your support can help
              reclaim barren lands, restore biodiversity and combat climate change.
            </p>

            <div className="space-y-5">
              <div className="flex text-[#813706]">
                <div className="font-semibold ">email:</div>
                <div className="">
                  <div className="ml-8 block">naturecrusade@gmail.com</div>
                  <div className="ml-8 block">kapila@naturecrusade.com</div>
                  <div className="ml-8 block">sweta@naturecrusade.com</div>
                </div>
              </div>

              <p>
                <span className="font-semibold text-[#813706]">address:</span>{" "}
                <span className="ml-2">mumbai – 400007</span>
              </p>

              <p>
                <span className="font-semibold text-[#813706]">timing:</span>{" "}
                <span className="ml-2">mon–sat | 8:30 am – 2:30 pm</span>
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="md:w-1/2">
            <form className="space-y-5 text-[#4B3D30]">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="w-full p-4 border border-gray-300 rounded-md text-[16px] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#813706] transition"
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="w-full p-4 border border-gray-300 rounded-md text-[16px] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#813706] transition"
              />
              <input
                type="text"
                name="number"
                placeholder="number"
                className="w-full p-4 border border-gray-300 rounded-md text-[16px] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#813706] transition"
              />
              <textarea
                name="message"
                rows={5}
                placeholder="type here..."
                className="w-full p-4 border border-gray-300 rounded-md text-[16px] placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-[#813706] transition"
              ></textarea>

              <div className="flex md:w-min w-full justify-center ">
                <button
                  type="submit"
                  className="py-3 px-8 bg-[#813706] text-white text-xl font-bold rounded-md hover:bg-[#a55d2d] transition-all duration-300"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
