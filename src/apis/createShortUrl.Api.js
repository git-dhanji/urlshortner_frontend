import axiosInstance from "../utils/axiosInstance.utils";

export const createShortUrl = async (url) => {
  const { data } = await axiosInstance.post("/api/create", {
    url,
  });
  return data;
};

export const createShortUrlWithUser = async ({ ...user }) => {
  const { data } = await axiosInstance.post("/api/create", user);
  return data;
};
