import React from "react";
import { Filter, ProductContainer } from "../components";
import { customFetch } from "../utils";

const productUrl = "/products";
const categoriesUrl = "/products/categories";

export const loader = async ({ request }) => {
  // Fetch categories
  const categoriesResponse = await customFetch(categoriesUrl);
  const categories = categoriesResponse.data;
  console.log(categories);

  // Params
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  console.log(params);

  const selectedCategory = params.category || "";
  const productReponse = await customFetch(productUrl, {
    params: { category: selectedCategory },
  });

  console.log(selectedCategory);

  const products = productReponse.data;

  return { products, categories, params };
};

const product = () => {
  return (
    <div>
      <Filter />
      <ProductContainer />
    </div>
  );
};

export default product;
