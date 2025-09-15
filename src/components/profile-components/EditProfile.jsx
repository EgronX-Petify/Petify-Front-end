import React, { useState } from "react";

const EditProfile = ({ open, setOpen }) => {
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
    open && (
      <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 overflow-y-auto">
        <div className="w-full max-w-3xl mx-4 my-6 bg-[#F8F9FA] shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-[#2F4156] mb-4 text-center">
            Pet Information
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Pet Name */}
            <div>
              <label className="block text-[#2F4156] font-medium text-sm">
                Pet Name
              </label>
              <input
                type="text"
                placeholder="Enter pet name"
                className="w-full rounded-lg text-[#2f415677] bg-white border border-gray-200 shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
              />
            </div>

            {/* Species */}
            <div>
              <label className="block text-[#2F4156] font-medium text-sm">
                Species
              </label>
              <select className="w-full rounded-lg text-[#2f415677] bg-white border border-gray-200 shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]">
                <option>Dog</option>
                <option>Cat</option>
                <option>Bird</option>
                <option>Other</option>
              </select>
            </div>

            {/* Breed */}
            <div>
              <label className="block text-[#2F4156] font-medium text-sm">
                Breed
              </label>
              <input
                type="text"
                placeholder="Enter breed"
                className="w-full rounded-lg text-[#2f415677] bg-white border border-gray-200 shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-[#2F4156] font-medium text-sm">
                Gender
              </label>
              <select className="w-full rounded-lg text-[#2f415677] bg-white border border-gray-200 shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]">
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-[#2F4156] font-medium text-sm">
                Date of Birth
              </label>
              <input
                type="date"
                className="w-full rounded-lg text-[#2f415677] bg-white border border-gray-200 shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
              />
            </div>

            {/* Medical History */}
            <div className="md:col-span-2">
              <label className="block text-[#2F4156] font-medium text-sm">
                Medical History
              </label>
              <textarea
                rows="2"
                placeholder="Enter medical history"
                className="w-full rounded-lg text-[#2f415677] bg-white border border-gray-200 shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
              ></textarea>
            </div>

            {/* Vaccination Dates */}
            <div className="md:col-span-2">
              <label className="block text-[#2F4156] font-medium text-sm">
                Vaccination Dates
              </label>
              <div className="space-y-2">
                {vaccinations.map((date, index) => (
                  <div className="flex gap-3 items-center">
                    <input
                      key={index}
                      type="date"
                      value={date}
                      onChange={(e) =>
                        handleVaccinationChange(index, e.target.value)
                      }
                      className="w-full rounded-lg text-[#2f415677] bg-white border border-gray-200 shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
                    />
                    <button
                      className="cursor-pointer px-2 h-fit py-1 text-sm rounded-lg bg-[#ff383be0] text-white hover:bg-[#ff383b] transition"
                      type="button"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={handleAddVaccination}
                className="cursor-pointer mt-1 text-sm text-[#FD7E14] hover:underline"
              >
                + Add another date
              </button>
            </div>

            {/* Photo Upload */}
            <div className="md:col-span-2">
              <label className="block text-[#2F4156] font-medium text-sm">
                Photo
              </label>
              <input
                type="file"
                className="w-full text-sm text-gray-600 file:mr-4 file:rounded-lg file:border-0 file:bg-[#FD7E14] file:px-3 file:py-1 file:text-white hover:file:bg-[#e86f0d] cursor-pointer"
              />
            </div>

            {/* Buttons */}
            <div className="md:col-span-2 flex flex-col-reverse sm:flex-row justify-end gap-3 pt-2">
              <button
                type="reset"
                className="cursor-pointer px-4 py-2 rounded-lg bg-[#ff383be0] text-white hover:bg-[#ff383b] transition"
                onClick={() => setOpen(false)}
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
      </div>
    )
  );
};

export default EditProfile;
