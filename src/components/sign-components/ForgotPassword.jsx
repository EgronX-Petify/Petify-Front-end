import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset link sent to:", email);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-[600px] px-4">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-bold text-[#FD7E14] mb-4 text-center">
            Forgot Password
          </h2>
          <p className="text-[#2f415677] text-center mb-6 text-sm md:text-base">
            Enter your email address and we’ll send you a link to reset your password.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-[#2F4156] mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-[#2f415677] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FD7E14] focus:border-[#FD7E14]"
                required
              />
            </div>

            <button
              type="submit"
              className="cursor-pointer w-full bg-[#FD7E14] text-white py-2 rounded-lg hover:bg-[#e76c0a] transition-colors"
            >
              Send Reset Link
            </button>
          </form>

          <p className="text-center mt-4 text-sm text-[#2f415677]">
            Remember your password?{" "}
            <Link to="/login" className="text-[#FD7E14] hover:underline">
              Back to Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
