import axios from 'axios';

const api = axios.create({
  baseURL: "https://goggle-login-mern-webapp-backend.onrender.com/",
  withCredentials: true,
});

export const googleAuth = (code) => api.post("/google", { code }); // ✅ POST instead of GET
