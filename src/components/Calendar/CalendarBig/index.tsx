import React from 'react';
import CalendarBigTop from './Top';
import CalendarBigMiddle from './Middle';
import CalendarBigBottom from './Bottom';
import styled from 'styled-components';

const CalendarBigDiv = styled.div`
  display: flex;
  height: 100vh;
  background: #f8f8f8;
  flex-direction: column;
`;

const CalendarBig = () => {

  const date = new Date();
  const getYear = date.getFullYear();
  const getMonth = date.getMonth();

  const month = [];
  month[0] = "Tháng 1";
  month[1] = "Tháng 2";
  month[2] = "Tháng 3";
  month[3] = "Tháng 4";
  month[4] = "Tháng 5";
  month[5] = "Tháng 6";
  month[6] = "Tháng 7";
  month[7] = "Tháng 8";
  month[8] = "Tháng 9";
  month[9] = "Tháng 10";
  month[10] = "Tháng 11";
  month[11] = "Tháng 12";

  return (
    <CalendarBigDiv>
      <CalendarBigTop month={month[getMonth]} year={getYear} />
      <CalendarBigMiddle />
      <CalendarBigBottom />
    </CalendarBigDiv>
  )
}

export default CalendarBig;