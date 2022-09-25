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
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Billing page components
import DietItem from "layouts/dietList/components/dietItem";

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function DList(props) {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log("날짜 : ", props.ddate);

  useEffect(() => {
    // async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);


      try {
        const res = "/diets/diet?date=" + props.ddate;
        const response = await axios.get(res);
        //setArticles(response.data.articles);
        console.log("데이터 : ", response.data[0]);
      } catch (e) {
        console.log(e);
      }

      setLoading(false);
    };
    fetchData();
  }, [props.ddate]);

  return (
    <Card id="delete-account">
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <DietItem
            name="ASIAN"
            company="viking burrito"
            email="oliver@burrito.com"
            vat="FRB1235476"
          />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default DList;
