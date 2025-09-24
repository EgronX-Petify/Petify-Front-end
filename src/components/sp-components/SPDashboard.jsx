import React from "react";

import DashboardSidebar from "./DashboardSidebar";
import { Outlet } from "react-router-dom";

const SPDashboard = () => {
  return (
    <>
      <div className="min-h-screen flex bg-gray-100">
        <DashboardSidebar />
        <Outlet />
      </div>
    </>
  );
};

export default SPDashboard;
