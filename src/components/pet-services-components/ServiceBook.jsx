import React from "react";
import TimeSelect from "./TimeSelect";
import { useNavigate } from "react-router-dom";
import { MdCancelPresentation } from "react-icons/md";

const ServiceBook = () => {
  const handleTimeChange = (value) => {
    console.log("Selected Time:", value);
  };

  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-7 items-center md:my-5 bg-gray-50 py-10 w-[95%] md:w-[80%] m-auto shadow-xl rounded-xl">
      <button
        className="flex justify-end  w-[90%]"
        onClick={() => navigate(-1)}
      >
        <MdCancelPresentation className="text-2xl text-[#2F4156] cursor-pointer" />
      </button>
      <p className="text-[#2F4156] font-semibold rounded-lg text-lg md:text-3xl w-[95%] md:w-[80%] p-2 flex justify-center bg-[#fd7d1467] m-auto text-center">
        Select your visit date & Time
      </p>

      <div className="flex flex-col p-6 md:p-10 rounded-xl bg-white w-full md:w-[70%]">
        <div className="flex flex-col md:flex-row gap-7 items-stretch md:items-start justify-center bg-white p-5 w-full">
          <div className="flex flex-col w-full md:w-fit max-w-md p-4 rounded-lg shadow-sm h-fit justify-start bg-[#F8F9FA]">
            <label className="mb-1 text-sm font-medium text-[#2F4156]">
              Select Date
            </label>
            <input
              type="date"
              className="px-3 py-2 border rounded-lg shadow-sm text-[#2f415677] focus:ring-1 focus:ring-[#417481] focus:border-[#417481] outline-none w-full"
            />
          </div>

          <TimeSelect onChange={handleTimeChange} />
        </div>

        <div className="flex flex-col md:flex-row justify-end gap-3 mt-6">
          <button
            className="capitalize md:w-fit w-full px-5 py-3 rounded-[15px] bg-[#ff383be0] text-[#F5EFED] cursor-pointer duration-300 hover:bg-[#FF383C]"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
          <button
            className="capitalize md:w-fit w-full px-5 py-3 rounded-[15px] bg-[#417481] text-[#F5EFED] cursor-pointer duration-300 hover:bg-[#2F4156]"
            onClick={() => alert("done")}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceBook;
