import React, { useContext } from "react";
import { OrdersContext } from "../contexts/OrdersContext";

const UseOrders = () => {
  const { orders } = useContext(OrdersContext);
  return orders;
};

export default UseOrders;
