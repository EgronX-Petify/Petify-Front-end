import React from "react";
import { FaTrash, FaTimes, FaBox } from "react-icons/fa";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import Return from "./Return";

const ManageProducts = () => {
  const products = [
    { id: 1, name: "Dog Shampoo", price: 120, stock: 12 },
    { id: 2, name: "Cat Food", price: 180, stock: 8 },
    { id: 3, name: "Pet Toys", price: 90, stock: 20 },
  ];

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm w-full min-h-screen">
      <Return showLabel={true} />
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white p-3 bg-[#417481]">
        <FaBox /> Manage Products
      </h2>

      {/* ✅ Desktop Table */}
      <div className="hidden md:block  overflow-x-auto h-full">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-[#2F4156]">
              <th className="p-3">Product</th>
              <th className="p-3">Price</th>
              <th className="p-3">Stock</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr
                key={p.id}
                className="border-b border-[#2f415677] hover:bg-gray-50 transition"
              >
                <td className="p-3">{p.name}</td>
                <td className="p-3">${p.price}</td>
                <td className="p-3">{p.stock}</td>
                <td className="p-3 flex justify-center gap-2">
                  <Link
                    to="/dashboard/edit-product"
                    className="cursor-pointer bg-[#fd7d14db] text-white px-2 py-1 text-xs rounded-md flex items-center gap-1 hover:bg-[#FD7E14]"
                  >
                    <MdOutlineModeEditOutline /> Edit
                  </Link>
                  <button className="cursor-pointer bg-red-500 text-white px-2 py-1 text-xs rounded-md flex items-center gap-1 hover:bg-red-600">
                    <FaTimes /> Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ Mobile Cards */}
      <div className="md:hidden flex flex-col gap-4">
        {products.map((p) => (
          <div
            key={p.id}
            className="border border-gray-200 rounded-lg p-4 shadow-sm flex flex-col gap-2"
          >
            <div className="flex justify-between">
              <h3 className="font-semibold text-[#2F4156]">{p.name}</h3>
              <span className="text-sm font-medium">${p.price}</span>
            </div>
            <p className="text-sm text-gray-600">Stock: {p.stock}</p>
            <div className="flex gap-2 mt-2">
              <Link
                to="/dashboard/edit-product"
                className="flex-1 bg-[#fd7d14db] text-white py-2 text-sm rounded-md flex items-center justify-center gap-1 hover:bg-[#FD7E14]"
              >
                <MdOutlineModeEditOutline /> Edit
              </Link>
              <button className="flex-1 bg-red-500 text-white py-2 text-sm rounded-md flex items-center justify-center gap-1 hover:bg-red-600">
                <FaTimes /> Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;
