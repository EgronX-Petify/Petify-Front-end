import React from "react";
import { FaEdit } from "react-icons/fa";

const UpdateServices = () => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm w-full">
      <h2 className="text-lg font-semibold mb-3 flex items-center gap-2 text-[#2F4156]">
        <FaEdit /> Service Details
      </h2>
      <form className="space-y-3 text-sm ">
        <input
          type="text"
          placeholder="Service Name"
          className="w-full border outline-none border-[#2f415677] rounded-md p-2 focus:ring-2 focus:ring-[#FD7E14]"
        />
        <textarea
          rows={2}
          placeholder="Description"
          className="w-full border outline-none border-[#2f415677] rounded-md p-2 focus:ring-2 focus:ring-[#FD7E14]"
        ></textarea>
        <input
          type="number"
          placeholder="Price"
          className="w-full border outline-none border-[#2f415677] rounded-md p-2 focus:ring-2 focus:ring-[#FD7E14]"
        />
        <div className="w-full flex flex-col md:flex-row md:justify-end gap-2">
          <button className=" bg-red-500 text-white px-7 py-3 rounded-lg font-medium hover:bg-red-600 transition">
            Cancel
          </button>
          <button className="px-7 py-3 bg-[#FD7E14] text-white rounded-md hover:bg-[#e56f0f]">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateServices;
