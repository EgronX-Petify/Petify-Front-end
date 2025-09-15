import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddNewPet = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const [pet, setPet] = useState({
    name: "",
    species: "",
    breed: "",
    gender: "Male",
    dob: "",
    medicalHistory: "",
    vaccinations: "",
    photo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPet({ ...pet, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPet = {
      ...pet,
      vaccinations: pet.vaccinations
        .split(",")
        .map((v) => v.trim())
        .filter(Boolean),
    };

    console.log("New Pet Added:", newPet);
    alert(`${newPet.name}'s profile has been created successfully!`);

    setPet({
      name: "",
      species: "",
      breed: "",
      gender: "Male",
      dob: "",
      medicalHistory: "",
      vaccinations: "",
      photo: "",
    });
  };

  return (
    open && (
      <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 overflow-y-auto">
        <div className="w-full max-w-3xl mx-4 my-6 bg-[#F8F9FA] shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-[#FD7E14] mb-4 text-center">
            Add New Pet
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {/* Name */}
            <div>
              <label className="block text-[#2F4156] font-medium text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={pet.name}
                onChange={handleChange}
                placeholder="Pet name"
                required
                className="w-full rounded-lg text-[#2f415677] bg-white border border-gray-400 px-3 py-2 focus:ring-2 focus:ring-[#FD7E14] outline-none"
              />
            </div>

            {/* Species */}
            <div>
              <label className="block text-[#2F4156] font-medium text-sm">
                Species
              </label>
              <input
                type="text"
                name="species"
                value={pet.species}
                onChange={handleChange}
                placeholder="Dog, Cat, Rabbit..."
                required
                className="w-full rounded-lg text-[#2f415677] bg-white border border-gray-400 px-3 py-2 focus:ring-2 focus:ring-[#FD7E14] outline-none"
              />
            </div>

            {/* Breed */}
            <div>
              <label className="block text-[#2F4156] font-medium text-sm">
                Breed
              </label>
              <input
                type="text"
                name="breed"
                value={pet.breed}
                onChange={handleChange}
                placeholder="Golden Retriever, Persian..."
                className="w-full rounded-lg text-[#2f415677] bg-white border border-gray-400 px-3 py-2 focus:ring-2 focus:ring-[#FD7E14] outline-none"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-[#2F4156] font-medium text-sm">
                Gender
              </label>
              <select
                name="gender"
                value={pet.gender}
                onChange={handleChange}
                className="w-full rounded-lg text-[#2f415677] bg-white border border-gray-400 px-3 py-2 focus:ring-2 focus:ring-[#FD7E14] outline-none"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-[#2F4156] font-medium text-sm">
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                value={pet.dob}
                onChange={handleChange}
                required
                className="w-full rounded-lg text-[#2f415677] bg-white border border-gray-400 px-3 py-2 focus:ring-2 focus:ring-[#FD7E14] outline-none"
              />
            </div>

            {/* Medical History */}
            <div className="md:col-span-2">
              <label className="block text-[#2F4156] font-medium text-sm">
                Medical History
              </label>
              <textarea
                name="medicalHistory"
                value={pet.medicalHistory}
                onChange={handleChange}
                placeholder="Any previous illnesses, surgeries..."
                rows="2"
                className="w-full rounded-lg text-[#2f415677] bg-white border border-gray-400 px-3 py-2 focus:ring-2 focus:ring-[#FD7E14] outline-none"
              ></textarea>
            </div>

            {/* Vaccination Dates */}
            <div className="md:col-span-2">
              <label className="block text-[#2F4156] font-medium text-sm">
                Vaccination Dates
              </label>
              <div className="space-y-2">
                <div className="flex gap-3 items-center">
                  <input
                    type="date"
                    className="w-full rounded-lg text-[#2f415677] bg-white border border-gray-200 shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
                  />
                  <button
                    className="cursor-pointer px-2 h-fit py-1 text-sm rounded-lg bg-[#ff383be0] text-white hover:bg-[#ff383b] transition"
                    type="button"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <button
                type="button"
                className="cursor-pointer mt-1 text-sm text-[#FD7E14] hover:underline"
              >
                + Add another date
              </button>
            </div>

            {/* Photo */}
            <div className="md:col-span-2">
              <label className="block text-[#2F4156] font-medium text-sm">
                Photo
              </label>
              <input
                type="file"
                accept="image/*"
                className="w-full px-4 py-2 border border-gray-400 rounded-lg cursor-pointer focus:ring-1 focus:ring-[#FD7E14]"
              />
            </div>

            {/* Buttons */}
            <div className="md:col-span-2 flex flex-col-reverse sm:flex-row justify-end gap-3 pt-2">
              <button
                type="button"
                className="w-full sm:w-fit cursor-pointer px-5 py-2 rounded-lg bg-[#ff383be0] text-white hover:bg-[#ff383b] transition"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full sm:w-fit cursor-pointer px-5 py-2 rounded-lg bg-[#2F4156] text-white hover:bg-[#1f2d3a] transition"
              >
                Add Pet
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default AddNewPet;
