// Using standard <a> tags instead of Next.js Link component
// and inline SVGs for icons instead of react-icons/fa.

export default function Footer() {
  return (
    <footer className="w-full py-16 px-6 border-t border-gray-200 bg-white">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Section - Branding */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          {/* Adjusted font-size and color for "Nature Crusade" to match image */}
          <h3 className="text-4xl font-bold text-[#4F6C4C] mb-2 font-serif">Nature Crusade</h3>
          {/* Adjusted font-size and color for slogan to match image */}
          <p className="text-gray-700 mb-6 text-lg font-serif">Your Roots, Our Revolution.</p>
          {/* Changed button text and background color to match image */}
          <button className="bg-[#4F6C4C] text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-[#6a8c6a] transition duration-300">
            Join The Crusade
          </button>
        </div>

        {/* Middle Section - Navigation */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="text-xl font-bold text-black mb-4 font-serif">Navigation</h4>
          <nav className="space-y-2 text-base font-serif text-gray-800">
            {/* Using <a> tags instead of Link */}
            <a href="/" className="block hover:text-[#813706] transition duration-200">
              Home
            </a>
            <a href="/about" className="block hover:text-[#813706] transition duration-200">
              About Us
            </a>
            <a href="/projects" className="block hover:text-[#813706] transition duration-200">
              Our Projects
            </a>
            <a href="/profile" className="block hover:text-[#813706] transition duration-200">
              Profile
            </a>
            <a href="/contact" className="block hover:text-[#813706] transition duration-200">
              Contact Us
            </a>
          </nav>
        </div>

        {/* Right Section - Connect With Us */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="text-xl font-bold text-black mb-4 font-serif">Connect With Us</h4>
          <div className="space-y-3 text-base font-serif text-gray-800">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-[#813706] transition duration-200"
            >
              {/* Inline SVG for Instagram icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.4 2.22A5.4 5.4 0 0 0 2 7.62v8.76A5.4 5.4 0 0 0 7.4 21.82h8.76A5.4 5.4 0 0 0 21.82 16.38V7.62A5.4 5.4 0 0 0 16.38 2.22ZM12 16.38a4.38 4.38 0 1 1 0-8.76 4.38 4.38 0 0 1 0 8.76Zm-6.52-9.2a.96.96 0 1 1 0-1.92.96.96 0 0 1 0 1.92Z" />
              </svg>
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-[#813706] transition duration-200"
            >
              {/* Inline SVG for Facebook icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3l-1 3h-2v6.95c5.05-.72 9-4.72 9-9.95z" />
              </svg>
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-[#813706] transition duration-200"
            >
              {/* Inline SVG for Twitter icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.46 6c-.8-.28-1.6-.47-2.4-.55A4.68 4.68 0 0 0 16.5 4c-2.4 0-4.4 2-4.4 4.4v.9c-3.6-.3-6.8-2-9-5.1A4.32 4.32 0 0 0 3 10.9c0 1.5.8 2.9 2.1 3.7-.7 0-1.4-.2-2-.5v.1c0 2.2 1.5 4.1 3.5 4.5-.6.1-1.2.2-1.9.1.5 1.7 2.2 2.9 4.2 2.9-1.6 1.2-3.7 1.9-6 1.9-.4 0-.8 0-1.2-.1C3.8 21.6 6.2 22 8.7 22c10.4 0 16.1-8.6 16.1-16.1v-.7c.8-.6 1.5-1.3 2.1-2.1z" />
              </svg>
              Twitter
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-[#813706] transition duration-200"
            >
              {/* Inline SVG for LinkedIn icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3v9zm-.5-10.29c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM19 19h-3v-4c0-1.1-.9-2-2-2s-2 .9-2 2v4h-3v-9h3v1.75c.87-1.25 2.17-1.75 3-1.75 3.1 0 4 2.5 4 6.25v2.75z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
