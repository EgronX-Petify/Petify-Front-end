import React, { useContext, useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import UseLoggedUser from "../../hooks/UseLoggedUser";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../contexts/ProductsContext";
import Rating from "../Rating";
import UseCartItems from "../../hooks/UseCartItems";
import toast, { Toaster } from "react-hot-toast";

const Product = ({ product }) => {
  const cartItems = UseCartItems();
  const { setCartItems } = useContext(ProductsContext);
  const isLogged = UseLoggedUser();
  const [cartItem, setCartItem] = useState({ ...product, quantity: 1 });

  function increaseQuantity(id) {
    setCartItems(
      cartItems.map((item) =>
        item.id == id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function handleAddToCart(id) {
    !isLogged && toast.error("Login First!");
    const thisCartItem = cartItems.find((ci) => ci.id == id);
    if (isLogged) {
      thisCartItem
        ? increaseQuantity(id)
        : setCartItems([...cartItems, cartItem]);
      toast.success("Added To Cart");
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col">
      <Link to={`/shop/view-product/${product.id}`}>
        {" "}
        <div className="w-full h-48 overflow-hidden rounded-xl mb-4">
          <img
            src={product?.photos[0]}
            alt={product?.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col flex-grow">
          <h3 className="text-lg font-semibold text-[#2F4156] mb-1 cursor-pointer">
            {product?.name}
          </h3>
          <p className="text-sm text-gray-500 mb-2">description</p>
        </div>
      </Link>

      <Rating value={product?.rating} readOnly={true} />

      <div className="flex justify-between items-center mt-auto">
        <span className="text-lg font-bold text-[#FD7E14]">
          ${product?.price}
        </span>
        <button
          className="cursor-pointer text-[#FD7E14] hover:text-white p-2 rounded-full hover:bg-[#e76c0a] transition-colors"
          onClick={() => handleAddToCart(product.id)}
        >
          <MdAddShoppingCart size={20} />
        </button>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Product;
