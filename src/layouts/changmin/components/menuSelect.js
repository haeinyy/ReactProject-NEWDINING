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

function MenuSelect({ name, id, price, noGutter }) {
    return (
        <MDBox
            component="li"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            py={1}
            pr={1}
            mb={noGutter ? 0 : 1}
        >
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
                    {price}
                </MDTypography>
            </MDBox>
            <MDBox
                display="flex"
                alignItems="center"
                lineHeight={1}
                ml={3}
                sx={{ cursor: "pointer" }}
            >
                <Icon fontSize="small">cancel</Icon>
            </MDBox>
        </MDBox>
    );
}

// Setting default values for the props of Invoice
MenuSelect.defaultProps = {
    noGutter: false,
};

// Typechecking props for the Invoice
MenuSelect.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    price: PropTypes.string,
    noGutter: PropTypes.bool,
};

export default MenuSelect;
