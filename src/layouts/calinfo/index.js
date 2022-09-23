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

import { PieChart } from 'react-minimal-pie-chart';

// @mui material components
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
import MDSnackbar from 'components/MDSnackbar';
import MDAlert from 'components/MDAlert';
import MDButton from 'components/MDButton';

// Material Dashboard 2 React example components
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import Footer from 'examples/Footer';
import DataTable from 'examples/Tables/DataTable';

// Data
import calorieTableData from 'layouts/calinfo/data/calorieTableData';

function Tables() {
  const { columns: pColumns, rows: pRows } = calorieTableData();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={2}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white" align="center">
                  9월 22일 (목)
                </MDTypography>
              </MDBox>

              <MDBox
                // mx={2}
                mt={3}
                py={2}
                px={2}
                variant="gradient"
                bgColor="success"
                coloredShadow="info"
              >
                <MDTypography variant="h4" color="white" align="center">
                  500kcal
                </MDTypography>
              </MDBox>

              <MDBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <PieChart
                data={[
                  { title: 'tan', value: 60, color: '#E38627' },
                  { title: 'dan', value: 20, color: '#C13C37' },
                  { title: 'gi', value: 20, color: '#6A2135' },
                ]}
                label={({ dataEntry }) => dataEntry.value + '%'}
                lineWidth={40}
                lengthAngle={360}
                rounded
                animate
                labelStyle={{
                  fontSize: '9px',
                  fill: '#33333',
                }}
                labelPosition={80}
              />
              ;
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
