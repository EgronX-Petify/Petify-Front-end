import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const UseLogged = () => {
  const {login} = useContext(AuthContext);
  return login;
};

export default UseLogged;
