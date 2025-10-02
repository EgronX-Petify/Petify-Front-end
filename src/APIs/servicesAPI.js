import api from "./axiosInstance";

export const getAllServices = () => api.get("/api/v1/service");
export const getAllVets = () => api.get("/api/v1/service?category=VET");
