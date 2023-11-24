import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const Homelayout = () => {
  return (
    <>
      <Navbar />
      <div className="align-element py-20">
        <Outlet />
      </div>
    </>
  );
};

export default Homelayout;
