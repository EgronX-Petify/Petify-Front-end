import api from "./axiosInstance";

export const getAllServices = () => api.get("/api/v1/service?category!=VET");
export const getServicesCategory = () => api.get("/api/v1/service/categories");
export const getAllVets = () => api.get("/api/v1/service?category=VET");
export const addService = (service) => api.post("/api/v1/provider/me/service",service);
export const editService = (serviceId,newService) => api.put(`/api/v1/provider/me/service/${serviceId}`, newService)
export const deleteService = (serviceId) => api.delete(`/api/v1/provider/me/service/${serviceId}`)
export const bookService = (formData) => api.post("/api/v1/user/me/appointment", formData)