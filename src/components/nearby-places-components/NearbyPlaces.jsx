import React, { useState } from "react";

const NearbyPlaces = () => {
  const [serviceType, setServiceType] = useState("");
  const [location, setLocation] = useState("");
  const [distance, setDistance] = useState(10);

  return (
    <div className="w-[90%] md:w-[80%] mx-auto my-8">
      <h2 className="text-2xl font-bold text-[#2F4156] mb-6 text-center bg-white shadow-sm py-3 rounded-xl">
        Nearby Places
      </h2>

      <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-2xl shadow-md">
        {/* Left side - Form */}
        <div className="flex-1">
          {/* Service Type */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Service Type
            </label>
            <select
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35] outline-none"
            >
              <option value="">Select a service</option>
              <option value="vet">Vet</option>
              <option value="groomer">Groomer</option>
              <option value="store">Store</option>
            </select>
          </div>

          {/* Current Location */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Current Location
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Auto-detected / Enter manually"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35] outline-none"
            />
            <button
              type="button"
              className="mt-2 text-sm text-[#FF6B35] underline"
              onClick={() => setLocation("Detected via GPS")}
            >
              Detect via GPS
            </button>
          </div>

          {/* Distance Range */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Distance Range: {distance} km
            </label>
            <input
              type="range"
              min="1"
              max="50"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              className="w-full accent-[#FF6B35]"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="button"
              className="flex-1 bg-[#FF6B35] text-white py-2 rounded-lg shadow hover:bg-[#e55a27] transition"
            >
              Search
            </button>
            <button
              type="button"
              className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg shadow hover:bg-gray-300 transition"
              onClick={() => {
                setServiceType("");
                setLocation("");
                setDistance(10);
              }}
            >
              Reset
            </button>
          </div>
        </div>

        {/* Right side - Map */}
        <div className="flex-1">
          <div className="h-60 md:h-full bg-gray-100 flex items-center justify-center rounded-lg border border-gray-300">
            <span className="text-gray-500 text-center">
              [Map will be displayed here]
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NearbyPlaces;
