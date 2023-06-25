import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        error: null,
        user: null
    },
});

export default userSlice.reducer;