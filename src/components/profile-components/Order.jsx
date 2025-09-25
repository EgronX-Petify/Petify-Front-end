import React, { useContext } from "react";

const Order = ({ order, variant = "table" , handleCancel}) => {
  const isCancelable = order?.status === "in progress";


  if (variant === "table") {
    return (
      <tr className="border-b hover:bg-gray-50 transition">
        <td className="p-3 font-medium text-[#2F4156]">{order?.id}</td>
        <td className="p-3">
          <span
            className={`px-2 py-1 rounded text-sm ${
              order?.status === "completed"
                ? "bg-green-100 text-green-700"
                : order?.status === "canceled"
                  ? "bg-red-100 text-red-700"
                  : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {order?.status}
          </span>
        </td>
        <td className="p-3 text-gray-600">{order?.date}</td>
        <td className="p-3 text-gray-600">${order?.total}</td>
        <td className="p-3">
          {isCancelable && (
            <button
              onClick={() => handleCancel(order?.id)}
              className="cursor-pointer px-3 py-1 text-sm rounded-lg bg-[#ff383be0] text-white hover:bg-[#ff383b] transition"
            >
              Cancel
            </button>
          )}
        </td>
      </tr>
    );
  }

  // mobile card
  return (
    <div className="p-4 bg-white rounded-xl shadow flex flex-col gap-2">
      <div className="flex justify-between">
        <span className="font-medium text-[#2F4156]">Order #{order?.id}</span>
        <span
          className={`px-2 py-1 rounded text-sm ${
            order?.status === "completed"
              ? "bg-green-100 text-green-700"
              : order?.status === "canceled"
                ? "bg-red-100 text-red-700"
                : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {order?.status}
        </span>
      </div>
      <p className="text-gray-600 text-sm">Date: {order?.date}</p>
      <p className="text-gray-600 text-sm">Total: ${order?.total}</p>

      {isCancelable && (
        <button
          onClick={() => onCancel(order?.id)}
          className="self-end mt-2 px-3 py-1 text-sm rounded-lg bg-[#ff383be0] text-white hover:bg-[#ff383b] transition"
        >
          Cancel
        </button>
      )}
    </div>
  );
};

export default Order;
