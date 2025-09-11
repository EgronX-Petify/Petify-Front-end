import React, { useState } from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-[600px] px-4">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-bold text-[#FD7E14] mb-4 text-center">
            Reset Password
          </h2>
          <p className="text-[#2f415677] text-center mb-6 text-sm md:text-base">
            Enter your new password below.
          </p>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="password"
                className="block text-[#2F4156] mb-2"
              >
                New Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter new password"
                className="w-full px-4 py-2 border border-[#2f415677] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FD7E14] focus:border-[#FD7E14]"
                required
              />
            </div>

            <div>
              <label
                htmlFor="confirm"
                className="block text-[#2F4156] mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm"
                placeholder="Confirm new password"
                className="w-full px-4 py-2 border border-[#2f415677] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FD7E14] focus:border-[#FD7E14]"
                required
              />
            </div>

            <button
              type="submit"
              className="cursor-pointer w-full bg-[#FD7E14] text-white py-2 rounded-lg hover:bg-[#e76c0a] transition-colors"
            >
              Reset Password
            </button>
          </form>

          <p className="text-center mt-4 text-sm text-[#2f415677]">
            Back to{" "}
            <Link to="/login" className="text-[#FD7E14] hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
