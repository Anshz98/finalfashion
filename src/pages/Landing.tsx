import React from 'react';
import ProductGrid from '../components/ProductGrid';
import CategoriesSection from '../components/CategoriesSection';
import ImageCarousel from '../components/imagecrousel'; // Assuming you have an ImageCarousel component

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Image Carousel - Added here */}
      <ImageCarousel />

      {/* Product Grid */}
      <ProductGrid />

      {/* Categories Section */}
      <CategoriesSection />

      {/* Any other sections you might want to add */}
    </div>
  );
};

export default Landing;
