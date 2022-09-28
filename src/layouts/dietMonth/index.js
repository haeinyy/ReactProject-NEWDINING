import React, { useState } from 'react';
import Calendar from 'react-calendar';
//import 'react-calendar/dist/Calendar.css'; // css import
import 'layouts/dietMonth/calendar.css';
import moment from 'moment';
import 'moment/locale/ko'

// @mui material components
import Grid from "@mui/material/Grid";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";

import ShinsegaeNavbar from "examples/Navbars/ShinsegaeNavbar";
import DietList from "layouts/dietMonth/components/dietList";

function DietMonth() {
  const [value, onChange] = useState(new Date());
  const styleObj = {
    margin: "20px"
  }
  const styleObj2 = {
    textAlign: "center"
  }
  moment.locale('ko', {weekdays: ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],
  weekdaysShort: ["일","월","화","수","목","금","토"],});

  return (
    <div>
      <ShinsegaeNavbar />
      <Calendar onChange={onChange} value={value} />
        <br></br>
        <div className="text-gray-500 mt-4" style={styleObj2}>
           {moment(value).format("YYYY년 MM월 DD일 dddd")} 
        </div>
        <div>
          <MDBox mb={3} style={styleObj}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={7}>
                <DietList ddate={ moment(value).format("YYYYMMDD") }/>
                  <br></br>
              </Grid>
            </Grid>
          </MDBox>
        </div>
    </div>
  );
}

export default DietMonth;