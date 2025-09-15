import React from "react";
import { FaCalendarAlt, FaClock, FaRedo } from "react-icons/fa";

const RescheduleAppointment = ({ open, setOpen }) => {
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
          <h2 className="text-xl font-semibold mb-5 flex items-center gap-2 text-[#2F4156]">
            <FaRedo /> Reschedule Appointment
          </h2>

          <form className="flex flex-col gap-4">
            {/* Appointment ID / Info */}
            <div>
              <label className="block text-sm font-medium text-[#2F4156] mb-1">
                Appointment ID
              </label>
              <input
                type="text"
                placeholder="Enter appointment ID"
                className="w-full border border-[#2f415677] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
              />
            </div>

            {/* New Date */}
            <div>
              <label className=" text-sm font-medium text-[#2F4156] mb-1 flex items-center gap-1">
                <FaCalendarAlt /> New Date
              </label>
              <input
                type="date"
                className="w-full border border-[#2f415677] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
              />
            </div>

            {/* New Time */}
            <div>
              <label className=" text-sm font-medium text-[#2F4156] mb-1 flex items-center gap-1">
                <FaClock /> New Time
              </label>
              <input
                type="time"
                className="w-full border border-[#2f415677] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col-reverse md:flex-row justify-end gap-3">
              <button
                type="button"
                className=" sm:w-auto bg-red-500 text-white px-5 py-2 rounded-lg font-medium hover:bg-red-600 transition"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full sm:w-auto px-5 bg-[#FD7E14] text-white py-2 rounded-lg font-medium hover:bg-[#e66f0f] transition"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default RescheduleAppointment;
