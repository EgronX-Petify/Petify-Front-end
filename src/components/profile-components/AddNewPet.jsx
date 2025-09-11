import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddNewPet = () => {
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
        .filter(Boolean), // split dates by comma
    };

    console.log("New Pet Added:", newPet);
    alert(`${newPet.name}'s profile has been created successfully!`);

    // reset form
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
    <div className="max-w-[90%] md:max-w-[700px] mx-auto my-10 bg-[#F8F9FA] shadow-lg rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-[#FD7E14] mb-6 text-center">
        Add New Pet
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Pet Name */}
        <div>
          <label className="block text-[#2F4156] font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={pet.name}
            onChange={handleChange}
            placeholder="Pet name"
            required
            className="w-full px-4 py-2 border border-gray-400 outline-none text-[#2f415677] rounded-lg focus:ring-1 focus:ring-[#FD7E14] focus:outline-none"
          />
        </div>

        {/* Species */}
        <div>
          <label className="block text-[#2F4156] font-medium mb-1">
            Species
          </label>
          <input
            type="text"
            name="species"
            value={pet.species}
            onChange={handleChange}
            placeholder="Dog, Cat, Rabbit..."
            required
            className="w-full px-4 py-2 border border-gray-400 outline-none text-[#2f415677] rounded-lg focus:ring-1 focus:ring-[#FD7E14]"
          />
        </div>

        {/* Breed */}
        <div>
          <label className="block text-[#2F4156] font-medium mb-1">Breed</label>
          <input
            type="text"
            name="breed"
            value={pet.breed}
            onChange={handleChange}
            placeholder="Golden Retriever, Persian..."
            className="w-full px-4 py-2 border border-gray-400 outline-none text-[#2f415677] rounded-lg focus:ring-1 focus:ring-[#FD7E14]"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-[#2F4156] font-medium mb-1">
            Gender
          </label>
          <select
            name="gender"
            value={pet.gender}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-400 outline-none text-[#2f415677] rounded-lg focus:ring-1 focus:ring-[#FD7E14]"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-[#2F4156] font-medium mb-1">
            Date of Birth
          </label>
          <input
            type="date"
            name="dob"
            value={pet.dob}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-400 outline-none text-[#2f415677] rounded-lg focus:ring-1 focus:ring-[#FD7E14]"
          />
        </div>

        {/* Medical History */}
        <div>
          <label className="block text-[#2F4156] font-medium mb-1">
            Medical History
          </label>
          <textarea
            name="medicalHistory"
            value={pet.medicalHistory}
            onChange={handleChange}
            placeholder="Any previous illnesses, surgeries..."
            rows="3"
            className="w-full px-4 py-2 border border-gray-400 outline-none text-[#2f415677] rounded-lg focus:ring-1 focus:ring-[#FD7E14]"
          ></textarea>
        </div>

        {/* Vaccinations */}
        <div>
          <label className="block text-[#2F4156] font-medium mb-1">
            Vaccination Dates
          </label>
          <input
            type="text"
            name="vaccinations"
            value={pet.vaccinations}
            onChange={handleChange}
            placeholder="Enter dates separated by commas (e.g. 2021-06-10, 2022-06-10)"
            className="w-full px-4 py-2 border border-gray-400 outline-none text-[#2f415677] rounded-lg focus:ring-1 focus:ring-[#FD7E14]"
          />
        </div>

        <div>
          <label className="block text-[#2F4156] font-medium mb-1">Photo</label>
          <input
            type="url"
            name="photo"
            value={pet.photo}
            onChange={handleChange}
            placeholder="Enter photo URL"
            className="w-full px-4 py-2 border border-gray-400 outline-none text-[#2f415677] rounded-lg focus:ring-1 focus:ring-[#FD7E14]"
          />
        </div>

        <div className="flex justify-between md:justify-end gap-3">
          <button
            type="submit"
            className="w-full md:w-fit cursor-pointer px-6 py-2 bg-[#ff383be0] text-white rounded-lg hover:bg-[#ff383be0] transition"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-full md:w-fit cursor-pointer px-6 py-2 bg-[#2F4156] text-white rounded-lg hover:bg-[#1f2d3a] transition"
          >
            Add Pet
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewPet;
