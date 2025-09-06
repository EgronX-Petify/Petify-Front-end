import React from "react";

const New = ({ obj }) => {
  return (
    <a
      href={obj.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col w-[300px] h-full rounded-[10px] cursor-pointer duration-300 ease-in-out hover:scale-105"
    >

        <div className="w-[300px] h-[180px] overflow-hidden ">
          <img
            src={obj.photo}
            className=" w-full h-full object-cover rounded-t-[10px] "
          />
        </div>
        <div className="flex flex-col gap-2 px-3 py-1 justify-between">
          <p className="mt-2 text-xs font-light  text-[#2F4156]">{obj.date}</p>
          <p className="mt-2 text-lg font-semibold  text-[#2F4156]">
            {obj.header}
          </p>
        </div>
    </a>
  );
};

export default New;
