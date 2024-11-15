import React, { useState } from "react";
import {
  ProductGrid,
  ProductGridWrapper,
  ShopFilterAndSort,
  ShowingPagination,
} from ".";

interface ShopPageContentProps {
  category: string;
  page: number;
}

const ShopPageContent: React.FC<ShopPageContentProps> = ({ category, page }) => {
  const [sortCriteria, setSortCriteria] = useState<string>("default");
  const [currentPage, setCurrentPage] = useState(page);

  return (
    <div className="max-w-screen-xl mx-auto py-10">
      {/* Filter and Sort Bar */}
      <ShopFilterAndSort sortCriteria={sortCriteria} setSortCriteria={setSortCriteria} />

      {/* Product Grid */}
      <ProductGridWrapper sortCriteria={sortCriteria} category={category} page={currentPage}>
        <ProductGrid />
      </ProductGridWrapper>

      {/* Pagination */}
      <ShowingPagination page={currentPage} category={category} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default ShopPageContent;
