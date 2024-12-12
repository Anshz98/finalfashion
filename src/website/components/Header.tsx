import { useState } from "react";
import { Search, User, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../utils/auth-context"; // Import useUserAuth hook if you want to check login state

const Header = () => {
  const { user } = useUserAuth(); // Get the current user state

  return (
    <header className="w-full flex items-center justify-between py-6 px-8 bg-[#003153] text-white max-sm:px-4 max-[400px]:px-3 border-b-2 border-[#ddd] hover:bg-white hover:text-black transition-colors duration-200">
      <div className="flex-shrink-0">
        <Link to="/" className="hover:text-[#003153] transition-colors duration-200">
          <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: "bold", fontSize: "2.5em", letterSpacing: "0.05em",}}>
            WardobeWise
          </span>
        </Link>
      </div>

      <nav className="flex space-x-8">
        <Link to="/shop/streetwear" className="text-xl font-medium transition-colors duration-200">Streetwear</Link>
        <Link to="/shop/oldmoney" className="text-xl font-medium transition-colors duration-200">Old Money</Link>
        <Link to="/shop/summer" className="text-xl font-medium transition-colors duration-200">Summer</Link>
        <Link to="/shop/winter" className="text-xl font-medium transition-colors duration-200">Winter</Link>
        <Link to="/all-items" className="text-xl font-medium transition-colors duration-200">All Items</Link>
      </nav>

      <div className="flex gap-6 items-center">
        <Link to="/search">
          <Search className="w-6 h-6 transition-colors duration-200" />
        </Link>
        <Link to={user ? "/user-profile" : "/login"}> {/* Conditional link based on login status */}
          <User className="w-6 h-6 transition-colors duration-200" />
        </Link>
        <Link to="/cart">
          <ShoppingBag className="w-6 h-6 transition-colors duration-200" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
