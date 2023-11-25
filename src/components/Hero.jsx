import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

const carouselImg = [img1, img2, img3, img4];

const Hero = () => {
  return (
    <div className="grid items-center gap-6 lg:grid-cols-2 ">
      <div>
        <h1 className="pb-7 text-3xl font-semibold">
          {" "}
          Shop for the finest product online without breaking the bank
        </h1>
        <p className="pt-4 text-start leading-8 tracking-normal text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          obcaecati ipsa eum optio assumenda perferendis sapiente voluptatum
          quas, aperiam unde.
        </p>
        <div className="mt-10">
          <Link to={"product"} className="btn btn-accent">
            Our Products
          </Link>
        </div>
      </div>
      <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-2">
        {carouselImg.map((img, index) => {
          return (
            <div key={index} className="carousel-item">
              <img
                src={img}
                alt=""
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
