import { color } from "@mui/system";
import React from "react";
import Icon from "@mui/material/Icon";
import logo from "/Users/chang/develop/react/ReactProject-NEWDINING/src/assets/images/icons/flags/logo.png";

function index(props) {
    const box = {
        backgroundColor: "#D70C19",
        height: "50px",
        color: "white",
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
    };
    const logo_style = {
        height: "30px",
    };
    const navbar_title = {
        fontSize: "20px",
        // display: "flex",
        // justifyContent: "center",
        // alignItem: "center",
    };
    // const logo = require("react/ReactProject-NEWDINING/src/assets/images/icons/flags/logo.png");
    // const logo = require("/Users/chang/develop/react/ReactProject-NEWDINING/src/assets/images/icons/flags/logo.png");
    return (
        <div style={box}>
            <div style={navbar_title}>신세계 아이앤씨</div>
            <img src={logo} alt="logo" style={logo_style}></img>
        </div>
    );
}

export default index;
