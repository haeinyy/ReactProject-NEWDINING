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

import DietItem from "layouts/dietMonth/components/dietItem";

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DietList(props) {
  const [loading, setLoading] = useState(false);
  const [diets, setDiets] = useState([]);
  const [len, setLen] = useState(null);
  const [tempList, setTempList] = useState([]);
  const [tempDate, setTempDate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = "/diets/diet?date=" + props.ddate;
        const response = await axios.get(res);
        setDiets(response.data);
        setLen(response.data.length);
        setTempList(response.data.sort((a,b) => a.course > b.course?1:-1));
        setTempDate(props.ddate);
      } catch (e) {
        console.log(e);
      }

      setLoading(false);
    };
    fetchData();
  }, [props.ddate]);

  if (len === 0) {
    return (
      <Card id="delete-account">
        <MDBox pt={1} pb={2} px={2}>
          <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
            <DietItem
            tempDate={tempDate}
            course="KOREAN"
            mainMenu="식단 정보가 없습니다. :("
            />
            <DietItem
            tempDate={tempDate}
            course="WESTERN"
            mainMenu="식단 정보가 없습니다. :("
            />
          </MDBox>
        </MDBox>
      </Card>
    );
  }

  return (
    <Card id="delete-account">
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {tempList.map((item,index) => {
            if (tempList.length === 1) {
              if (item.course === "WESTERN") {
                return <MDBox>
                  <DietItem key="7" tempDate={tempDate} course="KOREAN" mainMenu="식단 정보가 없습니다. :("/>
                  <DietItem key={index}
                  tempDate={tempDate}
                  course={item.course}
                  mainMenu={item.mainMenu.name}
                  sub1={item.subMenus[0].name}
                  sub2={item.subMenus[1].name}
                  sub3={item.subMenus[2].name}
                  sub4={item.subMenus[3].name}
                  sub5={item.subMenus[4].name}
                  dessert={item.dessert.name}
                  />
                  </MDBox>
              } else if (item.course === "KOREAN") {
                return <MDBox>
                  <DietItem key={index}
                  tempDate={tempDate}
                  course={item.course}
                  mainMenu={item.mainMenu.name}
                  sub1={item.subMenus[0].name}
                  sub2={item.subMenus[1].name}
                  sub3={item.subMenus[2].name}
                  sub4={item.subMenus[3].name}
                  sub5={item.subMenus[4].name}
                  dessert={item.dessert.name}
                  />
                  <DietItem key="7" tempDate={tempDate} course="WESTERN" mainMenu="식단 정보가 없습니다. :("/>
                  </MDBox>
              }
            } else if (tempList.length === 2) {
              return <DietItem key={index}
                tempDate={tempDate}
                course={item.course}
                mainMenu={item.mainMenu.name}
                sub1={item.subMenus[0].name}
                sub2={item.subMenus[1].name}
                sub3={item.subMenus[2].name}
                sub4={item.subMenus[3].name}
                sub5={item.subMenus[4].name}
                dessert={item.dessert.name}
                />
            }
            return <div></div>
	        })}
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default DietList;
