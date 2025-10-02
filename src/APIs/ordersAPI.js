import api from "./axiosInstance"

export const getAllOrders = () => api.get("/api/v1/order?page=0&size=10")
export const updateOrderStatus = (status) => api.put(`/api/v1/order/{{order_id}}`, status)