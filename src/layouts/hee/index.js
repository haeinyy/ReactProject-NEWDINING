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
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import ShinsegaeNavbar from "examples/Navbars/ShinsegaeNavbar";

// Dashboard components
import BillingInformation from "layouts/hee/components/BillingInformation";
import { useLocation } from "react-router-dom";

function Dashboard() {
  const styleObj = {
    margin: "20px"
  }

  // TODO : 데이터 전달하면서 페이지 이동
  // 1. useLocation 훅 취득
  const location = useLocation();

  // 2. location.state 에서 파라미터 취득
  const tempDate = location.state.tempDate.tempDate;
  const course = location.state.course.course;

  console.log("템프날짜", tempDate);
  console.log("코스", course);
    
  return (
    <div>
      <ShinsegaeNavbar />
      <MDBox mb={3} style={styleObj}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <BillingInformation />
          </Grid>
        </Grid>
      </MDBox>
    </div>
  );
}

export default Dashboard;
