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

// prop-types is library for typechecking of props
// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import { useNavigate } from 'react-router-dom';

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function DietInfoCard({ color, icon, date, course, description, mainMenu, subMenu1, subMenu2, subMenu3, subMenu4, subMenu5, dessert }) {
  const navigate = useNavigate();
  
  const onClickEditButton = () => {
    // 내 페이지전달해야함
    navigate('/calinfo', {
      state: {
        tempDate: { date },
        course: { course },
      },
    });
    alert(date + ' / ' + course);
  };
  
  return (
    <Card pb={3} onClick={onClickEditButton}>
      <MDBox p={2} mx={3} display="flex" justifyContent="center">
      </MDBox>
      <MDBox pb={3} px={2} textAlign="center" lineHeight={1.25}>
        <MDTypography variant="h4" fontWeight="medium" textTransform="capitalize" color="error">
          {course}
        </MDTypography>
        <Divider />
        <MDTypography variant="h5" fontWeight="medium">
            {mainMenu}
        </MDTypography> 
        <MDTypography variant="h6" fontWeight="medium">
            {subMenu1}
        </MDTypography> 
        <MDTypography variant="h6" fontWeight="medium">
            {subMenu2}
        </MDTypography> 
        <MDTypography variant="h6" fontWeight="medium">
            {subMenu3}
        </MDTypography> 
        <MDTypography variant="h6" fontWeight="medium">
            {subMenu4}
        </MDTypography> 
        <MDTypography variant="h6" fontWeight="medium">
            {subMenu5}
        </MDTypography> 
        <MDTypography variant="h6" fontWeight="medium">
            {dessert}
        </MDTypography> 
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of DefaultInfoCard
DietInfoCard.defaultProps = {
  color: "info",
  value: "",
  description: "",
};

// Typechecking props for the DefaultInfoCard
// DietInfoCard.propTypes = {
//   color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
//   icon: PropTypes.node.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string,
//   value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
// };

export default DietInfoCard;
