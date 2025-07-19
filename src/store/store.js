import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authslice";
import analyticsReducer from "./slice/analyticsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    analytics: analyticsReducer,
  },
});
