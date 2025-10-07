import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import ChangePassword from "../profile-components/ChangePassword";
import { SPContext } from "../../contexts/SPContext";
import { ProfileContext } from "../../contexts/ProfileContext";

const EditServiceProviderInfo = ({ open, setOpen, serviceProvider }) => {
  const { setServiceProvider } = useContext(SPContext);
  const { updateUser } = useContext(ProfileContext);
  const [changePassOpen, setChangePassOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: serviceProvider?.name || "",
    phoneNumber: serviceProvider?.phoneNumber || "",
    address: serviceProvider?.address || "",
    description: serviceProvider?.description || "",
    password: serviceProvider?.password || "",
    photo: serviceProvider?.photo || "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "name is required";

    const phoneNumberRegex = /^(\+20\d{10}|0\d{10})$/;
    if (!phoneNumberRegex.test(formData.phoneNumber))
      newErrors.phoneNumber =
        "phone Number must be +20XXXXXXXXXX or 0XXXXXXXXXX";

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
      name: serviceProvider?.name || "",
      email: serviceProvider?.email || "",
      phoneNumber: serviceProvider?.phoneNumber || "",
      address: serviceProvider?.address || "",
      description: serviceProvider?.description || "",
      rate: serviceProvider?.rate || 0,
      password: serviceProvider?.password || "",
      photo: serviceProvider?.photo || "",
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

    const payload = {
      name: serviceProvider?.name || "",
      phoneNumber: serviceProvider?.phoneNumber || "",
      address: serviceProvider?.address || "",
      description: serviceProvider?.description || "",
      password: serviceProvider?.password || "",
    };

    try {
      const { data } = await updateUser(payload);
      setServiceProvider((prev) => ({ ...prev, ...data }));
    } catch (error) {
      console.log("updating user error::", error);
      toast.error("Failed to update profile");
    }
    reset();
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
            {/* name */}
            <div>
              <label className="block text-sm font-medium text-[#2F4156]">
                name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-200 rounded-lg mt-1 text-[#2f4156b0] placeholder:text-[#2f4156b0] focus:border-gray-400 focus:ring-1 focus:ring-[#FD7E14] focus:outline-none"
              />
              <p className="h-4 text-xs text-red-500">{errors.name || ""}</p>
            </div>

            {/* phoneNumber */}
            <div>
              <label className="block text-sm font-medium text-[#2F4156]">
                phoneNumber
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full p-2 border border-gray-200 rounded-lg mt-1 text-[#2f4156b0] placeholder:text-[#2f4156b0] focus:border-gray-400 focus:ring-1 focus:ring-[#FD7E14] focus:outline-none"
              />
              <p className="h-4 text-xs text-red-500">
                {errors.phoneNumber || ""}
              </p>
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
