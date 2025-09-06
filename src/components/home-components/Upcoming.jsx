import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Upcoming = () => {
  return (
    <div className="flex justify-evenly px-[70px] py-[30px] ">
      <div className="w-[400px] h-[270px] overflow-hidden flex items-center">
        <img
          src="src\public\home-media\pexels-mikhail-nilov-7469213.jpg"
          alt=""
          className="w-[400px] h-[270px]"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-4.5 px-[50px] w-[35%]">
        <h5 className="text-[#2F4156] font-semibold text-3xl capitalize ">
          upcoming appoitnments
        </h5>
        <p className="text-[#2f415677]">
          Manage and view your scheduled vet visits and services all in one
          convenient dashboard.
        </p>
        <button className="flex px-5 py-2 align-middle font-semibold rounded-3xl w-fit text-2xl bg-[#F8F9FA] transition cursor-pointer  duration-300  ease-in-out  hover:bg-gray-200 hover:scale-105">
          <FaArrowRight className="text-[#FD7E14]" />
        </button>
      </div>
    </div>
  );
};

export default Upcoming;
