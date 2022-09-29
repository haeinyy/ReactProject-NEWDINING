/*
칼로리 정보 화면
*/

// api 연동
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ShinsegaeNavbar from "examples/Navbars/ShinsegaeNavbar";
import Footer from "examples/Footer";

// Componenet
import Caltable from "layouts/calinfo/component/caltable";
import Piechart from "layouts/calinfo/component/piechart";
import { DensitySmall } from "@mui/icons-material";

// var total_tan = 0;
// var total_dan = 0;
// var total_gi = 0;
// var totalcal = 0;
// var allcalarray = [];
// const date = '';
// const diet_course = '';
var allcalarray = [];
const weekdays = Array("일", "월", "화", "수", "목", "금", "토");

function Calinfo() {
    const [loading, setLoading] = useState(false);
    const [diets, setDiets] = useState({});
    const [totaltan, setTotaltan] = useState(0);
    const [totaldan, setTotaldan] = useState(0);
    const [totalgi, setTotalgi] = useState(0);
    const [totalcal, setTotlacal] = useState(0);
    // var total_tan = 0;
    // var total_dan = 0;
    // var total_gi = 0;
    var total_cal = 0;

    // allcalarray = [];
    // // total_tan = 0;
    // // total_dan = 0;
    // // total_gi = 0;
    // // totalcal = 0;
    // const [totalcal, setTotlacal] = useState(null);
    // const [tempList, setTempList] = useState([]);
    // const [tempDate, setTempDate] = useState(null);

    // 1. 넘어온 데이터
    const location = useLocation();

    // 2. location.state 에서 파라미터 취득
    const date = location.state.tempDate.tempDate;
    const diet_course = location.state.course.course;
    // date = tempDate;
    // diet_course = course;
    console.log(date + "-" + diet_course);

    allcalarray = [];
    var total_tan = 0;
    var total_dan = 0;
    var total_gi = 0;
    // totalcal = 0;
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const res = "/diets/diet?date=" + date;
        const response = await axios.get(res);
        console.log(response.data);
        setDiets(response.data);
        // console.log(diets);

        // 코스에 따라 식단 결정
        console.log(response.data.length);
        for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].course === diet_course) {
                allcalarray.push(response.data[i].mainMenu.calorie);
                allcalarray.push(response.data[i].dessert.calorie);

                for (let j = 0; j < response.data[i].subMenus.length; j++) {
                    allcalarray.push(response.data[i].subMenus[j].calorie);
                }

                // break;
            }
        }
        // console.log(allcalarray.length);
        for (let j = 0; j < allcalarray.length; j++) {
            total_tan += allcalarray[j].carbonate;
            total_dan += allcalarray[j].protein;
            total_gi += allcalarray[j].fat;
        }

        // 총 칼로리 계산
        total_cal = total_tan * 4 + total_dan * 4 + total_gi * 9;
        setTotaltan(total_tan);
        setTotaldan(total_dan);
        setTotalgi(total_gi);
        setTotlacal(total_cal);
        // console.log(allcalarray);
        // console.log(total_tan + " /" + total_dan + "/" + total_gi);
        // allcalarray = [];
        // setTempDate(date);
    };

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <ShinsegaeNavbar />
            <MDBox pt={6} pb={3}>
                <Grid container spacing={1}>
                    {/* table */}
                    <Caltable
                        tan={totaltan}
                        dan={totaldan}
                        gi={totalgi}
                        totalcal={totalcal}
                        // date={date}
                        month={date.substring(5, 6)}
                        day={date.substring(6)}
                        week={
                            weekdays[
                                new Date(
                                    date.substring(0, 4) +
                                        "-" +
                                        date.substring(4, 6) +
                                        "-" +
                                        date.substring(6, 8)
                                ).getDay()
                            ]
                        }
                    />
                    <br />
                    <Piechart tan={totaltan} dan={totaldan} gi={totalgi} />
                </Grid>
            </MDBox>
            <Footer />
        </DashboardLayout>
    );
}

export default Calinfo;
