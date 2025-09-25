import React, { useContext } from "react";
import { SPContext } from "../contexts/SPContext";

const UseSPServices = () => {
  const { services } = useContext(SPContext);
  return services;
};

export default UseSPServices;
