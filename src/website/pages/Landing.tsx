import React from 'react';
import ProductGrid from '../components/ProductGrid';
import ImageCarousel from '../components/imagecrousel'; // Assuming you have an ImageCarousel component

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Image Carousel - Added here */}
      <ImageCarousel />

      {/* Product Grid */}
      <ProductGrid />

      {/* You can add any other sections you might want here */}
    </div>
  );
};

export default Landing;
