import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Homelayout,
  Landing,
  Error,
  Product,
  SingleProduct,
  Signin,
  Register,
  About,
  Cart,
  Checkout,
  Orders,
} from "./pages";
import ErrorComponent from "./components/ErrorComponent";

import { loader as landingLoader } from "./pages/Landing";
import { loader as singleProductLoader } from "./pages/SingleProduct";
import { loader as ProductLoader } from "./pages/product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorComponent />,
        loader: landingLoader,
      },
      {
        path: "products",
        element: <Product />,
        errorElement: <ErrorComponent />,
        loader: ProductLoader,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        errorElement: <ErrorComponent />,
        loader: singleProductLoader,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
    ],
  },
  {
    path: "/login",
    element: <Signin />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
