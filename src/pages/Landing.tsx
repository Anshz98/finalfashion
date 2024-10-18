import React from 'react'
import ProductGrid from '../components/ProductGrid'
import CategoriesSection from '../components/CategoriesSection'

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section or any other content you might have */}
      <ProductGrid />
      <CategoriesSection />
      {/* Any other sections you might want to add */}
    </div>
  )
}

export default Landing