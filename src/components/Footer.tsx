const Footer = () => {
  return (
    <>
     
      <footer className="w-full py-6 px-8 bg-[#003153] text-white border-t-2 border-[#ddd] hover:bg-white hover:text-black transition-colors duration-200 max-sm:px-4 max-[400px]:px-3">
        <div className="max-w-screen-2xl mx-auto px-4 flex flex-col items-center gap-6">
          {/* Language and Location Line */}
          <div className="text-sm flex items-center justify-center space-x-4 hover:text-black transition-colors duration-200">
            <p>Worldwide</p>
            <span className="text-gray-300">/</span>
            <p>English</p>
            <span className="text-gray-300">/</span>
            <p>French</p>
          </div>

          {/* Social Media Line */}
          <div className="text-sm flex items-center justify-center space-x-4 hover:text-black transition-colors duration-200">
            <p>Follow us on:</p>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#003153] transition-colors duration-200"
            >
              Facebook
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#003153] transition-colors duration-200"
            >
              Twitter
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#003153] transition-colors duration-200"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

