import React, { useState } from "react";

const EditProfile = () => {
  const [vaccinations, setVaccinations] = useState([""]);

  const handleAddVaccination = () => {
    setVaccinations([...vaccinations, ""]);
  };

  const handleVaccinationChange = (index, value) => {
    const updated = [...vaccinations];
    updated[index] = value;
    setVaccinations(updated);
  };

  return (
    <div className="max-w-4xl mx-auto my-10 bg-[#F8F9FA] shadow-lg rounded-2xl p-6">
      <h2 className="text-2xl font-semibold text-[#2F4156] mb-6 text-center">
        Pet Profile Information
      </h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pet Name */}
        <div>
          <label className="block text-[#2F4156] font-medium">Pet Name</label>
          <input
            type="text"
            placeholder="Enter pet name"
            className="mt-1 w-full rounded-lg text-[#2f415677] bg-white border border-gray-200 shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
          />
        </div>

        {/* Species */}
        <div>
          <label className="block text-[#2F4156] font-medium">Species</label>
          <select className="mt-1 w-full rounded-lg text-[#2f415677] bg-white border border-gray-200 shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]">
            <option>Dog</option>
            <option>Cat</option>
            <option>Bird</option>
            <option>Other</option>
          </select>
        </div>

        {/* Breed */}
        <div>
          <label className="block text-[#2F4156] font-medium">Breed</label>
          <input
            type="text"
            placeholder="Enter breed"
            className="mt-1 w-full rounded-lg text-[#2f415677] bg-white border border-gray-200 shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-[#2F4156] font-medium">Gender</label>
          <select className="mt-1 w-full rounded-lg text-[#2f415677] bg-white border border-gray-200 shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]">
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-[#2F4156] font-medium">
            Date of Birth
          </label>
          <input
            type="date"
            className="mt-1 w-full rounded-lg text-[#2f415677] bg-white border border-gray-200 shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
          />
        </div>

        {/* Medical History */}
        <div className="md:col-span-2">
          <label className="block text-[#2F4156] font-medium">
            Medical History
          </label>
          <textarea
            rows="3"
            placeholder="Enter medical history"
            className="mt-1 w-full rounded-lg text-[#2f415677] bg-white border border-gray-200 shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
          ></textarea>
        </div>

        {/* Vaccination Dates */}
        <div className="md:col-span-2">
          <label className="block text-[#2F4156] font-medium">
            Vaccination Dates
          </label>
          {vaccinations.map((date, index) => (
            <input
              key={index}
              type="date"
              value={date}
              onChange={(e) => handleVaccinationChange(index, e.target.value)}
              className="mt-2 w-full rounded-lg text-[#2f415677] bg-white border border-gray-200 shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
            />
          ))}
          <button
            type="button"
            onClick={handleAddVaccination}
            className="cursor-pointer mt-2 text-sm text-[#FD7E14] hover:underline"
          >
            + Add another date
          </button>
        </div>

        {/* Photo Upload */}
        <div className="md:col-span-2">
          <label className="block text-[#2F4156] font-medium">Photo</label>
          <input
            type="file"
            className="mt-1 w-full text-sm text-gray-600 file:mr-4 file:rounded-lg file:border-0 file:bg-[#FD7E14] file:px-4 file:py-2 file:text-white hover:file:bg-[#e86f0d] cursor-pointer"
          />
        </div>

        {/* Buttons */}
        <div className="md:col-span-2 flex flex-col sm:flex-row justify-end gap-3 pt-2">
          <button
            type="reset"
            className="cursor-pointer px-4 py-2 rounded-lg border border-[#2F4156] text-[#2F4156] hover:bg-[#2F4156] hover:text-white transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="cursor-pointer px-4 py-2 rounded-lg bg-[#FD7E14] text-white hover:bg-[#e86f0d] transition"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
