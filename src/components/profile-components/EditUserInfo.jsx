import React, { useState } from "react";

const EditUserInfo = () => {
  const formData = {
    photo: "https://i.pravatar.cc/150?img=12",
    username: "mayno123",
    email: "mayno@example.com",
    phone: "+20123456789",
    password: "1234skjhs",
  };

  const [resetSent, setResetSent] = useState(false);

  const handleResetPassword = () => {
    // Here you’d normally call your backend API to send reset email
    setResetSent(true);
    alert(`A reset link has been sent to ${formData.email}`);
  };

  return (
    <div className="max-w-[95%] md:max-w-[600px] mx-auto my-10 bg-[#F8F9FA] shadow-lg rounded-2xl p-6">
      <h2 className="text-xl md:text-2xl font-semibold text-[#2F4156] mb-6 text-center">
        Edit Profile
      </h2>

      <form className="space-y-4">
        {/* Username */}
        <div>
          <label className="block text-sm font-medium text-[#2F4156]">
            Username
          </label>
          <input
            type="text"
            name="username"
            placeholder={formData.username}
            className="w-full p-2 border border-gray-200 rounded-lg mt-1 placeholder:text-[#2f4156b0] focus:border-gray-400 focus:ring-1 focus:ring-[#FD7E14] focus:outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-[#2F4156]">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder={formData.email}
            className="w-full p-2 border border-gray-200 rounded-lg mt-1 placeholder:text-[#2f4156b0] focus:border-gray-400 focus:ring-1 focus:ring-[#FD7E14] focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#2F4156]">
            Email
          </label>
          <input
            type="phone"
            name="phone"
            placeholder={formData.phone}
            className="w-full p-2 border border-gray-200 rounded-lg mt-1 placeholder:text-[#2f4156b0] focus:border-gray-400 focus:ring-1 focus:ring-[#FD7E14] focus:outline-none"
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
              className="w-full p-2 border border-gray-200 rounded-lg mt-1 bg-gray-100 text-[#2f4156b0] focus:border-gray-400 focus:ring-1 focus:ring-[#FD7E14] focus:outline-none"
            />
            <button
              type="button"
              onClick={handleResetPassword}
              className="px-3 py-1 bg-[#FD7E14] text-white rounded-lg hover:bg-[#e86f0d] transition"
            >
              Reset
            </button>
          </div>
          {resetSent && (
            <p className="text-sm text-green-600 mt-1">
              Reset link sent to {formData.email}
            </p>
          )}
        </div>

        {/* Upload Photo */}
        <div>
          <label className="block text-sm font-medium text-[#2F4156]">
            Profile Photo
          </label>
          <input
            type="file"
            name="photo"
            accept="image/*"
            className="w-full p-2 border border-gray-200 rounded-lg mt-1 text-[#2f4156b0] focus:border-gray-400 focus:ring-1 focus:ring-[#FD7E14] focus:outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-3 mt-6">
          <button
            type="button"
            className="flex-1 px-5 py-2 rounded-lg bg-gray-300 text-[#2F4156] hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 px-5 py-2 rounded-lg bg-[#FD7E14] text-white hover:bg-[#e86f0d] transition shadow-md"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUserInfo;
