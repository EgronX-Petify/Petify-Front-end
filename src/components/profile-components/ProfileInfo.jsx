import React, { useContext, useState } from "react";
import EditProfile from "./EditProfile";
import { UserPetsContext } from "../../contexts/UserPetsContext";
import UseUserPets from "../../hooks/UseUserPets";
import swal from "sweetalert";
import toast from "react-hot-toast";
import { confirmMessage } from "../../utils/confirmMessage";
import { toastPromise } from "../../utils/toastPromise";

const ProfileInfo = ({ pet }) => {
  const [open, setOpen] = useState(false);
  const { setSelectedPet, deletePet, uploadPetPhoto, deletePetPhoto } =
    useContext(UserPetsContext);
  const pets = UseUserPets();

  // ---- Photo Handlers ----
  const handlePhotoChange = async (e) => {
    if (!e.target.files[0]) return;
    const file = e.target.files[0];
    try {
      await uploadPetPhoto(pet?.id, file);
      toast.success("Pet photo uploaded successfully!");
    } catch (err) {
      toast.error("Failed to upload pet photo");
    }
  };

  const handlePhotoDelete = async () => {
    try {
      await deletePetPhoto(pet.id);
      toast.success("Pet photo deleted successfully!");
    } catch (err) {
      toast.error("Failed to delete pet photo");
      console.error(err);
    }
  };

  return (
    <div className="max-w-[95%] md:max-w-[90%] mx-auto my-10 bg-[#F8F9FA] shadow-lg rounded-2xl p-6 flex flex-col md:flex-row items-center gap-8">
      {/* Pet Photo */}
      <div className="w-36 h-36 md:w-48 md:h-48 flex-shrink-0 relative">
        {pet?.photo ? (
          <>
            <img
              src={pet?.image}
              alt={pet?.name}
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
            <button
              className="absolute top-1 right-1 bg-red-500 text-white px-2 py-1 rounded"
              onClick={handlePhotoDelete}
            >
              Delete
            </button>
            <input
              type="file"
              accept="image/*"
              className="absolute bottom-1 left-1 opacity-0 w-full h-full cursor-pointer"
              onChange={handlePhotoChange}
            />
          </>
        ) : (
          <>
            <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-xl">
              <p>No Photo</p>
            </div>
            <input
              type="file"
              accept="image/*"
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={handlePhotoChange}
            />
          </>
        )}
      </div>

      {/* Pet Info */}
      <div className="flex-1 w-full">
        <h2 className="capitalize text-xl md:text-2xl font-semibold text-[#2F4156] mb-4 text-center md:text-left">
          {pet?.name} profile
        </h2>

        {/* Pet Basic Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-[#2f4156b0]">
          <p className="bg-white p-2 rounded-lg text-sm md:text-base">
            <span className="font-medium text-[#2F4156]">Species:</span>{" "}
            {pet?.species}
          </p>
          <p className="bg-white p-2 rounded-lg text-sm md:text-base">
            <span className="font-medium text-[#2F4156]">Breed:</span>{" "}
            {pet?.breed || "No Breed"}
          </p>
          <p className="bg-white p-2 rounded-lg text-sm md:text-base">
            <span className="font-medium text-[#2F4156]">Gender:</span>{" "}
            {pet?.gender}
          </p>
          <p className="bg-white p-2 rounded-lg text-sm md:text-base">
            <span className="font-medium text-[#2F4156]">Date of Birth:</span>{" "}
            {pet?.dateOfBirth}
          </p>
        </div>

        {/* Medical History */}
        <div className="mt-4">
          <h3 className="font-medium text-[#2F4156]">Medical History</h3>
          <p className="text-[#2f4156b0] mt-1 bg-white p-2 rounded-lg text-sm md:text-base">
            {pet?.medicalHistory || "No medical history"}
          </p>
        </div>

        {/* Vaccination Dates */}
        <div className="mt-4">
          <h3 className="font-medium text-[#2F4156]">Vaccination Dates</h3>
          <ul className="list-disc list-inside text-[#2f4156b0] mt-1 bg-white p-2 rounded-lg text-sm md:text-base">
            {pet?.vaccinations?.length > 0 ? (
              pet?.vaccinations?.map((date, index) => (
                <li key={index}>{date}</li>
              ))
            ) : (
              <p className="text-[#2f4156b0] bg-white rounded-lg text-sm md:text-base">
                No vaccinations dates
              </p>
            )}
          </ul>
        </div>

        {/* Edit & Remove Buttons */}
        <div className="mt-6 flex justify-center gap-3 md:justify-end">
          <button
            className="cursor-pointer px-5 py-2 rounded-lg bg-[#ff383be0] text-white hover:bg-[#ff383b] transition shadow-md"
            onClick={() => deletePet(pet?.id)}
          >
            Remove Pet
          </button>
          <button
            className="cursor-pointer px-5 py-2 rounded-lg bg-[#FD7E14] text-white hover:bg-[#e86f0d] transition shadow-md"
            onClick={() => {
              setOpen(true);
              setSelectedPet(pet);
            }}
          >
            Edit Profile
          </button>
        </div>
      </div>

      <EditProfile open={open} setOpen={setOpen} />
    </div>
  );
};

export default ProfileInfo;
