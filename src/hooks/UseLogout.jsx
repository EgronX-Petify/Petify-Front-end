import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const UseLogout = () => {
  const { logout } = useContext(AuthContext);
  return logout;
};

export default UseLogout;
