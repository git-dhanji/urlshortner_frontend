import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userUrls: {}
}


const userUrlSlice = createSlice({
    name: "userUrls",
    initialState,
    reducers: {
        addUrls: (state, action) => {
            state.userUrls = action.payload;
        }
    }
})

export const { addUrls } = userUrlSlice.actions;
export default userUrlSlice.reducer;