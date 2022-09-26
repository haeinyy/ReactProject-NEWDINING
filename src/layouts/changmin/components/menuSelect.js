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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import { useDispatch } from "react-redux";
import { remove } from "../redux/menu";
function MenuSelect({ name, calorie }) {
    console.log(calorie);
    const dispatch = useDispatch();
    return (
        <MDBox
            component="li"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            py={1}
            pr={1}
            // mb={noGutter ? 0 : 1}
        >
            <div>
                <MDBox lineHeight={1.125}>
                    <MDTypography
                        display="block"
                        variant="button"
                        fontWeight="medium"
                    >
                        {name}
                    </MDTypography>
                </MDBox>
                <MDBox display="flex" alignItems="center">
                    <MDTypography
                        variant="button"
                        fontWeight="regular"
                        color="text"
                    >
                        {calorie.carbonate} + {calorie.protein} + {calorie.fat}
                    </MDTypography>
                </MDBox>
            </div>
            <MDBox
                display="flex"
                alignItems="center"
                lineHeight={1}
                ml={3}
                sx={{ cursor: "pointer" }}
            >
                <Icon
                    fontSize="small"
                    onClick={() => {
                        dispatch(remove(name));
                    }}
                >
                    cancel
                </Icon>
            </MDBox>
        </MDBox>
    );
}

// Typechecking props for the Invoice
MenuSelect.propTypes = {
    name: PropTypes.string.isRequired,
};

export default MenuSelect;
