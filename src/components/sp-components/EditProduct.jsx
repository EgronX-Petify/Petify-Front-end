import React from "react";
import { FaBoxOpen } from "react-icons/fa";

const EditProduct = () => {
  return (
    <div className="w-full bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-5 flex items-center gap-2 text-[#2F4156]">
        <FaBoxOpen /> Edit Product
      </h2>

      <form className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-6">
        {/* Product Name */}
        <div>
          <label className="block text-sm font-medium text-[#2F4156] mb-1">
            Product Name
          </label>
          <input
            type="text"
            placeholder="Enter product name"
            className="w-full border border-[#2f415677] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-[#2F4156] mb-1">
            Price ($)
          </label>
          <input
            type="number"
            placeholder="Enter price"
            className="w-full border border-[#2f415677] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
          />
        </div>

        {/* Stock */}
        <div>
          <label className="block text-sm font-medium text-[#2F4156] mb-1">
            Stock Quantity
          </label>
          <input
            type="number"
            placeholder="Enter stock"
            className="w-full border border-[#2f415677] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-[#2F4156] mb-1">
            Category
          </label>
          <select className="w-full border border-[#2f415677] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]">
            <option value="">Select category</option>
            <option value="Food">Food</option>
            <option value="Toys">Toys</option>
            <option value="Grooming">Grooming</option>
            <option value="Accessories">Accessories</option>
            <option value="Health">Health</option>
          </select>
        </div>

        {/* Brand */}
        <div className="lg:col-span-2">
          <label className="block text-sm font-medium text-[#2F4156] mb-1">
            Brand
          </label>
          <input
            type="text"
            placeholder="Enter brand name"
            className="w-full border border-[#2f415677] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
          />
        </div>

        {/* Save Button */}
        <div className="hidden lg:col-start-2 md:flex flex-row items-center justify-end gap-3 ">
          <button className="w-fit sm:w-auto px-5 bg-red-500 text-white py-2 rounded-lg font-medium hover:bg-red-600 transition">
            Cancel
          </button>
          <button
            type="submit"
            className="w-fit sm:w-auto px-5 bg-[#FD7E14] text-white py-2 rounded-lg font-medium hover:bg-[#e66f0f] transition"
          >
            Save Changes
          </button>
        </div>

        {/* mobile */}
        <div className="md:hidden lg:col-start-2 flex flex-col sm:flex-row gap-3">
          <button className="w-full sm:w-auto flex-1 bg-red-500 text-white py-2 rounded-lg font-medium hover:bg-red-600 transition">
            Cancel
          </button>
          <button
            type="submit"
            className="w-full sm:w-auto flex-1 bg-[#FD7E14] text-white py-2 rounded-lg font-medium hover:bg-[#e66f0f] transition"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
