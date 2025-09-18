import React from "react";
import shopPhoto from "../../../public/home-media/pexels-mateusz-3627236-8368423.jpg";
import { Link } from "react-router-dom";

const ShopNow = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-[#F8F9FA] px-5 md:px-[70px] py-[30px] gap-8 md:gap-0">
      <div className="w-full max-w-[300px] md:max-w-[400px] h-[300px] md:h-[400px] overflow-hidden flex items-center justify-center">
        <img
          src={shopPhoto}
          alt="Pet shopping"
          className="w-full h-full object-cover rounded-lg"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col justify-center gap-4 md:px-[50px] w-full md:w-[37%] text-center md:text-left">
        <p className="text-[#FD7E14] text-sm font-bold">Petify</p>
        <h5 className="text-[#2F4156] font-bold text-2xl md:text-3xl capitalize">
          the smarter way to shop for your pet
        </h5>
        <p className="text-[#2f415677] text-sm md:text-base">
          Discover a wide range of trusted pet products and get them delivered
          straight to your door.
        </p>
        <div className="flex justify-center md:justify-start">
          <Link to="/shop">
            <button className="flex w-fit px-5 py-2 align-middle rounded-[10px] bg-[#2F4156] text-[#F5EFED] font-semibold cursor-pointer hover:bg-[#1f2d3a] transition">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopNow;
