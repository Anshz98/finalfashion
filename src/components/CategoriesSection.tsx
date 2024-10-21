import React from 'react';
import CategoryItem from "./CategoryItem";

const CategoriesSection: React.FC = () => {
  return (
    <div className="max-w-screen-2xl px-5 mx-auto mt-24">
      <h2 className="text-black text-5xl font-normal tracking-[1.56px] max-sm:text-4xl mb-12">
        OUR COLLECTION
      </h2>
      <div className="flex justify-between flex-wrap gap-y-10">
        <CategoryItem
          categoryTitle="Streetwear"
          image="luxury category 1.png"
          link="pages/Streetwear"
        />
        <CategoryItem
          categoryTitle="Old Money"
          image="luxury category 2.png"
          link="shop/oldmoney"
        />
        <CategoryItem
          categoryTitle="Summer Edition 1"
          image="luxury category 3.png"
          link="shop/summer"
        />
        <CategoryItem
          categoryTitle="Fall Edition"
          image="luxury category 4.png"
          link="shop/winter"
        />
      </div>
    </div>
  );
};

export default CategoriesSection;
