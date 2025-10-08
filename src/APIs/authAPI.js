import api from "./axiosInstance.js";

export const signup = (formData) => api.post("/api/v1/auth/signup", formData);
export const login = (formData) =>
  api.post("/api/v1/auth/login", formData, { withCredentials: true });
export const logout = () => api.post("/api/v1/auth/logout");
export const forgotPassword = (email) =>
  api.post("/api/v1/auth/forgot-password", email);
export const changePassword = (userData) =>
  api.post("/api/v1/auth/change-password", userData);
