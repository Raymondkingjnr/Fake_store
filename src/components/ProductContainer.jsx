import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductGrid from "./ProductGrid";
const ProductContainer = () => {
  //   const { products } = useLoaderData();

  return (
    <div>
      <ProductGrid />
    </div>
  );
};

export default ProductContainer;
