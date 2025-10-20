import React from "react";
import ProfileHero from "../components/profile-components/ProfileHero";
import ProfileNavbar from "../components/profile-components/ProfileNavbar";
import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <ProfileHero />
      <ProfileNavbar />
      <Outlet />
    </div>
  );
};

export default Profile;
