import React from "react";

const ProfileHero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center bg-[#F8F9FA] items-center px-6 md:px-[70px] py-10 md:h-[500px] gap-8 md:gap-0">
      <div className="flex flex-col justify-center gap-4 md:gap-5 w-full md:w-1/2 text-center md:text-left">
        <p className="text-[#FD7E14] text-sm font-bold">Petify</p>
        <h5 className="text-[#2F4156] font-bold text-3xl md:text-5xl capitalize">
          welcome back!
        </h5>
        <p className="text-[#2f415677] text-sm md:text-base leading-relaxed">
          Easily add and update your pet’s information — from name, breed, and
          age to health records and vaccination history. Everything you need to
          track your pet’s wellbeing is organized and accessible anytime.
        </p>
      </div>
    </div>
  );
};

export default ProfileHero;
