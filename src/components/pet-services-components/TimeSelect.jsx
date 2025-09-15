import { useState } from "react";

const TimeSelect = ({ onChange }) => {
  const [option, setOption] = useState("allDay");
  const [certainTime, setCertainTime] = useState("");
  const [timeRange, setTimeRange] = useState({ from: "", to: "" });

  const handleOptionChange = (value) => {
    setOption(value);

    if (onChange) {
      if (value === "allDay") {
        onChange("All Day");
      } else if (value === "certain") {
        onChange(certainTime);
      } else {
        onChange(`${timeRange.from} - ${timeRange.to}`);
      }
    }
  };

  const handleCertainChange = (e) => {
    setCertainTime(e.target.value);
    onChange && onChange(e.target.value);
  };

  const handleRangeChange = (key, value) => {
    const updated = { ...timeRange, [key]: value };
    setTimeRange(updated);
    onChange && onChange(`${updated.from} - ${updated.to}`);
  };

  return (
    <div className="flex flex-col gap-4 w-full md:w-full h-fit max-w-md p-4 rounded-lg shadow-sm bg-[#F8F9FA]">
      <label className="text-sm font-medium text-gray-700">Select Time</label>

      <div className="flex w-fit justify-center gap-2 md:gap-4 ">
        <button
          type="button"
          className={`px-3 py-1 rounded-lg border cursor-pointer ${
            option === "allDay"
              ? "bg-[#417481] text-white border-[#417481]"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
          onClick={() => handleOptionChange("allDay")}
        >
          All Day
        </button>

        <button
          type="button"
          className={`px-3 py-1 rounded-lg border cursor-pointer ${
            option === "certain"
              ? "bg-[#417481] text-white border-[#417481]"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
          onClick={() => handleOptionChange("certain")}
        >
          Certain Time
        </button>

        <button
          type="button"
          className={`px-3 py-1 rounded-lg border cursor-pointer ${
            option === "range"
              ? "bg-[#417481] text-white border-[#417481]"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
          onClick={() => handleOptionChange("range")}
        >
          Time Range
        </button>
      </div>

      {option === "certain" && (
        <input
          type="time"
          value={certainTime}
          onChange={handleCertainChange}
          className="px-3 py-2 border rounded-lg text-[#2f415677] focus:ring-2 focus:ring-[#417481]"
        />
      )}

      {option === "range" && (
        <div className="flex flex-col md:flex-row gap-2">
          <input
            type="time"
            value={timeRange.from}
            onChange={(e) => handleRangeChange("from", e.target.value)}
            className="px-3 py-2 text-[#2f415677] border rounded-lg focus:ring-2 focus:ring-[#417481] w-full"
          />
          <input
            type="time"
            value={timeRange.to}
            onChange={(e) => handleRangeChange("to", e.target.value)}
            className="px-3 py-2 text-[#2f415677] border rounded-lg focus:ring-2 focus:ring-[#417481] w-full"
          />
        </div>
      )}
    </div>
  );
};

export default TimeSelect;
