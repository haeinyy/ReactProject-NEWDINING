/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Billing page components
import Menu from "./menu";
import MenuSelect from "./menuSelect";
import { useSelector } from "react-redux";

const card_style = {
    width: "50vw",
};
function DietEdit() {
    const menus = useSelector((state) => state.menu.value);
    // console.log(family);
    return (
        <Card style={card_style}>
            <MDBox
                pt={2}
                px={2}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            ></MDBox>
            <MDBox p={2}>
                <MDBox
                    component="ul"
                    display="flex"
                    flexDirection="column"
                    p={0}
                    m={0}
                >
                    <ul>
                        {menus.map((el, i) => (
                            // console.log("loop", el, i)
                            // <li key={i}>{el.name}</li>
                            <MenuSelect
                                key={i}
                                name={el.name}
                                id={el.id}
                                calorie={el.calorie}
                            />
                        ))}
                    </ul>
                </MDBox>
            </MDBox>
        </Card>
    );
}

export default DietEdit;
