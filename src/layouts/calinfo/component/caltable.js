/*
칼로리 테이블
*/

// api 연동
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// @mui material components
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';

// Material Dashboard 2 React example components
import DataTable from 'examples/Tables/DataTable';

// Data
import calorieTableData from 'layouts/calinfo/data/calorieTableData';

// const tan = 0;
// const dan = 0;
// const gi = 0;
// const { tan, dan, gi } = ingrident;
// const totalcal = 0;
// const date = '20220925';
// const url = '/diets/diet?date=' + date;

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

function Tables() {
  const { columns: pColumns, rows: pRows } = calorieTableData();

  // const date = '20220925';
  // const url = '/diets/diet?date=' + date;

  // const res = await axios.get(url);
  // console.log(res.data);

  return (
    // table
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
  );
}

export default Tables;
