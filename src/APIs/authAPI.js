// {{base_url}}/api/v1/auth/signup

import api from "./axiosInstance.js";

export const signup = (formDate) =>  api.post("/api/v1/auth/signup", formDate);
export const login = (formData) => api.post("/api/v1/auth/login", formData);
