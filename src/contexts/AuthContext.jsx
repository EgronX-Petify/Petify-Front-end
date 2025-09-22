import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("logged user");
    if (storedUser) {
      const logggedUserData = {
        photo: "https://i.pravatar.cc/150?img=12",
        username: "hello",
        email: JSON.parse(storedUser)?.email,
        password: JSON.parse(storedUser)?.password,
        phone: "+20123456789",
        pets: [
          { name: "Max", species: "Dog" },
          { name: "Luna", species: "Cat" },
        ],
      };
      setUser(logggedUserData);
      console.log(logggedUserData);
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("logged user", JSON.stringify(userData)); // remove after add backend
  };
  const signup = (userData) => {
    login(userData);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("logged user");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };
