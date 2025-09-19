import React, { useContext } from "react";
import { AppointmentsContext } from "../contexts/AppointmentsContext";

const UseAppointments = () => {
  const { appointments } = useContext(AppointmentsContext);
  return { appointments };
};

export default UseAppointments;
