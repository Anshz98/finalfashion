import React from "react";
import { useSearchParams } from "react-router-dom";

const inventory = Array(20).fill(null); // Placeholder for 20 empty products

const Shop = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "All Products";

  return (
    <div className="max-w-screen-2xl mx-auto pt-10">
      <h1 className="text-4xl font-bold mb-8">{category}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {inventory.map((_, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center h-40 bg-gray-100"
          >
            <div className="w-16 h-16 bg-gray-200 rounded-full mb-4"></div>
            <p className="text-gray-400">Empty Product</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
