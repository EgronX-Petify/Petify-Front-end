import React, { useContext } from "react";
import UseServices from "../../hooks/UseServices";
import { ServicesContext } from "../../contexts/ServicesContext";
import LoadingSpinner from "../LoadingSpinner";
import Rating from "../Rating";
import toast from "react-hot-toast";

const ServicesTable = () => {
  const services = UseServices();
  const { setServices, loading } = useContext(ServicesContext);
  const handleRemove = (id) => {
    swal({
      text: "Are you sure you want to remove this product?",
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
    }).then((willRemove) => {
      if (willRemove) {
        setServices(services?.filter((s) => s.id !== id));
        toast("Removed", {
          icon: "✅",
          duration: "300",
        });
      }
    });
  };

  console.log("services::" ,services);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold text-[#2F4156] mb-4">
        Services Management
      </h2>
      {loading? <LoadingSpinner text="Loading Services..." /> :
      !services?.length ? (
        <p className="text-[#2F415677] capitalize">
          No Services Found
        </p>
      ) : (
        <div className="grid gap-4">
          {services?.map((service) => (
            <div
              key={service.id}
              className="flex justify-between items-center bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-200"
            >
              <div>
                <h3 className="font-semibold text-[#2F4156]">{service.name}</h3>
                <Rating value={service.rating} />
              </div>

              <button
                className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600"
                onClick={() => handleRemove(service.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServicesTable;
