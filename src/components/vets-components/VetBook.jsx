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
        <button className="capitalize w-full md:w-fit px-5 py-3 md:py-4 rounded-[15px] bg-[#ff383be0] text-[#F5EFED] cursor-pointer duration-300 hover:bg-[#FF383C]">
          Cancel
        </button>
        <button className="capitalize w-full md:w-fit px-5 py-3 md:py-4 rounded-[15px] bg-[#417481] text-[#F5EFED] cursor-pointer duration-300 hover:bg-[#2F4156]">
          confirm
        </button>
      </div>
    </div>
  );
};

export default VetBook;
