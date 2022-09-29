
import axios from "axios"
import Grid from "@mui/material/Grid";
import React, { useState, useEffect } from 'react';
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DietInfoCard from "examples/Cards/InfoCards/DietInfoCard";



function Menu(props) {
    const koreanDiets = [];
    const westernDiets = [];

    const [diets, setDiets] = useState([]);
    const [len, setLen] = useState(null);
    const [tempList, setTempList] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const url = '/diets/diet?date=' + props.date;
            try{axios
            .get(url)
            .then((response) => {
                setDiets(response.data);
                console.log(diets);
                koreanDiets.push(response.data[0].course);
                koreanDiets.push(response.data[0].mainMenu.name);

                for(let j=0;j<response.data[0].subMenus.length;j++){
                    koreanDiets.push(response.data[0].subMenus[j].name);
                }
                koreanDiets.push(response.data[0].dessert.name); 
            });
        }catch(e){
            console.log(e);
        }
        };
    fetchData();
    }, [props.date]);

    
    return (
        
        <MDBox MDBox mb={1.5}>
            {!diets && <div>식단 정보를 가져오지 못했습니다.</div>}
            {diets.map((item,index) => {
                return    <Grid pb={2}  ><DietInfoCard
                        course={item.course}
                        date={props.date}
                        mainMenu={item.mainMenu.name}
                        subMenu1={item.subMenus[0].name}
                        subMenu2={item.subMenus[1].name}
                        subMenu3={item.subMenus[2].name}
                        subMenu4={item.subMenus[3].name}
                        subMenu5={item.subMenus[4].name}
                />
                </Grid>
        })}
        </MDBox>


        // <MDBox pb={2} px={2} textAlign="center" lineHeight={1.25}>
        //     {!diets && <div>식단 정보를 가져오지 못했습니다.</div>}
        //     {diets.map((item,index) => {
                
        //         return  <MDTypography variant="h4" fontWeight="medium" textTransform="capitalize">
        //                     {item.course}
        //                 </MDTypography>
                
            
        // })}
        // </MDBox>
    );
};

export default Menu;