import React, { ReactElement, useCallback, useEffect, useState } from "react";
import customFetch from "../axios/custom";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  setShowingProducts,
  setTotalProducts,
} from "../features/shop/shopSlice";

const ProductGridWrapper = ({
  searchQuery,
  sortCriteria,
  category,
  page,
  limit,
  children,
}: {
  searchQuery?: string;
  sortCriteria?: string;
  category?: string;
  page?: number;
  limit?: number;
  children:
    | ReactElement<{ products: Product[] }>
    | ReactElement<{ products: Product[] }>[];
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const { totalProducts } = useAppSelector((state) => state.shop);
  const dispatch = useAppDispatch();

  const getSearchedProducts = useCallback(
    async (query: string, sort: string, page: number) => {
      try {
        const response = await customFetch("/products");
        const allProducts = response.data;
        let searchedProducts = allProducts.filter((product: Product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        );

        if (category) {
          searchedProducts = searchedProducts.filter(
            (product: Product) => product.category === category
          );
        }

        dispatch(setTotalProducts(searchedProducts.length));

        // Sorting logic
        if (sort === "price-asc") {
          searchedProducts.sort((a: Product, b: Product) => a.price - b.price);
        } else if (sort === "price-desc") {
          searchedProducts.sort((a: Product, b: Product) => b.price - a.price);
        } else if (sort === "popularity") {
          searchedProducts.sort(
            (a: Product, b: Product) => b.popularity - a.popularity
          );
        }

        const offset = (page - 1) * 9;
        const paginatedProducts = searchedProducts.slice(offset, offset + 9);
        setProducts(paginatedProducts);
        dispatch(setShowingProducts(paginatedProducts.length));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    [category, dispatch]
  );

  useEffect(() => {
    getSearchedProducts(searchQuery || "", sortCriteria || "", page || 1);
  }, [searchQuery, sortCriteria, page]);

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && products.length > 0) {
      return React.cloneElement(child, { products: products });
    }
    return null;
  });

  return childrenWithProps;
};

export default ProductGridWrapper;
