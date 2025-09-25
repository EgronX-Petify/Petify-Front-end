import api from "./axiosInstance";

export const getAllProducts = () =>
  api.get("/api/v1/product?search&category&tags&size=10&page=0");
export const getProduct = () => api.get(`/api/v1/product/${product_id}`);
