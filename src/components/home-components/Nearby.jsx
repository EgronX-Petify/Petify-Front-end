import React from 'react'

const Nearby = () => {
  return (
      <div className="flex justify-evenly bg-[#F8F9FA] px-[70px] py-[30px] ">
        <div className="flex flex-col justify-center gap-4.5 px-[50px] w-[35%]">
          <p className="text-[#FD7E14] text-s font-bold">Petify</p>
          <h5 className="text-[#2F4156] font-bold text-3xl capitalize ">
            find nearby pet services
          </h5>
          <p className="text-[#2f415677]">
            Locate grooming salons, vet clinics, and pet-friendly spots around
            you in seconds.
          </p>
          <button className="flex w-fit px-5 py-2 align-middle rounded-[10px] bg-[#2F4156] text-[#F5EFED] font-semibold cursor-pointer">
            Search Now
          </button>
        </div>
        <div className="w-[400px] h-[400px] overflow-hidden flex items-center">
          <img
            src="src\public\home-media\pexels-lara-jameson-8828418.jpg"
            alt=""
            className="w-[400px] h-[400px]"
          />
        </div>
      </div>
  )
}

export default Nearby
