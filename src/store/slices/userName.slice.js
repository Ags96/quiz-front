import { createSlice } from "@reduxjs/toolkit";

const usernameSlice = createSlice({
    name: "username",
    initialState: "",
    reducers: {
        setUsernameGlobal: (state, action) => action.payload
    },
})

export const { setUsernameGlobal } = usernameSlice.actions

export default usernameSlice.reducer