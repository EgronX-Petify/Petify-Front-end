import React, { useContext } from "react";
import UseOrders from "../../hooks/UseOrders";
import Order from "./Order";
import { OrdersContext } from "../../contexts/OrdersContext";
import toast from "react-hot-toast";
import swal from "sweetalert";

const Orders = () => {
  const orders = UseOrders();
  const { setOrders } = useContext(OrdersContext);
  function handleCancel(id) {
    swal({
      text: "Are you sure you want to cancel this order?",
      buttons: {
        cancel: {
          text: "Cancel",
          value: false,
          visible: true,
          className:
            "bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded",
        },
        confirm: {
          text: "Yes",
          value: true,
          visible: true,
          className:
            "bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded",
        },
      },
      dangerMode: true,
    }).then((willCancel) => {
      if (willCancel) {
        setOrders(
          orders.map((order) =>
            order.id === id ? { ...order, status: "canceled" } : order
          )
        );
        toast("Canceled", {
          icon: "✅",
          duration: "300",
        });
      }
    });
  }
  return (
    <div className="max-w-5xl mx-auto my-10 bg-[#F8F9FA] shadow-lg rounded-2xl p-6">
      <h2 className="text-2xl font-semibold text-[#2F4156] mb-6">
        Recent Orders
      </h2>

      <div className="hidden md:block overflow-x-auto rounded-lg">
        <table className="w-full text-left border-collapse">
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
            {orders.map((order) => (
              <Order
                key={order.id}
                order={order}
                variant="table"
                handleCancel={handleCancel}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {orders.map((order) => (
          <Order
            key={order.id}
            order={order}
            variant="card"
            handleCancel={handleCancel}
          />
        ))}
      </div>
    </div>
  );
};

export default Orders;
