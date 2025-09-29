import React, { useCallback, useContext, useState } from "react";
import UpcomingAppointments from "./UpcomingAppointments";
import PastAppointments from "./PastAppointments";
import RescheduleAppointment from "../sp-components/RescheduleAppointment";
import UseAppointments from "../../hooks/UseAppointments";
import { AppointmentsContext } from "../../contexts/AppointmentsContext";
import UseSelectedAppointment from "../../hooks/UseSelectedAppointment";

const Appointments = () => {
  const appointments = UseAppointments();
  // console.log(appointments);
  const now = new Date();

  // Split appointments into upcoming & past
  const upcoming = appointments.filter(
    (appt) => new Date(`${appt.date} ${appt.time}`) > now
  );
  const past = appointments.filter(
    (appt) => new Date(`${appt.date} ${appt.time}`) <= now
  );

  // const [rescheduleOpen, setRescheduleOpen] = false;

  return (
    <div className="max-w-6xl mx-auto my-10 bg-[#F8F9FA] shadow-lg rounded-2xl p-6">
      <h2 className="text-3xl  text-[#2F4156] mb-6 text-center">
        My Appointments
      </h2>

      {/* Upcoming */}
      <UpcomingAppointments appointments={upcoming} />

      {/* Past */}
      <PastAppointments appointments={past} />
    </div>
  );
};

export default Appointments;
