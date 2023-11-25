import React from "react";
import { FeaturedProducts, Hero } from "../components";
import { customFetch } from "../utils";

const url = "/products?limit=6";

export const loader = async () => {
  try {
    const responds = await customFetch(url);
    const products = responds.data;
    // console.log(products);
    return { products };
  } catch (error) {
    console.log(error);
  }
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Landing;
