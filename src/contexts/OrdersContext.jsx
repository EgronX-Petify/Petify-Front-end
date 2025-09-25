import React, { createContext, useState } from "react";

const OrdersContext = createContext();
const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([
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
  ]);

  return (
    <OrdersContext.Provider value={{ orders, setOrders }}>
      {children}
    </OrdersContext.Provider>
  );
};
export default OrdersProvider;
export { OrdersContext };
