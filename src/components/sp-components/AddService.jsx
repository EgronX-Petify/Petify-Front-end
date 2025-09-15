import React from "react";
import { FaPlus } from "react-icons/fa";

const AddService = ({ open, setOpen }) => {
  return (
    open && (
      <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 px-2">
        <div
          className="
            w-full max-w-[95%] md:max-w-4xl 
            bg-white rounded-2xl shadow-lg 
            max-h-[90vh] 
            overflow-y-auto
            p-5 md:p-8
          "
        >
          {/* Title */}
          <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2 text-[#2F4156]">
            Add New Service
          </h2>

          {/* Form */}
          <form className="space-y-5 text-sm md:text-base">
            {/* Row 1: Service Name + Price */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-1 text-[#2F4156]">
                  Service Name
                </label>
                <input
                  type="text"
                  placeholder="Enter service name"
                  className="w-full border border-[#2f415677] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-[#2F4156]">
                  Price ($)
                </label>
                <input
                  type="number"
                  placeholder="Enter price"
                  className="w-full border border-[#2f415677] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
                />
              </div>
            </div>

            {/* Row 2: Description + Notes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-1 text-[#2F4156]">
                  Description
                </label>
                <textarea
                  rows={3}
                  placeholder="Enter description"
                  className="w-full border border-[#2f415677] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-[#2F4156]">
                  Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Additional notes (optional)"
                  className="w-full border border-[#2f415677] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
                ></textarea>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col-reverse md:flex-row md:justify-end gap-3 pt-4">
              <button
                type="button"
                className="bg-red-500 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-red-600 transition"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#FD7E14] text-white rounded-lg font-medium hover:bg-[#e56f0f] transition"
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

export default AddService;
