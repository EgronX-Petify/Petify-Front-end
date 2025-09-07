import React from "react";

const BeginnerHero = () => {
  return (
    <div>
      <div className="flex justify-center bg-[#F8F9FA] px-[70px]">
        <div className="flex flex-col justify-center gap-5 px-[50px] w-[50%]">
          <p className="text-[#FD7E14] text-s font-bold">Petify</p>
          <h5 className="text-[#2F4156] font-bold text-5xl capitalize">
            If pets could talk, they’d talk about us!
          </h5>
          <p className="text-[#2f415677]">
            Book services, shop for pet products, get expert advice all in one
            place!
          </p>
        </div>

        <div className="w-[600px] h-[500px] overflow-hidden flex items-center">
          <img
            src="src\public\beginner-media\download.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BeginnerHero;
