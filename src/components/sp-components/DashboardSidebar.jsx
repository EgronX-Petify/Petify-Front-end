import React from "react";
import {
  FaClipboardList,
  FaBoxOpen,
  FaUserMd,
  FaCalendarCheck,
} from "react-icons/fa";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { FaSignOutAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import UseLogout from "../../hooks/UseLogout";

const DashboardSidebar = () => {
  const logout = UseLogout();
  return (
    <aside className="group w-16 hover:w-64 transition-all duration-700 overflow-hidden bg-[#417481] text-white hidden md:block">
      <nav className="space-y-4 min-h-full py-6 relative">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 hover:bg-[#396874] p-2 rounded-md w-full text-left ${
              isActive ? "bg-[#396874]" : ""
            }`
          }
        >
          <TbLayoutDashboardFilled size={32} />
          <p className="hidden group-hover:block text-lg font-medium">
            Dashboard
          </p>
        </NavLink>

        <NavLink
          to="/services"
          className={({ isActive }) =>
            `flex items-center gap-3 hover:bg-[#396874] p-2 rounded-md w-full text-left ${
              isActive ? "bg-[#396874]" : ""
            }`
          }
        >
          <FaClipboardList size={32} />
          <p className="hidden group-hover:block text-lg font-medium">
            Services
          </p>
        </NavLink>

        <NavLink
          to="/appointments"
          className={({ isActive }) =>
            `flex items-center gap-3 hover:bg-[#396874] p-2 rounded-md w-full text-left ${
              isActive ? "bg-[#396874]" : ""
            }`
          }
        >
          <FaCalendarCheck size={32} />
          <p className="hidden group-hover:block text-lg font-medium">
            Appointments
          </p>
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            `flex items-center gap-3 hover:bg-[#396874] p-2 rounded-md w-full text-left ${
              isActive ? "bg-[#396874]" : ""
            }`
          }
        >
          <FaBoxOpen size={32} />
          <p className="hidden group-hover:block text-lg font-medium">
            Inventory
          </p>
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex items-center gap-3 hover:bg-[#396874] p-2 rounded-md w-full text-left ${
              isActive ? "bg-[#396874]" : ""
            }`
          }
        >
          <FaUserMd size={32} />
          <p className="hidden group-hover:block text-lg font-medium">
            Profile
          </p>
        </NavLink>

        <NavLink
          to="/login"
          className="absolute bottom-2 left-0 flex items-center gap-3 hover:bg-red-700 p-2 rounded-md w-full text-left"
        >
          <FaSignOutAlt size={32} />
          <button
            className="hidden group-hover:block text-lg font-medium cursor-pointer"
            onClick={() => logout()}
          >
            SignOut
          </button>
        </NavLink>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
