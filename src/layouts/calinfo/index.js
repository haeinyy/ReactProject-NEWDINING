/*
칼로리 정보 화면
*/

// api 연동
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// @mui material components
import Grid from '@mui/material/Grid';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';

// Material Dashboard 2 React example components
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import ShinsegaeNavbar from 'examples/Navbars/ShinsegaeNavbar';
import Footer from 'examples/Footer';

// Componenet
import Caltable from 'layouts/calinfo/component/caltable';
import Piechart from 'layouts/calinfo/component/piechart';

var total_tan = 0;
var total_dan = 0;
var total_gi = 0;
var totalcal = 0;
const allcalarray = [];
const date = '20220925';
const diet_course = 'KOREAN';
const weekdays = Array('일', '월', '화', '수', '목', '금', '토');

function Calinfo() {
  const [loading, setLoading] = useState(false);
  const [diets, setDiets] = useState([]);
  const [len, setLen] = useState(null);
  // const [totalcal, setTotlacal] = useState(null);
  const [tempList, setTempList] = useState([]);
  const [tempDate, setTempDate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = '/diets/diet?date=' + date;
        const response = await axios.get(res);
        console.log(response.data);

        // 코스에 따라 식단 결정
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].course === diet_course) {
            setDiets(response.data[i]);

            // tan/dan/gi 합계
            allcalarray.push(response.data[i].mainMenu.calorie);
            allcalarray.push(response.data[i].dessert.calorie);

            for (let j = 0; j < response.data[i].subMenus.length; j++) {
              allcalarray.push(response.data[i].subMenus[j].calorie);
            }

            break;
          }
        }
        for (let i = 0; i < allcalarray.length; i++) {
          total_tan += allcalarray[i].carbonate;
          total_dan += allcalarray[i].protein;
          total_gi += allcalarray[i].fat;
        }

        // 총 칼로리 계산
        totalcal = total_tan * 4 + total_dan * 4 + total_gi * 9;

        setTempDate(date);
      } catch (e) {
        console.log(e);
      }

      setLoading(false);
    };
    fetchData();
  }, [date]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ShinsegaeNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={1}>
          {/* table */}
          <Caltable
            tan={total_tan}
            dan={total_dan}
            gi={total_gi}
            totalcal={totalcal}
            // date={date}
            month={date.substring(5, 6)}
            day={date.substring(6)}
            week={
              weekdays[
                new Date(
                  date.substring(0, 4) +
                    '-' +
                    date.substring(4, 6) +
                    '-' +
                    date.substring(6, 8)
                ).getDay()
              ]
            }
          />
          <br />
          <Piechart tan={total_tan} dan={total_dan} gi={total_gi} />
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Calinfo;
