import React, { createContext, useState } from "react";

const UserPetsContext = createContext();
const UserPetsProvider = ({ children }) => {
  const [pets, setPets] = useState([
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
  ]);

  const [selectedPet, setSelectedPet] = useState(null);

  return (
    <UserPetsContext.Provider
      value={{ pets, setPets, selectedPet, setSelectedPet }}
    >
      {children}
    </UserPetsContext.Provider>
  );
};

export default UserPetsProvider;
export { UserPetsContext };
