import React from "react";
import SignNavbar from "../components/SignNavbar";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <>
      <SignNavbar />
      <div className="my-[30px] flex flex-col md:flex-row justify-evenly items-center min-h-[600px] px-[20px] md:px-[30px] gap-8">
        <div className="flex flex-grow items-center justify-start h-full bg-gray-50 shadow-lg p-2 rounded-lg w-full md:w-auto">
          <div className="flex flex-col justify-center w-full p-6 md:p-8 max-w-md min-h-[400px] md:min-h-[600px]">
            <h2 className="flex items-start text-3xl md:text-5xl font-bold mb-2 text-center text-[#FD7E14]">
              Sign In
            </h2>
            <p className="text-[#2f415677] mb-3 text-sm md:text-base">
              Please login to continue to your account
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-[#2F4156] mb-2" htmlFor="username">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your username"
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
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border-[1px] border-solid border-[#2f415677] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FD7E14] focus:border-[#FD7E14]"
                />
              </div>

              <Link to="/">
                <button
                  type="submit"
                  className="cursor-pointer w-full bg-[#FD7E14] text-white py-2 rounded-lg hover:bg-[#e76c0a] transition-colors"
                >
                  Sign In
                </button>
              </Link>
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
            src="src/public/logo55.png"
            alt=""
            className="w-full h-full object-contain md:object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default LoginForm;
