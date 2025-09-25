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
import UseSPServices from "../../hooks/UseSPServices";

const MainDashboard = () => {
  const services = UseSPServices();
  return (
    <main className="flex-1 p-6">
      <h1 className="text-3xl font-bold text-[#2F4156] mb-6">
        Service Provider Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Services */}
        <Link to="/services" className="bg-white p-4 rounded-2xl shadow-md">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-[#2F4156]">
              <FaClipboardList /> My Services
            </h2>
            <FaEdit className="text-[#FD7E14] cursor-pointer text-xl" />
          </div>

          <ul className="space-y-2 text-gray-600">
            {services.map((s, id) => (
              <li className="flex justify-between" key={id}>
                {s.name}
              </li>
            ))}
          </ul>
        </Link>

        {/* Appointments */}
        <Link to="/appointments" className="bg-white p-4 rounded-2xl shadow-md">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-[#2F4156]">
              <FaCalendarCheck /> Upcoming Appointments
            </h2>
            <FaEdit className="text-[#FD7E14] cursor-pointer text-xl" />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">John Doe - Grooming</span>
              <button className="flex items-center gap-1 text-green-600">
                <FaCheckCircle /> Mark Done
              </button>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Sarah Ali - Vet Check</span>
              <button className="flex items-center gap-1 text-green-600">
                <FaCheckCircle /> Mark Done
              </button>
            </div>
          </div>
        </Link>

        {/* Inventory */}
        <Link to="/products" className="bg-white p-4 rounded-2xl shadow-md">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-[#2F4156]">
              <FaBoxOpen /> Product Inventory
            </h2>
            <FaEdit className="text-[#FD7E14] cursor-pointer text-xl" />
          </div>
          <ul className="space-y-2 text-gray-600">
            <li className="flex justify-between">
              Dog Shampoo{" "}
              <span className="text-sm text-gray-400">12 in stock</span>
            </li>
            <li className="flex justify-between">
              Cat Food <span className="text-sm text-gray-400">8 in stock</span>
            </li>
            <li className="flex justify-between">
              Pet Toys{" "}
              <span className="text-sm text-gray-400">20 in stock</span>
            </li>
          </ul>
        </Link>

        {/* Clients */}
        <div className="bg-white p-4 rounded-2xl shadow-md md:col-span-2 xl:col-span-3">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-[#2F4156]">
            <FaUserMd /> Clients
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-3 border rounded-lg flex justify-between items-center">
              <span className="text-gray-600">John Doe</span>
              <button className="flex items-center gap-1 text-blue-500">
                <FaPhone /> Contact
              </button>
            </div>
            <div className="p-3 border rounded-lg flex justify-between items-center">
              <span className="text-gray-600">Sarah Ali</span>
              <button className="flex items-center gap-1 text-blue-500">
                <FaPhone /> Contact
              </button>
            </div>
            <div className="p-3 border rounded-lg flex justify-between items-center">
              <span className="text-gray-600">Ahmed Hassan</span>
              <button className="flex items-center gap-1 text-blue-500">
                <FaPhone /> Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainDashboard;
