import React from "react";
import TimeSelect from "./TimeSelect";
import { MdCancelPresentation } from "react-icons/md";

const ServiceBook = ({ open, setOpen }) => {
  const handleTimeChange = (value) => {
    console.log("Selected Time:", value);
  };

  return (
    open && (
      <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 px-3">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl relative max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="text-center bg-[#41748137] py-5 px-4 rounded-t-2xl">
            <h2 className="text-xl md:text-2xl font-bold text-[#2F4156]">
              Select Your Visit Date & Time
            </h2>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10 flex flex-col gap-6">
            {/* Date + Time */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Date Picker */}
              <div className="flex flex-col w-full md:w-fit bg-[#F8F9FA] p-4 rounded-lg shadow-sm h-fit">
                <label className="mb-2 text-sm font-medium text-[#2F4156]">
                  Select Date
                </label>
                <input
                  type="date"
                  className="px-3 py-2 border border-[#2f415677] rounded-lg text-[#2F4156] focus:ring-2 focus:ring-[#FD7E14] focus:border-[#FD7E14] outline-none w-full"
                />
              </div>

              {/* Time Picker */}
              <div className="flex-1 md:w-full">
                <TimeSelect onChange={handleTimeChange} />
              </div>
            </div>

            {/* Emergency Option */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="emergency"
                className="w-4 h-4 accent-[#FD7E14] cursor-pointer"
              />
              <label
                htmlFor="emergency"
                className="text-sm md:text-base font-medium text-[#2F4156] cursor-pointer"
              >
                Emergency Service?
              </label>
            </div>

            {/* Actions */}
            <div className="flex flex-col-reverse md:flex-row justify-end gap-3 pt-2">
              <button
                className="cursor-pointer capitalize w-full md:w-auto px-6 py-3 rounded-xl bg-red-500 text-white font-medium hover:bg-red-600 transition"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
              <button
                className="cursor-pointer capitalize w-full md:w-auto px-6 py-3 rounded-xl bg-[#417481] text-white font-medium hover:bg-[#2F4156] transition"
                onClick={() => alert("done")}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ServiceBook;
