import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { customFetch, formatPrice, generateAmountOptions } from "../utils";

export const loader = async ({ params }) => {
  const resp = await customFetch(`/products/${params.id}`);
  return { product: resp.data };
};

const SingleProduct = () => {
  const { product } = useLoaderData();
  // console.log(product);
  const { title, description, price, image, category } = product;
  const nairaAmount = formatPrice(price);
  const [amount, setAmount] = useState(1);

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  return (
    <div className="mt-6 grid items-center gap-y-4 lg:grid-cols-2 lg:gap-x-16">
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="w-96 h-96 object-cover rounded-lg lg:w-full"
      />
      <div className="grid">
        {/* PRODUCT INFO */}
        <h1 className="capitalize text-2xl font-semibold">{title}</h1>
        {/* <h4 className="mt-2 text-neutral-content font-bold">{brand}</h4> */}
        <p className="text-xl mt-3">{nairaAmount}</p>
        <h4 className=" text-neutral-content font-bold mt-2"> {category}</h4>
        <p className="leading-8 mt-6">{description}</p>
        {/* AMOUNT */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <h4 className=" text-md font-medium capitalize">Amount</h4>
          </label>
          <select
            id="amount"
            className="select select-primary select-bordered select-md"
            value={amount}
            onChange={handleAmount}
          >
            {generateAmountOptions(15)}
          </select>
        </div>
        <div className="mt-6">
          <button className="btn btn-accent btn-md">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
