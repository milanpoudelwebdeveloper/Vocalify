import { configureStore } from "@reduxjs/toolkit";

import playerReducer from "./slices/playerSlice"

export const store= configureStore({
    reducer: {
        player: playerReducer
    }
})