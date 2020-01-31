import React from 'react';
import CalendarBigTop from './Top';
import CalendarBigMiddle from './Middle';
import CalendarBigBottom from './Bottom';
import styled from 'styled-components';
import { useSelector } from "react-redux";

type CalendarBigProps = {
  screen?: string,
}

const CalendarBigDiv = styled.div<CalendarBigProps>`
  display: flex;
  height: ${props => (props.screen === 'mobile' ? 'calc(100vh - 70px)' : '100vh')};
  flex-direction: column;
  background: #f8f8f8;
`;

const CalendarBig = ({ screen }: CalendarBigProps) => {

  const dateState = useSelector((state: any) => state.calendar.dateSelected);

  const getYear = dateState.format('YYYY');
  const getMonth = dateState.format('MMMM');
  const getDate = dateState.format('DD');
  const getWeekday = dateState.format('dddd');
  const getWeekOfYear = dateState.format('ww');
  const getDayOfYear = dateState.format('DDD');

  return (
    <CalendarBigDiv screen={screen}>
      <CalendarBigTop month={getMonth} year={getYear} />
      <CalendarBigMiddle date={getDate} />
      <CalendarBigBottom weekday={getWeekday} weekOfYear={getWeekOfYear} dayOfYear={getDayOfYear} />
    </CalendarBigDiv>
  )
}

export default CalendarBig;