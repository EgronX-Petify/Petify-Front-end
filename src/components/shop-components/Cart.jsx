import React from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Premium Dog Food - Chicken Flavor",
      photo: "src/public/shop-media/pexels-rdne-7310213.jpg",
      price: 250,
      category: "Food",
      brand: "Royal Canin",
      quantity: 1,
    },
    {
      id: 2,
      name: "Cat Dry Food - Salmon Recipe",
      photo: "src/public/shop-media/pexels-rdne-7310213.jpg",
      price: 180,
      category: "Food",
      brand: "Whiskas",
      quantity: 2,
    },
    {
      id: 3,
      name: "Small Animal Hay Pack",
      photo: "src/public/shop-media/pexels-rdne-7310213.jpg",
      price: 120,
      category: "Food",
      brand: "Kaytee",
      quantity: 1,
    },
  ];

  const shipping = 5.99;
  const taxRate = 0.1;

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = subtotal * taxRate;
  const total = subtotal + shipping + tax;

  return (
    <div className="w-full max-w-7xl my-10 mx-auto bg-white rounded-2xl shadow-lg p-4 md:p-8 flex flex-col md:flex-row gap-14">
      {/* Cart Items */}
      <div className="w-full md:w-2/3 flex flex-col gap-4">
        <h2 className="text-xl font-bold text-[#2F4156] mb-2">Your Cart</h2>

        {cartItems.length > 0 ? (
          cartItems.map((item, id) => (
            <CartItem key={id} item={item} />
          ))
        ) : (
          <p className="text-gray-500 text-center">Your cart is empty 🛒</p>
        )}
      </div>

      {/* Summary */}
      {cartItems.length > 0 && (
        <div className="w-full md:w-1/3 bg-gray-50 rounded-xl shadow-md p-5 h-full">
          <h3 className="text-lg font-semibold text-[#2F4156] mb-4">
            Order Summary
          </h3>
          <div className="flex flex-col gap-2 text-sm text-[#2F4156]">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-2">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <Link to="/checkout" >
          <button className="w-full bg-[#FD7E14] hover:bg-[#e66f0c] text-white font-semibold py-3 rounded-lg mt-5">
            Checkout
          </button></Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
