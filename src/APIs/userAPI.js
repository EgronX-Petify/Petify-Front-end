import api from "./axiosInstance";

export const getUser = () => api.get("/api/v1/user/me", { withCredentials: true });
export const updateUser = (userData) => api.put("/api/v1/user/me", userData);
export const getUserPets = () => api.get("/api/v1/user/me/pet");
export const addNewPet = (petData) => api.post("/api/v1/user/me/pet",petData)
export const editPet = (petId, petData) => api.put(`/api/v1/user/me/pet/${petId}`, petData)
export const deletePet = (petId) => api.delete(`/api/v1/user/me/pet/${petId}`)
export const addPetImage = (petId,formData) => api.post(`/api/v1/user/me/pet/${petId}/image`, formData, { withCredentials: true }, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });