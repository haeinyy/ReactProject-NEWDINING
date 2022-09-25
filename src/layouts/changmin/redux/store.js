import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menu";

export const store = configureStore({
    reducer: {
        menu: menuSlice,
    },
});
