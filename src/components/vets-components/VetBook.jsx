import React from "react";

const VetBook = ({ vets }) => {
  const firstVetAvailability = vets[0].availability.map((dayObj) => {
    return {
      day: dayObj.day,
      times: dayObj.times,
    };
  });
  const firstDayTimes = firstVetAvailability[0].times;
  return (
    <div className="flex flex-col gap-7 items-center bg-[#F8F9FA] py-10 w-[70%] m-auto">
      <div className="flex flex-col justify-center items-center w-[90%] bg-white py-1 rounded-[5px]">
        <p className="text-[#2F4156] font-semibold text-3xl">
          Select your visit date & Time
        </p>
        <p className="text-[#2F4156] font-light">
          You can choose the date and time from the available vet's schedule
        </p>
      </div>

      <div className="text-[#2F4156] font-semibold text-xl capitalize">
        available day:
      </div>

      <div className="flex gap-5 flex-wrap justify-start  w-[60%] rounded-[15px]">
        {firstVetAvailability.map((vet, index) => (
          <div
            className="text-[#FD7E14] bg-gray-200 capitalize p-5 rounded-[15px] w-[130px] flex flex-col items-center cursor-pointer duration-300  hover:bg-[#417481] hover:text-[#F5EFED]"
            key={index}
          >
            {vet.day}
          </div>
        ))}
      </div>

      <div className="text-[#2F4156] font-semibold text-xl capitalize">
        available time:
      </div>

      <div className="flex gap-5 flex-wrap justify-start  w-[60%] rounded-[15px]">
        {firstDayTimes.map((vet, index) => (
          <div
            className="text-[#FD7E14] bg-gray-200 capitalize p-5 rounded-[15px] w-[130px] flex flex-col items-center cursor-pointer duration-300  hover:bg-[#417481] hover:text-[#F5EFED]"
            key={index}
          >
            {vet}
          </div>
        ))}
      </div>

      <div className="flex justify-end gap-3 w-[80%]">
        <button className="capitalize flex  w-fit px-5 py-4 align-middle rounded-[15px] bg-[#ff383be0] text-[#F5EFED] cursor-pointer duration-300  hover:bg-[#FF383C]">
          Cancel
        </button>
        <button className="capitalize flex  w-fit px-5 py-4 align-middle rounded-[15px] bg-[#417481] text-[#F5EFED]  cursor-pointer duration-300  hover:bg-[#2F4156]">
          confirm
        </button>
      </div>
    </div>
  );
};

export default VetBook;
