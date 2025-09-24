import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const UseRole = () => {
  const { role } = useContext(AuthContext);
  return role;
};

export default UseRole;
