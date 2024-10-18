import { useState } from "react";
import { Menu, Search, User, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link for routing

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="max-w-screen-xl flex flex-col items-center justify-between py-4 px-6 mx-auto bg-white shadow-sm text-gray-700 max-sm:px-4 max-[400px]:px-3">
        <div className="w-full flex items-center justify-between mb-4">
          {/* Left Section: Menu Icon */}
          <div className="flex-1 flex justify-start">
            <Menu
              className="text-3xl cursor-pointer text-gray-700 hover:text-gray-900 transition-colors duration-200"
              onClick={() => setIsSidebarOpen(true)}
            />
          </div>

          {/* Center Section: Logo */}
          <div className="flex-1 flex justify-center">
            <Link
              to="/"
              className="text-4xl font-semibold tracking-wide text-gray-800 hover:text-gray-900 transition-colors duration-200"
            >
              PINFASHION
            </Link>
          </div>

          {/* Right Section: Icons */}
          <div className="flex-1 flex justify-end gap-8 items-center max-sm:gap-4">
            <Link to="/search">
              <Search className="w-6 h-6 text-gray-700 hover:text-gray-900 transition-colors duration-200" />
            </Link>
            <Link to="/login">
              <User className="w-6 h-6 text-gray-700 hover:text-gray-900 transition-colors duration-200" />
            </Link>
            <Link to="/cart">
              <ShoppingBag className="w-6 h-6 text-gray-700 hover:text-gray-900 transition-colors duration-200" />
            </Link>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="w-full flex justify-center space-x-8">
          <Link to="/shop/streetwear" className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline transition-colors duration-200">
            Street Wear
          </Link>
          <Link to="/shop/oldmoney" className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline transition-colors duration-200">
            Old Money
          </Link>
          <Link to="/shop/summer" className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline transition-colors duration-200">
            Summer
          </Link>
          <Link to="/shop/winter" className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline transition-colors duration-200">
            Winter
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
