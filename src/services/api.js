import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-six-taupe.vercel.app/api/users",
});

export default api;
