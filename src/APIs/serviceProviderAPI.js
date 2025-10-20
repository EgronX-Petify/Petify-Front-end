import api from "./axiosInstance";

export const getSPProfile = () => api.get("/api/v1/user/me");