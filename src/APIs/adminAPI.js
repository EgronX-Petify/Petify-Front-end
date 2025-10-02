import api from "./axiosInstance";

export const getAllUsers = () => api.get("/api/v1/admin/users");
export const getUsersCount = () => api.get("/api/v1/admin/user-counts");
export const getPendingSP = () => api.get("/api/v1/admin/pending-service-providers")
export const banUser = (userId) => api.post(`/api/v1/admin/ban-user/${userId}`)
export const activateUser = (userId) => api.post(`/api/v1/admin/unban-user/${userId}`)
export const approveSP = (userId) => api.post(`/api/v1/admin/approve-service-provider/${userId}`)
export const removeService = (serviceId) => api.delete(`/api/v1/admin/remove-service/${serviceId}`)
export const removeProduct = (productId) => api.delete(`/api/v1/admin/remove-product/${productId}`)