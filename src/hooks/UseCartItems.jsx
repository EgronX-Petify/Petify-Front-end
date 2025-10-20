import React, { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";

const UseCartItems = () => {
  const { cartItems } = useContext(ProductsContext);
  return cartItems;
};

export default UseCartItems;
