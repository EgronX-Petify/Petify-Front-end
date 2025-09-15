import React from "react";
import { useNavigate } from "react-router-dom";

const PetService = ({ service, setOpen }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full max-w-sm sm:max-w-xs md:max-w-sm rounded-2xl shadow-md hover:shadow-xl transition p-4 bg-[#F8F9FA] flex flex-col">
      <div className="w-full h-40 sm:h-44 md:h-40 overflow-hidden rounded-xl">
        <img
          src={service.image}
          alt={service.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mt-4 space-y-2 flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl font-semibold text-[#2F4156]">
          {service.name}
        </h3>

        <div className="flex items-center space-x-1">
          {Array.from({ length: 5 }, (_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 sm:h-5 sm:w-5 ${
                i < service.rating
                  ? "fill-[#FD7E14] text-[#FD7E14]"
                  : "text-gray-300"
              }`}
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 .587l3.668 7.57 8.332 1.151-6.064 5.893 1.516 8.285L12 18.897l-7.452 4.589 1.516-8.285L0 9.308l8.332-1.151z" />
            </svg>
          ))}
          <span className="text-xs sm:text-sm text-gray-600 ml-1">
            ({service.rating})
          </span>
        </div>

        <p className="text-[#2f415677] text-sm sm:text-base">
          {service.description}
        </p>
        <p className="text-[#2F4156] font-medium text-sm sm:text-base">
          {service.priceRange}
        </p>

        <button className="w-full mt-3 rounded-xl bg-[#417481] hover:bg-[#2F4156] text-white py-2 text-sm sm:text-base cursor-pointer"
        onClick={() => setOpen(true)}  >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default PetService;
