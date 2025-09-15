import React from "react";

const UpcomingAppointments = ({ appointments, setOpen }) => {
  return (
    <div className="mb-8 7]">
      <h3 className="text-xl text-[#FD7E14] mb-3">Upcoming Appointments</h3>
      {appointments.length > 0 ? (
        <div className="flex flex-col gap-5">
          {appointments.map((appt) => (
            <div
              key={appt.id}
              className="px-8 py-4 border border-[#2f41565a] rounded-2xl flex justify-between items-center  hover:bg-gray-50 transition"
            >
              <div>
                <h3 className="text-lg font-medium text-[#2F4156]">
                  {appt.vetName}
                </h3>
                <p className="text-sm text-gray-600">{appt.clinicAddress}</p>
                <p className="text-sm text-gray-500">
                  {appt.date} • {appt.time}
                </p>
                <p className="text-sm text-gray-500">for: name</p>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  className="cursor-pointer px-4 py-2 text-sm rounded-lg bg-[#2f4156a0] text-white hover:bg-[#2f4156] transition"
                  onClick={() => setOpen(true)}
                >
                  Reschedule
                </button>
                <button className="cursor-pointer px-4 py-2 text-sm rounded-lg bg-[#ff383be0] text-white hover:bg-[#ff383b] transition">
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No upcoming appointments.</p>
      )}
    </div>
  );
};

export default UpcomingAppointments;
