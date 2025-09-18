import React, { useContext } from "react";
import { VetsContext } from "../contexts/VetsContext";

const UseVets = () => {
  const { vets } = useContext(VetsContext);
  return vets;
};

export default UseVets;
