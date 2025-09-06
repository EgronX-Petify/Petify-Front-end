import React from "react";

const VetHero = () => {
  return (
    <div className="flex justify-center bg-[#F8F9FA] px-[70px]">
      <div className="flex flex-col justify-center gap-5 px-[50px] w-[50%]">
        <p className="text-[#FD7E14] text-s font-bold">Petify</p>
        <h5 className="text-[#2F4156] font-bold text-5xl capitalize">
          Find trusted veterinarians near you
        </h5>
        <p className="text-[#2f415677]">
          Easily browse and book appointments with top-rated vets. Check their
          clinics, ratings, and available hours — all in one place, so your pets
          get the care they deserve.
        </p>
      </div>

      <div className="w-[600px] h-[500px] overflow-hidden flex items-center">
        <img
          src="src/public/image.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default VetHero;
