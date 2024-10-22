import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail: React.FC = () => {
  const { image } = useParams<{ image: string }>();

  return (
    <div className="max-w-screen-xl mx-auto py-10 px-4">
      <Link to="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">&larr; Back to Shop</Link>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src={`/icons/${image}`}
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