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
import axios from "axios";
import React, { useState, useEffect } from 'react';
import moment from "moment";

import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import Footer from "examples/Footer";
import MDButton from "components/MDButton";

// Data
import Calendar from "layouts/mainmenu/components/Calendar"
import ShinsegaeNavBar from "examples/Navbars/ShinsegaeNavBar";
import Menu from './components/Menu';
import { useNavigate } from 'react-router-dom';

function MainMenu(props) {
  const [clickDate, setClickDate] = useState(null);
  const [value, onChange] = useState(new Date());

  const adminButton = {
    // display: "flex",
    // justifyContent: "flex-end",
    float: "right",
  };

  const navigate = useNavigate();

  const onClickEditButton = () => {
    // 내 페이지전달해야함
    navigate('/dietMonth', {
    });
  };
  
  return (
    <div>
      <ShinsegaeNavBar />
      <MDBox py={2}>
        <Calendar setData={setClickDate}></Calendar>
      </MDBox>
      <MDBox py={1.5}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={3}>
            <MDBox MDBox ml={3} mr={3} mb={1.5} pt={1}>
              <Menu
                // date={ moment(value).format("YYYYMMDD") }
                date={ clickDate===null?moment(value).format("YYYYMMDD"):clickDate }
              />
            </MDBox>
          </Grid>
          
        </Grid>
        <MDButton style={adminButton} color="error" onClick={onClickEditButton}>관리자</MDButton>
      </MDBox>
      <Footer />
    </div>
  );
}

export default MainMenu;
