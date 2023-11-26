import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";
const ProductGrid = () => {
  const { products } = useLoaderData();

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 pt-12 gap-4">
      {products?.map((items, index) => {
        const { id, title, price, image } = items;

        const nairaAmount = formatPrice(price);
        return (
          <Link
            to={`/products/${id}`}
            key={index}
            className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
          >
            <figure className="px-4 pt-6 ">
              <img
                src={image}
                alt={title}
                className="rounded-xl h-72 w-72 sm:h-28 md:h-48  object-cover"
              />
            </figure>
            <div className="card-body items-center mt-2 text-center">
              <h2 className="card-title capitalize tracking-wider text-sm  text-center">
                {title}
              </h2>
              <p className="text-sm mt-3 md:text-sm"> {nairaAmount}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductGrid;
