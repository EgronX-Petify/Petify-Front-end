import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Rating from "../Rating";
import { AppointmentsContext } from "../../contexts/AppointmentsContext";
import UseSelectedAppointment from "../../hooks/UseSelectedAppointment";
import toast, { Toaster } from "react-hot-toast";
import UseLoggedUser from "../../hooks/UseLoggedUser";

const PetService = ({ service, setOpen }) => {
  const isLogged = UseLoggedUser();
  const { setSelectedAppointment } = useContext(AppointmentsContext);
  const selectedAppointment = UseSelectedAppointment();

  function handleBook() {
    !isLogged && toast.error("Login First!");
    const { id, name, description, availability } = service;
    const neededData = { id, name, description, availability };
    setSelectedAppointment(neededData);
    setOpen(true);
  }

  return (
    <div className="w-full max-w-sm sm:max-w-xs md:max-w-sm rounded-2xl shadow-md hover:shadow-xl transition p-4 bg-[#F8F9FA] flex flex-col">
      <Link
        to={`/services/view-service/${service.id}`}
        className="flex-1 flex flex-col"
      >
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
          <Rating value={service.rating} />
          <p className="text-[#2f415677] text-sm sm:text-base flex-1">
            {service.description}
          </p>
          <p className="text-[#2F4156] font-medium text-sm sm:text-base">
            {service.priceRange}
          </p>
        </div>
      </Link>

      <button
        className="w-full mt-3 rounded-xl bg-[#417481] hover:bg-[#2F4156] text-white py-2 text-sm sm:text-base cursor-pointer"
        onClick={() => handleBook()}
      >
        Book Now
      </button>
       <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default PetService;
