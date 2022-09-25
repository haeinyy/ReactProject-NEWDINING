import React from 'react';
import styled from "styled-components";
import moment from "moment";


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
    console.log("day:", moment().day(7));
    const dates = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    var theYear = today.getFullYear();
    var theMonth = today.getMonth();
    var theDate = today.getDate();
    var theDayOfWeek = today.getDay();

    // 이번 주 날짜 구하기
    const thisWeek = [];

    for (let i = 0; i < 7; i++) {
        var resultDay = new Date(theYear, theMonth, theDate + (i - theDayOfWeek));
        var mm = Number(resultDay.getMonth()) + 1;
        var dd = resultDay.getDate();

        mm = String(mm).length === 1 ? "0" + mm : mm;
        dd = String(dd).length === 1 ? "0" + dd : dd;

        thisWeek[i] = dd;
    }
    const arr = dates.map((date, idx)=>{
      if(thisWeek[idx] == day )
        return <span><div>{thisWeek[idx]}</div><div>{date}</div></span>
      else
        return <span><div color='red'>{thisWeek[idx]}</div><div color='red'>{date}</div></span>
    });

    return (
      <div>
        {/* <DayBlock>
            <span className="day">{day}</span>
            <div className="day__column">
                <span className="weekday">{dayName}</span>
                <span className="date__string">{dateString}</span>
            </div>
        </DayBlock> */}
        <CalendarBlock>
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