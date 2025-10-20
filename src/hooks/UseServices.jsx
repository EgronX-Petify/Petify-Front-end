import React, { useContext } from "react";
import {ServicesContext} from "../contexts/ServicesContext";

const UseServices = () => {
  const { services } = useContext(ServicesContext);
  return services;
};

export default UseServices;
