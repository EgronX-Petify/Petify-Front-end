// api/axiosInstance.js
import axios from "axios";

const BASEURL = "http://localhost:8080";

const api = axios.create({
  baseURL: BASEURL,
});

// Request interceptor → add token automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); 
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor → handle 401, errors, etc.
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // handle unauthorized (logout / refresh token)
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
