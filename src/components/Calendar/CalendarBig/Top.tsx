import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  display: flex;
  background: ${props => props.theme.palette.primary};
  font-size: 1.125em;
  flex-direction: column;
  align-items: center;
  padding: 9px 0;
`;

const Year = styled.p`
  color: ${props => props.theme.palette.white};
  margin: 0 0 5px;
`;

const Month = styled.p`
  color: ${props => props.theme.palette.white};
  font-weight: bold;
  margin: 0;
  text-transform: uppercase;
`;

type Props = {
  year: number,
  month: string,
}

const CalendarBigTop = ({ year, month }: Props) => {
  return (
    <Nav>
      <Year>{year}</Year>
      <Month>{month}</Month>
    </Nav>
  )
}

export default CalendarBigTop;