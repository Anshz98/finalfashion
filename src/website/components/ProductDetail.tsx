import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail: React.FC = () => {
  const { collection, image } = useParams<{ collection: string; image: string }>();
  const navigate = useNavigate();

  const handleBack = () => {
    if (collection && collection !== 'icons') {
      navigate(`/shop/${collection}`); // Navigate back to the specific category
    } else {
      navigate('/'); // Navigate to the homepage
    }
  };

  if (!image) {
    return <div className="text-red-600">Error: Missing collection or image parameter.</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto py-10 px-4">
      <button
        onClick={handleBack}
        className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
      >
        &larr; {collection && collection !== 'icons'
          ? `Back to ${collection.charAt(0).toUpperCase() + collection.slice(1)}`
          : 'Back to Homepage'}
      </button>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src={`/${collection}/${image}`}
            alt={`Product ${image}`}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/placeholder.svg'; // Fallback for missing images
            }}
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">Product Detail</h1>
          <p className="text-gray-600 mb-4">
            This is a detailed view of the product <strong>{image}</strong>{' '}
            {collection && collection !== 'icons' && (
              <>
                from the <strong>{collection.charAt(0).toUpperCase() + collection.slice(1)}</strong>{' '}
                collection.
              </>
            )}
          </p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
