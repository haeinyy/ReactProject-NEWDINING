import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
    name: "menu",
    initialState: { value: [], names: [] },
    reducers: {
        add: (state, action) => {
            if (state.names.includes(action.payload.name) === false) {
                state.value.push(action.payload);
                state.names.push(action.payload.name);
            } else {
                alert("중복된 메뉴입니다");
            }
        },
        remove: (state, action) => {
            console.log("remove action: ", action);
            console.log(state.value);
            for (var i = 0; i < state.value.length; i++) {
                if (state.value[i].name === action.payload) {
                    state.value.splice(i, 1);
                    state.names.splice(i, 1);
                    i--;
                }
            }
        },
    },
});

export default menuSlice.reducer;
export const { add, remove } = menuSlice.actions;
