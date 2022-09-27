import { createSlice } from "@reduxjs/toolkit";
import menu from "assets/theme/components/menu";
import axios from "axios";

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
        diet: {},
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
        makeDiet: (state, action) => {
            if ((state.main.length === 0) | (state.desert.length === 0)) {
                alert("주식과 디저트를 골라주세요");
                return;
            }
            const subMenus = [];
            const date = action.payload.date;
            const course = action.payload.course;
            for (const menus in state.value) {
                if (
                    (state.value[menus].id !== state.main[0]) &
                    (state.value[menus].id !== state.desert[0])
                ) {
                    subMenus.push(state.value[menus].id);
                }
            }
            const diet = {
                course: course,
                date: date,
                mainMenuId: state.main[0],
                dessertId: state.desert[0],
                subMenuIds: subMenus,
            };
            state.diet = diet;
            setTimeout(() => {
                const fetch = async () => {
                    try {
                        const tmp_res = "/diets";
                        await axios.post(tmp_res, diet);
                        alert("식단이 등록되었습니다");
                    } catch (err) {
                        console.error(err);
                        alert("식단이 등록에 실패했습니다");
                    }
                };
                fetch();
            }, 1000);
        },
    },
});

export default menuSlice.reducer;
export const { add, remove, calculate, changeCategory, makeDiet } =
    menuSlice.actions;
