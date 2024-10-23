import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail: React.FC = () => {
  const { collection, image } = useParams<{ collection?: string; image: string }>();
  const navigate = useNavigate();

  const handleBack = () => {
    if (!collection) {
      navigate('/'); // Navigate to home page for main page icons
    } else {
      navigate(`/shop/${collection}`);
    }
  };

  const handleAddToCart = () => {
    alert('Add to Cart functionality to be implemented');
  };

  // Determine the correct image path
  const imagePath = collection ? `/${collection}/${image}` : `/icons/${image}`;

  return (
    <div className="max-w-screen-xl mx-auto py-10 px-4">
      <button
        onClick={handleBack}
        className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
      >
        &larr; {!collection ? 'Back to Home' : 'Back to Collection'}
      </button>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src={imagePath}
            alt={`Product ${image}`}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">Product Detail</h1>
          <p className="text-gray-600 mb-4">
            This is a detailed view of the product {image} 
            {collection && ` from the ${collection} collection`}.
          </p>
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;