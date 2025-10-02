import React, { createContext, useEffect, useState } from "react";
import * as userApi from "../APIs/userAPI";
import toast from "react-hot-toast";

const UserPetsContext = createContext();
const UserPetsProvider = ({ children }) => {
  const [pets, setPets] = useState([]);

  const [selectedPet, setSelectedPet] = useState(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const { data } = await userApi.getUserPets();
        setPets(data);
      } catch (error) {
        console.log("petsError", error);
      }
    };
    fetchPets();
  }, []);

  const createPet = async (petData) => {
    try {
      const { data } = await userApi.addNewPet(petData);
      setPets((prev) => [...prev, data]);
      return data;
    } catch (error) {
      console.log("petsError", error);
    }
  };

  const editPet = async (petId, petData) => {
    try {
      const { data } = await userApi.editPet(petId, petData);
      setPets((prev) =>
        prev.map((petItem) => (petItem.id === petId ? data : petItem))
      );
      return data;
    } catch (error) {
      console.log("petsError", error);
    }
  };
  const deletePet = async (petId) => {
    try {
      const { data } = await userApi.deletePet(petId);
      setPets((prev) => prev.filter((petItem) => petItem.id !== petId));
      return data;
    } catch (error) {
      console.log("petsError", error);
    }
  };

  const uploadPetPhoto = async (petId, file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("petId", petId);
      const { data } = await userApi.addPetImage(petId, formData);

      setPets((prev) =>
        prev.map((petItem) =>
          petItem.id === petId
            ? {
                ...petItem,
                image: `data:${data.contentType};base64,${data.data}`,
              }
            : petItem
        )
      );
    } catch (err) {
      // console.error("Image upload error:", err.response.message || err);
      toast.error("Failed to upload image");
    }
  };

  return (
    <UserPetsContext.Provider
      value={{
        pets,
        setPets,
        selectedPet,
        setSelectedPet,
        createPet,
        editPet,
        deletePet,
        uploadPetPhoto,
      }}
    >
      {children}
    </UserPetsContext.Provider>
  );
};

export default UserPetsProvider;
export { UserPetsContext };

/*    {
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
    }, */
