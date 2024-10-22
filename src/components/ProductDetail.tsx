import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const ProductDetail: React.FC = () => {
  const { image } = useParams<{ image: string }>();
  const navigate = useNavigate();

  // Determine the collection based on the image name
  const collection = image?.startsWith('oldmoney') ? 'oldmoney' : 
                     image?.startsWith('streetwear') ? 'streetwear' : 
                     image?.startsWith('summer') ? 'summer' : 
                     image?.startsWith('winter') ? 'winter' : 'shop';

  const handleBack = () => {
    navigate(`/shop/${collection}`);
  };

  return (
    <div className="max-w-screen-xl mx-auto py-10 px-4">
      {/* Back to Collection Button */}
      <button
        onClick={handleBack}
        className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
      >
        &larr; Back to Collection
      </button>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          {/* Display the correct image */}
          <img
            src={`/${collection}/${image}`}
            alt={image}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">Product Detail</h1>
          <p className="text-gray-600 mb-4">This is a detailed view of the product {image}.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
