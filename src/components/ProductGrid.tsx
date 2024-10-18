import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
 
interface ProductCardProps {
  id: string;
}
 
const ProductCard: React.FC<ProductCardProps> = ({ id }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [productImage, setProductImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isHovered, setIsHovered] = useState(false);
 
  const handleSaveClick = () => {
    setIsSaved((prev) => !prev);
  };
 
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProductImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
 
  return (
    <div 
      className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
        {productImage ? (
          <img src={productImage} alt="Product" className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-500 text-lg font-medium">Image Here</span>
        )}
      </div>
 
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageUpload}
        className="hidden"
        accept="image/*"
      />
 
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4">
          <div className="flex justify-end">
            <button
              className="bg-blue-800 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors duration-200"
              onClick={handleSaveClick}
            >
              {isSaved ? 'Saved' : 'Save'}
            </button>
          </div>
          
          <div className="flex justify-between items-end">
            <Link
              to={`/product/${id}`}
              className="bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              View
            </Link>
            
            <div className="relative">
              <button
                onClick={() => setShowDropdown((prev) => !prev)}
                className="text-white hover:text-gray-200 transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clipRule="evenodd" />
                </svg>
              </button>
              {showDropdown && (
                <div className="absolute right-0 bottom-full mb-2 bg-white shadow-lg rounded-md z-10">
                  <ul className="py-1">
                    <li>
                      <button className="w-full text-left text-gray-700 hover:bg-gray-100 px-4 py-2 text-sm" onClick={() => alert('Product code copied!')}>
                        Copy Product Code
                      </button>
                    </li>
                    <li>
                      <button className="w-full text-left text-gray-700 hover:bg-gray-100 px-4 py-2 text-sm" onClick={() => alert('Product code shared!')}>
                        Share Product Code
                      </button>
                    </li>
                    <li>
                      <button className="w-full text-left text-gray-700 hover:bg-gray-100 px-4 py-2 text-sm" onClick={() => alert('Opening in new window...')}>
                        Open in New Window
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
 
export default function ProductGrid() {
  const products = Array(20).fill(null).map((_, index) => ({
    id: `product-${index + 1}`,
  }));
 
  return (
    <div className="max-w-screen-2xl px-5 mx-auto mt-24">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}