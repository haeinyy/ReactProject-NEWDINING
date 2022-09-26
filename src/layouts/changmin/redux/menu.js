import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
    name: "menu",
    initialState: {
        value: [],
        names: [],
        carbonate: 0,
        fat: 0,
        protein: 0,
        main: [],
        sub: [],
        desert: [],
    },
    reducers: {
        add: (state, action) => {
            if (state.names.includes(action.payload.name) === false) {
                state.value.push(action.payload);
                state.names.push(action.payload.name);
                state.carbonate += action.payload.calorie.carbonate;
                state.protein += action.payload.calorie.protein;
                state.fat += action.payload.calorie.fat;
            } else {
                alert("중복된 메뉴입니다");
            }
        },
        remove: (state, action) => {
            console.log("remove action: ", action);
            console.log(state.value);
            for (var i = 0; i < state.value.length; i++) {
                if (state.value[i].name === action.payload) {
                    state.carbonate -= state.value[i].calorie.carbonate;
                    state.protein -= state.value[i].calorie.protein;
                    state.fat -= state.value[i].calorie.fat;

                    state.value.splice(i, 1);
                    state.names.splice(i, 1);
                    i--;
                }
            }
        },
        changeCategory: (state, action) => {
            console.log(action.payload);
            if (
                (state.main.length === 0) &
                (state.desert[0] !== action.payload)
            ) {
                state.main.push(action.payload);
            } else if (
                (state.main.length === 1) &
                (state.desert.length === 0) &
                (state.main[0] !== action.payload)
            ) {
                state.desert.push(action.payload);
            } else if (state.main[0] === action.payload) {
                state.main.pop();
            } else if (state.desert[0] === action.payload) {
                state.desert.pop();
            }
        },
        calculate: (state, action) => {
            console.log("c: ", state.carbonate);
            console.log("p: ", state.protein);
            console.log("f: ", state.fat);
        },
    },
});

export default menuSlice.reducer;
export const { add, remove, calculate, changeCategory } = menuSlice.actions;
