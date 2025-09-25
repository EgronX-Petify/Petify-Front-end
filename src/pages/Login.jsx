import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ForgotPassword from "../components/sign-components/ForgotPassword";
import UseLogged from "../hooks/UseLogged";
import toast from "react-hot-toast";
import UseAuth from "../hooks/UseAuth";

const Login = () => {
  const [openForgotPassword, setOpenForgotPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const { login } = UseAuth();
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await toast.promise(login(formData), {
        loading: "Login In... ⏳",
        success: "Logged in successfully! ✅",
        error: (err) => err.response?.data?.message || "Login failed ❌",
      });
      navigate("/");
    } catch (err) {
      console.error("Login failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="my-[30px] flex flex-col md:flex-row justify-evenly items-center min-h-[600px] px-[20px] md:px-[30px] gap-8">
      <div className="flex flex-grow items-center justify-start h-full bg-gray-50 shadow-lg p-2 rounded-lg w-full md:w-auto">
        <div className="flex flex-col justify-center w-full p-6 md:p-8 max-w-md min-h-[400px] md:min-h-[600px]">
          <h2 className="flex items-start text-3xl md:text-5xl font-bold mb-2 text-center text-[#FD7E14]">
            Sign In
          </h2>
          <p className="text-[#2f415677] mb-3 text-sm md:text-base">
            Please login to continue to your account
          </p>

          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block text-[#2F4156] mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border-[1px] border-solid border-[#2f415677] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FD7E14] focus:border-[#FD7E14]"
              />
            </div>

            <div>
              <label className="block text-[#2F4156] mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border-[1px] border-solid border-[#2f415677] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FD7E14] focus:border-[#FD7E14]"
              />
              <div className="flex justify-end mt-2">
                <button
                  type="button"
                  className="text-sm text-[#FD7E14] hover:underline"
                  onClick={() => setOpenForgotPassword(true)}
                >
                  Forgot Password?
                </button>
              </div>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

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
            Need an account?{" "}
            <Link to="/signup">
              <button className="cursor-pointer font-semibold text-[#FD7E14] border-b-[2px] pb-[1px] px-1">
                Sign Up
              </button>
            </Link>
          </p>
        </div>
      </div>

      <div className="hidden w-full md:w-[600px] h-[300px] md:h-[600px] overflow-hidden md:flex justify-center items-center">
        <img
          src="/public/logo55.png"
          alt=""
          className="w-full h-full object-contain md:object-cover"
        />
      </div>
      <ForgotPassword
        open={openForgotPassword}
        setOpen={setOpenForgotPassword}
      />
    </div>
  );
};

export default Login;
