import { height } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import { makeDiet } from "../redux/menu";

function DateSelector() {
    const dispatch = useDispatch();
    const menu_style = {
        backgroundColor: "#D70C19",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
        padding: "2px",
        height: "35px",
    };
    const font = {
        fontSize: "15px",
    };
    const button_style = {
        marginLeft: "15px",
        backgroundColor: "black",
        color: "white",
        width: "60px",
    };
    return (
        <div style={menu_style}>
            <div style={font}>9/12 KOREAN</div>
            <button
                style={button_style}
                onClick={() =>
                    dispatch(makeDiet({ date: "20220929", course: "KOREAN" }))
                }
            >
                완료
            </button>
        </div>
    );
}

export default DateSelector;
