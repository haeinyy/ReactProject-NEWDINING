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

// api 연동
import React, { useState } from 'react';
import axios from 'axios';

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
import ShinsegaeNavbar from 'examples/Navbars/ShinsegaeNavbar';
import Footer from 'examples/Footer';
import DataTable from 'examples/Tables/DataTable';

// Data
import calorieTableData from 'layouts/calinfo/data/calorieTableData';
import { date } from 'yup';

function Tables() {
  const { columns: pColumns, rows: pRows } = calorieTableData();
  // const [data, setData] = useState(null);
  // const date = '20220925';
  // const url = '/diets/diet?date=' + date;

  // const res = await axios.get(url);
  // console.log(res.data);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ShinsegaeNavbar />
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
                bgColor="error"
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
                bgColor="info"
                coloredShadow="light"
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
              <MDBox
                // mx={2}
                mt={3}
                py={2}
                px={2}
                variant="gradient"
                bgColor="info"
                coloredShadow="light"
              >
                <MDTypography variant="h4" color="white" align="center">
                  Pie Chart
                </MDTypography>
              </MDBox>
              <PieChart
                data={[
                  { title: 'tan', value: 100, color: '#367E18' },
                  { title: 'dan', value: 250, color: '#FFE9A0' },
                  // { title: 'gi', value: 400, color: '#A5D1D9' },
                  { title: 'gi', value: 400, color: '#CC3636' },
                ]}
                // label={({ dataEntry }) => dataEntry.value + '%'}
                label={({ dataEntry }) =>
                  `${Math.round(dataEntry.percentage)} %`
                }
                // totalValue={100}
                lineWidth={40}
                lengthAngle={360}
                rounded
                animate
                labelStyle={{
                  fontSize: '7px',
                  fill: '#33333',
                }}
                labelPosition={80}
                // viewBoxSize={[150, 150]}
                radius={40}
                center={[50, 52]}
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
