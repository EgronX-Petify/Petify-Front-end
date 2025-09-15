import React from "react";
import { useNavigate } from "react-router-dom";

const VetBook = ({ open, setOpen }) => {
  const vets = [
    {
      name: "Aleet Vet Center",
      photo: "src/public/vets-media/Screenshot_25.png",
      clinicAddress: "El Nozha, Egypt",
      rate: 4.6,
      availability: [
        { day: "Monday", times: ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"] },
        { day: "Tuesday", times: ["9:00 AM", "11:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"] },
        { day: "Wednesday", times: ["9:00 AM", "12:00 PM", "2:00 PM", "6:00 PM"] },
        { day: "Thursday", times: ["10:00 AM", "12:00 PM", "3:00 PM", "5:00 PM", "8:00 PM"] },
        { day: "Friday", times: ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"] },
        { day: "Saturday", times: ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM"] },
        { day: "Sunday", times: ["10:00 AM", "12:00 PM", "2:00 PM", "6:00 PM"] },
      ],
    },
  ];

  const firstVetAvailability = vets[0].availability;
  const firstDayTimes = firstVetAvailability[0].times;

  const navigate = useNavigate();

  return (
    open && (
      <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 px-3">
        <div className="flex flex-col gap-6 items-center bg-white py-6 px-5 rounded-2xl w-full max-w-lg md:max-w-3xl max-h-[90vh] overflow-y-auto shadow-lg">
          {/* Title */}
          <div className="flex flex-col items-center text-center px-3">
            <h2 className="text-[#2F4156] font-bold text-xl md:text-2xl">
              Select Your Visit Date & Time
            </h2>
            <p className="text-[#2f415699] mt-1 text-sm md:text-base">
              Choose a date and time from the available vet's schedule
            </p>
          </div>

          {/* Days */}
          <div className="w-full px-3">
            <h3 className="text-[#2F4156] font-semibold text-base md:text-xl mb-3">
              Available Days
            </h3>
            <div className="flex gap-3 flex-wrap justify-center md:justify-start">
              {firstVetAvailability.map((vet, index) => (
                <button
                  key={index}
                  className="text-[#FD7E14] bg-gray-100 capitalize px-4 py-2 rounded-xl text-sm md:text-lg shadow-sm hover:bg-[#417481] hover:text-white transition"
                >
                  {vet.day}
                </button>
              ))}
            </div>
          </div>

          {/* Times */}
          <div className="w-full px-3">
            <h3 className="text-[#2F4156] font-semibold text-base md:text-xl mb-3">
              Available Times
            </h3>
            <div className="flex gap-3 flex-wrap justify-center md:justify-start">
              {firstDayTimes.map((time, index) => (
                <button
                  key={index}
                  className="text-[#FD7E14] bg-gray-100 capitalize px-4 py-2 rounded-xl text-sm md:text-lg  shadow-sm hover:bg-[#417481] hover:text-white transition"
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col-reverse md:flex-row justify-center md:justify-end gap-3 w-full px-3">
            <button
              className="capitalize w-full md:w-fit px-5 py-3 rounded-xl bg-red-500 text-white font-medium hover:bg-red-600 transition"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
            <button
              className="capitalize w-full md:w-fit px-5 py-3 rounded-xl bg-[#417481] text-white font-medium hover:bg-[#2F4156] transition"
              onClick={() => {
                alert("done");
                setOpen(false);
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default VetBook;
