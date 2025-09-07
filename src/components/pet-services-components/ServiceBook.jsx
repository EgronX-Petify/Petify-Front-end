import React, { useState } from "react";
import TimeSelect from "./TimeSelect";

const ServiceBook = () => {
  const handleTimeChange = (value) => {
    console.log("Selected Time:", value);
  };

  return (
    <div className="flex flex-col gap-7 items-center bg-gray-50 py-10 w-[80%] m-auto shadow-xl rounded-xl">
      <p className="text-[#2F4156] font-semibold rounded-lg text-3xl w-[80%] p-1 flex justify-center bg-[#fd7d1467] m-auto ">
        Select your visit date & Time
      </p>

      <div className="flex flex-col p-10 rounded-xl bg-white w-[70%]">
        <div className="flex gap-7 items-start justify-center bg-white p-5 w-full">
          <div className="flex flex-col w-fit max-w-md p-4  rounded-lg shadow-sm h-fit justify-start bg-[#F8F9FA]">
            <label className="mb-1 text-sm font-medium text-[#2F4156]">
              Select Date
            </label>
            <input
              type="date"
              className="px-3 py-2 border rounded-lg shadow-sm text-[#2f415677] focus:ring-1 focus:ring-[#417481] focus:border-[#417481] outline-none"
            />
          </div>
          <TimeSelect onChange={handleTimeChange} />
        </div>

        <div className="flex justify-end gap-3 ">
          <button className="capitalize flex  w-fit px-5 py-4 align-middle rounded-[15px] bg-[#ff383be0] text-[#F5EFED] cursor-pointer duration-300  hover:bg-[#FF383C]">
            Cancel
          </button>
          <button className="capitalize flex  w-fit px-5 py-4 align-middle rounded-[15px] bg-[#417481] text-[#F5EFED]  cursor-pointer duration-300  hover:bg-[#2F4156]">
            confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceBook;
