import React from "react";
import Vet from "./Vet";
import { Link } from "react-router-dom";

const Available = ({ vets }) => {
  return (
    <div className="flex flex-col gap-4 items-center py-10 px-4">
      <div className="text-[#2F4156] font-bold text-3xl capitalize text-center">
        available vets
      </div>
      <div className="flex gap-5 flex-wrap justify-center bg-[#F8F9FA] w-full md:w-[80%] rounded-[15px] p-5 md:p-7">
        {vets.map((vet, index) => (
          <Vet key={index} vet={vet} />
        ))}
      </div>
      <Link to="/vets/book-vet">
        <button className="capitalize flex w-fit px-5 py-4 align-middle rounded-[15px] bg-[#417481] text-[#F5EFED] font-semibold cursor-pointer duration-300 hover:bg-[#2F4156]">
          book an apponitment
        </button>
      </Link>
      <Link to="/vets/emergency">
        <button className="capitalize flex w-fit px-5 py-4 align-middle rounded-[15px] bg-[#ff383be0] text-[#F5EFED] font-semibold cursor-pointer duration-300 hover:bg-[#ff383b]">
          Emergency
        </button>
      </Link>
    </div>
  );
};

export default Available;
