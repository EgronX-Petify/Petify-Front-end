import React from 'react'

const Hero = () => {
  return (
      <div className="flex justify-center bg-[#F8F9FA] px-[70px]">
        <div className="flex flex-col justify-center gap-5 px-[50px] w-[50%]">
          <p className="text-[#FD7E14] text-s font-bold">Petify</p>
          <h5 className="text-[#2F4156] font-bold text-5xl capitalize">
            a pet platform with
          </h5>
          <h5 className="text-[#2F4156] font-bold text-5xl capitalize">
            everthing you need
          </h5>
          <p className="text-[#2f415677]">
            Caring for your furry friends has never been easier. From products
            and guides to booking vets and services — all in one place.
          </p>

          <button className="flex w-fit px-5 py-2 align-middle rounded-[10px] bg-[#2F4156] text-[#F5EFED] font-semibold cursor-pointer ">
            Start Now
          </button>
        </div>

        <div className="w-[500px] h-[500px] overflow-hidden flex items-center">
          <img
            src="src/public/logo55.png"
            alt=""
            className="w-[500px] h-[500px]"
          />
        </div>
      </div>
  )
}

export default Hero
