import React, { useContext } from "react";
import { UserPetsContext } from "../contexts/UserPetsContext";

const UseUserPets = () => {
  const { pets } = useContext(UserPetsContext);
  return pets;
};

export default UseUserPets;
