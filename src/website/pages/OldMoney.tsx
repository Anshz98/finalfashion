import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Heart, Share2, Copy } from "lucide-react";

// interface ProductCardProps {
//   image: string;
// }

const ProductCard: React.FC<any> = ({ product, saveClick }) => {
  const [isSaved, setIsSaved] = React.useState(false);
  const [showDropdown, setShowDropdown] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const handleSaveClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSaved((prev) => !prev);

    const newProduct = { ...product, quantity: 1 };
    saveClick(newProduct);
  };

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    alert("Add to Wishlist functionality to be implemented");
  };

  const handleShareOutfitCode = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    alert("Share Outfit Code functionality to be implemented");
  };

  const handleCopyOutfitCode = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(`Outfit Code: ${product.image}`).then(
      () => {
        alert("Outfit Code copied to clipboard!");
      },
      (err) => {
        console.error("Could not copy text: ", err);
      },
    );
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <Link
      to={`/product/oldmoney/${product.image}/${JSON.stringify(product)}`}
      className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
        <img
          src={`/oldmoney/${product.image}`}
          alt={`Product ${product.image}`}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder.svg"; // Fallback for missing images
          }}
        />
      </div>

      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4">
          <div className="flex justify-end">
            <div className="relative">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setShowDropdown((prev) => !prev);
                }}
                className="text-white hover:text-gray-200 transition-colors duration-200"
                aria-label="More options"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-three-dots"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
              </button>
              {showDropdown && (
                <div
                  ref={dropdownRef}
                  className="absolute right-0 bg-white shadow-lg rounded-md z-50 w-48"
                  style={{ top: "100%", marginTop: "8px" }}
                >
                  <ul className="py-1">
                    <li>
                      <button
                        className="w-full text-left text-gray-700 hover:bg-gray-100 px-4 py-2 text-sm flex items-center"
                        onClick={handleAddToWishlist}
                      >
                        <Heart className="mr-2 h-4 w-4" /> Add to Wishlist
                      </button>
                    </li>
                    <li>
                      <button
                        className="w-full text-left text-gray-700 hover:bg-gray-100 px-4 py-2 text-sm flex items-center"
                        onClick={handleShareOutfitCode}
                      >
                        <Share2 className="mr-2 h-4 w-4" /> Share Outfit Code
                      </button>
                    </li>
                    <li>
                      <button
                        className="w-full text-left text-gray-700 hover:bg-gray-100 px-4 py-2 text-sm flex items-center"
                        onClick={handleCopyOutfitCode}
                      >
                        <Copy className="mr-2 h-4 w-4" /> Copy Outfit Code
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-between items-end">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors duration-200">
              View
            </button>

            <button
              onClick={handleSaveClick}
              className={`px-4 py-2 rounded-full text-sm font-semibold ${
                isSaved ? "bg-[#003153]" : "bg-[#003153]"
              } text-white`}
            >
              {isSaved ? "Saved" : "Save"}
            </button>
          </div>
        </div>
      )}
    </Link>
  );
};

export default function OldMoney() {
  const navigate = useNavigate();
  const oldCart = localStorage.getItem("cart");
  const [cart, setCart] = React.useState(
    oldCart !== null ? JSON.parse(oldCart) : [],
  );
  console.log(cart);
  const addToCart = (product) => {
    const newProduct = { ...product, quantity: 1 };
    setCart([...cart, { ...newProduct }]);
    //if (cart.length > 0) {
    localStorage.setItem(
      "cart",
      JSON.stringify([...cart, { ...product, quantity: 1 }]),
    );
    if (window.confirm("Go to Cart?")) {
      navigate("/cart");
    }
    //}
  };
  const products = [
    {
      id: 301,
      title: "oldmoney-1",
      image: "oldmoney-1.jpeg",
      price: 4900,
      popularity: 5,
      category: "oldmoney",
      stock: 16,
    },
    {
      id: 302,
      title: "oldmoney-2",
      image: "oldmoney-2.jpeg",
      price: 4900,
      popularity: 5,
      category: "oldmoney",
      stock: 0,
    },
    {
      id: 303,
      title: "oldmoney-3",
      image: "oldmoney-3.jpeg",
      price: 4900,
      popularity: 5,
      category: "oldmoney",
      stock: 16,
    },
    {
      id: 304,
      title: "oldmoney-4",
      image: "oldmoney-4.jpeg",
      price: 4900,
      popularity: 5,
      category: "oldmoney",
      stock: 16,
    },
    {
      id: 305,
      title: "oldmoney-5",
      image: "oldmoney-5.jpeg",
      price: 4900,
      popularity: 5,
      category: "oldmoney",
      stock: 16,
    },
    {
      id: 306,
      title: "oldmoney-6",
      image: "oldmoney-6.jpeg",
      price: 4900,
      popularity: 5,
      category: "oldmoney",
      stock: 16,
    },
    {
      id: 307,
      title: "oldmoney-7",
      image: "oldmoney-7.jpeg",
      price: 4900,
      popularity: 5,
      category: "oldmoney",
      stock: 16,
    },
    {
      id: 308,
      title: "oldmoney-8",
      image: "oldmoney-8.jpeg",
      price: 4900,
      popularity: 5,
      category: "oldmoney",
      stock: 16,
    },
    {
      id: 309,
      title: "oldmoney-9",
      image: "oldmoney-9.jpeg",
      price: 4900,
      popularity: 5,
      category: "oldmoney",
      stock: 0,
    },
    {
      id: 310,
      title: "oldmoney-10",
      image: "oldmoney-10.jpeg",
      price: 4900,
      popularity: 5,
      category: "oldmoney",
      stock: 16,
    },
    {
      id: 311,
      title: "oldmoney-11",
      image: "oldmoney-11.jpeg",
      price: 4900,
      popularity: 5,
      category: "oldmoney",
      stock: 16,
    },
    {
      id: 312,
      title: "oldmoney-12",
      image: "oldmoney-12.jpeg",
      price: 4900,
      popularity: 5,
      category: "oldmoney",
      stock: 16,
    },
    {
      id: 313,
      title: "oldmoney-13",
      image: "oldmoney-13.jpeg",
      price: 4900,
      popularity: 5,
      category: "oldmoney",
      stock: 0,
    },
    {
      id: 314,
      title: "oldmoney-14",
      image: "oldmoney-14.jpeg",
      price: 4900,
      popularity: 5,
      category: "oldmoney",
      stock: 16,
    },
    {
      id: 315,
      title: "oldmoney-15",
      image: "oldmoney-15.jpeg",
      price: 4900,
      popularity: 5,
      category: "oldmoney",
      stock: 16,
    },
    {
      id: 316,
      title: "oldmoney-16",
      image: "oldmoney-16.jpeg",
      price: 4900,
      popularity: 5,
      category: "oldmoney",
      stock: 16,
    },
    {
      id: 317,
      title: "oldmoney-17",
      image: "oldmoney-17.jpeg",
      price: 4900,
      popularity: 5,
      category: "oldmoney",
      stock: 16,
    },
    {
      id: 318,
      title: "oldmoney-18",
      image: "oldmoney-18.jpeg",
      price: 4900,
      popularity: 5,
      category: "oldmoney",
      stock: 16,
    },
    {
      id: 319,
      title: "oldmoney-19",
      image: "oldmoney-19.jpeg",
      price: 4900,
      popularity: 5,
      category: "oldmoney",
      stock: 16,
    },
    {
      id: 320,
      title: "oldmoney-20",
      image: "oldmoney-20.jpeg",
      price: 4900,
      popularity: 5,
      category: "oldmoney",
      stock: 16,
    },
  ];

  return (
    <div className="max-w-screen-2xl px-5 mx-auto mt-24">
      <h1 className="text-4xl font-bold mb-8">Old Money Collection</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.image}
            product={product}
            saveClick={addToCart}
          />
        ))}
      </div>
    </div>
  );
}
