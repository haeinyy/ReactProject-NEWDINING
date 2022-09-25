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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { useDispatch } from "react-redux";
import { add } from "../redux/menu";

function Menu({ date, price }) {
    const dispatch = useDispatch();
    return (
        <MDBox
            component="li"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            py={1}
            pr={1}
        >
            <div
                onClick={() => {
                    // dispatch(add({ date: date }));
                    dispatch(add({ name: date }));
                }}
                // onClick={() => {
                // alert(date, price);
                // }}
            >
                <MDBox lineHeight={1.125}>
                    <MDTypography
                        display="block"
                        variant="button"
                        fontWeight="medium"
                    >
                        {date}
                    </MDTypography>
                </MDBox>
                <MDBox display="flex" alignItems="center">
                    <MDTypography
                        variant="button"
                        fontWeight="regular"
                        color="text"
                    >
                        {price}
                    </MDTypography>
                </MDBox>
            </div>
        </MDBox>
    );
}

export default Menu;
