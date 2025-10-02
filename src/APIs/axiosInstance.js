// api.js
import axios from "axios";

const BASEURL = "http://localhost:8080";

// هنا نخزن الـ access token في memory

// let setAccessTokenCallback = null; // دالة لتحديث token لو حابة تعمل integration مع React

// export const setAccessToken = (token) => {
//   accessToken = token;
//   if (setAccessTokenCallback) setAccessTokenCallback(token);
// };

// لو عايزة تعملي integration مع React Context
// export const bindAccessTokenSetter = (fn) => {
//   setAccessTokenCallback = fn;
// };

const api = axios.create({
  baseURL: BASEURL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("token");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

// api.interceptors.response.use(
//   (res) => res,
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         const refreshRes = await axios.post(
//           "/api/v1/auth/refresh",
//           {},
//           { withCredentials: true }
//         );
//         accessToken = refreshRes.data.token;
//         if (setAccessTokenCallback) setAccessTokenCallback(refreshRes.data.token);
//         originalRequest.headers.Authorization = `Bearer ${refreshRes.data.token}`;
//         return api(originalRequest);
//       } catch (err) {
//         accessToken = null;
//         return Promise.reject(err);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

export default api;
