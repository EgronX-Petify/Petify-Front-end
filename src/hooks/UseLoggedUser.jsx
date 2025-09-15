import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const UseLoggedUser = () => {
  const { user } = useContext(AuthContext);
  return user;
};

export default UseLoggedUser;
