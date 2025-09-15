import React, { useState } from "react";
import ProfileInfo from "./ProfileInfo";
import { Link } from "react-router-dom";
import EditProfile from "./EditProfile";
import AddNewPet from "./AddNewPet";

const AllProfiles = () => {
  const allPets = [
    {
      id: 1,
      name: "max",
      species: "Dog",
      breed: "Golden Retriever",
      gender: "Male",
      dob: "2020-05-14",
      medicalHistory: "No major issues. Regular check-ups and healthy.",
      vaccinations: ["2021-06-10", "2022-06-10", "2023-06-10"],
      photo: "https://placedog.net/400/300?id=1",
    },
    {
      id: 2,
      name: "Liky",
      species: "Cat",
      breed: "Golden Retriever",
      gender: "Male",
      dob: "2020-05-14",
      medicalHistory: "No major issues. Regular check-ups and healthy.",
      vaccinations: ["2021-06-10", "2022-06-10", "2023-06-10"],
      photo: "https://placedog.net/400/300?id=1",
    },
  ];

  const [editOpen, setEditOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  return (
    <>
      {allPets.length > 0 ? (
        <div className="w-full flex flex-col">
          {allPets.map((pet, id) => (
            <ProfileInfo pet={pet} key={id} setOpen={setEditOpen} />
          ))}
        </div>
      ) : (
        <div
          to="/profile/newpet-form"
          className="text-[#2F4156] w-fit mx-auto py-5 capitalize "
        >
          You haven't added any pet yet
        </div>
      )}

      <div className="max-w-[80%] flex mx-auto md:justify-end mb-5 ">
        <button
          className="w-full md:w-fit px-5 py-2 align-middle rounded-[10px] bg-[#2F4156] text-[#F5EFED] font-semibold cursor-pointer"
          onClick={() => setAddOpen(true)}
        >
          + Add New Pet
        </button>
      </div>
      <EditProfile open={editOpen} setOpen={setEditOpen} />
      <AddNewPet open={addOpen} setOpen={setAddOpen} />
    </>
  );
};

export default AllProfiles;
