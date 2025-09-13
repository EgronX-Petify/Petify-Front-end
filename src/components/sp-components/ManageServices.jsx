import React from "react";
import {
  FaClipboardList,
  FaBoxOpen,
  FaUserMd,
  FaCalendarCheck,
  FaEdit,
  FaCheckCircle,
  FaPhone,
  FaCheck,
  FaTimes,
} from "react-icons/fa";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import Return from "./Return";

const ManageServices = () => {
  return (
    <div className="bg-[#F8F9FA] p-5 rounded-2xl shadow-md w-full min-h-screen">
      <Return showLabel={true} />
      <h2 className="text-xl text-white font-semibold mb-4 flex items-center gap-2 p-3 rounded-lg bg-[#417481]">
        <FaClipboardList className="text-white" /> My Services
      </h2>
      <ul className="space-y-2 text-gray-600">
        <li className="flex justify-between bg-white p-3 rounded-lg">
          Grooming
          <p>price</p>
          <div className="flex gap-2">
            <button className="cursor-pointer bg-green-500 text-white px-2 py-1 text-xs rounded-md flex items-center gap-1 hover:bg-green-600">
              <MdOutlineModeEditOutline /> Edit
            </button>
            <button className="cursor-pointer bg-red-500 text-white px-2 py-1 text-xs rounded-md flex items-center gap-1 hover:bg-red-600">
              <FaTimes /> Remove
            </button>
          </div>
        </li>
        <li className="flex justify-between bg-white p-3 rounded-lg">
          Vet Consultation{" "}
          <div className="flex gap-2">
            <Link
              to="/dashboard/edit-service"
              className="cursor-pointer bg-green-500 text-white px-2 py-1 text-xs rounded-md flex items-center gap-1 hover:bg-green-600"
            >
              <MdOutlineModeEditOutline /> Edit
            </Link>
            <button className="cursor-pointer bg-red-500 text-white px-2 py-1 text-xs rounded-md flex items-center gap-1 hover:bg-red-600">
              <FaTimes /> Remove
            </button>
          </div>
        </li>
        <li className="flex justify-between bg-white p-3 rounded-lg">
          Training{" "}
          <div className="flex gap-2">
            <Link
              to="/dashboard/edit-service"
              className="cursor-pointer bg-green-500 text-white px-2 py-1 text-xs rounded-md flex items-center gap-1 hover:bg-green-600"
            >
              <MdOutlineModeEditOutline /> Edit
            </Link>
            <button className="cursor-pointer bg-red-500 text-white px-2 py-1 text-xs rounded-md flex items-center gap-1 hover:bg-red-600">
              <FaTimes /> Remove
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ManageServices;
