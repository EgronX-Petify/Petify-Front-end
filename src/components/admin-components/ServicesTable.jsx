import React from "react";

const dummyServices = [
  { id: 1, title: "Vet Consultation", rate: 4.8 },
  { id: 2, title: "Pet Grooming", rate: 4.5 },
];

const ServicesTable = () => {
  const handleRemove = (id) => {
    console.log("Remove service", id);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Services Management</h2>
      {!dummyServices.length ? (
        <p className="text-xl font-semibold text-[#2F4156] capitalize">
          no services
        </p>
      ) : (
        <div className="grid gap-4">
          {dummyServices.map((service) => (
            <div
              key={service.id}
              className="flex justify-between items-center bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-200"
            >
              <div>
                <h3 className="font-semibold text-[#2F4156]">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500">Rate: ⭐ {service.rate}</p>
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
