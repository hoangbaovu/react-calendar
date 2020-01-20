import React from 'react';
import styled from 'styled-components';

type Props = {
  date: number,
}

const Middle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Date = styled.p`
  color: ${props => props.theme.palette.black};
  font-size: 13.750em;
  font-weight: bold;
  margin: 0;

  @media (max-width: 468px) {
    font-size: 3.750em;
  }
`;

const CalendarBigDate = ({ date }: Props) => {
  return (
    <Middle>
      <Date>{date}</Date>
    </Middle>
  )
}

export default CalendarBigDate;