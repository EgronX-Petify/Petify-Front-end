import React from "react";
import { MdAddShoppingCart } from "react-icons/md";

const Product = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col">
      <div className="w-full h-48 overflow-hidden rounded-xl mb-4">
        <img
          src={product.photo}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-[#2F4156] mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
      </div>

      <div className="flex justify-between items-center mt-auto">
        <span className="text-lg font-bold text-[#FD7E14]">
          ${product.price}
        </span>
        <button className="cursor-pointer text-[#FD7E14] hover:text-white p-2 rounded-full hover:bg-[#e76c0a] transition-colors">
          <MdAddShoppingCart size={20} />
        </button>
      </div>
    </div>
  );
};

export default Product;
