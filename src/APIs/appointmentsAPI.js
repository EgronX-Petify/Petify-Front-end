import api from "./axiosInstance";

export const getMyAppointments = () => api.get("/api/v1/user/me/appointment");
export const bookService = (formData) => api.post("/api/v1/user/me/appointment", formData);
export const cancelAppointment = (appointmentId) => api.delete(`/api/v1/user/me/appointment/${appointmentId}`)