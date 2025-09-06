import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Track = () => {
  return (
    <div className="flex flex-col items-center justify-center px-[70px] py-[30px] gap-7 ">
      <div className="w-[500px] h-[250px] overflow-hidden flex items-center">
        <img
          src="src\public\home-media\pexels-kampus-7843933.jpg"
          alt=""
          className="w-[500px] h-[250px] object-cover"
        />
      </div>
      <div className="flex flex-col justify-center gap-3 px-[50px] w-[35%]">
        <h5 className="text-[#2F4156] font-semibold text-3xl capitalize ">
          track your orders
        </h5>
        <p className="text-[#2f415677]">
          Stay updated with real-time order tracking and never lose sight of
          your pet supplies.
        </p>
        <button className="flex align-middle px-5 py-2 font-semibold rounded-3xl w-fit text-2xl bg-[#F8F9FA] transition cursor-pointer  duration-300  ease-in-out  hover:bg-gray-200 hover:scale-105">
          <FaArrowRight className="text-[#FD7E14]" />
        </button>
      </div>
    </div>
  );
};

export default Track;
