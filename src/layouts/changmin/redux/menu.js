import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
    name: "menu",
    // initialState: { value: { name: "", age: 0, email: "" } },
    initialState: { value: [] },
    reducers: {
        add: (state, action) => {
            console.log(state, action);
            state.value.push(action.payload);
            // state.value = action.payload;
        },
    },
});

export default menuSlice.reducer;
export const { add } = menuSlice.actions;
