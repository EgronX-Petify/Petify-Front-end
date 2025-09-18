import React, { Children, createContext, useState } from "react";

const VetsContext = createContext();
const VetsProvider = ({ children }) => {
  const [vets, setVets] = useState([
    {
      id: 1,
      name: "Aleet Vet Center",
      photo: "/public/vets-media/Screenshot_25.png",
      clinicAddress: "El Nozha, Egypt",
      rate: 4.6,
      availability: [
        {
          day: "Monday",
          times: [
            "9:00 AM",
            "10:00 AM",
            "11:00 AM",
            "1:00 PM",
            "3:00 PM",
            "5:00 PM",
          ],
        },
        {
          day: "Tuesday",
          times: ["9:00 AM", "11:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
        },
        {
          day: "Wednesday",
          times: ["9:00 AM", "12:00 PM", "2:00 PM", "6:00 PM"],
        },
        {
          day: "Thursday",
          times: ["10:00 AM", "12:00 PM", "3:00 PM", "5:00 PM", "8:00 PM"],
        },
        {
          day: "Friday",
          times: ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"],
        },
        {
          day: "Saturday",
          times: ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM"],
        },
        {
          day: "Sunday",
          times: ["10:00 AM", "12:00 PM", "2:00 PM", "6:00 PM"],
        },
      ],
    },
    {
      id: 2,
      name: "British Animal Hospital",
      photo: "/public/vets-media/pexels-annetnavi-792775.jpg",
      clinicAddress: "Zamalek, Egypt",
      rate: 5.0,
      availability: [
        {
          day: "Monday",
          times: [
            "9:00 AM",
            "10:00 AM",
            "12:00 PM",
            "3:00 PM",
            "6:00 PM",
            "8:00 PM",
          ],
        },
        {
          day: "Tuesday",
          times: ["9:00 AM", "11:00 AM", "2:00 PM", "5:00 PM", "7:00 PM"],
        },
        {
          day: "Wednesday",
          times: ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM"],
        },
        {
          day: "Thursday",
          times: [
            "9:00 AM",
            "11:00 AM",
            "1:00 PM",
            "3:00 PM",
            "5:00 PM",
            "7:00 PM",
          ],
        },
        { day: "Friday", times: ["Closed"] },
        {
          day: "Saturday",
          times: ["10:00 AM", "12:00 PM", "2:00 PM", "5:00 PM"],
        },
        { day: "Sunday", times: ["Closed"] },
      ],
    },
    {
      id: 3,
      name: "Aleet Vet Center",
      photo: "/public/vets-media/Screenshot_25.png",
      clinicAddress: "El Nozha, Egypt",
      rate: 4.6,
      availability: [
        {
          day: "Monday",
          times: [
            "9:00 AM",
            "10:00 AM",
            "11:00 AM",
            "1:00 PM",
            "3:00 PM",
            "5:00 PM",
          ],
        },
        {
          day: "Tuesday",
          times: ["9:00 AM", "11:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
        },
        {
          day: "Wednesday",
          times: ["9:00 AM", "12:00 PM", "2:00 PM", "6:00 PM"],
        },
        {
          day: "Thursday",
          times: ["10:00 AM", "12:00 PM", "3:00 PM", "5:00 PM", "8:00 PM"],
        },
        {
          day: "Friday",
          times: ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"],
        },
        {
          day: "Saturday",
          times: ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM"],
        },
        {
          day: "Sunday",
          times: ["10:00 AM", "12:00 PM", "2:00 PM", "6:00 PM"],
        },
      ],
    },
    {
      id: 4,
      name: "British Animal Hospital",
      photo: "/public/vets-media/pexels-annetnavi-792775.jpg",
      clinicAddress: "Zamalek, Egypt",
      rate: 5.0,
      availability: [
        {
          day: "Monday",
          times: [
            "9:00 AM",
            "10:00 AM",
            "12:00 PM",
            "3:00 PM",
            "6:00 PM",
            "8:00 PM",
          ],
        },
        {
          day: "Tuesday",
          times: ["9:00 AM", "11:00 AM", "2:00 PM", "5:00 PM", "7:00 PM"],
        },
        {
          day: "Wednesday",
          times: ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM"],
        },
        {
          day: "Thursday",
          times: [
            "9:00 AM",
            "11:00 AM",
            "1:00 PM",
            "3:00 PM",
            "5:00 PM",
            "7:00 PM",
          ],
        },
        { day: "Friday", times: ["Closed"] },
        {
          day: "Saturday",
          times: ["10:00 AM", "12:00 PM", "2:00 PM", "5:00 PM"],
        },
        { day: "Sunday", times: ["Closed"] },
      ],
    },
    {
      id: 5,
      name: "Aleet Vet Center",
      photo: "/public/vets-media/Screenshot_25.png",
      clinicAddress: "El Nozha, Egypt",
      rate: 4.6,
      availability: [
        {
          day: "Monday",
          times: [
            "9:00 AM",
            "10:00 AM",
            "11:00 AM",
            "1:00 PM",
            "3:00 PM",
            "5:00 PM",
          ],
        },
        {
          day: "Tuesday",
          times: ["9:00 AM", "11:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
        },
        {
          day: "Wednesday",
          times: ["9:00 AM", "12:00 PM", "2:00 PM", "6:00 PM"],
        },
        {
          day: "Thursday",
          times: ["10:00 AM", "12:00 PM", "3:00 PM", "5:00 PM", "8:00 PM"],
        },
        {
          day: "Friday",
          times: ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"],
        },
        {
          day: "Saturday",
          times: ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM"],
        },
        {
          day: "Sunday",
          times: ["10:00 AM", "12:00 PM", "2:00 PM", "6:00 PM"],
        },
      ],
    },
    {
      id: 6,
      name: "British Animal Hospital",
      photo: "/public/vets-media/pexels-annetnavi-792775.jpg",
      clinicAddress: "Zamalek, Egypt",
      rate: 5.0,
      availability: [
        {
          day: "Monday",
          times: [
            "9:00 AM",
            "10:00 AM",
            "12:00 PM",
            "3:00 PM",
            "6:00 PM",
            "8:00 PM",
          ],
        },
        {
          day: "Tuesday",
          times: ["9:00 AM", "11:00 AM", "2:00 PM", "5:00 PM", "7:00 PM"],
        },
        {
          day: "Wednesday",
          times: ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM"],
        },
        {
          day: "Thursday",
          times: [
            "9:00 AM",
            "11:00 AM",
            "1:00 PM",
            "3:00 PM",
            "5:00 PM",
            "7:00 PM",
          ],
        },
        { day: "Friday", times: ["Closed"] },
        {
          day: "Saturday",
          times: ["10:00 AM", "12:00 PM", "2:00 PM", "5:00 PM"],
        },
        { day: "Sunday", times: ["Closed"] },
      ],
    },
  ]);

  const [selectedVet, setSelectedVet] = useState(null);

  return (
    <VetsContext.Provider
      value={{ vets, setVets, selectedVet, setSelectedVet }}
    >
      {children}
    </VetsContext.Provider>
  );
};

export default VetsProvider;
export { VetsContext };
