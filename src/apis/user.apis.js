import axiosInstance from "../utils/axiosInstance.utils";

export const registerUser = async (username, email, password) => {
  const response = await axiosInstance.post("/api/auth/register", {
    username,
    email,
    password,
  });
  return response;
};

export const loginUser = async (email, password) => {
  const response = await axiosInstance.post("/api/auth/login", {
    email,
    password,
  });
  return response;
};



export const logoutUser = async () => {
  const response = await axiosInstance.get("/api/auth/logout");
  return response;
};




export const getCurrentUserData = async () => {
  try {
    const { data } = await axiosInstance.get("/api/auth/me", {
      withCredentials: true,
    });
    
    return data.user;
  } catch (error) {
    throw new Error(error);
  }
};




export const userAllUrls = async () => {
  try {
    const { data } = await axiosInstance.get("/api/urls/allUrls", {
      withCredentials: true,
    });

    return data.urls;
  } catch (error) {
    console.log(error);
  }
};



export const deleteUrl = async (id) => {
  try {
    const { data } = await axiosInstance.delete(`/api/create/${id}`, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
