import React, { useContext, useState } from "react";
import logo from "../../public/logo55.png";
import { Link } from "react-router-dom";
import { signupService } from "../services/authService.js";
import { AuthContext } from "../contexts/AuthContext.jsx";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const [errors, setErrors] = useState({});

  // regexes
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};

    // Username
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (!usernameRegex.test(formData.username)) {
      newErrors.username =
        "Username must be 3-15 chars, only letters, numbers, and underscores";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Password
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be 8+ chars, include 1 uppercase, 1 number, and 1 special character";
    }

    // Password
    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Password and confirm password must be same";
    }

    if (!formData.role.trim()) {
      newErrors.role = "Please select your role";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const { email, password, role } = formData;
  const reqBody = { email, password, role };
  const { signup } = useContext(AuthContext);

  // try to fetch with the normal way
  //jdbc:mysql://db:3306/petify
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const res = await fetch("http://localhost:8080/api/v1/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reqBody),
        });

        const data = await res.json();
        // console.log("Response:", data);

        if (res.ok) {
          localStorage.setItem("user", JSON.stringify(data));
          alert("Signup successful ✅");
        } else {
          alert(data.message || "Something went wrong ❌");
        }
      } catch (err) {
        // console.error(err);
        alert("Error connecting to server ❌");
      }
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(reqBody);
  //   setErrors({});
  //   setLoading(true);
  //   if (validate()) {
  //     try {
  //       const data = await signupService(reqBody);
  //       signup(data);
  //       console.log("✅ Signup successful:", data);
  //     } catch (err) {
  //       console.error("❌ Signup failed:", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   } else {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="my-[30px] flex flex-col md:flex-row justify-evenly items-center min-h-[600px] px-[20px] md:px-[30px] gap-8">
      <div className="flex flex-grow items-center justify-start h-full bg-gray-50 shadow-lg px-2 rounded-lg w-full md:w-auto">
        <div className="flex flex-col justify-center w-full p-6 md:px-8 md:py-4 max-w-md min-h-[400px] md:min-h-[600px]">
          <h2 className="flex items-start text-3xl md:text-5xl font-bold mb-2 text-center text-[#FD7E14]">
            Sign Up
          </h2>
          <p className="text-[#2f415677] mb-3 text-sm md:text-base">
            Sign up to enjoy the features of Petify
          </p>

          <form onSubmit={handleSubmit}>
            {/* Username */}
            <div>
              <label className="block text-[#2F4156] mb-1" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                className={`w-full px-4 py-2 border ${
                  errors.username ? "border-red-500" : "border-[#2f415677]"
                } rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FD7E14] focus:border-[#FD7E14]`}
              />
              <p
                className={`text-red-500 text-xs mt-1 min-h-[20px] ${
                  errors.username ? "visible" : "invisible"
                }`}
              >
                {errors.username || "placeholder"}
              </p>
            </div>

            {/* Email */}
            <div>
              <label className="block text-[#2F4156] mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={`w-full px-4 py-2 border ${
                  errors.email ? "border-red-500" : "border-[#2f415677]"
                } rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FD7E14] focus:border-[#FD7E14]`}
              />
              <p
                className={`text-red-500 text-xs mt-1 min-h-[20px] ${
                  errors.email ? "visible" : "invisible"
                }`}
              >
                {errors.email || "placeholder"}
              </p>
            </div>

            {/* Password */}
            <div>
              <label className="block text-[#2F4156] mb-1" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={`w-full px-4 py-2 border ${
                  errors.password ? "border-red-500" : "border-[#2f415677]"
                } rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FD7E14] focus:border-[#FD7E14]`}
              />
              <p
                className={`text-red-500 text-xs mt-1 min-h-[20px] ${
                  errors.password ? "visible" : "invisible"
                }`}
              >
                {errors.password || "placeholder"}
              </p>
            </div>

            {/* Confirm Password */}
            <div>
              <label
                className="block text-[#2F4156] mb-1"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className={`w-full px-4 py-2 border ${
                  errors.confirmPassword
                    ? "border-red-500"
                    : "border-[#2f415677]"
                } rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FD7E14] focus:border-[#FD7E14]`}
              />
              <p
                className={`text-red-500 text-xs mt-1 min-h-[20px] ${
                  errors.confirmPassword ? "visible" : "invisible"
                }`}
              >
                {errors.confirmPassword || "placeholder"}
              </p>
            </div>

            {/* Role */}
            <div>
              <label className="block text-[#2F4156] mb-1" htmlFor="role">
                Role
              </label>
              <select
                id="role"
                value={formData.role}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors.role ? "border-red-500" : "border-[#2f415677]"
                } rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FD7E14] focus:border-[#FD7E14]`}
              >
                <option value="" className="text-[#2f4156]">
                  Select your role
                </option>
                <option value="PET_OWNER" className="text-[#2f4156]">
                  Pet Owner
                </option>
                <option value="SERVICE_PROVIDER" className="text-[#2f4156]">
                  Service Provider
                </option>
              </select>
              <p
                className={`text-red-500 text-xs mt-1 min-h-[20px] ${
                  errors.role ? "visible" : "invisible"
                }`}
              >
                {errors.role}
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`cursor-pointer w-full bg-[#FD7E14] text-white py-2 rounded-lg hover:bg-[#e76c0a] transition-colors ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <p className="text-center text-[#2f415677] mt-4 text-sm md:text-base">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-[#FD7E14] border-b-[2px] pb-[1px] px-1"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>

      <div className="hidden w-full md:w-[600px] h-[300px] md:h-[600px] overflow-hidden md:flex justify-center items-center">
        <img
          src={logo}
          alt=""
          className="w-full h-full object-contain md:object-cover"
        />
      </div>
    </div>
  );
};

export default Signup;
