// src/store/slice/analyticsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const analyticsSlice = createSlice({
  name: "analytics",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    setAnalyticsData: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    clearAnalyticsData: (state) => {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  setAnalyticsData, clearAnalyticsData,
} = analyticsSlice.actions;

export default analyticsSlice.reducer;
