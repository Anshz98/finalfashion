import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Share2, Copy } from 'lucide-react';

interface ProductCardProps {
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image }) => {
  const [isSaved, setIsSaved] = React.useState(false);
  const [showDropdown, setShowDropdown] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const handleSaveClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSaved(prev => !prev);
  };

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    alert('Add to Wishlist functionality to be implemented');
  };

  const handleShareOutfitCode = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    alert('Share Outfit Code functionality to be implemented');
  };

  const handleCopyOutfitCode = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(`Outfit Code: ${image}`).then(() => {
      alert('Outfit Code copied to clipboard!');
    }, (err) => {
      console.error('Could not copy text: ', err);
    });
  };

  React.useEffect(() => {
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
    <Link
      to={`/product/summer/${image}`}
      className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
        <img 
          src={`/summer/${image}`} 
          alt={`Product ${image}`} 
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder.svg';
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
                  setShowDropdown(prev => !prev);
                }}
                className="text-white hover:text-gray-200 transition-colors duration-200"
                aria-label="More options"
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
            <button
              className="bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              View
            </button>

            <button
              onClick={handleSaveClick}
              className={`px-4 py-2 rounded-full text-sm font-semibold ${isSaved ? 'bg-[#003153]' : 'bg-[#003153]'} text-white`}
            >
              {isSaved ? 'Saved' : 'Save'}
            </button>
          </div>
        </div>
      )}
    </Link>
  );
};

export default function Summer() {
  const products = [
    { image: 'summer-1.jpeg' },
    { image: 'summer-2.jpeg' },
    { image: 'summer-3.jpeg' },
    { image: 'summer-4.jpeg' },
    { image: 'summer-5.jpeg' },
    { image: 'summer-6.jpeg' },
    { image: 'summer-7.jpeg' },
    { image: 'summer-8.jpeg' },
    { image: 'summer-9.jpeg' },
    { image: 'summer-10.jpeg' },
    { image: 'summer-11.jpeg' },
    { image: 'summer-12.jpeg' },
    { image: 'summer-13.jpeg' },
    { image: 'summer-14.jpeg' },
    { image: 'summer-15.jpeg' },
    { image: 'summer-16.jpeg' },
    { image: 'summer-17.jpeg' },
    { image: 'summer-18.jpeg' },
    { image: 'summer-19.jpeg' },
    { image: 'summer-20.jpeg' },
  ];

  return (
    <div className="max-w-screen-2xl px-5 mx-auto mt-24">
      <h1 className="text-4xl font-bold mb-8">Summer Collection</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map(product => (
          <ProductCard key={product.image} {...product} />
        ))}
      </div>
    </div>
  );
}