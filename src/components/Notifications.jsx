import { IoMdNotificationsOutline } from "react-icons/io";
import React, { useState } from "react";
import {
  FaBell,
  FaCheckCircle,
  FaTimesCircle,
  FaCalendarAlt,
  FaDog,
} from "react-icons/fa";

const Notifications = () => {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "Appointment booked successfully!",
      read: false,
      type: "success",
      time: "2m ago",
    },
    {
      id: 2,
      message: "Your vet visit is tomorrow at 10 AM.",
      read: false,
      type: "reminder",
      time: "1h ago",
    },
    {
      id: 3,
      message: "Grooming slots are almost full!",
      read: true,
      type: "info",
      time: "3h ago",
    },
    {
      id: 4,
      message: "Payment failed. Please try again.",
      read: false,
      type: "error",
      time: "1d ago",
    },
  ]);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  const getIcon = (type) => {
    switch (type) {
      case "success":
        return <FaCheckCircle className="text-green-500" />;
      case "error":
        return <FaTimesCircle className="text-red-500" />;
      case "reminder":
        return <FaCalendarAlt className="text-blue-500" />;
      default:
        return <FaDog className="text-orange-500" />;
    }
  };

  return (
    <div className="relative inline-block text-left">
      {/* Bell Icon */}
      <button
        onClick={toggleDropdown}
        className="relative p-2 rounded-full hover:bg-gray-200 transition cursor-pointer"
      >
        <IoMdNotificationsOutline size={26} className="text-gray-700" />
        {unreadCount > 0 && (
          <span className="absolute -top-0 -right-0 bg-[#fd7d14] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Dropdown List */}
      {open && (
        <div className="absolute right-0 mt-2 w-80 bg-white border rounded-xl shadow-lg z-50">
          <div className="p-3 font-semibold text-gray-700 border-b flex justify-between items-center bg-[#fd7d1467]">
            Notifications
            {unreadCount > 0 && (
              <button
                onClick={() =>
                  setNotifications((prev) =>
                    prev.map((n) => ({ ...n, read: true }))
                  )
                }
                className="text-sm text-gray-700 hover:underline"
              >
                Mark all as read
              </button>
            )}
          </div>
          <ul className="max-h-72 overflow-y-auto">
            {notifications.length > 0 ? (
              notifications.map((note) => (
                <li
                  key={note.id}
                  onClick={() => markAsRead(note.id)}
                  className={`flex items-start gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50 transition ${
                    note.read ? "text-gray-500" : "font-semibold text-gray-800"
                  }`}
                >
                  <div className="text-lg">{getIcon(note.type)}</div>
                  <div className="flex-1">
                    <p className="text-sm">{note.message}</p>
                    <span className="text-xs text-gray-400">{note.time}</span>
                  </div>
                </li>
              ))
            ) : (
              <li className="px-4 py-3 text-gray-500 text-sm">
                No notifications
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Notifications;
