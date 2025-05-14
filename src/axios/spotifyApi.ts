import cacheAccessKeys from "@src/constants/cacheAccessKeys";
import axios, { AxiosError } from "axios";

const spotifyApiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
});

spotifyApiInstance.interceptors.request.use(
  async (config) => {
    console.log(
      "\n-- Method:",
      config.method,
      "\n-- URL:",
      config.url,
      "\n-- Params",
      config.params
    );
    const token = localStorage.getItem(cacheAccessKeys.SPOTIFY_AUTH_TOKEN);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log("🚀 ~ token:", config.headers.Authorization);

    return config;
  },
  (error) => {
    console.log("Request Error:", error);
    return Promise.reject(error);
  }
);

spotifyApiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    console.log(
      "Response Error:\n",
      "-- error code:",
      error.code,
      "\n-- error status:",
      error.status,
      "\n-- error message:",
      error.message,
      "\n-- error response:",
      error.response
    );

    return Promise.reject(error);
  }
);
export default spotifyApiInstance;
