import React, { useState } from "react";

const AddProduct = ({ open, setOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    price: "",
    img: "",
    notes: "",
    discounts: "",
    stock: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Data:", formData);
  };

  return (
    open && (
      <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
        <div
          className="
            max-w-[90%] md:max-w-5xl 
            bg-white rounded-2xl shadow-md 
            max-h-[90vh] 
            overflow-y-auto
            p-4 md:p-6
          "
        >
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-[#2F4156]">
            Add New Product
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            {/* Row 1: Name + Price */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-sm font-medium mb-1 text-[#2F4156]">
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-[#2f415677] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-[#2F4156]">
                  Price ($)
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full border border-[#2f415677] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
                  required
                />
              </div>
            </div>

            {/* Row 2: Description */}
            <div>
              <label className="block text-sm font-medium mb-1 text-[#2F4156]">
                Description
              </label>
              <textarea
                name="desc"
                value={formData.desc}
                onChange={handleChange}
                className="w-full border border-[#2f415677] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
                rows="3"
              />
            </div>

            {/* Row 3: Image + Stock */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 ">
              <div>
                <label className="block text-sm font-medium mb-1 text-[#2F4156]">
                  Product Image
                </label>
                <input
                  type="file"
                  name="img"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full border border-[#2f415677] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-[#2F4156]">
                  Stock Quantity
                </label>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  className="w-full border border-[#2f415677] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
                />
              </div>
            </div>

            {/* Row 4: Discounts + Notes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-sm font-medium mb-1 text-[#2F4156]">
                  Discount (%)
                </label>
                <input
                  type="number"
                  name="discounts"
                  value={formData.discounts}
                  onChange={handleChange}
                  className="w-full border border-[#2f415677] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-[#2F4156]">
                  Notes
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full border border-[#2f415677] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
                  rows="2"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col-reverse md:flex-row justify-end gap-3 pt-2">
              <button
                className="w-full md:w-auto bg-red-500 text-white px-3 py-2 rounded-lg font-medium hover:bg-red-600 transition"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full md:w-auto bg-[#FD7E14] text-white px-3 py-2 rounded-lg font-medium hover:bg-[#e66f0f] transition"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default AddProduct;
