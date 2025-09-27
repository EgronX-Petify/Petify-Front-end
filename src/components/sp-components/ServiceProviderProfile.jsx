import React, { useContext, useState } from "react";
import Rating from "../Rating";
import ChangePassword from "../profile-components/ChangePassword";
import EditServiceProviderInfo from "./EditServiceProviderInfo";
import { SPContext } from "../../contexts/SPContext";
import LoadingSpinner from "../LoadingSpinner";
import Return from "./Return";

const ServiceProviderProfile = () => {
  // Example service provider object
  const { serviceProvider } = useContext(SPContext);

  const [open, setOpen] = useState(false);

  const [changePassOpen, setChangePassOpen] = useState(false);

  return !serviceProvider ? (
    <div className="w-full mx-auto my-10 rounded-2xl p-6 flex flex-col items-center gap-8 ">
      <LoadingSpinner text="Loading..." />
    </div>
  ) : (
    <div className="max-w-[95%] md:w-[90%] mx-auto flex flex-col ">
      <Return showLabel={true} />
      <div className="max-w-[95%] md:w-[90%] mx-auto mb-5 md:my-10 rounded-2xl p-6 flex flex-col items-center gap-8 ">
        {/* Provider Photo */}
        <div className="w-36 h-36 md:w-[300px] md:h-48 flex-shrink-0">
          <img
            src={serviceProvider.photo}
            alt={serviceProvider.username}
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Provider Info */}
        <div className="flex-1 w-full">
          <h2 className="capitalize text-xl md:text-2xl font-semibold text-[#2F4156] mb-4 text-center md:text-left">
            {serviceProvider.username} Profile
          </h2>

          {/* Basic Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#2f4156b0]">
            <p className="bg-white p-2 rounded-lg text-sm md:text-base">
              <span className="font-medium text-[#2F4156]">Username:</span>{" "}
              {serviceProvider.username}
            </p>
            <div className="bg-white p-2 rounded-lg text-sm md:text-base ">
              <Rating value={serviceProvider.rate} />
            </div>
            <p className="bg-white p-2 rounded-lg text-sm md:text-base col-span-1 sm:col-span-2">
              <span className="font-medium text-[#2F4156]">Description:</span>{" "}
              {serviceProvider.description}
            </p>
            <p className="bg-white p-2 rounded-lg text-sm md:text-base">
              <span className="font-medium text-[#2F4156]">Address:</span>{" "}
              {serviceProvider.address}
            </p>
            <p className="bg-white p-2 rounded-lg text-sm md:text-base">
              <span className="font-medium text-[#2F4156]">Phone:</span>{" "}
              {serviceProvider.phone}
            </p>
            <p className="bg-white p-2 rounded-lg text-sm md:text-base">
              <span className="font-medium text-[#2F4156]">Email:</span>{" "}
              {serviceProvider.email}
            </p>
            <div className="bg-white p-2 rounded-lg flex justify-between items-center text-sm md:text-base">
              <span>
                <span className="font-medium text-[#2F4156]">
                  Password:
                </span>{" "}
              </span>
              <button
                className="text-[#FD7E14] font-medium hover:underline"
                onClick={() => setChangePassOpen(true)}
              >
                Reset
              </button>
            </div>
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
        <ChangePassword open={changePassOpen} setOpen={setChangePassOpen} />
        <EditServiceProviderInfo
          open={open}
          setOpen={setOpen}
          serviceProvider={serviceProvider}
        />
      </div>{" "}
    </div>
  );
};

export default ServiceProviderProfile;
