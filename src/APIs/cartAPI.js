import api from "./axiosInstance"

export const getUserCart = () => api.get("/api/v1/cart");
export const addCartItem = (cartItem) => api.post("/api/v1/cart/items", cartItem); // 404 not found
export const updateCartItemQuantity = () => api.put(`/api/v1/cart/items/${product_id}`) // body = quantity
export const removeCartItem = () => api.delete(`/api/v1/product/${product_id}`)  
export const clearCart = () => api.delete("/api/v1/cart/clear")
