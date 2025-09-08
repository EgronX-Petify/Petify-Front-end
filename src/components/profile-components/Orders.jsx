import React from "react";

const Orders = () => {
  const orders = [
    {
      id: "1001",
      status: "completed",
      date: "2025-08-12",
      total: 250,
    },
    {
      id: "1002",
      status: "in progress",
      date: "2025-09-05",
      total: 120,
    },
    {
      id: "1003",
      status: "canceled",
      date: "2025-08-30",
      total: 90,
    },
    {
      id: "1004",
      status: "in progress",
      date: "2025-09-10",
      total: 300,
    },
    {
      id: "1005",
      status: "completed",
      date: "2025-07-25",
      total: 450,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto my-10 bg-[#F8F9FA] shadow-lg rounded-2xl p-6">
      <h2 className="text-2xl font-semibold text-[#2F4156] mb-6 ">
        Recent Orders
      </h2>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto rounded-lg">
        <table className="w-full text-left border-collapse ">
          <thead>
            <tr className="bg-[#2f415677] text-white">
              <th className="p-3">Order ID</th>
              <th className="p-3">Status</th>
              <th className="p-3">Date</th>
              <th className="p-3">Total</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              const isCancelable = order.status == "in progress";
              return (
                <tr
                  key={order.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-3 font-medium text-[#2F4156]">{order.id}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded text-sm ${
                        order.status === "completed"
                          ? "bg-green-100 text-green-700"
                          : order.status === "canceled"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="p-3 text-gray-600">{order.date}</td>
                  <td className="p-3 text-gray-600">${order.total}</td>
                  <td className="p-3">
                    {isCancelable && (
                      <button
                        className="cursor-pointer px-3 py-1 text-sm rounded-lg bg-[#FD7E14] text-white hover:bg-[#e86f0d] transition"
                      >
                        Cancel
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {orders.map((order) => {
          const isCancelable = order.status !== "canceled";
          return (
            <div
              key={order.id}
              className="p-4 bg-white rounded-xl shadow flex flex-col gap-2"
            >
              <div className="flex justify-between">
                <span className="font-medium text-[#2F4156]">
                  Order #{order.id}
                </span>
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    order.status === "completed"
                      ? "bg-green-100 text-green-700"
                      : order.status === "canceled"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {order.status}
                </span>
              </div>
              <p className="text-gray-600 text-sm">Date: {order.date}</p>
              <p className="text-gray-600 text-sm">Total: ${order.total}</p>

              {isCancelable && (
                <button
                  onClick={() => onCancel(order.id)}
                  className="self-end mt-2 px-3 py-1 text-sm rounded-lg bg-[#FD7E14] text-white hover:bg-[#e86f0d] transition"
                >
                  Cancel
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
