import React from "react";
import { FaSpinner } from "react-icons/fa";

const LoadingSpinner = ({ size = 40, color = "#417481", text = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-10 min-h-[402px] md:min-h-[265px]">
      <FaSpinner
        className="animate-spin"
        size={size}
        color={color}
      />
      {text && <span className="text-gray-600 font-medium">{text}</span>}
    </div>
  );
};

export default LoadingSpinner;
