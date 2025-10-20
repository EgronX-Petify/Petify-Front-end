import React from "react";
import AppointmentTemp from "./AppointmentTemp";
import toast, { Toaster } from "react-hot-toast";

const UpcomingAppointments = ({ appointments  }) => {
  return (
    <div className="mb-8 7]">
      <h3 className="text-xl text-[#FD7E14] mb-3">Upcoming Appointments</h3>
      {appointments.length > 0 ? (
        <div className="flex flex-col gap-5">
          {appointments.map((appt, id) => (
            <AppointmentTemp
              appt={appt}
              key={id}
              show={true}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No upcoming appointments.</p>
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default UpcomingAppointments;
