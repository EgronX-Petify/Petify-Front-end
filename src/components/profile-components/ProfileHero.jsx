// import React from "react";

// const ProfileHero = () => {
//   return (
//     <div className="flex justify-center bg-[#F8F9FA] h-[500px] items-center px-[70px]">
//       <div className="flex flex-col justify-center gap-5 px-[50px] w-[50%]">
//         <p className="text-[#FD7E14] text-s font-bold">Petify</p>
//         <h5 className="text-[#2F4156] font-bold text-5xl capitalize">
//           welcome back max!
//         </h5>
//         <p className="text-[#2f415677]">
//           Easily add and update your pet’s information — from name, breed, and
//           age to health records and vaccination history. Everything you need to
//           track your pet’s wellbeing is organized and accessible anytime.
//         </p>
//       </div>

//       <div className="w-[400px] h-[400px] overflow-hidden flex items-center justify-center rounded-[50%]">
//         <img
//           src="https://placedog.net/400/300?id=1"
//           className=" w-full h-full object-cover rounded-[50%]"
//         />
//       </div>
//     </div>
//   );
// };

// export default ProfileHero;

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
