import axios from "axios";
import { domain } from "../env";

const axiosInstance = axios.create({
  baseURL: `${domain}`,
});

axiosInstance.interceptors.request.use(async (config) => {
  const token = JSON.parse(localStorage.getItem('token'));
  console.log(token,'access token++++++++')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});



axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error?.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refresh = JSON.parse(localStorage.getItem('refreshtoken'))
      console.log(refresh,'refresh token+++++++++')

      try {

        const refreshTokenResponse = await axios.post(`${domain}/api/refreshtoken/`, { refresh });

        const newAccessToken = refreshTokenResponse.data.access;

        if (newAccessToken) {
          localStorage.setItem('token', JSON.stringify(newAccessToken));

          // originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          originalRequest.headers["Authorization"] = "Bearer " + newAccessToken;

          // Retry the original request with the new access token
          return axiosInstance(originalRequest);
        }

      } catch (refreshError) {
        console.error("Error refreshing token:", refreshError);

        // Logout or handle the situation where refresh token is invalid
        // e.g., redirect to login page, clear user session, etc.
        // ...

        // Reject the original request's promise with the refresh error
        return Promise.reject(refreshError);
      }
    }

    // Reject the original request's promise with the original error
    return Promise.reject(error);
  }
);



export default axiosInstance;


