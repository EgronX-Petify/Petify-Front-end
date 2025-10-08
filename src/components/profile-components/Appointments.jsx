import React, { useCallback, useContext, useState } from "react";
import UpcomingAppointments from "./UpcomingAppointments";
import PastAppointments from "./PastAppointments";
import RescheduleAppointment from "../sp-components/RescheduleAppointment";
import UseAppointments from "../../hooks/UseAppointments";
import { AppointmentsContext } from "../../contexts/AppointmentsContext";
import UseSelectedAppointment from "../../hooks/UseSelectedAppointment";
import LoadingSpinner from "../../components/LoadingSpinner";

const Appointments = () => {
  const appointments = UseAppointments();
  const { loading } = useContext(AppointmentsContext);
  const now = new Date();
  const upcoming = appointments.filter(
    (appt) => new Date(appt.requestedTime) > now
  );
  const past = appointments.filter(
    (appt) => new Date(appt.requestedTime) <= now
  );

  return loading ? (
    <LoadingSpinner text="Appointments are loading..." />
  ) : (
    <div className="max-w-6xl mx-auto my-10 bg-[#F8F9FA] shadow-lg rounded-2xl p-6">
      <h2 className="text-3xl  text-[#2F4156] mb-6 text-center">
        My Appointments
      </h2>
      <UpcomingAppointments appointments={upcoming} />
      <PastAppointments appointments={past} />
    </div>
  );
};

export default Appointments;
