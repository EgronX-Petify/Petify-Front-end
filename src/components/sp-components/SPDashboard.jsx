import React from "react";

import DashboardSidebar from "./DashboardSidebar";
import { Outlet } from "react-router-dom";
import SPNavbar from "./SPNavbar";

const SPDashboard = () => {
  return (
    <>
      <SPNavbar />
      <div className="min-h-screen flex bg-gray-100">
        <DashboardSidebar />
        <Outlet />
      </div>
    </>
  );
};

export default SPDashboard;
