import React from 'react';
import ProductGrid from '../components/ProductGrid';

const Streetwear: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-center my-8">Streetwear Collection</h1>
      <ProductGrid /> {/* You can add filters, sorting, and more here if necessary */}
    </div>
  );
};

export default Streetwear;
