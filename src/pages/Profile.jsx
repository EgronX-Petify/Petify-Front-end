import React from "react";
import ProfileHero from "../components/profile-components/ProfileHero";
import ProfileNavbar from "../components/profile-components/ProfileNavbar";
import Appointments from "../components/profile-components/Appointments";
import { Navigate, Route, Routes } from "react-router-dom";
import Orders from "../components/profile-components/Orders";
import AllProfiles from "../components/profile-components/AllProfiles";
import UserInfo from "../components/profile-components/UserInfo";

const Profile = () => {
  return (
    <div>
      <ProfileHero />
      <ProfileNavbar />
      <Routes>
        <Route index element={<Navigate to="my-profile" replace />} />
        <Route path="my-profile" element={<UserInfo />} />
        <Route path="my-pets" element={<AllProfiles />} />
        <Route path="orders" element={<Orders />} />
        <Route path="appointments" element={<Appointments />} />
      </Routes>
    </div>
  );
};

export default Profile;
