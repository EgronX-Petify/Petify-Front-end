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
import DashboardSidebar from "./DashboardSidebar";
import MainDashboard from "./MainDashboard";
import { Route, Routes } from "react-router-dom";
import ManageServices from "./ManageServices";
import ManageAppointments from "./ManageAppointments";
import ManageProducts from "./ManageProducts";
import EditProduct from "./EditProduct";
import UpdateServices from "./UpdateServices";
import RescheduleAppointment from "./RescheduleAppointment";
import ServiceProviderProfile from "./ServiceProviderProfile" ;

const SPDashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <DashboardSidebar />
      <Routes>
        <Route path="/dashboard" element={<MainDashboard />} />
        <Route path="/dashboard/services" element={<ManageServices />} />
        <Route path="/dashboard/edit-service" element={<UpdateServices />} />
        <Route
          path="/dashboard/appointments"
          element={<ManageAppointments />}
        />
        <Route
          path="/dashboard/reschedule-appointment"
          element={<RescheduleAppointment />}
        />
        <Route path="/dashboard/products" element={<ManageProducts />} />
        <Route path="/dashboard/edit-product" element={<EditProduct />} />
        <Route path="/sp-profile" element={<ServiceProviderProfile />} />
      </Routes>
    </div>
  );
};

export default SPDashboard;
