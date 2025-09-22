import React, { useContext } from "react";
import { UserPetsContext } from "../contexts/UserPetsContext";

const UseSelectedPet = () => {
  const { selectedPet } = useContext(UserPetsContext);
  return selectedPet;
};

export default UseSelectedPet;
