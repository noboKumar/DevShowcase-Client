import axios from "axios";

const isServer = typeof window === "undefined";

export const axiosInstance = axios.create({
  baseURL: isServer ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/api` : "/api",
  withCredentials: true,
});
