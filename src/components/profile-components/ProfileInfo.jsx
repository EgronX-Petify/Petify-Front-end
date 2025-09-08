import React from "react";

const ProfileInfo = () => {
  const pet = {
    name: "max",
    species: "Dog",
    breed: "Golden Retriever",
    gender: "Male",
    dob: "2020-05-14",
    medicalHistory: "No major issues. Regular check-ups and healthy.",
    vaccinations: ["2021-06-10", "2022-06-10", "2023-06-10"],
    photo: "https://placedog.net/400/300?id=1",
  };

  return (
    <div className="max-w-[95%] md:max-w-[90%] mx-auto my-10 bg-[#F8F9FA] shadow-lg rounded-2xl p-6 flex flex-col md:flex-row items-center gap-8">
      {/* Pet Photo */}
      <div className="w-36 h-36 md:w-48 md:h-48 flex-shrink-0">
        <img
          src={pet.photo}
          alt={pet.name}
          className="w-full h-full object-cover rounded-xl shadow-md"
        />
      </div>

      {/* Pet Info */}
      <div className="flex-1 w-full">
        <h2 className="capitalize text-xl md:text-2xl font-semibold text-[#2F4156] mb-4 text-center md:text-left">
          {pet.name} profile
        </h2>

        {/* Pet Basic Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-[#2f4156b0]">
          <p className="bg-white p-2 rounded-lg text-sm md:text-base">
            <span className="font-medium text-[#2F4156]">Species:</span>{" "}
            {pet.species}
          </p>
          <p className="bg-white p-2 rounded-lg text-sm md:text-base">
            <span className="font-medium text-[#2F4156]">Breed:</span>{" "}
            {pet.breed}
          </p>
          <p className="bg-white p-2 rounded-lg text-sm md:text-base">
            <span className="font-medium text-[#2F4156]">Gender:</span>{" "}
            {pet.gender}
          </p>
          <p className="bg-white p-2 rounded-lg text-sm md:text-base">
            <span className="font-medium text-[#2F4156]">Date of Birth:</span>{" "}
            {pet.dob}
          </p>
        </div>

        {/* Medical History */}
        <div className="mt-4">
          <h3 className="font-medium text-[#2F4156]">Medical History</h3>
          <p className="text-[#2f4156b0] mt-1 bg-white p-2 rounded-lg text-sm md:text-base">
            {pet.medicalHistory}
          </p>
        </div>

        {/* Vaccination Dates */}
        <div className="mt-4">
          <h3 className="font-medium text-[#2F4156]">Vaccination Dates</h3>
          <ul className="list-disc list-inside text-[#2f4156b0] mt-1 bg-white p-2 rounded-lg text-sm md:text-base">
            {pet.vaccinations.map((date, index) => (
              <li key={index}>{date}</li>
            ))}
          </ul>
        </div>

        {/* Edit Button */}
        <div className="mt-6 flex justify-center md:justify-end">
          <button className="cursor-pointer px-5 py-2 rounded-lg bg-[#FD7E14] text-white hover:bg-[#e86f0d] transition shadow-md">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
