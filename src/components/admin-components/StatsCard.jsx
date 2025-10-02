import React from "react";
import {
  FaUsers,
  FaCheckCircle,
  FaBox,
  FaTools,
  FaHourglassHalf,
  FaBan,
} from "react-icons/fa";

const icons = {
  all: <FaUsers className="w-6 h-6 text-[#FD7E14]" />,
  active: <FaCheckCircle className="w-6 h-6 text-[#FD7E14]" />,
  products: <FaBox className="w-6 h-6 text-[#FD7E14]" />,
  services: <FaTools className="w-6 h-6 text-[#FD7E14]" />,
  pending: <FaHourglassHalf className="w-6 h-6 text-[#FD7E14]" />,
  banned: <FaBan className="w-6 h-6 text-[#FD7E14]" />,
};

const StatsCard = ({ type, label, value }) => {
  return (
    <div className="flex items-center gap-4 bg-white shadow-sm border border-gray-200 rounded-xl p-4 hover:shadow-md transition">
      <div className="p-3 bg-orange-50 rounded-full">{icons[type]}</div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <h3 className="text-xl font-bold text-[#2F4156]">{value}</h3>
      </div>
    </div>
  );
};

export default StatsCard;
