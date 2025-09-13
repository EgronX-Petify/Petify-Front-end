import React from "react";
import {
  FaClipboardList,
  FaBoxOpen,
  FaUserMd,
  FaCalendarCheck,
  FaEdit,
  FaCheckCircle,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <aside className="w-64 bg-[#417481] text-white p-6 hidden md:block">
      <h2 className="text-2xl font-bold mb-6">Petify SP</h2>
      <nav className="space-y-4">
        <Link
          to="/dashboard/"
          className="flex items-center gap-3 hover:bg-[#396874] p-2 rounded-md w-full text-left"
        >
          <FaClipboardList /> Dashboard
        </Link>
        <Link
          to="/dashboard/services"
          className="flex items-center gap-3 hover:bg-[#396874] p-2 rounded-md w-full text-left"
        >
          <FaClipboardList /> Services
        </Link>
        <Link
          to="/dashboard/appointments"
          className=" flex items-center gap-3 hover:bg-[#396874] p-2 rounded-md w-full text-left"
        >
          <FaCalendarCheck /> Appointments
        </Link>
        <Link
          to="/dashboard/products"
          className="flex items-center gap-3 hover:bg-[#396874] p-2 rounded-md w-full text-left"
        >
          <FaBoxOpen /> Inventory
        </Link>
        <Link
          to="/dashboard/clients"
          className=" flex items-center gap-3 hover:bg-[#396874] p-2 rounded-md w-full text-left"
        >
          <FaUserMd /> Clients
        </Link>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
