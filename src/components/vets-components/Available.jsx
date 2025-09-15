import React, { useState } from "react";
import Vet from "./Vet";
import { Link } from "react-router-dom";
import VetBook from "./VetBook";
import EmergencyCall from "./EmergencyCall";

const Available = ({ vets }) => {
  const [bookOpen, setBookOpen] = useState(false);
  const [emergencyOpen, setEmergencyOpen] = useState(false);
  return (
    <div className="flex flex-col gap-4 items-center py-10 px-4">
      <div className="text-[#2F4156] font-bold text-3xl capitalize text-center">
        available vets
      </div>
      <div className="flex gap-5 flex-wrap justify-center bg-[#F8F9FA] w-full md:w-[80%] rounded-[15px] p-5 md:p-7">
        {vets.map((vet, index) => (
          <Vet key={index} vet={vet} />
        ))}
      </div>
      <button
        className="capitalize flex w-fit px-5 py-4 align-middle rounded-[15px] bg-[#417481] text-[#F5EFED] font-semibold cursor-pointer duration-300 hover:bg-[#2F4156]"
        onClick={() => setBookOpen(true)}
      >
        book an apponitment
      </button>

      <button
        className="capitalize flex w-fit px-5 py-4 align-middle rounded-[15px] bg-[#ff383be0] text-[#F5EFED] font-semibold cursor-pointer duration-300 hover:bg-[#ff383b]"
        onClick={() => setEmergencyOpen(true)}
      >
        Emergency
      </button>
      <VetBook open={bookOpen} setOpen={setBookOpen} />
      <EmergencyCall open={emergencyOpen} setOpen={setEmergencyOpen} />
    </div>
  );
};

export default Available;
