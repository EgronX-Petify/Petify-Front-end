import React from "react";
import { FaEdit } from "react-icons/fa";

const UpdateServices = ({ open, setOpen }) => {
  return (
    open && (
      <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
        <div
          className="
            max-w-[90%] md:w-3xl 
            bg-white rounded-2xl shadow-md 
            max-h-[90vh] 
            overflow-y-auto
            p-4 md:p-6
          "
        >
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2 text-[#2F4156]">
            <FaEdit /> Service Details
          </h2>

          <form className="space-y-4 text-sm">
            {/* Service Photo */}
            <div>
              <label className="block text-sm font-medium mb-1 text-[#2F4156]">
                Service Photo
              </label>
              <input
                type="file"
                accept="image/*"
                className="w-full border border-[#2f415677] rounded-md p-2 cursor-pointer focus:ring-2 focus:ring-[#FD7E14]"
              />
              <p className="text-xs text-gray-500 mt-1">
                Upload a photo (JPG, PNG, JPEG)
              </p>
            </div>

            {/* Service Name */}
            <div>
              <label className="block text-sm font-medium mb-1 text-[#2F4156]">
                Service Name
              </label>
              <input
                type="text"
                placeholder="Enter service name"
                className="w-full border outline-none border-[#2f415677] rounded-md p-2 focus:ring-2 focus:ring-[#FD7E14]"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium mb-1 text-[#2F4156]">
                Description
              </label>
              <textarea
                rows={2}
                placeholder="Enter description"
                className="w-full border outline-none border-[#2f415677] rounded-md p-2 focus:ring-2 focus:ring-[#FD7E14]"
              ></textarea>
            </div>

            {/* Price + Rate in a row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Price */}
              <div>
                <label className="block text-sm font-medium mb-1 text-[#2F4156]">
                  Price ($)
                </label>
                <input
                  type="number"
                  placeholder="Enter price"
                  className="w-full border outline-none border-[#2f415677] rounded-md p-2 focus:ring-2 focus:ring-[#FD7E14]"
                />
              </div>

              {/* Rate */}
              <div>
                <label className="block text-sm font-medium mb-1 text-[#2F4156]">
                  Rate (1–5)
                </label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  placeholder="Enter rate"
                  className="w-full border outline-none border-[#2f415677] rounded-md p-2 focus:ring-2 focus:ring-[#FD7E14]"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="w-full flex flex-col-reverse md:flex-row md:justify-end gap-2 pt-2">
              <button
                type="button"
                className="bg-red-500 text-white px-7 py-3 rounded-lg font-medium hover:bg-red-600 transition"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-7 py-3 bg-[#FD7E14] text-white rounded-md hover:bg-[#e56f0f] transition"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default UpdateServices;
