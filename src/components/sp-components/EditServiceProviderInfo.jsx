import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import ChangePassword from "../profile-components/ChangePassword";
import { SPContext } from "../../contexts/SPContext";

const EditServiceProviderInfo = ({ open, setOpen, serviceProvider }) => {
  const { setServiceProvider } = useContext(SPContext);
  const [changePassOpen, setChangePassOpen] = useState(false);

  const [formData, setFormData] = useState({
    username: serviceProvider.username || "",
    email: serviceProvider.email || "",
    phone: serviceProvider.phone || "",
    address: serviceProvider.address || "",
    description: serviceProvider.description || "",
    rate: serviceProvider.rate || 0,
    password: serviceProvider.password || "",
    photo: serviceProvider.photo || "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = "Username is required";

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Invalid email format";

    const phoneRegex = /^(\+20\d{10}|0\d{10})$/;
    if (!phoneRegex.test(formData.phone))
      newErrors.phone = "Phone must be +20XXXXXXXXXX or 0XXXXXXXXXX";

    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo" && files[0]) {
      const file = files[0];
      setFormData((prev) => ({
        ...prev,
        photo: URL.createObjectURL(file),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  function reset() {
    setFormData({
      username: serviceProvider.username || "",
      email: serviceProvider.email || "",
      phone: serviceProvider.phone || "",
      address: serviceProvider.address || "",
      description: serviceProvider.description || "",
      rate: serviceProvider.rate || 0,
      password: serviceProvider.password || "",
      photo: serviceProvider.photo || "",
    });
    setErrors({});
    setLoading(false);
    setOpen(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    // Replace with backend API call
    setServiceProvider((prev) => ({
      ...prev,
      ...formData,
    }));

    reset();
    toast.success("Profile updated successfully!");
  };

  return (
    open && (
      <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
        <div className="max-w-[95%] md:w-[70%] mx-auto my-10 bg-[#F8F9FA] shadow-lg rounded-2xl p-6">
          <h2 className="text-xl md:text-2xl font-semibold text-[#2F4156] mb-6 text-center">
            Edit Profile
          </h2>

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4"
            onSubmit={handleSubmit}
          >
            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-[#2F4156]">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-2 border border-gray-200 rounded-lg mt-1 text-[#2f4156b0] placeholder:text-[#2f4156b0] focus:border-gray-400 focus:ring-1 focus:ring-[#FD7E14] focus:outline-none"
              />
              <p className="h-4 text-xs text-red-500">
                {errors.username || ""}
              </p>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-[#2F4156]">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-200 rounded-lg mt-1 text-[#2f4156b0] placeholder:text-[#2f4156b0] focus:border-gray-400 focus:ring-1 focus:ring-[#FD7E14] focus:outline-none"
              />
              <p className="h-4 text-xs text-red-500">{errors.email || ""}</p>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-[#2F4156]">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-200 rounded-lg mt-1 text-[#2f4156b0] placeholder:text-[#2f4156b0] focus:border-gray-400 focus:ring-1 focus:ring-[#FD7E14] focus:outline-none"
              />
              <p className="h-4 text-xs text-red-500">{errors.phone || ""}</p>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-[#2F4156]">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2 border border-gray-200 rounded-lg mt-1 text-[#2f4156b0] placeholder:text-[#2f4156b0] focus:border-gray-400 focus:ring-1 focus:ring-[#FD7E14] focus:outline-none"
              />
              <p className="h-4 text-xs text-red-500">{errors.address || ""}</p>
            </div>

            {/* Photo */}
            <div>
              <label className="block text-sm font-medium text-[#2F4156]">
                Profile Photo
              </label>
              <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={handleChange}
                className="w-full p-2 border border-gray-200 rounded-lg mt-1 text-[#2f4156b0] focus:border-gray-400 focus:ring-1 focus:ring-[#FD7E14] focus:outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-[#2F4156]">
                Password
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={formData.password}
                  readOnly
                  className="w-full p-2 border border-gray-200 rounded-lg mt-1 bg-gray-100 text-[#2f4156b0] focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setChangePassOpen(true)}
                  className="px-3 py-1 bg-[#FD7E14] text-white rounded-lg hover:bg-[#e86f0d] transition"
                >
                  Reset
                </button>
              </div>
            </div>

            {/* Description (full width) */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[#2F4156]">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                className="w-full p-2 border border-gray-200 rounded-lg mt-1 text-[#2f4156b0] placeholder:text-[#2f4156b0] focus:border-gray-400 focus:ring-1 focus:ring-[#FD7E14] focus:outline-none"
              />
              <p className="h-4 text-xs text-red-500">
                {errors.description || ""}
              </p>
            </div>

            {/* Buttons (full width) */}
            <div className="md:col-span-2 flex justify-between gap-3 mt-6">
              <button
                type="button"
                disabled={loading}
                className="cursor-pointer flex-1 px-5 py-2 rounded-lg bg-gray-300 text-[#2F4156] hover:bg-gray-400 transition"
                onClick={() => reset()}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="cursor-pointer flex-1 px-5 py-2 rounded-lg bg-[#FD7E14] text-white hover:bg-[#e86f0d] transition shadow-md"
              >
                {loading ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
        <ChangePassword open={changePassOpen} setOpen={setChangePassOpen} />
      </div>
    )
  );
};

export default EditServiceProviderInfo;
