import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-16 px-6 border-t border-gray-200 bg-white">
      {" "}
      {/* Added bg-white and border-gray-200 for consistency */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Section - Branding */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-3xl font-bold text-black mb-2 font-serif">Nature Cascade</h3>{" "}
          {/* Changed to text-black */}
          <p className="text-gray-700 mb-6 text-lg font-serif">Your Roots. Our Revolution.</p>{" "}
          {/* Changed to text-gray-700 */}
          <button className="bg-[#813706] text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-[#a55d2d] transition duration-300">
            Donate
          </button>
        </div>

        {/* Middle Section - Navigation */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="text-xl font-bold text-black mb-4 font-serif">Navigation</h4>{" "}
          {/* Changed to text-black */}
          <nav className="space-y-2 text-base font-serif text-gray-800">
            {" "}
            {/* Changed to text-gray-800 */}
            <Link href="/" className="block hover:text-[#813706] transition duration-200">
              Home
            </Link>
            <Link href="/about" className="block hover:text-[#813706] transition duration-200">
              About Us
            </Link>
            <Link href="/projects" className="block hover:text-[#813706] transition duration-200">
              Our Projects
            </Link>
            <Link href="/profile" className="block hover:text-[#813706] transition duration-200">
              Profile
            </Link>
            <Link href="/contact" className="block hover:text-[#813706] transition duration-200">
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Right Section - Connect With Us */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="text-xl font-bold text-black mb-4 font-serif">Connect With Us</h4>{" "}
          {/* Changed to text-black */}
          <div className="space-y-3 text-base font-serif text-gray-800">
            {" "}
            {/* Changed to text-gray-800 */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-[#813706] transition duration-200"
            >
              <FaInstagram className="text-xl mr-2" />
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-[#813706] transition duration-200"
            >
              <FaFacebookF className="text-xl mr-2" />
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-[#813706] transition duration-200"
            >
              <FaTwitter className="text-xl mr-2" />
              Twitter
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-[#813706] transition duration-200"
            >
              <FaLinkedinIn className="text-xl mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
