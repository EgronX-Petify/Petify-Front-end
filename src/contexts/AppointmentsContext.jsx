import React, { createContext, useState } from "react";

const AppointmentsContext = createContext();
const AppointmentsProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);

  const [selectedAppointment, setSelectedAppointment] = useState({});

  return (
    <AppointmentsContext.Provider
      value={{
        appointments,
        setAppointments,
        selectedAppointment,
        setSelectedAppointment,
      }}
    >
      {children}
    </AppointmentsContext.Provider>
  );
};

export { AppointmentsContext };
export default AppointmentsProvider;
