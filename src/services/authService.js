// src/services/authService.js
import { login, signup } from "../APIs/authAPI.js";

export const signupService = async (formData) => {
  try {
    const response = await signup(formData);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    }
    throw error;
  }
};

export const loginService = async (formData) => {
  try {
    const response = await login(formData);
    const {token} = response.data ;
    localStorage.setItem("token", token);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    }
    throw error;
  }
};
