import React, { useState, useEffect, useRef } from 'react';

interface ProductCardProps {
  id: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, image }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Toggle the saved state
  const handleSaveClick = () => {
    setIsSaved(prev => !prev);
  };

  // Copy product ID to clipboard
  const handleCopyProductCode = () => {
    navigator.clipboard.writeText(`Product ID: ${id}`)
      .then(() => alert('Product code copied to clipboard!'))
      .catch(() => alert('Failed to copy product code.'));
  };

  // Placeholder for share functionality
  const handleShare = () => {
    alert('Share functionality to be implemented');
  };

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div 
      className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
        <img src={image} alt={`Product ${id}`} className="w-full h-full object-cover" />
      </div>

      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4">
          {/* Dropdown at the top-right corner */}
          <div className="flex justify-end">
            <div className="relative">
              <button
                onClick={() => setShowDropdown(prev => !prev)}
                className="text-white hover:text-gray-200 transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                  <path d="M3 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                </svg>
              </button>
              {showDropdown && (
                <div 
                  ref={dropdownRef} 
                  className="absolute right-0 bg-white shadow-lg rounded-md z-50 w-48"
                  style={{ top: '100%', marginTop: '8px' }}
                >
                  <ul className="py-1">
                    <li>
                      <button 
                        className="w-full text-left text-gray-700 hover:bg-gray-100 px-4 py-2 text-sm" 
                        onClick={() => window.open(`/product/${id}`, '_blank')}
                      >
                        Open in New Window
                      </button>
                    </li>
                    <li>
                      <button 
                        className="w-full text-left text-gray-700 hover:bg-gray-100 px-4 py-2 text-sm" 
                        onClick={handleCopyProductCode}
                      >
                        Copy Product Code
                      </button>
                    </li>
                    <li>
                      <button 
                        className="w-full text-left text-gray-700 hover:bg-gray-100 px-4 py-2 text-sm" 
                        onClick={handleShare}
                      >
                        Share
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Save button at the bottom-right corner */}
          <div className="flex justify-between items-end">
            <a
              href={`/product/${id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              View
            </a>

            <button
              onClick={handleSaveClick}
              className={`px-4 py-2 rounded-full text-sm font-semibold ${isSaved ? 'bg-[#003153]' : 'bg-[#003153]'} text-white`}
            >
              {isSaved ? 'Saved' : 'Save'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default function ProductGrid() {
  const products = [
    { id: 'product-1', image: 'icons/icon-1.jpeg' },
    { id: 'product-2', image: 'icons/icon-2.jpeg' },
    { id: 'product-3', image: 'icons/icon-3.jpeg' },
    { id: 'product-4', image: 'icons/icon-4.jpg' },
    { id: 'product-5', image: 'icons/icon-5.jpeg' },
    { id: 'product-6', image: 'icons/icon-6.jpg' },
    { id: 'product-7', image: 'icons/icon-7.jpg' },
    { id: 'product-8', image: 'icons/icon-8.jpg' },
    { id: 'product-9', image: 'icons/icon-9.jpg' },
    { id: 'product-10', image: 'icons/icon-10.jpg' },
    { id: 'product-11', image: 'icons/icon-12.jpeg' },
    { id: 'product-12', image: 'icons/icon-13.jpg' },
    { id: 'product-13', image: 'icons/icon-14.jpg' },
    { id: 'product-14', image: 'icons/icon-15.jpg' },
    { id: 'product-15', image: 'icons/icon-16.jpg' },
    { id: 'product-16', image: 'icons/icon-17.jpg' },
    { id: 'product-17', image: 'icons/icon-19.jpg' },
    { id: 'product-18', image: 'icons/icon-20.jpg' },
    { id: 'product-19', image: 'icons/icon-21.jpg' },
    { id: 'product-20', image: 'icons/icon-22.jpg' }
  ];

  return (
    <div className="max-w-screen-2xl px-5 mx-auto mt-24">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
