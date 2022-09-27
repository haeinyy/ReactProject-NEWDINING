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
import CalorieTableData from 'layouts/calinfo/data/calorieTableData';

// Componenet
import Caltable from 'layouts/calinfo/component/caltable';
import Piechart from 'layouts/calinfo/component/piechart';

const tan = 0;
const dan = 0;
const gi = 0;
const totalcal = 0;
const date = '20220925';
const diet_course = 'KOREAN';

function Calinfo() {
  // const { columns: pColumns, rows: pRows } = calorieTableData();
  const [loading, setLoading] = useState(false);
  const [diets, setDiets] = useState([]);
  const [len, setLen] = useState(null);
  // const [totalcal, setTotlacal] = useState(null);
  const [tempList, setTempList] = useState([]);
  const [tempDate, setTempDate] = useState(null);

  // const date = '20220925';
  // const url = '/diets/diet?date=' + date;

  // const res = await axios.get(url);
  // console.log(res.data);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = '/diets/diet?date=' + date;
        const response = await axios.get(res);
        console.log(response.data);
        setLen(response.data.length);
        console.log(len);

        // 코스에 따라 식단 결정
        for (let i = 0; i < len; i++) {
          if (response.data[i].course === diet_course) {
            setDiets(response.data[i]);
          }
        }
        console.log(diets);

        setTempList(
          response.data.sort((a, b) => (a.course > b.course ? 1 : -1))
        );
        console.log(tempList);
        setTempDate(date);
      } catch (e) {
        console.log(e);
      }

      setLoading(false);
    };
    fetchData();
  }, [date]);

  // tan,dan,gi 계산

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ShinsegaeNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={1}>
          {/* table */}
          <Caltable tan={tan} dan={dan} gi={gi} totalcal={totalcal} />
          {/* <CalorieTableData tan={tan} dan={dan} gi={gi} /> */}
          {/* <Grid item xs={12}>
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
          </Grid> */}
          {/* pie chart */}
          <br />
          <Piechart tan={tan} dan={dan} gi={gi} />
          {/* <Grid item xs={12}>
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
            </Card>
          </Grid> */}
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Calinfo;
