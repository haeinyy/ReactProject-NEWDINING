
import styled from "styled-components";
import moment from "moment";
import React, { useState, useEffect } from 'react';
import './cal.css';


// const index = (props) => {
function index(props) {
  
  
    const DayBlock = styled.div`
    display: flex;
    align-items: flex-start;
    color: #d70c19;
    .day__column {
      display: flex;
      flex-direction: column;
      font-size: 2rem;
      margin-left: 1rem;
    }
    .day {
      font-size: 4rem;
      font-weight: 500;
    }
    .date__string {
      font-weight: 200;
    }
  `;

    const CalendarBlock = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 1rem;
    
  `;
    const DatesBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;
    const today = new Date();
    const dateString = today.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
    });

    const dayName = today.toLocaleDateString("en-US", { weekday: "long" });
    const day = today.toLocaleDateString("en-US", { day: "numeric" });
    const dates = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    var theYear = today.getFullYear();
    var theMonth = today.getMonth();
    var theDate = today.getDate();
    var theDayOfWeek = today.getDay();

    // 이번 주 날짜 구하기
    const thisWeek = [];

    for (let i = 0; i < 7; i++) {
        var resultDay = new Date(theYear, theMonth, theDate + (i - theDayOfWeek));
        var mm = Number(resultDay.getMonth()+1);
        var dd = resultDay.getDate();

        mm = String(mm).length === 1 ? "0" + mm : mm;
        dd = String(dd).length === 1 ? "0" + dd : dd;

        thisWeek[i] = dd;
    }

    
    const arr = dates.map((date, idx)=>{
      if(thisWeek[idx] == day )
        return <span className="cal_today cal" id={idx}><div key={idx} data-key={idx} className="cal_date cal">{thisWeek[idx]}</div><div data-key={idx} className="cal_day cal">{date}</div></span>
      else
        return <span className="cal_notToday cal" id={idx}><div key={idx} data-key={idx} className="cal_date cal">{thisWeek[idx]}</div><div data-key={idx} className="cal_day cal">{date}</div></span>
    });


    function click_date(e) {

      var cal_list = document.getElementsByClassName("cal");
      var idx = e.target.getAttribute('data-key');

      console.log(idx);
      var click_day = thisWeek[idx];
      var click_month=Number(theMonth)+1;
      var click_year=theYear;
      if(click_day==="01"){
        if(click_month===12){
          click_month = "01";
          click_year = Number(click_year+1);
        }else{
          click_month = click_month+1;
        }
      }
      click_month = String(click_month).length === 1 ? "0" + click_month : click_month;
      
      //var click_month = click_day==="01"?Number(theMonth)+2:Number(theMonth)+1;
      var clicked_full_date = click_year +""+click_month +""+ click_day;
      console.log(click_year +""+click_month +""+ click_day);
      
      var clicked_date = document.getElementById(idx);    //span
      // if (clicked_date.classList[2] === "clicked") {
      //   //clicked_date.classList.add("clicked");
      //   clicked_date.classList.remove("clicked");
      // } else {
        for (var i = 0; i < cal_list.length; i++) {
          cal_list[i].classList.remove("clicked");
        }

        clicked_date.classList.add("clicked");
      //}

      console.log("현재 idx : "+idx + " / "+ clicked_date.classList);
      props.setData(clicked_full_date);
    }
    return (
      <div>
        {/* <DayBlock>
            <span className="day">{day}</span>
            <div className="day__column">
                <span className="weekday">{dayName}</span>
                <span className="date__string">{dateString}</span>
            </div>
        </DayBlock> */}
        <CalendarBlock onClick={(e) => click_date(e)}>
            {arr}
            {/* {dates.map((date, idx) => (
                <DatesBlock key={idx}>
                  <span>{date}</span>
                  <span>{thisWeek[idx]}</span>
                </DatesBlock>
            ))} */}
        </CalendarBlock>
      </div>
    );
};

export default index;