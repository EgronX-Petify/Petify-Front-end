import React, { useContext } from "react";
import { AppointmentsContext } from "../contexts/AppointmentsContext";

const UseSelectedAppointment = () => {
  const { selectedAppointment } = useContext(AppointmentsContext);
  return selectedAppointment;
};

export default UseSelectedAppointment;
