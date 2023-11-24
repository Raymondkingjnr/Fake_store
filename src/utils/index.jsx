import axios from "axios";
const productUrl = "https://fakestoreapi.com";

export const customFetch = axios.create({
  baseURL: productUrl,
});
