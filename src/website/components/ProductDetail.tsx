import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail: React.FC = () => {
  const { collection, image } = useParams<{ collection: string; image: string }>();
  const navigate = useNavigate();

  // Navigate back to the homepage
  const handleBack = () => {
    navigate('/'); // Navigate directly to the homepage
  };

  // Error handling for missing params
  if (!collection || !image) {
    return <div className="text-red-600">Error: Missing collection or image parameter.</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto py-10 px-4">
      <button
        onClick={handleBack}
        className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
      >
        &larr; Back to Homepage
      </button>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src={`/${collection}/${image}`}
            alt={`Product ${image}`}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/placeholder.svg';
            }}
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">Product Detail</h1>
          <p className="text-gray-600 mb-4">
            This is a detailed view of the product <strong>{image}</strong> from the{' '}
            <strong>{collection}</strong> collection.
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
