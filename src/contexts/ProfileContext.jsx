import React, { createContext, useContext, useEffect, useState } from "react";
import * as userApi from "../APIs/userAPI";

const ProfileContext = createContext();
const ProfileProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUserData = async () => {
      try {
        setLoading(true);
        const response = await userApi.getUser();
        console.log(response);
        setUserProfile(response.data);
        return response.data;
      } catch (err) {
        throw err?.response?.data;
      } finally {
        setLoading(false);
      }
    };
    getUserData();
  }, []);

  const updateUser = async (userData) => {
    try {
      const { data } = await userApi.updateUser(userData);
      setUserProfile((prev) => ({ ...prev, ...data }));
      return data;
    } catch (err) {
      console.log("updateUser error :::", err.response?.data || err);
      throw err;
    }
  };

  return (
    <ProfileContext.Provider
      value={{ userProfile, setUserProfile, updateUser, loading }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
export { ProfileContext };
