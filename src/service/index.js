import axiosInstance from "./httpservice";

// login user
export const login = (payload) => {
  console.log(payload, "payload");
  let url = `api/gettoken/`;
  return axiosInstance.post(url, payload);
};

export const refreshAccessToken = (payload) => {
  console.log(payload,'payload+++++++')
  let url = `api/refreshtoken/`;
  return axiosInstance.post(url,payload);
};

export const getCustomer=()=>{
  let url =`api/custome-details/`
  return axiosInstance.get(url)
}