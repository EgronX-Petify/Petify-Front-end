import axios from "axios";

const BASEURL = "http://localhost:8080"

const api = axios.create({
  baseURL: BASEURL, 
});

export default api;