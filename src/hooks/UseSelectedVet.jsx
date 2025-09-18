import React, { useContext } from "react";
import { VetsContext } from "../contexts/VetsContext";

const UseSelectedVet = () => {
  const { selectedVet } = useContext(VetsContext);
  return selectedVet;
};

export default UseSelectedVet;
