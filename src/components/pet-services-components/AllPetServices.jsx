import React from "react";
import PetServices from "../../pages/PetServices";
import PetService from "./PetService";
import ServiceBook from "./ServiceBook";

const AllPetServices = () => {
  const petServices = [
    {
      id: 1,
      name: "Veterinary Visits",
      description: "Comprehensive check-ups and treatments for your pet.",
      image: "src/public/pexels-tima-miroshnichenko-6131529.jpg",
      priceRange: "300 - 800 EGP",
      duration: "30 - 60 minutes",
      availability: ["Daily except Friday"],
      rating: 5,
    },
    {
      id: 2,
      name: "Grooming",
      description: "Full-service grooming including bath, haircut, and more.",
      image: "src/public/pexels-tima-miroshnichenko-6131529.jpg",
      priceRange: "200 - 600 EGP",
      duration: "45 - 90 minutes",
      availability: ["Saturday", "Sunday", "Monday", "Wednesday"],
      rating: 4,
    },
    {
      id: 3,
      name: "Training",
      description:
        "Professional pet training sessions to improve behavior, obedience, and social skills.",
      image: "src/public/pexels-tima-miroshnichenko-6131529.jpg",
      priceRange: "400 - 1000 EGP per session",
      duration: "60 minutes",
      availability: ["Sunday", "Tuesday", "Thursday"],
      rating: 3,
    },
    {
      id: 4,
      name: "Boarding",
      description:
        "Safe and comfortable boarding facilities where your pets are cared for while you’re away.",
      image: "src/public/pexels-tima-miroshnichenko-6131529.jpg",
      priceRange: "150 - 400 EGP per night",
      duration: "Overnight or multiple days",
      availability: ["All week"],
      rating: 5,
    },
  ];

  return (
    <>
      <div className="flex justify-evenly flex-wrap gap-4 bg-white w-[80%] m-auto p-7 rounded-xl my-7">
        {petServices.map((service, id) => (
          <PetService service={service} key={id} />
        ))}
      </div>
      <ServiceBook />
    </>
  );
};

export default AllPetServices;
