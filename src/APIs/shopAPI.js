import api from "./axiosInstance";

export const getAllProducts = () => api.get(`/api/v1/products?page=0&size=10`);
export const getProduct = () => api.get(`/api/v1/product/${product_id}`); // content == products??
export const addProduct = (product) => api.post("/api/v1/products", product)
export const updateProduct = (product) => api.put(`/api/v1/products/{{product_id}}`, product)
export const deleteProduct = () => api.delete(`/api/v1/products/{{product_id}}`)
