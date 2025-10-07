import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { SPContext } from "../../contexts/SPContext";
import { toastPromise } from "../../utils/toastPromise";

function AddService({ open, setOpen }) {
  const { createService } = useContext(SPContext);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    notes: "",
    photo: null,
    category: "",
  });

  const [errors, setErrors] = useState({});

  // handle change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo" && files[0]) {
      const file = files[0];
      setFormData((prev) => ({
        ...prev,
        photo: URL.createObjectURL(file), // preview only
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // validation
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Service name is required.";
    if (!formData.price) newErrors.price = "Price is required.";
    if (!formData.description.trim())
      newErrors.description = "Description is required.";
    if (!formData.photo) newErrors.photo = "Photo is required.";
    if (!formData.category) newErrors.category = "Category is required.";
    return newErrors;
  };

  // reset
  function reset() {
    setFormData({
      name: "",
      price: "",
      description: "",
      notes: "",
      category: "",
      photo: null,
    });
    setErrors({});
    setOpen(false);
  }

  // submit handler
  const handleAddService = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    const payload = {
      name: formData?.name,
      description: formData?.description,
      category: formData?.category,
      price: Number(formData?.price),
      notes: formData?.notes,
    };
    createService(payload);
    reset();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 overflow-y-auto px-2">
      <div className="w-full max-w-3xl mx-4 my-6 bg-[#F8F9FA] shadow-lg rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-[#2F4156] mb-4 text-center">
          Add New Service
        </h2>

        <form
          onSubmit={handleAddService}
          className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4"
        >
          {/* Service Name */}
          <div>
            <label className="block text-[#2F4156] font-medium text-sm">
              Service Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Service name"
              className="w-full rounded-lg text-[#2f415677] bg-white border px-3 py-2 focus:ring-2 focus:ring-[#FD7E14] focus:text-[#2f4156] outline-none"
            />
            <p className="text-red-500 text-xs h-4">{errors.name}</p>
          </div>

          {/* Price */}
          <div>
            <label className="block text-[#2F4156] font-medium text-sm">
              Price ($)
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"
              className="w-full rounded-lg text-[#2f415677] focus:text-[#2f4156]  bg-white border px-3 py-2 focus:ring-2 focus:ring-[#FD7E14] outline-none"
            />
            <p className="text-red-500 text-xs h-4">{errors.price}</p>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-[#2F4156] font-medium text-sm">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description"
              rows="2"
              className="w-full rounded-lg text-[#2f415677] focus:text-[#2f4156]  bg-white border px-3 py-2 focus:ring-2 focus:ring-[#FD7E14] outline-none"
            ></textarea>
            <p className="text-red-500 text-xs h-4">{errors.description}</p>
          </div>

          {/* Notes */}
          <div className="md:col-span-2">
            <label className="block text-[#2F4156] font-medium text-sm">
              Notes
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Additional notes (optional)"
              rows="2"
              className="w-full rounded-lg text-[#2f415677] focus:text-[#2f4156]  bg-white border px-3 py-2 focus:ring-2 focus:ring-[#FD7E14] outline-none"
            ></textarea>
          </div>
          {/* category */}
          <div>
            <label className="block text-[#2F4156] font-medium text-sm">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full rounded-lg text-[#2f415677] bg-white border px-3 py-2 focus:ring-2 focus:ring-[#FD7E14] focus:text-[#2f4156] outline-none"
            >
              <option value="">Select Category</option>
              <option value="VET">Vet</option>
              <option value="GROOMING">Grooming</option>
              <option value="TRAINING">Training</option>
              <option value="WALKING">Walking</option>
              <option value="BOARDING">Boarding</option>
              <option value="OTHER">Other</option>
            </select>
            <p className="text-red-500 text-xs h-4">{errors.category}</p>
          </div>

          {/* Photo */}
          <div className="">
            <label className="block text-[#2F4156] font-medium text-sm">
              Photo
            </label>
            <input
              type="file"
              accept="image/*"
              name="photo"
              onChange={handleChange}
              className="w-full rounded-lg text-[#2f415677] bg-white border px-3 py-2 focus:ring-2 focus:ring-[#FD7E14] focus:text-[#2f4156] outline-none"
            />
            <p className="text-red-500 text-xs h-4">{errors.photo}</p>
          </div>

          {/* Buttons */}
          <div className="md:col-span-2 flex flex-col-reverse sm:flex-row justify-end gap-3 pt-2">
            <button
              type="button"
              className="w-full sm:w-fit cursor-pointer px-5 py-2 rounded-lg bg-[#ff383be0] text-white hover:bg-[#ff383b]"
              onClick={reset}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full sm:w-fit cursor-pointer px-5 py-2 rounded-lg text-white bg-[#FD7E14] hover:bg-[#e56f0f]"
            >
              Add Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddService;
