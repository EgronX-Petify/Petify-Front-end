import React from "react";
import { NavLink } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";

const AdminDashboardNavbar = () => {
  return (
    <div className="w-full md:w-[40%] m-auto my-2 bg-[#f5efebeb] px-4 md:px-10 py-2 rounded-3xl">
      <div className="flex justify-between text-sm md:text-base font-semibold text-[#2F4156] gap-4 md:gap-8">
        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            isActive
              ? `px-1.5 text-[#FD7E14] border-b-2 border-[#FD7E14]`
              : `px-1.5`
          }
        >
          Users
        </NavLink>
        <NavLink
          to="/admin/products"
          className={({ isActive }) =>
            isActive
              ? `px-1.5 text-[#FD7E14] border-b-2 border-[#FD7E14]`
              : `px-1.5`
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/admin/services"
          className={({ isActive }) =>
            isActive
              ? `px-1.5 text-[#FD7E14] border-b-2 border-[#FD7E14]`
              : `px-1.5`
          }
        >
          Services
        </NavLink>
      </div>
    </div>
  );
};

export default AdminDashboardNavbar;
