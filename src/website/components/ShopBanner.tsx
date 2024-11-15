import React from "react";

interface ShopBannerProps {
  category: string;
}

const ShopBanner: React.FC<ShopBannerProps> = ({ category }) => {
  return (
    <div className="w-full bg-[#f4f4f4] p-12 text-center">
      <h1 className="text-4xl font-bold capitalize tracking-wide">
        {category} Collection
      </h1>
    </div>
  );
};

export default ShopBanner;