import React from "react";

const Vet = ({ vet }) => {
  return (
    <div className="group w-full sm:w-[300px] md:w-[400px] flex flex-col sm:flex-row p-4 rounded-[10px] gap-5 bg-[#F3F3F4] cursor-pointer duration-300 ease-in-out hover:bg-[#417481] hover:scale-105">
      <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] overflow-hidden flex items-center rounded-full mx-auto sm:mx-0">
        <img src={vet.photo} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-2 sm:gap-4 justify-center items-center sm:items-start text-center sm:text-left">
        <p className="text-[#FD7E14] group-hover:text-white">{vet.name}</p>
        <p className="text-[#2f415677] group-hover:text-[#F5EFED]">{vet.clinicAddress}</p>
        <p className="text-[#2f415677] group-hover:text-[#FD7E14]">{vet.rate}</p>
      </div>
    </div>
  );
};

export default Vet;
