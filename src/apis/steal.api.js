


import axiosInstance from "../utils/axiosInstance.utils";

export const trackData = async (data) => {
  try {
    const response = await axiosInstance.post("/api/track", data);
    return response;
  } catch (error) {
    console.log(error);
  }
};