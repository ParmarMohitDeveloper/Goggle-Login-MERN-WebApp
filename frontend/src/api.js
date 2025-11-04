import axios from 'axios';

const api = axios.create({
  baseURL: "https://goggle-login-mern-webapp-backend.onrender.com",
  withCredentials: true,
});

// ✅ Correct route now includes '/auth'
export const googleAuth = (code) => api.post("/auth/google", { code });
