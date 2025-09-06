import React from "react";

const ShopNow = () => {
  return (
    <div className="flex justify-center bg-[#F8F9FA] px-[70px] py-[30px]">
      <div className="w-[400px] h-[400px] overflow-hidden flex items-center">
        <img
          src="src/public/home-media/pexels-mateusz-3627236-8368423.jpg"
          alt=""
          className="w-[400px] h-[400px]"
        />
      </div>
      <div className="flex flex-col justify-center gap-4.5 px-[50px] w-[37%]">
        <p className="text-[#FD7E14] text-s font-bold">Petify</p>
        <h5 className="text-[#2F4156] font-bold text-3xl capitalize">
          the smarter way to shop for your pet
        </h5>
        <p className="text-[#2f415677]">
          Discover a wide range of trusted pet products and get them delivered
          straight to your door.
        </p>
        <button className="flex w-fit px-5 py-2 align-middle rounded-[10px] bg-[#2F4156] text-[#F5EFED] font-semibold cursor-pointer">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default ShopNow;
