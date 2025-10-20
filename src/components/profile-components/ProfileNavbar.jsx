import React from "react";
import { NavLink } from "react-router-dom";

const ProfileNavbar = () => {
  return (
    <div className="w-full md:w-fit m-auto my-2 bg-[#f5efebeb] px-4 md:px-10 py-2 rounded-3xl">
      <div className="flex justify-between text-sm md:text-base font-semibold text-[#2F4156] gap-4 md:gap-8">
        <NavLink
          to="/profile/my-profile"
          className={({ isActive }) =>
            isActive
              ? `px-1.5 text-[#FD7E14] border-b-2 border-[#FD7E14]`
              : `px-1.5`
          }
        >
          Profile
        </NavLink>
        <NavLink
          to="/profile/my-pets"
          className={({ isActive }) =>
            isActive
              ? `px-1.5 text-[#FD7E14] border-b-2 border-[#FD7E14]`
              : `px-1.5`
          }
        >
          Pets
        </NavLink>
        <NavLink
          to="/profile/orders"
          className={({ isActive }) =>
            isActive
              ? `px-1.5 text-[#FD7E14] border-b-2 border-[#FD7E14]`
              : `px-1.5`
          }
        >
          Orders
        </NavLink>
        <NavLink
          to="/profile/appointments"
          className={({ isActive }) =>
            isActive
              ? `px-1.5 text-[#FD7E14] border-b-2 border-[#FD7E14]`
              : `px-1.5`
          }
        >
          Appointments
        </NavLink>
      </div>
    </div>
  );
};

export default ProfileNavbar;
