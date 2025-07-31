import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URI,
  withCredentials: true, // Allow cookies to be sent with requests
});

// Add a response interceptor for error handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Enhanced error handling for better readability
    let readableMessage = "An unexpected error occurred.";
    let status = undefined;
    let data = undefined;

    if (error.response) {
      status = error.response.status;
      data = error.response.data;
      // Try to extract a more user-friendly message
      if (data) {
        if (typeof data === "string") {
          readableMessage = data;
        } else if (data.message) {
          readableMessage = data.message;
        } else if (data.error) {
          readableMessage = data.error;
        } else if (Array.isArray(data.errors) && data.errors.length > 0) {
          readableMessage = data.errors.map((e) => e.message || e).join("; ");
        } else {
          readableMessage = JSON.stringify(data);
        }
      } else if (error.response.statusText) {
        readableMessage = error.response.statusText;
      }
    } else if (error.request) {
      readableMessage =
        "No response from server. Please check your network connection.";
    } else if (error.message) {
      readableMessage = error.message;
    }

    return Promise.reject({
      ...error,
      message: readableMessage,
      status,
      data,
    });
  }
);

export default axiosInstance;
