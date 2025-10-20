import React from "react";
import { FaStar } from "react-icons/fa";

const Rating = ({ value = 0, onChange = () => {}, size = 18, readOnly = false }) => {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => !readOnly && onChange(star)}
          className={`cursor-pointer ${readOnly ? "cursor-default" : ""} text-[${size}px] ${
            star <= value ? "text-[#FD7E14]" : "text-gray-300"
          }`}
        >
          <FaStar size={size} />
        </span>
      ))}
      <p className="ml-2 text-[#2F4156] text-sm">{value.toFixed(1)}</p>
    </div>
  );
};

export default Rating;

