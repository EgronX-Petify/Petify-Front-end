import React, { useState } from "react";

const EditProduct = ({ open, setOpen }) => {
  const [images, setImages] = useState([0]); // track image inputs

  const addImageField = () => {
    setImages((prev) => [...prev, prev.length]); // add new index
  };

  const removeImageField = (indexToRemove) => {
    setImages((prev) => prev.filter((_, i) => i !== indexToRemove));
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
            Edit Product
          </h2>

          <form className="space-y-1 md:space-y-2">
            {/* Row 1: Name + Price */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-sm font-medium mb-1 text-[#2F4156]">
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
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
                className="w-full border border-[#2f415677] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
                rows="3"
              />
            </div>

            {/* Row 3: Images + Stock */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 ">
              <div>
                <label className="block text-sm font-medium mb-1 text-[#2F4156]">
                  Product Images
                </label>

                {images.map((index, i) => (
                  <div key={index} className="flex gap-1 items-center">
                    <input
                      type="file"
                      name={`img-${index}`}
                      accept="image/*"
                      className="w-full border border-[#2f415677] rounded-lg px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
                    />
                    {i > 0 && (
                      <button
                        type="button"
                        onClick={() => removeImageField(i)}
                        className="text-xs px-2 py-1 rounded-sm text-white bg-red-500 font-medium hover:bg-red-600"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}

                <button
                  type="button"
                  onClick={addImageField}
                  className="text-sm text-[#FD7E14] font-medium hover:underline"
                >
                  + Add another photo
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-[#2F4156]">
                  Stock Quantity
                </label>
                <input
                  type="number"
                  name="stock"
                  className="w-full border border-[#2f415677] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
                />
              </div>
            </div>

            {/* Row 4: Discount + Notes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-sm font-medium mb-1 text-[#2F4156]">
                  Discount (%)
                </label>
                <input
                  type="number"
                  name="discounts"
                  className="w-full border border-[#2f415677] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-[#2F4156]">
                  Notes
                </label>
                <textarea
                  name="notes"
                  className="w-full border border-[#2f415677] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
                  rows="2"
                />
              </div>
            </div>

            {/* Row 5: Rate */}
            <div>
              <label className="block text-sm font-medium mb-1 text-[#2F4156]">
                Rate (1–5)
              </label>
              <input
                type="number"
                name="rate"
                min="1"
                max="5"
                step="0.1"
                className="w-full md:w-1/3 border border-[#2f415677] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col-reverse md:flex-row justify-end gap-3 pt-2">
              <button
                type="button"
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

export default EditProduct;
