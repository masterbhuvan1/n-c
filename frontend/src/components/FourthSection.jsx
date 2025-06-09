// components/FourthSection.jsx
"use client";

export default function FourthSection() {
  return (
    <section
      id="profile"
      className="w-full 
 bg-[#D5CCBB] py-16 px-4 md:px-8 lg:px-12"
    >
      <div className="max-w-[1200px] mx-auto  rounded-3xl  p-6 md:p-12">
        <h2 className="text-4xl md:text-5xl text-center font-headings font-bold text-[#813706] mb-12">
          {" "}
          {/* Uses font-headings */}
          Reach Out To Us
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Section - Contact Info */}
          <div className="md:w-1/2 space-y-6 text-[#4B3D30] font-body">
            {" "}
            {/* Uses font-body */}
            <p className="text-lg md:text-xl font-medium">Let’s Plant The Future Together.</p>
            <div className="space-y-4 text-base md:text-lg leading-relaxed">
              <p>
                <span className="font-semibold text-[#813706]">Email:</span>{" "}
                <a
                  href="mailto:naturecrusade@gmail.com"
                  className="text-blue-800 underline hover:text-blue-900 transition-colors"
                >
                  naturecrusade@gmail.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-[#813706]">Phone:</span>
                <br />
                Sweta: +91 88890 22277
                <br />
                Kapila: +91 98201 55156
              </p>
              <p>
                <span className="font-semibold text-[#813706]">Address:</span> Mumbai – 400007
              </p>
              <p>
                <span className="font-semibold text-[#813706]">Timing:</span> Mon–Sat | 8:30 AM –
                2:30 PM
              </p>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="md:w-1/2    p-6 rounded-xl ">
            <form className="space-y-5 font-body flex flex-col items-center justify-center  text-[#4B3D30]">
              {" "}
              {/* Uses font-body */}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#813706] placeholder-gray-500 transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full text-black p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#813706] placeholder-gray-500 transition"
              />
              <input
                type="text"
                name="number"
                placeholder="Your Phone Number"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#813706] placeholder-gray-500 transition"
              />
              <textarea
                name="message"
                rows={5}
                placeholder="Type your message..."
                className="w-full p-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#813706] placeholder-gray-500 transition"
              ></textarea>
              <button
                type="submit"
                className="w-fit py-4 px-6 min-w-[140px] rounded-md text-white font-semibold 
                bg-[#813706] hover:bg-[#a55d2d] transition-all duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
