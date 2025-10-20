import React from "react";
import AppointmentTemp from "./AppointmentTemp";

const PastAppointments = ({ appointments }) => {
  return (
    <div>
      <h3 className="text-xl text-[#2F4156] mb-3">Past Appointments</h3>
      {appointments.length > 0 ? (
        <div className="flex flex-col gap-5">
          {appointments.map((appt, id) => (
            <AppointmentTemp appt={appt} key={id} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No past appointments.</p>
      )}
    </div>
  );
};

export default PastAppointments;
