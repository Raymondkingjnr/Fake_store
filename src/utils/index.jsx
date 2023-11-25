import axios from "axios";
const productUrl = "https://fakestoreapi.com";

export const customFetch = axios.create({
  baseURL: productUrl,
});

export const formatPrice = (price) => {
  const nairaAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  }).format((price / 100).toFixed(2));

  return nairaAmount;
};

export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;
    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};
