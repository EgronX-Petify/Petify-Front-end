import React, { createContext, useEffect, useState } from "react";
import * as authApi from "../APIs/authAPI";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("petOwner");

  useEffect(() => {
    const loggedUser = localStorage.getItem("logged user");
    if (loggedUser) {
      setRole("petOwner");
      const logggedUserData = {
        photo: "https://i.pravatar.cc/150?img=12",
        username: "hello",
        email: JSON.parse(loggedUser)?.email,
        password: JSON.parse(loggedUser)?.password,
        phone: "+20123456789",
        pets: [
          { name: "Max", species: "Dog" },
          { name: "Luna", species: "Cat" },
        ],
      };
      setUser(logggedUserData);
    }
  }, []);

  const signup = async (formData) => {
    const { data } = await authApi.signup(formData);
    return data;
    // if bk return data of user
    // setUser(data.user);
    // localStorage.setItem("logged user", JSON.stringify(data.user));
    // localStorage.setItem("token", data.token);
  };

  const login = async (formData) => {
    try {
      const { data } = await authApi.login(formData);
      setUser(formData);
      localStorage.setItem("logged user", JSON.stringify(formData)); // change to data when beckend return user data
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

  const logout = () => {
    setUser(null);
    setRole("petOwner");
    localStorage.removeItem("logged user");
    localStorage.removeItem("token");
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };
