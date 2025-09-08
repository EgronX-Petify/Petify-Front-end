import React from "react";
import Vet from "./Vet";

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
      <button className="capitalize flex w-fit px-5 py-4 align-middle rounded-[15px] bg-[#417481] text-[#F5EFED] font-semibold cursor-pointer duration-300 hover:bg-[#2F4156]">
        book an apponitment
      </button>
    </div>
  );
};

export default Available;
