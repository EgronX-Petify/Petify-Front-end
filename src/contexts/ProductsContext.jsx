import React, { createContext, useEffect, useState } from "react";
import * as productsApi from "../APIs/shopAPI";
import * as cartApi from "../APIs/cartAPI";
import toast from "react-hot-toast";

const ProductsContext = createContext();
const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const cartCount =
    cartItems?.reduce((sum, item) => sum + item.quantity, 0) || 0;
  const [loading, setLoading] = useState(false);
  const productsCount = products?.length || 0;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const { data } = await productsApi.getAllProducts();
        // console.log("all products", data.content);
        setProducts(data.content);
      } catch (error) {
        // console.log("error", error.response);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const { data } = await cartApi.getUserCart();
        // console.log("cart", data.products);
        setCartItems(data.products);
      } catch (error) {
        // console.log("error", error.response);
      }
    };
    fetchCart();
  }, []);

  const addToCart = async (cartItem) => {
    try {
      // console.log("sending to backend:", cartItem);
      const { data } = await cartApi.addCartItem(cartItem);
      // console.log("response:", data);

      setCartItems((prev) => {
        const exists = prev.find((ci) => ci.id === data.id);
        if (exists) {
          return prev.map((ci) =>
            ci.id === data.id ? { ...ci, quantity: data.quantity } : ci
          );
        }
        return [...prev, data];
      });

      toast.success("Added To Cart");
    } catch (err) {
      if (err.response?.status === 401 || err.response?.status === 403) {
        toast.error("Please login again");
      }
      // console.log(err.response);

      // toast.error("Failed to add item to cart");
    }
  };

  const createProduct = async (product) => {
    try {
      const { data } = await productsApi.addProduct(product);
      // setPets((prev) => [...prev, data]);
      return data;
    } catch (error) {
      console.log("product Error", error);
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        selectedProduct,
        setSelectedProduct,
        cartItems,
        setCartItems,
        cartCount,
        addToCart,
        loading,
        setLoading,
        productsCount,
        createProduct
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
export { ProductsContext };
