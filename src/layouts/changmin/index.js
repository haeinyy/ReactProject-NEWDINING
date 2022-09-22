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
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ShinsegaeNavbar from "examples/Navbars/ShinsegaeNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

function Dashboard() {
    const { sales, tasks } = reportsLineChartData;

    return (
        // <DashboardLayout>
        //     <ShinsegaeNavbar />
        //     <p>창민의 페이지1111</p>
        //     <MDBox py={3}>
        //         <MDBox mt={4.5}>
        //             <Grid container spacing={3}>
        //                 <Grid item xs={12} md={6} lg={4}>
        //                     <MDBox mb={3}>
        //                         <ReportsBarChart
        //                             color="info"
        //                             title="website views"
        //                             description="Last Campaign Performance"
        //                             date="campaign sent 2 days ago"
        //                             chart={reportsBarChartData}
        //                         />
        //                     </MDBox>
        //                 </Grid>
        //             </Grid>
        //         </MDBox>
        //     </MDBox>
        //     <Footer />
        // </DashboardLayout>
        <div>
            <ShinsegaeNavbar />
            <p>changmin page</p>
        </div>
    );
}

export default Dashboard;
