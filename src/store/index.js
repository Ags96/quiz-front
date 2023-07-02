import { configureStore } from "@reduxjs/toolkit";
import username from "./slices/userName.slice";

export default configureStore({
    reducer: {
        username
    }
})