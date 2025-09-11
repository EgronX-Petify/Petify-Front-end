import React from "react";
import logo from "../public/logo55.png";

const Signup = () => {
  return (
    <>
      <div className="my-[30px] flex flex-col md:flex-row justify-evenly items-center min-h-[600px] px-[20px] md:px-[30px] gap-8">
        <div className="flex flex-grow items-center justify-start h-full bg-gray-50 shadow-lg p-2 rounded-lg w-full md:w-auto">
          <div className="flex flex-col justify-center w-full p-6 md:p-8 max-w-md min-h-[400px] md:min-h-[600px]">
            <h2 className="flex items-start text-3xl md:text-5xl font-bold mb-2 text-center text-[#FD7E14]">
              Sign Up
            </h2>
            <p className="text-[#2f415677] mb-3 text-sm md:text-base">
              Sign up to enjoy the features of Petify
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
                  className="w-full px-4 py-2 border border-[#2f415677] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FD7E14] focus:border-[#FD7E14]"
                />
              </div>

              <div>
                <label className="block text-[#2F4156] mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-[#2f415677] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FD7E14] focus:border-[#FD7E14]"
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
                  className="w-full px-4 py-2 border border-[#2f415677] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FD7E14] focus:border-[#FD7E14]"
                />
              </div>

              <div>
                <label className="block text-[#2F4156] mb-2" htmlFor="type">
                  Pet Type
                </label>
                <input
                  type="text"
                  id="type"
                  placeholder="Enter your pet's type"
                  className="w-full px-4 py-2 border border-[#2f415677] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FD7E14] focus:border-[#FD7E14]"
                />
              </div>

              <button
                type="submit"
                className="cursor-pointer w-full bg-[#FD7E14] text-white py-2 rounded-lg hover:bg-[#e76c0a] transition-colors"
              >
                Sign Up
              </button>
            </form>

            <p className="text-center text-[#2f415677] mt-4 text-sm md:text-base">
              Already have an account?{" "}
              <a
                href="#"
                className="font-semibold text-[#FD7E14] border-b-[2px] pb-[1px] px-1"
              >
                Sign In
              </a>
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
    </>
  );
};

export default Signup;
