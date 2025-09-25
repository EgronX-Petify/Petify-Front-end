import React, { useState, useEffect, useContext } from "react";
import { FaEdit } from "react-icons/fa";
import { SPContext } from "../../contexts/SPContext";
import UseSPServices from "../../hooks/UseSPServices";
import toast from "react-hot-toast";

const UpdateServices = ({ open, setOpen }) => {
  const [form, setForm] = useState({
    photo: "",
    name: "",
    description: "",
    price: "",
  });

  const [errors, setErrors] = useState({});
  const services = UseSPServices();

  const { selectedService, setServices } = useContext(SPContext);

  // fill initial values when modal opens
  useEffect(() => {
    if (selectedService) {
      setForm({
        photo: selectedService?.photo || "",
        name: selectedService?.name || "",
        description: selectedService?.description || "",
        price: selectedService?.price || "",
      });
    }
  }, [selectedService]);

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Service name is required.";
    }

    if (!form.description.trim()) {
      newErrors.description = "Description is required.";
    }

    if (!form.price || form.price <= 0) {
      newErrors.price = "Price must be greater than 0.";
    }

    // file/photo validation (if updating photo)
    if (form.photo && typeof form.photo !== "string") {
      const validTypes = ["image/jpeg", "image/png", "image/jpg"];
      if (!validTypes.includes(form.photo.type)) {
        newErrors.photo = "Only JPG, JPEG, or PNG allowed.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo" && files[0]) {
      const file = files[0];
      setForm((prev) => ({
        ...prev,
        photo: URL.createObjectURL(file),
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setServices(
      services.map((service) =>
        service.id === selectedService.id ? { ...service, ...form } : service
      )
    );
    toast.success("Services Updated Successfully!");
    setOpen(false);
  };

  return (
    open && (
      <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
        <div className="max-w-[90%] md:w-3xl bg-white rounded-2xl shadow-md max-h-[90vh] overflow-y-auto p-4 md:p-6">
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2 text-[#2F4156]">
            <FaEdit /> Service Details
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 text-sm">
            <div>
              <label className="block text-sm font-medium mb-1 text-[#2F4156]">
                Service Photo
              </label>
              <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={handleChange}
                className="w-full border border-[#2f415677] rounded-md p-2 cursor-pointer focus:ring-2 focus:ring-[#FD7E14]"
              />
              <p className="text-xs text-gray-500 mt-1 h-4">
                {errors.photo && (
                  <span className="text-red-500">{errors.photo}</span>
                )}
              </p>
            </div>

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
                className="w-full border outline-none border-[#2f415677] rounded-md p-2 focus:ring-2 focus:ring-[#FD7E14]"
              />
              <p className="text-xs text-red-500 h-4">{errors.name}</p>
            </div>

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
                className="w-full border outline-none border-[#2f415677] rounded-md p-2 focus:ring-2 focus:ring-[#FD7E14]"
              ></textarea>
              <p className="text-xs text-red-500 h-4">{errors.description}</p>
            </div>

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
                className="w-full border outline-none border-[#2f415677] rounded-md p-2 focus:ring-2 focus:ring-[#FD7E14]"
              />
              <p className="text-xs text-red-500 h-4">{errors.price}</p>
            </div>

            <div className="w-full flex flex-col-reverse md:flex-row md:justify-end gap-2 pt-2">
              <button
                type="button"
                className="bg-red-500 text-white px-7 py-3 rounded-lg font-medium hover:bg-red-600 transition"
                onClick={() => setOpen(false)}
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
    )
  );
};

export default UpdateServices;
