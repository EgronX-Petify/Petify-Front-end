import React, { use, useState } from "react";
import { Link } from "react-router-dom";
import EditUserInfo from "./EditUserInfo";
import toast, { Toaster } from "react-hot-toast";
import swal from "sweetalert";
import UseLoggedUser from "../../hooks/UseLoggedUser";
import LoadingSpinner from "../LoadingSpinner";

const UserInfo = () => {
  const user = UseLoggedUser();

  const handleResetPassword = () => {
    swal({
      text: "Are you sure you want to reset your password?",
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
    }).then((willDelete) => {
      if (willDelete) {
        // reset logic api
        toast.success("Reset Link Sent To Your Email");
      }
    });
  };

  const [open, setOpen] = useState(false);

  return !user ? (
    <LoadingSpinner text="Loading..." />
  ) : (
    <div className="max-w-[95%] md:max-w-[90%] mx-auto my-10 bg-[#F8F9FA] shadow-lg rounded-2xl p-6 flex flex-col md:flex-row items-center gap-8">
      {/* User Photo */}
      <div className="w-36 h-36 md:w-48 md:h-48 flex-shrink-0">
        <img
          src={user.photo}
          alt={user.username}
          className="w-full h-full object-cover rounded-full shadow-md"
        />
      </div>

      {/* User Info */}
      <div className="flex-1 w-full">
        <h2 className="capitalize text-xl md:text-2xl font-semibold text-[#2F4156] mb-4 text-center md:text-left">
          {user.username} profile
        </h2>

        {/* Basic Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#2f4156b0]">
          <p className="bg-white p-2 rounded-lg text-sm md:text-base">
            <span className="font-medium text-[#2F4156]">Username:</span>{" "}
            {user.username}
          </p>
          <p className="bg-white p-2 rounded-lg text-sm md:text-base">
            <span className="font-medium text-[#2F4156]">Email:</span>{" "}
            {user.email}
          </p>
          <p className="bg-white p-2 rounded-lg text-sm md:text-base">
            <span className="font-medium text-[#2F4156]">Phone Number:</span>{" "}
            {user.phone}
          </p>
          <div className="bg-white p-2 rounded-lg flex justify-between items-center text-sm md:text-base ">
            <span className="font-medium text-[#2F4156]">Password:</span>
            <button
              onClick={handleResetPassword}
              className="text-[#FD7E14] font-medium hover:underline"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Pets List */}
        <div className="mt-4">
          <h3 className="font-medium text-[#2F4156]">Pets</h3>
          <ul className="list-disc list-inside text-[#2f4156b0] mt-1 bg-white p-2 rounded-lg text-sm md:text-base">
            {user?.pets && user.pets.length > 0 ? (
              user.pets.map((pet, index) => (
                <li key={index}>
                  {pet.name} - {pet.species}
                </li>
              ))
            ) : (
              <li className="text-gray-400 italic">No pets added</li>
            )}
          </ul>
        </div>

        {/* Edit Profile Button */}
        <div className="mt-6 flex justify-center md:justify-end">
          <button
            className="cursor-pointer px-5 py-2 rounded-lg bg-[#FD7E14] text-white hover:bg-[#e86f0d] transition shadow-md"
            onClick={() => setOpen(true)}
          >
            Edit Profile
          </button>
        </div>
      </div>
      <EditUserInfo open={open} setOpen={setOpen} />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default UserInfo;
