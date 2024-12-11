import React from "react";
import { Link } from "react-router-dom";
import { Heart, Share2, Copy } from "lucide-react";

// interface ProductCardProps {
//   image: string;
// }

const ProductCard: React.FC<any> = ({ product }) => {
  const oldCart = localStorage.getItem("cart");
  const [cart, setCart] = React.useState(
    oldCart !== null ? JSON.parse(oldCart) : [],
  );
  const [isSaved, setIsSaved] = React.useState(false);
  const [showDropdown, setShowDropdown] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const handleSaveClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSaved((prev) => !prev);
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  React.useEffect(() => {
    if (cart.length > 0) localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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
      to={`/product/streetwear/${product.image}`}
      className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
        <img
          src={`/streetwear/${product.image}`}
          alt={`Product ${product.image}`}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder.svg";
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
                  // ref={dropdownRef}
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
              className={`px-4 py-2 rounded-full text-sm font-semibold ${isSaved ? "bg-[#003153]" : "bg-[#003153]"} text-white`}
            >
              {isSaved ? "Saved" : "Save"}
            </button>
          </div>
        </div>
      )}
    </Link>
  );
};

export default function Streetwear() {
  const products = [
    {
      id: 106,
      title: "Streetwear-6",
      image: "streetwear-6.jpeg",
      price: 3300,
      popularity: 5,
      category: "Streetwear",
      stock: 28,
    },
    {
      id: 107,
      title: "Streetwear-7",
      image: "streetwear-7.jpeg",
      price: 3300,
      popularity: 5,
      category: "Streetwear",
      stock: 28,
    },
    {
      id: 108,
      title: "Streetwear-8",
      image: "streetwear-8.jpeg",
      price: 3300,
      popularity: 5,
      category: "Streetwear",
      stock: 0,
    },
    {
      id: 109,
      title: "Streetwear-9",
      image: "streetwear-9.jpeg",
      price: 3300,
      popularity: 5,
      category: "Streetwear",
      stock: 28,
    },
    {
      id: 102,
      title: "Streetwear-2",
      image: "streetwear-2.jpeg",
      price: 3300,
      popularity: 5,
      category: "Streetwear",
      stock: 28,
    },
    {
      id: 103,
      title: "Streetwear-3",
      image: "streetwear-3.jpeg",
      price: 3300,
      popularity: 5,
      category: "Streetwear",
      stock: 28,
    },
    {
      id: 104,
      title: "Streetwear-4",
      image: "streetwear-4.jpeg",
      price: 3300,
      popularity: 5,
      category: "Streetwear",
      stock: 28,
    },
    {
      id: 105,
      title: "Streetwear-5",
      image: "streetwear-5.jpeg",
      price: 3300,
      popularity: 5,
      category: "Streetwear",
      stock: 0,
    },
    {
      id: 101,
      title: "Streetwear-1",
      image: "streetwear-1.jpeg",
      price: 3300,
      popularity: 5,
      category: "Streetwear",
      stock: 28,
    },
    {
      id: 110,
      title: "Streetwear-10",
      image: "streetwear-10.jpeg",
      price: 3300,
      popularity: 5,
      category: "Streetwear",
      stock: 28,
    },
    {
      id: 111,
      title: "Streetwear-11",
      image: "streetwear-11.jpeg",
      price: 3300,
      popularity: 5,
      category: "Streetwear",
      stock: 28,
    },
    {
      id: 112,
      title: "Streetwear-12",
      image: "streetwear-12.jpeg",
      price: 3300,
      popularity: 5,
      category: "Streetwear",
      stock: 28,
    },
    {
      id: 113,
      title: "Streetwear-13",
      image: "streetwear-13.jpeg",
      price: 3300,
      popularity: 5,
      category: "Streetwear",
      stock: 28,
    },
    {
      id: 114,
      title: "Streetwear-14",
      image: "streetwear-14.jpeg",
      price: 3300,
      popularity: 5,
      category: "Streetwear",
      stock: 28,
    },
    {
      id: 115,
      title: "Streetwear-15",
      image: "streetwear-15.jpeg",
      price: 3300,
      popularity: 5,
      category: "Streetwear",
      stock: 28,
    },
    {
      id: 116,
      title: "Streetwear-16",
      image: "streetwear-16.jpeg",
      price: 3300,
      popularity: 5,
      category: "Streetwear",
      stock: 28,
    },
    {
      id: 117,
      title: "Streetwear-17",
      image: "streetwear-17.jpeg",
      price: 3300,
      popularity: 5,
      category: "Streetwear",
      stock: 28,
    },
    {
      id: 118,
      title: "Streetwear-18",
      image: "streetwear-18.jpeg",
      price: 3300,
      popularity: 5,
      category: "Streetwear",
      stock: 28,
    },
    {
      id: 119,
      title: "Streetwear-19",
      image: "streetwear-19.jpeg",
      price: 3300,
      popularity: 5,
      category: "Streetwear",
      stock: 28,
    },
    {
      id: 120,
      title: "Streetwear-20",
      image: "streetwear-20.jpeg",
      price: 3300,
      popularity: 5,
      category: "Streetwear",
      stock: 28,
    },
  ];

  return (
    <>
      <div className="max-w-screen-2xl px-5 mx-auto mt-24">
        <h1 className="text-4xl font-bold mb-8">Streetwear Collection</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {products.map((product) => (
            <ProductCard key={product.image} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
