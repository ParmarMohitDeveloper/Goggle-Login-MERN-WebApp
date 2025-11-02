import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3000/auth/",
  withCredentials: true,
});

export const googleAuth = (code) => api.post("/google", { code }); // ✅ POST instead of GET
