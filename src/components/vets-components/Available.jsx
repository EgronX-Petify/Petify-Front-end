import React, { useContext, useState } from "react";
import Vet from "./Vet";
import EmergencyCall from "./EmergencyCall";
import UseVets from "../../hooks/UseVets";

const PAGECOUNT = 6;

const Available = () => {
  const vets = UseVets();

 
  const [emergencyOpen, setEmergencyOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const vetsPerPage = PAGECOUNT;

  const filteredVets = vets.filter((vet) =>
    vet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLast = currentPage * vetsPerPage;
  const indexOfFirst = indexOfLast - vetsPerPage;
  const currentVets = filteredVets.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredVets.length / vetsPerPage);

  return (
    <div className="flex flex-col gap-4 items-center py-10 px-4">
      <div className="text-[#2F4156] font-bold text-3xl capitalize text-center">
        Available Vets
      </div>

      <label className="input w-full md:w-[60%] mb-5 outline-none focus:ring-2 focus:ring-[#FD7E14] flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          placeholder="Search vets..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="flex-1 outline-none"
        />
      </label>

      <div className="flex gap-5 flex-wrap justify-center bg-[#F8F9FA] w-full md:w-[80%] rounded-[15px] p-5 md:p-7">
        {currentVets.length > 0 ? (
          currentVets.map((vet, index) => (
            <Vet key={index} vet={vet}  />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 min-h-14">
            No vets found
          </p>
        )}

        <div className="flex flex-col-reverse md:flex-row md:w-[80%] gap-3 md:justify-evenly items-center">
          <button
            className="h-fit capitalize flex w-fit px-5 py-4 align-middle rounded-[15px] bg-[#ff383be0] text-[#F5EFED] font-semibold cursor-pointer duration-300 hover:bg-[#ff383b]"
            onClick={() => setEmergencyOpen(true)}
          >
            Emergency
          </button>
        </div>
      </div>

      {filteredVets.length > 0 && (
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="cursor-pointer px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span className="text-[#2F4156]">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="cursor-pointer px-4 py-2 bg-[#FD7E14] text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
      <EmergencyCall open={emergencyOpen} setOpen={setEmergencyOpen} />
    </div>
  );
};

export default Available;
