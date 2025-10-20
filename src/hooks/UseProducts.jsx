import React, { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";

const UseProducts = () => {
  const { products } = useContext(ProductsContext);
  return products;
};

export default UseProducts;
