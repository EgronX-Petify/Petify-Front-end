import React, { createContext, useEffect, useState } from "react";
import * as authApi from "../APIs/authAPI";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("logged user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [token, setToken] = useState(null);
  const [role, setRole] = useState(user?.role || "PET_OWNER");

  const signup = async (formData) => {
    try {
      const { data } = await authApi.signup(formData);
      return data;
    } catch (err) {
      throw err;
    }
  };

  const login = async (formData) => {
    try {
      const { data } = await authApi.login(formData);
      localStorage.setItem("logged user", JSON.stringify(data.user));
      setUser(data.user);
      setRole(data.user.role);
      setToken(data.token);
      localStorage.setItem("token", data.token);
      return data;
    } catch (err) {
      throw err;
    }
  };

  const forgotPassword = async (email) => {
    const { data } = await authApi.forgotPassword(email);
    return data;
  };

  const changePassword = async (userData) => {
    const { data } = authApi.changePassword(userData);
    return data;
  };

  const logout = async () => {
    try {
      const { data } = await authApi.logout();
      setUser(null);
      setRole("PET_OWNER");
      localStorage.removeItem("logged user");
      localStorage.removeItem("token");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        signup,
        logout,
        forgotPassword,
        changePassword,
        role,
        setRole,
        token,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };
