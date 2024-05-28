import axios from "axios";
import apiUrl from "../config";

const axiosInstance = axios.create({
  baseURL: apiUrl.apiUrl,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export default axiosInstance;
