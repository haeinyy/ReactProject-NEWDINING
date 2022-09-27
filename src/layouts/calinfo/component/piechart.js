/*
칼로리 정보 화면
*/

// api 연동
import React, { useEffect, useState } from 'react';
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

// Componenet
import Caltable from 'layouts/calinfo/component/caltable';

// const tan = 0;
// const dan = 0;
// const gi = 0;
// const { tan, dan, gi } = ingrident;
const totalcal = 0;
const date = '20220925';
const url = '/diets/diet?date=' + date;

// const Setting = () => {
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     axios({
//       method: 'get',
//       url: url,
//     })
//       .then((res) => {
//         setData(res.data);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }, []);
// };
// const [data, setData] = useState(null);

function Charts() {
  const { columns: pColumns, rows: pRows } = calorieTableData();

  // const date = '20220925';
  // const url = '/diets/diet?date=' + date;

  // const res = await axios.get(url);
  // console.log(res.data);

  return (
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
          label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
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
      </Card>
    </Grid>
  );
}

export default Charts;
