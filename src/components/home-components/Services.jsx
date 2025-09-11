import React from "react";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      id: "shop",
      name: "Pet Products",
      photo: "src/public/home-media/pexels-misolo-cosmetic-2588316-4841264.jpg",
    },
    {
      id: "beginner-guide",
      name: "Beginner Guide",
      photo: "src/public/home-media/pexels-arina-krasnikova-7725619.jpg",
    },
    {
      id: "vets",
      name: "Book Vet Appointments",
      photo: "src/public/home-media/pexels-tahir-x-lf-2153788153-33394308.jpg",
    },
    {
      id: "services",
      name: "Book Service",
      photo: "src/public/home-media/pexels-goochie-poochie-19145890.jpg",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-10 py-10 px-5">
      <div className="capitalize text-2xl md:text-3xl font-semibold text-[#2F4156] text-center">
        our service
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
        {services.map((service, index) => (
          <Service service={service} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
