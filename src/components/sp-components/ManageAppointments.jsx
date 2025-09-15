import React, { useState } from "react";
import { FaCheck, FaTimes, FaCalendarCheck } from "react-icons/fa";
import { MdOutlineModeEditOutline } from "react-icons/md";
import Return from "./Return";
import { Link } from "react-router-dom";
import RescheduleAppointment from "./RescheduleAppointment";

const ManageAppointments = () => {
  const appointments = [
    {
      id: 1,
      client: "John Doe",
      service: "Grooming",
      date: "Sep 12",
      time: "10:00 AM",
    },
    {
      id: 2,
      client: "Sarah Ali",
      service: "Vet Check",
      date: "Sep 13",
      time: "2:00 PM",
    },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#F8F9FA] p-5 rounded-xl shadow-sm w-full mx-auto">
      <Return showLabel={true} />
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white p-3 rounded-lg bg-[#417481]">
        <FaCalendarCheck />
        Appointments
      </h2>
      <div className="space-y-3">
        {appointments.map((a) => (
          <div
            key={a.id}
            className="flex justify-between items-center bg-white p-3 rounded-lg"
          >
            <div>
              <p className="font-medium text-sm">{a.client}</p>
              <p className="hidden md:block text-xs text-gray-500">
                {a.service} • {a.date} • {a.time}
              </p>
              <div className="md:hidden flex flex-col md:flex-row text-xs text-gray-500">
                <p>{a.service}</p>
                <p>{a.date}</p>
                <p>{a.time}</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2 ">
              <button className="cursor-pointer bg-green-500 text-white px-2 py-1 text-xs rounded-md flex items-center gap-1 hover:bg-green-600">
                <FaCheck /> Done
              </button>
              <button
                className="cursor-pointer bg-[#fd7d14db] text-white px-2 py-1 text-xs rounded-md flex items-center gap-1 hover:bg-[#FD7E14]"
              onClick={() => setOpen(true)} >
                <MdOutlineModeEditOutline /> Reschedule
              </button>
              <button className="cursor-pointer bg-red-500 text-white px-2 py-1 text-xs rounded-md flex items-center gap-1 hover:bg-red-600">
                <FaTimes /> Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
      <RescheduleAppointment open={open} setOpen={setOpen} />
    </div>
  );
};

export default ManageAppointments;
