import { useState } from "react";
import toast from "react-hot-toast";
import swal from "sweetalert";
import { changePassword } from "../../APIs/authAPI";

const ChangePassword = ({ open, setOpen }) => {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const validate = () => {
    const newErrors = {};

    if (!formData.newPassword.trim()) {
      newErrors.newPassword = "Password is required";
    } else if (!passwordRegex.test(formData.newPassword)) {
      newErrors.newPassword =
        "Password must be 8+ chars, include 1 uppercase, 1 number, and 1 special character";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.confirmPassword !== formData.newPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  function reset() {
    setFormData({ newPassword: "", confirmPassword: "" });
    setErrors({});
    setOpen(false);
  }

  const handleChangePassword = () => {
    if (!validate()) return;

    swal({
      text: "Are you sure you want to change your password?",
      buttons: {
        cancel: {
          text: "Cancel",
          value: false,
          visible: true,
          className:
            "bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded",
        },
        confirm: {
          text: "Yes",
          value: true,
          visible: true,
          className:
            "bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded",
        },
      },
      dangerMode: true,
    }).then((willReset) => {
      if (willReset) {
        const changePromise = changePassword(formData);
        console.log(changePromise);
        toast.promise(changePromise, {
          loading: "Reseting password... ⏳",
          success: "Password changed successfully ✅",
          error: (err) =>
            err.response?.data?.message || "Changing password failed ❌",
        });
      }
    });
    reset();
  };

  return (
    open && (
      <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
        <div className="flex flex-col justify-center items-center min-h-[600px] px-4">
          <div className="w-full max-w-[800px] bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-bold text-[#2F4156] mb-4 text-center">
              Change Password
            </h2>
            <p className="text-[#2f415677] text-center mb-6 text-sm md:text-base">
              Enter your new password below and confirm it to reset.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-[#2F4156] mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  placeholder="Enter new password"
                  value={formData.newPassword}
                  onChange={(e) =>
                    setFormData({ ...formData, newPassword: e.target.value })
                  }
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FD7E14] focus:border-[#FD7E14] ${
                    errors.newPassword ? "border-red-500" : "border-[#2f415677]"
                  }`}
                />
                <div className="min-h-[20px]">
                  {errors.newPassword && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.newPassword}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-[#2F4156] mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm new password"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FD7E14] focus:border-[#FD7E14] ${
                    errors.confirmPassword
                      ? "border-red-500"
                      : "border-[#2f415677]"
                  }`}
                />
                <div className="min-h-[20px]">
                  {errors.confirmPassword && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-between items-center mt-6">
                <button
                  onClick={() => {
                    setOpen(false);
                    reset();
                  }}
                  className="text-red-500 hover:underline"
                >
                  Cancel
                </button>
                <button
                  onClick={handleChangePassword}
                  className="cursor-pointer bg-[#2f4156d9] text-white py-2 px-6 rounded-lg hover:bg-[#2F4156] transition-colors"
                >
                  Change
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ChangePassword;
