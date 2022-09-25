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
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";
import Calendar from "layouts/mainmenu/components/Calendar"
import ShinsegaeNavbar from "examples/Navbars/ShinsegaeNavBar";

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  return (
    <div>
      <ShinsegaeNavbar />
      <MDBox py={3}>
            <Calendar></Calendar>
      </MDBox>
      <Footer />
    </div>
  );
}

export default Dashboard;
