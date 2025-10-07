import React, { useState, useEffect, useContext } from "react";
import { FaEdit } from "react-icons/fa";
import toast from "react-hot-toast";
import { SPContext } from "../../contexts/SPContext";
import UseSPServices from "../../hooks/UseSPServices";

const UpdateServices = ({ open, setOpen }) => {
  const [form, setForm] = useState({
    photo: "",
    name: "",
    description: "",
    price: "",
    category: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const services = UseSPServices();
  const { selectedService, setServices, editService } = useContext(SPContext);

  // fill initial values when modal opens
  useEffect(() => {
    if (selectedService) {
      setForm({
        photo: selectedService?.photo || "",
        name: selectedService?.name || "",
        description: selectedService?.description || "",
        price: selectedService?.price || "",
        category: selectedService?.category || "",
        notes: selectedService?.notes || "",
      });
    }
  }, [selectedService]);

  // validation
  const validate = () => {
    let newErrors = {};
    if (!form.name.trim()) newErrors.name = "Service name is required.";
    if (!form.description.trim())
      newErrors.description = "Description is required.";
    if (!form.price || form.price <= 0)
      newErrors.price = "Price must be greater than 0.";
    if (!form.category.trim()) newErrors.category = "Category is required.";
    if (form.photo && typeof form.photo !== "string") {
      const validTypes = ["image/jpeg", "image/png", "image/jpg"];
      if (!validTypes.includes(form.photo.type)) {
        newErrors.photo = "Only JPG, JPEG, or PNG allowed.";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // handle form change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo" && files[0]) {
      const file = files[0];
      setForm((prev) => ({
        ...prev,
        photo: file, // keep file object to send in API
        preview: URL.createObjectURL(file),
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  function reset() {
    setForm({
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

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    await editService(selectedService.id, form);
    reset();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="max-w-[90%] md:w-3xl bg-white rounded-2xl shadow-md max-h-[90vh] overflow-y-auto p-4 md:p-6">
        <h2 className="text-lg font-semibold mb-3 flex items-center gap-2 text-[#2F4156]">
          <FaEdit /> Edit Service
        </h2>

        <form onSubmit={handleSubmit} className=" text-sm">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1 text-[#2F4156]">
              Service Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter service name"
              className="w-full border outline-none border-[#2f415677] text-[#2f415677] focus:text-[#2F4156] rounded-md p-2 focus:ring-2 focus:ring-[#FD7E14]"
            />
            <p className="text-xs text-red-500 h-4">{errors.name}</p>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-1 text-[#2F4156]">
              Description
            </label>
            <textarea
              rows={2}
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Enter description"
              className="w-full border outline-none border-[#2f415677] text-[#2f415677] focus:text-[#2F4156] rounded-md p-2 focus:ring-2 focus:ring-[#FD7E14]"
            ></textarea>
            <p className="text-xs text-red-500 h-4">{errors.description}</p>
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium mb-1 text-[#2F4156]">
              Category
            </label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border border-[#2f415677] text-[#2f415677] focus:text-[#2F4156] rounded-md p-2 focus:ring-2 focus:ring-[#FD7E14]"
            >
              <option value="">Select category</option>
              <option value="VET">Vet</option>
              <option value="GROOMING">Grooming</option>
              <option value="TRAINING">Training</option>
              <option value="OTHER">Other</option>
            </select>
            <p className="text-xs text-red-500 h-4">{errors.category}</p>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium mb-1 text-[#2F4156]">
              Notes
            </label>
            <textarea
              rows={2}
              name="notes"
              value={form.notes}
              onChange={handleChange}
              placeholder="Add any notes (optional)"
              className="w-full border outline-none border-[#2f415677] text-[#2f415677] focus:text-[#2F4156] rounded-md p-2 focus:ring-2 focus:ring-[#FD7E14]"
            ></textarea>
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium mb-1 text-[#2F4156]">
              Price ($)
            </label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="Enter price"
              className="w-full border outline-none border-[#2f415677] text-[#2f415677] focus:text-[#2F4156] rounded-md p-2 focus:ring-2 focus:ring-[#FD7E14]"
            />
            <p className="text-xs text-red-500 h-4">{errors.price}</p>
          </div>
          {/* Photo */}
          <div>
            <label className="block text-sm font-medium mb-1 text-[#2F4156]">
              Service Photo
            </label>
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={handleChange}
              className="w-full border border-[#2f415677] text-[#2f415677] focus:text-[#2F4156] rounded-md p-2 cursor-pointer focus:ring-2 focus:ring-[#FD7E14]"
            />
            <p className="text-xs text-red-500 h-4">{errors.photo}</p>
          </div>

          {/* Buttons */}
          <div className="w-full flex flex-col-reverse md:flex-row md:justify-end gap-2 pt-2">
            <button
              type="button"
              className="bg-red-500 text-white px-7 py-3 rounded-lg font-medium hover:bg-red-600 transition"
              onClick={() => reset()}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-7 py-3 bg-[#FD7E14] text-white rounded-md hover:bg-[#e56f0f] transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateServices;
