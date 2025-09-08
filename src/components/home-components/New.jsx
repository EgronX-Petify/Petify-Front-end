import React from "react";

const New = ({ obj }) => {
  return (
    <a
      href={obj.link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#F8F9FA] md:bg-white flex flex-col max-w-[300px] h-full rounded-[10px] cursor-pointer duration-300 ease-in-out hover:scale-105"
    >
      <div className="w-full h-[200px] md:h-[180px] overflow-hidden">
        <img
          src={obj.photo}
          alt={obj.header}
          className="w-full h-full object-cover rounded-t-[10px]"
        />
      </div>
      <div className="flex flex-col gap-2 px-3 py-2 justify-between">
        <p className="text-xs font-light text-[#2F4156]">{obj.date}</p>
        <p className="text-base md:text-lg font-semibold text-[#2F4156]">
          {obj.header}
        </p>
      </div>
    </a>
  );
};

export default New;
