import React from "react";
import { MdDelete } from "react-icons/md";

const CartItem = ({ item }) => {
  return (
    <div
      key={item.id}
      className="flex flex-col sm:flex-row sm:items-center gap-4 border-b border-gray-200 pb-4"
    >
      {/* Image */}
      <img
        src={item.photo}
        alt={item.name}
        className="w-full h-40 md:w-20 md:h-20 object-cover rounded-lg"
      />

      {/* Info + controls */}
      <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <h3 className="font-medium text-[#2F4156]">{item.name}</h3>
          <p className="text-sm text-gray-500">${item.price.toFixed(2)} each</p>
        </div>

        {/* Quantity & Actions */}
        <div className="w-full md:w-[350px] justify-between px-3 flex items-center gap-4">
          {/* Quantity */}
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-md border text-lg text-[#2F4156] hover:bg-gray-100">
              –
            </button>
            <span className="px-2">{item.quantity}</span>
            <button className="w-8 h-8 flex items-center justify-center rounded-md border text-lg text-[#2F4156] hover:bg-gray-100">
              +
            </button>
          </div>

          {/* Price */}
          <div className="font-semibold text-[#FD7E14]">
            ${(item.price * item.quantity).toFixed(2)}
          </div>

          {/* Delete */}
          <button className="text-red-500 hover:text-red-700">
            <MdDelete size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
