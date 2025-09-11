import React from "react";
import { useNavigate } from "react-router-dom";

const VetBook = () => {
  const vets = [
    {
      name: "Aleet Vet Center",
      photo: "src/public/vets-media/Screenshot_25.png",
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
      name: "British Animal Hospital",
      photo: "src/public/vets-media/pexels-annetnavi-792775.jpg",
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
      name: "Aleet Vet Center",
      photo: "src/public/vets-media/Screenshot_25.png",
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
      name: "British Animal Hospital",
      photo: "src/public/vets-media/pexels-annetnavi-792775.jpg",
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
      name: "Aleet Vet Center",
      photo: "src/public/vets-media/Screenshot_25.png",
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
      name: "British Animal Hospital",
      photo: "src/public/vets-media/pexels-annetnavi-792775.jpg",
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
  ];
  const firstVetAvailability = vets[0].availability.map((dayObj) => {
    return {
      day: dayObj.day,
      times: dayObj.times,
    };
  });

  const firstDayTimes = firstVetAvailability[0].times;

  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-7 items-center bg-[#F8F9FA] py-10 w-full md:w-[70%] m-auto px-4">
      <div className="flex flex-col justify-center items-center w-full md:w-[90%] bg-white py-3 px-4 rounded-[5px] text-center">
        <p className="text-[#2F4156] font-semibold text-2xl md:text-3xl">
          Select your visit date & Time
        </p>
        <p className="text-[#2F4156] font-light text-sm md:text-base">
          You can choose the date and time from the available vet's schedule
        </p>
      </div>

      <div className="text-[#2F4156] font-semibold flex flex-col items-start md:w-[80%] text-lg md:text-xl capitalize">
        available day:
      </div>
      <div className="flex gap-3 md:gap-5 flex-wrap justify-center md:justify-start w-full md:w-[60%]">
        {firstVetAvailability.map((vet, index) => (
          <div
            key={index}
            className="text-[#FD7E14] bg-gray-200 capitalize p-3 md:p-5 rounded-[15px] w-[110px] md:w-[130px] flex flex-col items-center cursor-pointer duration-300 hover:bg-[#417481] hover:text-[#F5EFED]"
          >
            {vet.day}
          </div>
        ))}
      </div>
      <div className="text-[#2F4156] font-semibold  flex flex-col items-start md:w-[80%] text-lg md:text-xl capitalize">
        available time:
      </div>
      <div className="flex gap-3 md:gap-5 flex-wrap justify-center md:justify-start w-full md:w-[60%]">
        {firstDayTimes.map((vet, index) => (
          <div
            key={index}
            className="text-[#FD7E14] bg-gray-200 capitalize p-3 md:p-5 rounded-[15px] w-[110px] md:w-[130px] flex flex-col items-center cursor-pointer duration-300 hover:bg-[#417481] hover:text-[#F5EFED]"
          >
            {vet}
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-center md:justify-end gap-3 w-full md:w-[80%] mt-5">
        <button
          className="capitalize w-full md:w-fit px-5 py-3 md:py-4 rounded-[15px] bg-[#ff383be0] text-[#F5EFED] cursor-pointer duration-300 hover:bg-[#FF383C]"
          onClick={() => navigate(-1)}
        >
          Cancel
        </button>
        <button
          className="capitalize w-full md:w-fit px-5 py-3 md:py-4 rounded-[15px] bg-[#417481] text-[#F5EFED] cursor-pointer duration-300 hover:bg-[#2F4156]"
          onClick={() => {
            alert("done");
            navigate(-1);
          }}
        >
          confirm
        </button>
      </div>
    </div>
  );
};

export default VetBook;
