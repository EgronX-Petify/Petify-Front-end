import React from "react";
import DashboardStats from "./DashboardStats";
import AdminDashboardNavbar from "./AdminDashboardNavbar";
import { Outlet } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";


const AdminDashboard = () => {
  return (
    <>
      <AdminNavbar />
      <div className="p-6 space-y-8 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold text-[#2F4156] mb-4">
          Admin Dashboard
        </h1>

        <DashboardStats />
        <AdminDashboardNavbar />

        <Outlet />
      </div>
    </>
  );
};

export default AdminDashboard;
